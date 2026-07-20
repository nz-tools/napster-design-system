# collateral/battlecards

Sales battlecards (competitor / objection-handling one-sheets). **Scaffold only** —
the rebuilt content arrives in a follow-up brief once the CPO approves the batch.

## Pattern

- Follow the approved one-pager as the template pattern:
  [`../one-pagers/napster-pulse.html`](../one-pagers/napster-pulse.html)
  (layout, token usage, footnote discipline).
- **`claims/claims.json` is the only permitted source for claim strings** —
  pricing, feature lists, security lines, marketplace status. Use
  `{{claims.products.<slug>.<field>}}` placeholders; never hard-code a claim.
- Consume design tokens via `../../colors_and_type.css`; never redefine them.
- Every file is gated by `npm run lint:collateral` and CI on each PR.
