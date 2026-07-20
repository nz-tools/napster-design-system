# collateral/better-together

"Better Together" partner one-pagers (Napster + partner co-sell / integration
stories). **Scaffold only** — the rebuilt content arrives in a follow-up brief
once the CPO approves the batch.

## Pattern

- Follow the approved one-pager as the template pattern:
  [`../one-pagers/napster-pulse.html`](../one-pagers/napster-pulse.html)
  (layout, token usage, footnote discipline).
- **`claims/claims.json` is the only permitted source for claim strings.** Use
  `{{claims.products.<slug>.<field>}}` placeholders; never hard-code a claim.
- Partner/Microsoft co-sell claims are especially sensitive: obey
  `global.marketplace_canon` (per-product status only — no blanket "Available in
  Microsoft Marketplace") and `global.endorsement_rule` (never imply Microsoft
  endorsement or MACC eligibility beyond the per-product status).
- Consume design tokens via `../../colors_and_type.css`; never redefine them.
- Every file is gated by `npm run lint:collateral` and CI on each PR.
