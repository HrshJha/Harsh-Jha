# Design System

## 1. Design System Philosophy

### Purpose

This design system defines the visual and component rules for Harsh Kumar Jha's portfolio website. It exists to keep every interface minimal, premium, technical, professional, calm, intentional, accessible, and consistent with the source documents.

This document does not redesign the product. It translates `FOUNDATION.md`, `docs/PRD.md`, `docs/CONTENT_SPEC.md`, and `docs/DESIGN_BRIEF.md` into a scalable UI system.

### Goals

| Goal | Requirement | Why |
| --- | --- | --- |
| Preserve credibility | Components must not introduce unsupported claims, metrics, or visual exaggeration. | The portfolio depends on trust and evidence. |
| Support the recruiter journey | Components must prioritize Hero, Projects, Experience, About, Skills, Education, Resume, and Contact. | The source documents define this as the core path. |
| Keep UI systematic | Repeated content types must use consistent structures. | Consistency signals engineering discipline. |
| Maintain calm premium quality | Visual decisions must be restrained and precise. | The brand must avoid generic or overdesigned portfolio patterns. |
| Protect accessibility | Components must work with keyboard, screen readers, readable type, visible focus, and reduced motion. | Accessibility is a non-functional requirement. |
| Protect performance | Effects, images, shadows, blur, and motion must remain lightweight. | The website is static and should feel fast. |

### Scope

In scope:

- Semantic design tokens.
- Component naming conventions.
- Navigation, buttons, cards, badges, forms, layout, grid, motion, accessibility, and performance rules.
- Rules for future expansion.

Out of scope:

- Page-specific mockups.
- Exact color values.
- Exact typography values.
- Exact spacing values: defined in MVP token baseline.
- Exact breakpoint values: defined in MVP token baseline.
- Exact motion duration values: defined in MVP token baseline.
- Asset selection.
- Backend-dependent form behavior.

Asset selection and backend-dependent form behavior remain unresolved because they are not approved by `docs/FOUNDATION.md`.

### Principles

1. Projects are the primary proof of engineering capability.
2. Components must increase credibility, clarity, trust, or technical depth.
3. Visual restraint is required.
4. No decorative-first component is allowed.
5. No component may hide required information behind hover.
6. No component may imply project completion, production use, metrics, demos, or repositories unless source-backed.
7. Every interactive component must have visible focus and keyboard support.
8. Every animation must have purpose.
9. Exact token values must not be invented.

## 2. Design Tokens

Token values below define the MVP implementation baseline. They are intentionally restrained, neutral, and accessibility-oriented so engineering can implement the portfolio without hardcoding arbitrary values.

Future token changes must preserve the philosophy in `docs/FOUNDATION.md` and `docs/DESIGN_BRIEF.md`: minimal, premium, technical, professional, calm, intentional, and engineering-first.

### Spacing Scale

| Token | Value | Usage | Why |
| --- | --- | --- | --- |
| `space.0` | `0` | No spacing. | Needed for resets and flush alignment. |
| `space.1` | `0.25rem` | Tight inline spacing. | Supports compact labels and metadata. |
| `space.2` | `0.5rem` | Small internal gaps. | Keeps dense UI readable. |
| `space.3` | `0.75rem` | Default component gap. | Provides consistency across buttons, cards, and groups. |
| `space.4` | `1rem` | Card padding and grouped content spacing. | Supports compact but breathable layout. |
| `space.5` | `1.5rem` | Section sub-groups. | Separates related blocks without over-expansion. |
| `space.6` | `2rem` | Section spacing. | Creates calm page rhythm. |
| `space.7` | `3rem` | Major section separation. | Used when a content transition needs stronger hierarchy. |
| `space.8` | `4rem` | Page-level spacing. | Prevents sections from feeling cramped on large screens. |

Rule: Do not add ad hoc spacing values. If the scale is insufficient, propose a new token through the versioning process.

### Border Radius Scale

| Token | Value | Usage | Why |
| --- | --- | --- | --- |
| `radius.none` | `0` | Flush structural elements. | Keeps technical surfaces precise. |
| `radius.sm` | `4px` | Badges, small controls. | Adds subtle softness without becoming playful. |
| `radius.md` | `6px` | Buttons, inputs, compact cards. | Standard interactive radius. |
| `radius.lg` | `8px` | Project and information cards. | Allows premium grouping when needed without becoming rounded-card-heavy. |
| `radius.full` | `9999px` | Only where circular or pill form is functionally required. | Prevents excessive pill-shaped UI. |

Rule: Extreme rounding is not aligned with the technical brand. Use `radius.full` only for functional circular icons or approved compact badges.

### Shadow Scale

