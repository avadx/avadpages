# Brand Icon Integration Plan

## Context

The avad.ai landing page currently uses only the **wordmark** (`assets/logo-mark.svg`) everywhere — navbar, footer, and favicon. The brand identity (`brand/logo/avadbrand.png`) defines the **Node Orbit icon** as the "Primary Icon" of the system, but it does not appear anywhere on the site.

This causes three concrete problems:
1. The favicon is the wordmark scaled to 16px — unreadable in the browser tab
2. There is no Open Graph image, so link previews on Slack / X / LinkedIn / iMessage render blank or fall back to the favicon
3. The brand has no presence at small sizes or in square crops (PWA, app icon, share previews)

The Node Orbit icon exists only as PNG today (`brand/logo/avadIconeW.png` and `avadiconeD.png`, 1254×1254) — no SVG version. This means Phase 1 is real vectorization work, not an SVG split.

**Intended outcome:** the icon does the jobs the wordmark cannot do (favicon, app icon, share previews, one subtle motion moment), without crowding the wordmark in places where the brand sheet shows wordmark-only (navbar, footer).

---

## Goals

1. Vectorize the Node Orbit icon to SVG, with light + dark variants
2. Replace the broken favicon and ship a proper app icon set (including maskable for Android)
3. Add OG / Twitter card metadata so share previews render correctly (asset shipped now, URL goes live with deploy)
4. One motion moment in the hero — quiet, taste-driven, reduced-motion safe
5. Verify Arabic / RTL is unaffected
6. Document the final usage rules in the repo so this doesn't drift

---

## Phase 1 — Asset prep (vectorization)

**Goal:** produce production-grade SVGs from the PNG source. This is the foundation.

1. Vectorize the Node Orbit icon from `brand/logo/avadiconeD.png` (1254×1254). Options, in order of preference:
   - SVGcode (web app, free, clean output for geometric marks)
   - Illustrator Image Trace with hand-tuned thresholds, then path cleanup
   - Hand-redraw on a grid in Figma / Illustrator using the PNG as reference (most accurate for a geometric mark — likely the right call here)
