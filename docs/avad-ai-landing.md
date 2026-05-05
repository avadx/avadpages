# avad.ai Landing Page: Content Package

**Author:** Senior content strategist (engagement deliverable). Updated by /autoplan review.
**Status:** Post-/autoplan rewrite. Auto-decisions applied; 12 user challenges surfaced in TODOS.md as deferred decisions; 4 launch-blockers flagged in-line.
**Out of scope here:** HTML, CSS, visual design, SEO meta, real metrics, real logos, real case studies. Placeholders are marked with `[BRACKETS]`.

**What changed from the prior revision (commit 53028b2 and earlier):**
- All numeric framings tied to the August 2026 EU deadline replaced with "EU AI Act enforcement windows" (page-durability fix).
- "AI Enablement Program" renamed to "Embedded Capability Build" (resolves "we don't sell training" / "AI Enablement Program" contradiction).
- Vocabulary audit expanded from 15 → 19 banned terms (added: production-grade, engineered, regression-grade, battle-tested as quality-claim intensifiers).
- Aleph Alpha valuation corrected from "$20B post-merger" to sourced figure (Cohere $6.8B, taking over Aleph Alpha pending approval).
- Datadog statistics flagged as `[TBD-SOURCE]` until original Datadog 2026 reporting is confirmed (Codex web search did not match these numbers to actual Datadog material).
- Section 3.6 proof section gained explicit launch-state copy (no fake case studies).
- Section 3.9 (What We Publish) marked DEFERRED until avadx GitHub OSS surface is verified.
- Mobile + accessibility design intent added to designer notes.
- 12 user challenges (wedge, differentiators, competitor frame, week-12 disclaimer, pricing, naming) deferred to TODOS.md per user's "approve as-is" decision.

---

# 1. Research Brief

*Word target: ≤ 400 words. Actual: ~370.*

### Trends (Q1 to Q2 2026)
The shift is from demos to production. `[TBD-SOURCE: Datadog 2026 stat on agent pilot completion rates — original v1 cited 88% pilot failure / 41% rollback / 9% vs 47% eval coverage but Codex web search did not match these numbers to Datadog's actual 2026 material. Source or replace before launch.]` MCP (donated to the Linux Foundation, December 2025) and A2A are the emerging protocol layer between agents and tools; the public MCP Registry lists more than 10,000 servers. Gartner expects 40% of enterprise applications to embed agents by end of 2026, up from under 5% a year earlier; only 17% have shipped today. `[NOTE: every Gartner stat needs a public report ID footnoted before launch.]`

### Regulatory context (EU, KSA)
EU AI Act enforcement windows for Annex III high-risk systems open in the second half of 2026, with concrete obligations on logging, traceability, human oversight, and risk management. (Specific dates may shift under the EU Digital Omnibus track; track enforcement windows, not a single countdown.) AI literacy is now an EU AI Act requirement, while only 35% of leaders run a mature workforce upskilling program. `[TBD-SOURCE: 35% workforce stat needs original report citation.]` In Saudi Arabia, SDAIA's PDPL enforcement issued 48 violation decisions in 2025 to early 2026, with fines up to SAR 5M per breach and cross-border transfer rules under active enforcement. `[TBD-SOURCE: SDAIA 48-violations stat needs decision-list link.]` The two regimes overlap on logging, oversight, and risk management; they diverge on data localization.

### Competitive landscape
Scale AI sells data and foundation-model evaluation. Cohere ($6.8B latest disclosed valuation per TechCrunch), with a pending takeover of Aleph Alpha subject to approval, sells sovereign enterprise AI for regulated sectors. Mistral, with Accenture, sells European-grade AI with strategic-autonomy framing. Hero copy across the foundation-model + sovereign-AI segment leans on the same vocabulary: transform, accelerate, unlock, harness. Service taxonomies are nearly identical: strategy, discovery, build, managed services. CTAs read "book a demo." `<!-- DEFERRED: User Challenge 4 — both review voices recommend reframing competitor list to Big 4 + boutiques (Accenture AI practice, Deloitte AI Institute, BCG Gamma/X, McKinsey QuantumBlack, IBM Consulting, Cognition Labs services). See TODOS.md. -->`

### Buyer pain (2026)
Heads of AI, CTOs, and COOs are not asking "should we use AI?" They are asking: how do we prove ROI to the board after our last pilot died at the eval stage; how do we hit EU AI Act and Saudi PDPL enforcement windows without halting the roadmap; how do we tell agent reliability from agent theater; and how do we build the team that runs this without depending on a vendor forever.

