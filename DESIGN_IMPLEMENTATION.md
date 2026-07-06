# Design Implementation Specification

## Vision

This portfolio must feel like a restrained engineering product surface for an AI/ML engineer, not a personal landing page template. The design must communicate technical depth, research orientation, production engineering maturity, and professional credibility through structure, typography, content hierarchy, and consistent interaction states.

The site exists to help recruiters, hiring managers, research engineers, startup founders, and collaborators evaluate Harsh Kumar Jha quickly. Every visual decision must make that evaluation easier. The interface should feel closer to Vercel, Linear, Stripe, Anthropic, OpenAI, GitHub, and Cloudflare in quality: minimal, precise, fast, systematic, and evidence-led.

Final design outcome:

- The first screen identifies Harsh Kumar Jha and his technical direction.
- Project evidence is the strongest visual layer.
- Experience, About, Skills, Education, Resume, and Contact support the evaluation flow without competing with Projects.
- Long technical content remains readable and structured.
- Visual polish comes from alignment, rhythm, contrast, and component consistency, not decoration.

## Repository Analysis

### Current Strengths

| Area                   | Finding                                                                                                                                                                                          | Design Implication                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| Architecture           | Next.js App Router, TypeScript, local content modules, and markdown-backed project data are already in place.                                                                                    | The design can rely on static, source-backed content and should not introduce runtime UI dependencies. |
| Tokens                 | `styles/globals.css` defines semantic color, typography, radius, container, and motion tokens.                                                                                                   | Future visual work must use these tokens instead of arbitrary raw values.                              |
| Content source         | Project markdown files in `docs/projects/` now define project category, status, GitHub URL, focus, tech stack, problem, solution, architecture, features, highlights, challenges, and learnings. | Project UI should be a readable engineering case-study system, not a minimal card list.                |
| Accessibility baseline | Navigation, drawer focus handling, links, semantic headings, section wrappers, and button focus styles exist.                                                                                    | Keep this foundation and refine gaps rather than replacing the architecture.                           |
| Component boundaries   | UI primitives, layout components, navigation components, hero components, project feature components, experience feature components, and content modules are separated.                          | Visual refinement should happen through primitives and feature components, not page-specific one-offs. |
| Static constraints     | No backend, database, authentication, CMS, or contact form exists.                                                                                                                               | Visual design must avoid states that imply backend workflows.                                          |

### Current Weaknesses

| Area                       | Finding                                                                                                                                                                          | Required Correction                                                                                                                                   |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Homepage journey           | Current Home renders only the Hero. Earlier documentation defines a recruiter journey from Hero to Featured Projects, Experience, About, Skills, Education, Resume, and Contact. | Final homepage must include the full evaluation journey or provide clear route-level discovery immediately after Hero.                                |
| Hero visual                | Current Hero includes an animated abstract SVG with looping SVG `<animate>` elements.                                                                                            | Keep the hero premium and technical, but motion must be restrained, reduced-motion-safe, and never resemble decorative AI spectacle.                  |
| Hero height                | Current Hero uses near-viewport height and centers content vertically.                                                                                                           | Hero may occupy the first viewport only if the next action is obvious; Projects must not feel hidden.                                                 |
| Project cards              | Current cards contain an entire-card GitHub overlay plus explicit `Explore Project` and `GitHub` buttons.                                                                        | Entire-card overlays are not allowed when cards contain multiple controls. Use explicit controls only.                                                |
| Route spacing              | Some routes apply flex/gap classes directly to `Section`, whose children are wrapped by `Container`, so the intended spacing can be inconsistent.                                | Section spacing must be applied to actual content wrappers inside the container.                                                                      |
| Typography drift           | Some components use arbitrary font-size utilities such as `text-[0.875rem]` where a token exists.                                                                                | Use tokenized text roles only.                                                                                                                        |
| Button inconsistency       | Hero CTAs use extra shadows, transforms, and radius overrides compared with the shared `Button` primitive.                                                                       | Buttons must use one system with variants and sizes.                                                                                                  |
| Missing footer             | Footer components are documented but no footer exists in the current implementation.                                                                                             | Add a compact footer only if it uses approved navigation and contact links.                                                                           |
| Skills/Education placement | Current source tree includes content modules but no dedicated visible route components in the active route list.                                                                 | Supporting sections must be compact and visible where the final IA requires them.                                                                     |
| Design documents conflict  | Older docs mark project details and resume asset as missing, while current repository now includes project markdown and a resume PDF.                                            | This document treats current repository files as the current implementation source for visual work, while preserving higher-level product philosophy. |

### Visual Inconsistencies

