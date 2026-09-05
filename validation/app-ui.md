# App UI validation

Validated 2026-09-04 against the scoped NfW specimen. Run:

```sh
npm run validate:themes
npm run validate:app-ui
node --check ui-kits/napster-work/specimen.js
```

Automated checks passed: existing 82 light token peers and 12 contrast pairs; new 20 App UI tokens with JSON/CSS parity, variable resolution, 16 text/control contrast pairs, import/asset paths, and ARIA references.

Browser checks in the Codex in-app browser:

- Dark desktop layout: hierarchy, shared cards, form and pill actions visually inspected.
- Light mode switches the app root and card surfaces; narrow 375px viewport uses 16px insets and stacked summary cards. No page-level horizontal overflow. Dark narrow layout also has no page-level overflow.
- ArrowRight and End switch tabs, update selected state and roving keyboard focus. Files shows the empty state.
- Toggle exposes pressed state and updates visible status.
- Retry immediately disables duplicate activation and shows pending text, then returns to enabled with a successful result.
- Tooltip appears on keyboard focus and Escape hides it.
- Dialog initially focuses Cancel. Escape cancels and returns focus to the trigger without clearing the topic. Explicit confirmation clears the sample topic and restores focus. Light narrow dialog visually inspected; controls remain reachable.

These checks are not a full accessibility certification or a live NfW regression test. Screen-reader behavior, actual host resizing, real agent execution, production portals, and migration of existing dedicated apps need consuming-app validation. The browser viewport override was reset after testing.
