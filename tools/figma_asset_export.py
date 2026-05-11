#!/usr/bin/env python3
"""
Export every reusable image/component from a Figma file into a local folder.

Usage:
    export FIGMA_TOKEN=<your token>                   # from figma.com → Settings → Security
    python figma_asset_export.py <file_key> [out_dir]

Example:
    python figma_asset_export.py deO3tvKuksJj88CzSvvCij napster-assets

What it does
------------
1. Walks the entire document tree via /v1/files/{key}
2. Collects two kinds of exportable nodes:
     a. Any node with `exportSettings` (explicitly marked for export in Figma)
     b. Any COMPONENT or frame named like a real asset (not wireframe/grid/scratch)
3. Also downloads every bitmap fill via /v1/files/{key}/images (raw source images)
4. Requests render URLs in batches of 100 via /v1/images/{key}
5. Downloads + saves with human-friendly filenames
6. Writes manifest.json mapping filename → metadata

Deps:
    pip install requests
"""

import os, sys, re, json, time, hashlib, pathlib, urllib.parse
from concurrent.futures import ThreadPoolExecutor, as_completed
import requests

API = "https://api.figma.com/v1"
TOKEN = os.environ.get("FIGMA_TOKEN")
if not TOKEN:
    sys.exit("Set FIGMA_TOKEN env var (figma.com → Settings → Security → Personal access tokens).")

HEADERS = {"X-Figma-Token": TOKEN}

# ---------- filters ----------
SKIP_NAME_RE = re.compile(
    r"\b(wireframe|redline|grid|scratch|old|archive|todo|backup|copy of|working|wip)\b",
    re.IGNORECASE,
)
# Node types we care about for export-as-image
EXPORTABLE_TYPES = {"COMPONENT", "COMPONENT_SET", "FRAME", "INSTANCE", "GROUP"}

# ---------- helpers ----------
def slug(s: str, maxlen: int = 60) -> str:
    s = re.sub(r"[^a-zA-Z0-9]+", "-", s.strip()).strip("-").lower()
    return (s or "asset")[:maxlen]


def walk(node, path, out):
    """Collect candidate nodes from the tree."""
    name = node.get("name", "")
    ntype = node.get("type", "")
    node_id = node.get("id")
    full_path = path + [name] if name else path

    has_export = bool(node.get("exportSettings"))
    is_named_asset = (
        ntype in EXPORTABLE_TYPES
        and name
        and not SKIP_NAME_RE.search(name)
        and not name.startswith("_")
    )

    if has_export or (is_named_asset and ntype in {"COMPONENT", "COMPONENT_SET"}):
        out.append({
            "id": node_id,
            "name": name,
            "type": ntype,
            "path": "/".join(full_path[:-1]),  # page + parents, excluding self
            "has_export": has_export,
        })

    for child in node.get("children", []) or []:
        walk(child, full_path, out)


def download(url: str, dest: pathlib.Path, retries: int = 3):
    for attempt in range(retries):
        try:
            r = requests.get(url, timeout=60)
            r.raise_for_status()
            dest.write_bytes(r.content)
            return len(r.content)
        except Exception as e:
            if attempt == retries - 1:
                print(f"  FAIL {dest.name}: {e}")
                return 0
            time.sleep(1.5 ** attempt)


