# Import Checklist

After importing this design system into Claude Design (from GitHub or local), run through this 30-second checklist. It covers the few small things Claude Design's importer doesn't do automatically.

## 1. Fonts — nothing to upload

As of v1.1.0 the system uses three Google Fonts only — **Inter**, **Instrument Serif** *(italic)*, and **IBM Plex Mono**. They auto-resolve at runtime from the `@import` at the top of `colors_and_type.css`. There is no proprietary brand font.

### About the "Missing brand fonts" alert

After import, Claude Design may show an orange **"Missing brand fonts"** alert near the top of the Design System tab, reading *"Claude is rendering typography with substitute web fonts."*

**This alert is informational and can be safely ignored on a Google-Fonts-only design system.** It does not block publishing.

What's happening: Claude Design's preview environment renders cards with built-in faces (Anthropic Serif as a substitute for Instrument Serif, Super Mono VF as a substitute for IBM Plex Mono). Inter resolves natively because it's in Claude Design's built-in font registry. The alert is the host UI noting that no project-uploaded brand font is registered — it does not mean the design system is broken.

Production HTML generated outside Claude Design (artifacts, slides, one-pagers exported to live URLs) loads the canonical Google Fonts directly via the `@import` and renders with the real letterforms. Two render paths, both internally consistent:

| Surface | Font source | Letterforms |
|---|---|---|
| Claude Design preview cards | Built-in substitutes | Close-but-not-canonical |
| Generated production artifacts | Google Fonts CDN | Canonical Inter / Instrument Serif italic / IBM Plex Mono |

If you want the Claude Design preview to also render the canonical faces, the "Upload fonts" button opens a local-file browser where you can register TTF copies of Instrument Serif italic and IBM Plex Mono Regular/Medium with the project. This is optional and does not affect anything outside the preview cards.

> **Previous versions** (v1.0.x) required uploading four Avantt weights via the "Upload fonts" button because Avantt was the only display face and was not in Claude Design's built-in registry. v1.1.0 retired Avantt; the live napster.com site continues to use it and `reference/napster-com-audit.md` documents that, but the design system does not.

## 2. Pull in the full imagery library

Claude Design's importer applies a curation step that pulls a representative subset of imagery rather than the full library. If you notice missing product imagery (broken-image tiles in the "Imagery — products" preview, or empty product folders in the Design Files tab), paste this into the project's chat panel:

```
Pull in the full imagery library from the repo. Include all files from
imagery/product/api/, imagery/product/app/, imagery/product/learn/,
imagery/product/mac/, imagery/product/spaces/, imagery/product/station/,
and imagery/product/view/. Also pull all imagery/people/portraits-hero/
files so every Companion has a resolvable portrait.
```

Claude Design will fetch the missing files from the source repo and refresh the preview cards.

## 3. Confirm the personas card shows all 10 Companions

Open the **Components > Personas** card and verify it shows ten Companion tiles (Kai, Jane, Kevin, Jordan, Elena, JC, May, Richard, Alyssa, Amit) with real portrait imagery. If any tile shows a broken-image icon, run the "pull in the full imagery library" prompt above; the portrait will be in the next-round pull.

## 4. Note about AVIF rendering

Roughly half the imagery library is in AVIF format (modern, web-native, compresses well). Claude Design labels these files as `File` type rather than `Image` in the Design Files tab. In our testing, AVIF files **do** render correctly in generated artifacts. If you ever notice a generated one-pager with a missing image where an AVIF was expected, fall back by asking Claude Design to use the JPG or PNG variant of that asset (most have one in the same folder).

## 5. Validation prompt

Once the steps above are done, paste this prompt to confirm everything is wired:

```
Create a one-pager for Napster Station targeting hub airport operators.
Use the imagery from imagery/product/station/. Apply the design system's
type, color, and layout tokens. Sentence-case headlines with periods.
```

The result should render with **Inter 700 headlines**, **Inter 400 body**, **IBM Plex Mono uppercase eyebrows in `#DD52CB`**, the right product imagery, the lockup top-left, and a single pink accent on the load-bearing noun. If any of those are missing, walk back through the checklist.

---

Questions or new issues? Open an issue at https://github.com/nz-tools/napster-design-system/issues.
