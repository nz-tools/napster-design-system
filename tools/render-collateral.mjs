#!/usr/bin/env node
/*
 * render-collateral.mjs — render every collateral/**\/*.html to a print PDF.
 *
 * - Letter portrait, no margins, printBackground, waits for document.fonts.ready
 *   so Inter / IBM Plex Mono are embedded (not a DejaVu fallback).
 * - Build-time CLAIM INJECTION: {{claims.products.napster-pulse.pricing}}-style
 *   placeholders are resolved from claims/claims.json at render time, so no
 *   template hard-codes a claim string. Dotted paths incl. array indices work
 *   ({{claims.products.napster-pulse.shipped_features.0}}).
 * - Output: dist/collateral/<basename>.pdf (gitignored).
 * - Uses Playwright's bundled Chromium; honors PLAYWRIGHT_BROWSERS_PATH.
 */

import { readFileSync, readdirSync, statSync, mkdirSync, writeFileSync, unlinkSync, rmSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join, relative, basename } from 'node:path';
import { chromium } from 'playwright';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const COLLATERAL_DIR = join(REPO_ROOT, 'collateral');
const OUT_DIR = join(REPO_ROOT, 'dist', 'collateral');
const CLAIMS = JSON.parse(readFileSync(join(REPO_ROOT, 'claims', 'claims.json'), 'utf8'));

const PLACEHOLDER = /\{\{\s*claims\.([a-zA-Z0-9_.\-]+)\s*\}\}/g;
const TMP_SUFFIX = '.rendertmp.html';

/* Resolve a dotted path (relative to the claims root) — supports array indices. */
function resolvePath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

/* Replace every {{claims.…}} placeholder; throw on an unknown path so a typo
 * fails the render loudly instead of shipping a literal '{{…}}' into a PDF. */
function inject(html, relPath) {
  return html.replace(PLACEHOLDER, (m, path) => {
    const val = resolvePath(CLAIMS, path);
    if (val == null) throw new Error(`${relPath}: unresolved claim placeholder {{claims.${path}}}`);
    return Array.isArray(val) ? val.join(', ') : String(val);
  });
}

function walkHtml(dir) {
  let out = [];
  let entries;
  try { entries = readdirSync(dir); } catch { return out; }
  for (const name of entries) {
    if (name.endsWith(TMP_SUFFIX)) continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) out = out.concat(walkHtml(full));
    else if (/\.html?$/i.test(name)) out.push(full);
  }
  return out;
}

async function render() {
  const files = walkHtml(COLLATERAL_DIR);
  if (files.length === 0) {
    console.log('render — no collateral/**/*.html files found; nothing to render.');
    return;
  }
  mkdirSync(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  let count = 0;
  try {
    for (const file of files) {
      const rel = relative(REPO_ROOT, file);
      const injected = inject(readFileSync(file, 'utf8'), rel);
      // Write a temp sibling so all ../../ relative asset paths resolve identically.
      const tmp = join(dirname(file), `.${basename(file)}${TMP_SUFFIX}`);
      writeFileSync(tmp, injected);
      try {
        await page.goto(pathToFileURL(tmp).href, { waitUntil: 'load' });
        await page.evaluate(() => document.fonts.ready);
        const outPath = join(OUT_DIR, basename(file).replace(/\.html?$/i, '.pdf'));
        await page.pdf({
          path: outPath,
          printBackground: true,
          preferCSSPageSize: true,
          margin: { top: '0', right: '0', bottom: '0', left: '0' },
        });
        count++;
        console.log(`✓ ${rel} → ${relative(REPO_ROOT, outPath)}`);
      } finally {
        try { unlinkSync(tmp); } catch { /* best effort */ }
      }
    }
  } finally {
    await browser.close();
  }
  console.log(`\nrender — ${count} PDF(s) written to ${relative(REPO_ROOT, OUT_DIR)}/`);
}

/* Optional watch mode: re-render on any change under collateral/ or claims/. */
async function watch() {
  const { watch: fsWatch } = await import('node:fs');
  await render();
  console.log('\nrender:watch — watching collateral/ and claims/ (Ctrl-C to stop)…');
  let timer = null;
  const kick = () => { clearTimeout(timer); timer = setTimeout(() => render().catch(console.error), 150); };
  for (const dir of [COLLATERAL_DIR, join(REPO_ROOT, 'claims')]) {
    try { fsWatch(dir, { recursive: true }, kick); } catch { /* dir may not exist */ }
  }
}

const isWatch = process.argv.includes('--watch');
(isWatch ? watch() : render()).catch((err) => {
  console.error(String(err && err.message ? err.message : err));
  process.exit(1);
});
