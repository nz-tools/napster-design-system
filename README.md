# Napster Design System — Unified Bundle

This folder is Napster's organization-level design system for Claude Design. Once published at `claude.ai/design`, every Claude Design project anyone at Napster creates will inherit it automatically.

## What this bundle is

A synthesis of two source materials:

- **napster.com live audit** (April 2026) — the customer-facing truth.
- **AKEO Brand Re-Definition Proposal** (Mateo Reyes, 2026) — the structural framework.

Where the two agreed, that's what's here. Where they disagreed, the live site won.

## How to publish

1. Zip this entire `napster-design-system-unified/` folder.
2. Sign in to `claude.ai/design` as a Napster admin.
3. Upload the zip at the **organization level** (not project level).
4. Confirm publishing.

That's it. From that point, every Claude Design project anyone at Napster opens inherits this system as the default brand context.

## How to validate (after upload)

Run the five test prompts in `validation/test-prompts.md` inside Claude Design. Each should produce output that:
- Uses pure `#000000` backgrounds, Napster Pink `#DD52CB` on the load-bearing noun only.
- Sets headlines in Avantt 600, sentence case, ending with a period.
- Uses the Inter 700 eyebrow at 12px uppercase, color `#DD52CB`.
- Retrieves the right product imagery by filename (Station for Station prompts, View for View prompts).
- Honors the row-budget rule on fixed-height layouts.

If any of the five fails one of those, the bundle did not ingest correctly — re-publish.

## What's inside

```
napster-design-system-unified/
├── DESIGN.md                       # ⭐ The rationale layer — read this first.
├── README.md                       # ← you are here
├── SKILL.md                        # Skill descriptor (cross-tool portable)
├── colors_and_type.css             # ⭐ Single-import CSS with all tokens + semantic classes.
├── brand/
│   ├── overview.md                 # Personality, audience, emotional target
│   └── voice-and-tone.md           # Banned words, preferred vocabulary, five copy patterns
├── tokens/
│   ├── colors.json                 # DTCG-format color tokens + gradients + usage ratio
│   ├── typography.json             # Type tokens + text styles
│   ├── spacing.json                # Spacing + radii + components + breakpoints + slide dims
│   └── motion.json                 # Duration + easing + motion principles
├── logos/
│   ├── horizontal/                 # Horizontal lockup (white, black, 256w raster)
│   ├── icon/                       # n-mark in 3 fidelities + favicons
│   └── wordmark/                   # Wordmark, vertical white, vertical black
├── colors/                         # Color specimen HTML (Design System tab)
├── typography/
│   ├── fonts/                      # Avantt 500/600/700/800 (TTF + OTF)
│   └── specimens/                  # Type ramp specimen HTML
├── layout/                         # Spacing + radii + glow specimens
├── components/                     # Button/card/input/footer/personas specimens
├── compositions/
│   ├── one-pagers/                 # napster-platform, napster-station, napster-view
│   └── landing-pages/              # napster-view landing page
├── imagery/
│   ├── product/                    # Organized by product line
│   │   ├── station/                # 32 files — environments, specs, hero
│   │   ├── view/                   # 14 files — hardware, scenes, specs
│   │   ├── mac/                    # 15 files — UI captures, scenes, companions-at-Mac
│   │   ├── app/                    # 5 files — consumer + product card
│   │   ├── api/                    # 3 files — developer surface
│   │   ├── spaces/                 # 6 files — Spaces hero + lifestyle
│   │   └── learn/                  # 4 files — Learn enterprise + cards
│   ├── people/
│   │   ├── portraits-hero/         # 9 high-res AVIF companion portraits (~150 KB each)
│   │   ├── portraits-thumb/        # 9 small AVIF thumbnails for card use
│   │   ├── producers/              # 9 music-line producer portraits (Axel, Billie, Jasper, …)
│   │   └── crew/                   # Group / lifestyle compositions
│   ├── brand-life/                 # Studio life, creator workstation photography
│   ├── scenes/
│   │   ├── twin/                   # Digital Twin compositions
│   │   ├── sessions/               # 5-step music creation flow
│   │   └── usecases/               # Coding / Creative / Writing
│   └── decorative/                 # Boxes, gradients, hero backgrounds, grain texture
├── icons/                          # 22 SVG line icons (microphone, user, book, code, …)
├── ui-kits/
│   ├── napster-com/                # Marketing site React kit (Nav, Hero, FeatureSection, …)
│   └── napster-app/                # Mobile companion app kit
├── reference/
│   └── napster-com-audit.md        # The live-site computed-style audit (April 2026)
├── tools/                          # figma_asset_export.py + tools README
└── validation/
    └── test-prompts.md             # 5 prompts for post-upload validation
```

## Where to start

| If you want to … | Read |
|---|---|
| Understand the system end-to-end | `DESIGN.md` |
| Write copy that sounds Napster | `brand/voice-and-tone.md` |
| Pull tokens into code | `colors_and_type.css` (single-import) or `tokens/*.json` |
| Verify against the live site | `reference/napster-com-audit.md` |
| Build a slide deck | `DESIGN.md` + the tokens. Claude Design infers slide structure from the system. |
| Build a one-pager | `compositions/one-pagers/` |
| Find the right product image | `imagery/product/{product}/` |
| Find the right persona portrait | `imagery/people/portraits-hero/` |
| Audit a generated artifact | `DESIGN.md` § Do's and Don'ts |

## Non-negotiable rules

These rules override everything else, including style intuition.

1. Pure `#000000` backgrounds. Not `#111`, not gradient.
2. Napster Pink `#DD52CB` on the load-bearing noun only. One pink element per composition.
3. Eyebrows are Inter 700, 12px, uppercase, `#DD52CB`. Every section gets one.
4. Hero headlines are Avantt 600, sentence case, ending with a period.
5. Wordmark top-left, clearspace ≥ logo-height.
6. Banned words: *revolutionize, disrupt, leverage, solution, seamlessly, effortlessly, powerful, unlock, empower, industry-leading, world-class, chatbot, assistant, bot, users, AI-powered, game-changing.*
7. Round every corner you can. The circle is the visual backbone.
8. Companions have full human names. Never "the AI".
9. No emoji. Anywhere.
10. Fixed-size layouts declare a row budget and re-total when any band grows.

## Maintainer

Ziv Navoth (`zivnavoth@gmail.com`). For questions on the visual system, see the AKEO Brand Definition Proposal. For voice/tone, see `brand/voice-and-tone.md`.

## Version

`v1.0.0` — first unified bundle, May 2026.