- Hero uses stronger visual weight and animation than Projects, which weakens the evidence-first hierarchy.
- Project cards have dense content but do not yet use a deliberate editorial hierarchy.
- Contact and Resume controls use different button/link styling from Hero CTAs.
- Navigation typography uses arbitrary sizes in several components.
- Cards use similar borders but inconsistent interaction behavior.
- Page-level layouts alternate between direct section children and nested wrappers.

### Accessibility Issues To Correct

- Whole-card overlays must be removed from cards with internal links.
- Icon-only or icon-plus-text links must keep accessible names equal to visible labels.
- Hero animation must respect `prefers-reduced-motion`.
- Every interactive target must have at least a 44px effective hit area.
- Focus state must be visible on all links, buttons, drawer controls, project controls, resume controls, and footer controls.

### Responsiveness Issues To Correct

- Hero must collapse from two-column desktop layout to single-column mobile layout without empty media space.
- Project cards must stay readable at mobile widths and avoid cramped two-column layouts until there is enough room.
- Long project detail sections must constrain paragraph width to `42rem`.
- Footer and contact links must wrap or stack before labels collide.
- Ultra-wide screens must not stretch paragraphs or spread supporting sections across excessive width.

### Design Debt

- The design needs one final visual hierarchy standard for Home versus dedicated routes.
- Shared components need exact variant definitions for buttons, cards, badges, sections, and links.
- Motion needs strict rules because current Hero animation risks becoming decorative.
- Footer behavior needs final specification.
- Project and experience sections need final card/disclosure interaction rules.

## Design Philosophy

### Core Principles

1. Evidence over personality.
2. Projects over biography.
3. Engineering decisions over decorative visuals.
4. Precision over spectacle.
5. Compact density over luxury whitespace.
6. Accessibility over aesthetic cleverness.
7. Source-backed content over invented narrative.

### What The Design Should Communicate

| Attribute       | Visual Translation                                                                             |
| --------------- | ---------------------------------------------------------------------------------------------- |
| Engineering     | Clear grids, structured cards, readable technical sections, restrained controls.               |
| Research        | Calm layout, precise labels, long-form readability, visible reasoning sections.                |
| Technical depth | Project detail pages with architecture, workflow, stack, decisions, challenges, and learnings. |
| Professionalism | Minimal copy, stable spacing, consistent components, no playful effects.                       |
| Trust           | Source-backed claims only, explicit status, no fake metrics, no testimonials.                  |
| Minimalism      | Remove anything that does not help evaluation.                                                 |
| Confidence      | Strong hierarchy and clear actions without self-promotional language.                          |
| Precision       | Consistent tokens, alignment, focus states, and responsive behavior.                           |

### Non-Negotiable Tone

The visual language must be calm, technical, and premium. It must never feel like a startup launch page, a student resume template, a crypto/AI hype page, a visual effects demo, or a generic Tailwind starter.

## User Journey

### Primary Recruiter Journey

1. Hero: identity, headline, core direction, View Projects, Resume, social links.
2. Featured Projects: four project summaries with category, status, primary focus, tech stack, and explicit actions.
3. Experience: concise overview cards with expandable details or dedicated route access.
4. About: identity facts, engineering philosophy, focus areas, education context.
5. Skills: compact grouped skill taxonomy.
6. Education: institution, degree, graduation year, CGPA.
7. Resume: stable access to resume route and PDF actions where asset exists.
8. Contact: email, GitHub, LinkedIn, X.

### Technical Evaluator Journey

1. Projects route.
2. Project card.
3. Project detail page.
4. Architecture and workflow sections.
5. Technical highlights, challenges, learnings.
6. GitHub link.
7. Related experience or contact.

### Founder / Collaborator Journey

1. Hero.
2. Projects route.
3. FrameOS, AppForge AI, Candidate Intelligence System, or Hallucination Hunter case study.
4. Experience.
5. Contact.

## Layout Principles

### Page Structure

All pages use:

- One global header.
- One main landmark.
- Optional compact footer.
- Standard container width of `72rem`.
- Text reading width of `42rem`.
- Wide project layouts up to `88rem` only where comparison or case-study density benefits from it.

### Section Order

Home page final order:

1. Hero
2. Featured Projects
3. Experience
4. About
5. Skills
6. Education
7. Resume
8. Contact

Dedicated route order:

- Page title.
- Optional short source-backed overview.
- Primary content.
- Secondary navigation or next action.

### Layout Rules

- Do not style an entire page section as a floating card.
- Cards are allowed only for repeated items, grouped facts, controls, or detail modules.
- Do not put cards inside cards.
- Do not reserve empty columns for missing assets.
- Do not use decorative bands unless they improve content grouping.
- Do not let supporting sections visually compete with Projects.

## Grid System

### Breakpoints

