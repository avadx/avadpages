# DESIGN.md — avad.ai design system

Single source of truth for the avad.ai landing page visual system.
Created by `/design-consultation`.

This document overrides any other styling reference except the brand identity in
[brand/](brand/). Where brand assets and this file disagree, brand wins for
palette and typography; this file wins for everything else (spacing, motion,
layout, components, accessibility, RTL).

When implementing or reviewing visual / UI work, read this file first. Flag
deviations explicitly.

---

## Product context

- **What this is:** avad.ai marketing landing page. Pre-launch.
- **Who it's for:** Heads of AI / VP Engineering / CTO at growth-stage companies (200-2,000) in regulated or regulated-adjacent sectors (fintech, healthtech, B2B SaaS, infrastructure, govtech), with EU or KSA market exposure. Secondary reader: their auditor.
- **Wedge:** AI agents that hold up in production.
- **Memorable thing (drives every visual call):** *Serious software for serious work.* Refined, dense, low-decoration, type does the work, no marketing patterns. Reads as engineering firm, not consultancy.
- **Litmus test:** if a senior ML engineer screenshots the hero and posts it without commentary, the design is working. If they need to caption it, it failed.

---

## Aesthetic direction

- **Direction:** editorial-utilitarian. Between Anthropic Research and a Bloomberg terminal.
- **Decoration level:** minimal. Hairline rules, monospace tags, one orange signal per viewport. No icons in colored circles, no 3D, no gradients, no blobs, no decorative imagery as a category.
- **Mood:** a spec sheet rendered with the care of a Swiss railway timetable. The energy of an audit packet that happens to be beautifully typeset.
- **Reference posture:** Linear, Vercel, Anthropic Research, Supabase. Not Cohere, Mistral, Accenture, Deloitte, BCG.

---

## Color

Brand palette is canonical. See [brand/color.svg](brand/color.svg) for the brand's own statement of intent.

| Role | Token | Hex | Brand name | Usage |
|---|---|---|---|---|
| Surface | `--bg` | `#F2F2F2` | Vision | Page background. Never tinted, never gradient. |
| Ink | `--ink` | `#000000` | Unlimited | Primary text, primary borders at high contrast. |
| Structure | `--structure` | `#989795` | Solutions | Hairline rules, dividers, secondary borders. |
| Muted | `--muted` | `#6B6A68` | (derived) | Secondary text, captions, metadata. |
| Rule | `--rule` | `#C8C7C5` | (derived) | 0.5px hairlines between rows / sections. |
| Paper | `--paper` | `#FFFFFF` | (derived) | Card / artifact-frame fill, when a panel needs to lift off the surface. Use sparingly. |
| Signal | `--signal` | `#FC6530` | Futuristic | The single accent. See "Orange budget" below. |
| Signal-dark | `--signal-dark` | `#C94720` | (derived) | Dark-mode remap when orange filled area exceeds ~5% of viewport. |

### Semantic states

Desaturated to match the document register. Never neon. All pass AA on `--bg`.

| State | Hex | Usage |
|---|---|---|
| Pass | `#0F8B58` | Eval pass, audit-trail OK, residency green dot. |
| Review | `#B07306` | Needs review, eval threshold not met, amber flag. |
| Fail / Blocked | `#A23427` | Eval fail, policy block, refusal-accuracy miss. |

### Orange budget (hard rule)

Orange is signal, not surface. It lives in:

- The avad column of the hero eval comparison table (full fill).
- Numerical claims that the buyer cares about ("+23.7" delta, "94.7%" lead value).
- Residency tags' leading dot (and only the dot).
- The single primary CTA per viewport (text or fill, not both).
- Active state on focus-visible rings.
- Selection highlight (`::selection { background: var(--signal); color: #fff; }`).

It does **not** live in:

- Backgrounds.
- Gradients of any kind.
- Glow / shadow rings around dots, status pills, or buttons.
- Decorative pill / chip backgrounds.
- Body text accent words (use `--ink` weight 800 for emphasis instead).
- Hover states on more than one element per viewport.