2. Export icon variants to `assets/`:
   - `assets/icon-mark.svg` — black ring (#0a0a0a), white satellite dots, orange center (#fc6530) — for light backgrounds
   - `assets/icon-mark-light.svg` — white ring + dots, orange center — for dark backgrounds
3. Export raster sizes (from the SVG source, not from the PNG):
   - `assets/icon-32.png` — favicon fallback
   - `assets/icon-180.png` — apple-touch-icon
   - `assets/icon-512.png` — PWA standard
   - `assets/icon-512-maskable.png` — PWA maskable, drawn with ~80% safe zone so Android shape masking does not clip the orbital ring (per engineer review point 4)
4. Design + export `assets/og-image.png` at 1200×630:
   - Brand black background (#0a0a0a)
   - Node Orbit icon left, wordmark right
   - One-line tagline below, pulled from `docs/avad-ai-landing.md`
   - Use `brand/Fonts/` for typography consistency

**Acceptance:** SVGs render identically to source PNG at 16px and 512px. Maskable PNG keeps the full mark visible inside Android's circular and rounded-square safe zones (preview at maskable.app). All raster sizes generated from the SVG source.

**Estimated effort:** ~90 min (vectorization is the bottleneck, not an SVG split).

---

## Phase 2 — Favicon + app icon (highest impact, lowest risk)

**Goal:** fix the unreadable favicon and add proper PWA / iOS support.

Edit `index.html` head (replacing line 9):

```html
<link rel="icon" type="image/svg+xml" href="assets/icon-mark.svg" />
<link rel="icon" type="image/png" sizes="32x32" href="assets/icon-32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="assets/icon-180.png" />
<link rel="manifest" href="site.webmanifest" />
<meta name="theme-color" content="#0a0a0a" />
```

Create `site.webmanifest` at the repo root:

```json
{
  "name": "avad.ai",
  "short_name": "avad",
  "icons": [
    { "src": "assets/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any" },
    { "src": "assets/icon-512-maskable.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ],
  "theme_color": "#0a0a0a",
  "background_color": "#0a0a0a",
  "display": "standalone"
}
```

**Critical files modified:**
- `index.html` — head section, around line 9
- `site.webmanifest` — new file at repo root

**Acceptance:** browser tab shows the orbital icon. iOS "Add to Home Screen" shows the icon on a clean background. Android home-screen icon renders without clipping (verify in Chrome DevTools > Application > Manifest).

---

## Phase 3 — Open Graph / Twitter card (asset now, verify post-deploy)

**Goal:** ship the metadata + asset so that the moment the site is live, share previews work.

Add to `<head>` in `index.html`:

```html
<meta property="og:title" content="avad.ai" />
<meta property="og:description" content="<pulled from docs/avad-ai-landing.md>" />
<meta property="og:image" content="https://avad.ai/assets/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://avad.ai/" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="avad.ai" />
<meta name="twitter:description" content="<same as og:description>" />
<meta name="twitter:image" content="https://avad.ai/assets/og-image.png" />
```

**Known limitation (per engineer review, side note):** the absolute URL `https://avad.ai/...` will return 404 until the production deploy is live. This is expected — the metadata + asset ship now, the visual verification ("test with opengraph.xyz") moves to launch responsibility, not this PR's acceptance criteria.

**Acceptance for this PR:** meta tags present, OG image file exists at the referenced path, validates in a markup linter. Visual share-preview test deferred to launch.

---

## Phase 4 — One motion moment (Option B per engineer recommendation)

**Goal:** make the brand feel alive in exactly one place, quiet and taste-driven.

**Decision:** Option B — the icon appears once in the hero as a small inline accent next to a key word, with the orange center dot pulsing slowly. (Engineer review struck Option A's OG-rotation as impossible since OG images are static PNGs; recommended B over C because spinners-on-async become visual noise fast.)

Implementation:
- Inline SVG of the icon next to the chosen hero word (selection of word to be confirmed against `docs/avad-ai-landing.md` copy)
- CSS `@keyframes pulse` on the orange center circle: opacity 1.0 → 0.6 → 1.0 over ~3s, ease-in-out, infinite
- Wrap the keyframes in `@media (prefers-reduced-motion: no-preference)` so reduced-motion users get a static icon
- No JavaScript

**Critical files modified:**
- `index.html` — hero section markup (locate the chosen word)
- `assets/styles.css` — add the `@keyframes` and the `.icon-pulse` selector

**Acceptance:** pulse is barely noticeable on first glance, recognizable on second. Doesn't draw the eye away from the H1. Disabled cleanly when `prefers-reduced-motion: reduce` is set (verify via DevTools rendering panel).

---

## Phase 5 — RTL / Arabic verification

**Goal:** the icon is direction-agnostic, but verify nothing in the AR locale broke.

- Wordmark lockup stays LTR even in AR (brand names don't flip — already correct in `assets/i18n.js`)
- Icon-only usages (favicon, OG, hero pulse) are direction-agnostic
- Run the page in both EN and AR via the locale toggle, screenshot both
- Verify the hero-pulse icon position is correct after RTL flip — if it lands awkwardly relative to the Arabic word, adjust placement per locale

**Acceptance:** screenshots of both EN and AR show the lockup unchanged in navbar/footer, favicon identical, hero pulse visible and well-placed in both directions.

---

## Phase 6 — Cleanup + documentation

1. Create `brand/README.md` documenting:
   - Which file goes where (favicon, OG, navbar, footer, hero accent)
   - When to use icon vs wordmark vs full lockup
   - Color tokens (#0a0a0a, #fc6530, brand whites)
   - Reference to `brand/logo/avadbrand.png` as the source-of-truth identity sheet
2. Confirm none of `brand/logo/*` or new `assets/*` files are matched by `.gitignore`
3. Stage + commit the new files in checkpoints (per global CLAUDE.md workflow discipline — verify each `git diff --cached --stat` before commit)
4. Update `CHANGELOG.md` under the next version entry
5. Bump `VERSION` if the project policy requires it for visible asset changes (check current convention)

---

## Suggested order + revised effort

Based on engineer review (vectorization is real work, OG can't be visually verified pre-deploy):

| Phase | Effort | Risk | Visible | Ship now? |
|---|---|---|---|---|
| 1 — Asset prep (vectorize) | ~90 min | medium (vector quality) | no | yes |
| 2 — Favicon + manifest | ~15 min | none | yes (immediate) | yes |
| 3 — OG metadata + asset | ~30 min | none | post-deploy | yes (verify at launch) |
| 4 — Motion (Option B pulse) | ~45 min | low (reversible) | yes (subtle) | yes |
| 5 — RTL check | ~15 min | none | no (verification) | yes |
| 6 — Cleanup + docs | ~30 min | none | no | yes |

**Revised total:** ~4 hours (not the 2.5 the original plan claimed). Single PR titled `brand: integrate Node Orbit icon`.

---

## What this plan deliberately does not do

- **No icon in the navbar next to the wordmark.** The brand sheet's "Compact Navbar Example" shows wordmark-only. Adding the icon would over-brand and squeeze the nav.
- **No icon as bullet points or decorative repeats.** The orbit is a primary mark — repetition cheapens it.
- **No replacing the wordmark anywhere it currently lives.** Wordmark stays as the headline brand element; the icon supplements it where the wordmark fails (small sizes, square crops).
- **No animation in the OG image.** OG images are static PNGs in social previews — animation there is not technically possible.
- **No spinner-on-async-actions** (was Option C). Spinners run constantly during normal use and become visual noise that erodes the mark's value.

---

## Critical files reference

**Read-only references:**
- `brand/logo/avadbrand.png` — source-of-truth brand identity sheet
- `brand/logo/avadiconeD.png`, `brand/logo/avadIconeW.png` — icon source PNGs (1254×1254)
- `brand/Logo.svg` — wordmark SVG (does **not** contain the icon, contrary to original plan)
- `brand/Fonts/` — typography for OG image
- `docs/avad-ai-landing.md` — copy source for OG description and hero-pulse word selection
- `assets/logo-mark.svg`, `assets/logo-mark-light.svg` — current wordmark, stays in place

**Files to be created:**
- `assets/icon-mark.svg`, `assets/icon-mark-light.svg`
- `assets/icon-32.png`, `assets/icon-180.png`, `assets/icon-512.png`, `assets/icon-512-maskable.png`
- `assets/og-image.png`
- `site.webmanifest`
- `brand/README.md`

**Files to be modified:**
- `index.html` — head (favicon links, OG meta), hero section (pulse icon)
- `assets/styles.css` — `@keyframes pulse` + `.icon-pulse` selector + `prefers-reduced-motion` guard
- `CHANGELOG.md` — new entry
- `VERSION` — bump if convention requires

---

## Verification

End-to-end test sequence after implementation:

1. **Favicon (Phase 2):** open `index.html` in a browser, confirm tab icon is the orbital mark, not the wordmark.
2. **PWA manifest (Phase 2):** open Chrome DevTools > Application > Manifest, confirm no errors, both `any` and `maskable` icons load. Preview maskable rendering at maskable.app.
3. **OG metadata (Phase 3):** view-source the page, confirm all `og:` and `twitter:` meta tags present and reference real local file paths during dev (swap to absolute URL for production). Visual share-preview test deferred to post-deploy.
4. **Motion (Phase 4):** open the page, observe hero pulse for 10 seconds — should be subtle. Toggle DevTools rendering > emulate `prefers-reduced-motion: reduce`, confirm pulse stops immediately.
5. **RTL (Phase 5):** toggle to AR locale, screenshot. Compare to EN screenshot. Navbar + footer wordmark identical, favicon identical, hero pulse well-placed in both.
6. **Build + run:** if the project has any build step or local server (check `package.json` / `README.md`), run it and verify no console errors related to missing assets or manifest.

If `/avadbeta-review` exists in the workflow, run it on the diff before invoking `/ship` (per project CLAUDE.md).