| Token | Value | Usage | Why |
| --- | --- | --- | --- |
| `shadow.none` | `none` | Default state. | Avoids heavy floating UI. |
| `shadow.subtle` | `0 1px 2px rgb(17 24 39 / 0.06)` | Lightweight elevation. | Supports separation without visual drama. |
| `shadow.interactive` | `0 6px 16px rgb(17 24 39 / 0.08)` | Hover/focus elevation if needed. | Confirms interaction without layout shift. |
| `shadow.overlay` | `0 16px 40px rgb(17 24 39 / 0.12)` | Modal/drawer if future source permits. | Creates clear hierarchy for overlays. |

Rule: Shadows must be shallow. Heavy shadows are forbidden.

### Blur Scale

| Token | Value | Usage | Why |
| --- | --- | --- | --- |
| `blur.none` | `0` | Default. | Preserves clarity and performance. |
| `blur.subtle` | `4px` | Reserved for functional overlays only. | Avoids glassmorphism as a style. |
| `blur.overlay` | `8px` | Modal/drawer backdrop if approved. | Helps focus attention when needed. |

Rule: Blur must not become a dominant visual language.

### Elevation Scale

| Token | Value | Usage | Why |
| --- | --- | --- | --- |
| `elevation.base` | `0` | Page background and normal content. | Baseline layer. |
| `elevation.raised` | `1` | Cards or controls requiring separation. | Supports grouping. |
| `elevation.sticky` | `10` | Sticky navigation if implemented. | Keeps navigation accessible. |
| `elevation.overlay` | `40` | Drawer, modal, or menu if approved. | Establishes top layer. |

Rule: Elevation must clarify hierarchy, not decorate.

### Opacity Scale

| Token | Value | Usage | Why |
| --- | --- | --- | --- |
| `opacity.disabled` | `0.5` | Disabled controls. | Communicates unavailable state. |
| `opacity.muted` | `0.72` | Secondary metadata. | Supports hierarchy. |
| `opacity.overlay` | `0.48` | Overlay backgrounds. | Separates modal/drawer surfaces. |
| `opacity.hidden` | `0` | Visually hidden transitions. | Supports purposeful motion. |

Rule: Opacity cannot be the only indicator of disabled or status state.

### Transition Scale

| Token | Value | Usage | Why |
| --- | --- | --- | --- |
| `transition.instant` | `0ms` | State changes that should feel immediate. | Preserves responsiveness. |
| `transition.fast` | `120ms` | Hover and focus states. | Confirms interaction quickly. |
| `transition.base` | `180ms` | Default UI transitions. | Creates consistent rhythm. |
| `transition.slow` | `240ms` | Major section or page transitions if approved. | Reserved for narrative clarity. |

Rule: Transitions must never delay access to content.

### Animation Scale

| Token | Value | Usage | Why |
| --- | --- | --- | --- |
| `animation.none` | `0ms` | Reduced motion or static states. | Supports accessibility. |
| `animation.reveal` | `240ms` | Subtle content entrance if approved. | Clarifies hierarchy. |
| `animation.feedback` | `120ms` | Click, hover, or active feedback. | Confirms interaction. |
| `animation.navigation` | `180ms` | Menu/drawer transitions if approved. | Preserves orientation. |

Rule: Decorative animation is forbidden.

### Grid Scale

| Token | Value | Usage | Why |
| --- | --- | --- | --- |
| `grid.mobile.columns` | `1` | Mobile layout. | Single-column flow is required. |
| `grid.tablet.columns` | `6` | Tablet layout. | Reduces complexity when space is limited. |
| `grid.desktop.columns` | `12` | Desktop layout. | Supports scanning and comparison. |
| `grid.ultrawide.columns` | `12` | Ultra-wide layout. | Prevents unreadable stretching. |
| `grid.gutter` | `1.5rem` | Column spacing. | Keeps layout consistent. |

### Container Widths

| Token | Value | Usage | Why |
| --- | --- | --- | --- |
| `container.text` | `42rem` | Paragraph and reading content. | Prevents long lines. |
| `container.content` | `72rem` | Standard page content. | Creates consistent layout width. |
| `container.wide` | `88rem` | Projects or comparison sections. | Gives project proof more room. |
| `container.full` | `100%` | Full-bleed structural areas if needed. | Reserved for backgrounds or bands, not decorative cards. |

### Breakpoints

| Token | Value | Usage | Why |
| --- | --- | --- | --- |
| `breakpoint.mobile` | `< 768px` | Small screens. | Supports single-column layout. |
| `breakpoint.tablet` | `768px` | Medium screens. | Controls layout simplification. |
| `breakpoint.desktop` | `1024px` | Standard desktop. | Enables comparison layouts. |
| `breakpoint.ultrawide` | `1536px` | Large screens. | Protects readability. |

### Z-index Hierarchy

