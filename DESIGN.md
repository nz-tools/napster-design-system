---
name: napster
description: >
  The unified Napster design system. Dark cinematic identity, circular visual
  backbone, Napster Pink accent. Audience-facing: this is the system Claude Design
  uses to generate all Napster-branded artifacts.
version: 1.3.2
sources:
  - napster.com (live audit, April 2026 — the customer-facing truth)
  - AKEO Brand Definition Proposal (Mateo Reyes, 2026 — structural framework)
  - Three-font system migration (May 2026 — Avantt retired from the design system; the live napster.com site keeps Avantt as its display face)
tokens:
  color:
    bg:               "#000000"
    bg-mulberry:      "#1A0918"
    fg:               "#FFFFFF"
    fg-muted:         "rgba(255,255,255,0.5)"
    fg-subtle:        "rgba(255,255,255,0.2)"
    pink:             "#DD52CB"
    pink-deep:        "#BE369D"
    pink-bright:      "#EA2DD2"
    pink-rim:         "#FFA1F3"
    pink-glow:        "#FF10E8"
    plum:             "#2E0833"
    plum-deep:        "#601656"
    violet:           "#3F236B"
    lilac:            "#B79CD9"
    indigo:           "#33295C"
    coral:            "#FF4D6D"
    pulse-1:          "#EA2DD2"
    pulse-2:          "#FF7DF3"
    neon-1:           "#FFA1F3"
    neon-2:           "#FDE5D5"
    beam-yellow:      "#FFF38A"
    good:             "#34D399"
    bad:              "#FF6B7A"
    neutral:          "#C8C8E0"
    border:           "rgba(255,255,255,0.10)"
    border-strong:    "rgba(255,255,255,0.18)"
    border-pink:      "rgba(190,54,157,0.35)"
  font:
    family-display:   "Inter, 'Helvetica Neue', Arial, sans-serif"
    family-body:      "Inter, 'Helvetica Neue', sans-serif"
    family-serif:     "'Instrument Serif', 'Times New Roman', Georgia, serif"
    family-mono:      "'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    size-display-cover: "180px"
    size-display-1:   "96px"
    size-hero:        "72px"
    size-h1:          "56px"
    size-section:     "41px"
    size-h2:          "40px"
    size-title:       "32px"
    size-h3:          "28px"
    size-subtitle:    "24px"
    size-h4:          "20px"
    size-body-lg:     "18px"
    size-body:        "16px"
    size-body-sm:     "14px"
    size-eyebrow:     "12px"
    size-meta:        "11px"
    weight-light:     300
    weight-regular:   400
    weight-medium:    500
    weight-semibold:  600
    weight-bold:      700
    weight-extrabold: 800
    weight-black:     900
  radius:
    xs:               "4px"
    sm:               "6px"
    md:               "10px"
    lg:               "16px"
    xl:               "24px"
    "2xl":            "48px"
    pill:             "9999px"
  spacing:
    "1":              "4px"
    "2":              "8px"
    "3":              "12px"
    "4":              "16px"
    "6":              "24px"
    "8":              "32px"
    "12":             "48px"
    "16":             "64px"
    "24":             "96px"
    "32":             "128px"
  shadow:
    sm:               "0 1px 2px rgba(0,0,0,0.45)"
    md:               "0 8px 24px rgba(0,0,0,0.55)"
    lg:               "0 24px 64px rgba(0,0,0,0.65)"
    panel:            "0 10px 40px rgba(0,0,0,0.35)"
    inset-light:      "inset 0 0 0 0.5px rgba(255,255,255,0.35)"
    inner-glow:       "inset 0 1px 0 rgba(255,255,255,0.10), inset 0 0 0 1px rgba(255,255,255,0.06)"
    glow-pink:        "0 0 40px rgba(255,16,232,0.35)"
    glow-pulse:       "0 0 80px rgba(234,45,210,0.45)"
  imagery:
    warm-lifestyle:
      description: Humans in real environments. Warm amber-to-magenta grade. Customer in the scene, never modeling.
      role: User Value
      paths:
        - imagery/people/crew/*
        - imagery/brand-life/*
    atmospheric:
      description: Abstract light, motion blur, purple atmospheric wash. The Beam gradient rides on top.
      role: Brand Feeling
      paths:
        - imagery/scenes/twin/*
        - imagery/decorative/*
        - imagery/scenes/sessions/*
    isolated-portraits:
      description: Companion portraits, 3/4 framing, rim-lit, persona environment behind. Darken pass over dark canvas. One file per companion; CSS sizes for hero or card use.
      role: Companion Character
      paths:
        - imagery/people/portraits-hero/*
        - imagery/people/producers/*
    companion-environments:
      description: Atmospheric scenes representing where each companion role works (offices, classroom, atrium, lounge). No person in frame. Pairs with the portrait set for layered hero compositions.
      role: Brand Feeling
      paths:
        - imagery/scenes/companion-environments/*
    product-on-black:
      description: "Hardware shots, product UI captures, spec details. Background is pure #000000."
      role: Product Clarity
      paths:
        - imagery/product/api/*
        - imagery/product/app/*
        - imagery/product/learn/*
        - imagery/product/mac/*
        - imagery/product/spaces/*
        - imagery/product/station/*
        - imagery/product/view/*
        - imagery/scenes/usecases/*
  motion:
    duration-fast:    "120ms"
    duration-mid:     "160ms"
    duration-slow:    "200ms"
    easing:           "cubic-bezier(0.22, 0.61, 0.36, 1)"
---

# Napster Design System

> *Twenty-six years ago, we democratized music. Now we're democratizing expertise.*

Napster is the AI companion platform. Where ordinary voice assistants fail, Napster Companions remember. A chatbot answers questions. A companion mentors.

This document is the system. Nine sections plus two extensions. Every token resolves to the YAML above. The tone of the prose is the tone of the brand: declarative, unhedged, no marketing hedges, no emoji.

---

## 1. Overview

### Personality

Napster is dark, cinematic, and quietly confident. Late-night studio rather than glossy product launch. Architectural before playful. The brand is built on three load-bearing ideas:

1. **The Circle.** The OG headphone-monk n-mark is circular. The brand's geometry — rounded letterforms on napster.com, every n-mark contour, every component radius — repeats the same circle. Every surface rounds its corners. If a corner can be rounded without breaking meaning, round it.
2. **The Black Canvas.** Pure `#000000` is the default backdrop. Not `#0a0a0a`, not gradient, not warm-black. Pure. Black always dominates. The product is the music; the canvas is the silence around it.
3. **Pink is Precious.** Napster Pink (`#DD52CB`) carries one element per composition, and that element is the load-bearing noun. Pink is not a decoration. It is the place the eye must go.

### Audience and emotional target

| Surface | Audience | Emotional target |
|---|---|---|
| napster.com | Consumers + curious developers | Confidence. *Software just became labor.* |
| Sales decks | Enterprise buyers (operators, integrators) | Inevitability. *This is what comes next.* |
| Internal comms | Napster team | Pride. *We democratized music. Now we democratize expertise.* |
| Product UI | Active users | Calm. The interface gets out of the way of the companion. |

### Usage ratio

Every composition divides roughly as follows:

- **70%** Jet Black (`#000000`) — the canvas.
- **20%** Napster Mulberry (`#1A0918`) — secondary surfaces.
- **5%** Napster Pink (`#DD52CB`) — the load-bearing noun.
- **5%** Pulse magenta (`#EA2DD2`) — accent and hero treatments.
- **5%** Neon peony (`#FFA1F3`) — gradient endpoints and rim lights.

If pink occupies more than 5%, the composition is wrong. Edit it down before you ship.

### Sources

This system reconciles two source materials. Where they agreed, that's what's here. Where they disagreed, the live napster.com (April 2026) was the tiebreaker — because that's what customers see.

- **napster.com live audit (April 2026):** `reference/napster-com-audit.md`
- **AKEO Brand Re-Definition Proposal (2026):** the Figma framework. Source of the secondary palette, Pulse/Neon/Beam gradients, the 70/20/5/5/5 usage doctrine, and the bundled icon library.

---

## 2. Colors

### Primary palette

| Token | Value | Role |
|---|---|---|
| `bg`           | `#000000` | The canvas. Pure black. |
| `bg-mulberry`  | `#1A0918` | Secondary backdrop. 20% of any composition. |
| `fg`           | `#FFFFFF` | Primary text on dark. |
| `pink`         | `#DD52CB` | Napster Pink — eyebrows, accent text. Live-verified. |
| `pink-deep`    | `#BE369D` | Primary button fill. Live-verified. |

### Secondary palette

| Token | Value | Role |
|---|---|---|
| `plum`        | `#2E0833` | Atmospheric anchor |
| `plum-deep`   | `#601656` | Gradient anchor, dark plum |
| `violet`      | `#3F236B` | AKEO secondary, Space gradient anchor |
| `violet-deep` | `#3C185A` | Atmospheric gradient stop |
| `lilac`       | `#B79CD9` | Secondary highlight |
| `indigo`      | `#33295C` | Muted body text (live, low frequency) |
| `coral`       | `#FF4D6D` | Occasional accent (live, low frequency) |

### Accent / gradient stops

`pink-bright` `#EA2DD2`, `pink-rim` `#FFA1F3`, `pink-glow` `#FF10E8`, `pulse-1` `#EA2DD2`, `pulse-2` `#FF7DF3`, `neon-1` `#FFA1F3`, `neon-2` `#FDE5D5`, `beam-yellow` `#FFF38A`.

### Semantic (data viz)

`good` `#34D399`, `bad` `#FF6B7A`, `neutral` `#C8C8E0`. Used in comparison tables and stat charts. Not used in marketing copy.

### Foreground transparency steps

Text falls at documented opacity steps. Do not invent fractional values.

| Token | Value | Use |
|---|---|---|
| `fg`        | `#FFFFFF` (1.0) | Primary headlines, body |
| `fg-muted`  | `rgba(255,255,255,0.5)` | Secondary copy, captions |
| `fg-subtle` | `rgba(255,255,255,0.2)` | Placeholders, disabled |

### Signature gradients

**Hero text** — for the load-bearing noun only:
```
linear-gradient(90deg, #FFFFFF 0%, #EA2DD2 71.63%, #FFA1F3 87.98%)
```

**Label text** — eyebrow-scale callouts:
```
linear-gradient(91deg, #DD52CB 0%, #601656 100%)
```

**Pulse** (two-stop accent):
```
linear-gradient(135deg, #EA2DD2 0%, #FF7DF3 100%)
```

**Pulse button** — accessible large-text CTA variant:
```
linear-gradient(135deg, #EA2DD2 0%, #E65AD5 100%)
```

**Neon** (three-stop atmospheric):
```
linear-gradient(135deg, #FF7DF3 0%, #FFA1F3 50%, #FDE5D5 100%)
```

**The Napster Beam** — signature multi-stop ribbon. Apply as an overlay on hero imagery with `mix-blend-mode: screen`. **Never directly behind text.**
```
linear-gradient(100deg,
  #FFF38A  0%,
  #FFA1F3 22%,
  #FF7DF3 42%,
  #BE369D 62%,
  #2E0833 82%,
  #000000 100%)
```

### Color modes

Napster remains dark-canonical. Marketing surfaces, decks, one-pagers, landing pages, and brand films stay dark. Product/app surfaces may opt into a sanctioned light variant with the same canonical `colors_and_type.css` import by setting `data-theme="light"` on the app-surface wrapper. There is no CSS-level `prefers-color-scheme` fallback; app code may read OS preference and set the attribute deliberately.

| Surface | Default mode | Toggle? |
|---|---|---|
| napster.com marketing site | Dark | No |
| `ui-kits/napster-com/` marketing kit | Dark | No |
| Decks, slides, one-pagers, sales collateral | Dark | No |
| Product / app surfaces — admin, settings, forms, data tables, account UI | Dark default | Yes — opt into light with `data-theme="light"` |
| Developer docs / API reference | Both supported; default dark | Yes — readers may prefer light |
| Product screenshots / mockups inside decks | Capture each screenshot in the product's native mode | Deck or marketing chrome around the screenshot stays dark |
| Embedded third-party surfaces | Whatever the embed uses | Embed stays as-is; Napster chrome around it stays dark |
| Companion portraits | Dark canvas | No — frame in a contained dark cell when used on a light surface |

Brand constants do not change between modes. Role tokens do. On dark, `--accent` resolves to Napster Pink `#DD52CB`. On light, `--accent` resolves to pink-deep `#BE369D` so small text and eyebrows clear AA. Bright pink remains available on light only for large-display accents.

### Contrast (WCAG)

Body text `#FFFFFF` on `#000000`: contrast ratio 21:1. AAA.
Muted text `rgba(255,255,255,0.5)` composited on `#000000`: contrast ratio ~5.32:1. AA for normal text; fails AAA for normal text.
Pink `#DD52CB` on `#000000`: contrast ratio ~6.14:1. AA for normal text; use sparingly, never below 14px.
Pink-deep `#BE369D` on `#000000`: contrast ratio ~4.20:1. AA for large text and non-text UI only. Reserved for fills, not body copy.
White on `#BE369D` button: contrast ratio ~5.00:1. AA for normal text.
White on `#C33DA2` primary-button hover: contrast ratio ~4.66:1. AA for normal text.
White on `.btn-primary-pulse`'s button-specific gradient (`#EA2DD2` → `#E65AD5`): minimum contrast ratio ~3.09:1. AA for large text only. Use at ≥24px and weight ≥600.

Light primary text `#201820` on `#FAF8FC`: contrast ratio ~16.40:1. AAA.
Light muted text `rgba(32,24,32,0.64)` composited on `#FAF8FC`: contrast ratio ~5.08:1. AA for normal text.
Light subtle text `rgba(32,24,32,0.38)` composited on `#FAF8FC`: contrast ratio ~2.36:1. Non-body only: placeholders, disabled affordances, decorative metadata.
Light accent `#BE369D` on `#FAF8FC`: contrast ratio ~4.73:1. AA for normal text.
Light accent hover `#A82C8C` on `#FAF8FC`: contrast ratio ~5.85:1. AA for normal text.
Bright pink `#DD52CB` on `#FAF8FC`: contrast ratio ~3.24:1. Fails AA for normal text; use only for large-display accents on light.
White on light primary button `#BE369D`: contrast ratio ~5.00:1. AA for normal text.
White on light primary-button hover `#A82C8C`: contrast ratio ~6.17:1. AA for normal text.
White on light `.btn-primary-pulse` gradient (`#B92C9F` → `#962480`): minimum contrast ratio ~5.35:1. AA for normal text; component still stays locked to ≥24px and weight ≥600.

### Accessibility implementation

Text over fixed solid surfaces must use the measured pairings above. Text over imagery is not measurable from tokens alone: add a darken pass (`linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))`) until the text clears AA in the actual composition. The Napster Beam is overlay-only on imagery and never sits directly behind live text.

Napster is dark-first with a scoped app-surface light variant. Do not put light mode on marketing surfaces. Do not let CSS media queries flip the brand by default. App code may set `data-theme="light"` from explicit user preference, account preference, or OS preference.

For motion reduction, disable transitions and the pulse-button halo:

```css
@media (prefers-reduced-motion: reduce) {
  .btn,
  .btn-primary-pulse { transition: none; }
  .btn-primary-pulse { box-shadow: none; }
}
```

Bundled line icons are decorative unless they are the only visible label for a control. Decorative icons and orbs use `aria-hidden="true"`. Icon-only controls need an `aria-label` that names the action.

---

## 3. Typography

### Type families — three, all Google Fonts

The design system uses three Google Fonts. Nothing self-hosted. Nothing to upload. They resolve automatically the moment `colors_and_type.css` loads.

| Family | Role | Notes |
|---|---|---|
| **Inter** | Display, headlines, body, buttons, labels, UI chrome | Weights 300–900. Single face owns everything from `display-cover` down to `body-sm`. |
| **Instrument Serif** *(italic)* | Editorial accents | Italic only. Companion names, pull quotes, accent words inside headlines. The serif provides one editorial gear that sans typography can't reach. |
| **IBM Plex Mono** | Metadata | Eyebrows, timestamps, page numbers, slide chrome, footer markers. The mono is the brand's quiet narrator — never a headline voice. |
| Arial | System fallback only | — |

**A note on Avantt.** Avantt remains the display face on napster.com. It is no longer part of the design system. The reasons: (1) anyone at Napster using Claude Design shouldn't have to install a self-hosted commercial font; (2) the system has to cover product apps that can't ship Avantt. Google Fonts solves both. `reference/napster-com-audit.md` documents the live napster.com state, Avantt included, as a factual record of the marketing site.

**A note on Poppins.** The AKEO Brand Definition Proposal (2026) specifies Poppins as the Google Fonts *alternative* to Avantt — a three-tier stack of Avantt (primary) → Poppins (open-source substitute) → Arial (system fallback). Poppins's role was: *"used only when Avantt is not available."* Since v1.1.0 retired Avantt and adopted Inter — itself a Google Font — as the primary display face, the role Poppins was created to fill no longer exists. Inter is the alternative. Where AKEO sometimes paired Inter and Poppins at display sizes for stylistic contrast, the design system fills that role with Instrument Serif italic (companion names, pull quotes, accent words). Poppins is not a missing piece; it is a workaround for a problem the v1.1.0 typography migration solved differently. If anyone asks "why isn't Poppins in our system?" — this is the answer.

### Type scale

Two ramps coexist. **Marketing** sizes are live-verified from napster.com. **Document** sizes (h1–h4) extend the system for prose-heavy artifacts (PRDs, white papers, internal comms). Sizes do not change in v1.1.0; only the face assigned to each size does.

| Token | px | Role |
|---|---:|---|
| `display-cover` | 180 | Section dividers; oversized cover stats. *Inter 800.* |
| `display-1`     | 96  | Cover slides. *Inter 800.* |
| `display-2`     | 72  | Display alt. *Inter 700.* |
| `hero`          | 72  | Primary marketing hero. *Inter 700.* |
| `h1`            | 56  | Document H1. *Inter 700.* |
| `section`       | 41  | Section headline on marketing. *Inter 700.* |
| `h2`            | 40  | Document H2. *Inter 700.* |
| `title`         | 32  | Card titles. *Inter 600.* |
| `h3`            | 28  | Subsection. *Inter 600.* |
| `subtitle`      | 24  | Subtitle below hero. *Inter 400.* |
| `h4`            | 20  | Document H4. *Inter 600.* |
| `body-lg`       | 18  | Lead paragraph. *Inter 400.* |
| `body`          | 16  | Body default. *Inter 400.* |
| `body-sm`       | 14  | Buttons, small UI. *Inter 600 for buttons.* |
| `eyebrow`       | 12  | Eyebrow label. *IBM Plex Mono 500, uppercase, pink.* |
| `caption`       | 12  | Captions, footnotes. *Inter 400.* |
| `meta`          | 11  | Page numbers, slide chrome, footer markers. *IBM Plex Mono 400.* |

### Weights

Inter ships at every step: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold), 900 (Black). Most work lives between 400 and 800. 900 is reserved for the very largest display sizes. Instrument Serif italic ships at 400 only. IBM Plex Mono uses 400 (meta) and 500 (eyebrow).

### Tracking

| Token | Value | Use |
|---|---|---|
| `tracking-display` | `-0.025em` | Tight; mirrors the wordmark geometry |
| `tracking-hero`    | `-0.025em` | Inter at 72px needs slightly more compression than Avantt did |
| `tracking-section` | `-0.02em`  | Section headlines |
| `tracking-eyebrow` | `+0.04em`  | Plex Mono uppercase needs breathing room. The eyebrow's old `-0.01em` tightness was an Inter-specific value — mono inverts the rule. |
| `tracking-mono`    | `+0.02em`  | Default mono tracking (page numbers, timestamps) |
| `tracking-button`  | `+0.02em`  | Slight breathing room |
| `tracking-body`    | `0em`      | — |

### Line heights

`tight` 0.95 / `display` 1.02 / `headline` 1.10 / `body` 1.40 (default) / `body-loose` 1.60.

### Canonical text styles

**Hero headline.** Inter 700 / 72px / `-1.80px` / 1.10 / sentence case / `#FFFFFF`. Ends with a period. *"A specialist for every moment."*

**Section headline.** Inter 700 / 41px / `-0.82px` / 1.10 / sentence case / `#FFFFFF`.

**Eyebrow label.** IBM Plex Mono 500 / 12px / `+0.48px` / **UPPERCASE** / `#DD52CB`. **Every section starts with an eyebrow.** The mono character — quiet, technical, telegraphic — replaces the previous Inter Bold treatment.

**Body.** Inter 400 / 16px / 1.40 / `#FFFFFF`.

**Button.** Inter 600 / 14px / `#FFFFFF`.

**Editorial accent.** Instrument Serif italic 400. Inline use only. Three places live here:
- **Companion names** in prose. *"Meet [Kai Mercer]." [Kai Mercer] in italic serif.*
- **Accent words inside headlines.** Alternative to `.gradient-word` on the load-bearing noun. Use one or the other, never both.
- **Pull quotes.** `.pull-quote` class — 24px / 1.35 / italic / pink left rule.

**Meta.** IBM Plex Mono 400 / 11px / `+0.22px` / `rgba(255,255,255,0.5)`. Page numbers (`02 / 14`), timestamps (`14:32 UTC`), footer markers (`DESIGN SYSTEM · 2026 · v1.1.0`), spec values inside dense charts.

### Casing

- **Sentence case** for headlines and body. Title case is for proposal titles only ("A Brand Re-Definition Proposal").
- **UPPERCASE** for eyebrows, section chrome (page footers, chapter labels).
- **Buttons** sentence case ("Get started now", "Watch the film"). Never UPPERCASE buttons.
- Product name is always **Napster** (capital N, registered ®, never *NAPSTER* or *napster*).

### Voice & tone (load-bearing)

Napster writes like *a smart magazine about a serious idea* — editorial, declarative, unhedged. Never like a product marketer. Five patterns load the voice:

1. **Declarative sentences. Short ones.** *Software just became labor.*
2. **Contrast pairs** — old state / new state in parallel. *Before: Software = Tool you operate. Now: Software = Worker you manage.*
3. **Specific numbers**, never vague claims. *$5/hour vs the industry's $1/minute.* Not *"industry-leading"*.
4. **Rename the category, don't compete inside it.** We aren't a better chatbot — we're a **companion**. A **crew**.
5. **Name the invisible.** Start by naming a tension the reader hasn't articulated. *Every campus has a visible minority and an invisible majority.*

Full voice doctrine: `brand/voice-and-tone.md`.

---

## 4. Layout

### Grid + breakpoints

Marketing breakpoints: **1440** desktop / **768** tablet / **360** mobile. Decks render at 1280×720 (16:9) or 10in × 5.625in print equivalent.

### Spacing scale

4px base. Tokens are px-derived for self-documentation (`space-4` = 16px).

`0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`.

Marketing favors generous gutters: **64–128 px** between sections. Body copy lives at line-height 1.40; display headlines near-touch at 1.02–1.10.

### Universal stack

Every section follows: **Eyebrow → Title → Subtitle → Body → Action.** Skip none. The eyebrow is the section's name. The title is the claim. The subtitle is the qualifier. The body is the proof. The action is the next step.

### Composition rules

- **Horizontal lockup top-left** on every composition. The lockup is `logos/horizontal/napster-horizontal-{black|white}.svg` — the wordmark and n-mark together. This is what we call "the logo" in everyday usage, and it is the default mark on virtually every surface. The standalone wordmark (`logos/wordmark/napster-wordmark.svg`) is included for completeness and used only in deep-brand contexts where the n-mark would feel redundant; treat it as the exception, not the default. Clearspace ≥ lockup-height on all sides.
- **Pink lands on the load-bearing noun**, not verbs, not modifiers. One pink element per composition.
- Generous whitespace. If a slide has wall-to-wall text, the voice is also broken.
- Orbital compositions when content permits (user at center, companions surrounding).
- **Footer band** on every deck slide: ` ◯ ── BRAND DEFINITION PROPOSAL ─── 2026 ── 00 `. Optional but in-system.

### Row-budget rule (fixed-height layouts)

One-pagers, slides, and any composition with a fixed outer height must declare each band's height as a CSS custom property (`--row-hero`, `--row-specs`, etc.) and declare a `--sheet-max`. The sum of rows must equal `--sheet-max`. When a fix adds vertical pixels to one band, re-total the rows in the same edit — never leave the math for later. Bottom imprints/footers need ≥24px padding below them; they are the canary for budget overflow.

---

## 5. Elevation & Depth

Napster lives on black. True drop shadows are rare. Depth comes from inner glows, colored halos, and atmospheric blur.

### Shadow tokens

| Token | Value | Use |
|---|---|---|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.45)` | Subtle, on raised surfaces |
| `shadow-md` | `0 8px 24px rgba(0,0,0,0.55)` | Cards lifted off background |
| `shadow-lg` | `0 24px 64px rgba(0,0,0,0.65)` | Dialogs, modals |
| `shadow-panel` | `0 10px 40px rgba(0,0,0,0.35)` | Marketing panels (live-verified) |
| `shadow-inset-light` | `inset 0 0 0 0.5px rgba(255,255,255,0.35)` | Glass rim light |
| `inner-glow` | `inset 0 1px 0 rgba(255,255,255,0.10), inset 0 0 0 1px rgba(255,255,255,0.06)` | Card top-light |
| `glow-pink` | `0 0 40px rgba(255,16,232,0.35)` | The n-mark in brand-film moments (live-verified intensity) |
| `glow-pulse` | `0 0 80px rgba(234,45,210,0.45)` | Hero CTA halo |

### Blur tokens

| Token | Value | Use |
|---|---|---|
| `blur-panel` | `blur(20px) saturate(1.2)` | Default glass panels (live-verified) |
| `blur-card-glass` | `blur(24px) saturate(140%)` | Heavier glass over imagery |
| `blur-atmospheric` | `blur(100px)` | Hero glow shapes, n-mark bloom halo |

### Rules

- Dark background means things sit; they don't float. No cinematic drop shadows.
- Pink glow is a brand moment, not a UI affordance. Reserve it for hero imagery and the n-mark.
- Inner glow over outer drop, always.
- Transparency falls at documented steps: `0.04 / 0.10 / 0.20 / 0.35 / 0.50`. Don't invent fractional values.

---

## 6. Shapes

### Corner radii

| Token | Value | Use |
|---|---|---|
| `r-xs`   | `4px`    | Inline elements, small chips |
| `r-sm`   | `6px`    | Small UI |
| `r-md`   | `10px`   | ⭐ **Buttons**, default UI rounding (live-verified, 22 uses) |
| `r-lg`   | `16px`   | ⭐ **Cards** (live-verified, 15 uses) |
| `r-xl`   | `24px`   | Large cards, modals |
| `r-2xl`  | `48px`   | Hero panels, film frames |
| `r-pill` | `9999px` | Chips, tags, one hero CTA per page |
| `r-full` | `9999px` | Avatars, the n-mark |

### Geometric vocabulary

- **The Circle** is the brand's primary shape. n-mark, avatars, orbital compositions, button-fill animations on hover.
- **Rounded rectangles** for everything UI: buttons, cards, panels.
- **The Diamond / Star** is the brand's secondary mark. Reserved for select editorial moments. Sharp corners live here, and only here.
- No triangles. No drop-points. No comic-book arrows.

### Borders

- `1px solid rgba(255,255,255,0.10)` — the default panel border (live).
- `1px solid rgba(255,255,255,0.18)` — emphasized cards.
- `1px solid rgba(190,54,157,0.35)` — pink callout panel border.
- `1px solid rgba(255,161,243,0.20)` — secondary button (pink rim at 20%).
- **Never 2px.** Never dashed. Never solid full-color borders, except the deep-pink rim on `btn-secondary`.

---

## 7. Components

### Buttons

**Default `btn-primary`** (live-verified):
- Background `var(--btn-primary-bg)` (dark and light default to deep pink).
- Color white.
- Border-radius `10px`.
- Padding `18.5px 20px`.
- Font Inter 14px 600.
- Hover: `var(--btn-primary-hover-bg)` (`#C33DA2` on dark, `#A82C8C` on light).
- Press: `transform: scale(0.98)`.

**`btn-secondary`** (live-verified):
- Background `var(--btn-secondary-bg)` (subtle pink tint).
- Border `1px solid var(--btn-secondary-border)`.
- Otherwise same as primary.
- Hover: background `var(--btn-secondary-hover-bg)`.

**`btn-ghost`**:
- Transparent background, mode-aware text, narrower padding (`12px 16px`).
- Hover: color shifts to `var(--btn-ghost-hover-fg)`.

**`btn-primary-pulse`** — the hero CTA variant. **One per page maximum.**
- Background `var(--gradient-pulse-button)` (`#EA2DD2` → `#E65AD5` on dark; `#B92C9F` → `#962480` on light).
- Border-radius `9999px` (pill).
- `box-shadow: var(--glow-pulse)`.
- Padding `14px 20px`.
- Font Inter, at least 24px and weight 600. This is a large-text-only CTA because white text over pulse gradients cannot clear normal-text AA.
- Hover: add rim emphasis; do not brighten the gradient.

### Cards

| Class | Radius | Padding | Use |
|---|---|---|---|
| `card` | 16px | 24px | Default content cards |
| `card-large` | 24px | 32px | Hero panels, feature blocks |
| `card-hero` | 48px | 40px | Film-frame compositions, brand moments |
| `card-glass` | 48px | varies | Heavy glass over imagery; uses `blur-card-glass` + `inner-glow` |

Anatomy of a default card: `var(--card-bg)` surface · 1px `var(--card-border)` hairline · 16px radius · interior padding 24px · optional accent dot on the eyebrow.

### Panels (glass)

`.panel` — uses `surface-panel` + `panel-border` + `r-lg` + `blur-panel` + `shadow-inset-light` + `shadow-panel`. The default surface used inside heroes and modals.

`.panel-pink` — `surface-panel-pink` + `border-pink` + `r-lg`. Pink callout. Use sparingly.

### Forms / inputs

- Field background: `var(--input-bg)`.
- Border: `var(--input-border)`.
- Placeholder text: `var(--input-placeholder)`.
- Focus: border shifts to `var(--input-focus-border)`; no glow.
- Radius `10px` (matches buttons).

### Eyebrow

Every section starts with an eyebrow: IBM Plex Mono 500 / 12px / uppercase / `+0.48px` tracking / `var(--eyebrow-fg)`. Single line. No more than 3 words ideally. Examples: **MEET YOUR CREW.** **WHAT WE BUILT.** **PRICING.**

### Companion portraits in light mode

Companion portraits keep their dark cinematic treatment. Inside a light product surface, wrap the portrait tile in `.portrait-frame` and set `data-theme="dark"` on that wrapper. The surrounding app page stays light; the portrait cell actively resets to the dark token cascade.

### State variants summary

| Element | Hover | Press | Focus |
|---|---|---|---|
| Buttons | Background lightens ~5% (primary) or fills ~8% (secondary) | `scale(0.98)` | 2px outline `pink-rim` |
| Links | Underline appears; color shifts to `pulse-1` | — | underline persists |
| Cards | Border shifts `0.10` → `0.20` | — | outline `pink-rim` |
| Inputs | Border `0.10` → `0.20` | — | border → `pink-rim` |
| Icons | **Never** rotate; **never** color-cycle | — | — |

---

## 8. Do's and Don'ts

### Do's

1. **Start every section with an eyebrow.** IBM Plex Mono 500, 12px, uppercase, `+0.48px` tracking, `#DD52CB`. Single line.
2. **Put the horizontal lockup top-left.** (`logos/horizontal/`). The lockup, not the bare wordmark, is the default mark. Clearspace ≥ lockup-height on all sides.
3. **Use sentence case for headlines.** End hero lines with a period.
4. **Name companions.** Full human names: Kai Mercer. Kevin Jones. Never "your AI" or "the assistant". Set names in Instrument Serif italic when they appear in editorial prose ("Meet *Kai Mercer*.").
5. **Be specific with numbers.** `$5/hour`, `under an hour`, `2 million`, `1.5MW`. Never `industry-leading`, never `at scale`.
6. **Reserve the Beam for imagery.** It rides on top of hero photography at `mix-blend-mode: screen`.
7. **Round every corner you can.** The circle is the visual backbone.
8. **Re-total row budgets** in the same edit when you change a band's height. Bottom-imprint padding is the canary.
9. **Set metadata in IBM Plex Mono.** Page numbers, timestamps, footer markers, slide chrome. The mono signals "this is a fact, not a claim."

### Don'ts

1. **Use Napster Pink on the load-bearing noun only.** One pink element per composition. If pink occupies more than 5%, the composition is wrong.
2. **Never set the horizontal lockup below 24px wide.** Below that the n-mark's cat-headphone detail disappears. If you need a mark smaller than that, switch to the standalone n-mark (`logos/icon/`).
3. **Backgrounds are pure `#000000`.** Not `#111`, not `#0a0a0a`, not gradient.
4. **Default button radius is `10px`.** Pill shape is reserved for chips, tags, and one designated hero CTA per page.
5. **One headline weight per composition.** Inter 700 is the default for hero and section headlines. Inter 800/900 is reserved for the largest display sizes (`display-1`, `display-cover`). Don't mix 700 and 800 in the same composition — the rhythm breaks.
6. **Never set Instrument Serif upright.** The serif is italic-only in this system. Use it for editorial accents; never for an entire headline or paragraph.
7. **Never set body or headlines in IBM Plex Mono.** The mono is for metadata. A mono headline reads as a code sample, not a brand statement.
8. **No emoji.** Not in product. Not in marketing. Not in decks. Substitute with the bundled icon set or Lucide.
9. **Banned words:** *revolutionize, disrupt, game-changing, AI-powered, leverage, solution, seamlessly, effortlessly, powerful, unlock, empower, industry-leading, world-class, chatbot, assistant, bot, users.* Name the people: students, operators, counselors, fans.
10. **Never put the Napster Beam directly behind text.** Beam is overlay-only, `mix-blend-mode: screen` on imagery.
11. **Borders are 1px.** Never 2px, never dashed, never full-color solid (except the deep-pink rim on `btn-secondary`).
12. **Avoid Material Symbols** for UI icons. The geometric fill style fights Napster's circular line vocabulary. Use the bundled 22-icon set; Lucide is the fallback.
13. **Don't animate icons.** No rotation, no color-cycle, no spring overshoot. Icons are product furniture.
14. **Hover by opacity or brightness, never by scale.** Press is the only place scale lives (`0.98`).
15. **No exclamation marks at the end of CTAs.** No "Try Napster!" Use "Try Napster for free" — the declarative carries its own emphasis.
16. **Never use Title Case for editorial copy.** Title case is reserved for proposal titles and section chrome.

---

## Iconography (extension)

Napster ships a bundled icon set of 22 line icons under `icons/`: microphone, user, book, code, tool, data, graduation, shield, cloud, message, layers, question, phone, eye, clock, lock, key, trash, database, check, xcircle, zoom.

**Style.** 2px stroke, rounded caps, 24px viewBox. Tabler-/Untitled-UI-grade line family.

**Substitution rule.** If an icon you need is not in the bundled 22, prefer **Lucide** (`lucide.dev`) — same stroke weight, same rounded caps, same geometric family. Then **Untitled UI Icons**. **Avoid Material Symbols** — the geometric fill style fights Napster's circular line vocabulary.

**The n-mark is not a UI icon.** It is the brand mark. Three fidelities live under `logos/icon/`:
- `napster-n-mark.svg` — the full ceremonial OG cat-headphone-monk illustration.
- `napster-n-mark-simplified.svg` — compact, app-icon-grade.
- `napster-n-mark-line.svg` — 1-stroke outline.

Plus the simplified favicon-grade `napster-icon-white.svg` / `napster-icon-black.svg`.

**3D icons** referenced by the AKEO deck were not exportable as flat raster and are not in this bundle. Render with a 3D pipeline if needed; do not substitute with a flat icon.

---

## Motion (extension)

Motion is restrained. The product is calm; the motion is calm.

| Token | Value |
|---|---|
| `duration-fast` | 120ms — hover, opacity shift |
| `duration-mid`  | 160ms — brightness, background fade |
| `duration-slow` | 200ms — cross-fades, larger surfaces |
| Press duration  | 80ms |
| `easing`        | `cubic-bezier(0.22, 0.61, 0.36, 1)` (approx ease-out-cubic) |

**Principles:**
- Fades and gentle scales only. No spring overshoot, no parallax, no cinematic motion in UI.
- Save real motion for hero video.
- Hover changes brightness or background, never size.
- Press uses `scale(0.98)`. Nothing else scales.
- Icons never rotate. Icons never color-cycle.
- Page transitions cross-fade at `duration-slow`. No directional slides.

---

## 9. Imagery & Photography

Napster's image vocabulary is four-part. Every image in this bundle fits one of these slots. The folder layout under `imagery/` matches these categories one-to-one, so a Claude Design composition only needs to know the slot to find the right asset.

### 9.1 Warm Lifestyle — User Value

Humans in real environments. Warm amber-to-magenta color grade. Living rooms, studios, kitchens, offices, gyms. The customer in the scene, not modeling. **No stock photography.** **No B&W.**

- **Folders:** `imagery/people/crew/`, `imagery/brand-life/`
- **Use for:** product page heroes that need a human anchor, "About" pages, consumer storytelling, social posts.
- **Examples:** `imagery/people/crew/napster-productivity-crew-living-room.png`, `imagery/people/crew/napster-lifestyle-girl-desk.avif`, `imagery/brand-life/napster-brand-about-creator-workstation-multimodal-artifacts.png`.

### 9.2 Atmospheric / Cinematic — Brand Feeling

Abstract light, motion blur, purple atmospheric wash. The Beam gradient rides on top. Used in opening slides, dividers, hero film moments.

- **Folders:** `imagery/scenes/twin/`, `imagery/decorative/`, `imagery/scenes/sessions/`
- **Use for:** opening slides, section dividers, brand films, atmospheric headers, backgrounds when no product or person belongs.
- **Examples:** `imagery/scenes/twin/napster-twin-poster.avif`, `imagery/decorative/napster-element-pink-gradient.avif`, `imagery/decorative/napster-hero-bg.avif`.

### 9.3 Isolated Portraits — Companion Character

Clean, intimate, 3/4 framing. Single-source rim light, naturalistic. Background is the persona's environment (studio, kitchen, gym), not a void. When portraits sit over the dark canvas they receive a `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))` darken pass, optionally a Beam overlay.

- **Folders:** `imagery/people/portraits-hero/` (companion portraits — one file per companion; CSS sizes for hero or card use), `imagery/people/producers/` (music producers).
- **Companion role environments:** `imagery/scenes/companion-environments/` — atmospheric "where this role works" scenes (no person in frame). Pairs with the portrait set for layered hero compositions.
- **Use for:** companion roster pages, persona cards, "Meet the team" treatments, Crew lineups.
- **Filename convention:** `napster-companion-{firstname}-{surname}-{role}.{ext}` for portraits; `napster-companion-environment-{role}.{ext}` for environments. See `imagery/people/persona-roster.md` for the canonical roster (Amit's portrait is currently unsourced — environment-only).
- **Examples:** `imagery/people/portraits-hero/napster-companion-kai-mercer-chiefofstaff.avif`, `imagery/scenes/companion-environments/napster-companion-environment-creative.avif`, `imagery/people/producers/napster-producer-luna-rnb.avif`.

### 9.4 Product on Pure Black — Product Clarity

Hardware shots, product UI captures, spec details. Background is pure `#000000`. No environmental clutter.

- **Folders:** `imagery/product/{api,app,learn,mac,spaces,station,view}/`, `imagery/scenes/usecases/`
- **Use for:** product one-pagers, hero imagery on product landing pages, spec callouts, comparison panels. **When a user says "create a one-pager on Napster Station," reach for `imagery/product/station/`.** Same shape applies to Mac, View, Spaces, App, Learn, API.
- **Examples:** `imagery/product/station/napster-station-spec-voicefield.jpg`, `imagery/product/view/napster-view-spec-display.avif`, `imagery/product/mac/napster-mac-chat-ui.png`, `imagery/product/spaces/napster-spaces-hero.avif`.

### 9.5 Asset Map (where to look first)

| Prompt mentions… | Reach for |
|---|---|
| Napster Station, hardware, lobby, hotel, airport | `imagery/product/station/` |
| Napster View, glasses, stereoscopic, 3D headset | `imagery/product/view/` |
| Napster for Mac, desktop, macOS, the app on a laptop | `imagery/product/mac/` |
| Napster Spaces, conversational AI, video agent | `imagery/product/spaces/` |
| Napster Learn, education, higher-ed, L&D | `imagery/product/learn/` |
| Napster App (consumer mobile/tablet), music app | `imagery/product/app/` |
| Napster API, platform, developers | `imagery/product/api/` |
| A specific companion (Kai, May, JC, Elena, Kevin, Alyssa, Jordan, Richard, Jane) | `imagery/people/portraits-hero/` (one file each; CSS handles hero/card sizing). Amit has no portrait in the repo yet. |
| "Where this companion's role works" atmospheric scene | `imagery/scenes/companion-environments/napster-companion-environment-{role}.avif` |
| Music producers (Luna, Axel, Billie, Jasper, Mateo, Nyx, Ruby Mae, Sloane, Voltage) | `imagery/people/producers/` |
| Crew, lifestyle, customer-in-scene, family room, studio | `imagery/people/crew/` |
| About page, creator portraits, designer at workstation | `imagery/brand-life/` |
| Brand film, atmospheric background, opening slide | `imagery/scenes/twin/`, `imagery/decorative/` |
| Session flow, "pick → talk → shape → share" | `imagery/scenes/sessions/` |
| Use cases (coding, writing, creative) | `imagery/scenes/usecases/` |
| Decorative element, gradient panel, footer CTA, grain texture | `imagery/decorative/` |

### 9.6 Treatments

- **Grain overlay.** Apply `imagery/decorative/napster-grain-texture.jpg` with `mix-blend-mode: screen` at ~18% opacity over solid panels for tactile depth.
- **Beam overlay.** `mix-blend-mode: screen`, opacity ~0.55. Hero imagery only. **Never behind text.**
- **Darken pass.** Portraits over dark canvas get `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))` on top to seat them.

### 9.7 Never

- Stock iconography.
- Illustration-style humans.
- Busy patterns.
- B&W photography.
- Photography of devices that don't exist in the Napster product family.
- Smiles in marketing portraits unless the persona is mid-laugh in candid context.

---

*Maintained as part of the Napster brand system. Primary author of voice: Ziv Navoth. Visual system: AKEO Brand Definition Proposal (Mateo Reyes, April 2026). Live-tokens reconciliation: April 2026 napster.com audit.*
