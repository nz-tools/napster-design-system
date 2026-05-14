# Napster Component Reference

Copy-paste reference for production apps. Import `colors_and_type.css` before using these classes.

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
<article class="card">
  <img src="imagery/people/portraits-hero/napster-companion-kai-mercer-chiefofstaff.avif" alt="Kai Mercer" />
  <p class="eyebrow">Chief of Staff</p>
  <h3 class="h3"><span class="accent-serif">Kai Mercer</span></h3>
</article>
```

```jsx
export function PersonaTile() {
  return (
    <article className="card">
      <img
        src="/assets/napster/imagery/people/portraits-hero/napster-companion-kai-mercer-chiefofstaff.avif"
        alt="Kai Mercer"
      />
      <p className="eyebrow">Chief of Staff</p>
      <h3 className="h3"><span className="accent-serif">Kai Mercer</span></h3>
    </article>
  );
}
```

## Footer

```html
<footer class="meta">
  NAPSTER DESIGN SYSTEM · 2026 · v1.2.0
</footer>
```

```jsx
export function Footer() {
  return <footer className="meta">NAPSTER DESIGN SYSTEM · 2026 · v1.2.0</footer>;
}
```
