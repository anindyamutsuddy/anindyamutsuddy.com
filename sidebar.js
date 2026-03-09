// ============================================================
//  SIDEBAR — edit this file to update the sidebar on all pages
//  Change your name, title, links, or nav items here once
//  and every page updates automatically.
// ============================================================

(function () {

  // ── YOUR DETAILS ── edit these ──────────────────────────
  const NAME     = "Anindya Mutsuddy";
  const TITLE    = "Investment Analyst<br/>Corporate Finance Analyst";
  const EMAIL    = "anindya.mutsuddy@gmail.com";
  const LINKEDIN = "https://linkedin.com/in/anindyamutsuddy";
  const LOCATION = "Antwerp, Belgium";
  const PHOTO    = "pfp.jpg";

  // ── NAV PAGES ── add or remove pages here ───────────────
  const PAGES = [
    { label: "&#127942; Certifications", href: "certifications.html" },
    { label: "&#9997;&#65039; Blog",     href: "blog.html"           },
    { label: "&#128188; Portfolio",      href: "portfolio.html"      },
    { label: "&#128196; Publications",   href: "publications.html"   },
    { label: "&#127774; Beyond Work",    href: "beyond.html"         },
  ];
  // ────────────────────────────────────────────────────────

  // Detect which page is currently active
  const currentFile = window.location.pathname.split("/").pop() || "index.html";

  // Build nav items — About always points to index
  const onIndex = (currentFile === "index.html" || currentFile === "");
  let navHTML = `<li><a href="index.html#about"${onIndex ? ' class="active"' : ''}>&#128100; About</a></li>`;
  PAGES.forEach(p => {
    const isActive = currentFile === p.href;
    navHTML += `<li><a href="${p.href}"${isActive ? ' class="active"' : ''}>${p.label}</a></li>`;
  });

  // Build the full sidebar HTML
  const html = `
<button class="hamburger" id="hamburger" aria-label="Menu">
  <span></span><span></span><span></span>
</button>
<div class="overlay" id="overlay"></div>
<aside class="sidebar">
  <div class="sidebar-profile">
    <img src="${PHOTO}" class="avatar" alt="${NAME}"
         onerror="this.onerror=null;this.src='';this.outerHTML='<div class=\'avatar avatar-initials\'>AM</div>'"/>
    <h1>${NAME}</h1>
    <p class="title">${TITLE}</p>
    <div class="open-to-work"><span class="otw-dot"></span>Open to opportunities</div>
  </div>
  <hr class="sidebar-divider"/>
  <nav>
    <p class="nav-label">Pages</p>
    <ul>${navHTML}</ul>
  </nav>
  <div class="sidebar-contact">
    <p>Contact</p>
    <a href="mailto:${EMAIL}" class="contact-btn">&#128231; Email Me</a>
    <a href="${LINKEDIN}" target="_blank" class="contact-btn">&#128279; LinkedIn</a>
    <a href="https://maps.google.com/?q=${encodeURIComponent(LOCATION)}" target="_blank" class="contact-btn contact-btn-ghost">&#128205; ${LOCATION}</a>
  </div>
  <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">🌙 Dark mode</button>
</aside>`;

  // Inject into page
  const target = document.getElementById("sidebar-root");
  if (target) {
    target.innerHTML = html;
  } else {
    document.body.insertAdjacentHTML("afterbegin", html);
  }

  // Wire up hamburger after injection
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const sidebar   = document.querySelector(".sidebar");
    const overlay   = document.getElementById("overlay");
    if (!hamburger) return;
    hamburger.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      overlay.classList.toggle("active");
    });
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("active");
    });
    document.querySelectorAll("nav a").forEach(a => {
      a.addEventListener("click", () => {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
      });
    });
  });

})();
