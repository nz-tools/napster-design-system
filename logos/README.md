# Napster Logos

Three marks live in this folder. Reach for them in this order of default.

## The Logo (the default — use this almost everywhere)

The **horizontal lockup**: wordmark + n-mark together, side by side. This is what "the Napster logo" means in everyday usage, and it is the default mark on virtually every surface.

- `horizontal/napster-horizontal-black.svg` — for white or light backgrounds
- `horizontal/napster-horizontal-white.svg` — for the canonical pure black canvas
- `horizontal/napster-horizontal-black-256w.jpg` — raster fallback at 256px width

**Place it top-left of every composition.** Clearspace ≥ lockup-height on all sides. Never set the lockup below 24px wide — below that, the n-mark's cat-headphone detail disappears.

## The Vertical Lockup (narrow or centered hero contexts)

Wordmark stacked over (or with) the n-mark — taller than wide. Use when the composition is centered, when the column is narrow, or when a stacked silhouette reads better than a horizontal one.

- `wordmark/napster-vertical-black.svg`
- `wordmark/napster-vertical-white.svg`

## The N-mark (small contexts only)

The icon alone. Use when there is not enough room for the lockup, or when the mark is being deployed as a standalone symbol (favicon, app icon, social avatar, hero film moment, internal app surface where Napster identity is already established).

Three fidelities — pick the one that matches the rendering size and context:

- `icon/napster-n-mark.svg` — the full ceremonial OG cat-headphone-monk illustration. Hero and brand-film moments.
- `icon/napster-n-mark-simplified.svg` — compact, app-icon-grade. Default for favicons and small mark deployments.
- `icon/napster-n-mark-line.svg` — 1-stroke outline. UI accents only.

Plus the simple black/white variants used in code surfaces:

- `icon/napster-icon-black.svg`
- `icon/napster-icon-white.svg`

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

---

See `DESIGN.md` § 4 *Layout* for the placement rule and § 8 *Do's and Don'ts* for the non-negotiables.
