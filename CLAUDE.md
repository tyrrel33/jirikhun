# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio/consulting website for Jiri Khun — a Product & Agile Consultant based in Prague. Static site with no build tools, package managers, or frameworks.

## Running Locally

```bash
python -m http.server 8000
# or
php -S localhost:8000
```

There are no build steps, tests, or linting tools.

## Architecture

- `index.html` — English version (default, served at `/`)
- `cs/index.html` — Czech version (served at `/cs/`); full translation, same structure
- `styles.css` — all CSS, shared by both language versions (single source of truth for design)
- `main.js` — all JavaScript, shared by both language versions
- `photo.jpg` — profile photo (used in About section and as `og:image`)
- `favicon.svg` — favicon (navy rounded square, "JK" monogram, teal dot)

**Two-language maintenance rule:** any content change must be applied to BOTH `index.html` and `cs/index.html`. Design/behavior changes go only to the shared `styles.css` / `main.js`. Each HTML file carries its own copy of the inline SVG icon sprite — keep the sprites identical.

**Design system (CSS variables at top of `styles.css`):**
- Primary color: `#0d9488` (teal)
- Dark background: `#0f172a` (navy)
- Max container width: 1100px
- Responsive typography via `clamp()`

**Icons:** inline SVG sprite (Lucide-style, `stroke: currentColor`) at the top of `<body>`, referenced via `<svg class="icon"><use href="#i-..."/></svg>`. No emoji icons — they render inconsistently across platforms.

**Page sections (in order):** `#mainNav` → `#home` (hero) → trust strip (companies) → `#about` → `#pillars` → `#services` → `#pm-portfolio` → `#process` → `#engage` → `#experience` → `#certifications` → `#contact` → footer

**SEO/social:** each HTML file has canonical + `hreflang` alternates, Open Graph/Twitter meta (image = `photo.jpg`), and JSON-LD `Person` structured data.

**JavaScript behaviors (`main.js`, loaded with `defer`):** scroll-triggered nav styling, mobile hamburger toggle, Intersection Observer scroll-reveal animations, form submission state (button text localized via `data-sending` attribute), auto-updating copyright year. A `<noscript>` fallback in each HTML head keeps `.reveal` content visible without JS; `prefers-reduced-motion` disables animations.

**Contact form** posts to Formspree (`https://formspree.io/f/mlgwkwan`).

## Known TODOs in Code

- Experience cards (Česká spořitelna, KPMG) have HTML TODO comments — add concrete quantified outcomes (numbers must come from Jiri, never invent them)
- Testimonials section does not exist in HTML yet (CSS for `.testimonial-card` is prepared in `styles.css`) — add once real client quotes are available

## Removed Items

- `.booking-block` CSS (2026-07): external booking/calendar link was proposed and explicitly rejected — do not reintroduce
- Emoji icons (2026-07): replaced by the SVG sprite — do not reintroduce emoji as UI icons

## Other Files

- `phpinfo.php` — utility script, not part of the website content
