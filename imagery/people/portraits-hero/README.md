# Companion Portraits

**Slot:** Isolated Portraits — Companion Character

## What's in this folder

3/4-framed portraits of each named Napster Companion. Background is the persona's environment (studio, kitchen, gym), never a void. These files are used for *all* companion portrait contexts — hero use on landing pages, smaller use in roster grids and cards. CSS handles sizing.

## Treatment

Filename convention: `napster-companion-{firstname}-{surname}-{role}.{ext}`. Canonical roster lives in `../persona-roster.md`. When sitting over the dark canvas, apply `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))` darken pass; optional Beam overlay at ~0.55 screen.

## Contents

| Companion | Role | Dimensions |
|---|---|---|
| Alyssa Reynolds | Career | 1088×1680 |
| Elena Garcia | Wellbeing | 1088×1680 |
| Jane | Chief of Staff (Operations) | 1088×1680 |
| JC Mitchell | Code | 1088×1680 |
| Jordan Carter | Fitness | 1088×1680 |
| Kai Mercer | Chief of Staff | 816×1260 |
| Kevin Jones | Finance | 1088×1680 |
| May Li | Creative | 1088×1680 |
| Richard Warnok | Learning | 1088×1680 |

**Not in this folder:** Amit Pillai (Tech Support) — no portrait file has been sourced. See `../persona-roster.md` for the workaround.

## History

Until v1.2.1, this folder held square 1200×1200 environment scenes that were mistakenly documented as portraits. The actual portrait set lived at `portraits-thumb/`. v1.2.2 moved the environment scenes out to `imagery/scenes/companion-environments/` (where they belong) and promoted the real portraits here. The separate `portraits-thumb/` folder was removed; one portrait per companion is enough — CSS sizes them down for card use.

---

See `DESIGN.md` § 9 *Imagery & Photography* for the full vocabulary.
