# Expanded Skymouse Website Roadmap

## Purpose

This document expands the implementation backlog beyond the core launch plan in `docs/WEBSITE_SPRINTS.md`.

Use `docs/WEBSITE_SPRINTS.md` as the primary release sequence. Use this roadmap to split the work into smaller Codex-sized increments and to plan post-launch growth.

Each sprint must:

- begin by reading `CODEX.md`, `docs/BRAND_THEME.md`, `docs/WEBSITE_SPRINTS.md` and all approved files under `content/`
- leave the repository in a working state
- end with `npm run lint` and `npm run build`
- avoid fabricated claims, client outcomes, testimonials or statistics
- preserve Markdown as the editorial source of truth

---

# Milestone 1 — Foundation

## Sprint 1 — Project bootstrap

### Goal

Create a production-ready Next.js foundation.

### Scope

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint and formatting
- static-export-friendly configuration
- base application structure
- shared metadata defaults
- required route shells

### Required routes

- `/`
- `/about`
- `/solutions`
- `/products`
- `/projects`
- `/insights`
- `/contact`

### Acceptance criteria

- all required routes render
- no database, authentication or CMS is introduced
- `npm run lint` succeeds
- `npm run build` succeeds

### Codex prompt

```text
Implement Sprint 1 from docs/EXPANDED_WEBSITE_ROADMAP.md. Create the Next.js App Router foundation using TypeScript and Tailwind CSS. Preserve all existing Markdown files and documentation. Add the required routes as structural shells, configure static-export-friendly behaviour, metadata defaults, linting and formatting, then run lint and build.
```

---

## Sprint 2 — Brand system

### Goal

Translate the Skymouse logo into a reusable digital design system.

### Scope

- semantic colour tokens from `docs/BRAND_THEME.md`
- typography and spacing system
- buttons, cards and badges
- containers, sections and grid primitives
- accessible focus states
- restrained circuit-line motif inspired by the logo

### Components

- `Button`
- `Card`
- `Container`
- `Section`
- `SectionHeading`
- `PageHero`
- `Badge`
- `Tag`
- `CTASection`

### Acceptance criteria

- colours are implemented as semantic tokens
- orange and gold remain restrained accents
- components work on mobile, tablet and desktop
- there are no generic SaaS gradients or glassmorphism panels
- lint and build succeed

### Codex prompt

```text
Implement Sprint 2 from docs/EXPANDED_WEBSITE_ROADMAP.md. Build the Skymouse design system from docs/BRAND_THEME.md using semantic tokens, accessible components, responsive spacing and a restrained circuit motif. Do not build final pages yet. Run lint and build before finishing.
```

---

# Milestone 2 — Navigation and shell

## Sprint 3 — Header and footer

### Goal

Create the permanent navigation and site shell.

### Scope

- responsive desktop navigation
- accessible mobile menu
- sticky header where appropriate
- active route treatment
- footer navigation
- company, solutions, products, projects, insights and contact links
- approved social links only

### Acceptance criteria

- navigation is keyboard accessible
- mobile menu traps no focus and closes correctly
- footer content is sourced from approved Markdown
- all links work
- lint and build succeed

### Codex prompt

```text
Implement Sprint 3 from docs/EXPANDED_WEBSITE_ROADMAP.md. Build the shared responsive header, mobile navigation and footer using the approved brand system and content. Ensure keyboard accessibility, visible focus states and correct route links. Run lint and build.
```

---

# Milestone 3 — Homepage

## Sprint 4 — Homepage hero

### Goal

Communicate Skymouse's position within the first viewport.

### Scope

- headline and supporting statement from `content/home.md`
- primary and secondary calls to action
- brand-led visual treatment
- subtle logo-derived decorative elements
- no fabricated statistics

### Direction

Lead with the idea behind the brand line:

> Digital Systems. Real Impact.

The hero must present Skymouse as an institutional technology company rather than a generic development agency.

### Acceptance criteria

- visitors understand what Skymouse does within the first viewport
- primary CTA is visually clear
- hero works on mobile without decorative clutter
- lint and build succeed

### Codex prompt

```text
Implement Sprint 4 from docs/EXPANDED_WEBSITE_ROADMAP.md. Build the final homepage hero from content/home.md. Position Skymouse as an independent institutional technology company. Use the logo-derived theme, one strategic orange CTA and restrained motion. Do not add unapproved metrics or claims. Run lint and build.
```