| Token | Value | Usage | Why |
| --- | --- | --- | --- |
| `z.base` | `0` | Normal content. | Default content layer. |
| `z.raised` | `10` | Raised cards or controls. | Functional separation. |
| `z.sticky` | `20` | Sticky navigation. | Keeps navigation above content. |
| `z.dropdown` | `30` | Menus if approved. | Supports navigation. |
| `z.overlay` | `40` | Backdrops. | Separates modal context. |
| `z.modal` | `50` | Modal/dialog if approved. | Highest interactive layer. |
| `z.toast` | `60` | Status feedback if future flows exist. | Reserved; current success states missing. |

## 3. Color System

Color values are defined as semantic MVP tokens. Use these tokens through CSS variables or Tailwind theme mappings; do not hardcode raw color values inside components.

| Token Group | Token | Value | Purpose | Usage | Accessibility Rule |
| --- | --- | --- | --- | --- | --- |
| Primary | `color.primary` | `#111827` | Primary action emphasis. | Primary CTA, selected navigation if appropriate. | Must pass WCAG 2.2 AA. |
| Secondary | `color.secondary` | `#374151` | Secondary interface emphasis. | Secondary CTA, secondary links. | Must remain legible. |
| Surface | `color.surface.base` | `#ffffff` | Main content surface. | Cards, sections, grouped content. | Must support text contrast. |
| Surface | `color.surface.raised` | `#f7f8fa` | Slightly elevated surface. | Project cards, experience cards. | Must not rely only on shadow. |
| Background | `color.background.page` | `#ffffff` | Page background. | Global background. | Must keep reading calm. |
| Border | `color.border.subtle` | `#e5e7eb` | Structural separation. | Cards, dividers, navigation. | Must be visible enough for grouping. |
| Border | `color.border.strong` | `#cbd5e1` | Strong separation. | Focus-adjacent or high-emphasis grouping. | Must not overpower content. |
| Text | `color.text.primary` | `#111827` | Highest text emphasis. | Headings, primary body. | Must satisfy WCAG 2.2 AA. |
| Text | `color.text.secondary` | `#4b5563` | Supporting text. | Descriptions, secondary details. | Must remain readable. |
| Muted | `color.text.muted` | `#6b7280` | Metadata. | Labels, captions, timestamps if later defined. | Must not be too low contrast. |
| Accent | `color.accent` | `#2563eb` | Restrained emphasis. | Links, focus, selective highlights. | Use sparingly and consistently. |
| Success | `color.success` | `#047857` | Success state. | Future form/status success only. | Must include text/icon support. |
| Warning | `color.warning` | `#b45309` | Warning state. | Future validation or unavailable state. | Must include text/icon support. |
| Error | `color.error` | `#b91c1c` | Error state. | Validation or error messages. | Must not rely on color alone. |
| Info | `color.info` | `#0369a1` | Informational state. | Neutral system messages if approved. | Must remain calm. |
| Hover | `color.state.hover` | `#f3f4f6` | Hover feedback. | Buttons, links, cards. | Must not reduce contrast. |
| Focus | `color.state.focus` | `#2563eb` | Keyboard focus indicator. | All interactive elements. | Must be highly visible. |
| Disabled | `color.state.disabled` | `#9ca3af` | Disabled UI. | Disabled buttons or inputs. | Must include disabled semantics. |

Hierarchy rules:

- Text and surface contrast is more important than mood.
- Accent color must be restrained and single-system.
- Status colors require text labels.
- Disabled states cannot rely only on opacity.
- Decorative gradients are not allowed.

## 4. Typography System

Font families, scale, line heights, letter spacing, and widths are defined for MVP implementation. Do not introduce additional font families without source approval.

### Font Families

| Token | Value | Usage | Why |
| --- | --- | --- | --- |
| `font.sans` | `Geist Sans, Inter, system-ui, sans-serif` | Interface and body text. | Must be clean, elegant, and highly readable. |
| `font.mono` | `Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace` | Code only if future snippets are approved. | Keeps technical content legible. |
| `font.display` | Same as `font.sans` | Optional hero/page display. | Must not become stylized or theatrical. |

### Heading Scale

| Token | Value | Usage | Rule |
| --- | --- | --- | --- |
| `type.hero` | Mobile `2.5rem`; desktop `3.5rem` | Hero headline. | Prominent but must not hide projects below excessive hero height. |
| `type.pageTitle` | Mobile `2rem`; desktop `2.5rem` | Page-level title. | Clear identity or page purpose. |
| `type.sectionHeading` | Mobile `1.5rem`; desktop `2rem` | Section headings. | Clear, not theatrical. |
| `type.cardTitle` | `1.125rem` | Project and experience titles. | Project titles must outrank skill titles. |
| `type.subheading` | `1rem` | Supporting headings. | Compact and readable. |

