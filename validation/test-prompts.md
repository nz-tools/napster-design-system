# Validation Test Prompts

Run these five prompts in Claude Design **after uploading this bundle to claude.ai/design at the Napster organization level**. They are the gate that confirms the unified bundle outperforms either source bundle.

For each prompt, score the output against the **Pass criteria**. A bundle that passes 5 of 5 is ready. A bundle that passes 4 of 5 is acceptable but flag the failing dimension. Below 4 of 5: republish.

---

## Prompt 1 — Napster Station landing page

> **"Generate a landing page for Napster Station with hero, three feature blocks, customer logo strip, and CTA section. Target audience: airport-lounge operators."**

### Pass criteria

- Background pure `#000000`.
- Hero uses Avantt 600, 72px, sentence case, period-terminated.
- Eyebrow at the top of every section: Inter 700, 12px, UPPERCASE, color `#DD52CB`.
- Pink lands on **one** load-bearing noun in the hero, not on multiple elements.
- Hero imagery retrieves from `imagery/product/station/` — preferably `napster-station-airport-gate.png`, `napster-station-hotel-lobby*.png`, `napster-station-lobby-device-ai-concierge-hero.png`, or `napster-station-hero-background.avif`. **Filename match is the success signal.**
- Primary button `#BE369D`, radius `10px`, padding `18.5px 20px`. No pill button except for one hero CTA (optional).
- Customer logo strip uses muted white logos on `#000000`, separated by `1px solid rgba(255,255,255,0.10)` hairlines.
- CTA section ends with a period in its headline.

### Failure modes to watch

- Eyebrow in wrong color (`#EA2DD2` instead of `#DD52CB`) → token retrieval miss.
- Buttons in pill shape by default → AKEO leaked through.
- Generic stock photography instead of Station library → imagery folder not indexed.
- Banned words (`industry-leading`, `revolutionize`, etc.) → voice doctrine not retrieved.

---

## Prompt 2 — Microsoft Build 2026 keynote one-pager

> **"Generate a one-pager for the Microsoft Build 2026 keynote — internal sales enablement format. Audience: Napster field sales meeting with Microsoft alliance partners. Surface the partnership opportunity, the joint customer profile, and the call-to-action for the field rep."**

### Pass criteria

- Follows one-pager structure modelled on `compositions/one-pagers/napster-platform.html`.
- Row-budget rule honored: each band has a `--row-*` custom property and the sheet totals `--sheet-max`.
- Wordmark top-left with ≥logo-height clearspace.
- "BRAND DEFINITION PROPOSAL · 2026 · 00"-style chrome at footer (or analog).
- Uses `imagery/brand-life/` photography or `imagery/people/crew/` for the joint-customer visual (real environments, no stock).
- Voice: declarative. **Specific numbers**, not "industry-leading". Active verbs.
- Two CTAs maximum, primary in `#BE369D`.

### Failure modes to watch

- Sheet overflows the page (row budget not retotaled).
- Sales-speak ("synergy", "best-in-class", "transformative") → banned-words list not retrieved.
- Wordmark center-aligned or undersized → layout rules not retrieved.

---

## Prompt 3 — NAPPs Cadence + Pulse pricing page

> **"Generate a pricing page for NAPPs Cadence and Pulse with a Napster Credit consumption model explainer. Three tiers, a credits-per-action table, and an FAQ-style strip below the tier cards."**

### Pass criteria

- Three tier cards using `.card-large` or `.card` (24px or 16px radius, 24–32px padding).
- Middle tier visually elevated (1px → 0.20 border or pink dot eyebrow), **not** by scale or pink wash.
- Credits table: dark mulberry surface, `1px` hairline `rgba(255,255,255,0.10)` rules.
- `pulse-1` `#EA2DD2` reserved for the FAQ strip eyebrows or links, not the tier highlights.
- Body type Inter 400/16px, line-height 1.40.
- Pricing values in body-lg or title size, not display.
- No emoji (✓ marks acceptable as bundled icons `icons/icon-check.svg`).

### Failure modes to watch

- Tier cards in pill shape → radius scale not retrieved.
- Pink applied to all three tier headers → "one pink element per composition" violated.
- Generic ✅ emoji instead of bundled `icon-check.svg` → icon substitution policy not followed.

---

## Prompt 4 — Napster Companions feature page

> **"Generate a product feature page for Napster Companions with a three-column layout and embedded video placeholder. Surface 6–9 of the named companions with portraits, names, and one-line role descriptions."**

### Pass criteria

- Three-column grid at desktop, collapsing to single column at 360 mobile.
- Portraits retrieve from `imagery/people/portraits-hero/napster-companion-*.avif` — high-res AVIFs, not the small thumbs.
- Names rendered as `Kai Mercer`, not `Kai the AI` or `your AI assistant Kai`. **Full human names required.**
- Roles match the canonical roster: Kai=Chief of Staff, Kevin=Finance, May=Creative, Richard=Learning, Elena=Wellbeing.
- Hero contains a video placeholder block with a play affordance using `icons/icon-eye.svg` or similar, not an emoji.
- Eyebrow above the section: `MEET YOUR CREW`.

### Failure modes to watch

- Portraits look like AI-generated avatars or generic stock → wrong folder retrieved.
- Roles match AKEO's original assignments (Kai=Learning, May=Lifestyle, Richard=Training) → persona-roster.md not retrieved.
- "Elena" spelled "Ellena" → roster spelling not retrieved.

---

## Prompt 5 — Napster API usage dashboard (dark mode)

> **"Generate a dark-mode dashboard for Napster API showing usage metrics, with a table component and a chart component. Audience: developer with admin role. Show requests over time, credits remaining, top endpoints, and an alert when a threshold is crossed."**

### Pass criteria

- Background `#000000`. Surfaces `#1A0918` or `rgba(255,255,255,0.04)` glass panels with `blur(20px) saturate(1.2)`.
- Table uses `1px` hairline borders at `rgba(255,255,255,0.10)`. Row hover at `0.20`.
- Chart uses semantic colors: `good` `#34D399` for healthy, `bad` `#FF6B7A` for the alert state, `neutral` `#C8C8E0` for inactive.
- Primary action button `#BE369D` at `10px` radius.
- Threshold alert in `panel-pink` (`rgba(190,54,157,0.08)` background, `rgba(190,54,157,0.35)` border).
- Uses `imagery/decorative/napster-grain-texture.jpg` at `mix-blend-mode: screen` 0.18 opacity over the dashboard chrome (optional but in-system).
- Number formatting specific: `$5/hr`, `1.2M requests`, `94.3% uptime`. Not "industry-leading uptime".
- Iconography from the bundled 22-icon set (`icon-data.svg`, `icon-clock.svg`, `icon-shield.svg`, etc.). No Material Symbols.

### Failure modes to watch

- Chart in "good=green, bad=red" outside the Napster semantic palette → tokens not retrieved.
- Material Symbols leaking through → icon substitution policy not retrieved.
- Pink applied as a wash on every card → pink-precious rule violated.

---

## Scoring

| Prompt | Pass | Notes |
|---|---|---|
| 1. Station landing | ☐ |  |
| 2. Build 2026 one-pager | ☐ |  |
| 3. NAPPs pricing | ☐ |  |
| 4. Companions feature | ☐ |  |
| 5. API dashboard | ☐ |  |

**Overall:** ___ / 5.

If any prompt fails: note which dimension (color, type, imagery retrieval, voice, components), then republish the bundle and re-run.
