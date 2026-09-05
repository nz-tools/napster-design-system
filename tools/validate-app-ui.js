#!/usr/bin/env node
// Dependency-free contract checks: token parity, import integrity and contrast.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const css = read('app_ui.css');
const canonical = read('colors_and_type.css');
const tokens = JSON.parse(read('tokens/app-ui.json'));
const props = text => Object.fromEntries([...text.matchAll(/(--[\w-]+):\s*([^;]+);/g)].map(m => [m[1], m[2].trim()]));
const dark = props(css.split('[data-theme="light"]')[0]);
const light = props(css.split('[data-theme="light"]')[1].split('}')[0]);
assert.match(canonical, /@import url\('\.\/app_ui\.css'\);/);
assert.deepEqual(Object.keys(dark).sort(), Object.values(tokens.tokens).map(t => t.cssVariable).sort());
for (const token of Object.values(tokens.tokens)) assert.equal(dark[token.cssVariable], token.$value, token.cssVariable);
assert.deepEqual(light, tokens.light);
const available = new Set(Object.keys(props(css + '\n' + canonical)));
for (const match of css.matchAll(/var\((--[\w-]+)/g)) assert(available.has(match[1]), `Undefined variable ${match[1]}`);

function rgb(hex) {
  assert.match(hex, /^#[0-9a-f]{6}$/i);
  return [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255);
}
function luminance(hex) {
  return rgb(hex).map(c => c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4).reduce((sum, c, i) => sum + c * [0.2126, 0.7152, 0.0722][i], 0);
}
function contrast(a, b) { const x = luminance(a), y = luminance(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }
const base = props(canonical.split('[data-theme="light"]')[0]);
let pairs = 0;
for (const [mode, map, surfaces] of [['dark', dark, ['#000000', dark['--nfw-card-bg']]], ['light', {...dark, ...light}, ['#FAF8FC', light['--nfw-card-bg']]]]) {
  for (const bg of surfaces) for (const key of ['--nfw-muted', '--nfw-success-fg', '--nfw-critical-fg', '--nfw-control-border']) {
    let fg = map[key];
    if (fg.startsWith('var(')) fg = base[fg.slice(4, -1)];
    const minimum = key.includes('border') ? 3 : 4.5;
    const ratio = contrast(fg, bg);
    assert(ratio >= minimum, `${mode} ${key} on ${bg}: ${ratio.toFixed(2)} < ${minimum}`);
    pairs++;
  }
}
const html = read('ui-kits/napster-work/index.html');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
assert.equal(new Set(ids).size, ids.length, 'Duplicate specimen IDs');
for (const match of html.matchAll(/(?:aria-controls|aria-labelledby|aria-describedby)="([^"]+)"/g)) {
  for (const id of match[1].split(' ')) assert(ids.includes(id), `Unresolved ARIA reference: ${id}`);
}
for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  if (!/^(https?:|#)/.test(match[1])) assert(fs.existsSync(path.resolve(root, 'ui-kits/napster-work', match[1])), `Missing asset: ${match[1]}`);
}
assert(!html.includes('figma.com/api/mcp/asset/'), 'Expiring Figma URL in specimen');
console.log(`App UI validation passed: ${Object.keys(dark).length} tokens, ${pairs} contrast pairs, imports/assets and ARIA references.`);