### Body Scale

| Token | Value | Usage | Rule |
| --- | --- | --- | --- |
| `type.body` | `1rem` | Primary paragraphs. | Must support scan and reading. |
| `type.bodySmall` | `0.9375rem` | Compact descriptions. | Must remain legible. |
| `type.metadata` | `0.875rem` | Status, labels, minor text. | Do not make too small for accessibility. |

### Caption Scale

| Token | Value | Usage | Rule |
| --- | --- | --- | --- |
| `type.caption` | `0.8125rem` | Captions and helper text. | Must not carry essential information alone. |
| `type.label` | `0.875rem` | Form labels, badges, navigation metadata. | Must be readable and consistent. |

### Code Scale

| Token | Value | Usage | Rule |
| --- | --- | --- | --- |
| `type.codeInline` | `0.9375rem` | Inline code if future content requires. | No decorative terminal styling. |
| `type.codeBlock` | `0.9375rem` | Code snippets if approved. | Must be short and readable. |

### Letter Spacing

| Token | Value | Usage | Rule |
| --- | --- | --- | --- |
| `tracking.default` | `0` | Body and headings. | Avoid negative tracking unless source-approved. |
| `tracking.label` | `0` | Labels and badges. | Must not reduce readability. |

### Line Height

| Token | Value | Usage | Rule |
| --- | --- | --- | --- |
| `leading.tight` | `1.15` | Short headings. | Avoid cramped multi-line headings. |
| `leading.normal` | `1.55` | Body text. | Default readable setting. |
| `leading.relaxed` | `1.7` | Longer paragraphs. | Use only when it improves reading. |

### Paragraph Width And Reading Width

| Token | Value | Usage | Why |
| --- | --- | --- | --- |
| `measure.paragraph` | `42rem` | Paragraph width. | Prevents long lines. |
| `measure.reading` | `48rem` | Long-form reading width. | Supports comprehension. |
| `measure.metadata` | `28rem` | Compact metadata groups. | Prevents scattered labels. |

### Monospace Rules

- Use monospace only for actual code, technical identifiers, or future approved snippets.
- Do not use fake terminal components.
- Do not use code typography as decoration.
- Code snippets are currently MISSING INFORMATION.

## 5. Spacing System

Use the spacing tokens defined above through semantic slots consistently.

| Context | Token Slot | Rule | Why |
| --- | --- | --- | --- |
| Margins | `layout.margin.*` | Maintain calm structure on every viewport. | Prevents cramped or stretched layouts. |
| Padding | `layout.padding.*` | Use consistent internal spacing across repeated components. | Makes UI feel engineered. |
| Containers | `container.*` | Constrain text and project layouts separately. | Protects readability while giving projects room. |
| Sections | `section.gap.*` | Separate major journey steps without burying proof. | Keeps recruiter path clear. |
| Cards | `card.padding.*` | Project cards may use stronger spacing than skill cards. | Projects are primary proof. |
| Buttons | `button.padding.*` | Keep labels readable and tap targets comfortable. | Supports interaction quality. |
| Navigation | `nav.gap.*` | Keep nav compact and predictable. | Reduces scanning friction. |
| Project pages | `project.layout.*` | Give project name, description, and status priority. | Supports technical evaluation. |
| Responsive spacing | `responsive.space.*` | Reduce spacing on mobile without crowding. | Preserves flow and touch usability. |

Rules:

- Do not use one-off spacing.
- Hero spacing must not push projects too far down.
- Skills and education should be compact.
- Project spacing should support comparison.

## 6. Iconography

### Icon Philosophy

Icons are supporting recognition tools, not decoration. Use them only when they improve scanability or interaction clarity.

### Stroke, Weight, And Sizes

| Attribute | Value | Rule |
| --- | --- | --- |
| Stroke | `2px` | Must be consistent across icon set. |
| Weight | Regular outline | Must match typography and visual weight. |
| Sizes | `16px`, `20px`, `24px` | Must support navigation, buttons, and social links without overpowering text. |

### Placement

- Icons may appear in social links, icon buttons, navigation toggles, and external link indicators if approved.
- Icons should not appear beside every label.
- Icon-only controls require accessible labels.

### Consistency

- Use one icon style.
- Do not mix filled, outline, and custom icons without source approval.
- Do not use icons as visual filler.

### Icon Library Recommendation

Use `lucide-react` for functional interface icons only when an icon is necessary.

Brand/social links may use text labels by default. If brand icons are added, they must be source-backed, accessible, and visually secondary to content.

### Rules

- Social icons are allowed if they map to GitHub, LinkedIn, X, and Email.
- Navigation menu icon may use a lucide menu icon with accessible text labels "Open navigation" and "Close navigation".
- External link icon may use a lucide external-link icon only when it clarifies that a link leaves the site.
- Icons must not replace visible labels unless space requires it and accessibility labels are present.

