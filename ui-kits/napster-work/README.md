# Napster for Work App UI specimen

Open `index.html` through a local static server. It imports the canonical design system CSS and uses the opt-in `.nfw` scope.

Read [APP-UI.md](../../APP-UI.md) for the developer contract and [source decisions](../../reference/nfw-akeo-handoff.md) for AKEO provenance. This is distinct from the mobile companion kit in `../napster-app/`.

The specimen demonstrates standard/spacious layouts, a container-responsive card grid, dark/light modes, keyboard tabs, icon tooltip, confirmation dialog, disabled/toggle/pending buttons, empty content, and simulated retry recovery. All actions are local and all data is illustrative.

`specimen.js` demonstrates behavior; it is not a production component API. Use the consuming app's accessible component primitives and host integrations. No React runtime, build tooling, or remote Figma asset URLs are required.