| Viewport   | Width             | Layout Rule                                                              |
| ---------- | ----------------- | ------------------------------------------------------------------------ |
| Mobile     | `< 768px`         | Single-column flow. All cards stack. Navigation uses mobile drawer/menu. |
| Tablet     | `768px - 1023px`  | Single or two-column layouts only when text remains readable.            |
| Laptop     | `1024px - 1279px` | Standard desktop layouts begin. Hero may use two columns.                |
| Desktop    | `1280px - 1535px` | Project comparison layouts may use two columns.                          |
| Ultra-wide | `1536px+`         | Constrain content; do not stretch text or fill space with decoration.    |

### Columns

| Area             | Mobile   | Tablet                      | Desktop                                           | Ultra-wide                            |
| ---------------- | -------- | --------------------------- | ------------------------------------------------- | ------------------------------------- |
| Hero             | 1 column | 1 column                    | 56% text / 44% visual or metadata                 | Constrained inside `72rem` or `88rem` |
| Project overview | 1 column | 1 column                    | 2 columns at `1280px+`                            | 2 columns max                         |
| Project detail   | 1 column | 1 column                    | Single reading column with optional metadata rail | Max text width `42rem`                |
| Experience       | 1 column | 1 column                    | 1 column compact accordion/list                   | Max width `72rem`                     |
| About            | 1 column | 1-2 columns for facts/lists | 2 columns where appropriate                       | Constrained                           |
| Skills           | 1 column | 2 columns                   | 2-4 compact groups                                | No sparse spread                      |
| Contact          | 1 column | Wrapped controls            | Compact horizontal/wrapped group                  | Constrained                           |

### Gutter

- Standard grid gap: `1.5rem`.
- Dense internal group gap: `0.75rem`.
- Card grid gap: `1.5rem`.
- Large section content gap: `2rem`.

## Container Rules

| Container | Width   | Usage                                                                 |
| --------- | ------- | --------------------------------------------------------------------- |
| Text      | `42rem` | Paragraphs, project narrative, problem/solution sections, about text. |
| Content   | `72rem` | Header, standard sections, experience, about, contact.                |
| Wide      | `88rem` | Project overview and dense project case-study layouts.                |
| Full      | `100%`  | Structural page background only; not decorative content.              |

Rules:

- Header content uses `72rem`.
- Hero may use `88rem` only when a right-side visual or metadata panel exists.
- Project overview uses `88rem` if cards need comparison space.
- Project detail text must not exceed `42rem`.
- Footer uses `72rem`.

## Vertical Rhythm

| Element                       | Mobile          | Tablet   | Desktop          |
| ----------------------------- | --------------- | -------- | ---------------- |
| Page top/bottom padding       | `3rem`          | `4rem`   | `4rem`           |
| Major section spacing on Home | `3rem`          | `4rem`   | `4rem`           |
| Route section spacing         | `3rem`          | `4rem`   | `4rem`           |
| Hero internal stack           | `1.5rem - 2rem` | `2rem`   | `2rem - 2.25rem` |
| Section heading to content    | `1.5rem`        | `1.5rem` | `2rem`           |
| Card internal padding         | `1rem`          | `1.5rem` | `1.5rem`         |
| Project detail section gap    | `2rem`          | `2rem`   | `2rem`           |
| Paragraph gap                 | `1rem`          | `1rem`   | `1rem`           |

Rules:

- Hero must not delay project discovery with decorative empty space.
- Supporting sections must remain compact.
- Long project detail pages use consistent section breaks with borders or spacing, not oversized gaps.

## Typography

### Font Families

| Role | Stack                                                                |
| ---- | -------------------------------------------------------------------- |
| Sans | `Geist Sans`, `Inter`, `ui-sans-serif`, `system-ui`, `sans-serif`    |
| Mono | `Geist Mono`, `ui-monospace`, `SFMono-Regular`, `Menlo`, `monospace` |

Use sans for all UI and content. Use mono only for real code, technical identifiers, file paths, or terminal commands if they appear in future source-backed content. Do not use mono as decoration.

### Type Scale

| Role                | Desktop | Tablet | Mobile | Weight      | Line Height   | Letter Spacing |
| ------------------- | ------- | ------ | ------ | ----------- | ------------- | -------------- |
| Hero headline       | `56px`  | `48px` | `40px` | `700`       | `1.08 - 1.15` | `0`            |
| Page title          | `40px`  | `36px` | `32px` | `650 - 700` | `1.15`        | `0`            |
| Section heading     | `32px`  | `28px` | `24px` | `650`       | `1.15`        | `0`            |
| Project detail lead | `24px`  | `22px` | `20px` | `500 - 600` | `1.3`         | `0`            |
| Card title          | `18px`  | `18px` | `18px` | `600`       | `1.2`         | `0`            |
| Body                | `16px`  | `16px` | `16px` | `400`       | `1.55 - 1.75` | `0`            |
| Small body          | `15px`  | `15px` | `15px` | `400`       | `1.55`        | `0`            |
| Label / metadata    | `14px`  | `14px` | `14px` | `500`       | `1.4`         | `0`            |

