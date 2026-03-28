# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio/consulting website for Jiri Khun — a Product & Agile Consultant based in Prague. It is a single `index.html` file with no build tools, package managers, or frameworks.

## Running Locally

```bash
python -m http.server 8000
# or
php -S localhost:8000
```

There are no build steps, tests, or linting tools.

## Architecture

Everything lives in `index.html` — HTML structure, inline CSS (using CSS custom properties), and vanilla JavaScript. There is no external JS dependency.

**Design system (CSS variables at top of `<style>`):**
- Primary color: `#0d9488` (teal)
- Dark background: `#0f172a` (navy)
- Max container width: 1100px
- Responsive typography via `clamp()`

**Page sections (in order):** `#mainNav` → `#home` → `#about` → `#services` → `#process` → `#experience` → `#certifications` → `#testimonials` → `#contact` → footer

**JavaScript behaviors (bottom of `<body>`):** scroll-triggered nav styling, mobile hamburger toggle, Intersection Observer scroll-reveal animations, form submission state, auto-updating copyright year.

**Contact form** posts to Formspree (`https://formspree.io/f/mlgwkwan`).

## Known TODOs in Code

- Profile photo placeholder (currently "JK" initials) — replace with real image
- Testimonials section contains placeholder text — replace with real client quotes

## Other Files

- `phpinfo.php` — utility script, not part of the website content