## 7. Buttons

Approved visible labels are defined in `CONTENT_SPEC.md`: View Projects, Resume, Contact, GitHub, LinkedIn, X, Email.

### Button Variants

| Variant | Usage | Visual Priority | Rules |
| --- | --- | --- | --- |
| Primary | Main CTA: View Projects. | Highest. | Must guide users to projects. |
| Secondary | Resume CTA. | Medium. | Routes to `/resume`; must not imply download/open behavior until resume asset/path is defined. |
| Ghost | Low-emphasis secondary actions. | Low. | Use sparingly; must remain legible. |
| Text | Inline or low-emphasis navigation. | Low. | Must be visibly interactive. |
| Icon | Social links or compact controls. | Contextual. | Must include accessible label. |
| Danger | Destructive action. | Not currently needed. | No destructive flows are defined. |
| Loading | Temporary async state. | MISSING INFORMATION. | Static site should minimize loading states. |
| Disabled | Unavailable action. | Low. | Must be semantically disabled and not rely only on opacity. |

### Button Sizes

| Size | Value | Usage |
| --- | --- | --- |
| `button.size.sm` | `2rem` height | Compact secondary actions if needed. |
| `button.size.md` | `2.5rem` height | Default buttons. |
| `button.size.lg` | `3rem` height | Hero CTA if needed. |
| `button.size.icon` | `2.5rem` square | Icon-only buttons. |

### Button States

| State | Requirement | Why |
| --- | --- | --- |
| Default | Clear affordance and readable label. | Users must identify actions quickly. |
| Hover | Confirm interactivity without layout shift. | Keeps UI stable. |
| Focus | Highly visible focus indicator. | Keyboard accessibility. |
| Active | Subtle feedback. | Confirms action. |
| Loading | MISSING INFORMATION. | No async flows are currently defined. |
| Disabled | Visible and semantic. | Prevents false affordance. |

Rules:

- Buttons must not resize on hover.
- Essential labels must remain visible.
- Button text must not wrap awkwardly.
- Do not create new button labels without content approval.

## 8. Cards

Cards should group repeated content when comparison or scanning matters. Do not turn every section into a card.

### Card Types

| Component | Purpose | Required Content | Visual Priority |
| --- | --- | --- | --- |
| `ProjectCard` | Present project proof. | Project name, one-line description, status "In Progress". | Highest card priority. |
| `ExperienceCard` | Present professional experience. | Company, role, documented highlights. | High. |
| `SkillCard` | Group skills by category. | Category name and documented skills. | Supporting. |
| `InformationCard` | Group identity, education, or philosophy facts. | Source-backed content only. | Supporting. |
| `ResumeCard` | Provide resume access. | Label "Resume"; destination `/resume`. | Action-supporting. |

### Interaction Rules

- Cards may be interactive only when a destination or action is defined.
- Project cards link to their static project detail routes.
- Non-interactive cards must not look clickable.
- Essential content must be visible without hover.

### Hover Rules

- Hover may adjust border, surface, shadow, or transform subtly if token-approved.
- Hover must not move layout.
- Hover must not reveal essential content.
- Excessive glow, tilt, zoom, or rotation is forbidden.

### Spacing Rules

- Project cards should have enough space for comparison and description.
- Skill cards should be compact.
- Experience cards should prioritize role and highlights.
- Card padding uses `space.4` by default and may use `space.5` for primary project cards.

### Elevation Rules

- Use shallow elevation only.
- Borders may be preferred over shadows for structural clarity.
- Nested cards are forbidden.
- Floating card sections are forbidden.

## 9. Navigation Components

### Desktop Navigation

Required labels and order:

1. Home
2. Projects
3. Experience
4. About
5. Resume
6. Contact

Rules:

- Navigation must be stable and predictable.
- Do not add undocumented nav items.
- Social links are secondary and must not compete with primary navigation.

### Mobile Navigation

Mobile labels must match desktop labels exactly.

Behavior:

- Use a menu/drawer pattern only on viewports where the desktop navigation no longer fits comfortably.
- The closed control label is "Open navigation".
- The open control label is "Close navigation".
- Escape closes the menu/drawer.
- Focus returns to the trigger after close.

Rules:

- Mobile navigation must be keyboard accessible.
- If a drawer or menu is used, focus management is required.
- Essential navigation must not be hidden behind unclear icons.

### Sticky Navigation

Sticky navigation is allowed only if it improves orientation and does not reduce reading space or performance.

Sticky behavior:

- Sticky navigation is optional for MVP.
- If used, it must remain compact, must not cover page headings, and must not introduce scroll-linked animation.

### Scroll Behaviour

