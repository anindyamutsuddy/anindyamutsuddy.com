# anindyamutsuddy.com

Static site. Five pages plus one page per artefact. No build step — every file
here is exactly what GitHub Pages serves.

```
index.html                     About (+ Writing)
certifications.html            Academic and professional certifications
portfolio.html                 Client mandates and the R&D capitalisation model
projects.html                  Index of research projects
jv-long-run-performance.html   MBA thesis — replication package
publications.html              Thesis and published paper
writing-<slug>.html            One page per post
work-authorization.html        Belgian work authorization (not in the main nav)

style.css     all styling
layout.js     sidebar, nav, scroll progress, scrollspy
app.js        page renderers, reads everything from data.js
data.js       all content
```

## Editing content

Almost all text lives in `data.js`, not in the HTML. Change it there and every
page picks it up.

- New **post**: append to the `blog` array in `data.js`, copy any
  `writing-*.html`, then change three things in the copy: `data-post` on
  `<body>`, the `<title>`, and `rel="canonical"`.
- New **project**: append to the `projects` array, copy
  `jv-long-run-performance.html`, change `data-project`, `<title>`, canonical.

## Pre-flight before publishing

- [ ] `papers/mba-thesis-jv.pdf` — **absent. The Papers link currently 404s.**
      This is the single most expected artefact in a PhD application.
- [ ] `pfp.jpg` — sidebar portrait. Falls back to "AM" initials if missing.
- [ ] `og-image.png` — 1200×630 social preview card. Without it, shared links
      show no image.
- [ ] `dataSource` is `null` in `projects[0]` — the thesis page shows an amber
      "not yet documented" note. Fill in SDC Platinum / Zephyr / Bloomberg.
- [ ] `repo` is `null` in `projects[0]` — no replication package yet.
- [ ] The thesis post still promises "25 years of EU merger control" as next up.
      That project was cut; the sentence needs replacing.

## Publishing

Repo → Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder
`/ (root)`. `CNAME` points the site at `anindyamutsuddy.com`; delete that file
if you'd rather use the `github.io` address, and update the canonical and
`og:url` tags in each page if the domain changes.
