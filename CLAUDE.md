# CLAUDE.md

Claude Code reads this file. The instructions live in [AGENTS.md](AGENTS.md) so they apply to every agent (Claude, Codex, Cursor, Copilot). Read that file.

## Claude-specific notes

- Skills loaded in this environment (avad, superpowers, plugin-dev) take priority over default behavior, but **user instructions in this file and `AGENTS.md` win over skill defaults**.
- The landing page copy deck at [docs/avad-ai-landing.md](docs/avad-ai-landing.md) is the single source of truth for content. Edit it directly; do not create parallel drafts.
- The design system at [DESIGN.md](DESIGN.md) is the single source of truth for visual / UI / CSS decisions. Read it before any styling work. Treat its anti-patterns section as a hard refusal list.
- When the user says "ship", "land", "deploy", invoke `/avadbeta-review` first, then `/ship`. Both are explicit commands. Do not push or open a PR without one of them being run.
- When the user reports a bug, an error, or "why is this broken", invoke `/avadbeta-investigate`. Do not guess fixes.

Everything else: see [AGENTS.md](AGENTS.md).
