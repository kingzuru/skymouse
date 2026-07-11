# Skymouse Website Delivery Sprints

## Delivery approach

Build the website in small, reviewable Codex sprints. Each sprint should leave the repository in a working state and end with a static production build.

Codex must read these files before implementation:

1. `CODEX.md`
2. `docs/BRAND_THEME.md`
3. All approved files under `content/`
4. This sprint plan

Do not complete multiple sprints in one uncontrolled pass. Work sprint by sprint, review the result, then continue.

---

## Sprint 0 — Repository and application foundation

### Goal

Create a clean Next.js foundation that can support the approved content and brand theme.

### Scope

- Initialise Next.js using the App Router, TypeScript and Tailwind CSS.
- Configure static output where practical.
- Add ESLint and formatting configuration.
- Create the base application structure.
- Add shared metadata defaults.
- Add the required routes with temporary structural shells.
- Create a clear README with local development and production build commands.
- Add a basic CI workflow for linting and production builds if appropriate.

### Required routes

- `/`
- `/about`
- `/solutions`
- `/products`
- `/projects`
- `/insights`
- `/contact`

### Suggested structure

```text
app/
components/
content/
docs/
lib/
public/
styles/
```

### Acceptance criteria

- `npm run lint` succeeds.
- `npm run build` succeeds.
- Every required route renders.
- No database, authentication or CMS is introduced.
- The application can be deployed as a static website.

### Codex prompt

```text
Implement Sprint 0 from docs/WEBSITE_SPRINTS.md. Read CODEX.md, docs/BRAND_THEME.md and all content files first. Initialise a production-ready static Next.js application using the App Router, TypeScript and Tailwind CSS. Create the required routes, project structure, metadata foundation, linting, formatting and deployment documentation. Keep every page as a simple structural shell for now. Run lint and build before finishing, and report changed files and any unresolved decisions.
```

---

## Sprint 1 — Brand system and reusable interface

### Goal

Translate the supplied logo into a coherent digital design system before building full pages.

### Scope

- Implement semantic brand tokens from `docs/BRAND_THEME.md`.
- Configure Inter typography.
- Add responsive spacing, container and grid rules.
- Build the shared header and mobile navigation.
- Build the footer.
- Create reusable components:
  - `Container`
  - `Section`
  - `SectionHeading`
  - `PageHero`
  - `Button`
  - `Card`
  - `SolutionCard`
  - `ProductCard`
  - `ProjectCard`
  - `InsightCard`
  - `CTASection`
- Add accessible focus states and reduced-motion handling.
- Prepare logo slots for full, horizontal and icon variants.
- Introduce the circuit pathway motif as a restrained reusable decorative component.

### Acceptance criteria

- Brand colours are implemented as semantic tokens.
- Hex values are not duplicated unnecessarily across components.
- Header and mobile navigation are fully keyboard accessible.
- Components work on mobile, tablet and desktop.
- Orange and gold remain restrained accents.
- There are no generic SaaS gradients, glassmorphism panels or decorative clutter.
- Lint and build succeed.

### Codex prompt

```text
Implement Sprint 1 from docs/WEBSITE_SPRINTS.md. Build the Skymouse design system exactly from docs/BRAND_THEME.md. Create semantic colour and typography tokens, shared layout primitives, accessible navigation, footer, buttons, cards, section components and a restrained circuit motif. Do not build final page compositions yet. Demonstrate the component system on an internal style reference section or temporary development page, then run lint and build.
```

---

## Sprint 2 — Homepage

### Goal

Create a strong homepage that immediately positions Skymouse as an institutional technology company, not a generic development agency.

### Scope

Build the homepage from `content/home.md` and supporting approved content.

Recommended section sequence:

1. Hero
2. Institutional positioning statement
3. Core solutions
4. Featured products, led by Konvox
5. Selected work or project evidence
6. Why Skymouse
7. Delivery principles or capability strip
8. Final call to action

### Design direction

- Use a predominantly light hero with strong typography.
- Introduce forest-green depth through one major capability panel.
- Use orange for one high-priority action.
- Use gold circuit details sparingly.
- Prefer product interfaces, diagrams and project assets over generic stock photography.
- Keep the hero direct and commercially credible.