### Vocabulary audit (19 banned terms with concrete replacements)
revolutionize → ship; unlock → make available; harness the power of → use; cutting-edge → recent; game-changing → measurably better; leverage → use; empower → enable; seamless → without integration overhead; robust → tested under failure; world-class → benchmarked against [X]; next-generation → current-state; disrupt → replace; synergy → coordination; transformative → measurable; paradigm shift → architectural change; **production-grade → in production / shipped / running**; **engineered → built**; **regression-grade → with regression coverage / gated by N test cases**; **battle-tested → run in production for N months / N requests / N customers**.

---

# 2. Strategy

### Primary positioning

**Primary sentence:** avad.ai engineers AI agents that hold up to your evals, your data, and your auditors.

**Extension (used in the subhead and across the deck):** We also build the teams that run them, and publish the open tools the field depends on.

The first sentence names three concrete audiences (engineering, security, compliance). The extension names the three things avad.ai delivers (build, teach, publish). Together they establish that avad.ai is a knowledge-and-engineering firm, not a vendor that hides behind a black box. No jargon, no "we believe."

`<!-- DEFERRED: User Challenge 1 — both review voices recommend picking ONE lead wedge for the hero (e.g. "AI agents that hold up in production, with the eval suite that proves it") and demoting enablement and OSS to proof points. See TODOS.md. -->`

### Three differentiators (defensible, method-backed)

1. **Eval suite ships with the agent.** Every engagement ends with an eval suite committed to the client's repo. Trajectory coverage, failure-mode taxonomy, CI integration, regression budget. The eval is the artifact.

   `<!-- DEFERRED: User Challenge 5 — both review voices flag this as table stakes (LangSmith, Braintrust, Patronus, OpenAI Evals, Anthropic eval cookbook, Inspect, Promptfoo all ship eval tooling). Recommend rewriting as a named methodology with measurement standard (e.g. "the avad.ai trajectory-coverage rubric: published, versioned, benchmarked against [N] public agent traces"). See TODOS.md. -->`

2. **Model-agnostic by contract.** Systems are designed at the protocol layer (MCP, A2A) before a model is chosen. Every engagement includes a documented swap plan and a measured baseline across at least two providers.

   `<!-- DEFERRED: User Challenge 6 — both review voices flag this as overpromising what MCP/A2A actually deliver. Recommend rewording to "model-portable with measured drift" + a regression-budget number. See TODOS.md. -->`

3. **Capability transfers to your team.** We embed eval design, model-contract review, and compliance practice in your engineers' weekly work, not in a slide deck. By handover, the people who ship the next version are yours, not ours. Capability is measured against a published rubric, before and after.

   `<!-- DEFERRED: User Challenge 7 — both review voices recommend moving the published rubric ON the page with a sample row (e.g. "Engineer can author a new trajectory eval test → before: 3/10, after: 8/10"). See TODOS.md. -->`

   `<!-- DEFERRED: User Challenge 8 — both review voices recommend softening "we are not on the critical path after week 12" to "your team can operate it by week 12; we are available for extension on terms you choose" + adding a post-handover offer (Eval-as-a-Service / quarterly eval refresh). The v1 line read as a self-disqualifier to enterprise buyers. See TODOS.md. -->`

(Compliance practice across EU AI Act Annex III, Saudi PDPL, and sector regulators lives inside the engagement architecture and inside the Compliance Readiness service, not as a separate marketing pillar. It is a requirement, not a differentiator.)

### Target ICP

**Primary:** Head of AI, VP Engineering, or CTO at a growth-stage technology company (200 to 2,000 employees) in regulated or regulated-adjacent sectors (fintech, healthtech, B2B SaaS, infrastructure, govtech), with EU or KSA market exposure.

**Trigger events** (any one is sufficient):
- Board mandate to ship measurable AI ROI within two quarters.
- Failed first agent pilot that needs a rebuild instead of another vendor demo.
- EU AI Act enforcement-window gap on a high-risk system, or a Saudi PDPL data-residency gap.
- Renewal coming up with a frontier-model vendor that has raised prices.
- Internal AI capability mandate that requires building a team, not buying a managed service.

**Secondary:** CEO or COO at the same stage evaluating whether to staff in-house or partner externally for a flagship AI initiative.

### Tone rules

