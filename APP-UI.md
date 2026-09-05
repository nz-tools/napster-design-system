# Napster for Work — App UI

The developer contract for dedicated agent applications in Napster for Work (NfW / Napster Desktop). Use this alongside [DESIGN.md](DESIGN.md) for brand foundations. This extension governs the application content surface: navigation, headings, cards, forms, actions, and overlays. It does not implement the desktop host, agent tools, permissions, or product workflows.

Source: AKEO’s [Napster for Work documentation](https://www.figma.com/design/dTio7KKLKwFStKJr1pguKc/Napster-for-Work?node-id=27-548), inspected September 4, 2026. [Source mapping and decisions](reference/nfw-akeo-handoff.md) distinguish extracted rules from implementation choices and unresolved design questions. The running desktop app was not available for inspection.

## Integrate

Continue importing `colors_and_type.css`; it includes the scoped App UI extension. Add `.nfw` to the app root and explicitly choose a theme there. Existing unscoped marketing components retain their styling.

```html
<main class="nfw" data-theme="dark" aria-labelledby="app-title">
  <div class="nfw-content">
    <header>
      <h1 class="nfw-title" id="app-title">Projects</h1>
      <p class="nfw-muted">Track your work</p>
    </header>
    <section class="nfw-card" aria-labelledby="next-title">
      <h2 class="nfw-heading" id="next-title">Next session</h2>
      <p>Prepare a practice session with your companion.</p>
      <button type="button" class="btn btn-primary">Start practice</button>
    </section>
  </div>
</main>
```

Use [app_ui.css](app_ui.css) for scoped recipes and [tokens/app-ui.json](tokens/app-ui.json) for machine-readable values and CSS variable names. [The interactive specimen](ui-kits/napster-work/index.html) demonstrates both modes, tabs, dialog, tooltip, empty content, and action states. It is illustrative UI, not a production component framework.

## Layout and density

Each agent application may have a different workflow, but uses the same container, spacing, action hierarchy, and component vocabulary.

| Role | Rule | CSS |
|---|---|---|
| Standard app content | 24px inset; align navigation, headings, cards, tables, and forms to common edges | `.nfw-content` |
| Spacious app window | 32px inset and 40px between sections | `.nfw-content--spacious` |
| Small content area, 320–511px | 8 flexible columns, 8px gutters, 16px margins | `.nfw-grid`, container query |
| Inner layout | Use spacing tokens, including 6px and 8px for tight groups | `--nfw-space-tight`, `--space-2` |
| Floating UI | Dialogs, tooltips, and menus sit outside the content grid | Overlay recipes below |

AKEO shows both 24px content insets and 32px window padding. They are named variants, not cumulative padding. Do not put a 24px inset inside a 32px inset by default. Choose density once per app. Pair spacious content with `.nfw-tabs--spacious` so the navigation shares its inset. Small-screen insets replace either variant.

The host can resize an app independently of the browser viewport, so responsive recipes use the `.nfw` container width. `.nfw-grid` supplies eight tracks; children span all tracks unless assigned a composition. `.nfw-grid--summary` presents two equal columns above 511px and one below. The two-column composition is an implementation choice; AKEO does not provide a reliable larger-screen breakpoint table. Do not infer additional breakpoints from repeated “Small 8 column” placeholder labels.

Only top-level containers align to the page grid. Icons, buttons, and contents inside a card use local spacing. Permit vertical scrolling and text wrapping. Avoid fixed canvas dimensions copied from Figma presentation frames. Tables may use a separately labeled horizontal scroll region where their data requires it.

## Type and color

Keep the repository’s three-font system: Inter for application headings, body, and controls; IBM Plex Mono for metadata. Editorial serif stays out of task UI chrome. AKEO’s Avantt/SF Pro references do not reverse the repository’s font migration.

| Role | App recipe |
|---|---|
| App title | 24px / 1.25, Inter 700 (`.nfw-title`) |
| Section heading | 20px / 1.3, Inter 600 (`.nfw-heading`) |
| Body and controls | 14px / 1.5, Inter |
| Supporting caption | 12px / 1.5 (`.nfw-caption`) |

These recipes adapt AKEO’s 16/20/24px title and 14px body roles to canonical fonts. They do not change the global marketing type ramp. Use sentence case and descriptive labels. Product headings do not need a marketing eyebrow or a terminal period.

Dark mode is the default. The app card surface is `#171717`, observed in the Agent Applications example. Primary action colors reuse existing `--btn-primary-*` tokens. Pink indicates emphasis, not success or failure. Success and critical messages use app roles backed by `--good` and `--bad` in dark mode, with darker green/red light-mode adaptations for readable small labels. Always include text or another non-color cue. Informational content uses neutral text until a semantic information palette is approved.

Light mode is an integration adaptation of the existing Git theme, not an AKEO light design. App-muted text uses opaque mode-specific values (`#B8B8B8` / `#655A65`) to remain readable on the supplied card surfaces. Do not use disabled or decorative text colors for important information.

## Shapes, borders, and elevation

App radii are scoped semantic tokens, so existing marketing radius names keep their meaning.

| Token | Value | Use |
|---|---|---|
| `--nfw-radius-xs` | 8px | Compact containers |
| `--nfw-radius-sm` | 12px | Navigation items and small controls |
| `--nfw-radius-md` | 16px | Inputs and standard cards |
| `--nfw-radius-lg` | 20px | Larger panels |
| `--nfw-radius-xl` | 24px | Dialogs and oversized containers |
| `--nfw-radius-pill` | 9999px | Buttons, pills, status tags |
| Circle | 50% on a square | Icon button visual and avatar |

Use 1px borders for ordinary boundaries and 2px for selected/focused emphasis. A focus outline must remain visible and must not move content. Decorative card borders are not substitutes for readable control boundaries. App inputs use a stronger boundary color.

AKEO documents a six-layer shadow and a two-layer inner glow; exact source values are retained in the handoff reference. Runtime recipes reuse the repository’s mode-aware elevation rather than applying bright inset highlights to every data card. Elevation is for overlays and intentionally elevated surfaces.

## Actions and icon buttons

Reuse `.btn` with `.btn-primary`, `.btn-secondary`, or `.btn-ghost` inside `.nfw`. App buttons are pill-shaped, at least 44px high, and use 14px labels. Reserve the primary style for one dominant action in the current task context. Secondary and tertiary actions should not compete with it. Group related actions and move infrequent actions into a labeled overflow control.

Use a native `<button type="button">` for actions and a link for navigation. Icon-only buttons require an accessible name even when a tooltip is present. Use the existing icon set where the glyph matches; otherwise export the actual asset from Figma and commit it. Never ship an expiring Figma asset URL.

`.nfw-icon-button` provides a 44×44px target containing a 24px icon; this is a reference size choice, not a universal icon dimension extracted from the scaled documentation. Use a visible label when an icon is ambiguous. Toggle buttons expose `aria-pressed` and retain their accessible name.

| State | Contract |
|---|---|
| Default / hover / pressed | Preserve hierarchy; use canonical mode-aware button colors |
| Keyboard focus | Visible 2px outline with 3px offset |
| Disabled | Native `disabled`; cannot trigger actions; do not rely on dimming alone |
| Pending | Prevent duplicate submission; expose `aria-busy="true"` and a visible progress label |
| Failure | Keep entered data; show a meaningful message and an explicit retry action |

Disabled/pending/failure behavior is engineering guidance extending the supplied visual designs. CSS alone does not implement an action lifecycle.

## Navigation and content states

The source shows a compact top navigation row and content cards. Navigation destinations differ by agent; sample names are not mandatory product taxonomy. Use links with `aria-current="page"` for routed pages. Use the tab pattern only for in-place panels: `tablist`, `tab`, `tabpanel`, `aria-selected`, `aria-controls`, and one tab stop. Left/Right, Home, and End move between tabs. The specimen demonstrates automatic activation for local content.

Empty, loading, error, and populated states must preserve the content area and explain what happens next. Do not render unknown values as zero. Put live progress in a polite status region and errors near the failed operation. Data visualizations need labels, units, legends, and an accessible text/table equivalent. These lifecycle and keyboard rules are implementation additions; the supplied documentation does not define a full data-component library.

## Confirmation dialogs

Use for decisions requiring explicit confirmation. Center over a scrim, with a concise sentence-case title, one or two sentences describing consequences, and specific action labels. Do not use a confirmation dialog for routine information.

Stack the primary confirmation action above the borderless Cancel action, below the body. Escape cancels. Focus stays inside the modal while it is open and returns to its trigger afterward. Initially focus Cancel for destructive decisions. Never interpret dismissal as confirmation.

Use native `<dialog>` with `showModal()` or an equivalent accessible library. The reference `.nfw-dialog` is 360px wide, capped to its available viewport, with 24px padding/radius; 360px is an implementation default because the source only specifies fixed width. Keep copy short enough to fit without scrolling at ordinary sizes, but allow scrolling at extreme zoom or on very small screens so actions remain reachable.

Place the dialog inside the `.nfw` theme root even though the browser displays it in the top layer. A framework portal mounted elsewhere must also receive `.nfw`, the selected `data-theme`, and the needed tokens. The same applies to portaled tooltips and menus.

## Tooltips

Descriptive tooltips label an unlabeled control: sentence case, usually one to three words, no ending punctuation. Information tooltips have a required brief body and an optional title. Tooltips supplement accessible names and visible instructions; they never contain essential information available only on hover.

Show after a short hover/focus delay; keep close to the anchor. Prefer below, then choose the side with space. Show only one at a time. Allow concise wrapping. Dismiss on Escape or when hover/focus leaves the anchor and tooltip. The specimen uses a 400ms delay and viewport collision handling as implementation defaults. A tooltip has `role="tooltip"` and the trigger references it via `aria-describedby`; it is not focusable and does not contain controls. Use a popover/dialog for interactive content.

## Adoption checklist

1. Pin the merged release/commit as described in the developer guide. Do not depend on an unreleased version tag.
2. Apply `.nfw` and `data-theme` to one dedicated app root; choose standard or spacious density.
3. Replace per-app colors, spacing, radii, and action styling with these shared recipes.
4. Wire real state, routing, tool execution, and permissions in the consuming app.
5. Verify keyboard navigation, modal cancellation and focus return, icon names, pending/error behavior, and narrow/zoomed layouts in dark and light modes.
6. Compare the actual app against the source-mapped rules; the current desktop applications have not been audited by this change.
