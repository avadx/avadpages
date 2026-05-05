# Changelog

All notable changes to this project will be documented in this file.

## [0.0.3.9] - 2026-05-05

### Changed
- `site/src/` — removed the dated run and verification text from the public page, removed the MCP servers / skills / plugins FAQ entry from both locales, and kept the eval methodology CTA target intact.
- `docs/avad-ai-landing.md`, `DESIGN.md`, and `TODOS.md` — removed references to the old content date and aligned FAQ count with the public page.
- `site/wrangler.jsonc` — updated Cloudflare compatibility date to the current deployment date.
- `VERSION` and `site/package.json` bumped to `0.0.3.9`.

## [0.0.3.8] - 2026-05-05

### Changed
- `site/src/i18n/en.ts` and `site/src/i18n/ar.ts` — kept the hero headline as "AI agents that hold up in production.", made the primary hero CTA point to the in-page eval methodology card, moved scoping to the secondary CTA, tightened low-risk FAQ and credibility wording, and rewrote the Arabic strings to match the updated intent.
- `site/src/components/Hero.astro` and `site/src/components/CredibilitySection.astro` — wired the primary CTA to `#eval-methodology`.
- `docs/avad-ai-landing.md`, `DESIGN.md`, and `TODOS.md` — reconciled the hero decision, removed the PDF requirement from the current CTA path, and kept `/publish` deferred.
- `VERSION` and `site/package.json` bumped to `0.0.3.8`.

## [0.0.3.7] - 2026-05-05

### Changed
- `site/src/components/ServicesSection.astro` — fixed Arabic service metadata typography for items such as `تدقيق` and `استراتيجية` by removing forced LTR direction, mono styling, uppercase transforms, and letter tracking from Arabic service labels.
- `VERSION` and `site/package.json` bumped to `0.0.3.7`.

## [0.0.3.6] - 2026-05-05

### Changed
- `site/src/components/CredibilitySection.astro` — changed the model-provider footnote from small mono metadata styling to readable body text, with larger Arabic sizing and line height.
- `VERSION` and `site/package.json` bumped to `0.0.3.6`.

## [0.0.3.5] - 2026-05-05

### Changed
- `site/src/components/SectionHead.astro`, `WhySection.astro`, `CredibilitySection.astro`, `FinalCtaSection.astro`, and `Footer.astro` — fixed Arabic metadata typography from "لماذا avad.ai" onward by removing forced LTR direction, mono styling, uppercase transforms, and letter tracking from Arabic labels and footer metadata.
- `VERSION` and `site/package.json` bumped to `0.0.3.5`.

## [0.0.3.4] - 2026-05-05

### Changed
- `site/src/components/ProofBar.astro` — fixed Arabic proof-strip typography by removing forced LTR direction and mono tracking from Arabic labels, then raising Arabic label/value sizes for mobile readability.
- `VERSION` and `site/package.json` bumped to `0.0.3.4`.

## [0.0.3.3] - 2026-05-05

### Changed
- `site/src/components/ServicesSection.astro` — increased services metadata label readability in the expanded service panels: `IDEAL BUYER` / `ENGAGEMENT SHAPE` now use 12px mono, weight 500, and tighter 0.04em tracking.
- `VERSION` and `site/package.json` bumped to `0.0.3.3`.

## [0.0.3.2]

