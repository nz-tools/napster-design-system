# Figma asset export — for Claude Code

Pulls every reusable image and named component out of a Figma file, flattened into a local folder with a JSON manifest.

## When to use

The Napster website Figma is 5 GB — too big to upload here. Instead, run this locally (or in Claude Code) and upload just the resulting `napster-assets.zip`.

## Setup

1. **Get a Figma token**
   Figma → Settings → Security → Personal access tokens → **Generate new token**
   Scope needed: `file_content:read`
   Copy the token — you only see it once.

2. **Install deps**
   ```bash
   pip install requests
   ```

## Run it

```bash
export FIGMA_TOKEN=<your token>
python tools/figma_asset_export.py deO3tvKuksJj88CzSvvCij napster-assets
```

The file key (`deO3tvKuksJj88CzSvvCij`) is the segment of the Figma URL after `/design/`.

## What you get

```
napster-assets/
  rendered/           # PNG @2x of every named component + anything marked "export"
    consumer-page--hero-guitar.png
    consumer-page--hero-guitar.svg    # if node name hints vector
    view-page--device-front.png
    ...
  raw-images/         # every bitmap fill uploaded to the file, by hash
    abc123def.png
    ...
  manifest.json       # filename → {node id, page path, type, size}
```

Dedupes by MD5 so you don't get the same photo twice.

## Then

```bash
zip -r napster-assets.zip napster-assets
# upload napster-assets.zip to the chat
```

## Tuning

If the first run pulls too much noise (wireframes, redlines), edit the `SKIP_NAME_RE` regex at the top of the script to add more keywords. The default already skips:
`wireframe, redline, grid, scratch, old, archive, todo, backup, copy of, working, wip`

If it misses things, the filter for named assets only emits `COMPONENT` and `COMPONENT_SET` nodes (plus anything with explicit `exportSettings`). Loosen by adding `FRAME` to the `is_named_asset` condition if you want more.

## Troubleshooting

- **403 on render endpoint**: token probably lacks `file_content:read` scope.
- **Script hangs on a big file**: the initial `/v1/files/` call can take 60–120s for a 5GB file. That's normal.
- **Missing pages**: branches aren't fetched by default. If the assets live in a branch, add `?branch_data=true` to the file fetch and walk `branches` too.

## Theme validation

Run this before shipping mode-token changes:

```bash
npm run validate:themes
```

The validator checks light-token peer coverage, raw dark-only alpha literals outside token selectors, and the WCAG contrast pairs declared in `DESIGN.md` §2.
