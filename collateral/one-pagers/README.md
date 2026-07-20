# collateral/one-pagers

Product one-pagers, one HTML file per product, rendered to a single US-letter
PDF (816×1056) by `tools/render-collateral.mjs`.

## Rules

- **Claim strings come from `claims/claims.json` only.** Use build-time
  placeholders (`{{claims.products.<slug>.<field>}}`) for anything the registry
  governs — pricing, feature lists, security lines. Purely narrative copy may
  stay inline. Never hard-code a metric, price, customer count, or setup time.
- **Reference implementation:** the approved `napster-pulse.html` is the pattern
  every new one-pager should follow (layout, token usage, fact band, footnote
  discipline). *(Pending: the CPO-approved `napster-pulse-onepager.html` had not
  been supplied when this directory was scaffolded — see the PR description.)*
- **Design tokens** are consumed, never redefined. Link
  `../../colors_and_type.css`; do not add or edit token values here.
- Every file is gated by `npm run lint:collateral` (asterisk symmetry, dead
  names, SOC 2 phrasing, marketplace/endorsement claims, Pulse/Agent-specific
  rules, US spelling). CI runs it on every PR touching `collateral/**`.
