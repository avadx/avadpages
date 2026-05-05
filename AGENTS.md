# AGENTS.md

Instructions for AI coding agents working on this repo. Applies to Claude Code, Codex, Cursor, Copilot, and any agent that reads `AGENTS.md`.

## What this repo is

`avadpages` is the source for the **avad.ai** landing page and brand surface.

- avad.ai is positioned as a model-agnostic engineering firm serving EU and KSA regulated markets.
- Output: page copy, design system, HTML/CSS implementation. Not a product codebase.

Current state: pre-launch. Copy deck is written, HTML implementation has not started.

## Repo map

- [docs/avad-ai-landing.md](docs/avad-ai-landing.md) — full landing page copy deck (single source of truth for content). Read this first before touching wording.
- [DESIGN.md](DESIGN.md) — design system source of truth. Read before any visual / UI / CSS work. Overrides default styling behavior; brand still wins on palette and typography.
- [brand/](brand/) — visual identity. PDF guidelines, logo (SVG), color (SVG/JPG), Arabic + Latin fonts (DIN Next LT Arabic family).
- [site/](site/) — Astro project. Implementation of the avad.ai landing page against [DESIGN.md](DESIGN.md). Run `bun run dev` from inside `site/`. Vanilla CSS, no UI framework. Fonts copied from [brand/Fonts/](brand/Fonts/) into `site/public/fonts/` (DIN Next LT Arabic is licensed; serve from own origin only, never a public CDN).
- [CHANGELOG.md](CHANGELOG.md) — every content/structure change goes here. Keep voice neutral and concrete.
- [TODOS.md](TODOS.md) — launch-blockers, deferred decisions, user challenges from `/autoplan` review. Check before proposing scope.
- [VERSION](VERSION) — semver-ish (`0.0.X.Y`). Bump on copy or structural changes.
- [README.md](README.md) — currently a stub. Do not expand without being asked.

## Voice and vocabulary — hard constraints

The page has a **vocabulary audit** with 19 banned hype terms. Never use them in copy, commits, or docs:

```
revolutionize, unlock, harness the power of, cutting-edge, game-changing,
leverage, empower, seamless, robust, world-class, next-generation, disrupt,
synergy, transformative, paradigm shift, production-grade, engineered,
regression-grade, battle-tested
```

Replacements are documented in [docs/avad-ai-landing.md](docs/avad-ai-landing.md) under "Vocabulary audit". Use them.

Voice rules (apply to all output you generate, including chat responses about this project):
- No sycophancy, no hedging filler, no AI vocabulary, no em dashes.
- Short sentences. Concrete over abstract.
- Disagree when you disagree. Explain reasoning.
- Match length to the task. A simple question gets a direct answer.

## Working rules

1. **Copy changes are content decisions, not refactors.** If you are about to reword for "clarity" without being asked, stop. Ask first.
2. **Placeholders are intentional.** `[BRACKETS]`, `[TBD-SOURCE]`, `[QUARTER]` mark unresolved facts. Do not invent values to fill them. Flag in `TODOS.md` if you find a new one.
3. **Launch-blockers in `TODOS.md` are real gates.** Do not mark sections "ready" while their blocker is open.
4. **Brand assets are read-only by default.** Do not regenerate the logo, recolor the palette, or "improve" the PDF. Reference them; do not rewrite them.
5. **Fonts are licensed assets.** Keep them in [brand/Fonts/](brand/Fonts/). Do not commit them to a public CDN, do not upload them to third-party services.
6. **Design decisions live in [DESIGN.md](DESIGN.md).** Read it before any visual / UI / CSS work. The anti-patterns section is a hard refusal list — gradients, pill buttons, "Book a demo" CTA, customer logo carousel, hero illustration, decorative orange. If you're unsure whether a change matches the system, ask.

## Workflow

For multi-step work (3+ steps, migrations, bulk rewrites):
1. Save analysis to disk before deciding.
2. Track each item (pending / done / skipped) and update as you go.
3. Log decisions with reasoning. Skipped items get a "revisit when" condition.
4. Ask before executing a batch.

For commits:
1. Stage early. After 3–5 substantial edits, run `git add <files>` even if not committing yet.
2. Before any commit, run `git diff --cached --stat` as a separate command. If a deletion is staged when modification was expected, stop.
3. No `&&` chaining of `git add` and `git commit`. Run each as a separate Bash call.
4. Update `CHANGELOG.md` and bump `VERSION` for any user-visible content/structure change.

For pushes and deploys:
1. After pushing a branch, if a preview deployment is created, include the preview URL in the final response.
2. If no preview URL is available, say that explicitly and include the check that was run.

## Commands

All commands run from inside [site/](site/).

- `bun install` — initial install of Astro and adapters (run once after cloning).
- `bun run dev` — Astro dev server on http://localhost:4321. Live-reloads on changes to `src/`, `public/`, and `astro.config.mjs`.
- `bun run build` — static + Cloudflare-adapter build. Output in `site/dist/` (gitignored).
- `bun run preview` — preview the production build locally.

No tests yet. When CI lands (Vale, Lychee, Playwright, axe-core, Lighthouse), this section gets the gate commands.
