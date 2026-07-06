# Visual Specification

## 1. Document Information

| Field | Value |
| --- | --- |
| Project | Harsh Kumar Jha Portfolio Website |
| Version | 1.1 |
| Status | Implementation guide |
| Owner | Harsh Kumar Jha |
| Purpose | Define page-level visual requirements that apply the product, content, design, and component documentation. |
| Dependencies | `docs/FOUNDATION.md`, `docs/PRD.md`, `docs/CONTENT_SPEC.md`, `docs/DESIGN_BRIEF.md`, `docs/DESIGN_SYSTEM.md`, `docs/COMPONENT_SPEC.md`, `docs/TECH_SPEC.md` |

This document does not introduce new product scope, content, assets, features, claims, or interaction models.

### Authority Model

| Documentation Area | Owner | Rule |
| --- | --- | --- |
| Product truth, identity, constraints, content priority | `docs/FOUNDATION.md` | Highest-priority source. |
| Functional scope and acceptance criteria | `docs/PRD.md` | Defines what must exist. |
| Approved visible text, labels, URLs, and metadata | `docs/CONTENT_SPEC.md` | No visible copy may be invented here. |
| Visual philosophy and design intent | `docs/DESIGN_BRIEF.md` | Defines how the site should feel. |
| Exact tokens and component primitives | `docs/DESIGN_SYSTEM.md` | Owns spacing, typography, color, radius, shadow, motion, breakpoints, and primitive rules. |
| Component responsibilities | `docs/COMPONENT_SPEC.md` | Owns component inventory, props, states, accessibility, and dependencies. |
| Engineering implementation | `docs/TECH_SPEC.md` | Owns framework, rendering, styling, performance, SEO, and code architecture. |
| Page-level visual application | `docs/VISUAL_SPEC.md` | Applies the above sources to visible layout and presentation. |

If this document conflicts with another source, use the owner table above to resolve the conflict. Do not use this document to override exact tokens from `docs/DESIGN_SYSTEM.md` or component behavior from `docs/COMPONENT_SPEC.md`.

### Testability Rule

Every requirement in this file must be verifiable by at least one of:

- DOM/content inspection.
- Visual review at mobile, tablet, desktop, and ultra-wide widths.
- Keyboard interaction review.
- Reduced-motion review.
- Lighthouse or equivalent performance/accessibility review.
- Source scan for forbidden content, unsupported assets, arbitrary values, and unapproved links.

Subjective language in this document is explanatory only. Acceptance is based on the observable requirements and visual QA checklist.

## 2. Overall Visual Philosophy

The portfolio must present a restrained technical product surface. It must not look like a student template, startup landing page, decorative AI demo, or visual experiment.

| Principle | Implementable Requirement | Verification |
| --- | --- | --- |
| Credibility first | Every visible section supports evaluation of identity, projects, experience, skills, education, resume access, or contact. | No decorative-only sections exist. |
| Evidence first | Projects receive stronger placement and visual weight than skills, education, resume, and contact. | Projects appear immediately after Hero on Home and use the strongest repeated content layout. |
| Minimal but not empty | Required content is structured clearly without filler media or generic paragraphs. | No placeholder sections, stock visuals, or invented intros appear. |
| Technical restraint | UI uses tokens, alignment, readable typography, and light surfaces rather than spectacle. | No hardcoded arbitrary visual values or forbidden effects are present. |
| Honest status | In-progress projects are presented as in progress only. | No visual treatment implies launch, production use, metrics, repositories, demos, or user validation. |

## 3. First Impression Goals

The first viewport must answer:

1. Who is this?
2. What is the technical direction?
3. Where is the proof?
4. What is the next action?

Observable requirements:

- The homepage H1 is `Harsh Kumar Jha`.
- The approved professional headline and hero statement are visible near the H1.
- The primary CTA is `View Projects`.
- The secondary CTA is `Resume`.
- GitHub, LinkedIn, and X links are visible in the Hero or immediately adjacent social group.
- The next content after Hero is `Featured Projects`.
- Hero spacing does not create a full-screen landing page treatment that hides project discovery.

## 4. Visual Identity

The visual identity is text-led, evidence-led, and layout-led.

Allowed identity signals:

- Approved name, headline, hero statement, and core message.
- Project-first information hierarchy.
- Clean typography, controlled spacing, quiet surfaces, visible focus, and restrained interaction feedback.

Forbidden identity signals:

- Mascots.
- Decorative AI illustrations.
- Neural-network backgrounds.
- Fake terminals.
- Fake dashboards.
- Decorative code windows.
- Abstract generated AI art.
- Floating orbs, blobs, bokeh, or particle fields.
- Profile photo placeholders.
- Project screenshots, diagrams, repository links, or demo links before source approval.

Verification:

- Source scan contains no unsupported asset imports or decorative media.
- Visual review confirms the page identity is carried by content and structure, not by decorative imagery.

## 5. Layout Philosophy

The homepage must follow the recruiter journey:

1. Hero
2. Featured Projects
3. Experience
4. About
5. Skills
6. Education
7. Resume
8. Contact

Layout requirements:

| Requirement | Verification |
| --- | --- |
| Home renders the required journey order. | Inspect Home DOM or page sections. |
| Dedicated routes preserve the same visual system as Home. | Compare section heading, spacing, card, and link treatment across routes. |
| Projects use the strongest repeated layout. | Project cards have more visual prominence than skill/education groupings. |
| Supporting sections stay compact. | Skills, Education, Resume, Contact do not visually compete with Projects. |
| No page section is styled as a floating card. | Section wrappers remain structural; cards are used for repeated items only. |

## 6. Grid

Grid values and breakpoints are owned by `docs/DESIGN_SYSTEM.md`. This document defines where the grid is applied.

| Viewport | Required Behavior | Verification |
| --- | --- | --- |
| Mobile | Single-column content flow. | No horizontal scrolling; cards and links stack cleanly. |
| Tablet | Columns reduce before text becomes cramped. | Text does not overlap or truncate; nav switches before labels crowd. |
| Desktop | Projects can use comparison layout. | Project cards align in a readable grid/list. |
| Ultra-wide | Text remains constrained; width is not filled with decoration. | Paragraphs do not stretch across the full viewport. |

Section-specific rules:

- Hero remains text-led and compact.
- Projects may use wider containers than text-heavy sections.
- Experience may use a timeline/list only if dates are not visually required.
- Skills, Education, Resume, and Contact use compact grouping, not expansive grids.

## 7. Spacing

Spacing tokens are owned by `docs/DESIGN_SYSTEM.md`. Do not define new spacing values in this document.

Visual spacing requirements:

| Area | Requirement | Verification |
| --- | --- | --- |
| Hero | Compact enough that Featured Projects are discoverable soon after the first viewport. | Visual review on common laptop height. |
| Projects | More internal room than skills and education. | Card padding/gaps use approved tokens and project cards remain readable. |
| Experience | Enough separation for company, role, and highlight lists. | Highlights scan without crowding. |
| About | Facts, philosophy, and values are grouped without invented prose. | Groups are readable and compact. |
| Resume and Contact | Clear but not inflated. | These sections do not become oversized promotional panels. |
| Mobile | Desktop gaps reduce responsively. | Stacked sections do not feel sparse or cramped. |

Failure conditions:

- Arbitrary spacing values are introduced.
- Hero padding hides project discovery.
- Contact, Resume, Skills, or Education receive the same visual weight as Projects.
- Cards use inconsistent internal spacing without token justification.

## 8. Typography

Typography tokens are owned by `docs/DESIGN_SYSTEM.md`.

Visual typography requirements:

| Text Role | Requirement | Verification |
| --- | --- | --- |
| H1 | `Harsh Kumar Jha` appears once per homepage as the primary H1. | Heading audit. |
| Hero supporting headline | Approved professional headline appears near H1 and is visually prominent. | Content and visual review. |
| Section headings | Required section labels are visibly distinct from body text. | Heading audit and visual review. |
| Project titles | Project names are visually stronger than skill labels. | Compare card title styles. |
| Body text | Paragraphs use readable width and line height. | No full-width desktop paragraphs. |
| Metadata/status | `In Progress` is readable text, not color-only. | Status text audit. |

Rules:

- Use approved font tokens only.
- Letter spacing remains token-defined; do not add negative tracking.
- Do not use monospace as decoration.
- Do not add body copy where `CONTENT_SPEC.md` says `MISSING INFORMATION`.

## 9. Reading Rhythm

Each section follows this order:

1. Section heading.
2. Optional approved intro only if content exists.
3. Primary content.
4. Approved action or navigation if applicable.

Requirements:

- Do not add generic section intros to fill space.
- Lists are used for scan-heavy content such as highlights, skills, values, and contact links.
- Project cards expose all required content without hover.
- Project detail pages look intentionally minimal, not padded with unsupported filler.