Two oranges per viewport at most. If you have three, kill one.

### Dark mode

Default for `prefers-color-scheme: dark`. Not a vibes toggle.

- `--bg`: `#0E0E0D`
- `--ink`: `#F2F2F2`
- `--paper`: `#171715`
- `--rule`: `#26261F`
- `--structure`: `#6B6A68`
- `--muted`: `#A8A7A4`
- `--signal`: `#FC6530` (stays — passes 7.2:1 on `#0E0E0D`)
- `--signal-dark`: `#C94720` for any filled area >5% of viewport (rare, but enforce)

---

## Typography

**One face for both scripts. One mono for the evidence.** No second decorative font.

### Faces

- **Display + body + UI: DIN Next LT Arabic** — bilingual Arabic + Latin. Already licensed and shipped at [brand/Fonts/](brand/Fonts/).
  - Weights available and used: 200 (UltraLight), 400 (Regular), 500 (Medium), 700 (Bold), 800 (Heavy). Skip 900 (Black) — overkill given the discipline.
- **Mono: IBM Plex Mono** — open source, technically credible, pairs with DIN's geometry. Loaded from Google Fonts or self-hosted. Weights used: 400, 500.

### Roles

| Role | Family / weight | Size desktop | Size mobile | Line-height | Notes |
|---|---|---|---|---|---|
| Display (h1) | DIN Heavy 800 | `clamp(40px, 5.5vw, 64px)` | 40px | 1.05 | sentence case, letter-spacing -0.02em, max-width 760px |
| Section heading (h2) | DIN Heavy 800 | `clamp(28px, 3.2vw, 40px)` | 28px | 1.1 | letter-spacing -0.015em, max-width 760px |
| Subhead (h3) | DIN Bold 700 | 20px | 18px | 1.2 | letter-spacing -0.005em |
| Body (Latin) | DIN Regular 400 | 17px | 16px | 1.55 | tabular-nums on |
| Body (Arabic) | DIN Regular 400 | 18px | 17px | 1.7 | DIN Arabic glyphs need the room |
| UI / label | DIN Medium 500 | 12px | 12px | 1 | uppercase, letter-spacing 0.04em — only for tiny metadata |
| Mono | IBM Plex Mono 400 | 13-14px | 12-13px | 1.5 | tabular-nums, zero-slash on. For `eval_id`, model names, region tags, hashes, code, inline citations |

### Numerics

Tabular numerics everywhere. `font-variant-numeric: tabular-nums` on `body`, all tables, and any element showing a percentage or count. No proportional digits in evidence.

### What never appears

- Italics anywhere. Emphasis = weight 800 in `--ink`.
- All-caps headings (only tiny UI labels at 12px).
- Underlines as decoration. Underlines on inline links only, on hover, 1px from baseline.
- A second decorative font ever.
- `system-ui`, `-apple-system`, Inter, Roboto, Helvetica, Arial, Open Sans, Lato, Montserrat, Poppins, Space Grotesk anywhere in the stack — not as fallback, not as accent.

### Fallback chain

```
font-family: "DIN Next LT Arabic", "Helvetica Neue", sans-serif;
font-family: "IBM Plex Mono", ui-monospace, monospace;  /* mono only */
```

Helvetica Neue is the only acceptable Latin fallback (similar geometry, ships on macOS/iOS). Do not chain to system-ui — drift target.

---

## Spacing

**4px base unit.** Spec-sheet dense.

| Token | Value | Use |
|---|---|---|
| `--sp-2xs` | 2px | Hairline gaps within tight UI |
| `--sp-xs` | 4px | Inline metadata gaps |
| `--sp-sm` | 8px | Tag internal padding, button gap |
| `--sp-md` | 12px | Form input padding |
| `--sp-base` | 16px | Default block spacing, paragraph margin |
| `--sp-lg` | 24px | Card padding, section spacing within hero |
| `--sp-xl` | 32px | Container side padding desktop, gutter |
| `--sp-2xl` | 48px | Sub-section spacing |
| `--sp-3xl` | 64px | Section spacing tablet |
| `--sp-4xl` | 96px | Section rhythm desktop |