- Confident, technically literate, plain-spoken.
- Every sentence reads like something a senior engineer could say in a hallway and not regret.
- No hype. No "we believe." No emoji.
- No em dashes used as filler.
- No quality-claim intensifiers ("production-grade", "engineered", "regression-grade", "battle-tested") used as adjectives. State the measurement instead.
- Numbers when we have them. Concrete tasks when we don't.
- No "trust" claims. Show the artifact instead.

---

# 3. Landing Page Copy

## 3.1 Hero

**Headline (7 words):**
> AI agents that hold up in production.

**Subhead (23 words):**
> avad.ai builds AI agents you can put in production, builds the teams that run them, and publishes the open tools the field depends on. Model-agnostic by contract.

**Primary CTA:** Read our eval methodology `<!-- Current site target: in-page #eval-methodology card in Technical Credibility. A standalone /eval-methodology page or PDF can replace this later. -->`
**Secondary CTA:** Start scoping

---

## 3.2 Social Proof Bar

**Layout:** 6 logo slots, single row, low contrast (must still meet WCAG AA 3:1 contrast for non-text UI), no hover state.

`[LOGO 1]` `[LOGO 2]` `[LOGO 3]` `[LOGO 4]` `[LOGO 5]` `[LOGO 6]`

**Caption (single line, beneath logos):**
> Production AI systems shipping at `[N]` regulated and regulated-adjacent companies.

*Note for design: do not ship until at least four real, signed-off logos exist. Placeholder grids beat fake logos.*

*Empty-state note (designer): if launch happens before 4 signed logos exist, replace this section entirely with an "artifact strip" showing concrete things avad.ai ships — eval suite output, rollback budget chart, model-swap baseline, audit evidence pack. Do NOT show a placeholder grid in this empty state.*

---

## 3.3 Problem Section

*Three pain points written in the buyer's voice, not ours. Visual treatment: testimonial-quote blocks with hanging quote mark + attribution line ("— Composite of 30+ scoping calls, 2025-2026"). The attribution is required; otherwise quotes read as fabricated.*

### "We shipped one AI demo. We can't ship a second."
The first agent looked great in the demo. Then we put it in front of real users, real data, real edge cases. It broke in ways our evals never caught. Now leadership wants ROI and we can't even reproduce the failure.

### "We picked a model. Now we are hostage to it."
Switching costs were supposed to be low. They are not. Our prompts, our tool wrappers, our fine-tunes all assume the current vendor's behavior. Their price went up 30% at renewal and we cannot move in time.

### "We have an EU AI Act enforcement-window problem."
Some of what we built falls under Annex III of the EU AI Act. Compliance flagged it last month. Engineering says the architecture was not designed for audit logs, traceability, or human-in-the-loop gates. Nobody owns the fix.

---

## 3.4 Services / Solutions

*Six offerings. Each: name, one-line promise, three-bullet scope, ideal buyer, engagement shape. Designer note: render as collapsed cards by default (name + one-line promise + ideal-buyer tag); expand on click for scope. Above the grid: buyer-tag chips ("Failed pilot," "Renewal pressure," "Enforcement-window deadline," "Board deck") that filter cards.*

### Production Agent Build
**Promise:** We design, build, and harden one AI agent end to end, with the eval suite that proves it works.
**Scope:**
- Use-case scoping, success criteria, failure-mode mapping against real traffic.
- Agent implementation including tool wrappers, MCP integrations, fallback paths.
- Eval suite with trajectory coverage and human-in-the-loop gates.

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

### Embedded Capability Build
**Promise:** Your team learns to ship and run AI in production. By handover, we are not on the critical path. `<!-- DEFERRED: see Section 3.7 differentiator #3 — User Challenge 8 surfaces softening this line. -->`
**Scope:**
- Role-based on-the-job skill build for engineers, AI lead, and compliance: eval design, model contracts, prompt and tool review, post-incident analysis.
- Hands-on ride-along on a real engagement (your codebase, your traffic, your failure modes), not a curriculum disconnected from production.
- AI Center of Excellence design: governance, decision rights, escalation paths, internal review process. Includes EU AI Act literacy curriculum required by Article 4.

**Ideal buyer:** Head of AI building an internal team rather than a vendor stack. CTO or VP Engineering sequencing first AI deployments. Heads of Engineering whose AI specialists earn (or should earn) a senior premium.
**Engagement shape:** 8 to 16 weeks. Deliverable is a documented playbook and a measurable team-capability rubric, scored before, during, and after. Often runs in parallel with a Production Agent Build.