## 10. Information Hierarchy

The portfolio constitution defines this hierarchy:

1. Projects
2. Engineering decisions
3. Experience
4. About
5. Skills
6. Everything else

Visual application:

| Page/Area | Primary Visual Object | Required Constraint |
| --- | --- | --- |
| Home | Hero and Featured Projects | Featured Projects follow Hero directly. |
| Projects | Project grid/list | Four approved projects only. |
| Project Detail | Project name, one-line description, status | No unsupported architecture, media, repo, demo, metrics, or roadmap. |
| Experience | Company, role, source-backed highlights | No dates or chronology visuals requiring dates. |
| About | Identity facts, philosophy, values, focus areas | No invented biography or personal story. |
| Skills | Approved categories and skills | No levels, percentages, rankings, or unsupported tools. |
| Education | Institution, degree, graduation, CGPA | No coursework, awards, or certifications. |
| Resume | Route-level resume access | No PDF preview/download/open behavior until asset exists. |
| Contact | Email, GitHub, LinkedIn, X | No contact form. |

## 11. Color Usage

Color tokens are owned by `docs/DESIGN_SYSTEM.md`.

Requirements:

- Use semantic color tokens only.
- Use one accent system only.
- Do not assign different brand colors to project cards.
- Do not use gradients as dominant surfaces.
- Do not communicate status through color alone.
- Maintain WCAG 2.2 AA contrast for text and interactive controls.
- Links must be identifiable through text styling, underline, context, or focus/hover treatment, not color alone where ambiguity exists.

Verification:

- Search for raw color values in components and styles unless they are part of token definitions.
- Run contrast review for text, links, buttons, badges, and focus states.

## 12. White Space Philosophy

Whitespace supports comprehension, not luxury spacing.

Requirements:

- Major sections have clear separation.
- Text-heavy content has constrained width.
- Project cards have enough room for comparison.
- Mobile stacks do not preserve excessive desktop spacing.
- No whitespace is used to hide missing project detail content.

Failure conditions:

- Hero resembles a full-screen marketing hero.
- Sparse supporting sections feel more important than Projects.
- Empty columns are filled with decorative objects.

## 13. Depth

Depth is shallow and functional. Exact shadow and elevation tokens are owned by `docs/DESIGN_SYSTEM.md`.

Allowed:

- Borders for structural grouping.
- Subtle card shadow only where border separation is insufficient.
- Overlay depth only for mobile navigation drawer or future approved overlays.

Forbidden:

- Heavy floating panels.
- Stacked translucent layers.
- 3D card effects.
- Decorative parallax layers.
- Glassmorphism as a dominant visual motif.

Verification:

- No component combines heavy blur, transparency, and shadow as a style.
- No card hover state changes layout dimensions.

## 14. Shadows

Requirements:

- Use only design-system shadow tokens.
- Prefer borders and spacing before shadows.
- Project cards may have the strongest card separation.
- Skill and education groupings use weaker separation than project cards.
- Hover shadow, if used, must not shift layout.

Verification:

- Source scan finds no arbitrary box-shadow values outside token definitions.
- Visual review confirms shadows are not the primary personality of the page.

## 15. Borders

Requirements:

- Use design-system border tokens.
- Project cards use visible but restrained boundaries.
- Active navigation state must not rely only on color; underline or border is allowed.
- Dividers are used only when spacing alone is insufficient.
- Do not frame every page section.

Verification:

- Active nav is visible in grayscale or color-impaired review.
- Sections do not appear as nested card stacks.

## 16. Corner Radius

Radius tokens are owned by `docs/DESIGN_SYSTEM.md`.

Requirements:

- Buttons, badges, and cards use approved radius tokens.
- Cards do not exceed the normal card radius defined by the design system.
- Fully rounded shapes are used only for functional circular icons or approved compact badges.
- Avoid playful, bubble-like, or heavily pill-shaped UI.

Verification:

- Source scan finds no arbitrary radius values outside token definitions.
- Visual review confirms card radii remain restrained.

## 17. Motion Philosophy

Motion exists only to clarify state, orientation, or interaction.

Allowed:

- Link, button, and card hover/focus feedback.
- Mobile navigation drawer open/close.
- Optional section reveal only if content is visible without JavaScript and reduced-motion users receive immediate content.

Forbidden:

- Typing effects.
- Particle systems.
- Matrix rain.
- Animated gradient backgrounds.
- Looping decorative animation.
- Scroll hijacking.
- Required scroll-linked content.
- Large parallax.
- Card rotation, tilt, or dramatic scale.
- Motion that delays access to Projects.

Verification:

- Reduced-motion mode disables or removes non-essential movement.
- Core text remains present in the DOM without animation-dependent reveal.
- Source scan finds no GSAP usage for MVP and no full-page decorative animation system.

## 18. Scroll Behaviour

Requirements:

- Native scrolling only.
- No scroll snapping.
- No scroll hijacking.
- No pinned sections.
- Sticky navigation is optional; if used, it must not cover headings or reduce readability.
- Home preserves the recruiter journey order.

Verification:

- Keyboard and wheel scrolling behave normally.
- Headings remain visible when anchor navigation is used.

## 19. Cursor Behaviour

Requirements:

- Links and enabled buttons use pointer cursor.
- Disabled or unavailable controls do not imply clickability.
- Non-interactive cards do not use pointer cursor.
- Project cards are interactive only when linked to static project detail routes.
- No custom cursor or cursor-following effect.

Verification:

- Cursor behavior matches actual action availability.
- No repo, demo, PDF, or media action appears clickable before source approval.

## 20. Hover Interactions

Hover states confirm interactivity and never reveal essential content.

Allowed hover changes:

- Border token change.
- Surface token change.
- Text/link token change.
- Subtle tokenized shadow.
- Minimal token-approved transform only if it does not create layout shift.

Forbidden hover behavior:

- Revealing required content.
- Hiding content.
- Changing card dimensions.
- Moving neighboring layout.
- Glow, tilt, rotation, or large scale.

Verification:

- Essential content remains visible before hover.
- Focus state mirrors hover affordance for keyboard users.

## 21. Loading States

The MVP is static and should not require loading states for core content.

Requirements:

- Do not render skeletons for static text sections.
- Do not render shimmer loaders.
- Do not render placeholder project cards.
- Do not render decorative loading animation.
- If future approved images need loading treatment, reserve stable dimensions and use a non-decorative treatment.

Verification:

- Static content renders from build-time data without loader components.
- No layout shift occurs from missing media.

## 22. Empty States

Required MVP content must not have visible empty states. Missing required content is a content validation issue.

Forbidden:

- `No projects yet`.
- `Coming soon`.
- Unavailable demo states.
- Placeholder screenshots, diagrams, repositories, or resume PDF.
- Empty cards that reserve space for missing content.

Allowed:

- Omit optional content whose source is `MISSING INFORMATION`.
- Render minimal project detail pages using only approved fields.

## 23. Section Transitions

Requirements:

- Section transitions are created through spacing, headings, and optional subtle reveal.
- No full-screen transitions.
- No animated masks.
- No letter-by-letter text entry.
- No transition makes the recruiter wait before reading.

Verification:

- All section headings and primary content are readable immediately.
- Animation duration and easing come from `docs/DESIGN_SYSTEM.md`.

## 24. Animation Timing

Timing tokens are owned by `docs/DESIGN_SYSTEM.md`.

Requirements:

- Hover/focus feedback uses the fast motion token.
- Drawer/menu transitions use the navigation/base motion token.
- Optional section reveal uses the slow/reveal token only if approved.
- Reduced motion resolves to immediate state changes.
- Stagger is avoided unless it improves orientation and does not delay reading.

Verification:

- No arbitrary duration/easing values appear outside token definitions.
- Reduced-motion review confirms no essential content depends on animation.

## 25. Accessibility

Visual quality includes accessibility.

Requirements:

- WCAG 2.2 AA contrast baseline.
- Visible focus state using approved focus tokens.
- Minimum 44px effective hit area for interactive controls.
- Semantic HTML before ARIA.
- Project status visible as text.
- Icon-only controls require accessible labels.
- Reduced-motion support.
- No hover-only essential content.
- No text overlap or overflow on mobile.

Verification:

- Run heading, landmark, keyboard, focus, contrast, touch target, and reduced-motion checks.
- Verify every icon-only control has an accessible name.

## 26. Responsive Behaviour

Responsive behavior preserves hierarchy.