---

## Sprint 5 — Trust and capability section

### Goal

Build credibility without relying on empty slogans.

### Scope

- selected project evidence
- sectors served where approved
- institutional capability statement
- technology or delivery capability strip
- replaceable asset slots for approved client or project imagery

### Acceptance criteria

- no fake client logos are used
- every project reference is supported by approved content
- the section feels evidential rather than promotional
- lint and build succeed

### Codex prompt

```text
Implement Sprint 5 from docs/EXPANDED_WEBSITE_ROADMAP.md. Add a trust and capability section to the homepage using only approved project and company content. Prefer project evidence and delivery principles over generic claims. Do not use unapproved client logos. Run lint and build.
```

---

## Sprint 6 — Homepage solutions

### Goal

Explain Skymouse's core commercial capabilities.

### Solution areas

- governance technology
- enterprise and institutional systems
- digital platforms
- managed open-source infrastructure
- digital transformation and modernisation
- integration and support services where approved

### Each card should include

- institutional problem
- Skymouse approach
- expected operational value
- link to the Solutions page

### Acceptance criteria

- content is outcome-led
- technology buzzwords do not dominate the copy
- cards are reusable
- lint and build succeed

### Codex prompt

```text
Implement Sprint 6 from docs/EXPANDED_WEBSITE_ROADMAP.md. Build the homepage solutions section from content/solutions.md. Structure each item around the institutional problem, Skymouse approach and operational value. Use reusable cards and run lint and build.
```

---

## Sprint 7 — Featured products

### Goal

Present Skymouse's owned product capability distinctly from client work.

### Scope

- Konvox Digital Boards as the lead product
- approved signing and workflow capability
- product screenshots or replaceable interface placeholders
- product CTAs
- clear separation between products and projects

### Acceptance criteria

- Konvox is visually prominent
- product IP is not confused with client delivery work
- no unsupported roadmap claims appear
- lint and build succeed

### Codex prompt

```text
Implement Sprint 7 from docs/EXPANDED_WEBSITE_ROADMAP.md. Build the featured products section with Konvox Digital Boards as the lead owned product. Clearly distinguish product IP from client project work. Use approved content only and run lint and build.
```

---

## Sprint 8 — Featured projects

### Goal

Demonstrate delivery credibility.

### Initial project set

Use only projects approved in `content/projects.md`, such as:

- RAMDDA
- BR Properties
- CGAPMIS, when public reference is authorised
- FCC SHHA, when public reference is authorised

### Card structure

- project or client name
- institutional context
- intervention
- delivery type
- restrained outcome statement

### Acceptance criteria

- no confidential details are exposed
- outcomes are not exaggerated
- cards support future static detail pages
- lint and build succeed

### Codex prompt

```text
Implement Sprint 8 from docs/EXPANDED_WEBSITE_ROADMAP.md. Build the featured projects section using only authorised entries from content/projects.md. Use a problem, intervention and outcome structure without inventing metrics or confidential details. Run lint and build.
```

---

## Sprint 9 — Homepage completion

### Goal

Complete the homepage and make it commercially coherent.

### Scope

- Why Skymouse section
- delivery principles
- final CTA
- homepage metadata
- responsive spacing review
- restrained animation polish

Do not add fake testimonials or a newsletter form merely to fill space.

### Acceptance criteria

- page has a clear narrative from problem to evidence to action
- CTA language is consistent
- no placeholder section remains
- lint and build succeed

### Codex prompt

```text
Implement Sprint 9 from docs/EXPANDED_WEBSITE_ROADMAP.md. Complete the homepage with Why Skymouse, delivery principles and a final call to action. Review narrative flow, responsive spacing and metadata. Do not add fake testimonials or unnecessary newsletter features. Run lint and build.
```

---

# Milestone 4 — Interior pages

## Sprint 10 — About page

### Scope

Build from `content/about.md`:

- company narrative
- mission and direction
- values and principles
- independence and open-source philosophy
- operating approach
- leadership only where approved

### Acceptance criteria

- the page reads like a serious company narrative
- it does not become a founder biography
- no fabricated dates, team size or office claims appear
- lint and build succeed

### Codex prompt

```text
Implement Sprint 10 from docs/EXPANDED_WEBSITE_ROADMAP.md. Build the About page from content/about.md. Present Skymouse as an independent institutional technology company with an accountable, open-source-led operating philosophy. Avoid startup clichés and unsupported claims. Run lint and build.
```

