# Skymouse Website Brand Theme

## 1. Brand idea

The website should translate the logo into a digital identity that feels institutional, technical and distinctly Skymouse.

The logo combines a computer mouse, circuit paths and a grounded African colour palette. The website should therefore communicate:

- digital systems rather than generic web design
- practical engineering rather than technology theatre
- institutional credibility rather than startup hype
- African confidence with global production standards
- measurable outcomes, reflected by the line **Digital Systems. Real Impact.**

The visual style must be clean, calm and confident. It should not resemble a generic green SaaS template.

## 2. Core colour palette

The following values are taken directly from the supplied Skymouse logo.

| Token | Hex | Role |
| --- | --- | --- |
| `brand-forest` | `#0A5C2E` | Primary brand colour, dark sections, footer, strong headings |
| `brand-green` | `#0F7B3E` | Primary actions, links, active states and highlights |
| `brand-orange` | `#E86F14` | Strategic accent, selected highlights and high-priority calls to action |
| `brand-gold` | `#D4AF37` | Premium detail, circuit motifs, badges and restrained emphasis |
| `brand-ink` | `#1F2933` | Main body text and dark typography |
| `brand-white` | `#FFFFFF` | Main background and text on dark surfaces |

## 3. Supporting interface colours

Use supporting colours only to create hierarchy around the logo palette.

| Token | Suggested value | Role |
| --- | --- | --- |
| `surface` | `#FFFFFF` | Default page background |
| `surface-muted` | `#F5F7F6` | Alternating sections and card backgrounds |
| `surface-green` | `#EAF4EE` | Soft green feature panels |
| `border` | `#D9E1DC` | Borders and dividers |
| `text-muted` | `#5E6B64` | Secondary text |
| `forest-deep` | `#063F20` | Dark hero/footer variation |
| `orange-soft` | `#FFF1E7` | Orange callout background |
| `gold-soft` | `#F8F2DD` | Gold callout background |

Do not add unrelated blues, purples or neon colours. Status colours may be introduced only for functional interface messages.

## 4. Colour usage ratio

Use the palette with restraint:

- 55–65% white and light neutral surfaces
- 20–30% forest and green
- 5–10% orange
- 2–5% gold

Orange and gold are accents, not competing primary colours. Avoid placing orange, green and gold at equal visual weight in the same section.

## 5. Typography

Use **Inter** as the primary typeface because it matches the logo wordmark and works well for enterprise interfaces.

Recommended hierarchy:

- Display headings: Inter, 700–800
- Section headings: Inter, 650–750
- Body: Inter, 400–500
- Labels and metadata: Inter, 500–600 with modest letter spacing

Guidelines:

- Keep display headings compact and authoritative.
- Use sentence case for headings rather than writing everything in uppercase.
- Reserve uppercase with wider tracking for small labels, eyebrow text and navigation metadata.
- Keep body copy readable, with a maximum line length around 68–74 characters.

## 6. Logo application

Prepare three website variants from the approved logo asset:

1. Full-colour vertical logo for brand-led sections and the footer.
2. Horizontal lockup for the desktop header.
3. Mouse symbol alone for favicon, mobile navigation and compact product marks.

Rules:

- Preserve the logo proportions.
- Do not redraw, recolour or add effects to the logo.
- Maintain clear space equal to at least the width of the gold scroll wheel around the mark.
- Use the full logo on white or very light backgrounds.
- For dark backgrounds, use an approved light wordmark variant while retaining the icon colours where contrast allows.
- Do not place the logo inside an additional rounded card unless required by a specific layout.

## 7. Layout language

The rounded mouse body should influence the layout subtly rather than being copied everywhere.

Use:

- medium corner radii between 16px and 24px for feature panels
- smaller 10px to 14px radii for buttons and standard cards
- crisp rectangular content blocks for formal project and insight listings
- generous whitespace and strong grid alignment
- subtle vertical and horizontal connector lines inspired by the circuit motif

Avoid excessive pill-shaped containers, floating glass cards and oversized blobs.

## 8. Signature visual motif

Create a restrained **circuit pathway motif** based on the lower half of the logo.

It may appear as:

- thin gold connector lines between capability cards
- section dividers with small circular nodes
- a subtle background pattern in the hero or CTA section
- timeline connectors on project and process pages

The motif must remain secondary to content and should never reduce readability.

## 9. Buttons and links

### Primary button

- Background: `brand-green`
- Text: white
- Hover: `brand-forest`
- Focus ring: gold or a high-contrast green outline

### Strategic accent button

Use orange only for a single high-priority action within a view, such as **Discuss a project**.

- Background: `brand-orange`
- Text: white
- Hover: a slightly darker orange generated from the same hue

### Secondary button

- Transparent or white background
- Forest border and text
- Soft green hover background

### Text links

- Green by default
- Underline on hover and keyboard focus
- Do not rely on colour alone to indicate interaction

## 10. Cards

Cards should be differentiated by purpose.

### Solution cards

- Light neutral or white background
- Simple line icon or numbered label
- Short capability statement
- Green directional link

### Product cards

- Stronger visual treatment using deep forest surfaces
- Product interface imagery where available
- Gold details used sparingly

### Project cards

- Image-led or system-interface-led
- Clear client or sector label only where approved
- Problem, intervention and outcome framing
- No fabricated metrics

### Insight cards

- Editorial and restrained
- Minimal decoration
- Strong title hierarchy and readable metadata

## 11. Page-level theme

### Homepage

Use a light hero with strong ink typography, a forest-green capability panel and one orange strategic accent. The page should quickly establish Skymouse as a builder of institutional systems.

### About

Use white and soft-green surfaces, a strong narrative layout and a process or principles section connected by the circuit motif.

### Solutions

Use structured capability groups. Each solution must explain the institutional problem, Skymouse's approach and the result it enables.

### Products

Use darker, more product-led sections. Konvox should feel like owned intellectual property rather than another client project.

### Projects

Use an evidence-led case-study layout. Screenshots and architecture visuals should carry more weight than decorative photography.

### Insights

Use a clean editorial layout with generous typography and limited brand decoration.

### Contact

Use a confident forest panel with direct contact information and a short, purposeful enquiry form or mail action.

## 12. Motion

Motion must feel engineered and deliberate.

Use:

- subtle fade and vertical reveal on section entry
- slight card elevation or border change on hover
- restrained line-drawing motion for circuit motifs where appropriate
- reduced-motion support

Avoid parallax, bouncing icons, continuous animations and effects that make the website feel promotional rather than credible.

## 13. Imagery

Prioritise:

- real product interfaces
- project screenshots
- architecture and workflow diagrams
- authentic institutional and African business settings
- close-up technical details when relevant

Avoid:

- generic people pointing at screens
- fake code backgrounds
- glowing AI brains
- stock images that imply clients or facilities Skymouse does not have

## 14. Accessibility requirements

- Meet WCAG AA contrast for text and controls.
- Never use gold for small body text on white.
- Never use orange for long paragraphs.
- Provide visible keyboard focus states.
- Ensure all decorative circuit graphics are hidden from assistive technology.
- Keep touch targets at least 44px high.
- Test the logo and navigation at small mobile widths.

## 15. Tailwind token direction

Codex should expose the brand colours as semantic CSS variables or Tailwind theme tokens rather than scattering hex values across components.

Suggested semantic variables:

```css
:root {
  --brand-forest: #0a5c2e;
  --brand-green: #0f7b3e;
  --brand-orange: #e86f14;
  --brand-gold: #d4af37;
  --brand-ink: #1f2933;
  --surface: #ffffff;
  --surface-muted: #f5f7f6;
  --surface-green: #eaf4ee;
  --border: #d9e1dc;
  --text-muted: #5e6b64;
  --forest-deep: #063f20;
}
```

## 16. Theme acceptance criteria

The theme is correctly implemented when:

- the website is recognisably derived from the Skymouse logo without repeating the icon everywhere
- green remains the dominant brand colour
- orange directs attention rather than decorating every section
- gold appears as a premium technical detail
- Inter is used consistently
- the interface feels credible for boards, executives, public institutions and enterprise clients
- mobile, tablet and desktop layouts preserve the same visual hierarchy
- accessibility checks do not reveal colour-contrast or focus-state failures