### Heading Rules

- Homepage has exactly one H1: `Harsh Kumar Jha`.
- Hero professional headline is visually dominant but may be a paragraph or lower heading to preserve semantic order.
- Route pages use one H1 matching the route purpose.
- Section headings use H2.
- Card titles use H3 when they introduce an article.
- Disclosure detail subsections use H4 only inside expanded cards.

### Reading Width

- Paragraph max width: `42rem`.
- Hero statement max width: `42rem`.
- Project case-study paragraphs max width: `42rem`.
- Card descriptions max width: full card width, but card width must keep lines readable.

## Color System

Use only semantic tokens from `styles/globals.css`.

| Token           | Value     | Usage                                           |
| --------------- | --------- | ----------------------------------------------- |
| Primary         | `#111827` | Primary text, primary buttons, strong emphasis. |
| Secondary       | `#374151` | Secondary emphasis and button hover.            |
| Surface base    | `#ffffff` | Page and card surface.                          |
| Surface raised  | `#f7f8fa` | Subtle elevated group backgrounds.              |
| Background page | `#ffffff` | Global page background.                         |
| Border subtle   | `#e5e7eb` | Default card, header, divider borders.          |
| Border strong   | `#cbd5e1` | Hover, active, stronger grouping.               |
| Text primary    | `#111827` | Headings, primary labels.                       |
| Text secondary  | `#4b5563` | Body copy and descriptions.                     |
| Text muted      | `#6b7280` | Metadata and labels.                            |
| Accent          | `#2563eb` | Focus ring and sparse link emphasis.            |
| Success         | `#047857` | Future success states only.                     |
| Warning         | `#b45309` | Future warning states only.                     |
| Error           | `#b91c1c` | Future errors only.                             |
| Info            | `#0369a1` | Future informational states only.               |
| Hover           | `#f3f4f6` | Button/link/card hover backgrounds.             |
| Focus           | `#2563eb` | Keyboard focus outline.                         |
| Disabled        | `#9ca3af` | Disabled controls.                              |

Rules:

- White background is the default.
- Do not assign unique brand colors to individual projects.
- Do not use gradient surfaces as primary identity.
- Do not communicate status through color alone.
- All text must meet WCAG 2.2 AA contrast.

## Spacing System

| Token     | Value     | Usage                               |
| --------- | --------- | ----------------------------------- |
| `space.0` | `0`       | Reset/flush alignment.              |
| `space.1` | `0.25rem` | Tight inline spacing.               |
| `space.2` | `0.5rem`  | Small badges and metadata groups.   |
| `space.3` | `0.75rem` | Button groups and compact stacks.   |
| `space.4` | `1rem`    | Default internal spacing.           |
| `space.5` | `1.5rem`  | Card padding and section subgroups. |
| `space.6` | `2rem`    | Main section content gap.           |
| `space.7` | `3rem`    | Major mobile/route section spacing. |
| `space.8` | `4rem`    | Desktop major section spacing.      |

## Radius, Shadow, Elevation, Transition

### Radius

| Token  | Value    | Usage                                                     |
| ------ | -------- | --------------------------------------------------------- |
| None   | `0`      | Structural flush elements.                                |
| Small  | `4px`    | Badges, tight links.                                      |
| Medium | `6px`    | Buttons, inputs, compact controls.                        |
| Large  | `8px`    | Cards and grouped surfaces.                               |
| Full   | `9999px` | Functional circular controls or compact pill badges only. |

### Shadows

| Token       | Value                              | Usage                                              |
| ----------- | ---------------------------------- | -------------------------------------------------- |
| None        | `none`                             | Default.                                           |
| Subtle      | `0 1px 2px rgb(17 24 39 / 0.06)`   | Optional subtle separation.                        |
| Interactive | `0 6px 16px rgb(17 24 39 / 0.08)`  | Optional hover/focus where border is insufficient. |
| Overlay     | `0 16px 40px rgb(17 24 39 / 0.12)` | Drawer/modal only.                                 |

### Motion

