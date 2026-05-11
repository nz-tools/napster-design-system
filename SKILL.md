---
name: napster-design
description: Use this skill to generate well-branded interfaces and assets for Napster — the AI companion platform. Dark cinematic identity, circular visual backbone, Napster Pink accent. Use for production work or throwaway prototypes/mocks/slides.
user-invocable: true
---

Read `DESIGN.md` and `README.md` within this skill first. Then explore the rest.

**Start here:**

- `DESIGN.md` — the unified rationale layer. Nine canonical sections (Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts, Imagery & Photography) plus two extensions (Iconography, Motion). YAML front matter contains every token resolved, plus the `imagery:` block enumerating the four photographic slots and the folders that hold them.
- `README.md` — what this bundle is, how to publish at claude.ai/design.
- `colors_and_type.css` — single-import CSS with all tokens and semantic classes. Avantt is hosted via jsDelivr CDN (pinned to the current version tag) so font loads work in any rendering environment, with local-path fallbacks for offline use. Inter is loaded from Google Fonts. (`.eyebrow`, `.h-hero`, `.gradient-word`, `.btn`, `.btn-primary-pulse`, `.panel`, `.card`, `.card-glass`, `.beam-overlay`, `.grain`).
- `tokens/` — DTCG-format JSON tokens: `colors.json`, `typography.json`, `spacing.json`, `motion.json`.
- `brand/overview.md` — personality, audience, emotional target.
- `brand/voice-and-tone.md` — banned words, preferred vocabulary, five copy patterns, casing rules.
- `logos/` — all approved Napster logos (wordmark, n-mark in three fidelities, lockups).
- `icons/` — 22 bundled SVG line icons.
- `reference/napster-com-audit.md` — live-site computed-style audit (the source of truth for live tokens).
- `compositions/one-pagers/` — 3 one-pagers (platform, station, view).
- `imagery/` — four photographic slots: **Warm Lifestyle** (`people/crew/`, `brand-life/`), **Atmospheric** (`scenes/twin/`, `decorative/`, `scenes/sessions/`), **Isolated Portraits** (`people/portraits-hero/`, `people/portraits-thumb/`, `people/producers/`), and **Product on Pure Black** (`product/{api,app,learn,mac,spaces,station,view}/`, `scenes/usecases/`). When a user names a product ("create a one-pager on Napster Station"), reach for `imagery/product/{product}/` first. Every subfolder has its own README.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files for the user to view. Import `colors_and_type.css` and use the semantic classes.

If working on production code, copy the tokens and read the rules to become an expert in designing with this brand.

**Non-negotiable brand rules:**

1. Pure `#000000` background. Not near-black, not gradient.
2. Napster Pink (`#DD52CB`) appears on ONE element per composition — the load-bearing noun.
3. Eyebrows are `.eyebrow` — Inter 700, 12px, uppercase, pink. Every section gets one.
4. Hero headlines are Avantt 600 sentence case, end with a period.
5. Horizontal lockup top-left (`logos/horizontal/`), clearspace ≥ lockup-height. The lockup is the default mark — wordmark + n-mark together — not the bare wordmark. For small contexts (favicon, avatar, app icon), use the standalone n-mark from `logos/icon/`.
6. Never use: chatbot, leverage, AI-powered, revolutionize, solution, emoji.
7. Round every corner you can. The circle is the visual backbone.
8. Companions have full human names (Kai Mercer, Kevin Jones, May Li). Not "the AI". See `imagery/people/persona-roster.md`.
9. **Fixed-size layouts declare a row budget.** One-pagers, slides, and any composition with a fixed outer height must define each row's height as a CSS custom property (`--row-hero`, `--row-specs`, etc.) and declare `--sheet-max`. The sum of rows must equal `--sheet-max`. When a fix adds vertical pixels to one band, re-total the rows in the same edit — never leave the math for later. Bottom imprints/footers need ≥24px padding below them; they are the canary for budget overflow.
10. Default button radius is `10px`. Pill shape is reserved for chips and one designated hero CTA per page (`.btn-primary-pulse`).
11. The Napster Beam gradient is overlay-only on imagery (`mix-blend-mode: screen`). Never directly behind text.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
