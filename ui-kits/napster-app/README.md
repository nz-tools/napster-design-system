# Napster App — UI kit

Voice-first companion app. Five core screens showing the canonical product
moments: welcome, companion grid (home), an active voice session, a chat
thread with a companion, and the profile/settings page.

## Files
- `index.html` — five iPhone-shaped frames side-by-side; loads `components.jsx`.
- `components.jsx` — `Welcome`, `CompanionsHome`, `VoiceSession`, `Chat`,
  `Profile`, `TabBar`. All components are global (`window.*`) so the host
  HTML can mount them directly.

## Visual notes
- Background is pure black with a soft pink "beam" radial blur and grain
  overlay — taken straight from the Figma deck's hero treatment.
- Primary action is a gradient pill (`#EA2DD2 → #FF7DF3`) with a magenta
  glow. Secondary action is a translucent stroked pill.
- Floating tab bar (capsule + blur) is the canonical app shell. The voice
  orb is a radial pink-to-deep-magenta gradient with an inner highlight.
- Type: **Inter** (Google Fonts, weights 300–900) for display, body, and UI. **IBM Plex Mono** for any in-app metadata (timestamps, message receipts, session counters). The app surface is the cleanest place in the system — no editorial italic serif inside product chrome.

## Out of scope
This is a UI kit, not a working app. State is static; navigation is visual.
Hook the components up to real state for a clickable prototype.
