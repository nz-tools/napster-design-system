# Napster Agent Roster (canonical)

The canonical persona roster, reconciled by Ziv Navoth on 2026-05-10. **Where the AKEO Figma framework and the iterative bundle disagreed on a role, the iterative bundle won.** Where AKEO contributed a surname not in iterative, that surname is canonical.

Updated 2026-08-28: added `Slug` and `Crew` columns, and registered the seven-seat Tutors crew.

**`Slug` is the stable identifier.** Asset filenames, prompt filenames and agent records all derive from it. A name may be edited; a slug may not. If a slug must change, change it here first and rename the assets to match — never the other way round. Every one of the roster's historical conflicts (Jordan Lee vs Jordan Carter, Sloane Parker vs Juno Phoenix) began with an asset that was named before the roster was.

`portraits-hero/` lives at `imagery/people/portraits-hero/`. `companion-environments/` lives at `imagery/scenes/companion-environments/`.

## Specialist crew

| Slug | First | Surname | Role | Crew | Portrait | Environment (role scene) |
|---|---|---|---|---|---|---|
| `alyssa-reynolds` | **Alyssa** | Reynolds | Career | Specialist | `portraits-hero/napster-companion-alyssa-reynolds-career.avif` | `companion-environments/napster-companion-environment-career.avif` |
| `amit-pillai` | **Amit** | Pillai | Tech Support | Specialist | — *(no portrait sourced yet — placeholder pending)* | `companion-environments/napster-companion-environment-tech-support.avif` |
| `elena-garcia` | **Elena** | Garcia | Wellbeing | Specialist | `portraits-hero/napster-companion-elena-garcia-wellbeing.avif` | `companion-environments/napster-companion-environment-wellbeing.avif` |
| `jc-mitchell` | **JC** | Mitchell | Code | Specialist | `portraits-hero/napster-companion-jc-mitchell-code.avif` | `companion-environments/napster-companion-environment-code.avif` |
| `jordan-carter` | **Jordan** | Carter | Fitness | Specialist | `portraits-hero/napster-companion-jordan-carter-fitness.avif` | `companion-environments/napster-companion-environment-fitness.avif` |
| `kai-mercer` | **Kai** | Mercer | Chief of Staff | Specialist | `portraits-hero/napster-companion-kai-mercer-chiefofstaff.avif` | `companion-environments/napster-companion-environment-chiefofstaff.avif` |
| `kevin-jones` | **Kevin** | Jones | Finance | Specialist | `portraits-hero/napster-companion-kevin-jones-finance.avif` | `companion-environments/napster-companion-environment-finance.avif` |
| `may-li` | **May** | Li | Creative | Specialist | `portraits-hero/napster-companion-may-li-creative.avif` | `companion-environments/napster-companion-environment-creative.avif` |
| `richard-warnok` | **Richard** | Warnok | Learning Guide | Specialist **+ Tutors** | `portraits-hero/napster-companion-richard-warnok-learning.avif` | `companion-environments/napster-companion-environment-learning.avif` |

## Tutors crew

Registered 2026-08-28. **Portraits placed 2026-09-01** at the reserved names, AVIF q95, matching the format of every other portrait here.
Medium and full-body shots for these six live with the crew package at
`Misc./Napster Productivity Crew (China)/tutors_crew_deliverable/images/final/`, which holds the current version of every Tutors image and nothing else.
Differentiation review approved. **Role environment scenes placed 2026-10-07** in `companion-environments/`, named `napster-tutor-environment-{subject}.avif`. The seven-up crew lineup is at `imagery/people/crew/napster-tutors-crew-lineup.avif`.

| Slug | First | Surname | Role | Crew | Portrait | Environment (role scene) |
|---|---|---|---|---|---|---|
| `richard-warnok` | **Richard** | Warnok | Learning Guide | Specialist **+ Tutors** | *(see Specialist crew — one identity, one portrait)* | *(as above)* |
| `ama-osei` | **Ama** | Osei | History Tutor | Tutors | `portraits-hero/napster-tutor-ama-osei-history.avif` | `companion-environments/napster-tutor-environment-history.avif` |
| `dara-quinn` | **Dara** | Quinn | Reasoning & Argument Tutor | Tutors | `portraits-hero/napster-tutor-dara-quinn-reasoning.avif` | `companion-environments/napster-tutor-environment-reasoning.avif` |
| `june-tanaka` | **June** | Tanaka | Writing & Literature Tutor | Tutors | `portraits-hero/napster-tutor-june-tanaka-writing.avif` | `companion-environments/napster-tutor-environment-writing.avif` |
| `teo-vasilev` | **Teo** | Vasilev | Mathematics Tutor | Tutors | `portraits-hero/napster-tutor-teo-vasilev-mathematics.avif` | `companion-environments/napster-tutor-environment-mathematics.avif` |
| `ines-almeida` | **Ines** | Almeida | Science Tutor | Tutors | `portraits-hero/napster-tutor-ines-almeida-science.avif` | `companion-environments/napster-tutor-environment-science.avif` |
| `desmond-zhang` | **Desmond** | Zhang | AI Tutor | Tutors | `portraits-hero/napster-tutor-desmond-zhang-ai.avif` | `companion-environments/napster-tutor-environment-ai.avif` |

