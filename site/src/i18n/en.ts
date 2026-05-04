export const lang = "en";
export const dir = "ltr";

export const t = {
  meta: {
    title: "avad.ai · agents that hold up to your evals, your data, your auditors",
    description:
      "Model-agnostic AI agents for regulated EU and KSA workloads. The eval ships with the agent.",
    skip: "Skip to content",
    themeLight: "Light",
    themeDark: "Dark",
  },
  nav: {
    services: "Services",
    how: "How we work",
    why: "Why avad.ai",
    cred: "Credibility",
    faq: "FAQ",
    book: "Book a call",
    menu: "Menu",
  },
  meta_strip: {
    runLabel: "EVAL_RUN",
    runDate: "2026-05-04",
    runTime: "04:12 UTC",
    statusLabel: "LIVE",
    statusTasks: "6 tasks",
    statusModels: "4 models",
  },
  hero: {
    eyebrow: "Engineering firm · Model-agnostic by contract",
    h1Pre: "AI agents that ",
    h1Accent: "hold up",
    h1Post: " in production.",
    subhead:
      "avad.ai builds AI agents you can put in production, builds the teams that run them, and publishes the open tools the field depends on. Model-agnostic by contract.",
    ctaPrimary: "Book a 30-minute scoping call",
    ctaPrimaryMeta: "30 min",
    ctaSecondary: "Read our eval methodology",
  },
  artifact: {
    title: "evals/trajectory_suite",
    tag: "in client repo",
    columns: { case: "case", result: "result", status: "status" },
    rows: [
      { name: "tool_call.search → result_schema", num: "412/412", state: "pass" as const, label: "PASS" },
      { name: "trajectory.refund_flow.full", num: "78/78", state: "pass" as const, label: "PASS" },
      { name: "trajectory.escalation_handoff", num: "61/63", state: "fail" as const, label: "2 FAIL" },
      { name: "regression.budget_drift_provider_b", num: "0.4 / 1.0", state: "warn" as const, label: "WITHIN" },
      { name: "audit.eu_ai_act.annex_iii.logs", num: "ok", state: "pass" as const, label: "PASS" },
      { name: "audit.pdpl.cross_border_documented", num: "ok", state: "pass" as const, label: "PASS" },
    ],
    stats: [
      { k: "Trajectory cov.", v: "94%", tone: "ok" as const },
      { k: "Drift budget", v: "0.4 / 1.0", tone: "warn" as const },
      { k: "CI gate", v: "green", tone: "ok" as const },
    ],
  },
  proof: {
    head: "What avad.ai ships, by default",
    strip: [
      { label: "Trajectory eval suite", val: "412 cases · in client repo" },
      { label: "Model-swap baseline", val: "≥ 2 providers measured" },
      { label: "Conformity evidence", val: "EU AI Act · KSA PDPL" },
      { label: "Capability rubric", val: "scored before / after" },
    ],
  },
  problem: {
    sectionId: "3.3 · PROBLEM",
    tag: "The room you are walking into",
    h2: "Three sentences we hear in every scoping call.",
    sub: "Composite of 30+ scoping calls in 2025–2026. Heads of AI, CTOs, COOs.",
    quotes: [
      {
        h: "“We shipped one AI demo. We can't ship a second.”",
        q: "The first agent looked great in the demo. Then we put it in front of real users, real data, real edge cases. It broke in ways our evals never caught. Now leadership wants ROI and we can't even reproduce the failure.",
        a: "Composite of 30+ scoping calls, 2025–2026",
      },
      {
        h: "“We picked a model. Now we are hostage to it.”",
        q: "Switching costs were supposed to be low. They are not. Our prompts, tool wrappers, and fine-tunes all assume the current vendor's behavior. Their price went up 30% at renewal and we cannot move in time.",
        a: "Composite of 30+ scoping calls, 2025–2026",
      },
      {
        h: "“We have an EU AI Act enforcement-window problem.”",
        q: "Some of what we built falls under Annex III of the EU AI Act. Compliance flagged it last month. Engineering says the architecture was not designed for audit logs, traceability, or human-in-the-loop gates. Nobody owns the fix.",
        a: "Composite of 30+ scoping calls, 2025–2026",
      },
    ],
  },
  services: {
    sectionId: "3.4 · SERVICES",
    tag: "Services",
    h2: "Six engagements. Fixed scope. Written success criteria.",
    sub: "Filter by the situation you are in. Each entry opens to scope, ideal buyer, and engagement shape.",
    chips: ["All", "Failed pilot", "Renewal pressure", "Enforcement window", "Board deck", "Build a team"],
    labels: { scope: "Scope", buyer: "Ideal buyer", shape: "Engagement shape" },
    list: [
      {
        num: "01 / Build",
        h: "Production Agent Build",
        promise: "We design, build, and harden one AI agent end to end, with the eval suite that proves it works.",
        tag: "Failed pilot",
        scope: [
          "Use-case scoping, success criteria, failure-mode mapping against real traffic.",
          "Agent implementation including tool wrappers, MCP integrations, fallback paths.",
          "Eval suite with trajectory coverage and human-in-the-loop gates.",
        ],
        buyer: "VP Engineering or Head of AI replacing a failed pilot.",
        shape: "8 to 12 weeks. Fixed scope plus written success metrics. One accountable senior engineer.",
      },
      {
        num: "02 / Audit",
        h: "Eval Audit and Rebuild",
        promise: "We assess your existing AI system against real failure modes and ship the eval suite that should have shipped with it.",
        tag: "Failed pilot",
        scope: [
          "Trajectory-level evaluation against current production traffic.",
          "Failure-mode taxonomy specific to your domain.",
          "Regression suite with CI integration and rollback budget.",
        ],
        buyer: "AI lead whose first system is in production but flying blind on reliability.",
        shape: "4 to 6 weeks. Deliverable is the eval suite plus a remediation plan.",
      },
      {
        num: "03 / Team",
        h: "Embedded Capability Build",
        promise: "Your team learns to ship and run AI in production. By handover, your engineers own it.",
        tag: "Build a team",
        scope: [
          "On-the-job skill build for engineers, AI lead, and compliance: eval design, model contracts, prompt and tool review, post-incident analysis.",
          "Hands-on ride-along on a real engagement (your codebase, your traffic, your failure modes).",
          "AI Center of Excellence design: governance, decision rights, escalation paths. Includes EU AI Act Article 4 literacy curriculum.",
        ],
        buyer: "Head of AI building an internal team. CTO sequencing first AI deployments.",
        shape: "8 to 16 weeks. Documented playbook and a measurable team-capability rubric, scored before / during / after.",
      },
      {
        num: "04 / Compliance",
        h: "Compliance Readiness (EU AI Act + Saudi PDPL)",
        promise: "We map your AI systems to the regulations that bind them, close the documentation and architecture gaps, and stand up audit infrastructure before the enforcement window.",
        tag: "Enforcement window",
        scope: [
          "EU AI Act Annex III classification of in-scope systems; Saudi PDPL classification for in-Kingdom workloads; sector overlay where applicable.",
          "Risk management, logging, human-oversight architecture review. Data-residency posture documented per workload.",
          "Compliance pack, conformity-assessment artifacts, SDAIA cross-border transfer documentation, post-market monitoring plan.",
        ],
        buyer: "General Counsel, Head of Privacy, or CTO with EU customers, KSA customers, or both.",
        shape: "6 to 10 weeks. Compliance pack, remediated architecture, written gap-closure plan.",
      },
      {
        num: "05 / Architecture",
        h: "Model-Portable Architecture",
        promise: "We refactor your AI stack so the model is a swappable component. We measure the drift on every swap.",
        tag: "Renewal pressure",
        scope: [
          "Abstraction layer over MCP and A2A. Model-agnostic prompt and tool contracts.",
          "Documented swap plan with regression budget.",
          "Cost, latency, and accuracy baseline across at least two providers, with regional sovereign-model options (EU, GCC) included where they fit.",
        ],
        buyer: "Engineering leader negotiating a renewal, or one bracing for a model deprecation.",
        shape: "4 to 8 weeks. Working swap plus documentation.",
      },
      {
        num: "06 / Strategy",
        h: "AI Strategy for Boards",
        promise: "The technical brief your CEO and board actually need: where AI moves the P&L, where it does not, and what the next 12 months should look like.",
        tag: "Board deck",
        scope: [
          "Use-case ROI modeling against your data and workflow.",
          "Build, buy, or partner decision framework.",
          "12-month roadmap with eval, compliance, and capability-build gates.",
        ],
        buyer: "CEO or CTO writing the AI section of next quarter's board deck.",
        shape: "3 to 4 weeks. Written brief plus a working session with the board.",
      },
    ],
  },
  process: {
    sectionId: "3.5 · HOW WE WORK",
    tag: "How we work",
    h2: "Four steps. Concrete deliverables, not phases.",
    sub: "Every engagement closes with the artifacts your team needs to operate the system without us on the critical path.",
    outLabel: "Output",
    steps: [
      {
        num: "Step 01",
        when: "Week 1",
        h: "Scoping",
        items: [
          "Written success criteria",
          "Failure-mode map drawn from real traffic",
          "Eval design",
          "In-scope data and systems",
          "Signed statement of work",
        ],
      },
      {
        num: "Step 02",
        when: "Week 2 → launch",
        h: "Build",
        items: [
          "The agent or refactor itself",
          "Eval suite committed to your repo",
          "Weekly demo against production-shaped traffic",
        ],
      },
      {
        num: "Step 03",
        when: "Final two weeks",
        h: "Harden",
        items: [
          "Regression suite wired into your CI",
          "Rollback runbook",
          "On-call documentation",
          "Conformity artifacts (EU AI Act, PDPL, sector regulators)",
        ],
      },
      {
        num: "Step 04",
        when: "Week after launch",
        h: "Handover",
        items: [
          "Knowledge transfer to your team",
          "30-day support window",
          "Capability rubric scored against week-1 baseline",
          "Architecture docs, eval authoring guide, model-swap guide, ownership map",
        ],
      },
    ],
  },
  why: {
    sectionId: "3.7 · WHY AVAD.AI",
    tag: "Why avad.ai",
    h2: "Three differentiators. Each backed by an artifact, not an adjective.",
    sub: "If we cannot measure it, we do not ship it. Each of the three lines below has a published artifact attached.",
    cards: [
      {
        h: "Eval suite ships with the agent",
        p: "Every engagement ends with an eval suite committed to your repo. Trajectory coverage, failure-mode taxonomy, CI integration, regression budget. Not a slide.",
        rubric: { label: "Trajectory coverage on last 6 engagements", v: "median 91%", pct: 91 },
      },
      {
        h: "Model-portable, with measured drift",
        p: "We design at the protocol layer (MCP, A2A) before we pick a model. Every engagement includes a documented swap plan and a measured baseline across at least two providers.",
        rubric: { label: "Regression budget held within", v: "0.6 / 1.0 drift", pct: 60 },
      },
      {
        h: "Capability transfers to your team",
        p: "Eval design, model-contract review, and compliance practice land in your engineers' weekly work. Capability is measured against a published rubric, before and after.",
        rubric: { label: "Engineer authors a new trajectory eval", v: "before 3/10 → after 8/10", pct: 80 },
      },
    ],
  },
  cred: {
    sectionId: "3.8 · TECHNICAL CREDIBILITY",
    tag: "Technical credibility",
    h2: "Specifics, not badges.",
    sub: "Models we work with, evaluation methodology, security and compliance posture. Date-stamped at the bottom.",
    cards: [
      {
        h: "Models we work with",
        type: "pills" as const,
        items: [
          "Claude (Anthropic)",
          "GPT family (OpenAI)",
          "Gemini (Google)",
          "Mistral",
          "Llama derivatives",
          "Qwen",
          "Regional sovereign models",
          "Self-hosted",
        ],
        foot: "No preferred provider. Measured baselines per use case.",
      },
      {
        h: "Evaluation methodology",
        type: "list" as const,
        items: [
          "Three levels evaluated: final-output, intermediate-step, full-trajectory.",
          "Test framework documented in your repo.",
          "Suite wired into your CI before handover.",
          "Coverage targets agreed up front, reported weekly during build.",
        ],
        foot: "",
      },
      {
        h: "Security & data residency",
        type: "list" as const,
        items: [
          "Data residency: KSA region, EU, US, or self-hosted at your election.",
          "PDPL-aware by default for in-Kingdom workloads; SDAIA cross-border transfer conditions documented.",
          "DPAs and BAAs signed as required.",
          "We do not train models on client data. Engagement contracts state this explicitly.",
        ],
        foot: "",
      },
      {
        h: "Regulatory fluency",
        type: "list" as const,
        items: [
          "EU AI Act: Annex III classification, conformity documentation, post-market monitoring.",
          "EU AI Act Article 4: AI-literacy curriculum for client staff.",
          "Saudi PDPL: lawful-basis documentation, sensitive-data localization, DPIA for high-risk processing.",
          "Sector overlay: financial, healthcare, public sector.",
        ],
        foot: "",
      },
    ],
    stamp: "Facts and figures last verified: 2026-05-04.",
  },
  faq: {
    sectionId: "3.10 · FAQ",
    tag: "FAQ",
    h2: "Eight questions sophisticated buyers ask.",
    sub: "Anchor links per question. Deep-link from a sales email.",
    items: [
      {
        q: "How do you price?",
        a: "Fixed scope plus a written deliverable for most engagements. For longer programs we offer a base retainer with a success fee indexed to KPIs we agree on up front (rollback rate, cost reduction, time to compliance). Senior work is not billed by the hour.",
      },
      {
        q: "Who owns the IP?",
        a: "You do. All code, prompts, evals, and documentation are committed to your repo and owned by you. We retain rights to anonymized failure-mode taxonomies and methodology, not to your work product.",
      },
      {
        q: "What if we change models mid-engagement?",
        a: "That is the point. Every system we ship is designed for swap. We document the contract, run the regression on the new model, and update the baseline. A model swap inside an engagement is included in scope.",
      },
      {
        q: "How do you measure agent reliability?",
        a: "Trajectory-level eval, not just final output. We map your specific failure modes from real traffic, define a regression budget, and gate deploys on it. Methodology and coverage targets are published per engagement.",
      },
      {
        q: "How fast does this go?",
        a: "First useful artifact in week one (scoping, failure-mode map, eval design). First working agent or refactor by week four. Most engagements ship in 6 to 12 weeks. We do not promise “production in 30 days” as a sales line, because that timeline is how the failed pilots got built.",
      },
      {
        q: "What is the team?",
        a: "Senior engineers and AI researchers only. The person scoping the engagement is the person on call when it ships. No engagement runs with fewer than two senior people.",
      },
      {
        q: "Do you train our team, or just build for us?",
        a: "Both, on every engagement. Capability transfer is in scope by default. If you want a build with no enablement, we can carve that out, but the default contract assumes we leave: eval ownership, runbook ownership, and incident-response ownership all transfer to your engineers.",
      },
      {
        q: "Why do you publish open-source tools? Is our IP safe in our repo?",
        a: "Your IP is safe. Your engagement work product (code, prompts, evals, data) stays in your repo, owned by you. Public work (MCP servers, skills, eval starter kits) is separate and never includes client-derived material. Contracts state the boundary explicitly.",
      },
    ],
  },
  finalCta: {
    sectionId: "3.11 · FINAL CTA",
    tag: "Tell us what broke",
    h2: "Bring the failure mode and the deadline.",
    p: "30-minute scoping call. No deck required. We will tell you whether it is an avad.ai engagement or something you should keep in-house.",
    micro: "No NDA needed for the first call. We sign before any specifics are shared.",
    btn: "Book a scoping call",
    formCard: {
      title: "Scoping call",
      rows: [
        { k: "Duration", v: "30 minutes" },
        { k: "Format", v: "Video. Riyadh / EU / US hours" },
        { k: "Bring", v: "Failure mode + deadline" },
        { k: "Walk away with", v: "Engagement fit, written" },
      ],
    },
  },
  footer: {
    blurb: "Engineering firm building AI agents that hold up to your evals, your data, and your auditors. Riyadh · Frankfurt · Remote.",
    groups: [
      {
        h: "Engagements",
        links: [
          { label: "Production Agent Build", href: "#services" },
          { label: "Eval Audit & Rebuild", href: "#services" },
          { label: "Embedded Capability Build", href: "#services" },
          { label: "Compliance Readiness", href: "#services" },
          { label: "Model-Portable Architecture", href: "#services" },
          { label: "AI Strategy for Boards", href: "#services" },
        ],
      },
      {
        h: "Practice",
        links: [
          { label: "Eval methodology", href: "#cred" },
          { label: "Capability rubric", href: "#why" },
          { label: "Failure-mode taxonomy", href: "#cred" },
          { label: "What we publish", href: "#cred" },
        ],
      },
      {
        h: "Firm",
        links: [
          { label: "Scoping call", href: "#book" },
          { label: "Privacy", href: "mailto:scoping@avad.ai?subject=Privacy%20notice%20request" },
          { label: "DPA / BAA", href: "mailto:scoping@avad.ai?subject=DPA%2FBAA%20request" },
          { label: "scoping@avad.ai", href: "mailto:scoping@avad.ai" },
        ],
      },
    ],
    languageEN: "EN",
    languageAR: "العربية",
    stamp: "Facts last verified: 2026-05-04",
    legal: "© 2026 avad.ai. All rights reserved.",
  },
};

export type Strings = typeof t;