### Compliance Readiness (EU AI Act + Saudi PDPL)
**Promise:** We map your AI systems to the regulations that bind them, close the documentation and architecture gaps, and stand up audit infrastructure before the enforcement window.
**Scope:**
- EU AI Act Annex III classification of in-scope systems; Saudi PDPL classification for in-Kingdom workloads; sector-specific overlay (financial, healthcare, public sector) as applicable.
- Risk management, logging, human-oversight architecture review. Data-residency posture documented per workload.
- Compliance documentation, conformity-assessment artifacts, SDAIA cross-border transfer documentation, and post-market monitoring plan.

**Ideal buyer:** General Counsel, Head of Privacy, or CTO with EU customers, KSA customers, or both, and an enforceable deadline (EU AI Act Annex III enforcement windows; ongoing PDPL enforcement).
**Engagement shape:** 6 to 10 weeks. Deliverable is a compliance pack, remediated architecture, and a written gap-closure plan.

### Model-Portable Architecture
**Promise:** We refactor your AI stack so the model is a swappable component, not a load-bearing dependency. We measure the drift on every swap.
**Scope:**
- Abstraction layer over MCP and A2A. Model-agnostic prompt and tool contracts.
- Documented swap plan with regression budget.
- Cost, latency, and accuracy baseline across at least two providers, with regional sovereign-model options (EU, GCC) included where they fit. Drift report per provider against the published regression budget.

**Ideal buyer:** Engineering leader negotiating a renewal, or one bracing for a model deprecation.
**Engagement shape:** 4 to 8 weeks. Deliverable is a working swap plus documentation.

### AI Strategy for Boards
**Promise:** We give your CEO and board the technical brief they actually need: where AI moves the P&L, where it does not, and what the next 12 months should look like.
**Scope:**
- Use-case ROI modeling against your data and workflow.
- Build, buy, or partner decision framework.
- 12-month roadmap with eval, compliance, and capability-build gates.

**Ideal buyer:** CEO or CTO writing the AI section of next quarter's board deck.
**Engagement shape:** 3 to 4 weeks. Deliverable is a written brief plus a working session with the board.

`<!-- DEFERRED: Section 3.4 / 3.7 DRY pass — auto-decision to merge differentiators content into services to avoid duplication. Decided to defer until structural rewrite (Approach B from review). For now, both sections live. -->`

---

## 3.5 How We Work

*Four steps. Concrete deliverables per step, not phases.*

### Step 1: Scoping (first week)
**Output:** written success criteria, failure-mode map drawn from your real traffic, eval design, in-scope data and systems, signed statement of work.

### Step 2: Build (week 2 to launch)
**Output:** the agent or refactor itself; eval suite committed to your repo; weekly demo against production-shaped traffic, not curated examples.

### Step 3: Harden (final two weeks)
**Output:** regression suite wired into your CI, rollback runbook, on-call documentation, conformity artifacts (EU AI Act, Saudi PDPL, sector regulators) where applicable.

### Step 4: Handover (week after launch)
**Output:** knowledge transfer to your team, 30-day support window, written postmortem of every failure caught during build and how the eval suite caught it. Capability rubric scored against the baseline taken in week 1. Architecture docs, local dev bootstrap, eval authoring guide, CI gates, rollback runbook, dashboards, incident templates, model-swap guide, ownership map, and 30-day backlog all delivered to the client repo.

---

## 3.6 Proof

*Two case study templates. Buyers fill them in once we have a signed reference.*

**Launch-state copy (use until at least one real case study is signed off):**
> We will publish case studies the same way we publish code: with the eval suite attached. First references shipping `[QUARTER]`.

**Post-first-case-study copy (use the templates below):**

### Template A: Eval Audit and Rebuild
**Problem:** `[CLIENT, INDUSTRY, COMPANY STAGE]` had `[SPECIFIC AI SYSTEM]` in production. Evals only checked final-output accuracy. Trajectory-level failure rate, when measured, was `[X%]`. Production rollback risk was high; one customer-facing incident had already happened.

**Approach:** We mapped failure modes against `[N]` real production traces, rebuilt the eval suite with trajectory coverage, and instrumented `[SPECIFIC TOOL OR SUBSYSTEM]` gates. We wrote a regression budget and gated deploys on it.

**Outcome:** Trajectory-level success rate moved from `[X%]` to `[Y%]`. Rollback rate over `[N]` months: `[Z]`. Eval suite committed to client repo, owned and extended by client team after handover.

