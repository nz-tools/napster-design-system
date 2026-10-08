# Agent environments

**Slot:** Atmospheric — Brand Feeling

## What's in this folder

Nine square (1200×1200) atmospheric scenes that represent the *kind of place each agent role works in*. They are not portraits. No human is in the frame.

| File | Role represented | Scene |
|---|---|---|
| `napster-companion-environment-career.avif` | Career | — |
| `napster-companion-environment-chiefofstaff.avif` | Chief of Staff | Open-plan corporate office |
| `napster-companion-environment-code.avif` | Code | Lounge / workspace |
| `napster-companion-environment-creative.avif` | Creative | Bright creative open office |
| `napster-companion-environment-finance.avif` | Finance | Wood-paneled executive office |
| `napster-companion-environment-fitness.avif` | Fitness | High-ceiling atrium / training space |
| `napster-companion-environment-learning.avif` | Learning | Classroom with whiteboard |
| `napster-companion-environment-tech-support.avif` | Tech Support | Modern office with drones / devices |
| `napster-companion-environment-wellbeing.avif` | Wellbeing | — |

### Tutors crew

Six more square (1200×1200) scenes, one per subject, each matching the room that tutor teaches from. Placed 2026-10-07. Richard Warnok, the crew's Learning Guide, uses `napster-companion-environment-learning.avif` above.

| File | Tutor | Scene |
|---|---|---|
| `napster-tutor-environment-history.avif` | Ama Osei, History | Book-lined study with maps and a reading lamp |
| `napster-tutor-environment-reasoning.avif` | Dara Quinn, Reasoning & Argument | Two facing chairs and a whiteboard |
| `napster-tutor-environment-writing.avif` | June Tanaka, Writing & Literature | Writing desk by a window with a marked manuscript |
| `napster-tutor-environment-mathematics.avif` | Teo Vasilev, Mathematics | Classroom with a worked chalkboard |
| `napster-tutor-environment-science.avif` | Ines Almeida, Science | Field-station bench with microscope and specimens |
| `napster-tutor-environment-ai.avif` | Desmond Zhang, AI | Desk with two monitors at dusk |

## When to reach for these

- An agent landing page hero that wants the "where they work" framing (the portrait can sit on top in a layered composition).
- Background plate behind an agent bio when the portrait is presented full-bleed elsewhere.
- Atmospheric strip on a "Meet the crew" overview when individual portraits would feel crowded.

## When NOT to reach for these

- Anywhere a portrait is called for. Use `imagery/people/portraits-hero/` for the actual agent portraits.
- As a stand-in for missing portraits. They name the role, not the person.

## History

Until v1.2.1, these files lived at `imagery/people/portraits-hero/` under the filename pattern `napster-companion-{first}-{last}-{role}.avif` and were mistakenly documented as agent portraits. They are environment scenes; v1.2.2 moved them here and renamed them by role to make their purpose explicit. The actual portrait set was always at `imagery/people/portraits-thumb/` and has been promoted to `imagery/people/portraits-hero/` in the same release.

---

See `DESIGN.md` § 9 *Imagery & Photography* for the full photographic vocabulary.
