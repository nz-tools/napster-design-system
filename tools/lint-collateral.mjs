#!/usr/bin/env node
/*
 * lint-collateral.mjs — claim-integrity gate for Napster collateral.
 *
 * Scans collateral/**\/*.html (RENDERED TEXT, not markup) and fails on the
 * violation classes the July 2026 content-library audit found. The point is to
 * make those findings structurally impossible to reintroduce.
 *
 * Source of truth for banned strings / the SOC 2 line is claims/claims.json —
 * never hard-code claim copy here. If a ruling changes, it changes in the
 * registry and this gate follows.
 *
 * Zero runtime dependencies on purpose: it must run in CI with only `npm ci`
 * (no browser download, no parser install). Text extraction is deliberately
 * conservative — we strip <script>/<style>/comments, drop tags, decode a few
 * entities, and match against the resulting visible copy.
 *
 * Exit code 1 on any violation, 0 when clean.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative, basename } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const COLLATERAL_DIR = join(REPO_ROOT, 'collateral');
const CLAIMS_PATH = join(REPO_ROOT, 'claims', 'claims.json');

/* ---------- registry ---------- */
const claims = JSON.parse(readFileSync(CLAIMS_PATH, 'utf8'));
const SECURITY_LINE = claims.global.security_line;
const ALLOWED_EMAIL = (claims.global.contact_email || 'partners@napster.com').toLowerCase();
const PULSE = claims.products['napster-pulse'];
const PULSE_BANNED = [...(PULSE.banned_features || []), ...(PULSE.banned_metrics || [])];

/* ---------- html → visible text ---------- */
function extractText(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&middot;/gi, '·')
    .replace(/&mdash;/gi, '—')
    .replace(/&ndash;/gi, '–')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/&#x27;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/* Count elements carrying a `footnote` class token (class="... footnote ..."). */
function countFootnoteElements(html) {
  const withoutInert = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ');
  const re = /class\s*=\s*["'][^"']*\bfootnote\b[^"']*["']/gi;
  return (withoutInert.match(re) || []).length;
}

function docTitle(html) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? extractText(m[1]) : '';
}

/* Which product does this doc concern? Used to scope Pulse/Agent-only rules. */
function productContext(fileName, title, text) {
  const hay = `${fileName} ${title} ${text}`.toLowerCase();
  return {
    isPulse: /\bpulse\b/.test(fileName.toLowerCase()) || /napster pulse/i.test(hay),
    isAgent: /\bagent\b/.test(fileName.toLowerCase()) || /napster agent/i.test(hay),
  };
}

