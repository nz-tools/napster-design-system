# Napster Component Reference

Copy-paste reference for production apps. Import `colors_and_type.css` before using these classes. Product/app surfaces that support light mode should also import `tokens/theme-light.css` after it.

## Color Modes

Dark is the default. Product/app surfaces can opt into light mode on a subtree:

```html
<main data-theme="light">
  <article class="card">
    <p class="eyebrow">Settings</p>
    <h2 class="h2">Account preferences.</h2>
    <button class="btn btn-primary">Save changes</button>
  </article>
</main>
```

Reset contained dark islands, such as companion portraits, with `data-theme="dark"` on the inner wrapper:

```html
<main data-theme="light">
  <article class="portrait-frame" data-theme="dark">
    <img src="/assets/napster/imagery/people/portraits-hero/napster-companion-kai-mercer-chiefofstaff.avif" alt="Kai Mercer" />
    <div class="portrait-frame-body">
      <p class="eyebrow">Chief of Staff</p>
      <h3 class="h3"><span class="accent-serif">Kai Mercer</span></h3>
    </div>
  </article>
</main>
```

## Buttons

```html
<button class="btn btn-primary">Get started now</button>
<button class="btn btn-secondary">Learn more</button>
<button class="btn btn-ghost">Sign in</button>
<button class="btn btn-primary-pulse">Start building</button>
```

```jsx
export function Buttons() {
  return (
    <>
      <button className="btn btn-primary">Get started now</button>
      <button className="btn btn-secondary">Learn more</button>
      <button className="btn btn-ghost">Sign in</button>
      <button className="btn btn-primary-pulse">Start building</button>
    </>
  );
}
```

`btn-primary-pulse` is a large-text hero CTA. Use it once per page maximum.

## Cards

```html
<article class="card">
  <p class="eyebrow">Overview</p>
  <h3 class="h3">Default content card.</h3>
  <p class="body-sm">Mulberry surface, 16px radius, 24px padding.</p>
</article>

<article class="card-large">Large feature card.</article>
<article class="card-hero">Hero card.</article>
<article class="card-glass">Glass overlay card.</article>
```

```jsx
export function Card() {
  return (
    <article className="card">
      <p className="eyebrow">Overview</p>
      <h3 className="h3">Default content card.</h3>
      <p className="body-sm">Mulberry surface, 16px radius, 24px padding.</p>
    </article>
  );
}
```

## Panels

```html
<aside class="panel">
  <p class="eyebrow">Status</p>
  <p class="body">Standard glass panel.</p>
</aside>

<aside class="panel-pink">
  <p class="body">Pink callout panel.</p>
</aside>
```

```jsx
export function Panel() {
  return (
    <aside className="panel">
      <p className="eyebrow">Status</p>
      <p className="body">Standard glass panel.</p>
    </aside>
  );
}
```

## Inputs

```html
<label>
  <span class="eyebrow">Email</span>
  <input class="input" type="email" placeholder="you@napster.com" />
</label>
```

```jsx
export function EmailInput() {
  return (
    <label>
      <span className="eyebrow">Email</span>
      <input className="input" type="email" placeholder="you@napster.com" />
    </label>
  );
}
```

## Eyebrow

```html
<p class="eyebrow">Meet your crew</p>
```

```jsx
<p className="eyebrow">Meet your crew</p>
```

## Hero Block

```html
<section class="napster">
  <p class="eyebrow">Meet your crew</p>
  <h1 class="h-hero">A specialist for every <span class="gradient-word">moment.</span></h1>
  <p class="body-lg muted">Companions with memory, voice, and real context.</p>
  <button class="btn btn-primary">Get started now</button>
</section>
```

```jsx
export function HeroBlock() {
  return (
    <section className="napster">
      <p className="eyebrow">Meet your crew</p>
      <h1 className="h-hero">
        A specialist for every <span className="gradient-word">moment.</span>
      </h1>
      <p className="body-lg muted">Companions with memory, voice, and real context.</p>
      <button className="btn btn-primary">Get started now</button>
    </section>
  );
}
```

## Pull Quote

```html
<blockquote class="pull-quote">Software just became labor.</blockquote>
```

```jsx
<blockquote className="pull-quote">Software just became labor.</blockquote>
```

## Persona Tile

```html
<article class="portrait-frame" data-theme="dark">
  <img src="imagery/people/portraits-hero/napster-companion-kai-mercer-chiefofstaff.avif" alt="Kai Mercer" />
  <div class="portrait-frame-body">
    <p class="eyebrow">Chief of Staff</p>
    <h3 class="h3"><span class="accent-serif">Kai Mercer</span></h3>
  </div>
</article>
```

