# Imagery & Photography

Napster's image library, organized by the four-part vocabulary defined in `DESIGN.md` § 9.

## Slots → folders

| Slot | Role | Where it lives |
|---|---|---|
| Warm Lifestyle | User Value | `people/crew/`, `brand-life/` |
| Atmospheric / Cinematic | Brand Feeling | `scenes/twin/`, `decorative/`, `scenes/sessions/`, `scenes/companion-environments/` |
| Isolated Portraits | Companion Character | `people/portraits-hero/`, `people/producers/` |
| Product on Pure Black | Product Clarity | `product/api/`, `product/app/`, `product/learn/`, `product/mac/`, `product/spaces/`, `product/station/`, `product/view/`, `scenes/usecases/` |

## Where to look first

When a prompt mentions a specific Napster product, go straight to `product/{product}/`:

- "Napster Station" → `product/station/`
- "Napster View" → `product/view/`
- "Napster for Mac" → `product/mac/`
- "Napster Spaces" → `product/spaces/`
- "Napster Learn" → `product/learn/`
- "Napster App" → `product/app/`
- "Napster API" → `product/api/`

When the prompt names a Companion (Kai, May, JC, Elena, Kevin, Alyssa, Jordan, Richard, Jane, Amit) → `people/portraits-hero/`. One file per companion; CSS sizes them for both hero and card contexts. For "where this companion's role works" atmospheric scenes (no person in frame), reach for `scenes/companion-environments/`. Amit currently has no portrait — see `people/persona-roster.md` for the workaround.

When the prompt names a Music Producer (Axel, Billie, Jasper, Luna, Mateo, Nyx, Ruby Mae, Sloane, Voltage) → `people/producers/`.

## Treatments

- **Grain overlay.** `decorative/napster-grain-texture.jpg`, mix-blend-mode: screen, ~18% opacity.
- **Beam overlay.** mix-blend-mode: screen, opacity ~0.55. Hero imagery only. **Never behind text.**
- **Darken pass.** Portraits over dark canvas → `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))` on top.

## Filename conventions

- Every asset begins with `napster-`.
- Companions: `napster-companion-{firstname}-{surname}-{role}.{ext}`.
- Producers: `napster-producer-{firstname}-{genre}.{ext}`.
- Product: `napster-{product}-{descriptor}.{ext}` (e.g. `napster-station-spec-voicefield.jpg`).

Each subfolder has its own README with the slot, treatment, and inventory.

## Never

- Stock iconography.
- Illustration-style humans.
- Busy patterns.
- B&W photography.
- Photography of devices outside the Napster product family.
- Smiles in marketing portraits unless mid-laugh in candid context.

---

See `DESIGN.md` § 9 *Imagery & Photography* for the full vocabulary, and `people/persona-roster.md` for the canonical Companion roster.
