# Renaissance Advisory Services — Website

Source for [renadvise.com](https://renadvise.com), the RAS marketing site (LIHTC development advisory).
Single-page static site served by GitHub Pages from `main` (custom domain via `CNAME`).

- `index.html` — page content, meta tags, and JSON-LD structured data
- `css/style.css`, `js/main.js` — styles and scripts
- `assets/img/` — images (pages use the `.webp` files; `og-image.jpg` is the 1200×630 social share preview (kept as JPG for social platforms))
- `robots.txt`, `sitemap.xml`, `llms.txt` — crawler directives, sitemap, and AI-readable site summary

Pushes to `main` deploy to the live site. When content changes, update `<lastmod>` in `sitemap.xml`.