**Section rhythm:** 96 / 64 / 48 px (desktop / tablet / mobile). Sections divided by 0.5px hairlines, never by whitespace alone — the hairline is the contract that says "the page is structured."

---

## Layout

| Breakpoint | Range | Columns | Margins | Gutter |
|---|---|---|---|---|
| Desktop | ≥1024px | 12 | 32px | 24px |
| Tablet | 768-1023px | 8 | 24px | 20px |
| Mobile | <768px | 4 | 20px | 16px |

**Max widths:**

- Container: 1280px
- Prose blocks: 720px (≈ 65 characters per line in DIN Regular 17px)
- Artifact frames (tables, comparison panels): 1080px

**Tables instead of cards.** When you reach for a card grid, ask: could this be a table with columns and rows? If yes, use a table.

**No card has a shadow below 4px.** No corner radius above 4px. Cards are bordered with 0.5px `--rule`, never floated.

---

## Motion

**Minimal-functional only.** Two motions exist on the page:

1. **Hover / state transitions:** 80-120ms ease-out. Color, border, background. Never transform-translate as a hover.
2. **Hero eval table column fill on first paint:** the avad column fills over 600ms, like a result completing. `prefers-reduced-motion: reduce` kills it.

**Anchor scroll:** 240ms ease-out. Smooth, not snap.

**Forbidden:**

- Parallax of any kind.
- Scroll-driven choreography (fade-up, slide-in, opacity ramps on scroll).
- Spinner / loader animations longer than 400ms (use a static skeleton instead).
- Logo or icon animations.
- Auto-rotating carousels.
- Bouncing / springing easing curves.

**Easing tokens:**

```
--ease-out: cubic-bezier(0.2, 0.7, 0.2, 1);
--ease-in: cubic-bezier(0.7, 0, 1, 0.5);
--dur-micro: 80ms;
--dur-short: 120ms;
--dur-base: 240ms;
--dur-long: 600ms;  /* eval column fill only */
```

---

## RTL & i18n

**One site, two equals.** Not a translation overlay.

- Logical CSS properties throughout: `margin-inline-start`, `padding-block`, `text-align: start`, `inset-inline-start`. Never `margin-left`, never `text-align: left`.
- The grid mirrors when `dir="rtl"`. Visual reading order mirrors.
- The orange accent **follows reading direction**. It does not switch sides. If the avad column is the rightmost in LTR, it is the leftmost in RTL — but it remains the visually-terminal, eye-landing column in both.
- Arabic body gets `font-size: 18px` (desktop) and `line-height: 1.7`. DIN Arabic glyphs need the room.
- Language toggle: a footer text link, not a flag, not a top-nav pill. URLs `/ar` and `/en`. Both indexed. Both have full content parity (no Arabic-as-summary).
- Set `lang` and `dir` on `<html>`. Set `lang="ar"` `dir="rtl"` on Arabic content blocks even within a primarily-Latin page (e.g., the hero example task row that includes Arabic).
- Numerals: keep Latin (Western Arabic) numerals throughout. Eastern Arabic numerals are correct in some contexts but break tabular-nums alignment in mixed-script tables.

---

## Components

### Buttons

- Border-radius: 0px. Never pills. Never 14px.
- Border: 1px solid `--ink` for outline, no border on filled.
- Padding: 13px 18px.
- Font: DIN Medium 500, 14px.
- Optional trailing mono metadata divided by a vertical hairline (`PDF · 14 pp` style).
- Three variants only: `primary` (filled `--ink` on cream, fills `--signal` on hover), `secondary` (outlined `--ink`, fills `--ink` on hover), `quiet` (text only, underlined on hover).
- Never two filled buttons in the same row. Primary is always alone.

### Eval comparison table

The hero artifact. Spec:

- Frame: 0.5px `--rule` border, `--paper` fill.
- Caption row (top): mono metadata. `eval_id` left, `regulated-task suite · pass rate %` right. 11px, uppercase, tracked +0.04em, `--muted`.
- Header row: mono 11px medium, uppercase, tracked +0.05em, `--muted`. Numeric columns right-aligned.
- Task cells: DIN Medium 500 15px. Optional Arabic translation in `--muted` 12px below the Latin name.
- Numeric cells: DIN Regular 400 15px, tabular-nums, right-aligned.
- Lead column (avad): full `--signal` fill, white text, weight 700, with delta in mono 10px at 78% white.
- Row hover (non-lead): `color-mix(in srgb, var(--ink) 3%, transparent)`.
- Row dividers: 0.5px `--rule`, never solid.

### Residency tag

Inline-flex element with: leading 6px dot in `--signal` (or `--pass` for confirmed-audit), then mono 11px uppercase tracked +0.04em label. 0.5px `--rule` border. 6px / 10px padding. Never filled, never tinted.

### Card (used sparingly — prefer tables)

- Border: 0.5px `--rule`. Fill: `--paper`. Padding: 24px.
- Internal: mono 11px metadata header (`run_id`, model name, etc.), then DIN Bold 700 15px title, then key/value rows with 0.5px row dividers.
- States rendered as monospace 10px chips with `border: 0.5px solid currentColor` and the state color (`--pass` / `--review` / `--fail`).

### Top metadata strip

Above the fold, below the nav. 11px mono uppercase tracked +0.04em in `--muted`. Left: `EVAL_RUN · YYYY-MM-DD · HH:MM UTC`. Right: a `LIVE · N tasks · M models` indicator with a leading 6px `--pass` dot. Reinforces "this is a system, not a brochure."

### Section ID

Above each section heading: `3.1 · HERO`, `SY · 02 · TYPOGRAPHY`, etc. 11px mono uppercase tracked +0.05em in `--muted`. The section number / family classification is not a marketing flourish — it's the page admitting it has structure.

---

## Hero specification

**The page opens with a real eval comparison table.** Not a metaphor. Not an illustration. Not a screenshot of a CLI dressed up to look like a table — an actual rendered HTML table.

Stack:

1. **Headline** (DIN Heavy 800, 60-64px, max-width 760px, line-height 1.05): "AI agents that **hold up** in production." Words "hold up" in `--signal`.
2. **Subhead** (DIN Regular 400, 18px, `--muted`, max-width 680px): "avad.ai builds AI agents you can put in production, builds the teams that run them, and publishes the open tools the field depends on. Model-agnostic by contract."
3. **Eval comparison table** (max-width 1080px) with 5-7 task rows the buyer recognizes: PII redaction (Arabic medical notes), SAMA disclosure classifier, EU AI Act Annex III risk tag, cross-border data residency check, trajectory faithfulness (5-step), refusal accuracy (regulated prompts). Columns: foundation models the reader knows + `avad-agent-vN`. Cells = pass-rate %. Last column filled `--signal`.
4. **Residency tags row:** `KSA-Riyadh · pdpl-compliant`, `EU-Frankfurt · ai-act-ready`, `audit-trail · 90-day retention`.
5. **CTA pair:**
   - Primary (filled `--ink`): `Read our eval methodology`, linked to the in-page methodology summary until a standalone page exists.
   - Secondary (outlined `--ink`): `Start scoping` (NOT "sales", NOT "Book a demo", NOT "Book a call")

No hero image. No illustration. No metaphor. No gradient backdrop. No grid-bg overlay. The table is the hero.

---

## Accessibility (AA minimum)