### Template B: Model-Portable Refactor
**Problem:** `[CLIENT]` was paying `[$X / month]` to a single model provider and faced a `[Y%]` price increase at renewal. The stack assumed vendor-specific tool wrappers and fine-tunes. No swap plan existed.

**Approach:** We refactored the stack against MCP, documented model contracts, and ran the system end to end on `[N]` alternative providers. We measured cost, latency, and accuracy on each. We measured drift against the published regression budget.

**Outcome:** Cost reduction of `[X%]` at equivalent accuracy. Documented swap plan owned by client. Renewal negotiated from a position of optionality. Drift held within `[X]` regression-budget points.

---

## 3.7 Why avad.ai

*Three differentiators, each backed by a specific capability or method, not adjectives. See TODOS.md user challenges 5–7 for both review voices' recommendation that all three need stronger framing.*

### Eval suite ships with the agent
Every engagement ends with an eval suite committed to your repo. Not a slide. Trajectory coverage, failure-mode taxonomy, CI integration, regression budget. If we cannot measure it, we do not ship it. We publish our coverage targets per engagement.

### Model-agnostic by contract
We design at the protocol layer (MCP and A2A) before we pick a model. Every engagement includes a documented swap plan and a measured baseline across at least two providers. You keep the option to move. We do not have a preferred provider; we have measured baselines.

### Capability transfers to your team
Every engagement is structured so your team owns the system at the end. We embed eval design, model-contract review, and compliance practice in your engineers' weekly work, not in a slide deck. By handover, the people who ship the next version are yours, not ours. We measure capability against a published rubric, before and after, and we publish the rubric. Compliance practice (EU AI Act Annex III, Saudi PDPL, sector regulators) is part of the curriculum, scoped at architecture from the design phase.

`<!-- DEFERRED: User Challenge 7 specifically calls for the published rubric to appear ON THIS PAGE with a sample row. Until that's done the differentiator reads as a claim, not an artifact. See TODOS.md. -->`

---

## 3.8 Technical Credibility

### Models we work with
Frontier models (Anthropic Claude, OpenAI GPT family, Google Gemini), open-weight models (Mistral, Llama derivatives, Qwen), regional sovereign models on request, and self-hosted deployments. We do not have a preferred provider. We have measured baselines per use case.

### Multilingual evaluation
Non-English performance is a first-class evaluation lane on every applicable engagement: language-specific retrieval quality, dialectal coverage, and hallucination rates measured against locale-appropriate prompts. We do not treat localization as a translation layer bolted on at the end.

### Eval methodology
Every system we ship is evaluated at three levels: final-output, intermediate-step, and full-trajectory. The test framework is documented in the repo. Suite is wired into your CI before handover. Coverage targets are agreed up front and reported weekly during build. The current site links the hero CTA to this methodology summary until a standalone methodology page exists.

### Security and compliance
- SOC 2 Type II: `[STATUS]` `<!-- LAUNCH-BLOCKER: if Type II is not started, descope this line entirely or label the actual status. Implying SOC 2 is imminent when it isn't kills credibility on the first RFP. -->`
- Data residency: Saudi Arabia (KSA region), EU, US, or self-hosted at your election. PDPL-aware by default for in-Kingdom workloads; SDAIA cross-border transfer conditions documented per engagement. `<!-- LAUNCH-BLOCKER: verify KSA-region hosting capability is real (not aspirational) before this section ships. -->`
- Saudi PDPL: classification of personal-data processing activities, lawful-basis documentation, sensitive-data localization where required, data-protection impact assessments for high-risk processing.
- EU AI Act: Annex III classification on in-scope systems, conformity documentation, post-market monitoring plan, Article 4 AI-literacy curriculum for client staff.
- DPAs and BAAs signed as required.
- We do not train models on client data. Engagement contracts state this explicitly.

### Publishing surface
Public publishing details stay deferred until the public surface is ready.

---

## 3.9 What We Publish — DEFERRED