| Area | Mobile | Tablet | Desktop | Ultra-wide |
| --- | --- | --- | --- | --- |
| Navigation | Mobile menu/drawer if labels do not fit. | Switch before crowding. | Full primary nav if space allows. | Constrained nav width. |
| Hero | Single column; CTAs wrap or stack. | Text remains primary. | Compact text-led layout. | Does not expand to fill width. |
| Projects | Single-column cards. | Fewer columns if readable. | Comparison grid/list. | Wider project layout allowed, text constrained. |
| Experience | Stacked cards/list. | Stacked or simplified timeline. | Timeline/list. | Highlights do not stretch. |
| About | Single-column facts/lists. | Stacked groups. | Structured groups. | Paragraphs constrained. |
| Skills | Stacked categories. | Wrapped groups. | Compact grouped layout. | Avoid sparse spread. |
| Education | Single compact group. | Stacked if needed. | Compact facts. | Constrained facts. |
| Resume | Single clear action. | Stacked if needed. | Compact action surface. | Not enlarged. |
| Contact | Stacked links. | Wrapped links. | Compact link group/cards. | Not enlarged. |
| Footer | Stacked nav/social. | Wrapped groups. | Compact structured footer. | Constrained footer width. |

Verification:

- Test at mobile, tablet, desktop, and ultra-wide widths.
- No horizontal scrolling, clipped labels, overlapping text, or unreadable cards.

## 27. Performance Rules

Visual implementation must protect static-site performance.

Requirements:

- No heavy decorative media.
- No decorative canvas/WebGL.
- No video unless approved.
- No unapproved images.
- No icon pack imported wholesale.
- No runtime content fetching.
- No GSAP for MVP.
- CSS transitions first; Framer Motion only if CSS cannot satisfy an approved motion requirement.
- No scroll-linked animation systems.
- Lighthouse target remains 90+ for Performance, Accessibility, Best Practices, and SEO on production build.

Verification:

- Bundle review confirms no unapproved heavy visual dependencies.
- Production build and Lighthouse/equivalent review pass documented targets.

## 28. Component Visual Requirements

Component responsibilities are owned by `docs/COMPONENT_SPEC.md`. This section defines only visual acceptance requirements.

### Navbar

| Requirement | Verification |
| --- | --- |
| Renders only Home, Projects, Experience, About, Resume, Contact in approved order. | Link text/order audit. |
| Visual weight is lower than Hero and Projects. | Visual review. |
| Active state is visible and not color-only. | `aria-current` and visual state audit. |
| Mobile menu/drawer is used only when labels do not fit. | Responsive review. |
| Focus state is visible; Escape closes drawer if implemented. | Keyboard review. |
| No theme toggle, social header links, scroll progress, or unsupported nav items. | Source and visual scan. |

### Hero

| Requirement | Verification |
| --- | --- |
| H1, professional headline, hero statement, CTAs, and social links use approved content. | Content audit. |
| Hero is compact enough that project discovery is not delayed. | Visual review on mobile and laptop. |
| CTAs wrap or stack without clipped labels. | Responsive review. |
| No profile image, hero illustration, background animation, typing effect, or decorative media. | Source and visual scan. |
| One H1 and valid heading sequence. | Heading audit. |

### Hero Illustration

| Requirement | Verification |
| --- | --- |
| No hero illustration is rendered in MVP. | Source and visual scan. |
| No empty media column is reserved for a missing illustration. | Layout review. |
| Future illustration requires approved asset, purpose, and alt text. | Blocked until source update. |

### CTA Buttons

| Requirement | Verification |
| --- | --- |
| Approved labels only: View Projects, Resume, Contact, GitHub, LinkedIn, X, Email. | Content audit. |
| View Projects has primary emphasis; Resume has secondary emphasis. | Visual review. |
| Resume does not imply download/open behavior. | Label and destination audit. |
| Hover/focus states do not resize controls. | Interaction review. |
| All controls meet hit-area and focus requirements. | Accessibility review. |

### Social Links

| Requirement | Verification |
| --- | --- |
| Uses only approved GitHub, LinkedIn, X, and Email destinations where applicable. | URL audit. |
| Does not show follower counts or social proof metrics. | Content scan. |
| Labels remain visible or accessible if icons are used. | Accessibility review. |
| Social links remain visually secondary to project and resume actions. | Visual review. |

### Projects Section

| Requirement | Verification |
| --- | --- |
| Displays exactly the four approved projects. | Content audit. |
| Appears directly after Hero on Home. | DOM/order audit. |
| Uses strongest repeated content layout. | Visual comparison with other cards/groups. |
| Cards link to static project detail routes. | Link audit. |
| No repo/demo buttons, screenshots, diagrams, code snippets, architecture, outcomes, or metrics. | Source and visual scan. |