- All text-on-background contrast verified: black on `#F2F2F2` = 18.0:1, orange on `#F2F2F2` = 4.6:1 (passes AA body, fails AAA — never use `--signal` for body text, only emphasis).
- `prefers-reduced-motion: reduce` honored. Disables the 600ms hero column fill and the anchor smooth-scroll.
- `prefers-color-scheme: dark` honored. Dark mode is not a manual toggle alone.
- Focus-visible rings: 2px solid `--signal`, 2px offset, `border-radius: 0`. Never removed.
- All interactive elements have `:focus-visible` and `:focus` states. Hairline-bordered buttons get a `--signal` border on focus.
- Skip-link (`<a class="skip-link" href="#main">`) at body start.
- All buttons have explicit `aria-label` when icon-only or when the visible text is shorthand.
- Eval table cells include `<th scope="col">` and `<th scope="row">`. Numeric cells have units in their accessible label even when visually omitted (`<td aria-label="94.7 percent">94.7</td>`).
- Residency tags have screen-reader text expanding the abbreviation: `<span class="visually-hidden">Region</span> KSA-Riyadh, PDPL compliant`.
- Arabic content is wrapped with `lang="ar"` `dir="rtl"` even when inline within a primarily-Latin row.
- Numerals stay Latin (Western Arabic) for tabular alignment; this is also a screen-reader consistency win.
- Heading hierarchy: one `<h1>` per page (the hero). `<h2>` for sections. `<h3>` for subheads. Never skip levels.

---

## Anti-patterns (hard refusals)

These are the moves that pull avad.ai toward consultancy theater. Refuse them. If a designer or developer asks for one, this document is the reason to say no.

1. **Gradients of any kind.** Linear, radial, conic, mesh, glow rings around dots. Zero. The brief was discussed, decided, and locked.
2. **Pill / 999px-radius buttons.** Engineering firms use square or 4px-max corners.
3. **Box-shadows above 4px.** Hairlines do the lifting.
4. **"Book a demo" / "Book a call" / "Get in touch" as primary CTA.** Primary action is technical. Sales is secondary at best.
5. **Customer logo carousel / strip below the hero.** Replace with operating evidence (eval summary, residency badges, audit-trail metadata).
6. **3-column SaaS feature grid with icons in colored circles.** Replace with a real table.
7. **Hero image, illustration, photograph, 3D mesh, abstract atmospheric gradient.** Refuse the entire decoration category.
8. **Italics for emphasis.** Use weight 800 in `--ink`.
9. **`system-ui`, Inter, Helvetica, Arial, Roboto** anywhere in the typography stack. The brand bought DIN Next LT Arabic deliberately. Use it.
10. **Mono for atmosphere** (e.g., the whole hero in monospace because "engineering"). Mono is reserved for evidence: IDs, region tags, percentages, code, citations.
11. **Eyebrow pill above the h1** with the company's whole positioning compressed into 60 characters. The h1 is the positioning. The pill is decoration.
12. **Lang toggle as a flag, country code, or top-right pill.** Footer text link only.

---

## Brand inconsistencies (logged in TODOS.md)

Three small mismatches across [brand/](brand/) — none are blockers, all are flagged for a future asset cleanup pass.