---

## Sprint 11 — Solutions page

### Scope

Create detailed solution sections for approved capability areas.

Each solution should communicate:

1. institutional problem
2. Skymouse approach
3. delivery model
4. operational result
5. appropriate next action

### Acceptance criteria

- solutions are commercially understandable
- pages cross-link to products, projects and contact
- technology lists remain secondary to outcomes
- lint and build succeed

### Codex prompt

```text
Implement Sprint 11 from docs/EXPANDED_WEBSITE_ROADMAP.md. Build the Solutions page from content/solutions.md. Structure each solution around the problem, approach, delivery model and operational result. Add meaningful links to products, projects and contact. Run lint and build.
```

---

## Sprint 12 — Products page

### Scope

- Konvox Digital Boards
- approved e-signature or workflow capability
- product positioning
- feature and outcome sections
- screenshots or product architecture visuals where available
- clear calls to action

### Acceptance criteria

- owned products are clearly differentiated from services
- unsupported future products are not presented as live
- product pages remain statically generated
- lint and build succeed

### Codex prompt

```text
Implement Sprint 12 from docs/EXPANDED_WEBSITE_ROADMAP.md. Build the Products page from content/products.md. Lead with Konvox, distinguish live capability from future roadmap ideas, and use approved product evidence only. Run lint and build.
```

---

## Sprint 13 — Projects and case studies

### Scope

- project listing
- optional category filters where genuinely useful
- static project detail pages
- problem, intervention and outcome structure
- approved technologies and screenshots

### Acceptance criteria

- new projects can be added through local content
- all detail pages are statically generated
- confidential or unapproved client information is excluded
- lint and build succeed

### Codex prompt

```text
Implement Sprint 13 from docs/EXPANDED_WEBSITE_ROADMAP.md. Build the Projects index and static case-study detail routes using approved project content. Support future expansion without a CMS. Do not expose confidential or unsupported information. Run lint and build.
```

---

## Sprint 14 — Insights

### Scope

- local Markdown or MDX articles
- insights index
- static article routes
- categories where useful
- reading time
- semantic editorial layout
- related article links
- syntax highlighting only when code content requires it

### Acceptance criteria

- articles can be added without changing page components
- metadata and heading hierarchy are correct
- empty and low-content states are handled
- lint and build succeed

### Codex prompt

```text
Implement Sprint 14 from docs/EXPANDED_WEBSITE_ROADMAP.md. Build the Insights section using local Markdown or MDX, static article routes, strong metadata, readable editorial typography and related-content links. Keep the implementation lightweight and run lint and build.
```

---

## Sprint 15 — Contact

### Scope

- verified email address
- verified phone number when supplied
- Botswana location wording
- LinkedIn link when approved
- direct enquiry CTA
- lightweight form only if it can work reliably without unnecessary backend complexity

### Acceptance criteria

- no fake office address or map is added
- all contact links work on mobile
- privacy wording is clear
- lint and build succeed

### Codex prompt

```text
Implement Sprint 15 from docs/EXPANDED_WEBSITE_ROADMAP.md. Build the Contact page using only verified values from content/contact.md. Do not add a fake office location or map. Prefer a reliable direct enquiry path over unnecessary backend complexity. Run lint and build.
```

---

# Milestone 5 — Professional polish

## Sprint 16 — Motion and interaction polish

### Scope

- subtle hover states
- restrained scroll reveals
- reduced-motion support
- purposeful micro-interactions
- no decorative animation that delays content

### Acceptance criteria

- motion supports hierarchy rather than spectacle
- reduced-motion preferences are respected
- performance remains strong
- lint and build succeed

### Codex prompt

```text
Implement Sprint 16 from docs/EXPANDED_WEBSITE_ROADMAP.md. Add restrained interaction and motion polish across the site. Respect reduced-motion settings and avoid heavy animation libraries unless clearly justified. Run lint and build.
```

---

## Sprint 17 — SEO and structured metadata

### Scope

- per-page metadata
- Open Graph defaults
- canonical URLs
- sitemap
- robots configuration
- favicon and application icons
- organisation JSON-LD
- article and project structured data where appropriate

### Acceptance criteria

- all public pages have meaningful metadata
- structured data contains only verified facts
- social previews render correctly
- lint and build succeed

