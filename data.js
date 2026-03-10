// ============================================================
//  SITE DATA · the only file you need to edit
//  No HTML knowledge needed. Follow the patterns below.
// ============================================================

const siteData = {

  // ── INDEX: ABOUT ───────────────────────────────────────────
  // Edit the prose and tags shown on your About section
  about: {
    paragraphs: [
      `As an <strong>MBA graduate (Cum Laude, KU Leuven)</strong>, I chose corporate finance because numbers directly shape how businesses grow, raise capital and create value, and I want to contribute to that process with rigour and real commercial intent.`,
      `Relocated to Belgium to build a career in corporate finance, I bring <strong>advisory exposure and live deal experience</strong>, and I want to work for organisations where financial analysis drives meaningful decisions.`,
      `Currently on a <strong>zoekjaar permit</strong>, actively seeking an analyst role in corporate finance, investment banking or commercial lending in the <strong>Benelux region</strong>.`
    ],
    tags: [
      { label: "📍 Antwerp, Belgium", gold: true },
      { label: "Corporate Finance",   gold: false },
      { label: "Investment Banking",  gold: false },
      { label: "DCF & Valuation",     gold: false },
      { label: "Benelux",             gold: false }
    ],
    // lastUpdated is set automatically · no need to edit this
  },

  // ── INDEX: EXPERIENCE ──────────────────────────────────────
  experience: [
    {
      title:    "Investment Analyst / Corporate Finance Analyst",
      dates:    "Apr 2022 – Dec 2023",
      company:  "ZA Capital Advisory",
      subtitle: "Boutique Investment Bank · Dhaka, Bangladesh",
      bullets: [
        "Managed client mandates across real estate, energy, manufacturing and technology, spanning early-stage start-ups to international conglomerates",
        "Built DCF valuations, sensitivity analyses and feasibility models across a wide range of financing decisions, from runway and treasury planning to syndicated credit facilities",
        "Coordinated multidisciplinary deal teams to structure transactions, ensuring full regulatory and documentation compliance"
      ]
    },
    {
      title:    "Research Trainee (Internship)",
      dates:    "Jan 2022 – Apr 2022",
      company:  "CandleStone Investment Partners Limited",
      subtitle: "Asset Management · Dhaka, Bangladesh",
      bullets: [
        "Executed intra-day trades for a BDT 1B (~$10M) mutual fund",
        "Supported institutional client reporting and custom index construction for 5+ institutional investors",
        "Foundational exposure to equity research and risk monitoring processes"
      ]
    }
    // Add more: { title, dates, company, subtitle, bullets: [] }
  ],

  // ── INDEX: EDUCATION ───────────────────────────────────────
  education: [
    {
      degree:   "Master of Business Administration, Corporate Finance Track",
      year:     "2025",
      school:   "KU Leuven",
      location: "Antwerp, Belgium",
      bullets: [
        "Graduated <strong>Cum Laude</strong>",
        "Thesis: Long-run performance effects of joint ventures in European M&A across the chemical and pharmaceutical sectors (event study)"
      ]
    },
    {
      degree:   "Bachelor of Business Administration, Finance & Banking",
      year:     "2021",
      school:   "Bangladesh University of Professionals",
      location: "Dhaka, Bangladesh",
      bullets: [
        "Cumulative GPA: <strong>3.52 / 4.0</strong>"
      ]
    }
    // Add more: { degree, year, school, location, bullets: [] }
  ],

  // ── INDEX: SKILLS ──────────────────────────────────────────
  skills: {
    technical: [
      { label: "Financial Modelling",    tooltip: "Core skill across all deal work, from startup runway to large-scale syndications" },
      { label: "DCF Analysis",           tooltip: "Applied in feasibility studies and capital raising mandates" },
      { label: "Sensitivity Analysis",   tooltip: "3-scenario models used in live financing decisions" },
      { label: "Valuation",              tooltip: "Delivered across real estate, energy, tech and manufacturing" },
      { label: "Credit Analysis",        tooltip: "Assessed debt capacity and risk for institutional financing" },
      { label: "Due Diligence",          tooltip: "Conducted across multiple business units for growth equity mandates" },
      { label: "Debt & Equity Financing",tooltip: "Structured instruments from syndicated debt to private placements" },
      { label: "Private Placements",     tooltip: "Supported equity offload to institutional investors" }
    ],
    tools: [
      { label: "Excel (Advanced)",      tooltip: "Primary modelling tool across all deal work",          type: "tag" },
      { label: "PowerPoint (Advanced)", tooltip: "Built investor decks and client-facing presentations", type: "tag" },
      { label: "IFRS ↗",               tooltip: "",                                                      type: "tag" },
      { label: "Power BI",             tooltip: "",  type: "bar", pct: 30 },
      { label: "SAP S/4HANA",          tooltip: "",  type: "bar", pct: 20 }
      // type: "tag" = pill badge | type: "bar" = progress bar (pct: 0-100)
    ],
    soft: [
      { label: "Stakeholder Management",        tooltip: "Managed relationships across clients, regulators and deal teams" },
      { label: "Client Relationships",          tooltip: "Full client lifecycle management from mandate to disbursement" },
      { label: "Cross-functional Collaboration",tooltip: "Coordinated legal, financial and operational teams on transactions" },
      { label: "Presentation & Reporting",      tooltip: "Delivered board-level and investor-facing output" }
    ]
  },

  // ── INDEX: LANGUAGES ───────────────────────────────────────
  languages: [
    { name: "English", level: "C2 · Proficient", pct: 100 },
    { name: "Bangla",  level: "Native",           pct: 100 },
    { name: "Dutch",   level: "A1 · Learning",    pct: 15  },
    { name: "French",  level: "A1 · Beginner",    pct: 10  }
    // Add more: { name, level, pct: 0-100 }
  ],

  // ── INDEX: INTERESTS ───────────────────────────────────────
  interests: [
    { emoji: "🦅", name: "Hiking",          desc: "Exploring trails and new landscapes on foot" },
    { emoji: "📚", name: "Reading",         desc: "Curious reader across finance, history and fiction" },
    { emoji: "⌛", name: "Watch Collecting",desc: "Appreciating the craft of mechanical horology" }
    // Add more: { emoji, name, desc }
  ],

  // ── CERTIFICATIONS PAGE ────────────────────────────────────
  certifications: [
    {
      icon: "🇳🇱",
      name: "Dutch Language",
      issuer: "CVO Encora · NT2 Programme",
      items: [
        { text: "NT2 1.1 (Certified)",   sub: "CVO Encora",  status: "done"     },
        { text: "NT2 1.2 (In Progress)", sub: "CVO Encora",  status: "progress" }
      ]
    },
    {
      icon: "",
      name: "Power BI",
      issuer: "Pragmatic Works",
      items: [
        { text: "Beginner to Pro Workshop", sub: "Pragmatic Works · 03 Sep 2026", status: "done" }
      ]
    },
    {
      icon: "",
      name: "SAP S/4HANA",
      issuer: "SAP / Udemy",
      items: [
        { text: "SAP S/4HANA Fundamentals (In Progress)", sub: "Udemy", status: "progress" }
      ]
    }
    // status options: "done" | "progress" | "planned"
  ],

  // ── PUBLICATIONS PAGE ──────────────────────────────────────
  publications: {
    thesis: {
      title:       "Long-run Performance Effects of Joint Ventures: European M&A in the Chemical and Pharmaceutical Sectors",
      institution: "KU Leuven",
      year:        "2025",
      degree:      "Master of Business Administration, Corporate Finance Track",
      honour:      "Cum Laude",
      abstract:    "This study examines whether European parent firms engaging in joint ventures (chemical vs. pharmaceutical; 1998 to 2019) generate long-term abnormal returns. 36-month BHARs were computed for 102 firms and regression analysis was applied to test the role of profitability (ROA) and R&D intensity. Results show chemicals outperform over three years while pharma does not (difference not significant), and a skewness-adjusted test confirms no significant abnormal returns overall. ROA predicts BHAR in pharma (not chemicals), while R&D shows a weak negative relationship in pharma, suggesting investors may prioritize operational efficiency over R&D spend in that sector."
    },
    papers: [
      {
        title:    "Factors Affecting the Success of Female Business Entrepreneurs in Bangladesh",
        authors:  "Anindya Mutsuddy",
        venue:    "SSRN",
        date:     "December 2019 (posted March 2023)",
        url:      "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4381557",
        abstract: "This study examines the factors driving the success of female entrepreneurs in Bangladesh, drawing on survey data from 177 business owners. Using factor analysis and multivariate regression, it identifies key success drivers including efficiency in handling unexpected events, family support, technical skills, and leadership style. This paper represents my foundational exposure to independent research, applying quantitative methods to a real-world economic question before formal postgraduate training."
      }
    ]
  },

  // ── BEYOND WORK PAGE ───────────────────────────────────────
  beyond: {
    currently: {
      reading:  { title: "Snow Country", author: "Yasunari Kawabata" },
      watching: null
    },
    watches: [
      { brand: "Omega × Swatch", name: "Moonswatch x Snoopy", emoji: "⭐" },
      { brand: "Seiko",          name: "Seiko 5",              emoji: "⌛" }
    ],
    books: [
      { title: "Snow Country",    author: "Yasunari Kawabata", status: "reading", note: "A beautifully restrained Japanese novel about impermanence and longing." },
      { title: "Add a past read", author: "Author name",       status: "read",    note: "" }
    ],
    activities: [
      { emoji: "🦅", title: "Hiking", desc: "Exploring trails across Belgium and beyond. There is no better way to reset than a long walk with no agenda." },
      { emoji: "🤝", title: "BSAAB", desc: "Active member of the Bangladeshi Student and Alumni Association in Belgium. Community, connection, and keeping roots alive while building new ones." }
    ]
  },

  // ── BLOG PAGE ──────────────────────────────────────────────
  blog: [
    // { title: "Post Title", date: "March 2026", excerpt: "A short summary...", url: "#" }
  ],

  // ── PORTFOLIO PAGE ─────────────────────────────────────────
  portfolio: [
    // { sector: "Real Estate", type: "Debt Advisory", desc: "..." }
  ]

};