def main():
    if len(sys.argv) < 2:
        sys.exit("Usage: figma_asset_export.py <file_key> [out_dir]")
    file_key = sys.argv[1]
    out_dir = pathlib.Path(sys.argv[2] if len(sys.argv) > 2 else "figma-assets")
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "rendered").mkdir(exist_ok=True)
    (out_dir / "raw-images").mkdir(exist_ok=True)

    # 1. File tree
    print(f"→ Fetching file tree for {file_key} …")
    r = requests.get(f"{API}/files/{file_key}", headers=HEADERS, timeout=120)
    r.raise_for_status()
    doc = r.json()["document"]

    # 2. Walk pages → candidate nodes
    candidates = []
    for page in doc.get("children", []):
        walk(page, [page["name"]], candidates)
    print(f"→ {len(candidates)} exportable nodes found")

    # 3. Request render URLs in batches of 100, per format
    def request_render(ids, fmt, scale):
        if not ids:
            return {}
        params = {"ids": ",".join(ids), "format": fmt, "scale": scale}
        url = f"{API}/images/{file_key}?" + urllib.parse.urlencode(params)
        r = requests.get(url, headers=HEADERS, timeout=180)
        r.raise_for_status()
        return r.json().get("images", {})

    # Heuristic: try PNG @2x for all candidates; if name hints vector, also try SVG
    VECTOR_HINT_RE = re.compile(r"(icon|logo|mark|glyph|vector|illustration|outline)", re.IGNORECASE)

    png_ids = [c["id"] for c in candidates]
    svg_ids = [c["id"] for c in candidates if VECTOR_HINT_RE.search(c["name"])]

    png_urls = {}
    for i in range(0, len(png_ids), 100):
        chunk = png_ids[i:i+100]
        print(f"  PNG batch {i//100 + 1}/{(len(png_ids)+99)//100}")
        png_urls.update(request_render(chunk, "png", 2))
        time.sleep(0.3)

    svg_urls = {}
    for i in range(0, len(svg_ids), 100):
        chunk = svg_ids[i:i+100]
        print(f"  SVG batch {i//100 + 1}/{(len(svg_ids)+99)//100}")
        svg_urls.update(request_render(chunk, "svg", 1))
        time.sleep(0.3)

    # 4. Download concurrently
    manifest = []
    seen_hashes = set()
    print(f"→ Downloading {len(png_urls)} PNGs + {len(svg_urls)} SVGs …")
    with ThreadPoolExecutor(max_workers=8) as ex:
        futures = {}
        for c in candidates:
            page = c["path"].split("/")[0] if c["path"] else "root"
            base = f"{slug(page)}--{slug(c['name'])}"
            if c["id"] in svg_urls and svg_urls[c["id"]]:
                dest = out_dir / "rendered" / f"{base}.svg"
                futures[ex.submit(download, svg_urls[c["id"]], dest)] = (c, dest, "svg")
            if c["id"] in png_urls and png_urls[c["id"]]:
                dest = out_dir / "rendered" / f"{base}.png"
                futures[ex.submit(download, png_urls[c["id"]], dest)] = (c, dest, "png")

        for fut in as_completed(futures):
            c, dest, fmt = futures[fut]
            size = fut.result() or 0
            if size == 0:
                continue
            h = hashlib.md5(dest.read_bytes()).hexdigest()
            if h in seen_hashes:
                dest.unlink()
                continue
            seen_hashes.add(h)
            manifest.append({
                "file": str(dest.relative_to(out_dir)),
                "node_id": c["id"],
                "name": c["name"],
                "page_path": c["path"],
                "type": c["type"],
                "format": fmt,
                "size_bytes": size,
            })

    # 5. Raw image fills (the actual uploaded photos)
    print("→ Fetching raw image fills …")
    r = requests.get(f"{API}/files/{file_key}/images", headers=HEADERS, timeout=60)
    r.raise_for_status()
    raw_map = r.json().get("meta", {}).get("images", {})
    print(f"   {len(raw_map)} raw bitmap fills")
    with ThreadPoolExecutor(max_workers=8) as ex:
        futures = {}
        for ref, url in raw_map.items():
            dest = out_dir / "raw-images" / f"{ref}.png"
            futures[ex.submit(download, url, dest)] = (ref, dest)
        for fut in as_completed(futures):
            ref, dest = futures[fut]
            size = fut.result() or 0
            if size == 0:
                continue
            h = hashlib.md5(dest.read_bytes()).hexdigest()
            if h in seen_hashes:
                dest.unlink()
                continue
            seen_hashes.add(h)
            manifest.append({
                "file": str(dest.relative_to(out_dir)),
                "image_ref": ref,
                "format": "png",
                "size_bytes": size,
                "source": "raw-fill",
            })

    # 6. Manifest
    (out_dir / "manifest.json").write_text(json.dumps(manifest, indent=2))
    print(f"✓ Done. {len(manifest)} files in {out_dir}/")
    print(f"  Rendered nodes: {len(list((out_dir/'rendered').glob('*')))}")
    print(f"  Raw images:     {len(list((out_dir/'raw-images').glob('*')))}")
    print(f"  Manifest:       {out_dir / 'manifest.json'}")


if __name__ == "__main__":
    main()
