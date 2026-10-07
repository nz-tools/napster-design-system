# Napster Logos

Three marks live in this folder. Reach for them in this order of default.

## The Logo (the default — use this almost everywhere)

The **horizontal lockup**: wordmark + n-mark together, side by side. This is what "the Napster logo" means in everyday usage, and it is the default mark on virtually every surface.

- `horizontal/napster-horizontal-black.svg` — for white or light backgrounds
- `horizontal/napster-horizontal-white.svg` — for the canonical pure black canvas
- `horizontal/napster-horizontal-black-256w.jpg` — raster fallback at 256px width
- Each color also ships as `.pdf` and `-2048w.png`. See *File formats* below.

**Place it top-left of every composition.** Clearspace ≥ lockup-height on all sides. Never set the lockup below 80px wide on screen or 20mm in print. Below that it stops being legible; switch to the icon. The minimum applies to the visible artwork. The lockup files carry padding inside their canvas (the artwork is 79% of the canvas width), so an image set 42px tall shows a lockup about 83px wide.

## The Vertical Lockup (narrow or centered hero contexts)

Wordmark stacked over (or with) the n-mark — taller than wide. Use when the composition is centered, when the column is narrow, or when a stacked silhouette reads better than a horizontal one.

- `wordmark/napster-vertical-black.svg`
- `wordmark/napster-vertical-white.svg`
- Each color also ships as `.pdf` and `-2048w.png`.

## The N-mark (small contexts only)

The icon alone. Use when there is not enough room for the lockup, or when the mark is being deployed as a standalone symbol (favicon, app icon, social avatar, hero film moment, internal app surface where Napster identity is already established).

Three fidelities — pick the one that matches the rendering size and context:

- `icon/napster-n-mark.svg` — the full ceremonial OG cat-headphone-monk illustration. Hero and brand-film moments.
- `icon/napster-n-mark-simplified.svg` — compact, app-icon-grade. Default for favicons and small mark deployments.
- `icon/napster-n-mark-line.svg` — 1-stroke outline. UI accents only.

Plus the simple black/white variants used in code surfaces:

- `icon/napster-icon-black.svg`
- `icon/napster-icon-white.svg`
- Each color also ships as `.pdf` and `-2048w.png`. This is the file to send when someone asks for "just the cat head".

### The glass n-mark is artwork, not a formula

`icon/napster-n-mark.svg` is the pink glass version of the icon. AKEO built it from about ten layered effects, gradients and glass treatments stacked together. There is no single gradient to quote, and renderers disagree on the SVG's blur filters, so the PNG is the reference:

- `icon/napster-n-mark-654w.png` — exported from AKEO's Figma (Identity Manual, *Icon: Social & App*) at its native 654×635, transparent background.

Use the PNG wherever fidelity matters. For anything larger, export from the Figma source at 2× or 4×. Do not upscale the PNG and do not rebuild the effect in CSS.

Never set the icon below 20px high on screen or 5mm in print.

**The n-mark is not a UI icon.** It is the brand mark. Do not use it as a button glyph, a menu item, or in place of an icon from `icons/`.

## The Standalone Wordmark (rarely used)

The bare text "napster" without the n-mark.

- `wordmark/napster-wordmark.svg`

**This is not the default mark.** In practice, we always reach for the horizontal lockup — even when the design feels like it "just needs the word." The standalone wordmark is included here for completeness and for the rare deep-brand context where the n-mark would feel redundant (for example, inside a composition that already features the n-mark as a hero element). Treat its use as a deliberate exception, not a shortcut.

## Quick reference

| Surface | Use |
|---|---|
| Top-left of any composition, slide, one-pager, landing page | Horizontal lockup |
| Centered hero treatment in a narrow column | Vertical lockup |
| Favicon, app icon, social avatar | N-mark (simplified) |
| Brand-film hero moment, splash | N-mark (full, ceremonial) |
| UI accent at small size | N-mark (line) |
| Composition that already shows the n-mark as a hero element and now needs the word | Standalone wordmark (exception, not default) |

## Specifications

Color, typeface and glass-mark answers come from AKEO (2026-10-02). Minimum sizes and the mid-tone rule come from AKEO's 2026 Identity Manual. The last two rows describe the files as they stand.

| Question | Answer |
|---|---|
| Logo color | One color. Pure White `#FFFFFF` on dark backgrounds, Jet Black `#000000` on light ones. On mid-tone or gray backgrounds, pick whichever gives the stronger contrast. |
| Logotype typeface | There is none to name. The Napster lettering is custom artwork that predates the 2026 brand refresh. An earlier agency drew it, the refresh left it unchanged, and its source typeface is not on record. Never retype the name in a font. Use the supplied files. |
| Brand typefaces | AKEO's brand materials pair Avantt with Inter. This system uses Inter, Instrument Serif italic and IBM Plex Mono. See `DESIGN.md` § 3. |
| Smallest lockup | 80px wide on screen. 20mm / 0.8in wide in print. |
| Smallest icon | 20px high on screen. 5mm / 0.2in high in print. |
| Registered mark | The horizontal lockup carries the ® beside the wordmark. The vertical lockup and the icon do not. |
| Pantone and CMYK | Not assigned. The logo is black or white, so it needs no color match. The brand pinks are specified in hex only; neither AKEO's Identity Manual nor this system carries Pantone or CMYK values for them. |

## File formats

The horizontal lockup, the vertical lockup and the icon each ship in black and white, in three formats, side by side in their folders.

| Format | Use |
|---|---|
| `.svg` | The master. Web, product UI, Figma, anything that takes vectors. |
| `.pdf` | Vector, for printers and manufacturers. Opens in Adobe Illustrator when a vendor cannot use the SVG. |
| `-2048w.png` | Raster, 2048px wide, transparent background. Slides, documents, and tools that reject vectors. |

The PDF and PNG files are exported from the SVG masters in this folder. If a master changes, re-export both.

---

See `DESIGN.md` § 4 *Layout* for the placement rule and § 8 *Do's and Don'ts* for the non-negotiables.
