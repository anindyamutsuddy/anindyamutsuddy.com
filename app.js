/* ── Page renderers. Each page declares <body data-page="x"> and only the
      matching renderer finds its containers; the rest no-op. ── */
(function () {
  const d = typeof siteData !== "undefined" ? siteData : {};

  const $ = id => document.getElementById(id);
  const set = (id, html) => { const e = $(id); if (e) e.innerHTML = html; };
  const esc = s => String(s == null ? "" : s);

  const months = ["January","February","March","April","May","June","July",
                  "August","September","October","November","December"];

  /* ────────── ABOUT ────────── */
  function renderAbout() {
    if (!$("about-paragraphs")) return;

    set("about-paragraphs", d.about.paragraphs.map(p => `<p class="about-text">${p}</p>`).join(""));
    set("about-tags", d.about.tags.map(t => `<span class="tag${t.gold ? " gold" : ""}">${t.label}</span>`).join(""));

    const now = new Date();
    set("last-updated", `Last updated: <strong style="color:var(--navy);">${months[now.getMonth()]} ${now.getFullYear()}</strong>`);

    // Selected Work: deliberately mixed — one research artefact, one working
    // tool, and a door to the commissions. Neither audience is pre-committed.
    const thesis = (d.projects || [])[0];
    const tool   = (d.portfolio && d.portfolio.personal) ? d.portfolio.personal[0] : null;
    let strip = "";
    if (thesis) {
      strip += `<div class="project-card">
        <div class="project-header"><div class="project-title">${esc(thesis.title)}</div>
        <div class="project-status-dot done">Paper</div></div>
        <div class="project-desc">${esc(thesis.sample)} No significant abnormal returns overall, and I say so.</div>
        <div class="project-tags">${(thesis.stack || []).map(t => `<span class="project-tag">${t}</span>`).join("")}</div>
        <div class="project-blog-link"><a href="${thesis.slug}.html" class="blog-link-btn">Read the package &rarr;</a></div>
      </div>`;
    }
    if (tool) {
      strip += `<div class="project-card">
        <div class="project-header"><div class="project-title">${esc(tool.title)}</div>
        <div class="project-status-dot ${tool.status}">Live</div></div>
        <div class="project-desc">${esc(tool.desc)}</div>
        <div class="project-tags">${(tool.tags || []).map(t => `<span class="project-tag">${t}</span>`).join("")}</div>
        <div class="project-blog-link"><a href="${tool.embed}" target="_blank" rel="noopener" class="blog-link-btn">Open dashboard &rarr;</a></div>
      </div>`;
    }
    strip += `<div class="project-card">
      <div class="project-header"><div class="project-title">Client mandates</div>
      <div class="project-status-dot done">2 cases</div></div>
      <div class="project-desc">Real estate feasibility and capital raising, delivered to the transaction teams running them. Figures adjusted for confidentiality.</div>
      <div class="project-tags"><span class="project-tag">Feasibility</span><span class="project-tag">Debt Structuring</span></div>
      <div class="project-blog-link"><a href="portfolio.html" class="blog-link-btn">Open the portfolio &rarr;</a></div>
    </div>`;
    set("selected-work-render", strip);

    // Education
    let edu = "";
    d.education.forEach(e => {
      edu += `<div class="card">
        <div class="card-header"><span class="card-title">${esc(e.degree)}</span><span class="card-date">${esc(e.year)}</span></div>
        <p class="card-subtitle"><strong>${esc(e.school)}</strong> &middot; ${esc(e.location)}</p>
        <ul>${e.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
      </div>`;
    });
    set("education-cards", edu);

    // Skills
    set("skills-technical", d.skills.technical.map(s =>
      `<span class="skill-tag"${s.tooltip ? ` data-tooltip="${s.tooltip}"` : ""}>${esc(s.label)}</span>`).join(""));
    set("skills-soft", d.skills.soft.map(s =>
      `<span class="skill-tag"${s.tooltip ? ` data-tooltip="${s.tooltip}"` : ""}>${esc(s.label)}</span>`).join(""));

    const toolsEl = $("skills-tools");
    if (toolsEl) {
      const tags = d.skills.tools.filter(s => s.type === "tag");
      const bars = d.skills.tools.filter(s => s.type === "bar");
      toolsEl.innerHTML =
        `<div class="skill-tags" style="margin-bottom:16px;">` +
        tags.map(s => `<span class="skill-tag"${s.tooltip ? ` data-tooltip="${s.tooltip}"` : ""}>${esc(s.label)}</span>`).join("") +
        `</div>`;
      if (bars.length) {
        toolsEl.innerHTML += `<div style="display:flex;flex-direction:column;gap:12px;margin-top:4px;">` +
          bars.map(s => `<div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:0.8rem;font-weight:600;color:var(--navy);">${esc(s.label)}</span>
            <span style="font-size:0.7rem;font-weight:600;color:var(--text-light);text-transform:uppercase;letter-spacing:0.08em;">Developing &#8599;</span>
          </div>`).join("") + `</div>`;
      }
    }

    set("lang-grid", d.languages.map(l => `<div class="lang-card">
      <span class="lang-name">${esc(l.name)}</span><span class="lang-level">${esc(l.level)}</span></div>`).join(""));

    // Writing: two posts, each living on its own page, plus the pinned reads.
    const posts = (d.blog || []).filter(p => !p.hidden);
    let writing = posts.map(p => {
      const words = (p.body || "").replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
      const mins = Math.max(1, Math.ceil(words / 200));
      return `<a class="read-item" href="writing-${p.slug}.html">
        <div>
          <div class="read-meta"><span class="read-source-dot"></span>${esc(p.date)} &nbsp;&middot;&nbsp; ${mins} min read</div>
          <div class="read-title">${esc(p.title)}</div>
          <div class="read-note">${esc(p.excerpt)}</div>
        </div>
        <div class="read-arrow">&#8599;</div>
      </a>`;
    }).join("");
    set("writing-list", writing);

    set("reads-list", (d.reads || []).map(r => `
      <a class="read-item" href="${r.url}" target="_blank" rel="noopener noreferrer">
        <div>
          <div class="read-meta"><span class="read-source-dot"></span>${esc(r.source)} &nbsp;&middot;&nbsp; ${esc(r.tag)}</div>
          <div class="read-title">${esc(r.title)}</div>
          <div class="read-note">${esc(r.note)}</div>
        </div>
        <div class="read-arrow">&#8599;</div>
      </a>`).join(""));
  }

  /* ────────── CERTIFICATIONS ────────── */
  function renderCertifications() {
    const grid = $("cert-grid");
    if (!grid) return;
    const dots = { done: "\u2713", progress: "\u25cf", planned: "\u25cc" };
    d.certifications.forEach(cert => {
      const items = cert.items.map(i => `
        <li>
          <div class="cert-dot ${i.status}">${dots[i.status] || "\u25cf"}</div>
          <div><div class="cert-item-text">${esc(i.text)}</div><div class="cert-item-date">${esc(i.sub)}</div></div>
        </li>`).join("");
      grid.innerHTML += `<div class="cert-card">
        <div class="cert-card-header">
          <div class="cert-icon">${/^[a-z0-9-]+$/.test(cert.icon)
            ? '<i data-lucide="' + cert.icon + '" style="width:28px;height:28px;stroke:var(--gold);stroke-width:1.5"></i>'
            : cert.icon}</div>
          <div><div class="cert-name">${esc(cert.name)}</div><div class="cert-issuer">${esc(cert.issuer)}</div></div>
        </div>
        <ul class="cert-list">${items}</ul>
      </div>`;
    });
  }

  /* ────────── PORTFOLIO ────────── */
  function renderPortfolio() {
    const clientEl = $("portfolio-client-render");
    if (clientEl) {
      const list = (d.portfolio && d.portfolio.client) || [];
      clientEl.innerHTML = list.map(p => p.rawHTML ? p.rawHTML : "").join("");
    }
    const personalEl = $("portfolio-personal-render");
    if (personalEl) {
      ((d.portfolio && d.portfolio.personal) || []).forEach(p => {
        const embed = p.embed
          ? `<div class="embed-container"><iframe src="${p.embed}" allowFullScreen="true" loading="lazy"></iframe></div>`
          : "";
        personalEl.innerHTML += `<div class="project-card"${p.slug ? ` id="project-${p.slug}"` : ""}>
          <div class="project-header"><div class="project-title">${esc(p.title)}</div>
          <div class="project-status-dot ${p.status}">${p.status === "live" ? "Live" : "In Progress"}</div></div>
          <div class="project-desc">${esc(p.desc)}</div>
          <div class="project-tags">${(p.tags || []).map(t => `<span class="project-tag">${t}</span>`).join("")}</div>
          ${embed}
          ${p.blogSlug ? `<div class="project-blog-link"><a href="writing-${p.blogSlug}.html" class="blog-link-btn">Behind the project &rarr;</a></div>` : ""}
        </div>`;
      });
    }
  }

  /* ────────── PROJECTS: INDEX ────────── */
  function renderProjectIndex() {
    const el = $("project-index");
    if (!el) return;
    const list = d.projects || [];
    if (!list.length) { el.innerHTML = '<div class="writing-soon">Nothing published yet.</div>'; return; }

    const rows = list.map((p, i) => `
      <tr style="border-bottom:1px solid var(--border,#e6e2da);${i % 2 ? "background:rgba(0,0,0,0.015);" : ""}">
        <td style="padding:14px 10px;vertical-align:top;">
          <a href="${p.slug}.html" style="color:var(--navy);font-weight:600;font-size:0.9rem;text-decoration:none;">${esc(p.title)}</a>
          <div style="font-size:0.7rem;color:var(--text-light);text-transform:uppercase;letter-spacing:0.08em;margin-top:4px;">${esc(p.kicker)}</div>
        </td>
        <td style="padding:14px 10px;font-size:0.8rem;color:var(--text-light);vertical-align:top;">${esc(p.sample)}</td>
        <td style="padding:14px 10px;font-size:0.8rem;color:var(--text-light);vertical-align:top;">${(p.method || []).length} tests</td>
        <td style="padding:14px 10px;font-size:0.8rem;color:var(--text-light);vertical-align:top;">${(p.stack || []).join(" · ")}</td>
        <td style="padding:14px 10px;font-size:0.8rem;vertical-align:top;white-space:nowrap;">${artefactBits(p)}</td>
      </tr>`).join("");

    el.innerHTML = `<div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;">
        <thead><tr style="text-align:left;border-bottom:2px solid var(--navy);">
          <th style="padding:10px;font-size:0.68rem;text-transform:uppercase;letter-spacing:0.12em;color:var(--text-light);">Project</th>
          <th style="padding:10px;font-size:0.68rem;text-transform:uppercase;letter-spacing:0.12em;color:var(--text-light);">Sample</th>
          <th style="padding:10px;font-size:0.68rem;text-transform:uppercase;letter-spacing:0.12em;color:var(--text-light);">Method</th>
          <th style="padding:10px;font-size:0.68rem;text-transform:uppercase;letter-spacing:0.12em;color:var(--text-light);">Stack</th>
          <th style="padding:10px;font-size:0.68rem;text-transform:uppercase;letter-spacing:0.12em;color:var(--text-light);">Artefacts</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table></div>`;
  }

  function artefactBits(p) {
    const bits = [];
    if (p.paper)     bits.push("paper");
    if (p.repo)      bits.push("code");
    if (p.dataSource) bits.push("data");
    if (p.dashboard) bits.push("dashboard");
    const missing = [];
    if (!p.repo) missing.push("code");
    if (!p.dataSource) missing.push("data");
    const shown = bits.length ? bits.join(" · ") : "—";
    const todo = missing.length
      ? `<div style="font-size:0.66rem;color:#b08a3e;margin-top:4px;">missing: ${missing.join(", ")}</div>` : "";
    return shown + todo;
  }

  /* ────────── PROJECTS: DETAIL ────────── */
  function renderProjectDetail() {
    const el = $("project-detail");
    if (!el) return;
    const slug = document.body.dataset.project;
    const p = (d.projects || []).find(x => x.slug === slug);
    if (!p) { el.innerHTML = '<div class="writing-soon">Project not found.</div>'; return; }

    const row = (k, v) => v
      ? `<tr><td style="padding:9px 16px 9px 0;font-size:0.68rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-light);white-space:nowrap;vertical-align:top;">${k}</td>
             <td style="padding:9px 0;font-size:0.88rem;color:var(--text);line-height:1.6;">${v}</td></tr>`
      : "";

    const block = (title, items) => `</section>
      <section>
        <div class="section-label">${title}</div>
        <ul style="margin:0;padding-left:20px;font-size:0.9rem;line-height:1.75;color:var(--text);">
          ${items.map(i => `<li style="margin-bottom:9px;">${i}</li>`).join("")}
        </ul>`;

    let html = `
      <div class="section-label">${esc(p.kicker)}</div>
      <h2 class="section-title" style="margin-bottom:18px;">${esc(p.title)}</h2>
      <p style="font-size:1.02rem;line-height:1.7;color:var(--text);max-width:680px;margin-bottom:30px;">${esc(p.question)}</p>

      <table style="border-collapse:collapse;margin-bottom:8px;max-width:760px;">
        ${row("Sample", esc(p.sample))}
        ${row("Data", p.dataSource
            ? esc(p.dataSource)
            : '<em style="color:#b08a3e;">Not yet documented — the first thing a committee asks.</em>')}
        ${row("Stack", (p.stack || []).map(s => `<span class="project-tag">${s}</span>`).join(""))}
      </table>
      <section>`;

    html += block("Method", p.method || []);
    html += block("Result", p.result || []);
    html += block("Limits", p.limits || []);

    const links = [];
    if (p.paper)     links.push(`<a href="${p.paper}" class="pub-link-btn">Paper (PDF) &rarr;</a>`);
    if (p.repo)      links.push(`<a href="${p.repo}" target="_blank" rel="noopener" class="pub-link-btn">Code &rarr;</a>`);
    if (p.dashboard) links.push(`<a href="${p.dashboard}" target="_blank" rel="noopener" class="pub-link-btn">Dashboard &rarr;</a>`);
    if (p.blogSlug)  links.push(`<a href="writing-${p.blogSlug}.html" class="pub-link-btn">Behind the project &rarr;</a>`);

    html += `</section>
      <section>
        <div class="section-label">Artefacts</div>
        <div class="pub-links" style="display:flex;flex-wrap:wrap;gap:10px;">${links.join("")}</div>
        ${p.repo ? "" : `<p style="font-size:0.78rem;color:#b08a3e;margin-top:14px;line-height:1.6;">No repository yet. The analysis lives in Excel; porting it to R or Python is what turns this page from a description into a replication package.</p>`}
        ${p.dataSource ? "" : `<p style="font-size:0.78rem;color:#b08a3e;margin-top:8px;line-height:1.6;">Sample provenance undocumented.</p>`}
        <p style="font-size:0.8rem;margin-top:18px;">
          <a href="publications.html" style="color:var(--text-light);text-decoration:none;border-bottom:1px solid currentColor;">Full citation and abstract on Publications &rarr;</a>
        </p>
      </section>`;

    el.innerHTML = html;
  }

  /* ────────── PUBLICATIONS ────────── */
  function renderPublications() {
    const el = $("pub-container");
    if (!el) return;
    const pub = d.publications;
    const t = pub.thesis;

    const links = [];
    if (t.pdf)         links.push(`<a href="${t.pdf}" class="pub-link-btn">Paper (PDF) &rarr;</a>`);
    if (t.projectSlug) links.push(`<a href="${t.projectSlug}.html" class="pub-link-btn">Replication package &rarr;</a>`);
    if (t.dashboard)   links.push(`<a href="${t.dashboard}" target="_blank" rel="noopener" class="pub-link-btn">Dashboard &rarr;</a>`);

    el.innerHTML += `<div class="pub-card">
      <span class="pub-type thesis">MBA Thesis</span>
      <div class="pub-title">${esc(t.title)}</div>
      <div class="pub-meta">
        <strong>Anindya Mutsuddy</strong> &nbsp;&middot;&nbsp; ${esc(t.institution)} &nbsp;&middot;&nbsp; ${esc(t.year)}<br/>
        ${esc(t.degree)} &nbsp;&middot;&nbsp; Graduated <strong>${esc(t.honour)}</strong>
      </div>
      <div class="pub-abstract">${t.abstract}</div>
      <div class="pub-links">${links.join("")}</div>
    </div>`;

    (pub.papers || []).forEach(p => {
      el.innerHTML += `<div class="pub-card">
        <span class="pub-type journal">Research Paper</span>
        <div class="pub-title">${esc(p.title)}</div>
        <div class="pub-meta">
          <strong>${esc(p.authors)}</strong> &nbsp;&middot;&nbsp; ${esc(p.venue)} &nbsp;&middot;&nbsp; ${esc(p.date)}<br/>
          <a href="${p.url}" target="_blank" rel="noopener noreferrer" style="color:var(--navy);font-weight:600;font-size:0.8rem;">View on SSRN &rarr;</a>
        </div>
        <div class="pub-abstract">${p.abstract}</div>
      </div>`;
    });
  }

  /* ────────── WRITING: SINGLE POST ────────── */
  function renderPost() {
    const el = $("post-render");
    if (!el) return;
    const slug = document.body.dataset.post;
    const post = (d.blog || []).find(p => p.slug === slug);
    if (!post) { el.innerHTML = '<div class="writing-soon">Post not found.</div>'; return; }

    const words = (post.body || "").replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
    const mins = Math.max(1, Math.ceil(words / 200));

    el.innerHTML = `
      <div class="blog-post-meta">${esc(post.date)}&nbsp;&nbsp;·&nbsp;&nbsp;${mins} min read</div>
      <h1 class="blog-post-title" style="font-size:clamp(1.6rem,3.4vw,2.2rem);">${esc(post.title)}</h1>
      <div class="blog-post-tags">${(post.tags || []).map(t => `<span class="project-tag">${t}</span>`).join("")}</div>
      <div class="blog-post-body" style="display:block;">${post.body || ""}</div>
      ${backLinkFor(slug)}`;
  }

  // A post belongs to the thing it is about, so it points home to that thing.
  function backLinkFor(slug) {
    const proj = (d.projects || []).find(p => p.blogSlug === slug);
    if (proj) return `<p style="margin-top:44px;"><a href="${proj.slug}.html" class="pub-link-btn">Replication package &rarr;</a></p>`;
    const item = ((d.portfolio && d.portfolio.personal) || []).find(p => p.blogSlug === slug);
    if (item) return `<p style="margin-top:44px;"><a href="portfolio.html" class="pub-link-btn">See the dashboard &rarr;</a></p>`;
    return "";
  }

  /* ────────── DISPATCH ────────── */
  function boot() {
    renderAbout();
    renderCertifications();
    renderPortfolio();
    renderProjectIndex();
    renderProjectDetail();
    renderPublications();
    renderPost();
    if (typeof lucide !== "undefined") lucide.createIcons();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