### Added
- `site/src/` — first working pages for `/` (LTR English) and `/ar/` (RTL Arabic), rendered against [DESIGN.md](DESIGN.md). Hero stack: section ID label, h1 with `evals` accent in `--signal`, subhead, eval comparison table (5 columns × 6 task rows, last column filled `--signal` with white text + delta in mono 10px at 78% white), three residency tags (KSA, EU, audit-trail), primary + secondary CTAs (`Read the eval methodology` / `Talk to engineering`).
- `site/src/styles/design-system.css` — token implementation of DESIGN.md: color, spacing, layout, motion, type. Light surface `#F2F2F2` / ink `#000` default; dark mode `#0E0E0D` / `#F2F2F2` triggered by `prefers-color-scheme: dark` (and `data-theme="dark"` for the manual toggle). Logical CSS properties throughout for RTL parity. Skip link, focus-visible ring, reduced-motion media query.
- `site/src/styles/fonts.css` — `@font-face` for five DIN Next LT Arabic weights (200, 400, 500, 700, 800; 900 skipped per DESIGN.md) loaded from `/fonts/`. IBM Plex Mono 400 / 500 imported from Google Fonts CSS2.
- `site/public/fonts/` — six DIN Next LT Arabic .ttf files copied from [brand/Fonts/](brand/Fonts/). Self-hosted, never on a public CDN.
- `site/src/components/` — `Logo.astro` (inline SVG of the brand wordmark, `viewBox` tightened to letter content, orange dot recolored from `#F97035` to canonical `#FC6530`), `Header.astro` (sticky header with nav row + meta strip showing `EVAL_RUN` and `LIVE · 6 tasks · 4 models` with `--pass` dot, plus an inline-script Light/Dark theme toggle), `Hero.astro`, `EvalTable.astro`, `ResidencyTag.astro` (tone variants `signal` / `pass`), `Button.astro` (variants `primary` / `secondary` / `quiet`, optional trailing mono meta divided by hairline, border-radius 0), `Footer.astro` (lang switcher lives here as plain text links per DESIGN.md anti-patterns).
- `site/src/i18n/en.ts` and `site/src/i18n/ar.ts` — locale dictionaries. Mono / identifier strings (eval IDs, model names, region tags, `EVAL_RUN`, `LIVE`, residency labels, `PDF · 14 pp`) stay Latin in both locales by design; numerals stay Western Arabic for tabular alignment.
- `site/src/layouts/Base.astro` — html/head/body shell, sets `lang` and `dir`, wires the skip link.
- `site/src/pages/ar/index.astro` — Arabic locale entry (`/ar/`).

### Changed
- `site/astro.config.mjs` — added MDX integration, Cloudflare adapter, `site: "https://avad.ai"`, and i18n config (`defaultLocale: "en"`, `locales: ["en", "ar"]`, `prefixDefaultLocale: false` so `/` is English and `/ar` is Arabic).
- `site/src/pages/index.astro` — replaced the default Astro template with the real LTR English page.
- `site/package.json` — renamed from `site` to `avad-ai-site`. Bumped to `0.0.3.2`. Added dependencies: `@astrojs/mdx@^5.0.4`, `@astrojs/cloudflare@^13.3.0`. Added dev dependency: `@types/node@^25.6.0`.
- `AGENTS.md` — repo map gained a `site/` entry. `Commands` section now lists the real Astro commands (`bun install`, `bun run dev`, `bun run build`, `bun run preview`).
- `VERSION` bumped to `0.0.3.2`.

### Notes
- **Eval table values are placeholder.** Each row's `(+delta)` and pass-rate is invented for layout. Marked `[TBD-MEASURED]` in `EvalTable.astro` and tracked in [TODOS.md](TODOS.md) under "Hero eval comparison data". Numbers must be measured (or pulled from real eval runs) before launch.
- **Hero copy follows [DESIGN.md](DESIGN.md), not [docs/avad-ai-landing.md](docs/avad-ai-landing.md) §3.1.** DESIGN.md gives "Agents that hold up to your **evals**, your data, your auditors" + `Read the eval methodology` / `Talk to engineering`; the landing copy deck still has the older "AI agents that hold up in production" + banned `Book a 30-minute scoping call`. Reconcile the two before launch (DESIGN.md is canonical for hero per its own anti-patterns list, but the copy deck is canonical for content elsewhere). New TODO entry filed.
- **Hero h1 includes one orange word (`evals`).** This is allowed by the DESIGN.md hero specification but sits at the edge of the orange-budget rule that says body-text accents should use `--ink` weight 800 instead. The h1 is display, not body, so it is treated as conforming. Two oranges per viewport remains: h1 accent + filled avad column. Residency dots are tiny dots, individually permitted.
- **Hero column-fill animation skipped** for this pass. DESIGN.md mentions an optional 600ms staggered fade-in on the avad column; the static render reads correctly without it. Add later when the hero gets a polish pass.
- **Astro adapter:** Cloudflare. The build emits `dist/` with `_worker.js` for Cloudflare Pages. Hosted target is unchanged from [TODOS.md](TODOS.md).
- **No customer logos, no hero illustration, no gradients, no pill buttons, no `Book a ...` CTAs.** Confirmed by `grep -rn "linear-gradient\|radial-gradient\|conic-gradient" site/src/`, `grep -rn "border-radius: 999" site/src/`, `grep -rn "Book a demo\|Book a call\|Book a 30" site/src/ site/public/`, `grep -irnE "Inter|Roboto|system-ui" site/src/styles/` — all empty.

