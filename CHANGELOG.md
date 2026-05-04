# Changelog

All notable changes to this project will be documented in this file.

## [0.0.3.2] - 2026-05-04

### Fixed
- Em dashes removed from all user-facing copy and shipped files. Problem-section attribution lines (EN + AR, three quotes each) now use an en-dash prefix. File-header comments in `assets/i18n.js` and `assets/styles.css` use a hyphen. Earlier CHANGELOG prose dashes rewritten with parens or semicolons. Compliance with the AGENTS.md voice rule and the copy deck's `/—/` CI gate.
- `localStorage` reads and writes wrapped in `try/catch` so the page still renders in privacy-restricted contexts (sandboxed iframes, blocked storage, strict cookie policies). Falls back to in-memory English when storage is unavailable.
- Filter chip row in services section: `role="tablist"` corrected to `role="toolbar"`. The chips are filter buttons, not tabs (no associated tabpanels), and `tablist` without `role="tab"` children misannouncement on screen readers.
- Footer link destinations: each generated link now points to a real anchor or `mailto:`, instead of all collapsing to `href="#"`. Engagement names anchor to `#services`; practice items anchor to `#cred` / `#why`; firm items use `#book` for the scoping call and `mailto:scoping@avad.ai` for legal/contact items (with subject pre-fill for Privacy and DPA / BAA requests).

## [0.0.3.1] - 2026-05-04

### Changed
- Revised Arabic locale wording for closer parity with the English source copy while keeping Western numerals and `%` in Arabic UI strings.
- Corrected Arabic terminology for prompts, regression tests, rollback, model switching, and compliance scope.
- Reworded Arabic process labels from phases to steps to match the page copy.

## [0.0.3.0] - 2026-05-04

### Added
- First HTML implementation of the landing page. Single-file static site at `index.html` with `assets/styles.css` and `assets/i18n.js`. Full bilingual rendering (EN canonical, AR mirror) with `localStorage`-persisted toggle, RTL flip via logical properties, sticky mobile CTA, sticky header, mobile menu, multi-accordion FAQ with expand/collapse-all, services chip-filter, hero artifact card showing a sample eval-suite output, 4-step process band (dark), 3-card differentiator strip with rubric bars, 4-card credibility grid, final-CTA form preview.
- DIN Next LT Arabic loaded from `brand/Fonts/` (in-repo). Brand mark served from `assets/logo-mark.svg` (light) and `assets/logo-mark-light.svg` (dark, for footer). Both are web-optimized variants of `brand/Logo.svg` with a tightened viewBox; the canonical brand asset is untouched.
- Section 3.2 (logo bar): rendered as the deck's "artifact strip" empty-state per designer note (no signed-off logos yet).
- `skip` translation key in both locales so the skip-link localizes in AR.

### Changed
- Banned em-dash filler removed in two places where the design package introduced it: FAQ #7 ("we can carve that out, but the default contract assumes we leave: ...") and the final-CTA form-card "Format" row. Section heading "Compliance Readiness" now uses parens `(EU AI Act + Saudi PDPL)` to match the deck. Title separator switched from em dash to mid-dot (·) for consistency with on-page separators.
- Header brand link now uses the logo SVG only (no duplicate `<span>` wordmark). The brand SVG already contains the "avad.ai" wordmark; the prior layout rendered the wordmark twice.
- Footer logo no longer uses `filter: invert()` (which turned the brand orange into blue). Replaced with a dedicated white-stroked SVG variant that keeps the orange dot.

### Deferred (carried over from 0.0.2.0; not introduced by this revision)
- Hero secondary CTA still anchors to `#why` instead of `/eval-methodology` (launch-blocker).
- Cal.com booking embed not wired; CTAs are `mailto:scoping@avad.ai`.
- Vale linter / em-dash regex / placeholder leakage scan not yet wired into CI.
- Section 3.9 (What We Publish) intentionally absent until the avadx OSS surface is real.

## [0.0.2.0] - 2026-05-04

### Changed
- Landing page content rewritten in response to /autoplan multi-phase review (CEO + Design + Eng + DX, dual voices: Claude subagent + Codex with web search). Auto-decisions applied; 12 user challenges and 2 taste choices captured in `TODOS.md` as deferred items.
- "August 2026 problem / deadline" framing replaced with "EU AI Act enforcement windows" across the page so durability extends past August 2026.
- "AI Enablement Program" service renamed to "Embedded Capability Build" to resolve the contradiction with the "we do not sell training" omission.
- "Model-Agnostic Architecture" service renamed to "Model-Portable Architecture" with "with measured drift" added to its scope, acknowledging that MCP/A2A reduce integration friction but not behavioral drift.
- Vocabulary audit expanded from 15 to 19 banned terms; added quality-claim intensifiers caught by review: `production-grade`, `engineered`, `regression-grade`, `battle-tested`. Hero subhead reworded to drop `production-grade`.
- Aleph Alpha valuation corrected from "$20B post-merger" to sourced figure (Cohere $6.8B per TechCrunch, with pending Aleph Alpha takeover subject to approval).
- Datadog 88%/41%/9%/47% statistics flagged `[TBD-SOURCE]` with a note: Codex web search did not match these to actual Datadog 2026 published material. Source or replace before launch.
- Section 3.6 (Proof) gained explicit launch-state copy ("First references shipping `[QUARTER]`") so the section never ships with empty placeholder case studies.
- Section 3.9 (What We Publish) marked `DEFERRED` with three valid forward paths (build OSS first / move to `/publish` / drop entirely) until the avadx GitHub OSS surface is verified; flagged by all 4 review phases as a launch-blocker.
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
