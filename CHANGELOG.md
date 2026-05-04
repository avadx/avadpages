# Changelog

All notable changes to this project will be documented in this file.

## [0.0.3.1] - 2026-05-04

### Added
- `site/` — Astro project bootstrap (Astro 6.2.1, TypeScript strict, minimal template, bun as package manager). Lands the scaffolding for the avad.ai landing page implementation against [DESIGN.md](DESIGN.md). The Astro install resolved to 6.x rather than the 5.x specified in [TODOS.md](TODOS.md)'s implementation pathway — `latest` is now 6. Either pin to 5.x in a follow-up if 5.x is required, or update the implementation pathway to acknowledge 6.x is the current major.
- `site/package.json`, `site/bun.lock`, `site/astro.config.mjs`, `site/tsconfig.json`, `site/src/pages/index.astro` (default minimal template — to be replaced with the design-system hero), `site/public/favicon.{ico,svg}` (default Astro favicons — to be replaced), `site/.gitignore`, `site/README.md` (default Astro readme).

### Process
- Bootstrap only. No design tokens, no fonts, no MDX, no Cloudflare adapter, no i18n, no hero implementation yet. The handoff prompt for finishing the implementation lives outside the repo (in the user's chat log) and a separate agent run will land that work in a follow-up commit.
- Bun lockfile committed for reproducibility. `site/node_modules` excluded by the root `.gitignore`.

## [0.0.3.0] - 2026-05-04

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
- Approved-direction artifact and outside-voice transcripts saved to `~/.avad/projects/avadx-avadpages/designs/design-system-20260504/` (local only, not committed).

## [0.0.2.0] - 2026-05-04

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
- Date-stamp footer instruction for credibility section.
- Implementation pathway section: full Eng-phase auto-decisions documented (Astro 5.x + MDX + Cloudflare Pages + Cal.com + Plausible + Vale + Lighthouse CI + axe-core + Playwright + Lychee + placeholder leakage scan as deploy gate + CSP / HSTS / SRI security headers + AVIF/WebP image optimization).
- Cross-Reference section pointing at the /autoplan review artifact, restore point, and TODOS.

## [0.0.1.0] - 2026-05-04

### Added
- avad.ai landing page content package (`avad-ai-landing.md`): full 358-line copy deck including research brief, competitive landscape analysis, primary positioning, three differentiators, six service offerings, proof templates, technical credibility section, open-source publishing section, FAQ, and designer notes.
- Global positioning: avad.ai presented as a model-agnostic engineering firm serving EU and KSA regulated markets, with capability transfer and open-source publishing as explicit identity layers alongside production agent builds.
- Vocabulary audit of 15 banned hype terms with concrete replacements, built into the content package.