/* ---------- rules ---------- */
function lintDoc(relPath, html) {
  const findings = [];
  const text = extractText(html);
  const title = docTitle(html);
  const ctx = productContext(basename(relPath), title, text);
  const add = (rule, detail) => findings.push({ rule, detail });

  // 1. Asterisk symmetry
  const asteriskInCopy = text.includes('*');
  const footnotes = countFootnoteElements(html);
  if (asteriskInCopy && footnotes === 0) {
    add('dangling-asterisk', "'*' appears in visible copy but no element carries a `footnote` class");
  }
  if (!asteriskInCopy && footnotes > 0) {
    add('orphan-footnote', `${footnotes} footnote element(s) present but no '*' referent in copy`);
  }

  // 2. Dead names
  //    "Napster Spaces" is allowed only in an "f.k.a." context.
  const spacesRe = /Napster Spaces/gi;
  let m;
  while ((m = spacesRe.exec(text)) !== null) {
    const before = text.slice(Math.max(0, m.index - 18), m.index).toLowerCase();
    if (!/f\.?k\.?a\.?\s*$/.test(before)) {
      add('dead-name', "'Napster Spaces' without an 'f.k.a.' qualifier — the product is Napster Agent");
      break;
    }
  }
  if (/\bCompanion API\b/i.test(text)) add('dead-name', "'Companion API' is a dead name — the product is Napster API");
  if (/\bOmniAgent\b/i.test(text)) add('dead-name', "'OmniAgent' is a dead name — the product is Napster API");

  // 3. Security phrasing
  if (/SOC 2 controls/i.test(text)) add('security-phrasing', "banned phrase 'SOC 2 controls'");
  if (/SOC 2\*/i.test(text)) add('security-phrasing', "banned phrase 'SOC 2*'");
  if (/SOC 2 certified/i.test(text)) add('security-phrasing', "banned phrase 'SOC 2 certified'");
  // The bare badge token 'SOC 2 Type II' is CPO-approved. Any other SOC 2
  // mention must carry the exact security_line verbatim.
  const soc2Residual = text.replace(/SOC 2 Type II/gi, '');
  if (/SOC 2/i.test(soc2Residual) && !text.includes(SECURITY_LINE)) {
    add('security-phrasing', "SOC 2 mentioned outside the approved 'SOC 2 Type II' badge without the exact global.security_line");
  }

  // 4. Blanket marketplace claim (no per-product qualifier in the same clause)
  const mkt = /Available in Microsoft Marketplace/i;
  if (mkt.test(text)) {
    const idx = text.search(mkt);
    const clause = text.slice(idx, idx + 80);
    if (!/\bfor Napster [A-Z]/.test(clause)) {
      add('blanket-marketplace', "'Available in Microsoft Marketplace' with no per-product qualifier");
    }
  }

  // 5. Endorsement
  if (/Microsoft trusts/i.test(text)) add('endorsement', "implies Microsoft endorsement ('Microsoft trusts')");
  if (/trusted by Microsoft/i.test(text)) add('endorsement', "implies Microsoft endorsement ('trusted by Microsoft')");

  // 6. Pulse banned content (only in a Pulse doc)
  if (ctx.isPulse) {
    for (const banned of PULSE_BANNED) {
      if (new RegExp(escapeRe(banned), 'i').test(text)) {
        add('pulse-banned', `Pulse doc contains banned feature/metric: '${banned}'`);
      }
    }
  }

  // 7. Agent pricing drift (only in an Agent doc)
  if (ctx.isAgent) {
    if (/usage-based/i.test(text)) add('agent-pricing-drift', "Agent doc uses 'usage-based' — Agent is a flat package model");
    if (/per-hour/i.test(text)) add('agent-pricing-drift', "Agent doc uses 'per-hour' — that is the API's model, not Agent's");
  }

  // 8. Internal data — any @napster.com address other than partners@napster.com
  const emails = text.match(/[A-Za-z0-9._%+-]+@napster\.com/gi) || [];
  for (const e of emails) {
    if (e.toLowerCase() !== ALLOWED_EMAIL) {
      add('internal-data', `non-standard @napster.com address in copy: '${e}' (only ${ALLOWED_EMAIL} is allowed)`);
    }
  }

  // 9. UK spellings
  for (const uk of ['recognises', 'summarised', 'organisation']) {
    if (new RegExp(`\\b${uk}\\b`, 'i').test(text)) add('uk-spelling', `UK spelling '${uk}' — use US English`);
  }

  return findings;
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* ---------- walk ---------- */
function walkHtml(dir) {
  let out = [];
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out; // collateral/ may not exist yet
  }
  for (const name of entries) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) out = out.concat(walkHtml(full));
    else if (/\.html?$/i.test(name)) out.push(full);
  }
  return out;
}

/* ---------- main ---------- */
const files = walkHtml(COLLATERAL_DIR);
let total = 0;

if (files.length === 0) {
  console.log('lint:collateral — no collateral/**/*.html files found; nothing to check.');
  process.exit(0);
}

for (const file of files) {
  const rel = relative(REPO_ROOT, file);
  const findings = lintDoc(rel, readFileSync(file, 'utf8'));
  if (findings.length) {
    total += findings.length;
    console.error(`\n✗ ${rel}`);
    for (const f of findings) console.error(`    [${f.rule}] ${f.detail}`);
  } else {
    console.log(`✓ ${rel}`);
  }
}

if (total > 0) {
  console.error(`\nlint:collateral FAILED — ${total} violation(s) across ${files.length} file(s).`);
  process.exit(1);
}
console.log(`\nlint:collateral passed — ${files.length} file(s) clean.`);
process.exit(0);