`<!-- LAUNCH-BLOCKER (consensus across all 4 review phases): section 3.9 cannot ship in current form. The 5 [N] placeholder claims and 3 [GITHUB ORG URL] / [MCP REGISTRY URL] / [SKILL REGISTRY URL] placeholder URLs would 404 on launch day and contradict the page's "we don't sell theater" thesis.

Three valid paths forward:
  (1) Build the OSS surface first. avadx GitHub org with ≥3 public repos: 1 MCP server + 1 skill + 1 eval kit. Each repo: README quickstart that produces hello world in <30s, examples/, CHANGELOG, AGENTS.md, ERRORS.md, MIGRATING.md, LICENSE, SECURITY.md, CI green, ≥1 tagged release. Plus ≥1 MCP Registry entry, ≥1 PyPI/npm package with non-zero organic downloads, public eval rubric document. Per the 18-item DX implementation checklist in TODOS.md.

  (2) Move to dedicated /publish page. Keep a one-line credibility mention in 3.8 ("Open-source contributions" subsection). Main page reads cleaner. Build /publish when OSS surface exists.

  (3) Drop the section from v1 launch entirely. Add to launch+30days roadmap. Honest is better than aspirational on a credibility page.

User chose to surface this as a TODO. Until path is chosen, this section ships nothing visible. See TODOS.md launch-blocker #1. -->`

We publish free tools. Not as marketing, as practice.

`[CONTENT INTENTIONALLY UNRENDERED — SEE LAUNCH-BLOCKER ABOVE]`

The original section 3.9 v1 content is preserved in the v1 file (`avad-ai-landing.md`) for reference until the path forward is chosen.

---

## 3.10 FAQ

*Seven questions sophisticated buyers actually ask. Designer note: render as multi-accordion (multiple panels can be open simultaneously), default-collapsed, with an "Expand all" control. Anchor link per question for deep-linking from sales emails. WAI-ARIA accordion pattern: aria-expanded, aria-controls, focus-visible ring, Enter+Space activation, Escape collapses focused panel.*

### How do you price?
Fixed scope plus a written deliverable for most engagements. For longer programs we offer a base retainer with a success fee indexed to KPIs we agree on up front (rollback rate, cost reduction, time to compliance). We do not bill by the hour for senior work. `<!-- DEFERRED: User Challenge 9 — both review voices recommend adding a procurement-friendly secondary structure (published blended rate for vendor onboarding, milestone billing against fixed-fee SOW, change-order mechanics, liability caps). Without it, F1000 vendor onboarding may bounce. See TODOS.md. -->`

### Who owns the IP?
You do. All code, prompts, evals, and documentation are committed to your repo and owned by you. We retain rights to anonymized failure-mode taxonomies and methodology, not to your work product.

### What if we change models mid-engagement?
That is the point. Every system we ship is designed for swap. We document the contract, run the regression on the new model, and update the baseline. A model swap inside an engagement is included in scope.

### How do you measure agent reliability?
Trajectory-level eval, not just final output. We map your specific failure modes from real traffic, define a regression budget, and gate deploys on it. We publish the methodology and the coverage targets per engagement.

### How fast does this go?
First useful artifact in week one (scoping, failure-mode map, eval design). First working agent or refactor by week four. Most engagements ship in 6 to 12 weeks. We do not promise "production in 30 days" as a sales line, because that timeline is how the failed pilots got built.

### What is the team?
Senior engineers and AI researchers only. The person scoping the engagement is the person on call when it ships. We do not staff engagements with fewer than two senior people.

### Do you train our team, or just build for us?
Both, on every engagement. Capability transfer is in scope by default. If you want a build with no enablement, we can carve that out, but the default contract assumes we leave; eval ownership, runbook ownership, and incident-response ownership all transfer to your engineers before the engagement closes. The Embedded Capability Build is the explicit version of what every engagement does implicitly.

## 3.11 Final CTA

**Section headline:** Tell us what broke.

**Body (2 sentences):**
> 30-minute scoping call. No deck required. Bring the failure mode and the deadline; we will tell you whether it is an avad.ai engagement or something you should keep in-house.

**Button:** Email scoping@avad.ai

**Friction reducer beneath button (one line):**
> No NDA needed for the first call. We sign before any specifics are shared.

---

# 4. Seven Things Deliberately Not Said

*Each omission has a one-line reason.*

1. **"We use the latest GPT-5 / Claude / Gemini."**
   Naming a frontier model dates the page in three months and signals vendor allegiance to a buyer trying to escape lock-in. Model-agnostic positioning is the differentiator; naming a model contradicts it.

2. **"Trusted by [Fortune 500 logo wall]."**
   Fake or unauthorized logos kill credibility with technical buyers faster than a missing logo bar does. Real logos go in only with permission. Until then, the social proof bar is intentionally a placeholder grid (or, if launch happens before signoff, an artifact strip per Section 3.2 designer note), not invented brands.

