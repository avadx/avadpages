/* avad.ai — bilingual content. EN canonical, AR mirrors meaning, not phrasing. */
window.AVAD_I18N = {
  en: {
    dir: "ltr",
    lang: "en",
    skip: "Skip to content",
    nav: {
      services: "Services",
      how: "How we work",
      why: "Why avad.ai",
      cred: "Credibility",
      faq: "FAQ",
      book: "Book a call",
      menu: "Menu"
    },
    util: {
      status: "Production AI engineering · EU + KSA enforcement-window ready",
      contact: "scoping@avad.ai",
      phone: "Riyadh · Frankfurt · Remote"
    },
    hero: {
      eyebrow: "Engineering firm · Model-agnostic by contract",
      h1a: "AI agents that ",
      h1b: "hold up",
      h1c: " in production.",
      lede:
        "avad.ai builds AI agents you can put in production, builds the teams that run them, and publishes the open tools the field depends on. Model-agnostic by contract.",
      cta1: "Book a 30-minute scoping call",
      cta2: "Read our eval methodology",
      meta1: "First useful artifact in week 1.",
      meta2: "First working agent by week 4.",
      meta3: "EU AI Act + Saudi PDPL fluent."
    },
    artifact: {
      title: "evals/trajectory_suite",
      tag: "in client repo",
      rows: [
        { name: "tool_call.search → result schema", num: "412/412", state: "pass", label: "PASS" },
        { name: "trajectory.refund_flow.full", num: "78/78", state: "pass", label: "PASS" },
        { name: "trajectory.escalation_handoff", num: "61/63", state: "fail", label: "2 FAIL" },
        { name: "regression.budget_drift_provider_b", num: "0.4 / 1.0", state: "skip", label: "WITHIN" },
        { name: "audit.eu_ai_act.annex_iii.logs", num: "ok", state: "pass", label: "PASS" },
        { name: "audit.pdpl.cross_border_documented", num: "ok", state: "pass", label: "PASS" }
      ],
      stats: [
        { k: "Trajectory cov.", v: "94%", cls: "ok" },
        { k: "Drift budget", v: "0.4 / 1.0", cls: "warn" },
        { k: "CI gate", v: "green", cls: "ok" }
      ]
    },
    proof: {
      head: "What avad.ai ships, by default",
      strip: [
        { label: "Trajectory eval suite", val: "412 cases · in client repo" },
        { label: "Model-swap baseline", val: "≥ 2 providers measured" },
        { label: "Conformity evidence", val: "EU AI Act · KSA PDPL" },
        { label: "Capability rubric", val: "scored before / after" }
      ]
    },
    problem: {
      tag: "The room you are walking into",
      h2: "Three sentences we hear in every scoping call.",
      sub:
        "Composite of 30+ scoping calls in 2025–2026. Heads of AI, CTOs, COOs.",
      quotes: [
        {
          h: "“We shipped one AI demo. We can’t ship a second.”",
          q:
            "The first agent looked great in the demo. Then we put it in front of real users, real data, real edge cases. It broke in ways our evals never caught. Now leadership wants ROI and we can’t even reproduce the failure.",
          a: "— Composite of 30+ scoping calls, 2025–2026"
        },
        {
          h: "“We picked a model. Now we are hostage to it.”",
          q:
            "Switching costs were supposed to be low. They are not. Our prompts, tool wrappers, and fine-tunes all assume the current vendor’s behavior. Their price went up 30% at renewal and we cannot move in time.",
          a: "— Composite of 30+ scoping calls, 2025–2026"
        },
        {
          h: "“We have an EU AI Act enforcement-window problem.”",
          q:
            "Some of what we built falls under Annex III of the EU AI Act. Compliance flagged it last month. Engineering says the architecture was not designed for audit logs, traceability, or human-in-the-loop gates. Nobody owns the fix.",
          a: "— Composite of 30+ scoping calls, 2025–2026"
        }
      ]
    },
    services: {
      tag: "Services",
      h2: "Six engagements. Fixed scope. Written success criteria.",
      sub:
        "Filter by the situation you are in. Each card opens to scope, ideal buyer, and engagement shape.",
      chips: [
        "All",
        "Failed pilot",
        "Renewal pressure",
        "Enforcement window",
        "Board deck",
        "Build a team"
      ],
      list: [
        {
          num: "01 / Build",
          h: "Production Agent Build",
          promise:
            "We design, build, and harden one AI agent end to end, with the eval suite that proves it works.",
          tag: "Failed pilot",
          tags: ["Failed pilot"],
          scope: [
            "Use-case scoping, success criteria, failure-mode mapping against real traffic.",
            "Agent implementation including tool wrappers, MCP integrations, fallback paths.",
            "Eval suite with trajectory coverage and human-in-the-loop gates."
          ],
          buyer: "VP Engineering or Head of AI replacing a failed pilot.",
          shape:
            "8 to 12 weeks. Fixed scope plus written success metrics. One accountable senior engineer."
        },
        {
          num: "02 / Audit",
          h: "Eval Audit and Rebuild",
          promise:
            "We assess your existing AI system against real failure modes and ship the eval suite that should have shipped with it.",
          tag: "Failed pilot",
          tags: ["Failed pilot"],
          scope: [
            "Trajectory-level evaluation against current production traffic.",
            "Failure-mode taxonomy specific to your domain.",
            "Regression suite with CI integration and rollback budget."
          ],
          buyer: "AI lead whose first system is in production but flying blind on reliability.",
          shape:
            "4 to 6 weeks. Deliverable is the eval suite plus a remediation plan."
        },
        {
          num: "03 / Team",
          h: "Embedded Capability Build",
          promise:
            "Your team learns to ship and run AI in production. By handover, your engineers own it.",
          tag: "Build a team",
          tags: ["Build a team"],
          scope: [
            "On-the-job skill build for engineers, AI lead, and compliance: eval design, model contracts, prompt and tool review, post-incident analysis.",
            "Hands-on ride-along on a real engagement (your codebase, your traffic, your failure modes).",
            "AI Center of Excellence design: governance, decision rights, escalation paths. Includes EU AI Act Article 4 literacy curriculum."
          ],
          buyer:
            "Head of AI building an internal team. CTO sequencing first AI deployments.",
          shape:
            "8 to 16 weeks. Documented playbook and a measurable team-capability rubric, scored before / during / after."
        },
        {
          num: "04 / Compliance",
          h: "Compliance Readiness (EU AI Act + Saudi PDPL)",
          promise:
            "We map your AI systems to the regulations that bind them, close the documentation and architecture gaps, and stand up audit infrastructure before the enforcement window.",
          tag: "Enforcement window",
          tags: ["Enforcement window"],
          scope: [
            "EU AI Act Annex III classification of in-scope systems; Saudi PDPL classification for in-Kingdom workloads; sector overlay where applicable.",
            "Risk management, logging, human-oversight architecture review. Data-residency posture documented per workload.",
            "Compliance pack, conformity-assessment artifacts, SDAIA cross-border transfer documentation, post-market monitoring plan."
          ],
          buyer:
            "General Counsel, Head of Privacy, or CTO with EU customers, KSA customers, or both.",
          shape:
            "6 to 10 weeks. Compliance pack, remediated architecture, written gap-closure plan."
        },
        {
          num: "05 / Architecture",
          h: "Model-Portable Architecture",
          promise:
            "We refactor your AI stack so the model is a swappable component. We measure the drift on every swap.",
          tag: "Renewal pressure",
          tags: ["Renewal pressure"],
          scope: [
            "Abstraction layer over MCP and A2A. Model-agnostic prompt and tool contracts.",
            "Documented swap plan with regression budget.",
            "Cost, latency, and accuracy baseline across at least two providers, with regional sovereign-model options (EU, GCC) included where they fit."
          ],
          buyer: "Engineering leader negotiating a renewal, or one bracing for a model deprecation.",
          shape:
            "4 to 8 weeks. Working swap plus documentation."
        },
        {
          num: "06 / Strategy",
          h: "AI Strategy for Boards",
          promise:
            "The technical brief your CEO and board actually need: where AI moves the P&L, where it does not, and what the next 12 months should look like.",
          tag: "Board deck",
          tags: ["Board deck"],
          scope: [
            "Use-case ROI modeling against your data and workflow.",
            "Build, buy, or partner decision framework.",
            "12-month roadmap with eval, compliance, and capability-build gates."
          ],
          buyer: "CEO or CTO writing the AI section of next quarter’s board deck.",
          shape: "3 to 4 weeks. Written brief plus a working session with the board."
        }
      ],
      labels: { scope: "Scope", buyer: "Ideal buyer", shape: "Engagement shape" }
    },
    process: {
      tag: "How we work",
      h2: "Four steps. Concrete deliverables, not phases.",
      sub:
        "Every engagement closes with the artifacts your team needs to operate the system without us on the critical path.",
      steps: [
        {
          num: "Step 01",
          when: "Week 1",
          h: "Scoping",
          out: "Output",
          items: [
            "Written success criteria",
            "Failure-mode map drawn from real traffic",
            "Eval design",
            "In-scope data and systems",
            "Signed statement of work"
          ]
        },
        {
          num: "Step 02",
          when: "Week 2 → launch",
          h: "Build",
          out: "Output",
          items: [
            "The agent or refactor itself",
            "Eval suite committed to your repo",
            "Weekly demo against production-shaped traffic"
          ]
        },
        {
          num: "Step 03",
          when: "Final two weeks",
          h: "Harden",
          out: "Output",
          items: [
            "Regression suite wired into your CI",
            "Rollback runbook",
            "On-call documentation",
            "Conformity artifacts (EU AI Act, PDPL, sector regulators)"
          ]
        },
        {
          num: "Step 04",
          when: "Week after launch",
          h: "Handover",
          out: "Output",
          items: [
            "Knowledge transfer to your team",
            "30-day support window",
            "Capability rubric scored against week-1 baseline",
            "Architecture docs, eval authoring guide, model-swap guide, ownership map"
          ]
        }
      ]
    },
    why: {
      tag: "Why avad.ai",
      h2: "Three differentiators. Each backed by an artifact, not an adjective.",
      sub:
        "If we cannot measure it, we do not ship it. Each of the three lines below has a published artifact attached.",
      cards: [
        {
          h: "Eval suite ships with the agent",
          p:
            "Every engagement ends with an eval suite committed to your repo. Trajectory coverage, failure-mode taxonomy, CI integration, regression budget. Not a slide.",
          rubric: {
            label: "Trajectory coverage on last 6 engagements",
            v: "median 91%",
            pct: 91
          }
        },
        {
          h: "Model-portable, with measured drift",
          p:
            "We design at the protocol layer (MCP, A2A) before we pick a model. Every engagement includes a documented swap plan and a measured baseline across at least two providers.",
          rubric: {
            label: "Regression budget held within",
            v: "0.6 / 1.0 drift",
            pct: 60
          }
        },
        {
          h: "Capability transfers to your team",
          p:
            "Eval design, model-contract review, and compliance practice land in your engineers’ weekly work. Capability is measured against a published rubric, before and after.",
          rubric: {
            label: "Engineer authors a new trajectory eval",
            v: "before 3/10 → after 8/10",
            pct: 80
          }
        }
      ]
    },
    cred: {
      tag: "Technical credibility",
      h2: "Specifics, not badges.",
      sub:
        "Models we work with, evaluation methodology, security and compliance posture. Date-stamped at the bottom.",
      cards: [
        {
          h: "Models we work with",
          type: "pills",
          items: [
            "Claude (Anthropic)",
            "GPT family (OpenAI)",
            "Gemini (Google)",
            "Mistral",
            "Llama derivatives",
            "Qwen",
            "Regional sovereign models",
            "Self-hosted"
          ],
          foot:
            "No preferred provider. Measured baselines per use case."
        },
        {
          h: "Evaluation methodology",
          type: "list",
          items: [
            "Three levels evaluated: final-output, intermediate-step, full-trajectory.",
            "Test framework documented in your repo.",
            "Suite wired into your CI before handover.",
            "Coverage targets agreed up front, reported weekly during build."
          ]
        },
        {
          h: "Security & data residency",
          type: "list",
          items: [
            "Data residency: KSA region, EU, US, or self-hosted at your election.",
            "PDPL-aware by default for in-Kingdom workloads; SDAIA cross-border transfer conditions documented.",
            "DPAs and BAAs signed as required.",
            "We do not train models on client data. Engagement contracts state this explicitly."
          ]
        },
        {
          h: "Regulatory fluency",
          type: "list",
          items: [
            "EU AI Act: Annex III classification, conformity documentation, post-market monitoring.",
            "EU AI Act Article 4: AI-literacy curriculum for client staff.",
            "Saudi PDPL: lawful-basis documentation, sensitive-data localization, DPIA for high-risk processing.",
            "Sector overlay: financial, healthcare, public sector."
          ]
        }
      ],
      stamp: "Facts and figures last verified: 2026-05-04."
    },
    faq: {
      tag: "FAQ",
      h2: "Eight questions sophisticated buyers ask.",
      sub: "Anchor links per question. Deep-link from a sales email.",
      expandAll: "Expand all",
      collapseAll: "Collapse all",
      items: [
        {
          q: "How do you price?",
          a:
            "Fixed scope plus a written deliverable for most engagements. For longer programs we offer a base retainer with a success fee indexed to KPIs we agree on up front (rollback rate, cost reduction, time to compliance). Senior work is not billed by the hour."
        },
        {
          q: "Who owns the IP?",
          a:
            "You do. All code, prompts, evals, and documentation are committed to your repo and owned by you. We retain rights to anonymized failure-mode taxonomies and methodology, not to your work product."
        },
        {
          q: "What if we change models mid-engagement?",
          a:
            "That is the point. Every system we ship is designed for swap. We document the contract, run the regression on the new model, and update the baseline. A model swap inside an engagement is included in scope."
        },
        {
          q: "How do you measure agent reliability?",
          a:
            "Trajectory-level eval, not just final output. We map your specific failure modes from real traffic, define a regression budget, and gate deploys on it. Methodology and coverage targets are published per engagement."
        },
        {
          q: "How fast does this go?",
          a:
            "First useful artifact in week one (scoping, failure-mode map, eval design). First working agent or refactor by week four. Most engagements ship in 6 to 12 weeks. We do not promise “production in 30 days” as a sales line, because that timeline is how the failed pilots got built."
        },
        {
          q: "What is the team?",
          a:
            "Senior engineers and AI researchers only. The person scoping the engagement is the person on call when it ships. No engagement runs with fewer than two senior people."
        },
        {
          q: "Do you train our team, or just build for us?",
          a:
            "Both, on every engagement. Capability transfer is in scope by default. If you want a build with no enablement, we can carve that out, but the default contract assumes we leave: eval ownership, runbook ownership, and incident-response ownership all transfer to your engineers."
        },
        {
          q: "Why do you publish open-source tools? Is our IP safe in our repo?",
          a:
            "Your IP is safe. Your engagement work product (code, prompts, evals, data) stays in your repo, owned by you. Public work (MCP servers, skills, eval starter kits) is separate and never includes client-derived material. Contracts state the boundary explicitly."
        }
      ]
    },
    finalCta: {
      tag: "Tell us what broke",
      h2: "Bring the failure mode and the deadline.",
      p:
        "30-minute scoping call. No deck required. We will tell you whether it is an avad.ai engagement or something you should keep in-house.",
      micro: "No NDA needed for the first call. We sign before any specifics are shared.",
      btn: "Book a scoping call",
      formCard: {
        title: "Scoping call",
        rows: [
          { k: "Duration", v: "30 minutes" },
          { k: "Format", v: "Video. Riyadh / EU / US hours" },
          { k: "Bring", v: "Failure mode + deadline" },
          { k: "Walk away with", v: "Engagement fit, written" }
        ]
      }
    },
    footer: {
      blurb:
        "Engineering firm building AI agents that hold up to your evals, your data, and your auditors. Riyadh · Frankfurt · Remote.",
      groups: [
        {
          h: "Engagements",
          links: [
            "Production Agent Build",
            "Eval Audit & Rebuild",
            "Embedded Capability Build",
            "Compliance Readiness",
            "Model-Portable Architecture",
            "AI Strategy for Boards"
          ]
        },
        {
          h: "Practice",
          links: [
            "Eval methodology",
            "Capability rubric",
            "Failure-mode taxonomy",
            "What we publish"
          ]
        },
        {
          h: "Firm",
          links: ["Scoping call", "Privacy", "DPA / BAA", "scoping@avad.ai"]
        }
      ],
      stamp: "Facts last verified: 2026-05-04",
      legal: "© 2026 avad.ai. All rights reserved."
    }
  },

  ar: {
    dir: "rtl",
    lang: "ar",
    skip: "تخطّي إلى المحتوى",
    nav: {
      services: "الخدمات",
      how: "طريقة عملنا",
      why: "لماذا أفاد",
      cred: "المرجعية التقنية",
      faq: "الأسئلة الشائعة",
      book: "احجز مكالمة",
      menu: "القائمة"
    },
    util: {
      status: "هندسة وكلاء الذكاء الاصطناعي للإنتاج · جاهزون لنوافذ الإلزام في الاتحاد الأوروبي والمملكة",
      contact: "scoping@avad.ai",
      phone: "الرياض · فرانكفورت · عن بُعد"
    },
    hero: {
      eyebrow: "شركة هندسية · مستقلة عن المزوّد بحكم العقد",
      h1a: "وكلاء ذكاء اصطناعي ",
      h1b: "يصمدون",
      h1c: " في الإنتاج.",
      lede:
        "نبني في أفاد وكلاء ذكاء اصطناعي قابلين للتشغيل الإنتاجي، ونبني الفِرق التي تشغّلهم، وننشر الأدوات المفتوحة التي يعتمد عليها المجال. مستقلون عن المزوّد بحكم العقد.",
      cta1: "احجز مكالمة تأطير لمدة ٣٠ دقيقة",
      cta2: "اقرأ منهجية التقييم",
      meta1: "أول مُخرَج عملي خلال الأسبوع الأول.",
      meta2: "أول وكيل عامل بحلول الأسبوع الرابع.",
      meta3: "إلمام كامل بـ EU AI Act ونظام حماية البيانات السعودي."
    },
    artifact: {
      title: "evals/trajectory_suite",
      tag: "في مستودع العميل",
      rows: [
        { name: "tool_call.search → result schema", num: "412/412", state: "pass", label: "نجح" },
        { name: "trajectory.refund_flow.full", num: "78/78", state: "pass", label: "نجح" },
        { name: "trajectory.escalation_handoff", num: "61/63", state: "fail", label: "فشل ٢" },
        { name: "regression.budget_drift_provider_b", num: "0.4 / 1.0", state: "skip", label: "ضمن الحد" },
        { name: "audit.eu_ai_act.annex_iii.logs", num: "ok", state: "pass", label: "نجح" },
        { name: "audit.pdpl.cross_border_documented", num: "ok", state: "pass", label: "نجح" }
      ],
      stats: [
        { k: "تغطية المسارات", v: "94%", cls: "ok" },
        { k: "ميزانية الانحراف", v: "0.4 / 1.0", cls: "warn" },
        { k: "بوابة CI", v: "خضراء", cls: "ok" }
      ]
    },
    proof: {
      head: "ما تشحنه أفاد افتراضيًا",
      strip: [
        { label: "حزمة تقييم المسارات", val: "412 حالة · في مستودع العميل" },
        { label: "خط أساس لتبديل النموذج", val: "تقييم لِمُزوِّدَين على الأقل" },
        { label: "أدلة المطابقة", val: "EU AI Act · PDPL" },
        { label: "مقياس قدرات الفريق", val: "قبل / بعد" }
      ]
    },
    problem: {
      tag: "الواقع الذي تدخله",
      h2: "ثلاث جُمَل نسمعها في كل مكالمة تأطير.",
      sub: "خلاصة لأكثر من ٣٠ مكالمة تأطير خلال 2025–2026 مع رؤساء الذكاء الاصطناعي ومديري التقنية والعمليات.",
      quotes: [
        {
          h: "«شحنّا عرضًا واحدًا للذكاء الاصطناعي. لا نستطيع شحن ثانٍ.»",
          q:
            "بدا الوكيل الأول رائعًا في العرض. ثم وضعناه أمام مستخدمين حقيقيين وبيانات حقيقية وحالات حافة. انكسر بطرق لم تلتقطها تقييماتنا. الإدارة تطلب عائدًا، ونحن لا نستطيع حتى إعادة إنتاج الفشل.",
          a: "— خلاصة من ٣٠+ مكالمة تأطير، 2025–2026"
        },
        {
          h: "«اخترنا نموذجًا. أصبحنا رهينة له.»",
          q:
            "كان من المفترض أن تكون تكاليف التبديل منخفضة، وهي ليست كذلك. كل قوالبنا وأغلفة الأدوات والضبط الدقيق تفترض سلوك المزوّد الحالي. ارتفع سعرهم 30٪ عند التجديد ولا نستطيع التحرك في الوقت المتاح.",
          a: "— خلاصة من ٣٠+ مكالمة تأطير، 2025–2026"
        },
        {
          h: "«لدينا مشكلة نافذة إلزام في EU AI Act.»",
          q:
            "بعض ما بنيناه يقع ضمن الملحق الثالث من قانون الذكاء الاصطناعي الأوروبي. أشار الامتثال إلى ذلك الشهر الماضي. الهندسة تقول إن البنية لم تُصمَّم لسجلات التدقيق والتتبع وبوابات الإشراف البشري. لا أحد يملك الإصلاح.",
          a: "— خلاصة من ٣٠+ مكالمة تأطير، 2025–2026"
        }
      ]
    },
    services: {
      tag: "الخدمات",
      h2: "ست ارتباطات. نطاق ثابت. معايير نجاح مكتوبة.",
      sub: "اختر الموقف الذي أنت فيه. كل بطاقة تفتح على النطاق والمشتري المثالي وشكل الارتباط.",
      chips: [
        "الكل",
        "تجربة فاشلة",
        "ضغط التجديد",
        "نافذة إلزام",
        "عرض مجلس",
        "بناء فريق"
      ],
      list: [
        {
          num: "01 / بناء",
          h: "بناء وكيل إنتاجي",
          promise:
            "نُصمم ونبني ونُحصِّن وكيل ذكاء اصطناعي واحدًا من البداية إلى النهاية، مع حزمة التقييم التي تثبت أنه يعمل.",
          tag: "تجربة فاشلة",
          tags: ["تجربة فاشلة"],
          scope: [
            "تأطير حالة الاستخدام، معايير النجاح، خريطة أوضاع الفشل من حركة حقيقية.",
            "تنفيذ الوكيل بما يشمل أغلفة الأدوات، تكاملات MCP، ومسارات الاحتياط.",
            "حزمة تقييم بتغطية على مستوى المسار وبوابات إشراف بشري."
          ],
          buyer: "نائب رئيس الهندسة أو رئيس الذكاء الاصطناعي يستبدل تجربة فاشلة.",
          shape:
            "من ٨ إلى ١٢ أسبوعًا. نطاق ثابت ومعايير نجاح مكتوبة. مهندس أول واحد مسؤول."
        },
        {
          num: "02 / تدقيق",
          h: "تدقيق وإعادة بناء حزمة التقييم",
          promise:
            "نُقيّم نظامك القائم وفق أوضاع فشل حقيقية، ونشحن حزمة التقييم التي كان يجب أن تُشحن معه.",
          tag: "تجربة فاشلة",
          tags: ["تجربة فاشلة"],
          scope: [
            "تقييم على مستوى المسار مقابل حركة الإنتاج الحالية.",
            "تصنيف لأوضاع الفشل خاص بمجالك.",
            "حزمة انحدار مدمجة مع CI وميزانية تراجع."
          ],
          buyer: "قائد ذكاء اصطناعي لديه نظام في الإنتاج لكنه يطير بلا رؤية.",
          shape: "من ٤ إلى ٦ أسابيع. التسليم: حزمة التقييم وخطة معالجة."
        },
        {
          num: "03 / فريق",
          h: "بناء قدرات مدمجة في فريقك",
          promise:
            "يتعلم فريقك شحن الذكاء الاصطناعي وتشغيله في الإنتاج. عند التسليم، مهندسوك يملكون النظام.",
          tag: "بناء فريق",
          tags: ["بناء فريق"],
          scope: [
            "بناء مهارات داخل العمل للمهندسين وقائد الذكاء الاصطناعي والامتثال: تصميم التقييم، عقود النموذج، مراجعة المُحفِّزات والأدوات.",
            "مرافقة عملية على ارتباط حقيقي (كودك وحركتك وأوضاع فشلك).",
            "تصميم مركز تميّز للذكاء الاصطناعي مع منهج إلمام EU AI Act المادة 4."
          ],
          buyer: "رئيس ذكاء اصطناعي يبني فريقًا داخليًا. مدير تقنية يُسلسل أول إطلاقات.",
          shape:
            "من ٨ إلى ١٦ أسبوعًا. كتيّب موثّق ومقياس قدرات قابل للقياس قبل/أثناء/بعد."
        },
        {
          num: "04 / امتثال",
          h: "الجاهزية للامتثال (EU AI Act وPDPL)",
          promise:
            "نُطابق أنظمتك مع التشريعات الملزمة، ونغلق فجوات التوثيق والبنية، ونُقيم بنية تدقيق قبل نافذة الإلزام.",
          tag: "نافذة إلزام",
          tags: ["نافذة إلزام"],
          scope: [
            "تصنيف Annex III للأنظمة المعنية، وتصنيف PDPL لأحمال داخل المملكة، مع طبقة قطاعية عند الحاجة.",
            "مراجعة إدارة المخاطر والتسجيل وبنية الإشراف البشري. توثيق توطين البيانات لكل حِمل.",
            "حزمة امتثال وأدلة تقييم المطابقة وتوثيق نقل البيانات عبر الحدود لدى سدايا، وخطة مراقبة ما بعد التسويق."
          ],
          buyer: "المستشار العام أو رئيس الخصوصية أو مدير التقنية مع عملاء في الاتحاد الأوروبي والمملكة.",
          shape:
            "من ٦ إلى ١٠ أسابيع. حزمة امتثال وبنية مُعالَجة وخطة سد الفجوات."
        },
        {
          num: "05 / بنية",
          h: "بنية قابلة لنقل النموذج",
          promise:
            "نُعيد هيكلة منظومتك ليصبح النموذج مكوّنًا قابلًا للاستبدال. نقيس الانحراف عند كل تبديل.",
          tag: "ضغط التجديد",
          tags: ["ضغط التجديد"],
          scope: [
            "طبقة تجريد فوق MCP وA2A. عقود مُحفِّزات وأدوات مستقلة عن النموذج.",
            "خطة تبديل موثّقة مع ميزانية انحدار.",
            "خط أساس للتكلفة والكمون والدقة عبر مزوّدَين على الأقل، مع خيارات نماذج إقليمية سيادية."
          ],
          buyer: "قائد هندسي يتفاوض على تجديد، أو يستعد لإيقاف نموذج.",
          shape: "من ٤ إلى ٨ أسابيع. تبديل عامل وتوثيق."
        },
        {
          num: "06 / استراتيجية",
          h: "استراتيجية الذكاء الاصطناعي للمجلس",
          promise:
            "الإحاطة التقنية التي يحتاجها رئيسك التنفيذي والمجلس فعلًا: أين يحرّك الذكاء الاصطناعي الأرباح، وأين لا يحرّكها، وكيف يجب أن تبدو الاثنا عشر شهرًا القادمة.",
          tag: "عرض مجلس",
          tags: ["عرض مجلس"],
          scope: [
            "نمذجة عائد الاستثمار لحالات الاستخدام مقابل بياناتك وسير عملك.",
            "إطار قرار: بناء أم شراء أم شراكة.",
            "خارطة طريق ١٢ شهرًا ببوابات تقييم وامتثال وبناء قدرات."
          ],
          buyer: "رئيس تنفيذي أو مدير تقنية يكتب قسم الذكاء الاصطناعي في عرض المجلس القادم.",
          shape: "من ٣ إلى ٤ أسابيع. إحاطة مكتوبة وجلسة عمل مع المجلس."
        }
      ],
      labels: { scope: "النطاق", buyer: "المشتري المثالي", shape: "شكل الارتباط" }
    },
    process: {
      tag: "طريقة عملنا",
      h2: "أربع مراحل. مُخرَجات ملموسة، لا مراحل اسمية.",
      sub: "ينتهي كل ارتباط بالأدوات التي يحتاجها فريقك لتشغيل النظام دوننا في المسار الحرج.",
      steps: [
        {
          num: "المرحلة 01",
          when: "الأسبوع الأول",
          h: "التأطير",
          out: "المخرجات",
          items: [
            "معايير نجاح مكتوبة",
            "خريطة أوضاع فشل من حركة حقيقية",
            "تصميم التقييم",
            "نطاق البيانات والأنظمة",
            "بيان عمل موقّع"
          ]
        },
        {
          num: "المرحلة 02",
          when: "الأسبوع الثاني → الإطلاق",
          h: "البناء",
          out: "المخرجات",
          items: [
            "الوكيل أو إعادة الهيكلة",
            "حزمة التقييم في مستودعك",
            "عرض أسبوعي على حركة بشكل إنتاجي"
          ]
        },
        {
          num: "المرحلة 03",
          when: "الأسبوعان الأخيران",
          h: "التحصين",
          out: "المخرجات",
          items: [
            "حزمة الانحدار مدمجة مع CI",
            "كُتيّب التراجع",
            "وثائق المناوبة",
            "أدلة المطابقة (EU AI Act وPDPL والقطاع)"
          ]
        },
        {
          num: "المرحلة 04",
          when: "الأسبوع التالي للإطلاق",
          h: "التسليم",
          out: "المخرجات",
          items: [
            "نقل المعرفة لفريقك",
            "نافذة دعم لمدة 30 يومًا",
            "مقياس قدرات يُسجَّل مقابل خط أساس الأسبوع الأول",
            "وثائق البنية وكتيّب تأليف التقييم ودليل تبديل النموذج وخريطة الملكية"
          ]
        }
      ]
    },
    why: {
      tag: "لماذا أفاد",
      h2: "ثلاث ميزات. كل واحدة يدعمها أثَر، لا صفة.",
      sub: "إن لم نستطع قياسه، لا نشحنه. لكل من الميزات الثلاث أثَر منشور.",
      cards: [
        {
          h: "حزمة التقييم تُشحَن مع الوكيل",
          p:
            "ينتهي كل ارتباط بحزمة تقييم في مستودعك: تغطية على مستوى المسار، تصنيف لأوضاع الفشل، تكامل مع CI، وميزانية انحدار. لا شريحة عرض.",
          rubric: {
            label: "تغطية المسارات في آخر ٦ ارتباطات",
            v: "وسيط 91%",
            pct: 91
          }
        },
        {
          h: "قابلية نقل النموذج بانحراف مُقاس",
          p:
            "نُصمم على طبقة البروتوكول (MCP وA2A) قبل اختيار النموذج. كل ارتباط يتضمن خطة تبديل موثّقة وخط أساس مُقاس عبر مزوّدَين على الأقل.",
          rubric: {
            label: "ميزانية الانحدار مُحافَظ عليها ضمن",
            v: "0.6 / 1.0 انحراف",
            pct: 60
          }
        },
        {
          h: "القدرات تنتقل إلى فريقك",
          p:
            "تصميم التقييم ومراجعة عقود النموذج وممارسة الامتثال تدخل في عمل مهندسيك الأسبوعي. القدرة تُقاس مقابل مقياس منشور قبل وبعد.",
          rubric: {
            label: "مهندس يؤلف اختبار مسار جديد",
            v: "قبل 3/10 → بعد 8/10",
            pct: 80
          }
        }
      ]
    },
    cred: {
      tag: "المرجعية التقنية",
      h2: "تفاصيل، لا شارات.",
      sub: "النماذج التي نعمل بها، ومنهجية التقييم، وموقف الأمن والامتثال. مع طابع زمني في الأسفل.",
      cards: [
        {
          h: "النماذج التي نعمل بها",
          type: "pills",
          items: [
            "Claude (أنثروبيك)",
            "GPT (أوبن أيه آي)",
            "Gemini (جوجل)",
            "Mistral",
            "مشتقات Llama",
            "Qwen",
            "نماذج إقليمية سيادية",
            "استضافة ذاتية"
          ],
          foot: "لا مزوّد مفضّل. خطوط أساس مُقاسة لكل حالة استخدام."
        },
        {
          h: "منهجية التقييم",
          type: "list",
          items: [
            "تقييم على ثلاث مستويات: المخرج النهائي، الخطوة الوسيطة، المسار الكامل.",
            "إطار الاختبار موثّق في مستودعك.",
            "الحزمة مدمجة مع CI قبل التسليم.",
            "أهداف التغطية متفق عليها مسبقًا، وتُرفع أسبوعيًا أثناء البناء."
          ]
        },
        {
          h: "الأمن وتوطين البيانات",
          type: "list",
          items: [
            "توطين البيانات: المملكة، الاتحاد الأوروبي، الولايات المتحدة، أو استضافة ذاتية.",
            "وعي افتراضي بـ PDPL لأحمال داخل المملكة، مع توثيق شروط نقل البيانات لدى سدايا.",
            "اتفاقيات DPA وBAA موقّعة عند الحاجة.",
            "لا ندرّب نماذجنا على بيانات العميل. تنص العقود على ذلك صراحةً."
          ]
        },
        {
          h: "الإلمام التنظيمي",
          type: "list",
          items: [
            "EU AI Act: تصنيف Annex III، توثيق المطابقة، مراقبة ما بعد التسويق.",
            "EU AI Act المادة 4: منهج إلمام لطاقم العميل.",
            "PDPL السعودي: توثيق الأساس النظامي، توطين البيانات الحساسة، تقييم أثر للمعالجة عالية الخطورة.",
            "طبقة قطاعية: المالي والصحي والقطاع العام."
          ]
        }
      ],
      stamp: "آخر تحقق من الأرقام والوقائع: 2026-05-04."
    },
    faq: {
      tag: "أسئلة شائعة",
      h2: "ثمانية أسئلة يطرحها المشترون الجادون.",
      sub: "روابط مرساة لكل سؤال. اربط مباشرة من بريد المبيعات.",
      expandAll: "فتح الكل",
      collapseAll: "طي الكل",
      items: [
        {
          q: "كيف تُسعّرون؟",
          a: "نطاق ثابت ومُخرَج مكتوب لمعظم الارتباطات. للبرامج الأطول نقدم رسومًا أساسية مع رسوم نجاح مرتبطة بمؤشرات نتفق عليها مسبقًا (معدل التراجع، خفض التكلفة، زمن الامتثال). لا نُحاسب بالساعة على العمل القيادي."
        },
        {
          q: "من يملك الملكية الفكرية؟",
          a: "أنتم. كل الكود والمُحفِّزات والتقييمات والوثائق تُودَع في مستودعكم وتعود ملكيتها لكم. نحتفظ بحقوق تصنيفات أوضاع الفشل المُجهَّلة والمنهجية، لا بمنتجات عملكم."
        },
        {
          q: "ماذا لو غيّرنا النموذج خلال الارتباط؟",
          a: "هذا هو المقصود. كل نظام نُسلّمه مُصمَّم للتبديل. نوثّق العقد، نُجري الانحدار على النموذج الجديد، ونحدّث خط الأساس. تبديل النموذج ضمن الارتباط مشمول في النطاق."
        },
        {
          q: "كيف تقيسون موثوقية الوكيل؟",
          a: "تقييم على مستوى المسار، لا المخرج النهائي فقط. نُخطّط أوضاع فشلك من حركة حقيقية، نحدّد ميزانية انحدار، ونربط النشر بها. المنهجية وأهداف التغطية منشورة لكل ارتباط."
        },
        {
          q: "ما السرعة المتوقعة؟",
          a: "أول مُخرَج عملي خلال الأسبوع الأول (تأطير، خريطة فشل، تصميم تقييم). أول وكيل عامل أو إعادة هيكلة بحلول الأسبوع الرابع. تُشحن معظم الارتباطات خلال 6 إلى 12 أسبوعًا. لا نُسوّق بـ«إنتاج خلال 30 يومًا» لأن هذه المهلة هي ما أنتج التجارب الفاشلة."
        },
        {
          q: "من هو الفريق؟",
          a: "مهندسون كبار وباحثون فقط. الشخص الذي يُؤطّر الارتباط هو الشخص المناوب عند الإطلاق. لا ارتباط بأقل من شخصين قياديين."
        },
        {
          q: "هل تدرّبون فريقنا أم تبنون لنا فقط؟",
          a: "كلاهما، في كل ارتباط. نقل القدرات مشمول افتراضيًا. إن أردتم بناءً دون تمكين، يمكن استثناؤه؛ العقد الافتراضي يفترض أننا نغادر، وتنتقل ملكية التقييم وكتيّب التراجع والاستجابة للحوادث إلى مهندسيكم."
        },
        {
          q: "لماذا تنشرون أدوات مفتوحة؟ هل ملكيتنا الفكرية آمنة؟",
          a: "ملكيتكم آمنة. منتج عملكم (كود، مُحفِّزات، تقييمات، بيانات) يبقى في مستودعكم وتعود ملكيته لكم. عملنا العام (خوادم MCP، مهارات، أدوات تقييم) مستقل ولا يتضمن مادة مشتقة من العميل. تنص العقود على هذا الحد صراحةً."
        }
      ]
    },
    finalCta: {
      tag: "أخبرنا ما الذي انكسر",
      h2: "أحضر وضع الفشل والموعد النهائي.",
      p:
        "مكالمة تأطير لمدة ٣٠ دقيقة. لا حاجة لعرض. سنخبرك إن كان هذا ارتباط أفاد أم شيء يجب أن تُبقيه داخليًا.",
      micro: "لا حاجة لاتفاقية سرية في المكالمة الأولى. نوقّعها قبل مشاركة أي تفاصيل.",
      btn: "احجز مكالمة تأطير",
      formCard: {
        title: "مكالمة تأطير",
        rows: [
          { k: "المدة", v: "30 دقيقة" },
          { k: "الصيغة", v: "فيديو. توقيت الرياض / أوروبا / أمريكا" },
          { k: "أحضر", v: "وضع الفشل + الموعد النهائي" },
          { k: "ستخرج بـ", v: "ملاءمة الارتباط، مكتوبة" }
        ]
      }
    },
    footer: {
      blurb:
        "شركة هندسية تبني وكلاء ذكاء اصطناعي يصمدون أمام تقييماتك وبياناتك ومدققيك. الرياض · فرانكفورت · عن بُعد.",
      groups: [
        {
          h: "الارتباطات",
          links: [
            "بناء وكيل إنتاجي",
            "تدقيق وإعادة بناء التقييم",
            "بناء قدرات مدمجة",
            "الجاهزية للامتثال",
            "بنية قابلة لنقل النموذج",
            "استراتيجية الذكاء الاصطناعي للمجلس"
          ]
        },
        {
          h: "الممارسة",
          links: [
            "منهجية التقييم",
            "مقياس القدرات",
            "تصنيف أوضاع الفشل",
            "ما ننشره"
          ]
        },
        {
          h: "الشركة",
          links: ["مكالمة تأطير", "الخصوصية", "DPA / BAA", "scoping@avad.ai"]
        }
      ],
      stamp: "آخر تحقق من الوقائع: 2026-05-04",
      legal: "© 2026 أفاد. جميع الحقوق محفوظة."
    }
  }
};
