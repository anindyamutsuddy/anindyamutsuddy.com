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
      { label: "Power BI", tooltip: "Built 5-page event study dashboard from MBA thesis data, 102-firm dataset across chemicals and pharma",  type: "bar", pct: 30 },
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
      { title: "Snow Country",    author: "Yasunari Kawabata", status: "reading", note: "A beautifully restrained Japanese novel about impermanence and longing." }
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
      slug:    "102-firms-21-years-one-dashboard",
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

<p><a href="#projects" onclick="window.location.hash='projects'" style="color:var(--gold);font-weight:600;text-decoration:none;border-bottom:1px solid var(--gold)">View the interactive dashboard &rarr;</a></p>

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
    },
    {
      title:   "Failed a Class, So That You Don't Have To. A Dial for Your Thoughts.",
      slug:    "failed-a-class-so-that-you-dont-have-to",
      date:    "March 2026",
      excerpt: "My professor passed me on the second attempt, and I am still not sure he should have.",
      tags:    ["Power BI", "Valuation", "R&D Capitalisation", "Accounting"],
      body: `
<p>My professor passed me on the second attempt, and I am still not sure he should have.</p>

<p>He is a man I genuinely admire. His academic record is the kind that makes your own CV feel like a rough draft written in crayon. He also has, by observable evidence, exceptional taste in watches, which in my personal value system counts for a great deal. None of this helped me pass his class the first time around though. Both of those things can be true simultaneously.</p>

<h3>The Problem</h3>

<p>The subject was valuation. Specifically, the part of valuation where accounting choices stop being abstract and start producing completely different numbers depending on which box someone ticked on a form years earlier. R&amp;D capitalisation is the canonical example of this. It sounds technical. It is, in fact, a simple idea dressed up in enough jargon to feel impossible until the moment it does not. In plainer terms, when a firm spends money on research and development, it has two options for how to report that spending. The first is expensing: the full cost hits the income statement immediately and reduces profit today. The second is capitalisation: the spending is treated as an investment, placed on the balance sheet as an asset, and written off gradually over its useful life.</p>

<p>Now, accountants do not capitalise R&amp;D. Under both IFRS and US GAAP, research and development costs are expensed as incurred, full stop. The standard allows capitalisation of development costs only once technical and commercial feasibility are established, and in practice, most pharmaceutical and biotech firms never clear that bar. The uncertainty is too high. The criteria are too strict. So it all goes straight through the income statement.</p>

<p>Analysts, on the other hand, argue that this produces a fundamentally misleading picture of firms that compete on innovation. A drug that takes twelve years and two billion euros to develop is not a cost. It is an investment. Treating it as a cost makes a research-intensive firm look like a struggling business when it may be building one of the most valuable asset bases in its industry. In essence, same cash left the building, same people did the work. The translation, however, is different financial statements, depending entirely on which convention you are using.</p>

<h3>What I Could Do, and What I Could Not</h3>

<p>I came to my MBA from industry. In practice, R&amp;D capitalisation is something I had encountered, understood, and applied. I have built financial models in Excel that adjusted for it. I have read the accounting policy footnotes of annual reports, noted the treatment, and rebuilt the income statement accordingly. I knew what it was. I knew why it mattered. I could do it. What I could not do, it turned out, was do it with a pen, paper, and a calculator while a clock ticked and a professor watched.</p>

<p>Those are not the same skill. In Excel, the model checks itself. The cells either balance or they do not. You can see immediately when something is wrong. You fix it, move on, and the output updates automatically. On paper, there is no such feedback. Each step has to be right before the next step means anything. The intermediate workings have to be legible. The logic has to be shown. All of it has to happen faster than your anxiety about whether any of it is right.</p>

<p>The first time I sat Dr. Wouter&#8217;s exam, I understood the concept. I had applied it in real client work. I simply could not execute it in that format, at that speed, without a spreadsheet doing the arithmetic for me. Failed. Retook. Scraped through. Thank you for the grace, Dr. Wouter. I mean that without any irony whatsoever.</p>

<h3>The Firm</h3>

<p>Transgene SA is a French biotech company. In 2013, it spent EUR 50.1 million on research and development. It generated EUR 15.7 million in revenue. The ratio of R&amp;D to revenue was approximately three to one, which is the kind of number that looks like a typo until you check the source and realise it is not.</p>

<p>The reported EBIT was negative EUR 42.9 million. The firm held roughly EUR 75 million in cash, carried essentially no financial debt, and had approximately 26.5 million shares outstanding. On paper it was a company spending itself into oblivion. The cash buffer was the only reason it was still standing.</p>

<p>There are funds that would completely disregard this company. The flipside being funds built specifically to sit with firms that look ugly on paper and ask what the business is actually worth. They do the work. They restate the financials. They look through the accounting. But they are the exception, and what interests me is what happens to everyone else. To the screen that runs at midnight and throws out every firm with a negative EBIT before a human being has looked at a single line of the annual report.</p>

<p>A reasonable person might ask why Transgene specifically. The honest answer is that its R&amp;D-to-revenue ratio is extreme enough to make the accounting distortion impossible to ignore, and that extreme cases make for clearer illustrations. The less honest answer is that I needed a firm and this one had the right numbers, and I&#8217;ve known of its numbers from my thesis work.</p>

<h3>The Numbers</h3>

<p><em>Sources: Transgene SA official press releases and AMF filings. Balance sheet figures estimated from public summaries.</em></p>

<p><strong>Transgene SA — Selected Financials (EUR thousands, base year 2013)</strong></p>

<table style="width:100%;border-collapse:collapse;font-size:0.83rem;margin:16px 0 24px;">
  <thead>
    <tr style="background:var(--navy);color:var(--white);">
      <th style="padding:9px 14px;text-align:left;font-weight:600;border-radius:6px 0 0 0;">Item</th>
      <th style="padding:9px 14px;text-align:right;font-weight:600;border-radius:0 6px 0 0;">EUR thousands</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background:rgba(201,168,76,0.12);">
      <td colspan="2" style="padding:7px 14px;font-weight:700;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.09em;color:var(--gold);">Income Statement</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);">
      <td style="padding:7px 14px;color:var(--text);">Revenue</td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">15,735</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);background:var(--off-white);">
      <td style="padding:7px 14px;color:var(--text);">R&amp;D Expenses</td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">50,063</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);">
      <td style="padding:7px 14px;color:var(--text);">EBIT (reported)</td>
      <td style="padding:7px 14px;text-align:right;color:#e53e3e;font-weight:600;">(42,858)</td>
    </tr>
    <tr style="background:rgba(201,168,76,0.12);">
      <td colspan="2" style="padding:7px 14px;font-weight:700;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.09em;color:var(--gold);">Historical R&amp;D — Research Asset Inputs</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);">
      <td style="padding:7px 14px;color:var(--text);">2009</td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">30,934</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);background:var(--off-white);">
      <td style="padding:7px 14px;color:var(--text);">2010</td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">40,181</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);">
      <td style="padding:7px 14px;color:var(--text);">2011</td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">48,679</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);background:var(--off-white);">
      <td style="padding:7px 14px;color:var(--text);">2012</td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">48,700</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);">
      <td style="padding:7px 14px;color:var(--text);">2013</td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">50,063</td>
    </tr>
    <tr style="background:rgba(201,168,76,0.12);">
      <td colspan="2" style="padding:7px 14px;font-weight:700;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.09em;color:var(--gold);">Balance Sheet (estimated)</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);">
      <td style="padding:7px 14px;color:var(--text);">Cash &amp; Equivalents</td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">75,000</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);background:var(--off-white);">
      <td style="padding:7px 14px;color:var(--text);">Financial Debt</td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">0</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);">
      <td style="padding:7px 14px;color:var(--text);">Book Value of Equity</td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">95,000</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);background:var(--off-white);">
      <td style="padding:7px 14px;color:var(--text);">Shares Outstanding (thousands)</td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">26,500</td>
    </tr>
    <tr style="background:rgba(201,168,76,0.12);">
      <td colspan="2" style="padding:7px 14px;font-weight:700;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.09em;color:var(--gold);">Operational Inputs</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);">
      <td style="padding:7px 14px;color:var(--text);">Reported Capex</td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">2,500</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);background:var(--off-white);">
      <td style="padding:7px 14px;color:var(--text);">Reported D&amp;A</td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">1,200</td>
    </tr>
    <tr>
      <td style="padding:7px 14px;color:var(--text);">Delta Non-cash NWC</td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">500</td>
    </tr>
  </tbody>
</table>

<p><strong>WACC Assumptions (bottom-up, base year 2013)</strong></p>

<table style="width:100%;border-collapse:collapse;font-size:0.83rem;margin:16px 0 24px;">
  <thead>
    <tr style="background:var(--navy);color:var(--white);">
      <th style="padding:9px 14px;text-align:left;font-weight:600;border-radius:6px 0 0 0;">Input</th>
      <th style="padding:9px 14px;text-align:right;font-weight:600;border-radius:0 6px 0 0;">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid var(--border);">
      <td style="padding:7px 14px;color:var(--text);">Risk-free rate <span style="font-size:0.72rem;color:var(--text-light);">(French 10-yr OAT, 2013)</span></td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">3.0%</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);background:var(--off-white);">
      <td style="padding:7px 14px;color:var(--text);">Unlevered beta <span style="font-size:0.72rem;color:var(--text-light);">(Damodaran biotech industry)</span></td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">1.41</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);">
      <td style="padding:7px 14px;color:var(--text);">Equity Risk Premium <span style="font-size:0.72rem;color:var(--text-light);">(Damodaran implied ERP, France 2013)</span></td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">5.5%</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);background:var(--off-white);">
      <td style="padding:7px 14px;color:var(--text);">Tax rate <span style="font-size:0.72rem;color:var(--text-light);">(French marginal corporate rate)</span></td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">33.3%</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);">
      <td style="padding:7px 14px;color:var(--text);">WACC — high-growth period</td>
      <td style="padding:7px 14px;text-align:right;font-weight:600;color:var(--navy);">10.7%</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);background:var(--off-white);">
      <td style="padding:7px 14px;color:var(--text);">WACC — stable period</td>
      <td style="padding:7px 14px;text-align:right;font-weight:600;color:var(--navy);">8.5%</td>
    </tr>
    <tr style="border-bottom:1px solid var(--border);">
      <td style="padding:7px 14px;color:var(--text);">Terminal growth rate</td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">3.0%</td>
    </tr>
    <tr>
      <td style="padding:7px 14px;color:var(--text);">Stable after-tax ROIC</td>
      <td style="padding:7px 14px;text-align:right;color:var(--text);">10.0%</td>
    </tr>
  </tbody>
</table>

<h3>The Flip</h3>

<p>In my model, the capitalisation rate is set to 100 percent and left there. The load-bearing assumption is the amortisation life: how many years does this year&#8217;s R&amp;D spending continue to generate returns?</p>

<p>Three years of useful life produces equity value of negative EUR 11 per share. Nine years produces positive EUR 1.07 per share. Fifteen years produces EUR 3.05. The science did not change between these scenarios. The cash did not change. The number of employees and patents and grams of biological material in cold storage did not change. One number changed, and the firm moved from worthless to worth owning.</p>

<p>The nine-year break-even sits within Damodaran&#8217;s stated credible range for pharmaceutical R&amp;D. It does not require an aggressive assumption to produce a positive valuation. It requires a reasonable one.</p>

<p>It is worth being precise about what is happening below eleven years of amortisation life. At L&#8202;=&#8202;9 and L&#8202;=&#8202;10, equity value is positive because of the EUR 75 million cash buffer, not because operations themselves produce positive value. The value of operations remains negative until L equals eleven. The model discloses this. The dashboard discloses this. I am disclosing it here as well. The cash is real. The disclosure is the point.</p>

<p>This is not investment advice. Transgene is being used as an illustration. The underlying science may or may not have produced returns. I genuinely do not know. I do know that the accounting convention made it look worse than any reasonable set of assumptions would suggest it actually was.</p>

<h3>The Simulator</h3>

<p><a href="#portfolio" onclick="event.preventDefault();window.location.hash='portfolio'" style="color:var(--gold);font-weight:600;text-decoration:none;border-bottom:1px solid var(--gold)">View the simulator →</a></p>

<p>What I built is a single-page Power BI dashboard with one slider. Set the amortisation life anywhere between three and twenty years and watch six KPI cards update simultaneously: amortisation charge, adjusted EBIT, ROIC, stage one growth rate, value of operations, and equity value per share. The equity value card is red when the number is negative and turns teal when it crosses zero. There is a line chart showing the full valuation curve across all eighteen assumptions at once, so the shape of the relationship is always visible regardless of where the slider sits. There is a bar chart comparing GAAP EBIT to adjusted EBIT side by side, the right bar climbing and changing colour as the slider moves.</p>

<p>There was also meant to be a waterfall chart. A waterfall chart shows the bridge from GAAP EBIT through the R&amp;D add-back and the amortisation deduction to the adjusted EBIT result. It is a natural visual for this kind of analysis. Power BI&#8217;s waterfall chart, in its current form, does not agree with this assessment. After approximately two hours of discussion, I replaced it with a bar chart. The bar chart makes the same point. Some battles are not worth having.</p>

<p>Translating the model to a plain CSV was an interesting challenge. Hardcoding numbers is a cardinal sin for any analyst, and I&#8217;ve worn down some of my teeth while doing so. The model now lives in the CSV. Power BI is just the interface. This was an experiment of sorts, to see if I can translate my knowledge into an interactable visual.</p>

<h3>The Thing This Is Actually About</h3>

<p>Financial statements are not a photograph of a business. They are a set of choices about how to represent a business, made by accountants operating under specific rules, in a specific regulatory environment, for a specific set of users.</p>

<p>Analysts who use those statements as direct inputs to valuation models without interrogating the underlying choices are not doing valuation. They are doing arithmetic on numbers someone else selected using conventions someone else designed for purposes that may have nothing to do with estimating intrinsic value.</p>

<p>R&amp;D capitalisation is the clearest illustration of this because the effect is so large, and the convention so blunt. Expense everything immediately and a pharmaceutical company looks like a machine that converts cash into losses. Capitalise the development investment and the same company, in the same year, with the same scientists working on the same drugs, looks like a business that may be building something genuinely valuable.</p>

<p>Neither picture is the truth. Both are approximations. The question is which approximation is more useful for the decision you are trying to make.</p>

<h3>An Acknowledgement</h3>

<p>Dr. Wouter taught this material with rigour, good humour, and what I can only describe as the patient air of someone who has watched many students make exactly the same mistakes and has chosen, as a matter of professional dignity, to remain calm about it.</p>

<p>I failed his class. I retook it. I barely passed. And then I went and built a dashboard about R&amp;D capitalisation for fun, after hours, of my own accord, using the exact methodology from his course material applied to a French biotech company&#8217;s published filings.</p>

<p>I think that says something about the quality of his teaching. He would probably prefer I think it says something about my persistence. We can agree to disagree.</p>

<p>The watch collection, for the record, remains an inspiration.</p>

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
      },
      {
        title:     "Failed a Class, So That You Don't Have To. A Dial for Your Thoughts.",
        tags:      ["Power BI", "Valuation", "R&D Capitalisation", "Accounting"],
        desc:      "A single-page Power BI simulator with one slider: move it from zero to one hundred percent R&D capitalisation and watch EBIT, ROA, EV/EBITDA and net income update live, on real pharma data, without a single euro of cash changing hands. Built after failing Dr. Wouter's valuation class. Dedicated to him accordingly.",
        status:    "coming-soon",
        blogSlug:  "failed-a-class-so-that-you-dont-have-to",
        embed:     "https://app.powerbi.com/view?r=eyJrIjoiNzc0YjRlNTYtNThiNy00YTVkLWIyZjEtYjM1MWJhN2I2OTZiIiwidCI6ImMyYzI2MjIxLTY3ZDctNGUwZC05MDYwLWNmY2EyNjJjYzRmZSIsImMiOjl9"
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