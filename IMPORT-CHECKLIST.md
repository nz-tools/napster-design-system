# Import Checklist

After importing this design system into Claude Design (from GitHub or local), run through this 30-second checklist. It covers the four small things Claude Design's importer doesn't do automatically.

## 1. Upload the brand fonts

Avantt (the display face) is not a Google Font, so Claude Design can't auto-resolve it from CSS. You need to upload it once per project.

> **Important:** You must use the **"Upload fonts" button on the alert**, NOT drag the font files into the chat input on the left.
>
> - The Upload fonts button registers the fonts in the project's font registry. This is what clears the alert and what makes the renderer use Avantt.
> - Dragging into the chat input only attaches the files as context for the Claude assistant. The assistant will acknowledge them and may say "no further action needed," but the font registry doesn't get updated, the alert stays, and the typography keeps rendering with substitute web fonts.
>
> They look similar. They do completely different things. Use the button.

**Steps:**

1. After import finishes, Claude Design shows an orange **"Missing brand fonts"** alert near the top of the Design System tab.
2. Click the **Upload fonts** button on the right side of that alert (NOT the chat input below).
3. Unzip [`Avantt-for-Claude-Design.zip`](Avantt-for-Claude-Design.zip) from this repo root. The zip contains the four Avantt weights in both TTF and WOFF2 formats. **Upload the TTF files** — Claude Design's font registry currently accepts TTF (and OTF), but not WOFF2:
   - `Avantt-Medium.ttf`
   - `Avantt-SemiBold.ttf`
   - `Avantt-Bold.ttf`
   - `Avantt-ExtraBold.ttf`
4. Select all four and confirm the upload.
5. The orange alert should disappear within a few seconds and Avantt should start rendering across the design system.

The WOFF2 files in the same zip are bundled for non-Claude-Design contexts (production HTML, generated artifacts, marketing sites). You don't need to upload them to Claude Design.

If the alert doesn't clear after step 5, refresh the page and check again. If it still doesn't clear, you may have uploaded through the chat input by mistake; try the button again.

Inter (the body face) is loaded from Google Fonts and resolves automatically. No upload needed.

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

Once the four steps above are done, paste this prompt to confirm everything is wired:

```
Create a one-pager for Napster Station targeting hub airport operators.
Use the imagery from imagery/product/station/. Apply the design system's
type, color, and layout tokens. Sentence-case headlines with periods.
```

The result should render with Avantt headlines, Inter body, the right product imagery, the lockup top-left, and a single pink accent on the load-bearing noun. If any of those are missing, walk back through the checklist.

---

Questions or new issues? Open an issue at https://github.com/nz-tools/napster-design-system/issues.