3. **"40% productivity gains" or any specific outcome metric in the hero.**
   We have not measured a category-wide number across engagements yet. Inventing one to make the page read "real" is the exact failure mode we sell against. Case study templates carry placeholder metrics so the human filling them in cannot accidentally publish unverified claims.

4. **A homepage chat agent ("Talk to our AI agent").**
   For a firm whose pitch is "agents fail in production," a homepage chatbot is a tonal contradiction and a real liability if it hallucinates a quote, a capability, or a price. Conversion happens in a 30-minute call with a senior person.

5. **A badge wall ("Powered by [framework / partner / certification]").**
   Badge walls signal procurement compliance theater, not engineering depth. Specific certifications (SOC 2, EU AI Act conformity) are stated as facts in the credibility section, with status fields that have to be filled in before launch. Vague "powered by" badges read as resume padding.

6. **National identity in the hero or as primary positioning.**
   We do not lead with where we are headquartered. Buyers hire on capability first and geography second. Headquarters and home market are operational facts; they belong in compliance scope (data residency, regulatory fluency) and in the footer, not in the pitch.

7. **"We sell AI training programs."**
   We do not sell training as a standalone product. Capability transfer happens inside engagements, against your real code, your real traffic, your real failure modes. A two-day workshop disconnected from a system in production is theater. The closest we come is the Embedded Capability Build, and even that is anchored on a real ride-along, not a curriculum, and its rubric is measured against shipped work.

`<!-- DEFERRED: CEO review surfaced two candidates for an 8th omission:
  (a) pricing band (sophisticated buyers self-disqualify on tire-kicker risk; signal $150K-$1.2M would change the funnel). User Challenge 9 surfaces this.
  (b) frontier-model SEO cost (devs Google "best Claude consultancy"; not naming any frontier model means zero share of that traffic). Add a separate /models page in v2 of the website while keeping the homepage agnostic.
See TODOS.md. -->`

---

# Notes for the Designer

- The page now has 11 landing sections (3.1 through 3.11). Section 3.9 is currently DEFERRED; main-page section count is effectively 10 until 3.9's path forward is chosen. CEO + Design review both flagged that 11 sections is at the high end for B2B services landing pages — capping at 9 is the auto-recommendation when the structural rewrite happens (merge 3.4 + 3.7, move 3.9 to /publish).
- All bracketed strings (`[LOGO 1]`, `[N]`, `[STATUS]`, `[X%]`, `[GITHUB ORG URL]`, `[TBD-SOURCE]`, etc.) are placeholders. Each has to be filled or removed before launch. Pre-deploy CI gate runs `rg '\[[A-Z0-9_ /.,%-]+\]' dist/` and fails the build on any match.
- Hero is 7 + 23 words. Do not lengthen during design polish; the cap is the cap.
- The problem section is in the buyer's voice (first-person plural, "we"). This is intentional. Visual treatment: testimonial-quote blocks with hanging quote mark + attribution line. Different type weight or color from the rest of the page is fine; rewriting to third person is not.
- No emoji in copy. If the design system uses iconography, icons are line-based and neutral, not branded illustration.
- Em dashes are not used in this copy. If the designer or copy editor adds them in revision, flag and revert. CI gate enforces with regex `/—/`.
- The 19 banned terms in the vocabulary audit are banned in body copy. They appear in this document only inside the audit and the competitive-landscape analysis, not in the actual landing page sections. Vale linter enforces on every PR touching `*.md`.
- The page reads as a global engineering firm. Regional facts appear only where they are operational scope: data residency, PDPL alongside SOC 2 and EU AI Act in the credibility row, multilingual capability where it matters. No flags, no national-identity framing, no home-market name-drops in the hero or above the fold.
- Section 3.9 (What We Publish) is DEFERRED until the avadx GitHub OSS surface is real. See TODOS.md launch-blocker #1.

## Mobile design intent (added by /autoplan Phase 2)

Mobile is its own design pass, not a media-query afterthought. Spec at minimum:
- **Sticky section nav** at the top with anchor links (collapsible).
- **Hero CTAs**: primary stacked above secondary on mobile, sticky-bottom CTA bar after hero scroll-past.
- **Logo bar (3.2)**: 2x3 grid on mobile (≤640px), 6x1 single row on desktop. Each logo gets meaningful `alt` text.
- **Services (3.4)**: stacked collapsed cards on mobile (name + one-line promise + ideal-buyer tag visible; expand-on-click for scope). Buyer-tag chips above the grid filter cards.
- **Problem section quotes (3.3)**: full-width with hanging quote mark; attribution stays small below.
- **FAQ (3.10)**: single-accordion on mobile (only one open at a time to manage vertical space); multi-accordion on desktop.
- **Final CTA**: full-width, sticky-bottom on mobile while in-section.
- **Performance budget**: LCP <2.0s on P75 mobile, CLS <0.05, INP <200ms. JS <50KB before consent (Cal.com embed lazy-loaded). Total page <700KB initial.