### Codex prompt

```text
Implement Sprint 17 from docs/EXPANDED_WEBSITE_ROADMAP.md. Complete SEO, Open Graph, canonical URLs, sitemap, robots, favicon support and appropriate structured data. Use verified company facts only. Run lint and build.
```

---

## Sprint 18 — Accessibility

### Scope

- keyboard navigation
- semantic landmarks
- focus management
- contrast review
- screen-reader labels
- heading hierarchy
- accessible forms and menus

### Acceptance criteria

- no obvious keyboard trap exists
- all interactive controls have accessible names
- focus states are visible
- colour contrast is acceptable
- lint and build succeed

### Codex prompt

```text
Implement Sprint 18 from docs/EXPANDED_WEBSITE_ROADMAP.md. Perform a full accessibility review covering keyboard navigation, focus states, semantic landmarks, labels, heading hierarchy, contrast and forms. Fix implementation issues and run lint and build.
```

---

## Sprint 19 — Performance

### Scope

- image sizing and compression
- font loading
- lazy loading
- bundle review
- static generation verification
- removal of unused dependencies and assets
- caching guidance

### Target

Aim for strong Lighthouse fundamentals without chasing artificial scores at the expense of content or design.

### Acceptance criteria

- no unnecessary client-side JavaScript remains
- production bundle is reviewed
- static pages load quickly
- lint and build succeed

### Codex prompt

```text
Implement Sprint 19 from docs/EXPANDED_WEBSITE_ROADMAP.md. Optimise images, fonts, bundle size, lazy loading and static generation. Remove unused dependencies and unnecessary client-side JavaScript. Preserve design quality, then run lint and build.
```

---

# Milestone 6 — Launch

## Sprint 20 — Production deployment

### Scope

- final QA
- cross-browser checks
- static export or chosen deployment mode
- deployment documentation for `/var/www/skymouse`
- Nginx configuration guidance where applicable
- compression and cache headers
- security headers compatible with the deployment model
- analytics only when approved
- monitoring guidance

### Acceptance criteria

- clean install, lint and production build succeed
- deployment instructions are reproducible
- all links and assets work in production
- no placeholder content remains
- launch checklist is complete

### Codex prompt

```text
Implement Sprint 20 from docs/EXPANDED_WEBSITE_ROADMAP.md. Prepare the completed site for production deployment from /var/www/skymouse. Add reproducible deployment documentation, static hosting or Nginx guidance, compatible security and cache headers, final QA and a launch checklist. Run a clean install, lint and production build.
```

---

# Milestone 7 — Platform thinking

These are post-launch growth sprints. They must not delay the first public release.

## Sprint 21 — Case study engine

Create a structured case-study system with:

- challenge
- context
- intervention
- technologies
- outcomes
- screenshots
- downloadable capability or case-study PDF links when available

## Sprint 22 — Resource centre

Create a static resource library for:

- company profile
- capability statements
- brochures
- white papers
- governance resources
- product sheets

## Sprint 23 — Product showcase

Add richer product presentation through:

- product interface galleries
- interactive but lightweight walkthroughs
- architecture diagrams
- demo-request CTAs
- clear product status labels

## Sprint 24 — Careers and culture

Add only when Skymouse is actively recruiting or has meaningful culture content:

- engineering principles
- open roles
- application instructions
- working approach
- graduate or internship opportunities where approved

## Sprint 25 — Skymouse Labs

Create a home for:

- research and development
- open-source contributions
- technical experiments
- prototypes
- architecture notes
- emerging product concepts

Nothing should be presented as a commercial product until it is sufficiently mature.

---

# Recommended delivery sequence

## Launch sequence

```text
Sprint 1 → Sprint 2 → Sprint 3 → Sprint 4 → Sprint 5 → Sprint 6 → Sprint 7 → Sprint 8 → Sprint 9 → Sprint 10 → Sprint 11 → Sprint 12 → Sprint 13 → Sprint 14 → Sprint 15 → Sprint 16 → Sprint 17 → Sprint 18 → Sprint 19 → Sprint 20
```

## Post-launch sequence

```text
Sprint 21 → Sprint 22 → Sprint 23 → Sprint 24 → Sprint 25
```

The launch sequence may be compressed by following the broader sprint groupings in `docs/WEBSITE_SPRINTS.md`. Do not ask Codex to execute the entire roadmap in one uncontrolled pass.