- Scrolling must follow the recruiter journey.
- Scroll hijacking is forbidden.
- Scroll effects must not hide required content.

### Active State

Active state token:

- `nav.active`: active link uses `color.text.primary`, a visible underline or border, and `aria-current="page"`.

Rules:

- Active state must be visible.
- Active state cannot rely only on color.

### Focus State

Focus token:

- `focus.ring`: `2px solid color.state.focus` with `2px` offset.

Rules:

- Focus must be visible on every nav item.
- Focus order must follow reading order.

### Keyboard Navigation

Required:

- Tab through nav links.
- Activate links with keyboard.
- Escape closes the mobile menu/drawer.
- Focus trap for open drawer/menu if implemented.

## 10. Forms

There is no backend, no database, and no contact form requirement. Forms are not part of the current product scope.

These standards exist only for future static-safe or source-approved form-like UI.

### Inputs

| Element | Status | Rule |
| --- | --- | --- |
| Text input | Future only | Must include visible label and accessible name. |
| Email input | Future only | Do not add contact form without source approval. |
| Select | Future only | Must support keyboard. |
| Checkbox | Future only | Use for binary choices only. |

### Textarea

Status: Future only.

Rule: Do not add message forms without approved backend or static-safe behavior.

### Validation

Validation copy: MISSING INFORMATION

Rules:

- Validation must be visible as text.
- Validation cannot rely on color alone.
- Errors must be associated with fields.

### Errors

Error content is MISSING INFORMATION. Do not invent form error copy.

### Success

Success content is MISSING INFORMATION. No transactional success flows are defined.

### Labels

- Labels must be visible.
- Placeholder text must not replace labels.
- Required/optional indicators require approved copy.

### Accessibility

- Every field must have accessible name.
- Every error must be programmatically associated.
- Keyboard access is mandatory.

## 11. Badges

### Badge Variants

| Badge | Approved Label | Status | Usage |
| --- | --- | --- | --- |
| Project Status | In Progress | Approved | Required for all four projects. |
| Technology | Source-backed tags only | Conditional | Use only approved tags from `CONTENT_SPEC.md`. |
| Featured | MISSING INFORMATION | Not approved as badge text | Use section hierarchy instead. |
| Research | MISSING INFORMATION | Not approved as badge text | Do not add unless source-backed. |
| Open Source | MISSING INFORMATION | Not approved as badge text | Do not add unless source-backed. |

### Badge Rules

- Badges must be text-readable.
- Badges must not imply unsupported status or credibility.
- Do not use badges as decoration.
- Do not add badges for certifications, metrics, awards, or rankings.
- Badge colors are semantic and MISSING INFORMATION.

## 12. Motion Tokens

Motion values are defined for MVP. All values must be disabled or reduced for users who prefer reduced motion.

### Duration

| Token | Value | Usage |
| --- | --- | --- |
| `duration.instant` | `0ms` | Immediate state changes. |
| `duration.fast` | `120ms` | Hover/focus feedback. |
| `duration.base` | `180ms` | Default UI transition. |
| `duration.slow` | `240ms` | Major transition if approved. |

### Delay

| Token | Value | Usage |
| --- | --- | --- |
| `delay.none` | `0ms` | Default. |
| `delay.stagger` | `40ms` | Subtle content sequencing if approved. |

### Easing

| Token | Value | Usage |
| --- | --- | --- |
| `ease.standard` | `cubic-bezier(0.2, 0, 0, 1)` | Default transitions. |
| `ease.enter` | `cubic-bezier(0.16, 1, 0.3, 1)` | Content entrance. |
| `ease.exit` | `cubic-bezier(0.7, 0, 0.84, 0)` | Content exit. |

### Spring

Spring values: not used for MVP. If Framer Motion is later approved for a specific interaction, define spring values before implementation.

Rule: Avoid bouncy, playful, exaggerated, or elastic motion.

### Motion Contexts

| Context | Status | Rule |
| --- | --- | --- |
| Hover | Allowed | Must confirm interactivity only. |
| Scroll | Conditional | No scroll hijacking or hidden required content. |
| Page Transition | Conditional | Must not add meaningful performance cost. |
| Loading | MISSING INFORMATION | Static site should minimize loading states. |
| Modal | Future only | No modal requirement currently defined. |
| Drawer | Conditional for mobile nav | Focus management required. |
| Accordion | Future only | Essential content must not be inaccessible. |

Global motion rules:

- Respect reduced-motion preferences.
- Animate transform and opacity where possible.
- Do not animate layout properties in ways that cause shift.
- Do not use decorative loops.

## 13. Grid System

Grid values are defined by the token scale above.

### Grid Requirements

