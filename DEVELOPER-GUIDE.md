# Napster Design System — Developer Guide

This guide is for production app teams and Claude Code sessions using the Napster design system outside Claude Design.

## Default integration contract

Consume a pinned release tag. Do not float on `main`.

```bash
git submodule add https://github.com/nz-tools/napster-design-system.git vendor/napster-design-system
cd vendor/napster-design-system
git checkout v1.3.0
cd ../..
git add .gitmodules vendor/napster-design-system
```

If submodules are not allowed in the app repo, copy the release-tag contents at build time or vendor them in a `vendor/napster-design-system/` folder. The important rule is intentional upgrades: app teams bump from `v1.3.0` to a later tag deliberately, review the diff, and ship that change like any other dependency update.

## Required CSS import

Every integration path starts with the canonical CSS. It loads the three Google Fonts, defines the CSS custom properties, and provides semantic classes.

```css
@import "./vendor/napster-design-system/colors_and_type.css";
```

If your app uses Next.js font optimization or has a strict CSP, load Inter, Instrument Serif italic, and IBM Plex Mono through your app's font pipeline, but keep the family names aligned with `--font-display`, `--font-body`, `--font-serif`, and `--font-mono`.

If your app uses the light app-surface variant through plain CSS classes or Tailwind v3, import the light token cascade after the canonical CSS. Tailwind v4 apps get this through `tokens/tailwind-v4.css`.

```css
@import "./vendor/napster-design-system/colors_and_type.css";
@import "./vendor/napster-design-system/tokens/theme-light.css";
```

## Asset URL override

The `.grain` utility needs the grain texture. Apps that import the CSS from another path should set the full URL custom property at the app root:

```css
:root {
  --napster-grain-texture: url("/assets/napster/imagery/decorative/napster-grain-texture.jpg");
}
```

CSS cannot reliably concatenate a custom-property base path inside `url()`, so the override is the full `url(...)` value. `--napster-asset-base` is reserved for app build tooling that wants to compute that URL before CSS is emitted.

## Path 1: CSS classes

Use this when you want the smallest integration surface.

```jsx
import "./vendor/napster-design-system/colors_and_type.css";
import "./vendor/napster-design-system/tokens/theme-light.css";

export function NapsterButton() {
  return <button className="btn btn-primary">Get started now</button>;
}
```

Use `components/reference.md` for copy-paste patterns and `DESIGN.md` for the rationale behind them.

## Path 2: Tailwind

### Tailwind v4

Import Tailwind, the canonical CSS, then the v4 alias adapter.

```css
@import "tailwindcss";
@import "./vendor/napster-design-system/colors_and_type.css";
@import "./vendor/napster-design-system/tokens/tailwind-v4.css";
```

The adapter maps existing variables such as `--accent` and `--r-md` into Tailwind namespaces such as `--color-accent` and `--radius-md`. It also defines a custom `light:` variant for `[data-theme="light"]`.

```jsx
export function TailwindNapsterButton() {
  return (
    <button className="rounded-md bg-btn-primary-bg px-5 py-4 font-body text-body-sm font-semibold text-btn-primary-fg hover:bg-btn-primary-hover-bg light:bg-btn-primary-bg light:hover:bg-btn-primary-hover-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus-ring">
      Get started now
    </button>
  );
}
```

### Tailwind v3

Use the preset config and keep importing `colors_and_type.css` plus `tokens/theme-light.css` if your app supports the light variant. The preset defines a `light:` variant through a Tailwind v3 plugin.

```js
const napster = require("./vendor/napster-design-system/tokens/tailwind-v3.config.cjs");

module.exports = {
  presets: [napster],
  content: ["./src/**/*.{js,jsx,ts,tsx}"]
};
```

## Path 3: CSS-in-JS or token imports

`tokens/theme.json` is the plain tooling surface. Top-level values are runtime CSS variable references; `theme.dark` and `theme.light` provide resolved mode values. `tokens/theme.ts` wraps it with TypeScript key unions.

```ts
import { theme, lightTheme, type ColorToken } from "./vendor/napster-design-system/tokens/theme";

const primary: ColorToken = "pink-deep";

export const buttonStyles = {
  background: theme.color[primary],
  color: theme.color.fg,
  borderRadius: theme.radius.md,
  fontFamily: theme.fontFamily.body
};

const lightCanvas = lightTheme.color.bg;
```

Top-level `theme.color` values are CSS variable references. Import `colors_and_type.css` somewhere in the app shell so `var(...)` resolves at runtime.

## Build a Napster-branded button

Default production button:

```jsx
<button className="btn btn-primary">Get started now</button>
```

Hero pulse CTA:

```jsx
<button className="btn btn-primary-pulse">Start building</button>
```

The pulse CTA is large-text-only: keep it at 24px or larger and weight 600 or heavier. Use it once per page maximum.

## Dark-first, app-surface light variant

Napster remains dark-canonical for marketing surfaces, decks, one-pagers, and brand films. Product/app surfaces may opt into light mode with `data-theme="light"` on a wrapping element. Do not add CSS-level `prefers-color-scheme: light` plumbing; app JavaScript can read OS preference and set the attribute intentionally.

```html
<div data-theme="light">
  <main>
    <!-- admin, settings, forms, tables, and account UI -->
  </main>
</div>

<aside data-theme="dark">
  <!-- dark Napster chrome or companion portrait cell -->
</aside>
```

### Next.js theme attribute

```tsx
export function AppShell({ children, theme = "dark" }: { children: React.ReactNode; theme?: "dark" | "light" }) {
  return <div data-theme={theme}>{children}</div>;
}
```

Read the user preference from a cookie in a server component, or from localStorage in a small client component that updates `document.documentElement.dataset.theme`. Keep the default dark.

### Vite + React hook

```tsx
import { useEffect, useState } from "react";

export function useNapsterTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return { theme, setTheme };
}
```

### CSS-in-JS light tokens

```ts
import { lightTheme } from "./vendor/napster-design-system/tokens/theme";

export const lightPanel = {
  background: lightTheme.color["surface-card"],
  color: lightTheme.color.fg
};
```

## Claude Code setup

Put this in the consuming app's `CLAUDE.md`:

```md
# Napster design system

Use `vendor/napster-design-system` as the source of truth for Napster UI.

Read these first:
- `vendor/napster-design-system/DEVELOPER-GUIDE.md`
- `vendor/napster-design-system/DESIGN.md`
- `vendor/napster-design-system/components/reference.md`

Prefer:
- `colors_and_type.css` semantic classes for common UI
- `tokens/tailwind-v4.css` or `tokens/tailwind-v3.config.cjs` for Tailwind apps
- `tokens/theme.json` / `tokens/theme.ts` for CSS-in-JS

Rules:
- Do not float on `main`; use the pinned release tag in the submodule/vendor folder.
- Napster is dark-first. Use `data-theme="light"` only for product/app surfaces.
- Do not use Avantt in product apps.
- Use Inter for display/body/UI, Instrument Serif italic for editorial accents, and IBM Plex Mono for metadata/eyebrows.
- Use `.btn-primary-pulse` only as a large-text hero CTA.
```
