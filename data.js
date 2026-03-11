// Last updated: Wednesday, 11 March 2026
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
      { label: "Antwerp, Belgium", gold: true },
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
      { label: "Power BI", tooltip: "Built 5-page event study dashboard from MBA thesis data, 102-firm dataset across chemicals and pharma",             tooltip: "",  type: "bar", pct: 30 },
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
    { icon: "mountain", name: "Hiking",          desc: "Exploring trails and new landscapes on foot" },
    { icon: "book-open", name: "Reading",         desc: "Curious reader across finance, history and fiction" },
    { icon: "clock", name: "Watch Collecting",desc: "Appreciating the craft of mechanical horology" }
    // Add more: { icon: "lucide-name", name, desc }
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
      icon: "bar-chart-2",
      name: "Power BI",
      issuer: "Microsoft · Pragmatic Works",
      items: [
        { text: "Beginner to Pro Workshop",                   sub: "Pragmatic Works · Sep 2024",        status: "done"     },
        { text: "PL-300: Power BI Data Analyst (In Progress)", sub: "Microsoft Learn · est. 2026",       status: "progress" }
      ]
    },
    {
      icon: "monitor",
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
      { brand: "Omega × Swatch", name: "Moonswatch x Snoopy", icon: "clock" },
      { brand: "Seiko",          name: "Seiko 5",              icon: "clock" }
    ],
    books: [
      { title: "Snow Country",    author: "Yasunari Kawabata", status: "reading", note: "A beautifully restrained Japanese novel about impermanence and longing." },
      { title: "Add a past read", author: "Author name",       status: "read",    note: "" }
    ],
    activities: [
      { icon: "mountain", title: "Hiking", desc: "Exploring trails across Belgium and beyond. There is no better way to reset than a long walk with no agenda." },
      { icon: "users", title: "BSAAB", desc: "Active member of the Bangladeshi Student and Alumni Association in Belgium. Community, connection, and keeping roots alive while building new ones." }
    ]
  },

  // ── BLOG PAGE ──────────────────────────────────────────────
  blog: [
    {
      title:   "102 Firms, 21 Years, One Dashboard",
      date:    "March 2026",
      excerpt: "I spent a good portion of my MBA writing a thesis only corporate finance academicians and practitioners can understand. This is my attempt to present it to everyone else.",
      tags:    ["Power BI", "M&A", "Corporate Finance", "Event Study"],
      body: `
<p>I spent a good portion of my MBA writing a thesis only corporate finance academicians and practitioners can understand. This is my attempt to present it to everyone else.</p>

<h3>What the Thesis Was Actually About</h3>

<p>Mergers and acquisitions have a well-documented reputation for destroying shareholder value. The logic is straightforward enough: the acquiring firm overpays, integration is harder than expected, and the market prices that in fairly quickly. It is one of the more robust findings in corporate finance.</p>

<p>Joint ventures are a different instrument. Two firms agree to collaborate on something, pool resources, share the risk, and split whatever comes out. No full takeover, no integration headache, no single firm bearing all the downside. The question is whether that more measured form of collaboration actually benefits shareholders over time, or whether it is just a more polite way of destroying value.</p>

<p>That is what the thesis set out to test.</p>

<p>We looked at 102 European parent firms that announced joint ventures between 1998 and 2019. Fifty-six were in chemicals, forty-six in pharmaceuticals. To measure performance, we tracked each firm's stock return over the 36 months following the announcement and compared it to the STOXX Europe 600, the benchmark index for European equities. The gap between the two is what we called the buy-and-hold abnormal return, or BHAR. A positive number means the firm outperformed the market. A negative number means it did not.</p>

<p>Three findings came out of this.</p>

<p>First, chemical firms outperformed the benchmark on average, and pharmaceutical firms underperformed. The gap between sectors was visible, but not large enough to be statistically conclusive. In plain terms: the pattern was there, but the data was not strong enough to call it a rule.</p>

<p>Second, profitability before the joint venture mattered, but only in pharmaceuticals. Firms that entered a JV with a stronger return on assets tended to generate higher abnormal returns over the following three years. In chemicals, the same relationship did not hold. What drives performance in one sector does not necessarily drive it in the other.</p>

<p>Third, and most counterintuitively: in pharmaceuticals, higher research and development spending was associated with lower long-run returns. Not dramatically, and not without caveats, but the direction was consistent. More investment in innovation did not translate into better stock performance. If anything, the opposite appeared to be true.</p>

<p>That last finding is the one worth sitting with. It goes against the intuition that R&amp;D-heavy firms in a science-driven sector should be rewarded for that investment. The data, at least in this sample, suggests the market is more sceptical than that.</p>

<h3>Why I Built the Dashboard</h3>

<p>After completing my MBA, I started looking for analyst roles in corporate finance. Excel alone was not going to be enough. Power BI kept appearing in job descriptions, so I picked it up.</p>

<p>Practice datasets are fine for learning the tool. They are less useful for learning whether you actually understand what you are showing. Using my own thesis data solved that problem in both directions. I knew the content well enough to catch a misleading visual. And I cared about the output enough to keep iterating until it said what I meant.</p>

<p>The goal was not to replicate the thesis in chart form. It was to ask: what is the minimum a non-finance reader needs to see in order to genuinely understand what this research found? That question turned out to be harder than the regression work.</p>

<h3>A Tour of the Dashboard</h3>

<p>The dashboard runs across five pages. Each one builds on the last.</p>

<p><strong>Page 1: The Sample.</strong> Before any findings, here is who we looked at. 102 firms, spread across Europe, spanning industries that are similar on the surface but behave quite differently in practice. Chemical firms in the sample were older, more profitable, and spent less on R&amp;D. Pharmaceutical firms were larger, spent more on R&amp;D, and came in with lower profitability. Those differences matter for what comes next.</p>

<p><strong>Page 2: Something Happens.</strong> When a joint venture is announced, stock prices move. Sometimes sharply. This page shows a handful of individual firm trajectories around announcement dates, compared to the broader market. The point is not to draw conclusions. The point is to ask a question: does whatever is happening here persist over three years? That is what the rest of the dashboard answers.</p>

<p><strong>Page 3: The Long-Run Picture.</strong> Across the full sample, the average BHAR was close to zero and not statistically significant. In plain terms, joint ventures did not produce a reliable positive or negative effect on stock performance overall. But the sector split tells a more interesting story. Chemical firms averaged a positive 4.2% above the benchmark. Pharmaceutical firms averaged negative 2.5%. The gap existed. It just was not large enough, given the sample size, to rule out chance.</p>

<p><strong>Page 4: What Drives Returns.</strong> Profitability going into a joint venture predicts long-run stock performance, but only in pharmaceuticals. A one-unit increase in return on assets corresponded to a meaningful increase in BHAR for pharma firms. The same relationship was absent in chemicals. The implication is that sector context shapes whether firm-level fundamentals translate into market outcomes.</p>

<p><strong>Page 5: The Paradox.</strong> Pharmaceutical firms in this sample spent nearly three times as much on R&amp;D relative to total assets as chemical firms. And yet, higher R&amp;D intensity was associated with lower long-run returns in pharma, not higher. The pattern points toward what the literature calls the mining out hypothesis: at some point, additional R&amp;D investment stops generating proportional returns, and the market appears to know it.</p>

<h3>What I Learned Building It</h3>

<p>Translating regression output into a visual that communicates without equations is a different skill from running the regression in the first place. The numbers I understood. Making them legible to someone without a finance background forced a different kind of thinking.</p>

<p>The most useful constraint was imagining an HR generalist reading the dashboard for four minutes before a hiring decision. Every chart title, every callout, every axis label had to earn its place against that standard. Several charts that felt essential in the first version turned out to be noise. Cutting them made the story cleaner.</p>

<p>The most instructive technical challenge was working out how to represent time-series data that does not share a common calendar axis. Each firm's 36-month window starts on a different date, which means you cannot plot them on a standard timeline without some deliberate reshaping. Solving that forced me to think about how Power BI handles data relationships, which turned out to be the most transferable thing I learned from the project.</p>

<h3>What Is Next</h3>

<p>This dashboard is the first in a pipeline of personal projects, each one pairing a real dataset with a genuine question.</p>

<p>Next up is a deeper look at European M&amp;A activity, built on 25 years of EU merger control data. The question is a simple one: of the thousands of deals that crossed the European Commission's desk between 1990 and 2014, what actually got blocked, and why? More on that soon.</p>

<p>The Power BI certification continues. So does the Dutch.</p>
      `
    }
  ],

  // ── PORTFOLIO PAGE ─────────────────────────────────────────
  portfolio: {

    // ── CLIENT / PROFESSIONAL WORK ──────────────────────────────
    // Anonymise client names. Focus on: what you did, what the output was.
    // Fields: sector, type, tags[], desc, status ("done"|"ongoing")
    client: [
      // {
      //   sector: "Real Estate",
      //   type:   "Feasibility Study",
      //   tags:   ["Financial Modelling", "DCF", "Land Development"],
      //   desc:   "Built a full feasibility model for a mixed-use land development...",
      //   status: "done"
      // }
    ],

    // ── PERSONAL / SELF-INITIATED PROJECTS ─────────────────────
    // embed: paste your Power BI "Publish to Web" URL here when ready.
    //        Set to null to show a placeholder instead.
    // Fields: title, tags[], desc, status, embed (URL string or null)
personal: [
      {
        title:     "102 Firms, 21 Years, One Dashboard",
        tags:      ["Power BI", "M&A", "Event Study", "BHAR", "Data Visualisation"],
        desc:      "A five-page Power BI dashboard presenting the findings of my MBA thesis on European joint ventures across chemicals and pharmaceuticals (1998-2019). Covers 102 parent firms, 36-month buy-and-hold abnormal returns, ROA as a performance predictor, and the R&D paradox in pharma.",
        status:    "ongoing",
        blogSlug:  "102-firms-21-years-one-dashboard",
        embed:     "https://app.powerbi.com/view?r=eyJrIjoiNjRkYjhmNmUtMzI3Mi00OTg5LWI0MDAtMDhmODNlZmFhMWUzIiwidCI6ImMyYzI2MjIxLTY3ZDctNGUwZC05MDYwLWNmY2EyNjJjYzRmZSIsImMiOjl9"
      },
      {
        title:     "25 Years of EU Merger Control",
        tags:      ["Power BI", "M&A", "EU Commission", "Data Visualisation"],
        desc:      "A deep look at European M&A activity built on 25 years of EU merger control data. The question: of the thousands of deals that crossed the European Commission's desk between 1990 and 2014, what actually got blocked, and why?",
        status:    "coming-soon",
        blogSlug:  null,
        embed:     null
      }
    ]
  },


  // ── BLOG: PINNED READS ─────────────────────────────────────
  // Add articles, essays or Substacks you've read and want to share.
  // Fields: title, source, url, tag, date, note (your 1-2 sentence take)
  reads: [
    {
      title:  "The Best Venture Firm You've Never Heard Of",
      source: "The Generalist",
      url:    "https://www.generalist.com/p/hummingbird",
      tag:    "Venture Capital",
      date:   "Dec 2023",
      note:   "A good reminder that conviction and discipline compound quietly."
    },
    {
      title:  "AI and The Burden of Knowledge",
      source: "The Generalist",
      url:    "https://www.generalist.com/p/ai-and-the-burden-of-knowledge",
      tag:    "AI · Markets",
      date:   "Jun 2023",
      note:   "What skills truly remain valuable? For AI does not age or forget."
    }
  ],

};