/* ── Shared chrome. Injected into every page so the nav lives in one place. ── */
(function () {
  const NAME     = "Anindya Mutsuddy";
  const TITLE    = "Financial Analysis &amp; Modelling<br/>Reporting, Data &amp; Research";
  const EMAIL    = "anindya.mutsuddy@gmail.com";
  const LINKEDIN = "https://linkedin.com/in/anindyamutsuddy";
  const LOCATION = "Antwerp, Belgium";
  const PHOTO    = "pfp.jpg";

  // Five pages. Work Authorization is a document, not a peer of these — it
  // sits below the divider and out of the reading flow.
  const PAGES = [
    { icon: "user",      label: "About",          href: "index.html",            key: "about"          },
    { icon: "award",     label: "Certifications", href: "certifications.html",   key: "certifications" },
    { icon: "briefcase", label: "Portfolio",      href: "portfolio.html",        key: "portfolio"      },
    { icon: "layers",    label: "Projects",       href: "projects.html",         key: "projects"       },
    { icon: "book-open", label: "Publications",   href: "publications.html",     key: "publications"   }
  ];

  const current = document.body.dataset.page || "about";

  let navHTML = "";
  PAGES.forEach(p => {
    const active = current === p.key ? ' class="active" aria-current="page"' : "";
    navHTML += `<li><a href="${p.href}"${active}><i data-lucide="${p.icon}"></i> ${p.label}</a></li>`;
  });

  const activeWA = current === "work-authorization"
    ? ' class="active" aria-current="page"' : "";

  const html = `
<button class="hamburger" id="hamburger" aria-label="Menu">
  <span></span><span></span><span></span>
</button>
<div class="overlay" id="overlay"></div>
<aside class="sidebar">
  <div class="sidebar-profile">
    <div style="position:relative;width:100px;height:100px;margin:0 auto 16px;">
      <div class="avatar avatar-initials" style="position:absolute;inset:0;margin:0;">AM</div>
      <img src="${PHOTO}" class="avatar" alt="${NAME}" style="position:absolute;inset:0;margin:0;" onerror="this.style.display='none'"/>
    </div>
    <h1><a href="index.html" style="color:inherit;text-decoration:none;">${NAME}</a></h1>
    <p class="title">${TITLE}</p>
    <div class="open-to-work"><span class="otw-dot"></span>Open to opportunities</div>
  </div>
  <hr class="sidebar-divider"/>
  <nav role="navigation" aria-label="Site navigation">
    <p class="nav-label">Pages</p>
    <ul>${navHTML}</ul>
    <p class="nav-label" style="margin-top:18px;">Documents</p>
    <ul><li><a href="work-authorization.html"${activeWA}><i data-lucide="file-text"></i> Work Authorization</a></li></ul>
  </nav>
  <div class="sidebar-contact">
    <p>Contact</p>
    <a href="mailto:${EMAIL}?subject=CV%20Request%20%E2%80%93%20Anindya%20Mutsuddy&body=Hi%20Anindya%2C%0A%0AI%20came%20across%20your%20profile%20and%20would%20love%20to%20receive%20your%20CV.%0A%0ABest%20regards%2C" class="contact-btn contact-btn-cv"><i data-lucide="file-down"></i> Request CV</a>
    <a href="mailto:${EMAIL}" class="contact-btn"><i data-lucide="mail"></i> Email Me</a>
    <a href="${LINKEDIN}" target="_blank" rel="noopener noreferrer" class="contact-btn"><i data-lucide="linkedin"></i> LinkedIn</a>
    <a href="https://maps.google.com/?q=${encodeURIComponent(LOCATION)}" target="_blank" rel="noopener noreferrer" class="contact-btn contact-btn-ghost"><i data-lucide="map-pin"></i> ${LOCATION}</a>
  </div>
</aside>`;

  const root = document.getElementById("sidebar-root");
  if (root) root.innerHTML = html;

  // Mobile menu
  const burger = document.getElementById("hamburger");
  const overlay = document.getElementById("overlay");
  const sidebar = document.querySelector(".sidebar");
  const close = () => {
    if (burger) burger.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
    if (sidebar) sidebar.classList.remove("open");
  };
  if (burger) burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    if (overlay) overlay.classList.toggle("open");
    if (sidebar) sidebar.classList.toggle("open");
  });
  if (overlay) overlay.addEventListener("click", close);
  if (sidebar) sidebar.querySelectorAll("a").forEach(a => a.addEventListener("click", close));

  // Scroll progress
  const bar = document.getElementById("scroll-progress");
  if (bar) {
    const upd = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", upd, { passive: true });
    window.addEventListener("resize", upd);
    upd();
  }

  // Scrollspy for the in-page nav on About
  const spies = document.querySelectorAll(".scrollspy-nav .spy-link[data-spy]");
  if (spies.length && "IntersectionObserver" in window) {
    const map = new Map();
    spies.forEach(a => {
      const sec = document.getElementById(a.dataset.spy);
      if (sec) map.set(sec, a);
    });
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        spies.forEach(a => a.classList.remove("active"));
        const link = map.get(e.target);
        if (link) link.classList.add("active");
      });
    }, { rootMargin: "-15% 0px -70% 0px" });
    map.forEach((_, sec) => io.observe(sec));
  }

  if (typeof lucide !== "undefined") lucide.createIcons();
})();