### Acceptance criteria

- The homepage answers what Skymouse does within the first viewport.
- Konvox is presented as owned product capability.
- No fabricated metrics, client claims or testimonials appear.
- The page has a clear primary conversion action.
- Layout works across mobile, tablet and desktop.
- Metadata is complete.
- Lint and build succeed.

### Codex prompt

```text
Implement Sprint 2 from docs/WEBSITE_SPRINTS.md. Build the final Skymouse homepage using content/home.md and the approved shared content. Follow docs/BRAND_THEME.md and use only the reusable system created in Sprint 1. Position Skymouse as an independent institutional technology company. Lead with clear outcomes, feature Konvox as owned capability, use one strategic orange CTA, and avoid fabricated claims or generic agency language. Complete responsive behaviour and metadata, then run lint and build.
```

---

## Sprint 3 — About and Solutions

### Goal

Explain Skymouse's operating philosophy and turn its capabilities into commercially understandable solution areas.

### Scope

### About page

Build from `content/about.md`:

- company narrative
- mission and direction
- principles
- ownership and accountability approach
- open-source and independence philosophy
- how Skymouse works with institutions

### Solutions page

Build from `content/solutions.md`:

- governance technology
- institutional and enterprise systems
- custom platform development
- digital transformation
- websites and digital platforms
- managed open-source infrastructure
- advisory and system modernisation where approved

Each solution should communicate:

1. Institutional problem
2. Skymouse approach
3. Operational result
4. Appropriate next action

### Acceptance criteria

- About page reads like a serious company narrative, not a founder biography or startup manifesto.
- Solutions are outcome-led rather than a list of technologies.
- The pages use approved content only.
- Cross-links to products, projects and contact are present.
- Metadata, responsive behaviour, lint and build are complete.

### Codex prompt

```text
Implement Sprint 3 from docs/WEBSITE_SPRINTS.md. Build the About and Solutions pages from content/about.md and content/solutions.md. Present Skymouse as a company that owns methods, builds reusable institutional capability and remains accountable beyond launch. Structure every solution around the problem, approach and result rather than technical buzzwords. Use the approved design system, add meaningful cross-links, complete metadata, and run lint and build.
```

---

## Sprint 4 — Products and Projects

### Goal

Demonstrate owned intellectual property and delivery credibility.

### Scope

### Products page

Build from `content/products.md`:

- Konvox Digital Boards as the lead product
- approved signing or workflow capabilities
- future product placeholders only where explicitly supported by content
- clear differentiation between products and client projects

### Projects page

Build from `content/projects.md`:

- project listing
- filter or grouping only when it improves navigation
- reusable project detail route if enough approved content exists
- problem, intervention and outcome structure
- screenshots or replaceable asset placeholders

### Acceptance criteria

- Konvox is visually and strategically distinct from service offerings.
- Client work is not misrepresented as Skymouse-owned product IP.
- No unapproved client logos or metrics are used.
- Project cards support future expansion without requiring a CMS.
- Static generation works for all detail pages.
- Metadata, responsive behaviour, lint and build are complete.

### Codex prompt

```text
Implement Sprint 4 from docs/WEBSITE_SPRINTS.md. Build the Products and Projects experiences from the approved Markdown content. Make Konvox the lead owned product and clearly distinguish product IP from client delivery work. Create reusable static project structures and detail routes only where the available content supports them. Do not invent metrics, testimonials or client claims. Complete metadata, responsiveness, lint and build.
```

---

## Sprint 5 — Insights and Contact

### Goal

Create a maintainable thought-leadership channel and a direct path to commercial enquiry.

### Scope

### Insights

- Build the insights index from `content/insights.md`.
- Support local Markdown or MDX articles.
- Create static article detail routes.
- Add article metadata, reading structure and related-content links.
- Include empty-state handling if only a small number of articles exist.

### Contact

- Build from `content/contact.md`.
- Display only verified contact information.
- Add direct email and telephone actions where available.
- Add an enquiry form only if it can function without introducing unnecessary backend complexity.
- Otherwise use a clear email action with a structured subject line.
- Include privacy-conscious wording.

