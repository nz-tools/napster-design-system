---
name: napster
description: >
  The unified Napster design system. Dark cinematic identity, circular visual
  backbone, Napster Pink accent. Audience-facing: this is the system Claude Design
  uses to generate all Napster-branded artifacts.
version: 1.0.14
sources:
  - napster.com (live audit, April 2026 — the customer-facing truth)
  - AKEO Brand Definition Proposal (Mateo Reyes, 2026 — structural framework)
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
    family-display:   "Avantt, 'Helvetica Neue', Arial, sans-serif"
    family-body:      "Inter, 'Helvetica Neue', sans-serif"
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
    weight-medium:    500
    weight-semibold:  600
    weight-bold:      700
    weight-extrabold: 800
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
      description: Companion portraits, 3/4 framing, rim-lit, persona environment behind. Darken pass over dark canvas.
      role: Companion Character
      paths:
        - imagery/people/portraits-hero/*
        - imagery/people/portraits-thumb/*
        - imagery/people/producers/*
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

1. **The Circle.** The OG headphone-monk n-mark is circular. Avantt was chosen for its circular letterforms. Every surface rounds its corners. If a corner can be rounded without breaking meaning, round it.
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

### Contrast (WCAG)

Body text `#FFFFFF` on `#000000`: contrast ratio 21:1. AAA.
Muted text `rgba(255,255,255,0.5)` on `#000000`: contrast ratio 10.5:1. AAA.
Pink `#DD52CB` on `#000000`: contrast ratio 5.4:1. AA for body text. Use sparingly, never below 14px.
Pink-deep `#BE369D` on `#000000`: contrast ratio 4.6:1. AA. Reserved for button fills with white text.
White on `#BE369D` button: contrast 4.6:1. AA.

---

## 3. Typography

### Type families

| Family | Use | Source |
|---|---|---|
| **Avantt** | Display, headlines, stats, large accents | Licensed from Displaay Type Foundry. Self-hosted in `typography/fonts/`. |
| **Inter** | Body, buttons, labels, UI chrome | Open source. Loaded via Google Fonts CDN. |
| Arial | System fallback only | — |

### Type scale

Two ramps coexist. **Marketing** sizes are live-verified from napster.com. **Document** sizes (h1–h4) extend the system for prose-heavy artifacts (PRDs, white papers, internal comms).

| Token | px | Role |
|---|---:|---|
| `display-cover` | 180 | Section dividers; oversized cover stats. |
| `display-1`     | 96  | Cover slides. |
| `display-2`     | 72  | Display alt. |
| `hero`          | 72  | Primary marketing hero. *Live: Avantt 600.* |
| `h1`            | 56  | Document H1. |
| `section`       | 41  | Section headline on marketing. *Live: Avantt 600.* |
| `h2`            | 40  | Document H2. |
| `title`         | 32  | Card titles. |
| `h3`            | 28  | Subsection. |
| `subtitle`      | 24  | Subtitle below hero. |
| `h4`            | 20  | Document H4. |
| `body-lg`       | 18  | Lead paragraph. |
| `body`          | 16  | Body default. |
| `body-sm`       | 14  | Buttons, small UI. |
| `eyebrow`       | 12  | Eyebrow label. *Live: Inter 700.* |
| `caption`       | 12  | Captions, footnotes. |
| `meta`          | 11  | Page numbers, slide chrome. |

### Weights

300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold).

### Tracking

| Token | Value | Use |
|---|---|---|
| `tracking-display` | `-0.025em` | Tight; mirrors the wordmark geometry |
| `tracking-hero`    | `-0.02em`  | `-1.44px` at 72px (live) |
| `tracking-section` | `-0.02em`  | `-0.82px` at 41px (live) |
| `tracking-eyebrow` | `-0.01em`  | `-0.12px` at 12px (live; **tight, not airy**) |
| `tracking-button`  | `+0.02em`  | Slight breathing room |
| `tracking-body`    | `0em`      | — |

### Line heights

`tight` 0.95 / `display` 1.02 / `headline` 1.10 / `body` 1.40 (live default) / `body-loose` 1.60.

### Canonical text styles

**Hero headline.** Avantt 600 / 72px / `-1.44px` / 1.10 / sentence case / `#FFFFFF`. Ends with a period. *"A specialist for every moment."*

**Section headline.** Avantt 600 / 41px / `-0.82px` / 1.10 / sentence case / `#FFFFFF`.

**Eyebrow label.** Inter 700 / 12px / `-0.12px` / **UPPERCASE** / `#DD52CB`. **Every section starts with an eyebrow.**

**Body.** Inter 400 / 16px / 1.40 / `#FFFFFF`.

**Button.** Inter 600 / 14px / `#FFFFFF`.

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
- Background `#BE369D` (deep pink).
- Color white.
- Border-radius `10px`.
- Padding `18.5px 20px`.
- Font Inter 14px 600.
- Hover: lighten background ~5% to `#CB42AC`.
- Press: `transform: scale(0.98)`.

**`btn-secondary`** (live-verified):
- Background `rgba(190,54,157,0.02)` (subtle pink tint).
- Border `1px solid rgba(255,161,243,0.20)`.
- Otherwise same as primary.
- Hover: background `rgba(190,54,157,0.08)`.

**`btn-ghost`**:
- Transparent background, white text, narrower padding (`12px 16px`).
- Hover: color shifts to `pulse-1` `#EA2DD2`.

**`btn-primary-pulse`** — the hero CTA variant. **One per page maximum.**
- Background `var(--gradient-pulse)`.
- Border-radius `9999px` (pill).
- `box-shadow: var(--glow-pulse)`.
- Padding `14px 20px`.
- Font Avantt 16px 600.
- Hover: `filter: brightness(1.08)`.

### Cards

| Class | Radius | Padding | Use |
|---|---|---|---|
| `card` | 16px | 24px | Default content cards |
| `card-large` | 24px | 32px | Hero panels, feature blocks |
| `card-hero` | 48px | 40px | Film-frame compositions, brand moments |
| `card-glass` | 48px | varies | Heavy glass over imagery; uses `blur-card-glass` + `inner-glow` |

Anatomy of a default card: Mulberry surface (`#1A0918`) · 1px hairline border (`rgba(255,255,255,0.10)`) · 16px radius · interior padding 24px · optional pink accent dot on the eyebrow.

### Panels (glass)

`.panel` — uses `panel-fill` (4% white) + `panel-border` + `r-lg` + `blur-panel` + `shadow-inset-light` + `shadow-panel`. The default surface used inside heroes and modals.

`.panel-pink` — `panel-fill-pink` (8% deep-pink) + `border-pink` + `r-lg`. Pink callout. Use sparingly.

### Forms / inputs

- Field background: `rgba(255,255,255,0.04)`.
- Border: `rgba(255,255,255,0.10)`.
- Placeholder text: `fg-subtle` `rgba(255,255,255,0.2)`.
- Focus: border shifts to `pink-rim` `rgba(255,161,243,1.0)`; no glow.
- Radius `10px` (matches buttons).

### Eyebrow

Every section starts with an eyebrow: Inter 700 / 12px / uppercase / `-0.12px` tracking / `#DD52CB`. Single line. No more than 3 words ideally. Examples: **MEET YOUR CREW.** **WHAT WE BUILT.** **PRICING.**

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

1. **Start every section with an eyebrow.** Inter 700, 12px, uppercase, `#DD52CB`. Single line.
2. **Put the horizontal lockup top-left.** (`logos/horizontal/`). The lockup, not the bare wordmark, is the default mark. Clearspace ≥ lockup-height on all sides.
3. **Use sentence case for headlines.** End hero lines with a period.
4. **Name companions.** Full human names: Kai Mercer. Kevin Jones. Never "your AI" or "the assistant".
5. **Be specific with numbers.** `$5/hour`, `under an hour`, `2 million`, `1.5MW`. Never `industry-leading`, never `at scale`.
6. **Reserve the Beam for imagery.** It rides on top of hero photography at `mix-blend-mode: screen`.
7. **Round every corner you can.** The circle is the visual backbone.
8. **Re-total row budgets** in the same edit when you change a band's height. Bottom-imprint padding is the canary.

### Don'ts

1. **Use Napster Pink on the load-bearing noun only.** One pink element per composition. If pink occupies more than 5%, the composition is wrong.
2. **Never set the horizontal lockup below 24px wide.** Below that the n-mark's cat-headphone detail disappears. If you need a mark smaller than that, switch to the standalone n-mark (`logos/icon/`).
3. **Backgrounds are pure `#000000`.** Not `#111`, not `#0a0a0a`, not gradient.
4. **Default button radius is `10px`.** Pill shape is reserved for chips, tags, and one designated hero CTA per page.
5. **Never pair display weights heavier than 600 within the same composition.** ExtraBold reads as shouting; Bold and Semibold side-by-side compete.
6. **No emoji.** Not in product. Not in marketing. Not in decks. Substitute with the bundled icon set or Lucide.
7. **Banned words:** *revolutionize, disrupt, game-changing, AI-powered, leverage, solution, seamlessly, effortlessly, powerful, unlock, empower, industry-leading, world-class, chatbot, assistant, bot, users.* Name the people: students, operators, counselors, fans.
8. **Never put the Napster Beam directly behind text.** Beam is overlay-only, `mix-blend-mode: screen` on imagery.
9. **Borders are 1px.** Never 2px, never dashed, never full-color solid (except the deep-pink rim on `btn-secondary`).
10. **Avoid Material Symbols** for UI icons. The geometric fill style fights Napster's circular line vocabulary. Use the bundled 22-icon set; Lucide is the fallback.
11. **Don't animate icons.** No rotation, no color-cycle, no spring overshoot. Icons are product furniture.
12. **Hover by opacity or brightness, never by scale.** Press is the only place scale lives (`0.98`).
13. **No exclamation marks at the end of CTAs.** No "Try Napster!" Use "Try Napster for free" — the declarative carries its own emphasis.
14. **Never use Title Case for editorial copy.** Title case is reserved for proposal titles and section chrome.

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

- **Folders:** `imagery/people/portraits-hero/` (large), `imagery/people/portraits-thumb/` (cards), `imagery/people/producers/` (music producers)
- **Use for:** companion roster pages, persona cards, "Meet the team" treatments, Crew lineups.
- **Filename convention:** `napster-companion-{firstname}-{surname}-{role}.{ext}`. See `imagery/people/persona-roster.md` for the canonical roster.
- **Examples:** `imagery/people/portraits-hero/napster-companion-kai-mercer-chiefofstaff.avif`, `imagery/people/portraits-hero/napster-companion-may-li-creative.avif`, `imagery/people/producers/napster-producer-luna-rnb.avif`.

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
| A specific companion (Kai, May, JC, Elena, Kevin, Alyssa, Jordan, Richard, Jane, Amit) | `imagery/people/portraits-hero/` (large) or `portraits-thumb/` (cards) |
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