### Project Cards

| Requirement | Verification |
| --- | --- |
| Shows project name, one-line description, and `In Progress` status only. | Content audit. |
| Status is readable text and not color-only. | Visual/accessibility review. |
| Essential content is visible without hover. | Interaction review. |
| Interactive affordance exists only if the card/title links to a detail route. | Link and cursor audit. |
| Project card visual weight exceeds skill and education groupings. | Visual review. |

### Project Detail Page

| Requirement | Verification |
| --- | --- |
| Renders project name, one-line description, status, and navigation only. | Content audit. |
| Does not render placeholder or `Coming soon` copy. | Content scan. |
| Does not imply missing media, repo, demo, metrics, architecture, or future work exists. | Visual/source scan. |
| Uses a single-column readable layout. | Responsive review. |

### Experience Timeline

| Requirement | Verification |
| --- | --- |
| Renders documented company names, role titles, and highlights only. | Content audit. |
| Does not render dates, locations, employer links, or chronology-dependent visuals. | Source and visual scan. |
| If timeline styling exists, it must not require missing dates to make sense. | Visual review. |
| Entries collapse to stacked cards/list on mobile. | Responsive review. |
| Highlights use list semantics. | Accessibility review. |

### Skills

| Requirement | Verification |
| --- | --- |
| Uses approved categories in approved order. | Content audit. |
| Uses approved skill labels only. | Content audit. |
| No skill bars, levels, percentages, rankings, or undocumented tools. | Source and visual scan. |
| Visual weight remains below Projects and Experience. | Visual review. |
| Skills remain readable when wrapped or stacked. | Responsive review. |

### About

| Requirement | Verification |
| --- | --- |
| Uses documented identity, vision, focus areas, philosophy, and values only. | Content audit. |
| Does not create a biography paragraph where content is `MISSING INFORMATION`. | Content scan. |
| No profile photo placeholder, awards, personal story, or comparative claims. | Source and visual scan. |
| Facts and lists remain compact and readable. | Visual review. |

### Resume

| Requirement | Verification |
| --- | --- |
| Resume CTA routes to `/resume`. | Link audit. |
| No PDF preview, download button, open PDF button, or resume image appears until asset/path exists. | Source and visual scan. |
| The visible label is `Resume`; no false download/open promise. | Content audit. |
| Section remains compact. | Visual review. |

### Contact

| Requirement | Verification |
| --- | --- |
| Renders approved email, GitHub, LinkedIn, and X links. | URL audit. |
| No contact form, message textarea, validation state, success state, calendar, or backend workflow. | Source and visual scan. |
| Links have accessible names matching visible labels. | Accessibility review. |
| Contact remains a clear final action, not a large promotional panel. | Visual review. |

### Footer

| Requirement | Verification |
| --- | --- |
| Includes only approved navigation and contact/social links. | Link/content audit. |
| Does not invent copyright, built-with, blog, certifications, or extra footer copy. | Content scan. |
| Uses footer landmark and labelled footer navigation when needed. | Accessibility review. |
| Stacks cleanly on mobile. | Responsive review. |

## 29. Visual QA Checklist

Before visual implementation is accepted, verify:

- Home follows Hero, Featured Projects, Experience, About, Skills, Education, Resume, Contact.
- Hero does not hide Featured Projects behind excessive vertical space.
- Projects are visually stronger than Skills, Education, Resume, and Contact.
- Every visible text string exists in `docs/CONTENT_SPEC.md` or a higher-priority source.
- Project detail pages render only approved fields.
- No unsupported screenshots, diagrams, repository links, demos, metrics, awards, employer dates, profile photos, or resume assets appear.
- No decorative animation, decorative media, particle effects, typing effects, fake terminal, fake dashboard, or decorative AI visuals appear.
- Buttons and links have visible hover and focus states.
- Project status is readable text.
- Mobile layout uses single-column flow where needed.
- No text overlaps, truncates, or overflows its container.
- No nested cards or floating page-section cards.
- No arbitrary token values are used outside token definitions.
- No contact form or backend-dependent interaction exists.
- No fake loading, empty, unavailable, or coming-soon states appear.
- Reduced-motion users can access all content immediately.
- Lighthouse/equivalent targets remain 90+ for Performance, Accessibility, Best Practices, and SEO.
