# napster.com live audit — April 2026

Findings from a computed-style audit of the live production site at https://napster.com, performed while building the v1.0.0 design system repo. All tokens in [`../../tokens/`](../../tokens/) reflect these values.

## Typography (confirmed live)

- Hero headlines: **Avantt 600 (SemiBold)** at 72px, letter-spacing -1.44px (-2%), sentence case, ending with a period
- Section headlines: **Avantt 600** at 41px
- Eyebrow labels: **Inter 700 (Bold)** at 12px, uppercase, letter-spacing -0.12px, color `#DD52CB`
- Body: **Inter 400** at 14-16px

Font-family declarations:
```
font-family: Avantt, Arial, sans-serif;     /* display */
font-family: Inter, sans-serif;             /* body */
```

## Colors (top-10 by frequency in computed styles)

| Value | Count | Role |
|---|---|---|
| `rgb(255, 255, 255)` `#FFFFFF` | 63 | Primary text |
| `rgb(51, 41, 92)` `#33295C` | 45 | Indigo — muted body text in some sections |
| `rgb(221, 82, 203)` `#DD52CB` | 12 | Napster Pink — eyebrows |
| `rgba(255, 255, 255, 0.5)` | 7 | Muted white |
| `rgb(190, 54, 157)` `#BE369D` | 2 | Deep pink — primary buttons |
| `rgb(255, 77, 109)` `#FF4D6D` | 2 | Coral — occasional accent |

## Gradient text treatment

The signature accent treatment on every hero is a linear-gradient text fill:

```css
background: linear-gradient(90deg,
  rgb(255, 255, 255) 0%,
  rgb(234, 45, 210) 71.63%,
  rgb(255, 161, 243) 87.98%);
-webkit-background-clip: text;
color: transparent;
```

Observed examples on the live site:
- "for **every moment.**"
- "**Many doors.**"
- "**places at once.**"

All applied to Avantt 41px 600-weight. The gradient covers the **load-bearing noun**; everything else stays white.

Small-label variant (12px/700, "Your Digital Twin"):
```css
background: linear-gradient(91deg, #DD52CB 0%, #601656 100%);
```

## Buttons

**Primary ("Get Started Now"):**
- Background: `rgb(190, 54, 157)` = `#BE369D`
- Color: white
- Border radius: `10px`
- Padding: `18.5px 20px`
- Font: Inter 14px/600

**Secondary ("Watch the Film", "For Business", "For Developers"):**
- Background: `rgba(190, 54, 157, 0.02)` — very subtle pink tint
- Color: white
- Border: `1px solid rgba(255, 161, 243, 0.2)` — subtle pink rim
- Same radius/padding/font as primary

## Radius scale

From computed styles across the page:

| Radius | Uses |
|---|---|
| `10px` | 22 — standard UI, buttons |
| `16px` | 15 — cards |
| `6px` | 8 — small elements |
| `100px` | 6 — pills |
| `24px` | 4 — large cards |
| `50px` | 2 |
| `9999px` | — full circles |

## Hero section structure

- Background: full-bleed lifestyle photography (humans in a living room)
- Surrounding chrome: pure black `#000000`
- "MEET YOUR CREW" eyebrow in pink, centered
- "AI companions you can see, talk to, and create with." in white Avantt 72px
- Two CTAs: "Get Started Now" (primary pink) + "Watch the Film" (secondary glass)
- Secondary link row: "For Business →" / "For Developers →"

This layout maps to AKEO's **User Value** visual element (lifestyle photography, humans in real environments, user-centered).

## Logo treatment

- Top-left: horizontal wordmark (white) with the OG n-mark icon
- Small (~130px wide), clearspace ≥ logo-height
- No recoloring

## What this confirms

The AKEO Brand Definition Proposal isn't aspirational — **it's the system in production**. The four primary visual elements, typography selections, color palette, and the circle as visual backbone are all visible on napster.com today.

The repo tokens reflect the **live production values**, not the framework values from the PDF. Where they agree (which is almost everywhere), we used the live values. Where the framework extends beyond live production (e.g., neon n-mark glow, atmospheric gradient backgrounds), those are marked as AKEO/framework-level tokens that may not yet appear in shipping product.

## Tools used for audit

- Claude Code via the Napster Design Harness project
- Chrome DevTools-equivalent access via the `mcp__Claude_in_Chrome__javascript_tool`
- Queries: `getComputedStyle()` on all elements, `document.styleSheets` for font-face declarations

Re-run the audit at any time by opening napster.com in a Claude Code session and asking Claude to audit the live tokens.