## Accessibility intent (added by /autoplan Phase 2)

- **Semantic HTML**: section headings in correct order (h1 → h2 → h3), no skipped levels, single h1 per page.
- **Color contrast**: WCAG 2.2 AA throughout. Logo bar's "low contrast" instruction must still meet 3:1 for non-text UI.
- **Keyboard navigation**: every interactive element reachable via Tab, visible focus ring, Esc collapses open panels.
- **Screen readers**: `<blockquote>` with `cite` metadata for buyer's-voice quotes; CTA destination announced ("opens scheduling dialog"); FAQ accordion follows WAI-ARIA disclosure pattern (`aria-expanded`, `aria-controls`).
- **Reduced motion**: respect `prefers-reduced-motion` on any animations.
- **No-JS fallback**: every CTA works as a plain link; FAQ collapses to all-open `<details>` elements without JavaScript.
- **CI gate**: axe-core a11y audit on every PR; block merge on regression below 95.

## Visual discipline (added by /autoplan Phase 2)

The copy bans hype words. The visual must ban the AI-consulting look. Specifically:
- **No** dark gradient hero, no glowing meshes, no abstract node networks, no glass-morphism cards, no fake dashboards, no "abstract AI illustration" in the hero. These are the visual cliches the firm's positioning is designed to escape.
- **Yes** to artifact-led visuals: real eval-suite CI output, real failure-mode taxonomy excerpts, real model-swap baseline charts with two providers' actual numbers, real capability-rubric sample rows.
- **Monospace** where it makes sense (eval names, MCP server names, file paths, code snippets) — not as decoration but because that's what those things actually look like.
- **System fonts or one self-hosted font** (Inter, Geist, or system stack). No Google Fonts requests. No web-font flash-of-unstyled-text.

## Date stamps (added by /autoplan Phase 2)

Review time-bound claims quarterly. Keep the review owner outside the page copy.

---

# Implementation pathway (added by /autoplan Phase 3)

The plan was content-only. Eng review surfaced these auto-decisions for when HTML work begins. See TODOS.md "Auto-decisions" for full list.

**Stack:** Astro 5.x + MDX + content collections.
**Hosting:** Cloudflare Pages (KSA + EU PoPs: Riyadh, Jeddah, Dammam, Frankfurt, Dublin).
**CI/CD:** GitHub Actions, preview deploy per PR, production deploy on merge to main, rollback = git revert + redeploy (<60s).
**Booking:** Cal.com (redirect-first; embed only after consent). Webhook → Cloudflare Worker → HubSpot CRM, with email fallback to `scoping@avad.ai`.
**Analytics:** Plausible (cookieless, EU PoP).
**Linters / CI gates:** Vale (vocabulary), regex em dash audit, placeholder leakage scan, Lychee broken-link, Lighthouse CI, axe-core, Playwright smoke, schema-dts JSON-LD validation.
**Security headers:** CSP with scoped frame-src, HSTS preload, Referrer-Policy strict-origin-when-cross-origin, X-Content-Type-Options nosniff, Permissions-Policy locked down, SRI on external scripts.
**Image optimization:** AVIF + WebP via `astro-imagetools` or `@astrojs/image`.
**Performance budget:** LCP <2.0s mobile, CLS <0.05, INP <200ms. HTML <30KB, CSS <40KB, JS <50KB pre-consent.
**Test plan:** Playwright smoke per route per viewport (375 / 768 / 1440), Lychee link check, schema-dts validation, axe-core a11y, Chromatic/Percy visual regression, sitemap validity.

---

# Cross-Reference

- **Prior revision of this plan**: preserved in git history (commit 53028b2 and earlier on branch agwax/avadai-landing).
- **/autoplan review artifact**: local review artifact retained outside the repo.
- **Restore point**: local restore artifact retained outside the repo.
- **TODOs**: `TODOS.md` (12 user challenges + auto-decisions deferred to implementation + 2 taste decisions).
