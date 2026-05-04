# avad.ai content review — final merged English pass

**Reviewer:** content strategist, two parallel passes merged into a single deliverable.
**Mode:** report-only. No edits applied.
**Inputs:** `AGENTS.md`, `DESIGN.md`, `TODOS.md`, `docs/avad-ai-landing.md`,
`site/src/i18n/en.ts`, `site/src/i18n/ar.ts`, `site/src/components/*.astro`.
**Sources merged:** review A (spec-violation + consistency frame) + review B
(sentence-level body-copy compression frame). Where the two agree, kept once.
Where they catch different things, kept both. Where they disagree, the
disagreement is surfaced explicitly under structural recommendations.

---

## Internal one-paragraph summary

avad.ai is a model-agnostic engineering firm selling production AI work into
Heads of AI / VPE / CTO buyers at 200–2,000-person regulated or
regulated-adjacent companies in the EU and KSA. The wedge is "the eval suite
ships with the agent." Voice is spec-sheet, low-decoration, no hype, no em
dashes, no quality-claim intensifiers. Output is a marketing landing page plus a
design system, not a product. The copy already reads tighter than its category;
this pass removes restatement, surfaces the DESIGN.md ↔ en.ts reconciliation
that TODOS.md flags as unresolved, enforces three DESIGN.md anti-pattern
violations, and trims body-copy filler around `why.cards`, `proof`, and the FAQ.

---

## Summary

- **Total tightening proposals:** 24
- **Total structural recommendations:** 6
- **Estimated word reduction:** ~8–10% on the homepage body copy. The bulk of
  the savings comes from `why.cards[].p`, `proof`, the hero subhead, the FAQ
  cleanup, and the dropped `cred.sub`.
- **Top 3 filler patterns observed:**
  1. **Subhead-as-table-of-contents.** `cred.sub` and `why.sub` re-list what
     the cards below already announce.
  2. **Setup phrases before the answer + reassurance tails after it.** "That is
     the point. Every system…" (FAQ Q3); "…Not a slide." (`why.cards[0].p`);
     "Your IP is safe. Your work product…" (FAQ Q8).
  3. **Empty intensifiers.** `actually`, `explicitly`, `sophisticated`, `as a
     sales line`, `by default` — each one removes a beat without losing
     meaning.