| Token   | Value   | Easing                          | Usage                                |
| ------- | ------- | ------------------------------- | ------------------------------------ |
| Instant | `0ms`   | None                            | Reduced motion and immediate states. |
| Fast    | `120ms` | `cubic-bezier(0.2, 0, 0, 1)`    | Hover/focus.                         |
| Base    | `180ms` | `cubic-bezier(0.2, 0, 0, 1)`    | Drawer/menu transitions.             |
| Slow    | `240ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | Optional section reveal only.        |

## Navigation

### Structure

Primary navigation must contain exactly:

1. Home
2. Projects
3. Experience
4. About
5. Contact

Resume must not appear as a primary navigation item. Resume remains accessible from Hero, Contact/Resume surfaces, and footer if footer is implemented.

### Desktop Navigation

- Header height: `64px`.
- Header border: `1px` subtle border bottom.
- Background: `background-page`.
- Container: `72rem`.
- Link height: minimum `40px`.
- Link padding: `0.75rem` horizontal.
- Link font size: `14px`.
- Active state: border or underline plus `aria-current="page"`. Active state must not rely only on color.
- Hover: text primary and optional hover surface.
- Focus: `2px` focus outline, `2px` offset, focus token.

### Mobile Navigation

- Mobile trigger visible below `768px` or before labels crowd.
- Trigger height: minimum `40px`; effective hit area must be `44px`.
- Drawer uses fixed overlay with z-index `50`.
- Drawer padding: `1rem` mobile.
- Escape closes drawer.
- Focus is trapped while open.
- Focus returns to trigger when closed.
- Drawer links stack vertically with `0.25rem - 0.5rem` gap.

### Sticky Behavior

Header may be sticky only if it does not cover anchored headings. If sticky:

- Use z-index `20`.
- Keep height `64px`.
- Add scroll-margin-top to anchored sections equal to at least `80px`.

## Hero

### Purpose

The Hero identifies Harsh, states the technical direction, and routes visitors to proof.

### Required Content

- H1: `Harsh Kumar Jha`.
- Professional headline from `content/identity.ts`.
- Hero statement from `content/identity.ts`.
- Primary CTA: `View Projects`.
- Secondary CTA: `Resume`.
- Social links: GitHub, LinkedIn, X.

### Layout

Desktop:

- Two-column layout is allowed.
- Left column: `56%`, max text width `48rem`.
- Right column: `44%`, only if it contains a restrained technical visual or source-backed metadata.
- Column gap: `3rem - 4rem`.
- Hero min-height target: `calc(100vh - 64px)` only when the right column is used and content remains above the fold.

Tablet:

- Collapse to one column.
- Hide or move visual below text only if it remains compact.

Mobile:

- Single column.
- No empty visual area.
- CTAs stack or wrap.
- Social links wrap.

### Hero Visual

Allowed:

- Static or lightly animated architecture-inspired line/grid composition.
- Monochrome or token-colored SVG.
- Low-opacity technical geometry.
- Small metadata caption only if source-backed.

Forbidden:

- Neural network spectacle.
- Particle fields.
- Matrix rain.
- Fake terminal.
- Fake dashboard.
- Stock illustration.
- Generated AI art.
- Profile placeholder.
- Looping animation that draws attention away from copy.

Motion:

- Initial reveal may use opacity/translate over `240ms`.
- Looped animation is forbidden unless it is so subtle it reads as ambient system state and is disabled in reduced motion.
- No SVG animation may be required to understand content.

## Projects

### Projects Overview

Projects are the strongest repeated visual surface.

Required projects:

1. FrameOS
2. Candidate Intelligence System
3. AppForge AI
4. Hallucination Hunter

Source: `docs/projects/*.md`.

### Project Card Content

Each card must show:

- Project title.
- One-line summary.
- Category.
- Status.
- Primary engineering focus.
- Up to six visible technologies.
- Explicit `Explore Project` control.
- Explicit `GitHub` control.

Rules:

- Do not make the entire card clickable when the card contains multiple controls.
- Essential content must be visible without hover.
- GitHub link must not sit as an invisible overlay.
- Status must be readable text.
- Category and tech stack use badges or compact labels.

### Project Card Dimensions

- Mobile width: full container width.
- Desktop grid: two columns at `1280px+`.
- Minimum card height: content-driven, not fixed unless needed for alignment.
- Padding: `1.5rem`.
- Gap inside card: `1.25rem`.
- Border radius: `8px`.
- Border: subtle by default, strong on hover/focus-within.

### Project Detail Page

Reading order:

1. Project header.
2. Metadata row: status, category.
3. One-line summary.
4. Primary focus.
5. Tech stack.
6. The Problem.
7. The Solution.
8. Architecture.
9. Key Features.
10. Technical Highlights.
11. Challenges.
12. What I Learned.
13. Repository.
14. Previous/Next project navigation.

Layout:

- Single-column content by default.
- Text sections constrained to `42rem`.
- Metadata/tags may span wider but must not stretch paragraphs.
- Use borders or section gaps to separate major content blocks.
- Do not add diagrams, screenshots, metrics, demos, or future work unless the markdown defines them.

## Experience

### Overview Behavior

Experience must be compact and exploratory. The main experience surface should show:

- Company.
- Role.
- Employment type.
- Technology stack.
- Explicit `Expand Experience` / `Hide Details` control.

Do not make the entire experience card clickable.

### Collapsed State

- Card border: subtle.
- Padding: `1.5rem`.
- Company title: `18px`, weight `600`.
- Role: `16px`, weight `500`, secondary text.
- Metadata: definition-list style where possible.
- Technologies: compact badges or wrapped labels.

### Expanded State

Expanded content may show:

- About the role.
- Key responsibilities.
- Technologies used.
- Key projects.
- Engineering highlights.
- What I learned.
- Impact.

Rules:

- Expansion uses a real button with `aria-expanded` and `aria-controls`.
- Expanded panel separates from summary with a top border and `1.25rem` padding top.
- Lists use semantic `ul`.
- Do not invent dates, locations, employer links, or unsupported achievements.

### Motion

- Disclosure open/close may use instant state change or `180ms` opacity/height transition.
- Reduced motion uses instant open/close.
- No bounce, elastic motion, card tilt, or scroll-linked timeline animation.

## About

### Information Architecture

About must include only source-backed content:

- About Me concise identity statement.
- Engineering Philosophy.
- Education facts.
- Currently Exploring / focus areas.

Optional only if source-backed:

- Core values.
- Mission.
- Vision.

Forbidden:

- Full biography not present in source.
- Awards.
- Personal origin story.
- Comparative claims.
- Profile photo placeholder.

### Layout

- Dedicated About page uses a single-column stack.
- Section gap: `2.5rem`.
- Each block uses heading plus compact text/list.
- Education facts use a definition list.
- Focus areas use badges.
- Paragraph width: `42rem`.

## Contact

### Content

Required:

- Email: `jhaharsh451@gmail.com`.
- GitHub.
- LinkedIn.
- X.

Forbidden:

- Contact form.
- Message textarea.
- Validation states.
- Success states.
- Calendar embed.
- Backend workflow.

### Layout

- Contact page uses page title plus compact contact methods.
- Email card appears first.
- Social links follow as secondary actions.
- On mobile, links stack or wrap full-width.
- On desktop, links may wrap inline.

## Footer

Footer is allowed and recommended for final visual completeness.

### Structure

- Footer landmark.
- Compact navigation group.
- Contact/social group.
- Optional resume link.

### Allowed Links

- Home.
- Projects.
- Experience.
- About.
- Contact.
- Resume.
- Email.
- GitHub.
- LinkedIn.
- X.

### Forbidden Footer Content

- Unsupported copyright text.
- Built-with copy.
- Blog links.
- Certifications.
- Extra claims.
- Decorative slogans.

### Spacing

- Top border: subtle.
- Padding: `2rem` mobile, `3rem` desktop.
- Container: `72rem`.
- Mobile: stacked groups.
- Desktop: two-row or two-column compact layout.

## Buttons

### Shared Button Rules

- Height large: `48px`.
- Height small: `40px`.
- Horizontal padding large: `2rem`.
- Horizontal padding small: `1rem`.
- Radius: `6px`.
- Font size: `16px` large, `14px` small.
- Weight: `500`.
- Focus outline: `2px`, offset `2px`, focus token.
- Transition: color/background/border over `120ms`.
- Hover must not resize or shift layout.

### Variants

| Variant   | Use                                  | Default                                            | Hover                             |
| --------- | ------------------------------------ | -------------------------------------------------- | --------------------------------- |
| Primary   | Main action, usually `View Projects` | Primary background, white text                     | Secondary background              |
| Secondary | Resume, GitHub, route actions        | White/transparent background, primary text, border | Hover surface and stronger border |
| Text      | Low-emphasis inline link             | Text primary or secondary                          | Underline or text primary         |
| Icon      | Functional icon controls only        | Border or transparent                              | Hover surface                     |
| Danger    | Future destructive action only       | Error token                                        | Darker error treatment            |

Use `Primary` sparingly. Most actions are secondary.

## Cards

### Shared Card Rules

- Radius: `8px`.
- Border: `1px` subtle.
- Padding: `1.5rem`.
- Background: surface base.
- Hover: border strong or hover surface only if interactive.
- Focus-within: visible outline or border state.
- Shadow: none by default; subtle shadow only where border is insufficient.

### Card Variants

| Card            | Visual Weight           | Content                                                |
| --------------- | ----------------------- | ------------------------------------------------------ |
| Project Card    | Highest repeated weight | Title, summary, category, status, focus, tech, actions |
| Experience Card | Medium                  | Company, role, employment type, tech, disclosure       |
| Skill Card      | Low                     | Category and badges                                    |
| Education Card  | Low                     | Institution, degree, graduation, CGPA                  |
| Contact Card    | Medium-low              | Email or social link                                   |
| Resume Card     | Low                     | Resume access only                                     |

## Forms

No contact form exists in this portfolio. Form standards are still defined for future compatibility:

- Label every input visibly.
- Minimum input height: `44px`.
- Radius: `6px`.
- Border: subtle default, strong/focus on focus.
- Error text uses error token plus readable message.
- Success state uses success token plus readable message.
- No form may submit without approved backend architecture.

## Icons

### Icon Philosophy

Icons are functional, not decorative. Use them only when they improve recognition or reduce ambiguity.

Rules:

- Size small: `16px`.
- Size standard: `20px`.
- Size large: `24px`.
- Stroke: `1.75px - 2px` for outline icons.
- Use one icon family per interface.
- Social icons are allowed only when paired with visible text or accessible labels.
- Do not import an entire icon pack wholesale.
- Do not use icons as visual filler.

## Images

Current approved image/document assets:

- Resume PDF: `public/documents/Harsh_CV.pdf`.

Images not approved:

- Profile photo.
- Project screenshots.
- Diagrams.
- Hero bitmap art.
- Background imagery.

Rules:

- Do not use stock images.
- Do not use placeholder images.
- Do not invent alt text for missing assets.
- When future images are approved, use stable dimensions, explicit alt text, and responsive sizing.

## Animations

### Allowed

- Button hover/focus transitions.
- Link hover/focus transitions.
- Card border/background hover.
- Mobile drawer open/close.
- Accordion disclosure state.
- Optional one-time section reveal after content is immediately present in DOM.

### Forbidden

- Typing animation.
- Particle systems.
- Matrix rain.
- Decorative looping gradients.
- Scroll hijacking.
- Scroll snapping.
- Large parallax.
- Card tilt/rotation.
- Bounce or elastic motion.
- Animation that delays reading.

### Durations

- Hover/focus: `120ms`.
- Drawer/disclosure: `180ms`.
- Optional reveal: `240ms`.
- Reduced motion: `0ms`.

### Properties

Allowed animated properties:

- Opacity.
- Transform with max movement `8px`.
- Color.
- Background color.
- Border color.

Avoid:

- Width/height animations unless necessary for accordion and implemented without layout jank.
- Box-shadow-heavy animation.
- Filter/blur animation.

## Responsive Rules

### Mobile

- Single-column layout.
- Section padding: `3rem` vertical max.
- Card padding: `1rem - 1.25rem`.
- CTAs stack if labels crowd.
- No horizontal overflow.
- Text must wrap naturally.

### Tablet

- Preserve single-column for text-heavy areas.
- Allow two-column facts only when labels remain readable.
- Navigation switches before labels crowd.

### Laptop

- Hero may use two columns.
- Project cards may remain one column until `1280px`.
- Experience remains single-column.

### Desktop

- Project grid uses two columns.
- Hero and project overview may use wider container.
- Paragraphs remain constrained.

### Ultra-Wide

- No content stretches beyond approved containers.
- Do not add decoration to fill space.
- Keep layout centered and readable.

## Accessibility

### Keyboard

- Every interactive element is reachable by Tab.
- Tab order follows visual order.
- Drawer traps focus while open.
- Escape closes drawer.
- Accordion buttons use Enter/Space.

### ARIA

- Use semantic HTML first.
- Nav uses `aria-label`.
- Active nav uses `aria-current="page"`.
- Drawers use `role="dialog"` and `aria-modal="true"` when overlaying the page.
- Disclosure buttons use `aria-expanded` and `aria-controls`.
- Icon-only controls require accessible labels.

### Contrast

- Text and controls must meet WCAG 2.2 AA.
- Focus ring must remain visible against all surfaces.
- Muted text must not fall below readable contrast.

### Focus

- Focus outline: `2px`.
- Offset: `2px`.
- Color: focus token.
- Do not remove focus outlines.

### Reduced Motion

- Respect `prefers-reduced-motion`.
- Disable decorative and reveal motion.
- Keep content immediately readable.

## Performance

Rules:

- No heavy visual dependencies.
- No GSAP for this portfolio.
- No decorative canvas or WebGL.
- No videos unless future source explicitly approves them.
- No runtime content fetching.
- No CMS or analytics script unless source documents are updated.
- Use CSS transitions before animation libraries.
- Keep Client Components limited to navigation drawer and experience disclosure.
- Keep SVGs small and purposeful.
- Optimize approved images and reserve dimensions.

Targets:

- Lighthouse Performance: `90+`.
- Lighthouse Accessibility: `90+`.
- Lighthouse Best Practices: `90+`.
- Lighthouse SEO: `90+`.
- No layout shift from missing media.

## Component Consistency Rules

1. Every card uses the same radius scale.
2. Every button uses the shared button system.
3. Every badge uses the shared badge system.
4. Every page title uses the page-title scale.
5. Every section heading uses the section-heading scale.
6. Every body paragraph uses the body scale and constrained width.
7. Every interactive element has hover and focus states.
8. Every external link opens with safe external-link attributes.
9. Every repeated list uses semantic list markup.
10. Every route uses the same page shell.

## Visual Anti-Patterns

Never allow:

- Huge empty whitespace.
- Uneven cards caused by missing content.
- Random shadows.
- Gradient overload.
- Glassmorphism.
- Marketing hero sections.
- Generic illustrations.
- Repeated information.
- Resume-style bullet dumps.
- Documentation-style pages with no visual hierarchy.
- Fake dashboards.
- Fake terminals.
- Particle backgrounds.
- Typing animations.
- Skill bars.
- Percent ratings.
- Visitor counters.
- Testimonials.
- Blog placeholders.
- Certification sections.
- Decorative code snippets.
- Stock images.
- Placeholder avatars.
- Custom cursor effects.
- Scroll hijacking.
- Whole-card click targets when the card contains internal controls.

## Implementation Checklist

### Phase 1: Foundation

- Confirm `styles/globals.css` exposes all design tokens.
- Replace arbitrary typography utilities with tokenized roles.
- Confirm `Container`, `Section`, `Button`, and `Badge` are the base primitives.
- Add missing card primitive only if it removes duplication without changing architecture.

### Phase 2: Navigation

- Keep nav labels: Home, Projects, Experience, About, Contact.
- Verify active state is visible and uses `aria-current`.
- Verify mobile drawer focus trap and Escape behavior.
- Ensure hit targets are at least `44px`.

### Phase 3: Hero

- Preserve H1, headline, statement, CTAs, social links.
- Keep premium two-column desktop layout only if it remains restrained.
- Remove or reduce decorative looping animation.
- Ensure mobile single-column flow.
- Ensure reduced motion disables non-essential motion.

### Phase 4: Projects

- Remove whole-card GitHub overlay.
- Keep explicit Explore Project and GitHub controls.
- Make cards dense, readable, and consistent.
- Ensure project detail pages render all markdown-backed sections in readable order.
- Ensure paragraphs are constrained to `42rem`.

### Phase 5: Experience

- Keep compact overview cards.
- Use explicit disclosure controls.
- Preserve semantic list markup.
- Keep expanded details grouped and readable.

### Phase 6: About

- Keep concise profile content.
- Use source-backed identity, philosophy, education, and focus areas.
- Avoid personal biography expansion.

### Phase 7: Contact And Resume

- Keep direct contact links.
- Keep no-form architecture.
- Use consistent button/link styles.
- Ensure resume PDF actions are clearly labeled where asset exists.

### Phase 8: Footer

- Add compact footer if not present.
- Use approved links only.
- Do not invent footer copy.

### Phase 9: Responsive QA

- Test mobile, tablet, laptop, desktop, ultra-wide.
- Verify no horizontal scrolling.
- Verify no text clipping.
- Verify cards stack and wrap correctly.

### Phase 10: Accessibility And Polish

- Run keyboard pass.
- Run focus pass.
- Run reduced-motion pass.
- Run contrast pass.
- Run lint, typecheck, tests, and production build.

## Acceptance Criteria

The design implementation is complete when:

- The homepage supports the full recruiter evaluation journey or provides immediate project discovery after Hero.
- Projects are visually stronger than supporting sections.
- Every project card communicates title, summary, category, status, primary focus, technologies, Explore Project, and GitHub without hover.
- Project detail pages read as engineering case studies, not placeholder pages.
- Experience uses explicit expand/collapse controls and does not require whole-card clicks.
- Navigation contains only Home, Projects, Experience, About, Contact.
- Resume remains accessible outside primary navigation.
- Buttons, badges, cards, links, headings, and spacing use one consistent system.
- No unsupported assets, screenshots, diagrams, metrics, testimonials, or decorative content are introduced.
- Mobile, tablet, laptop, desktop, and ultra-wide layouts have no overflow, clipping, or unreadable text.
- Keyboard navigation works across all interactive surfaces.
- Focus states are visible across all controls.
- Reduced-motion users can read all content immediately.
- Lighthouse or equivalent checks meet `90+` for Performance, Accessibility, Best Practices, and SEO.
- `pnpm lint`, `pnpm typecheck`, `pnpm test`, and `pnpm build` pass before release.