### Acceptance criteria

- New articles can be added without changing page components.
- Article pages have correct metadata and semantic heading structure.
- Contact links use real approved values.
- No fake physical address, team size or office imagery appears.
- The contact path is clear and works on mobile.
- Lint and build succeed.

### Codex prompt

```text
Implement Sprint 5 from docs/WEBSITE_SPRINTS.md. Build the Insights and Contact sections using content/insights.md, content/contact.md and local Markdown or MDX. Create statically generated article routes with strong metadata and readable editorial typography. Use only verified contact values. Avoid adding a backend unless essential; prefer a robust direct enquiry action for the first release. Run lint and build.
```

---

## Sprint 6 — Assets, SEO, accessibility and production hardening

### Goal

Turn the completed website into a deployment-ready corporate asset.

### Scope

- Add approved logo variants and favicon assets.
- Add Open Graph image support.
- Add sitemap and robots configuration.
- Add canonical URLs.
- Add a custom not-found page.
- Optimise images and responsive image sizing.
- Review colour contrast and keyboard navigation.
- Review heading hierarchy and landmark structure.
- Add reduced-motion support.
- Review Core Web Vitals and Lighthouse fundamentals.
- Remove dead code, placeholder content and unused assets.
- Add deployment instructions for the chosen hosting environment.
- Add security headers where compatible with static hosting.
- Confirm forms and external links behave correctly.

### Acceptance criteria

- Production build succeeds from a clean install.
- All public routes have metadata.
- Sitemap and robots files render correctly.
- Logo and favicon assets display correctly.
- No placeholder lorem ipsum or broken asset exists.
- No obvious accessibility blocker remains.
- The static output can be deployed using the documented process.

### Codex prompt

```text
Implement Sprint 6 from docs/WEBSITE_SPRINTS.md. Perform production hardening across the completed Skymouse website. Add approved brand assets, favicon and Open Graph support; complete canonical metadata, sitemap, robots, not-found handling, image optimisation, accessibility review, reduced motion, performance improvements and deployment documentation. Remove placeholders and dead code. Run a clean install, lint and production build, then report the final readiness status and any remaining content dependencies.
```

---

## Sprint 7 — Final editorial and executive review

### Goal

Make the website ready for public launch after technical completion.

### Scope

- Check all page copy against the Markdown source.
- Review consistency of Skymouse, Skymouse Holding and product naming.
- Check contact details.
- Verify every client and project reference is authorised.
- Replace temporary screenshots and placeholders with approved assets.
- Check links, spelling and punctuation.
- Review the site from the perspective of:
  - a board secretary
  - a public-sector executive
  - a procurement evaluator
  - an enterprise technology lead
- Confirm primary calls to action remain consistent.
- Conduct final mobile and desktop review.

### Acceptance criteria

- All content is approved.
- All project references are defensible.
- No placeholder remains.
- The website communicates Skymouse's position within 30 seconds.
- Launch approval is recorded.

### Codex prompt

```text
Perform Sprint 7 from docs/WEBSITE_SPRINTS.md as a final editorial and executive-quality review. Do not rewrite approved facts. Audit naming, claims, links, contact details, placeholder assets, responsive layouts and CTA consistency. Review the experience from the perspective of institutional decision-makers and procurement evaluators. Fix only clear implementation or consistency issues, run lint and build, and provide a launch checklist with any items requiring human approval.
```

---

## Recommended delivery sequence

```text
Sprint 0 → Sprint 1 → Sprint 2 → Sprint 3 → Sprint 4 → Sprint 5 → Sprint 6 → Sprint 7
```

Do not delay the first public release for advanced functionality. A fast, credible static site with strong content and evidence is more valuable than a partially built portal or CMS.

## Global definition of done

The website is ready when:

- all required routes work
- approved Markdown remains the content source of truth
- the brand theme is consistently implemented
- Konvox is clearly presented as owned product capability
- no claim or client relationship is fabricated
- mobile, tablet and desktop experiences are complete
- keyboard navigation and colour contrast are acceptable
- lint and production build succeed
- deployment instructions are accurate
- Skymouse appears as an institutional technology company rather than a generic dev shop