## Unassigned

| Slug | First | Surname | Role | Crew | Portrait | Environment (role scene) |
|---|---|---|---|---|---|---|
| `jane` | **Jane** | — | Chief of Staff (Operations) | — *(unresolved — see notes)* | `portraits-hero/napster-companion-jane-chiefofstaff.avif` | — *(no environment scene for Jane)* |

## Notes

- **Spelling.** Elena (not "Ellena"). The AKEO source filename used "Ellena"; the iterative bundle used "Elena". Iterative wins.
- **Kai's role.** Chief of Staff (iterative). AKEO had labelled Kai as Learning; that was reassigned to Richard.
- **JC's role.** Code (iterative). AKEO had labelled JC as Productivity; reassigned.
- **May's role.** Creative (iterative). AKEO had labelled May as Lifestyle; reassigned.
- **Richard's role.** Learning (iterative). AKEO had labelled Richard as Training; reassigned.
- **Elena's role.** Wellbeing (iterative). AKEO had labelled her as Sport; reassigned.
- **Amit Pillai.** Tech Support. Net-new role per Ziv (2026-05-10); AKEO had labelled him Coding. Amit does not appear in the iterative bundle. As of v1.2.2 no actual portrait file exists in the repo — only an environment scene (`companion-environments/napster-companion-environment-tech-support.avif`). Source a portrait or document a placeholder treatment when needed.
- **Jane.** Has no AKEO surname; the iterative bundle named her only by first name + role. Carry forward as-is. If a surname is assigned later, rename to `napster-companion-jane-{surname}-chiefofstaff.avif` **and update her slug here first.** Her crew is unresolved: she predates the crew structure, and a Jane also serves as coordinator of the Adobe Sales Ops crew. Resolve before she is referenced in any crew handoff language.

### Richard Warnok — one identity, two roles (2026-08-28)

Richard holds a seat in both the Specialist crew and the Tutors crew. **One roster row, one slug, one portrait, one voice, one backstory.** He is not forked and there is no second agent record.

- **Title:** Learning Guide. This retires four earlier labels — "Professor" (his prompt H1 and the outside-counsel table), "Learning" (this roster before today), and "learning-mentor" (his Mac asset filename). Do not reintroduce them.
- **Director of Studies** is descriptive language for what he does inside the Tutors crew — holding each student's plan and routing them to the right tutor. It is not his title and must not appear in a title field.
- His Mac-at-desk asset is still named `napster-mac-richard-warnok-learning-mentor.avif`. The filename is stale against this row; leave it until the asset is regenerated, then match the slug.

### Tutors crew registration

The six new seats were registered here **before** any portrait was generated, deliberately. Reserved portrait filenames follow `napster-tutor-{slug}-{subject}.avif`, which differs from the Specialist crew's `napster-companion-{slug}-{role}.avif` — the `tutor` segment is intentional and distinguishes the crews at a glance.

**`desmond-zhang` was renamed from `felix-zhang`** on 2026-08-28. A Felix Volta already exists in the music line, and agents refer to each other by first name in handoff language, so two Felixes across two live crews would collide. Nothing else about the character changed. The source profiles document at `go.napster.com/napster-crews` still carries the old name and needs the same correction.

## Mac-at-desk variants

The iterative bundle also ships "agent at Mac" compositions under `imagery/product/mac/napster-mac-{firstname}-{surname}-{role}-{descriptor}.avif`:

- `napster-mac-alyssa-reynolds-career-coach.avif`
- `napster-mac-elena-garcia-wellbeing-guide.avif`
- `napster-mac-jane-operations-chief-of-staff.avif`
- `napster-mac-jc-mitchell-code-wizard.avif`
- `napster-mac-jordan-carter-fitness-coach.avif`
- `napster-mac-kai-mercer-chief-of-staff.avif`
- `napster-mac-kevin-jones-financial-guide.avif`
- `napster-mac-richard-warnok-learning-mentor.avif`

These are the canonical "agent at work" compositions for product UI marketing.

## Producers (music line — separate from the agent roster)

The music-line producers are a distinct cast (not the agent roster). They sit in `imagery/people/producers/`:

| Producer | Genre |
|---|---|
| Axel | Rock |
| Billie | Indie |
| Jasper | Jazz |
| Luna | R&B |
| Mateo | Latin |
| Nyx | Hip-hop |
| Rubymae | Country |
| Sloane | Pop |
| Voltage | Electronic |

## Copy rule

When writing about any agent: full human name first ("Kai Mercer"), then first name only ("Kai") for subsequent references. Never "your AI Kai", never "Kai the assistant", never "the Napster Kai assistant". Just *Kai*.
