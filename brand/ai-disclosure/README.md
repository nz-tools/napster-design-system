# AI disclosure marks

Napster's own marks for disclosing AI-generated actors. They are finished artwork. Use them as supplied; do not commission or draw new ones.

## What's in this folder

Two forms, each in two colors.

| File | Form | Color | Size (px) |
|---|---|---|---|
| `napster-ai-element-mark-black.png` | The AI mark | Black `#1A1A1A` | 1152×930 |
| `napster-ai-element-mark-white.png` | The AI mark | White `#FAF9F6` | 1152×930 |
| `napster-ai-element-sentence-mono-black.png` | The sentence | Black `#1A1A1A` | 6715×441 |
| `napster-ai-element-sentence-mono-white.png` | The sentence | White `#FAF9F6` | 6715×441 |

All four are PNGs with a transparent background and a small margin built into the canvas.

- **The AI mark.** The letters *AI* inside a rounded outline.
- **The sentence.** *Includes AI-generated actors* on one line, set in IBM Plex Mono, the system's metadata face. No period. Used word for word, every time. No variants, no paraphrase.

## The rule for video

Every video Napster publishes carries the disclosure. One rule for every export, so nobody decides film by film.

| What | Rule |
|---|---|
| The AI mark | On screen from the first frame to the last. It never moves. |
| Position | Bottom-right, inside the safe area: about 5% in from the right and bottom edges. That keeps it from being trimmed on export and clear of the like and share buttons on vertical video. |
| The sentence | Sits directly left of the mark, on the same line. It shows for the first 3 to 4 seconds, then goes away while the mark stays exactly where it is. It comes back for the last 3 to 4 seconds. |
| Closing card | None. There is no separate disclosure card at the end. |
| Color | White over footage and dark frames, at 92% opacity with a 1px soft shadow. Black over light backgrounds. |
| Size | Sized to read on a phone held upright. In practice the type is about 13px on a frame 1080px wide. |
| Other shapes | Build at 16:9, then confirm the mark and sentence still sit inside the safe area at 9:16 and 1:1. |
| Export | Keep Content Credentials (C2PA) metadata intact. If a step in the pipeline strips it, flag it. |

## Treatment

- **Pick the color by background.** White on dark surfaces, black on light ones. Same rule as the logo.
- **Use the files as supplied.** Do not redraw the mark, retype the sentence, reword it, or recolor either one. The soft shadow in the video rule is the only effect allowed.
- **Scale proportionally.** Never stretch or crop into the built-in margin.
- **Size the pair together.** Both files are drawn at one scale, so scale them by the same percentage and the letters match. Set that way, the mark's file is 2.11 times the height of the sentence's.

## Not set yet

Still images. Ads, social posts, booth graphics and print have no placement or size rule. Do not infer one from the video rule or from other brand systems. Ask the design system maintainer when a layout depends on it.

## Source

Version 3 artwork, created in-house by Ziv Navoth and Rabih Chehab in September 2026. Original filenames: `napster_ai_element_{mark|sentence_mono}_{black|white}_v3.png`. The v3 sentence files ended with a period. The rule dropped it, so the two sentence files here are the v3 artwork with the period cropped off the canvas and nothing else changed.

---

See `DESIGN.md` § 9.8 *AI disclosure*.