## [0.0.3.1]

### Added
- `site/` — Astro project bootstrap (Astro 6.2.1, TypeScript strict, minimal template, bun as package manager). Lands the scaffolding for the avad.ai landing page implementation against [DESIGN.md](DESIGN.md). The Astro install resolved to 6.x rather than the 5.x specified in [TODOS.md](TODOS.md)'s implementation pathway — `latest` is now 6. Either pin to 5.x in a follow-up if 5.x is required, or update the implementation pathway to acknowledge 6.x is the current major.
- `site/package.json`, `site/bun.lock`, `site/astro.config.mjs`, `site/tsconfig.json`, `site/src/pages/index.astro` (default minimal template — to be replaced with the design-system hero), `site/public/favicon.{ico,svg}` (default Astro favicons — to be replaced), `site/.gitignore`, `site/README.md` (default Astro readme).

### Process
- Bootstrap only. No design tokens, no fonts, no MDX, no Cloudflare adapter, no i18n, no hero implementation yet. The handoff prompt for finishing the implementation lives outside the repo (in the user's chat log) and a separate agent run will land that work in a follow-up commit.
- Bun lockfile committed for reproducibility. `site/node_modules` excluded by the root `.gitignore`.

## [0.0.3.0]

### Added
- `DESIGN.md` at the repo root: design system source of truth. Created on the `agwax/design-system` branch by `/design-consultation`. Translates the existing brand identity (logo, palette, DIN Next LT Arabic fonts) into a complete web design system: color tokens, typography roles, 4px-base spacing scale, 12/8/4-column grid, 0.5px hairline component language, minimal-functional motion (only 80-120ms hover transitions and a 600ms hero column fill), first-class RTL via logical CSS properties, dark mode default for `prefers-color-scheme: dark`, AA accessibility tokens, an explicit anti-patterns list (no gradients, no pill buttons, no "Book a demo" CTA, no customer logo carousel, no hero illustration).
- Hero artifact specification: a real eval comparison table — `avad-agent-vN` vs `gpt-4o` / `claude-sonnet-4` / `llama-3.1-70b` across 5-7 named regulated-task rows, last column filled `#FC6530`, residency tags below, primary CTA `Read the eval methodology [PDF · 14 pp]`, secondary `Talk to engineering`. Replaces the placeholder dark-terminal-mockup hero treatment.
- `TODOS.md`: design section with 3 brand-asset cosmetic mismatches (logo dot uses `#F97035` vs canonical `#FC6530`, RGB typo in `brand/color.svg`, color spec doc typeset in Inter rather than DIN), 3 content decisions deferred to launch (pricing visibility, eval methodology PDF must exist, hero eval data needs real measurements), and a Houston-v1 retrofit task for a future branch.
- `AGENTS.md`: new working rule pointing all agents at `DESIGN.md` for visual / UI / CSS work, with the anti-patterns list called out as a hard refusal list.
- `CLAUDE.md`: pointer to `DESIGN.md` as the design source of truth.

### Changed
- `AGENTS.md` repo map: added `DESIGN.md` entry between `docs/avad-ai-landing.md` and `brand/`.

### Removed
- `AGENTS.md`: `## Skills (avad)` section (the entry-point listing for `/avadbeta-help`, `/avadbeta-investigate`, `/avadbeta-review`, `/autoplan`). The same routing now lives in [CLAUDE.md](CLAUDE.md) for Claude Code and is a host concern rather than a per-repo instruction.

### Process
- `/design-consultation` consulted three voices: primary model, Codex (gpt-5.5, medium reasoning, web search) for design-direction critique, and a separate Claude subagent for an independent direction proposal. Strong convergence on light-on-cream surface, DIN Next LT Arabic for both scripts, IBM Plex Mono pairing, spec-sheet density, and "hero is a real eval table, not a metaphor." Divergences (mono pairing, Latin face split, background hex, body sizing, max widths) resolved in `DESIGN.md`'s Decisions Log.
- Approved-direction artifact and outside-voice transcripts saved outside the repo (local only, not committed).

## [0.0.2.0]

### Changed
- Landing page content rewritten in response to /autoplan multi-phase review (CEO + Design + Eng + DX, dual voices: Claude subagent + Codex with web search). Auto-decisions applied; 12 user challenges and 2 taste choices captured in `TODOS.md` as deferred items.
- "August 2026 problem / deadline" framing replaced with "EU AI Act enforcement windows" across the page so durability extends past August 2026.
- "AI Enablement Program" service renamed to "Embedded Capability Build" to resolve the contradiction with the "we do not sell training" omission.
- "Model-Agnostic Architecture" service renamed to "Model-Portable Architecture" with "with measured drift" added to its scope, acknowledging that MCP/A2A reduce integration friction but not behavioral drift.
- Vocabulary audit expanded from 15 to 19 banned terms — added quality-claim intensifiers caught by review: `production-grade`, `engineered`, `regression-grade`, `battle-tested`. Hero subhead reworded to drop `production-grade`.
- Aleph Alpha valuation corrected from "$20B post-merger" to sourced figure (Cohere $6.8B per TechCrunch, with pending Aleph Alpha takeover subject to approval).
- Datadog 88%/41%/9%/47% statistics flagged `[TBD-SOURCE]` with a note: Codex web search did not match these to actual Datadog 2026 published material. Source or replace before launch.
- Section 3.6 (Proof) gained explicit launch-state copy ("First references shipping `[QUARTER]`") so the section never ships with empty placeholder case studies.
- Section 3.9 (What We Publish) marked `DEFERRED` with three valid forward paths (build OSS first / move to `/publish` / drop entirely) until the avadx GitHub OSS surface is verified — flagged by all 4 review phases as a launch-blocker.
- 4 launch-blockers tagged in-line: secondary CTA destination (`/eval-methodology`), SOC 2 status, KSA-region hosting verification, Section 3.9.

### Added
- `TODOS.md` on the branch, capturing 4 launch-blockers, 12 user challenges (wedge, differentiators, competitor frame, week-12 disclaimer, pricing, naming, mobile + accessibility), and roughly 50 auto-decisions deferred to implementation phase.
- Mobile design intent section in designer notes (sticky nav, 2x3 logo grid mobile, stacked collapsed services cards, single-accordion FAQ mobile, sticky-bottom CTAs, performance budget).
- Accessibility intent section (WCAG 2.2 AA, semantic HTML order, keyboard nav, screen-reader semantics, reduced motion, no-JS fallback, axe-core CI gate).
- Visual discipline section (artifact-led visuals over abstract AI imagery; monospace for technical names; system fonts).
- Implementation pathway section: full Eng-phase auto-decisions documented (Astro 5.x + MDX + Cloudflare Pages + Cal.com + Plausible + Vale + Lighthouse CI + axe-core + Playwright + Lychee + placeholder leakage scan as deploy gate + CSP / HSTS / SRI security headers + AVIF/WebP image optimization).
- Cross-Reference section pointing at the /autoplan review artifact, restore point, and TODOS.

## [0.0.1.0]

### Added
- avad.ai landing page content package (`avad-ai-landing.md`): full 358-line copy deck including research brief, competitive landscape analysis, primary positioning, three differentiators, six service offerings, proof templates, technical credibility section, open-source publishing section, FAQ, and designer notes.
- Global positioning: avad.ai presented as a model-agnostic engineering firm serving EU and KSA regulated markets, with capability transfer and open-source publishing as explicit identity layers alongside production agent builds.
- Vocabulary audit of 15 banned hype terms with concrete replacements, built into the content package.