| Viewport | Columns | Container | Margins | Gutters | Rules |
| --- | --- | --- | --- | --- | --- |
| Mobile | `1` | `space.4` | `container.content` | `< 768px` | Single-column reading flow. |
| Tablet | `6` | `space.5` | `container.content` | `768px` | Reduce columns when cramped. |
| Desktop | `12` | `space.5` | `container.content` | `1024px` | Support scanning and project comparison. |
| Ultra-wide | `12` | `space.6` | `container.wide` | `1536px` | Constrain text and avoid stretched layout. |

### Alignment

- Text-heavy content should generally be left-aligned.
- Center alignment is allowed only when it improves first-impression clarity.
- Mixed alignment in a section is not allowed.

### Maximum Width

Maximum widths are defined in the container token scale.

Rules:

- Paragraphs must not span full desktop width.
- Projects may use a wider content area than text.
- Ultra-wide screens must preserve readable line lengths.

## 14. Responsive Rules

| Area | Rule | Why |
| --- | --- | --- |
| Typography | Maintain readable hierarchy without viewport-scaling text arbitrarily. | Prevents broken layouts and unreadable copy. |
| Spacing | Reduce spacing on smaller screens while preserving section recognition. | Keeps mobile journey efficient. |
| Navigation | Mobile labels must match desktop labels. | Prevents IA drift. |
| Cards | Collapse to fewer columns when cramped. | Prevents text wrapping and overlap. |
| Projects | Keep project name, description, and status visible. | Projects are primary proof. |
| Images | Asset rules are MISSING INFORMATION; never use images that obscure content. | Assets are not approved yet. |
| Buttons | Labels must remain readable and tap targets usable. | CTA clarity is required. |
| Interactions | No hover-only content on touch devices. | Supports mobile accessibility. |

Responsive breakpoints are defined in the breakpoint token scale.

## 15. Component Naming Convention

Use PascalCase for components and semantic names that reflect purpose, not styling.

### Naming Rules

- Components: `PascalCase`.
- Variants: descriptive suffixes or props.
- Tokens: dot notation by category.
- Do not name components after visual trends.
- Do not create components for unsupported features.

### Core Component Names

| Component Name | Purpose | Status |
| --- | --- | --- |
| `AppShell` | Global page structure. | Approved concept. |
| `SiteHeader` | Primary navigation wrapper. | Approved concept. |
| `DesktopNavigation` | Desktop nav. | Approved concept. |
| `MobileNavigation` | Mobile nav. | Approved concept; use open/close labels from content spec. |
| `SiteFooter` | Footer navigation/contact area. | Approved concept. |
| `HeroSection` | Homepage hero. | Approved concept. |
| `HeroTitle` | Hero headline. | Approved concept. |
| `HeroStatement` | Hero supporting statement. | Approved concept. |
| `Section` | Generic page section wrapper. | Approved concept. |
| `SectionHeading` | Section heading. | Approved concept. |
| `SectionIntro` | Optional section intro. | Content often MISSING INFORMATION. |
| `Button` | Base button primitive. | Approved concept. |
| `ButtonPrimary` | Primary CTA. | Approved concept. |
| `ButtonSecondary` | Secondary CTA. | Approved concept. |
| `ButtonGhost` | Low-emphasis action. | Conditional. |
| `ButtonText` | Text action. | Conditional. |
| `IconButton` | Icon-only action. | Conditional; requires accessible label. |
| `ProjectCard` | Project summary card. | Approved concept. |
| `ProjectStatusBadge` | Project status. | Approved content: In Progress. |
| `ExperienceCard` | Experience entry. | Approved concept. |
| `SkillGroup` | Skill category group. | Approved concept. |
| `EducationSummary` | Education facts. | Approved concept. |
| `ResumeCard` | Resume access surface. | Destination `/resume`. |
| `ContactLinks` | Contact and social links. | Approved concept. |
| `SocialLink` | Individual social link. | Approved concept. |
| `InfoCard` | Source-backed facts. | Conditional. |
| `Badge` | Base badge primitive. | Approved concept. |
| `FormField` | Future form primitive. | Future only. |
| `Input` | Future input. | Future only. |
| `Textarea` | Future textarea. | Future only. |

Rule: New component names must describe content role, not visual treatment. Example: use `ProjectCard`, not `GlassCard`.

## 16. Accessibility Rules

| Area | Rule | Why |
| --- | --- | --- |
| Contrast | Must meet WCAG 2.2 AA for text and interactive controls. | Supports readable content. |
| Focus | Every interactive element needs visible focus. | Required for keyboard users. |
| Keyboard | All navigation, CTAs, links, and interactive cards must be keyboard operable. | Prevents inaccessible interaction. |
| ARIA | Use accessible labels from `CONTENT_SPEC.md`; do not create unlabeled icon-only controls. | Keeps labels source-backed. |
| Reduced Motion | Provide reduced-motion behavior for all animations. | Protects motion-sensitive users. |
| Touch Targets | Interactive targets must be at least `44px` in either size or effective hit area. | Supports mobile usability. |
| Readable Width | Paragraph and reading widths must be constrained. | Improves comprehension. |
| Zoom | Layout must remain usable when browser zoom increases. | Supports low-vision users. |