```jsx
export function PersonaTile() {
  return (
    <article className="portrait-frame" data-theme="dark">
      <img
        src="/assets/napster/imagery/people/portraits-hero/napster-companion-kai-mercer-chiefofstaff.avif"
        alt="Kai Mercer"
      />
      <div className="portrait-frame-body">
        <p className="eyebrow">Chief of Staff</p>
        <h3 className="h3"><span className="accent-serif">Kai Mercer</span></h3>
      </div>
    </article>
  );
}
```

## Admin UI Recipes

These are recipes, not a packaged component library. They use role tokens so the same markup works in dark and light.

### Table

```html
<table class="napster-table">
  <thead><tr><th>Workspace</th><th>Status</th><th>Updated</th></tr></thead>
  <tbody><tr><td>Companion Studio</td><td><span class="badge badge-good">Live</span></td><td>14:32 UTC</td></tr></tbody>
</table>
```

```css
.napster-table{width:100%;border-collapse:collapse;background:var(--card-bg);border:1px solid var(--card-border);border-radius:var(--r-lg);overflow:hidden}
.napster-table th{font-family:var(--font-mono);font-size:var(--fs-meta);letter-spacing:var(--tracking-mono);text-align:left;color:var(--text-muted);background:var(--surface-panel)}
.napster-table th,.napster-table td{padding:12px 14px;border-bottom:1px solid var(--hairline)}
.napster-table tbody tr:hover{background:var(--surface-panel-pink)}
```

### Badges / Status Pills

```html
<span class="badge badge-neutral">Queued</span>
<span class="badge badge-good">Live</span>
<span class="badge badge-bad">Blocked</span>
<span class="badge badge-info">Review</span>
```

```css
.badge{display:inline-flex;align-items:center;border-radius:var(--r-pill);padding:4px 10px;font:600 var(--fs-caption)/1 var(--font-body);border:1px solid var(--border)}
.badge-neutral{color:var(--text-muted);background:var(--code-bg)}
.badge-good{color:var(--good);background:color-mix(in srgb,var(--good) 12%,transparent)}
.badge-bad{color:var(--bad);background:color-mix(in srgb,var(--bad) 12%,transparent)}
.badge-info{color:var(--accent);background:var(--surface-panel-pink)}
```

### Selects And Textareas

```html
<select class="input"><option>Daily</option><option>Weekly</option></select>
<textarea class="input textarea" placeholder="Notes"></textarea>
```

```css
.textarea{min-height:120px;resize:vertical}
select.input{appearance:auto;color-scheme:inherit}
select.input option:checked{background:var(--accent);color:var(--on-accent)}
```

### Checkboxes / Toggles

```html
<label class="check-row"><input type="checkbox" checked /> Email me updates</label>
<button class="toggle" aria-pressed="true"><span></span></button>
```

```css
.check-row{display:flex;align-items:center;gap:10px;color:var(--text-primary)}
.check-row input{accent-color:var(--accent)}
.toggle{width:44px;height:24px;border-radius:var(--r-pill);border:1px solid var(--border);background:var(--surface-panel);padding:2px}
.toggle span{display:block;width:18px;height:18px;border-radius:var(--r-full);background:var(--text-muted)}
.toggle[aria-pressed="true"]{background:var(--accent)}
.toggle[aria-pressed="true"] span{transform:translateX(18px);background:var(--on-accent)}
```

### Alerts

```html
<div class="alert alert-info">Import completed.</div>
<div class="alert alert-warning">Review required.</div>
<div class="alert alert-error">Upload failed.</div>
<div class="alert alert-success">Published.</div>
```

```css
.alert{border:1px solid var(--border);border-radius:var(--r-md);padding:12px 14px;background:var(--surface-panel);color:var(--text-primary)}
.alert-info{border-color:var(--border-pink);background:var(--surface-panel-pink)}
.alert-warning{border-color:rgba(255,179,71,.45)}
.alert-error{border-color:color-mix(in srgb,var(--bad) 45%,transparent)}
.alert-success{border-color:color-mix(in srgb,var(--good) 45%,transparent)}
```

## Footer

```html
<footer class="meta">
  NAPSTER DESIGN SYSTEM · 2026 · v1.3.0
</footer>
```

```jsx
export function Footer() {
  return <footer className="meta">NAPSTER DESIGN SYSTEM · 2026 · v1.3.0</footer>;
}
```
