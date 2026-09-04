# AKEO App UI handoff — provenance and decisions

Inspected 2026-09-04. Source file: `dTio7KKLKwFStKJr1pguKc`, Documentation page `27:548`. Repository base: `75a9310d9529004b384a8e71efceb65dd4aa0c82` (v1.3.2 documentation). Design context and screenshots were read for buttons, icon buttons, dialogs, tooltips, agent application examples, and shadow/glow tables. This is a curated developer translation, not a claim that all Figma pages or the running NfW application were audited.

## Source map

| Figma section | Source | Included in Git |
|---|---|---|
| Grid & Layout in Apps | [27:949](https://www.figma.com/design/dTio7KKLKwFStKJr1pguKc?node-id=27-949) | Small 320–511px grid: 8 columns, 8px gutter, 16px margin; repeated larger-screen labels withheld |
| Typography | [27:8646](https://www.figma.com/design/dTio7KKLKwFStKJr1pguKc?node-id=27-8646) | 14px body, 12px caption, 16/20/24px title roles; canonical Git fonts retained |
| Color | [27:2761](https://www.figma.com/design/dTio7KKLKwFStKJr1pguKc?node-id=27-2761) | Reuse existing palette; do not replace it with conflicting source scales/ratios |
| Using Color in Product | [27:3051](https://www.figma.com/design/dTio7KKLKwFStKJr1pguKc?node-id=27-3051) | Semantic intent, accent vs critical; no invented blue palette |
| Regular Button | [27:4270](https://www.figma.com/design/dTio7KKLKwFStKJr1pguKc?node-id=27-4270) | Primary/secondary/tertiary hierarchy, local grouping, overflow and vertical stacks |
| Icon Button | [27:6028](https://www.figma.com/design/dTio7KKLKwFStKJr1pguKc?node-id=27-6028) | Familiar icons, consistent glyphs, tooltip guidance, 44px minimum target (`27:6165`) |
| Radius Rules | [27:4820](https://www.figma.com/design/dTio7KKLKwFStKJr1pguKc?node-id=27-4820) | 8/12/16/20/24px, pill and circle; 1px standard and 2px emphasized boundaries |
| Agent Applications | [27:6464](https://www.figma.com/design/dTio7KKLKwFStKJr1pguKc?node-id=27-6464) | Container alignment; 24px inset (`27:7051`), 32px window/40px section/6px+8px internal spacing (`27:8644`) |
| App surface example | [27:6862](https://www.figma.com/design/dTio7KKLKwFStKJr1pguKc?node-id=27-6862) | Observed `#171717` dark card fill, top navigation and cards |
| Confirmation Dialog | [117:2922](https://www.figma.com/design/dTio7KKLKwFStKJr1pguKc?node-id=117-2922) | Concise decision copy, center/scrim, primary above cancel, Escape cancels |
| Tooltip | [117:3411](https://www.figma.com/design/dTio7KKLKwFStKJr1pguKc?node-id=117-3411) | Descriptive/info variants, brief delay, wrapping, placement, one tooltip at a time |

## Reconciliation decisions

| Difference | Implementation decision |
|---|---|
| AKEO Avantt VF / SF Pro vs Git Inter | Preserve the deliberate three-font migration. Use Inter for the App UI. |
| AKEO app radius names vs Git marketing radii | Add `--nfw-radius-*`; preserve every existing `--r-*` value. |
| AKEO glass/translucent action samples | Retain canonical opaque primary color/hover for predictable contrast. Pill shape and hierarchy carry the App UI adaptation. |
| Black/neutral App UI vs mulberry brand card | Scope `#171717` to the dedicated app card role. Keep existing brand cards intact. |
| AKEO dark screens only | Reuse Git’s existing opt-in light policy; light App UI values are implementation adaptations. |
| Marketing eyebrows, punctuation, sparse pink | Product headings use task language without required eyebrows/periods; pink remains action emphasis. |
| 24px vs 32px inset | Standard/spacious variants, not nested or contradictory defaults. |

## Source elevation values

[Layered shadow table, 27:5852](https://www.figma.com/design/dTio7KKLKwFStKJr1pguKc?node-id=27-5852): all X offsets and spreads are 0. Y/blur/opacity: `100/80/21%`, `41.78/33.42/15%`, `22.34/17.87/13%`, `12.52/10.02/10%`, `6.55/5.32/9%`, `2.77/2.21/6%`. The table does not specify the shadow color; do not silently invent a complete CSS shadow from it.

[Inner glow table, 27:5988](https://www.figma.com/design/dTio7KKLKwFStKJr1pguKc?node-id=27-5988): inset layers `X=-1, Y=-1, blur=0.5, white 50%` and `X=1, Y=1, blur=0.5, white 100%`. Spread is not specified in the table. Runtime recipes retain the existing mode-aware shadow/glow choices until this treatment is reconciled against actual surfaces.

## Open design questions

- Grid and typography boards repeat small-grid placeholder prose. No trustworthy complete medium/large breakpoint matrix is present in that documentation.
- The color board says “14 stops from 0 to 10 in half-step increments”; those counts disagree. Several secondary swatches repeat the same hex label. Existing Git tokens remain authoritative.
- AKEO describes red/blue/green semantics without a complete approved, mode-specific semantic token mapping in the inspected documentation.
- Dialog width is described as fixed, but no dependable normative width/max-height value is supplied. The recipe’s 360px cap and viewport safety are implementation defaults.
- Tooltip delay is described as short, with no duration. The specimen uses 400ms. Its keyboard/hover persistence follows the accessible interaction contract in APP-UI.md.
- Loading/error/empty states, keyboard navigation, forms, tables, host integration and agent lifecycle are not fully specified. Added engineering guidance is explicitly identified in APP-UI.md.

These questions do not prevent using the documented common patterns. They must not be presented as AKEO-approved specifications or evidence of a live desktop audit.