- **Top 3 structural recommendations:**
  1. **Reconcile the hero with DESIGN.md** (TODOS.md item: "Hero copy
     reconciliation"). The deployed hero (h1 + eyebrow + subhead + primary CTA)
     contradicts both the DESIGN.md hero spec and DESIGN.md anti-pattern #4.
     One of the two has to give.
  2. **Trim `proof.strip` from 4 to 3.** Item 4 (Capability rubric) duplicates
     `why.cards[2].rubric` directly below.
  3. **Cut FAQ Q8 from the homepage** until the avadx OSS surface ships
     (consistency with §3.9 launch-blocker). Fall back to tightening Q8 in
     place only if the cut is rejected.

---

## Tightening proposals

### 1. `t.hero.eyebrow`
**Location:** `site/src/i18n/en.ts:31` (Arabic mirror: `site/src/i18n/ar.ts:33`)
**Rendered in:** `site/src/components/Hero.astro` (mono uppercase metadata above h1)
**Current:** `"Engineering firm · Model-agnostic by contract"`
**Proposed:** *Drop entirely* (delete the eyebrow render path), OR replace with
a neutral section locator (`"3.1 · HERO"`) to match the section-ID convention.
**Why:** DESIGN.md anti-pattern #11 explicitly forbids "eyebrow above h1 with
the company's whole positioning compressed into 60 characters. The h1 is the
positioning." Plus, `Model-agnostic by contract` is restated in the subhead one
line later and again as `why.cards[1].h` — third repetition kills it.
**Confidence:** high (against DESIGN.md anti-pattern); medium on which
replacement.
**Owner approval needed?** yes.
**Arabic mirror:** mechanical.

### 2. `t.hero.subhead`
**Location:** `site/src/i18n/en.ts:35-36` (Arabic mirror: `site/src/i18n/ar.ts:37-38`)
**Rendered in:** `site/src/components/Hero.astro` (lede beneath h1)
**Current:** `"avad.ai builds AI agents you can put in production, builds the teams that run them, and publishes the open tools the field depends on. Model-agnostic by contract."`
**Proposed (compression-only, position unchanged, 21 words):**
`"Builds AI agents that hold up in production. Builds the teams to run them. Publishes the open tools the field depends on."`
**Proposed (single-wedge per DEFERRED Challenge 1, 16 words):**
`"We build AI agents you can put in production, with the eval suite that proves it works."`
**Why:** Current is **27 words; cap is 23**. Hard rule violation. The
compression-only version drops the redundant subject ("avad.ai" is the page),
keeps the three-pillar parallel (build / build / publish), and drops the
already-tripled `Model-agnostic by contract` close. The single-wedge version
also resolves DEFERRED User Challenge 1.
**Confidence:** high on the cap violation; medium on which version.
**Owner approval needed?** yes (single-wedge touches a DEFERRED position;
compression-only does not).
**Arabic mirror:** needs translator judgment — Arabic word counts don't map
one-to-one and the verb-fronted compressed structure has different rhythm in
Arabic.

### 3. `t.hero.h1Pre + h1Accent + h1Post` (assembled headline)
**Location:** `site/src/i18n/en.ts:32-34` (Arabic mirror: `site/src/i18n/ar.ts:34-36`)
**Rendered in:** `site/src/components/Hero.astro` (the h1)
**Current:** `"AI agents that " + "hold up" + " in production."` → `AI agents that hold up in production.`
**Proposed (per DESIGN.md hero spec):** `"Agents that hold up to your " + "evals" + ", your data, your auditors."`
**Why:** TODOS.md "Design — implementation gaps after 0.0.3.2" explicitly
flags this: the implementation ships the deck-§3.1 phrasing while DESIGN.md and
the rest of the page (`footer.blurb`, `meta.title`) use the DESIGN.md phrasing.
The h1 is the only string still on the older copy. The DESIGN.md phrasing
addresses three buyer roles in one breath (engineering / security / compliance);
"in production" speaks only to engineering.
**Confidence:** high that the two specs disagree; medium on which wins (writer's call).
**Owner approval needed?** yes.
**Arabic mirror:** needs translator judgment.

### 4. `t.hero.ctaPrimary`
**Location:** `site/src/i18n/en.ts:37` (Arabic mirror: `site/src/i18n/ar.ts:39`)
**Rendered in:** `site/src/components/Hero.astro` (primary `<Button>` linked `#book`)
**Current:** `"Book a 30-minute scoping call"`
**Proposed (per DESIGN.md hero spec):** `"Read the eval methodology"` with
optional mono trailing meta `"PDF · 14 pp"` (DESIGN.md "Buttons" → "trailing
mono metadata divided by a vertical hairline"). Demote the scoping CTA to
secondary.
**Why:** DESIGN.md anti-pattern #4 explicitly forbids `Book a demo / Book a
call / Get in touch as primary CTA`. Decisions log: "Primary CTA = `Read the
eval methodology [PDF · 14 pp]`, refuse `Book a demo` / `Book a call`. Filters
for buyers who read documents."
**Confidence:** high that the current label violates DESIGN.md;
medium-conditional on whether the eval-methodology PDF actually exists by
launch (TODOS.md launch-blocker).
**Owner approval needed?** yes (DESIGN.md anti-pattern + launch-blocker
dependency).
**Arabic mirror:** mechanical once English is decided.

### 5. `t.proof.head`
**Location:** `site/src/i18n/en.ts:60` (Arabic mirror: `site/src/i18n/ar.ts:62`)
**Rendered in:** `site/src/components/ProofBar.astro`
**Current:** `"What avad.ai ships, by default"`
**Proposed:** `"What avad.ai ships."`
**Why:** "by default" adds nothing — the strip beneath shows what ships,
period. Empty modifier.
**Confidence:** medium-high.
**Owner approval needed?** no.
**Arabic mirror:** mechanical.

### 6. `t.problem.sub`
**Location:** `site/src/i18n/en.ts:72` (Arabic mirror: `site/src/i18n/ar.ts:74`)
**Rendered in:** `site/src/components/ProblemSection.astro` (via `<SectionHead sub=...>`)
**Current:** `"Composite of 30+ scoping calls in 2025–2026. Heads of AI, CTOs, COOs."`
**Proposed:** `"Heads of AI, CTOs, COOs we spoke with in 2025–2026."` OR drop the sub entirely.
**Why:** "Composite of 30+ scoping calls" is repeated verbatim in the
attribution line under each of the three quotes (which the do-not-touch rule
protects). Saying it a fourth time at section level is restatement.
**Confidence:** high.
**Owner approval needed?** no.
**Arabic mirror:** mechanical.

### 7. `t.services.sub`
**Location:** `site/src/i18n/en.ts:95` (Arabic mirror: `site/src/i18n/ar.ts:97`)
**Rendered in:** `site/src/components/ServicesSection.astro`
**Current:** `"Filter by the situation you are in. Each entry opens to scope, ideal buyer, and engagement shape."`
**Proposed:** `"Filter by your situation. Each entry opens to scope, ideal buyer, and engagement shape."`
**Why:** "the situation you are in" is the wordier formulation of "your
situation." Same point, fewer words.
**Confidence:** high.
**Owner approval needed?** no.
**Arabic mirror:** mechanical.

### 8. `t.services.list[1].promise` (Eval Audit and Rebuild)
**Location:** `site/src/i18n/en.ts:115` (Arabic mirror: `site/src/i18n/ar.ts:117`)
**Rendered in:** `site/src/components/ServicesSection.astro`
**Current:** `"We assess your existing AI system against real failure modes and ship the eval suite that should have shipped with it."`
**Proposed:** `"We assess your AI system against real failure modes and ship the eval suite that should have shipped with it."`
**Why:** "existing" is implied — you can only assess a system that exists.
**Confidence:** high.
**Owner approval needed?** no.
**Arabic mirror:** mechanical (`نظامك القائم` → `نظامك`).

### 9. `t.services.list[2].scope[1]` (Embedded Capability Build)
**Location:** `site/src/i18n/en.ts:132` (Arabic mirror: `site/src/i18n/ar.ts:134`)
**Rendered in:** `site/src/components/ServicesSection.astro`
**Current:** `"Hands-on ride-along on a real engagement (your codebase, your traffic, your failure modes)."`
**Proposed:** `"Hands-on ride-along on a real engagement (your codebase, traffic, and failure modes)."`
**Why:** Three-fold "your" repetition compresses cleanly without losing the
buyer signal.
**Confidence:** high.
**Owner approval needed?** no.
**Arabic mirror:** needs translator judgment (Arabic possessive suffixation
behaves differently).

### 10. `t.services.list[3].promise` (Compliance Readiness)
**Location:** `site/src/i18n/en.ts:141` (Arabic mirror: `site/src/i18n/ar.ts:143`)
**Rendered in:** `site/src/components/ServicesSection.astro`
**Current:** `"We map your AI systems to the regulations that bind them, close the documentation and architecture gaps, and stand up audit infrastructure before the enforcement window."`
**Proposed:** `"We map your AI systems to the regulations that bind them, close documentation and architecture gaps, and stand up audit infrastructure before the enforcement window."`
**Why:** Drop "the" before "documentation and architecture gaps." Small register
tightening, reads more like a spec sheet.
**Confidence:** medium (gain is small).
**Owner approval needed?** no.
**Arabic mirror:** mechanical.

### 11. `t.services.list[4].scope[2]` (Model-Portable Architecture, third bullet)
**Location:** `site/src/i18n/en.ts:159` (Arabic mirror: `site/src/i18n/ar.ts:161`)
**Rendered in:** `site/src/components/ServicesSection.astro`
**Current:** `"Cost, latency, and accuracy baseline across at least two providers, with regional sovereign-model options (EU, GCC) included where they fit."`
**Proposed:** `"Cost, latency, and accuracy baseline across at least two providers, plus regional sovereign-model options (EU, GCC) where they fit."`
**Why:** "with X included where they fit" → "plus X where they fit." Removes
filler verb without changing meaning.
**Confidence:** medium.
**Owner approval needed?** no.
**Arabic mirror:** needs translator judgment.

### 12. `t.services.list[5].promise` (AI Strategy for Boards)
**Location:** `site/src/i18n/en.ts:167` (Arabic mirror: `site/src/i18n/ar.ts:169`)
**Rendered in:** `site/src/components/ServicesSection.astro`
**Current:** `"The technical brief your CEO and board actually need: where AI moves the P&L, where it does not, and what the next 12 months should look like."`
**Proposed:** `"The technical brief your CEO and board need: where AI moves the P&L, where it does not, and what the next 12 months should look like."`
**Why:** "actually" is on the empty-intensifiers list — exactly the AGENTS.md
voice rule against hedging filler.
**Confidence:** high.
**Owner approval needed?** no.
**Arabic mirror:** mechanical (`فعلًا` → drop equivalent).

### 13. `t.process.sub`
**Location:** `site/src/i18n/en.ts:183` (Arabic mirror: `site/src/i18n/ar.ts:185`)
**Rendered in:** `site/src/components/ProcessSection.astro`
**Current:** `"Every engagement closes with the artifacts your team needs to operate the system without us on the critical path."`
**Proposed:** `"Every engagement closes with the artifacts your team needs to operate the system."`
**Why:** "without us on the critical path" is the same hard line that DEFERRED
User Challenge 8 flags as a self-disqualifier to enterprise buyers. The softer
position is already adopted in `services.list[2].promise` (`"By handover, your
engineers own it."`). This sub is the one place the harder line still leaks.
Neutral surface that works under both DEFERRED resolutions.
**Confidence:** high on the inconsistency; medium on the proposed surface.
**Owner approval needed?** yes (DEFERRED-line surface change).
**Arabic mirror:** mechanical.

### 14. `t.process.steps[3].items[3]` (Handover deliverables)
**Location:** `site/src/i18n/en.ts:227` (Arabic mirror: `site/src/i18n/ar.ts:229`)
**Rendered in:** `site/src/components/ProcessSection.astro`
**Current:** `"Architecture docs, eval authoring guide, model-swap guide, ownership map"`
**Proposed:** `"Architecture docs, eval authoring and model-swap guides, ownership map"`
**Why:** Two adjacent "guide" tokens compress to one. 4 items → 3.
**Confidence:** medium (could leave at 4 if owner prefers explicit enumeration).
**Owner approval needed?** no.
**Arabic mirror:** mechanical.

### 15. `t.why.sub`
**Location:** `site/src/i18n/en.ts:236` (Arabic mirror: `site/src/i18n/ar.ts:238`)
**Rendered in:** `site/src/components/WhySection.astro`
**Current:** `"If we cannot measure it, we do not ship it. Each of the three lines below has a published artifact attached."`
**Proposed:** `"If we cannot measure it, we do not ship it. Each line below has its artifact."`
**Why:** "of the three" is implied by the rendered three cards. "published
artifact attached" is a reassurance tail. Sharper line, same claim.
**Confidence:** high.
**Owner approval needed?** no.
**Arabic mirror:** mechanical.

### 16. `t.why.cards[0].p` (Eval suite ships)
**Location:** `site/src/i18n/en.ts:240` (Arabic mirror: `site/src/i18n/ar.ts:242`)
**Rendered in:** `site/src/components/WhySection.astro`
**Current:** `"Every engagement ends with an eval suite committed to your repo. Trajectory coverage, failure-mode taxonomy, CI integration, regression budget. Not a slide."`
**Proposed:** `"An eval suite committed to your repo: trajectory coverage, failure-mode taxonomy, CI integration, regression budget."`
**Why:** "Every engagement ends with…" is a setup clause around the actual
claim. "Not a slide." is the reassurance tail (the section h2 — `"Three
differentiators. Each backed by an artifact, not an adjective."` — already
makes this point at the section level). The list is the proof.
**Confidence:** high.
**Owner approval needed?** no (does not change position; only compresses).
**Arabic mirror:** mechanical.

### 17. `t.why.cards[1].p` (Model-portable, with measured drift)
**Location:** `site/src/i18n/en.ts:245` (Arabic mirror: `site/src/i18n/ar.ts:247`)
**Rendered in:** `site/src/components/WhySection.astro`
**Current:** `"We design at the protocol layer (MCP, A2A) before we pick a model. Every engagement includes a documented swap plan and a measured baseline across at least two providers."`
**Proposed (modest):** `"We design at the protocol layer (MCP, A2A) before we pick a model. Every engagement ships with a documented swap plan and a measured baseline across at least two providers."`
**Proposed (aggressive — voice shift to passive):** `"Designed at the protocol layer (MCP, A2A) before a model is picked. Documented swap plan and a measured baseline across at least two providers."`
**Why:** Card 1 is currently 30 words; cards 0 and 2 will be ~16 and ~22 after
proposals 16 and 18. Compressing this card brings rhythmic parity. The
aggressive variant changes voice — owner's call.
**Confidence:** medium.
**Owner approval needed?** no for modest; yes for aggressive (voice change).
**Arabic mirror:** mechanical for modest; needs translator judgment for aggressive.

### 18. `t.why.cards[2].p` (Capability transfers)
**Location:** `site/src/i18n/en.ts:250` (Arabic mirror: `site/src/i18n/ar.ts:252`)
**Rendered in:** `site/src/components/WhySection.astro`
**Current:** `"Eval design, model-contract review, and compliance practice land in your engineers' weekly work. Capability is measured against a published rubric, before and after."`
**Proposed:** `"Eval design, model-contract review, and compliance practice land in your engineers' weekly work. Capability is measured against a published rubric."`
**Why:** "before and after" is the third beat of a reassurance pattern; the
rubric chip directly below already shows the before/after metric (`"before
3/10 → after 8/10"`). Visual carries; words tighten.
**Confidence:** high.
**Owner approval needed?** no.
**Arabic mirror:** mechanical.

### 19. `t.cred.sub`
**Location:** `site/src/i18n/en.ts:259` (Arabic mirror: `site/src/i18n/ar.ts:261`)
**Rendered in:** `site/src/components/CredibilitySection.astro`
**Current:** `"Models we work with, evaluation methodology, security and compliance posture. Date-stamped at the bottom."`
**Proposed:** *Drop entirely* (`<SectionHead sub=...>` is optional).
**Why:** First sentence is a literal table of contents of the four card titles
below it (`Models we work with` → `Evaluation methodology` → `Security & data
residency` → `Regulatory fluency`). "Date-stamped at the bottom" is restated
by the actual `cred.stamp` rendered at the bottom. Pure restatement. The h2
(`"Specifics, not badges."`) carries the section's intent.
**Confidence:** high.
**Owner approval needed?** no.
**Arabic mirror:** mechanical.

### 20. `t.cred.cards[2].items[3]` (Security & data residency)
**Location:** `site/src/i18n/en.ts:294` (Arabic mirror: `site/src/i18n/ar.ts:296`)
**Rendered in:** `site/src/components/CredibilitySection.astro`
**Current:** `"We do not train models on client data. Engagement contracts state this explicitly."`
**Proposed:** `"We do not train models on client data. Engagement contracts state this."`
**Why:** "explicitly" is an empty intensifier. The contract clause is the
proof.
**Confidence:** high.
**Owner approval needed?** no.
**Arabic mirror:** mechanical.

### 21. `t.faq.h2`
**Location:** `site/src/i18n/en.ts:315` (Arabic mirror: `site/src/i18n/ar.ts:317`)
**Rendered in:** `site/src/components/FaqSection.astro`
**Current:** `"Eight questions sophisticated buyers ask."`
**Proposed:** `"Eight questions buyers ask."`
**Why:** "sophisticated" is an unmeasured marketing adjective applied to the
buyer. The questions themselves prove the buyer is sophisticated; the
adjective is editorializing.
**Confidence:** high.
**Owner approval needed?** no.
**Arabic mirror:** mechanical.

### 22. `t.faq.items[2].a` (model swap mid-engagement)
**Location:** `site/src/i18n/en.ts:328` (Arabic mirror: `site/src/i18n/ar.ts:330`)
**Rendered in:** `site/src/components/FaqSection.astro`
**Current:** `"That is the point. Every system we ship is designed for swap. We document the contract, run the regression on the new model, and update the baseline. A model swap inside an engagement is included in scope."`
**Proposed:** `"Every system we ship is designed for swap. We document the contract, run the regression on the new model, and update the baseline. A model swap inside an engagement is in scope."`
**Why:** Drops the "That is the point." setup phrase (lead with the answer).
Drops "included" → "in scope" (one fewer word, same meaning).
**Confidence:** high.
**Owner approval needed?** no.
**Arabic mirror:** mechanical.

### 23. `t.faq.items[4].a` (how fast does this go)
**Location:** `site/src/i18n/en.ts:336` (Arabic mirror: `site/src/i18n/ar.ts:338`)
**Rendered in:** `site/src/components/FaqSection.astro`
**Current:** `"First useful artifact in week one (scoping, failure-mode map, eval design). First working agent or refactor by week four. Most engagements ship in 6 to 12 weeks. We do not promise “production in 30 days” as a sales line, because that timeline is how the failed pilots got built."`
**Proposed:** `"First useful artifact in week one (scoping, failure-mode map, eval design). First working agent or refactor by week four. Most engagements ship in 6 to 12 weeks. We do not promise “production in 30 days”, because that timeline is how the failed pilots got built."`
**Why:** "as a sales line" is editorial framing. The position survives without
it; the punch ("…that timeline is how the failed pilots got built") gets there
faster.
**Confidence:** medium.
**Owner approval needed?** yes (touches the rhetorical framing of a stated
position).
**Arabic mirror:** mechanical.

### 24. `t.faq.items[6].a` (train team, or build for us)
**Location:** `site/src/i18n/en.ts:344` (Arabic mirror: `site/src/i18n/ar.ts:346`)
**Rendered in:** `site/src/components/FaqSection.astro`
**Current:** `"Both, on every engagement. Capability transfer is in scope by default. If you want a build with no enablement, we can carve that out, but the default contract assumes we leave: eval ownership, runbook ownership, and incident-response ownership all transfer to your engineers."`
**Proposed:** `"Both, on every engagement. Capability transfer is in scope by default. We can carve out enablement on request, but the default contract assumes ownership of evals, runbooks, and incident response transfers to your engineers."`
**Why:** Three-fold "ownership" repetition compresses to a shared head.
Conditional clause tightens without losing the carve-out option.
**Confidence:** high.
**Owner approval needed?** no.
**Arabic mirror:** needs translator judgment (Arabic noun phrases with shared
possessive head read differently — translator decides).

### 25. `t.faq.items[7].a` (open-source IP safety) — *only if Q8 is kept; see structural rec S3*
**Location:** `site/src/i18n/en.ts:348` (Arabic mirror: `site/src/i18n/ar.ts:350`)
**Rendered in:** `site/src/components/FaqSection.astro`
**Current:** `"Your IP is safe. Your engagement work product (code, prompts, evals, data) stays in your repo, owned by you. Public work (MCP servers, skills, eval starter kits) is separate and never includes client-derived material. Contracts state the boundary explicitly."`
**Proposed:** `"Your engagement work product stays in your repo, owned by you. Public work (MCP servers, skills, eval starter kits) is separate and never includes client-derived material. Contracts state the boundary."`
**Why:** Three problems: (a) "Your IP is safe" is the reassurance lead — duplicates
the question framing instead of answering. (b) "(code, prompts, evals, data)"
duplicates `faq.items[1].a` which already enumerates this list — cut to keep
the IP-detail in one place. (c) "explicitly" — same intensifier as proposal 20.
**Confidence:** medium (cuts the parenthetical enumeration; rests on FAQ #1
carrying that detail).
**Owner approval needed?** yes (changes which FAQ entry owns the enumeration).
**Arabic mirror:** mechanical.

### 26. `t.finalCta.btn`
**Location:** `site/src/i18n/en.ts:358` (Arabic mirror: `site/src/i18n/ar.ts:360`)
**Rendered in:** `site/src/components/FinalCtaSection.astro` (primary `<Button>` linked
`mailto:scoping@avad.ai`)
**Current:** `"Book a scoping call"`
**Proposed:** `"Email scoping@avad.ai"` (matches the actual link target — it's a
mailto, not a calendar embed) OR `"Start scoping"`.
**Why:** Same DESIGN.md anti-pattern #4 as the hero primary CTA. Plus, the
button is `href="mailto:scoping@avad.ai"` — calling it "Book a scoping call"
implies a calendar handoff that does not exist. Either fix the label or wire
to Cal.com (Cal.com booking is an Auto-decision in TODOS.md but not yet built).
**Confidence:** high on label↔target mismatch; medium on the proposed wording.
**Owner approval needed?** yes.
**Arabic mirror:** mechanical.

---

## Structural recommendations

### S1. Hero copy reconciliation (deck §3.1 ↔ DESIGN.md hero spec)
**Recommendation:** **Pick one** and apply across `t.hero.eyebrow`, `t.hero.h1*`,
`t.hero.subhead`, `t.hero.ctaPrimary`. Update either `docs/avad-ai-landing.md
§3.1` or `DESIGN.md "Hero specification"` so both files stop disagreeing.
Current `footer.blurb` and `meta.title` already use the DESIGN.md phrasing;
only the hero block is still on the older copy.
**Affected files:**
- `site/src/i18n/en.ts:31-39`, `site/src/i18n/ar.ts:33-41`
- `docs/avad-ai-landing.md:101-110`
- `DESIGN.md:273-288`
- TODOS.md "Design — implementation gaps after 0.0.3.2 → Hero copy reconciliation"
**Why:** TODOS.md flags this as an unresolved gap. The DESIGN.md spec is also
the more defensible wedge ("evals / data / auditors" addresses three buyer
roles in one breath; "in production" is generic).
**Cost:** ~10 string edits across en.ts + ar.ts (translator needed for Arabic
h1 and subhead). Plus one decision in either deck or DESIGN.md to record the
loser. If DESIGN.md primary CTA wins, the eval-methodology PDF needs to exist
by launch (TODOS.md launch-blocker).
**Confidence:** high.

### S2. Trim `t.proof.strip` from 4 items to 3
**Recommendation:** Drop `proof.strip[3]` ("Capability rubric · scored before /
after").
**Affected files:**
- `site/src/i18n/en.ts:65`, `site/src/i18n/ar.ts:67`
- `site/src/components/ProofBar.astro` (4-col layout → 3-col, ~5 lines of CSS)
**Why:** Item 4 directly mirrors `why.cards[2].rubric` ("Engineer authors a
new trajectory eval — before 3/10 → after 8/10") rendered shortly below. The
remaining three (eval suite, model-swap baseline, conformity evidence) are the
three claims a buyer needs to recognize in a 2-second scan; the fourth dilutes
them. Capability beat is not lost — it is one section down on the same page.
**Cost:** ~5 lines of CSS in `ProofBar.astro` plus the i18n edits.
**Confidence:** high (defensible to keep at 4 only if owner wants the
capability beat above the fold).

### S3. FAQ Q8 — sequenced decision
**Primary recommendation:** **Cut `t.faq.items[7]` from the homepage** until the
avadx OSS surface ships. Optionally fold the IP-safety half into
`t.cred.cards[2]` (Security & data residency) as a fifth bullet.
**Fallback if cut is rejected:** apply tightening proposal 25 (drop "Your IP is
safe" reassurance lead, drop the duplicated enumeration that lives in FAQ Q1,
drop "explicitly").
**Affected files:**
- `site/src/i18n/en.ts:347-349`, `site/src/i18n/ar.ts:349-351`
- (optional) `site/src/i18n/en.ts:289-296` cred card 2 items
**Why:** §3.9 is launch-blocked precisely because the OSS surface (avadx
GitHub org, MCP Registry entries, npm/PyPI packages) does not exist yet
(TODOS.md launch-blocker #1). FAQ Q8 currently asserts that public work `(MCP
servers, skills, eval starter kits)` exists and is separate from client work.
If §3.9 ships nothing visible at launch (per the deck's "CONTENT INTENTIONALLY
UNRENDERED"), Q8 references an OSS surface the buyer cannot find — same
"theater" the page is designed to avoid. The fallback tightening is a real
improvement, but it leaves the consistency gap intact.
**Cost:** Cut: two small edits per i18n file. Optional ~30 min to fold the IP
sentence into cred card. Fallback: text edits only.
**Confidence:** high on the consistency reasoning; cut vs fallback is owner's
call.

### S4. Footer "Practice → What we publish" link
**Recommendation:** Either remove `t.footer.groups[1].links[3]` ("What we
publish" → `#cred`) or change the label to something the link target actually
delivers. Recommended: remove until `/publish` exists.
**Affected files:**
- `site/src/i18n/en.ts:389`, `site/src/i18n/ar.ts:391`
**Why:** The link claims to point at "what we publish" but anchors to `#cred`
(Technical Credibility), which has nothing about publishing. Same trap as FAQ
Q8 — promising a surface that does not yet exist.
**Cost:** Two edits.
**Confidence:** high.

### S5. `t.services.chips` defined in i18n but not rendered
**Recommendation:** Either render the buyer-tag chip filter (deck §3.4
designer note: "Above the grid: buyer-tag chips … that filter cards") or
remove the unused `chips` field from i18n.
**Affected files:**
- `site/src/components/ServicesSection.astro` (no chip render present)
- `site/src/i18n/en.ts:96`, `site/src/i18n/ar.ts:98`
**Why:** Dead i18n strings drift over time and confuse future translators.
Either implement the spec'd filter UI or delete the unused chips so the i18n
payload reflects what actually ships.
**Cost:** Either implementation work (M, ~2-4h to add an interactive filter
that respects WCAG) or a 30-second delete.
**Confidence:** medium — implementation decision more than copy decision.

### S6. Confirm §3.9 (What We Publish) stays off the homepage
**Recommendation:** Affirm DEFERRED. Plan a `/publish` sub-page when the OSS
surface ships, with a one-line credibility hook in `t.cred.cards`.
**Affected files:** `docs/avad-ai-landing.md:295-314`, `TODOS.md:11-16`,
`site/src/components/Footer.astro` (link target — see S4).
**Why:** The current homepage correctly omits §3.9 body content. The decision
the owner still has is **where it lives once OSS exists.** Recommending
`/publish` because (a) the credibility section is the natural home for a hook,
(b) a sub-page survives the v1 launch without depending on OSS work that has
its own runway, and (c) it removes the "What we publish" footer link from
being a dead reference (S4).
**Cost:** ~30-60 lines of HTML for `/publish` Astro page + lifted copy from
the deck. Zero homepage cost. Decision can defer until OSS surface is closer.
**Confidence:** high (this is the path the copy deck and TODOS.md already
lean toward).

---

## Untouched-on-purpose

Lines that look long, repetitive, or non-spec-sheet but are protected by an
explicit constraint or a load-bearing role:

- **All `t.services.list[N].buyer` and `t.services.list[N].shape`** — bid
  criteria, off-limits per brief.
- **`t.problem.quotes[N].h` and `.q`** — composite quotes in the buyer's
  voice; deck §3.3 designer note explicitly forbids rewriting these.
- **`t.problem.quotes[N].a`** — attribution lines under quotes.
- **`2025–2026`** date ranges — these use **en dashes (U+2013)**, the correct
  typographic mark for date ranges. The CI gate at `/—/` enforces against em
  dashes (U+2014) only. Not violations.
- **`t.meta_strip.*` and `t.artifact.*`** — mono "evidence" strings (eval IDs,
  task names, model counts).
- **`t.cred.cards[2].items[0..2]` and `t.cred.cards[3].items[*]`** — concrete
  data-residency, PDPL, AI Act facts. Each is a pre-launch fact that needs
  source-link verification (TODOS.md auto-decision), not editorial tightening.
- **`t.cred.stamp`** — date metadata.
- **`t.faq.items[0].a` (pricing)** — already tight; the 46 words include three
  named KPI examples that earn their place.
- **`t.faq.items[5].a` (team)** — stated position survives only if the
  supporting context survives.
- **`t.finalCta.p` and `t.finalCta.micro`** — friction reducers explicitly
  designed into the section.
- **`t.footer.blurb`** — light duplication of `meta.title`, but footer blurbs
  conventionally restate the brand line. Plus, this string carries the
  canonical DESIGN.md phrasing that the hero h1 currently contradicts (S1).
- **`t.footer.legal`, `t.footer.stamp`** — legal/metadata.
- **All `[BRACKETS]`-style placeholders** — gated by CI, owner-required values.
- **§3.9 strings** — not present in en.ts (the section is DEFERRED and not
  rendered).

---

## Open questions for the owner

1. **Hero copy: deck §3.1 or DESIGN.md hero spec?** (S1 + tightening proposals
   1, 2, 3, 4 all hinge on this.) Recommendation: pick the DESIGN.md spec
   because the footer blurb and meta title already use it; the hero block is
   the last holdout.

2. **If DESIGN.md hero wins:** is the eval-methodology PDF (`/eval-methodology`)
   actually going to exist by launch? If not, the primary CTA shift swaps one
   launch-blocker for another.

3. **FAQ Q8: cut or tighten?** (S3.) Cut is the consistency-with-§3.9 path.
   Tighten is the keep-the-FAQ-shape path.

4. **Process sub softening (`process.sub`):** are we OK dropping "without us on
   the critical path" as a surface change while User Challenge 8 is formally
   DEFERRED? Argument for: services card 03 already adopts the softer
   position; keeping the harder line in the section sub creates inconsistency.

5. **Hero subhead — compression-only or single-wedge?** (Tightening 2.)
   Compression-only is mechanical (21 words, parallel structure preserved).
   Single-wedge is a position decision (resolves DEFERRED Challenge 1).

6. **`why.cards[1].p` — modest or aggressive compression?** (Tightening 17.)
   Modest keeps the first-person voice; aggressive shifts to passive for
   rhythmic parity with the other two cards.

7. **`services.chips`: render or delete?** (S5.) Either is fine; current state
   is dead i18n.

8. **`faq.items[7]` question structure** if Q8 is kept: the question bundles
   two distinct buyer concerns. Tightening 25 reduces the answer to focus on
   the OSS-boundary half. Confirm this is the right split, or revise the
   question to one-question-per-FAQ-entry.

---

## Verification

This is a report. No code changes. Owner workflow:

1. Read top to bottom; reject any proposal that conflicts with intended
   position. Pay special attention to the **owner-approval-needed: yes**
   proposals (1, 2, 3, 4, 13, 17 aggressive variant, 23, 25, 26).
2. Resolve open question 1 (hero reconciliation) first — it gates four
   proposals.
3. Resolve open question 3 (FAQ Q8 cut vs tighten) — it gates proposal 25.
4. For each accepted proposal: edit `site/src/i18n/en.ts` at the cited line.
   Confirm by running `bun run build` from inside `site/` and visiting the
   affected component locally. Verify the hero subhead now passes the 23-word
   cap (CI may need a length assertion if not already present — separate
   task, out of scope here).
5. Run the existing CI gates planned in TODOS.md: Vale (vocabulary), em-dash
   regex (`/—/`), placeholder leakage scan (`rg '\[[A-Z0-9_ /.,%-]+\]' dist/`).
6. After en.ts edits land, hand off to the Arabic translator with this
   report's "Arabic mirror" notes per proposal. Translator applies the
   mirrored compression to `site/src/i18n/ar.ts` at the parallel lines.
7. Spot-check `meta.title`, `footer.blurb`, and `hero.h1*` for the framing
   decision from open question 1.

No commits, no PR until owner has marked accept/reject per proposal.