Additional rules:

- Do not remove focus outlines for aesthetics.
- Do not rely on color alone.
- Do not use icon-only controls without labels.
- Do not expose decorative animation to screen readers.
- Project status must be text.

## 17. Performance Rules

| Area | Rule | Why |
| --- | --- | --- |
| Maximum shadows | Use only `shadow.none`, `shadow.subtle`, `shadow.interactive`, or `shadow.overlay`. | Heavy shadows reduce performance and conflict with restraint. |
| Maximum blur | Use only `blur.none`, `blur.subtle`, or `blur.overlay`; blur is reserved for functional overlays. | Prevents glassmorphism and GPU cost. |
| Maximum animations | No decorative loops; use only approved motion contexts and durations. | Keeps site fast and calm. |
| GPU-friendly animations | Prefer transform and opacity when motion is approved. | Reduces layout work. |
| Image rules | Assets are MISSING INFORMATION; future images must be optimized and source-backed. | Prevents heavy or misleading visuals. |
| SVG rules | SVGs must be structural or iconographic, not decorative filler. | Avoids unnecessary visual noise. |
| Icon rules | Use one icon system; avoid dense icon walls. | Reduces payload and visual clutter. |
| Lazy loading rules | Future non-critical images should be lazy-loaded if assets are added. | Protects initial load. |

Forbidden for performance:

- Constant animated backgrounds.
- Heavy parallax.
- Scroll hijacking.
- Large decorative media.
- Unnecessary JavaScript for static content.

## 18. Forbidden Patterns

The following patterns are forbidden:

- Random gradients.
- Heavy glassmorphism.
- Nested cards.
- Inconsistent spacing.
- Multiple accent colors.
- Low contrast.
- Tiny buttons.
- Tiny text.
- Decorative UI.
- Particle backgrounds.
- Matrix rain.
- Typing animation.
- Visitor counter.
- Skill bars.
- Skill percentages.
- Skill ratings.
- Fake terminal.
- Decorative terminal windows.
- Generic AI illustrations.
- Bokeh blobs.
- Decorative orbs.
- Stock-like futuristic imagery.
- Fake dashboards.
- Fake metrics.
- Fake testimonials.
- GitHub contribution graph.
- Blog section.
- Certifications section.
- Unsupported achievements.
- Unsupported employer dates.
- Unsupported project repo links.
- Unsupported demo links.
- Unsupported project maturity.
- Hover-only essential content.
- Contact forms requiring backend.
- Authentication flows.
- CMS-dependent content.
- Decorative loading animation.
- Page transitions that delay content.
- Oversized hero hiding projects.
- Floating page sections styled as cards.
- Decorative images behind body text.
- Dense icon walls.
- Overly playful microinteractions.
- Loud color systems.
- Arbitrary token values.
- Components named after visual trends.

Why: These patterns reduce credibility, accessibility, performance, or alignment with the documented portfolio constitution.

## 19. Future Expansion

### Adding New Components

New components may be added only when:

1. A documented product need exists.
2. The component supports credibility, clarity, trust, or technical depth.
3. The content exists in `FOUNDATION.md`, `docs/PRD.md`, `docs/CONTENT_SPEC.md`, or a newer approved source document.
4. The component follows this design system.
5. Accessibility and performance rules are defined.

New component proposal must include:

- Component name.
- Purpose.
- Content requirements.
- Variants.
- States.
- Accessibility behavior.
- Performance considerations.
- Source document reference.

### Token Evolution

Token values are currently unresolved. Before implementation, a future approved document must define exact values for:

- Colors.
- Typography.
- Spacing.
- Radius.
- Shadows.
- Blur.
- Breakpoints.
- Grid.
- Motion.
- Accessibility targets.

Token changes must:

- Use semantic names.
- Avoid one-off values.
- Preserve visual restraint.
- Preserve accessibility.
- Preserve performance.
- Not introduce arbitrary colors or spacing.

### Versioning Strategy

| Version Type | When To Use | Requirement |
| --- | --- | --- |
| Patch | Clarifies wording without changing behavior. | Must not alter component semantics. |
| Minor | Adds approved token values or new approved components. | Must reference source approval. |
| Major | Changes hierarchy, core visual language, or component architecture. | Requires update to upstream source documents. |

### Governance

- `FOUNDATION.md` remains the highest-priority source.
- This document governs UI component implementation.
- Missing information must not be silently filled by designers or engineers.
- Any component that violates this document must be changed or removed.
