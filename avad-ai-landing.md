# avad.ai Landing Page: Content Package

**Author:** Senior content strategist (engagement deliverable).
**Status:** First pass, ready for design review and stakeholder fact-fill.
**Date:** 2026-05-04.
**Out of scope here:** HTML, CSS, visual design, SEO meta, real metrics, real logos, real case studies. Placeholders are marked with `[BRACKETS]`.

---

# 1. Research Brief

*Word target: ≤ 400 words. Actual: ~330.*

### Trends (Q1 to Q2 2026)
The shift is from demos to production. 88% of agent pilots never ship; 41% of enterprises had a production rollback in the last 12 months (Datadog State of AI Engineering, March 2026). Agents with full eval coverage rolled back 9% versus 47% without. There is a 37% gap between lab-benchmark and real-world performance, with 50x cost variation at equivalent accuracy. MCP (Anthropic) and A2A (Google) are emerging as the connective tissue between agents, tools, and other agents. Smaller multimodal reasoning models, tuned for vertical work, are eroding the case for one frontier model on every task. Gartner expects 40% of enterprise applications to embed agents by end of 2026, up from under 5% a year earlier, but only 17% of organizations have shipped one in production today.

### Competitive landscape
Scale AI sells data and foundation-model evaluation. Cohere and Aleph Alpha (post-merger, $20B) sell sovereign enterprise AI for regulated sectors. Mistral, via the Accenture partnership, sells European-grade AI with a strategic-autonomy angle. Hyperscaler partner programs (Anthropic Solutions Partners, OpenAI's enterprise channel) sell rapid integration with frontier models. Hero copy across the category leans on the same vocabulary: transform, accelerate, unlock, harness. Service taxonomies are nearly identical: strategy, discovery, build, managed services. CTAs read "book a demo." Differentiation collapses into adjective stacks.

### Buyer pain (2026)
Heads of AI, CTOs, and COOs are not asking "should we use AI?" They are asking: how do we prove ROI to the board after our last pilot died at the eval stage? How do we pick a model without locking into a vendor whose price compounds every 12 months? How do we hit August 2026 EU AI Act readiness for high-risk Annex III systems without halting the roadmap? How do we tell agent reliability from agent theater?

### Vocabulary audit (15 banned terms with concrete replacements)
revolutionize → ship; unlock → make available; harness the power of → use; cutting-edge → recent; game-changing → measurably better; leverage → use; empower → enable; seamless → without integration overhead; robust → tested under failure; world-class → benchmarked against [X]; next-generation → current-state; disrupt → replace; synergy → coordination; transformative → measurable; paradigm shift → architectural change.

---

# 2. Strategy

### Primary positioning sentence
**avad.ai engineers AI agents that hold up to your evals, your data, and your auditors.**

One sentence. Names three concrete audiences (the engineering team, the security team, the compliance team). No jargon, no "we believe."

### Three differentiators (defensible, method-backed)

1. **Eval suite ships with the agent.** Every engagement ends with a regression-grade eval suite committed to the client's repo. Trajectory coverage, failure-mode taxonomy, CI integration, rollback budget. The eval is the artifact.
2. **Model-agnostic by contract.** Systems are designed at the protocol layer (MCP, A2A) before a model is chosen. Every engagement includes a documented swap plan and a measured baseline across at least two providers.
3. **Compliance scoped at architecture.** EU AI Act Annex III classification, audit logging, human-oversight gates, and data-residency constraints land in the design phase, not the launch retro.

### Target ICP

**Primary:** Head of AI, VP Engineering, or CTO at a Series C through pre-IPO company (200 to 2,000 employees) in regulated or regulated-adjacent sectors (fintech, healthtech, B2B SaaS with EU customers, infrastructure, govtech).

**Trigger events** (any one is sufficient):
- Board mandate to ship measurable AI ROI within two quarters.
- Failed first agent pilot that needs a rebuild instead of another vendor demo.
- August 2026 EU AI Act compliance gap on a high-risk system.
- Renewal coming up with a frontier-model vendor that has raised prices.

**Secondary:** CEO or COO at the same stage evaluating whether to staff in-house or partner externally for a flagship AI initiative.

### Tone rules

- Confident, technically literate, plain-spoken.
- Every sentence reads like something a senior engineer could say in a hallway and not regret.
- No hype. No "we believe." No emoji.
- No em dashes used as filler.
- Numbers when we have them. Concrete tasks when we don't.
- No "trust" claims. Show the artifact instead.

---

# 3. Landing Page Copy

## 3.1 Hero

**Headline (7 words):**
> AI agents that hold up in production.

**Subhead (19 words):**
> avad.ai engineers production-grade AI agents for regulated and regulated-adjacent companies. Eval suite ships with every system. Model-agnostic by contract.

**Primary CTA:** Book a 30-minute scoping call
**Secondary CTA:** Read our eval methodology

---

## 3.2 Social Proof Bar

**Layout:** 6 logo slots, single row, low contrast, no hover state.

`[LOGO 1]` `[LOGO 2]` `[LOGO 3]` `[LOGO 4]` `[LOGO 5]` `[LOGO 6]`

**Caption (single line, beneath logos):**
> Production AI systems shipping at `[N]` regulated and regulated-adjacent companies.

*Note for design: do not ship until at least four real, signed-off logos exist. Placeholder grids beat fake logos.*

---

## 3.3 Problem Section

*Three pain points written in the buyer's voice, not ours.*

### "We shipped one AI demo. We can't ship a second."
The first agent looked great in the demo. Then we put it in front of real users, real data, real edge cases. It broke in ways our evals never caught. Now leadership wants ROI and we can't even reproduce the failure.

### "We picked a model. Now we are hostage to it."
Switching costs were supposed to be low. They are not. Our prompts, our tool wrappers, our fine-tunes all assume the current vendor's behavior. Their price went up 30% at renewal and we cannot move in time.

### "We have an August 2026 problem."
Some of what we built falls under Annex III of the EU AI Act. Compliance flagged it last month. Engineering says the architecture was not designed for audit logs, traceability, or human-in-the-loop gates. Nobody owns the fix.

---

## 3.4 Services / Solutions

*Five offerings. Each: name, one-line promise, three-bullet scope, ideal buyer, engagement shape.*

### Production Agent Build
**Promise:** We design, build, and harden one AI agent end to end, with the eval suite that proves it works.
**Scope:**
- Use-case scoping, success criteria, failure-mode mapping against real traffic.
- Agent implementation including tool wrappers, MCP integrations, fallback paths.
- Regression-grade eval suite with trajectory coverage and human-in-the-loop gates.

**Ideal buyer:** VP Engineering or Head of AI replacing a failed pilot.
**Engagement shape:** 8 to 12 weeks. Fixed scope plus written success metrics. Single accountable senior engineer.

### Eval Audit and Rebuild
**Promise:** We assess your existing AI system against real failure modes and ship the eval suite that should have shipped with it.
**Scope:**
- Trajectory-level evaluation against current production traffic.
- Failure-mode taxonomy specific to your domain.
- Regression suite with CI integration and rollback budget.

**Ideal buyer:** AI lead whose first system is in production but flying blind on reliability.
**Engagement shape:** 4 to 6 weeks. Deliverable is the eval suite plus a remediation plan.

### EU AI Act Readiness
**Promise:** We map your AI systems to Annex III categories, close the documentation and architecture gaps, and stand up audit infrastructure before the August 2026 deadline.
**Scope:**
- Annex III classification of in-scope systems.
- Risk management, logging, and human-oversight architecture review.
- Compliance documentation and conformity-assessment artifacts.

**Ideal buyer:** General Counsel, Head of Privacy, or CTO with EU customers and an enforceable deadline.
**Engagement shape:** 6 to 10 weeks. Deliverable is a compliance pack and remediated architecture.

### Model-Agnostic Architecture
**Promise:** We refactor your AI stack so the model is a swappable component, not a load-bearing dependency.
**Scope:**
- Abstraction layer over MCP and A2A. Model-agnostic prompt and tool contracts.
- Documented swap plan with regression budget.
- Cost, latency, and accuracy baseline across at least two providers.

**Ideal buyer:** Engineering leader negotiating a renewal, or one bracing for a model deprecation.
**Engagement shape:** 4 to 8 weeks. Deliverable is a working swap plus documentation.

### AI Strategy for Boards
**Promise:** We give your CEO and board the technical brief they actually need: where AI moves the P&L, where it does not, and what the next 12 months should look like.
**Scope:**
- Use-case ROI modeling against your data and workflow.
- Build, buy, or partner decision framework.
- 12-month roadmap with eval and compliance gates.

**Ideal buyer:** CEO or CTO writing the AI section of next quarter's board deck.
**Engagement shape:** 3 to 4 weeks. Deliverable is a written brief plus a working session with the board.

---

## 3.5 How We Work

*Four steps. Concrete deliverables per step, not phases.*

### Step 1: Scoping (first week)
**Output:** written success criteria, failure-mode map drawn from your real traffic, eval design, in-scope data and systems, signed statement of work.

### Step 2: Build (week 2 to launch)
**Output:** the agent or refactor itself; eval suite committed to your repo; weekly demo against production-shaped traffic, not curated examples.

### Step 3: Harden (final two weeks)
**Output:** regression suite wired into your CI, rollback runbook, on-call documentation, EU AI Act conformity artifacts where applicable.

### Step 4: Handover (week after launch)
**Output:** knowledge transfer to your team, 30-day support window, written postmortem of every failure caught during build and how the eval suite caught it.

---

## 3.6 Proof

*Two case study templates. Buyers fill them in once we have a signed reference.*

### Template A: Eval Audit and Rebuild
**Problem:** `[CLIENT, INDUSTRY, COMPANY STAGE]` had `[SPECIFIC AI SYSTEM]` in production. Evals only checked final-output accuracy. Trajectory-level failure rate, when measured, was `[X%]`. Production rollback risk was high; one customer-facing incident had already happened.

**Approach:** We mapped failure modes against `[N]` real production traces, rebuilt the eval suite with trajectory coverage, and instrumented `[SPECIFIC TOOL OR SUBSYSTEM]` gates. We wrote a regression budget and gated deploys on it.

**Outcome:** Trajectory-level success rate moved from `[X%]` to `[Y%]`. Rollback rate over `[N]` months: `[Z]`. Eval suite committed to client repo, owned and extended by client team after handover.

### Template B: Model-Agnostic Refactor
**Problem:** `[CLIENT]` was paying `[$X / month]` to a single model provider and faced a `[Y%]` price increase at renewal. The stack assumed vendor-specific tool wrappers and fine-tunes. No swap plan existed.

**Approach:** We refactored the stack against MCP, documented model contracts, and ran the system end to end on `[N]` alternative providers. We measured cost, latency, and accuracy on each.

**Outcome:** Cost reduction of `[X%]` at equivalent accuracy. Documented swap plan owned by client. Renewal negotiated from a position of optionality.

---

## 3.7 Why avad.ai

*Three differentiators, each backed by a specific capability or method, not adjectives.*

### Eval suite ships with the agent
Every engagement ends with a regression-grade eval suite committed to your repo. Not a slide. Trajectory coverage, failure-mode taxonomy, CI integration, rollback budget. If we cannot measure it, we do not ship it. We publish our coverage targets per engagement.

### Model-agnostic by contract
We design at the protocol layer (MCP and A2A) before we pick a model. Every engagement includes a documented swap plan and a measured baseline across at least two providers. You keep the option to move. We do not have a preferred provider; we have measured baselines.

### Compliance scoped at architecture
We classify systems against Annex III before writing code. Audit logging, human-oversight gates, and data-residency constraints land in the design phase, not the launch retro. EU AI Act readiness is a checklist by build week three, not a fire drill in July.

---

## 3.8 Technical Credibility

### Models we work with
Frontier models (Anthropic Claude, OpenAI GPT family, Google Gemini), open-weight models (Mistral, Llama derivatives, Qwen), and self-hosted deployments. We do not have a preferred provider. We have measured baselines per use case.

### Eval methodology
Every system we ship is evaluated at three levels: final-output, intermediate-step, and full-trajectory. The test framework is documented in the repo. Suite is wired into your CI before handover. Coverage targets are agreed up front and reported weekly during build.

### Security and compliance
- SOC 2 Type II: `[STATUS, with attestation date]`.
- Data residency: EU, US, or self-hosted at your election.
- EU AI Act: Annex III classification on in-scope systems, conformity documentation, post-market monitoring plan.
- DPAs and BAAs signed as required.
- We do not train models on client data. Engagement contracts state this explicitly.

---

## 3.9 FAQ

*Six questions sophisticated buyers actually ask.*

### How do you price?
Fixed scope plus a written deliverable for most engagements. For longer programs we offer a base retainer with a success fee indexed to KPIs we agree on up front (rollback rate, cost reduction, time to compliance). We do not bill by the hour for senior work.

### Who owns the IP?
You do. All code, prompts, evals, and documentation are committed to your repo and owned by you. We retain rights to anonymized failure-mode taxonomies and methodology, not to your work product.

### What if we change models mid-engagement?
That is the point. Every system we ship is designed for swap. We document the contract, run the regression on the new model, and update the baseline. A model swap inside an engagement is included in scope.

### How do you measure agent reliability?
Trajectory-level eval, not just final output. We map your specific failure modes from real traffic, define a regression budget, and gate deploys on it. We publish the methodology and the coverage targets per engagement.

### How fast does this go?
First useful artifact in week one (scoping, failure-mode map, eval design). First working agent or refactor by week four. Most engagements ship in 6 to 12 weeks. We do not promise "production in 30 days" as a sales line, because that timeline is how the failed pilots got built.

### What is the team?
Senior engineers and AI researchers only. No layered staffing. The person scoping the engagement is the person on call when it ships. We do not staff engagements with fewer than two senior people.

---

## 3.10 Final CTA

**Section headline:** Tell us what broke.

**Body (2 sentences):**
> 30-minute scoping call. No deck required. Bring the failure mode and the deadline; we will tell you whether it is an avad.ai engagement or something you should keep in-house.

**Button:** Book a scoping call

**Friction reducer beneath button (one line):**
> No NDA needed for the first call. We sign before any specifics are shared.

---

# 4. Five Things Deliberately Not Said

*Each omission has a one-line reason.*

1. **"We use the latest GPT-5 / Claude / Gemini."**
   Naming a frontier model dates the page in three months and signals vendor allegiance to a buyer trying to escape lock-in. Model-agnostic positioning is the differentiator; naming a model contradicts it.

2. **"Trusted by [Fortune 500 logo wall]."**
   Fake or unauthorized logos kill credibility with technical buyers faster than a missing logo bar does. Real logos go in only with permission. Until then, the social proof bar is intentionally a placeholder grid, not invented brands.

3. **"40% productivity gains" or any specific outcome metric in the hero.**
   We have not measured a category-wide number across engagements yet. Inventing one to make the page read "real" is the exact failure mode we sell against. Case study templates carry placeholder metrics so the human filling them in cannot accidentally publish unverified claims.

4. **A homepage chat agent ("Talk to our AI agent").**
   For a firm whose pitch is "agents fail in production," a homepage chatbot is a tonal contradiction and a real liability if it hallucinates a quote, a capability, or a price. Conversion happens in a 30-minute call with a senior person.

5. **A badge wall ("Powered by [framework / partner / certification]").**
   Badge walls signal procurement compliance theater, not engineering depth. Specific certifications (SOC 2, EU AI Act conformity) are stated as facts in the credibility section, with status fields that have to be filled in before launch. Vague "powered by" badges read as resume padding.

---

# Notes for the Designer

- All bracketed strings (`[LOGO 1]`, `[N]`, `[STATUS]`, `[X%]`) are placeholders. Each one has to be filled or removed before launch. Do not ship the page with placeholders visible.
- Hero is 7 + 19 words. Do not lengthen during design polish; the cap is the cap.
- The problem section is in the buyer's voice (first-person plural, "we"). This is intentional and should be respected in the visual treatment (different type weight or color from the rest of the page is fine; rewriting to third person is not).
- No emoji in copy. If the design system uses iconography, icons are line-based and neutral, not branded illustration.
- Em dashes are not used in this copy. If the designer or copy editor adds them in revision, flag and revert.
- The 15 banned terms in the vocabulary audit are banned in body copy. They appear in this document only inside the audit and the competitive-landscape analysis, not in the actual landing page sections.
