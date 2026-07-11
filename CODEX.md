# Codex Implementation Brief

## Objective

Build a fast, polished and fully responsive corporate website for Skymouse Holding (Pty) Ltd. The website must establish Skymouse as a credible Botswana technology company that develops institutional platforms, governance technology, enterprise systems and managed open-source infrastructure.

## Required reading order

Before making implementation changes, read and follow:

1. `CODEX.md`
2. `docs/BRAND_THEME.md`
3. `docs/WEBSITE_SPRINTS.md`
4. All approved Markdown files under `content/`

Work one sprint at a time. Each sprint must end with linting and a successful production build before the next sprint begins.

## Technology

Use:

- Next.js with the App Router
- TypeScript
- Tailwind CSS
- Static generation and static export where practical
- Local Markdown or typed content files
- Next.js metadata APIs

Do not introduce a database, authentication layer or headless CMS in the first release.

## Required routes

- `/`
- `/about`
- `/solutions`
- `/products`
- `/projects`
- `/insights`
- `/contact`

Project and insight detail routes may be added from local content.

## Content source

Treat all files under `content/` as the approved source copy. Do not invent client claims, awards, statistics, partnerships or outcomes that are not present in those files. Where a project outcome is not stated, use restrained wording such as “platform developed” or “solution delivered” rather than fabricating quantified impact.

## Brand direction

The design should feel:

- Independent
- African and globally credible
- Enterprise-grade
- Technically capable
- Calm, clean and confident
- Modern without looking like a generic SaaS template

Implement the detailed palette, typography, logo handling, layout language and circuit motif defined in `docs/BRAND_THEME.md`.

Core logo-derived colours:

- Forest: `#0A5C2E`
- Green: `#0F7B3E`
- Orange: `#E86F14`
- Gold: `#D4AF37`
- Ink: `#1F2933`

Avoid excessive gradients, glassmorphism, cartoon illustrations, stock-code imagery and crowded layouts. Use strong typography, deliberate whitespace, restrained motion and clear visual hierarchy.

## Positioning rules

Skymouse must not be described primarily as:

- A web-design agency
- A freelance development company
- A body-shopping or outsourced coding firm
- An IoT company

Present Skymouse as a technology company that owns methods, develops reusable platforms and stays accountable for systems beyond launch.

## Design system

Create reusable components for:

- Site header and mobile navigation
- Footer
- Container
- Page hero
- Section heading
- Primary and secondary buttons
- Solution card
- Product card
- Project card
- Insight card
- Trust or capability strip
- Call-to-action section

Use accessible semantic HTML, visible focus states, sufficient contrast and keyboard-friendly navigation.

## Homepage priorities

The homepage should answer, in this order:

1. What does Skymouse do?
2. Who does it serve?
3. What platforms and capabilities does it have?
4. What work demonstrates credibility?
5. Why should an institution choose Skymouse?
6. What should the visitor do next?

## Imagery

Use project screenshots, product interfaces, institutional architecture graphics and authentic Botswana/African business imagery where available. Until approved assets are supplied, use clean placeholders that are easy to replace. Do not use fake client logos.

## SEO and production requirements

Add:

- Per-page title and description metadata
- Open Graph defaults
- Canonical URLs
- Sitemap
- Robots file
- Favicon and application icons
- Custom not-found page
- Optimised images
- Responsive testing
- Sensible heading hierarchy
- Contact links using real values from `content/contact.md`

## Content rendering

The website may either parse Markdown directly or convert the content into typed data structures. Preserve Markdown files as the editorial source of truth.

## Sprint control

Use `docs/WEBSITE_SPRINTS.md` as the delivery sequence and acceptance checklist. Do not skip the foundation and design-system sprints to jump directly into page generation. Report at the end of every sprint:

- files created or changed
- tests and build commands run
- decisions made
- unresolved content or asset dependencies

## Definition of done

The first release is complete when:

- All required routes are implemented
- Content is drawn from the approved Markdown files
- The design works on mobile, tablet and desktop
- The detailed logo-derived theme is consistently implemented
- Lighthouse fundamentals are addressed
- Static production build succeeds
- There are no fabricated claims or placeholder lorem ipsum passages
- A concise deployment guide is included