1. [Logo.svg](brand/Logo.svg) uses `#F97035` for the dot accent. The brand color spec at [brand/color.svg](brand/color.svg) says `#FC6530`. Treat `#FC6530` as canonical (it's the spec sheet); the logo SVG should be updated when next regenerated.
2. [brand/color.svg](brand/color.svg) labels `#FC6530` with RGB `48, 101, 252`. That's BGR-reversed; correct value is `252, 101, 48`. Cosmetic typo in the brand doc.
3. [brand/color.svg](brand/color.svg) is typeset in Inter. Inter is not a brand font — it was Adobe Illustrator's default for the swatch labels. The brand face is DIN Next LT Arabic for both Latin and Arabic.

These are documented again in [TODOS.md](TODOS.md) under "Design — brand asset cleanup."

---

## Implementation hints

CSS custom properties (assume PostCSS or vanilla CSS; no preprocessor required):

```css
:root {
  /* color */
  --bg: #F2F2F2;
  --ink: #000000;
  --paper: #FFFFFF;
  --rule: #C8C7C5;
  --structure: #989795;
  --muted: #6B6A68;
  --signal: #FC6530;
  --signal-dark: #C94720;
  --pass: #0F8B58;
  --review: #B07306;
  --fail: #A23427;

  /* spacing */
  --sp-2xs: 2px; --sp-xs: 4px; --sp-sm: 8px; --sp-md: 12px;
  --sp-base: 16px; --sp-lg: 24px; --sp-xl: 32px;
  --sp-2xl: 48px; --sp-3xl: 64px; --sp-4xl: 96px;

  /* layout */
  --max-container: 1280px;
  --max-prose: 720px;
  --max-artifact: 1080px;

  /* motion */
  --ease-out: cubic-bezier(0.2, 0.7, 0.2, 1);
  --dur-micro: 80ms;
  --dur-short: 120ms;
  --dur-base: 240ms;
  --dur-long: 600ms;

  /* type */
  --font-display: "DIN Next LT Arabic", "Helvetica Neue", sans-serif;
  --font-body: "DIN Next LT Arabic", "Helvetica Neue", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
}
:root[data-theme="dark"], :root[data-theme="auto"]:has(:root) {
  /* dark overrides — see Color § Dark mode */
}
@media (prefers-color-scheme: dark) {
  :root[data-theme="auto"], :root:not([data-theme]) { /* dark tokens */ }
}

body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.55;
  font-feature-settings: "tnum" 1;
  font-variant-numeric: tabular-nums;
}
```

Font loading: `@font-face` for the 5 DIN Next LT Arabic weights from [brand/Fonts/](brand/Fonts/) (do **not** put on a public CDN per [AGENTS.md](AGENTS.md)). IBM Plex Mono via Google Fonts CSS2 endpoint or self-hosted from a packaged subset.

Reference preview: `/tmp/avad-design-preview-qS3Sue/index.html` on the originating machine (transient — captured in `~/.avad/projects/avadx-avadpages/designs/design-system-20260504/` for the approved-direction record).

---

## Decisions log

| Date | Decision | Rationale |
|---|---|---|
| Initial | Initial system created on `agwax/design-system` branch | `/design-consultation` run by user. Brand identity already existed; this system translates it into a working web design language. |
| Initial | DIN Next LT Arabic for both Latin and Arabic across display, body, UI | The brand bought a bilingual face deliberately. Splitting into separate Latin + Arabic faces breaks the equality posture and triples the licensing surface. |
| Initial | IBM Plex Mono as the mono pairing | Open-source, technically credible, pairs with DIN's geometry. Codex proposed Plex; subagent proposed Söhne Mono + GT America Mono. Plex wins on licensing and on not-introducing-a-third-and-fourth-font. |
| Initial | `#F2F2F2` as canonical surface (not `#FAFAF7` warm-paper drift) | Brand spec sheet says `#F2F2F2`. Subagent suggested `#FAFAF7` as warmer; rejected as taste leakage from brand fidelity. |
| Initial | Hero artifact = real eval comparison table (not dark terminal mockup) | The model-comparison framing (avad vs gpt-4o vs claude vs llama) is more provocative and screenshot-friendly than an eval-evidence table with `agent_task / data_boundary / failure_mode` columns. Audit evidence still gets a section. |
| Initial | Pricing visibility: PUBLISH (deferred to TODOS.md as a content decision) | Subagent flagged "publish pricing" as a deliberate departure. Strong agree, but pricing is a content decision (numbers and terms), not a design system decision. Logged for the user. |
| Initial | Initial primary CTA direction = `Read the eval methodology [PDF · 14 pp]`, refuse `Book a demo` / `Book a call` | Superseded on 2026-05-05 by the in-page methodology target while the standalone page/PDF remains deferred. |
| 2026-05-05 | Hero headline = `AI agents that hold up in production.` Primary CTA links to the in-page eval methodology summary. | Owner chose the production headline over the evals/data/auditors variant. A standalone methodology page or PDF can replace the in-page target later. |
| Initial | Brand inconsistencies (`#F97035` vs `#FC6530`, RGB typo, Inter typesetting in `color.svg`) flagged but not auto-fixed | Brand assets are read-only by [AGENTS.md](AGENTS.md) policy. Logged in [TODOS.md](TODOS.md) for a future asset cleanup pass. |
