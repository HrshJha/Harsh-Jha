# Component Specification

## 1. Component Philosophy

### Component Strategy

The portfolio must use a hybrid component architecture:

- Shared primitives for low-level reusable UI.
- Layout components for global structure.
- Feature components for portfolio domains.
- Route-level composition in Next.js App Router pages.

Server Components are the default. Client Components are allowed only for browser-only behavior such as mobile navigation state, focus management for drawers, reduced-motion-aware animation controls, or Intersection Observer section reveals.

### Reusability Philosophy

Components should be reusable only when reuse preserves clarity. Do not over-abstract single-use content into generic components if it makes source-backed content harder to audit.

Reusable components must not contain portfolio copy unless the component exists specifically for that feature. Example: `Button` must not know about "View Projects"; `HeroSection` may.

### Composition Philosophy

Composition should flow from stable primitives into source-backed feature sections:

1. Layout components provide page structure.
2. Shared primitives provide accessible UI behavior.
3. Feature components bind content to layout.
4. Route files compose feature components into pages.

### Separation Of Concerns

| Concern | Owner |
| --- | --- |
| Static content | `content/` modules |
| Design tokens | `styles/` and design-system token mapping |
| Shared UI behavior | `components/ui/` |
| Global page shell | `components/layout/` |
| Portfolio sections | `features/*/components/` |
| Route composition | `app/**/page.tsx` |
| Metadata | `app/` and `lib/metadata` |

### Single Responsibility Principle

Every component must have one reason to change:

- `ProjectCard` changes when project-card presentation changes.
- `ProjectsSection` changes when the project-section composition changes.
- `projects` content changes when approved project content changes.

No component may own unrelated copy, data transformation, navigation state, animation orchestration, and layout at the same time.

### Naming Conventions

- Components use `PascalCase`.
- Hooks use `use` prefix.
- Components are named by content role, not visual treatment.
- Do not use trend-based names such as `GlassCard`, `GlowButton`, `MagicHero`, or `TerminalPanel`.
- Future-only components must remain unimplemented until source documents approve their content and behavior.

## 2. Global Layout Components

| Component | Purpose | Responsibilities | Props | Children | Dependencies | Accessibility | Responsive Behavior | Animations | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `RootLayout` | Next.js root application shell. | Define HTML language, global metadata integration, font variables once approved, global styles, and stable body structure. | `children`; route metadata comes from Next.js. | Entire app. | Next.js App Router, global styles, font config. | Must set document language; must not create duplicate `main`. | Applies global responsive base; no layout decisions beyond shell. | None. | Exists in App Router; keeps pages statically renderable; no client-only wrapper unless required. |
| `Providers` | Optional client-provider boundary. | Host only required client providers. Current MVP should avoid providers unless mobile nav/motion tooling requires one. | `children`. | App subtree. | MISSING INFORMATION unless approved provider exists. | Must not break semantic structure. | No visual behavior. | None by default. | Omitted or minimal for MVP; no global state or theme provider unless approved. |
| `ThemeProvider` | Future theme context. | Future-only support for theme mode if approved. | MISSING INFORMATION. | App subtree. | Theme strategy MISSING INFORMATION. | Must preserve user preferences if implemented. | Must not cause hydration flicker. | Theme transitions MISSING INFORMATION. | Not implemented for MVP because theme toggle/dark mode behavior is missing. |
| `Metadata` | Metadata configuration pattern, not a visual component. | Centralize title, description, Open Graph, Twitter, structured data hooks, canonical URLs once domain exists. | Site config and route metadata objects. | None. | `content/`, `config/`, `lib/metadata`. | Metadata must describe content accurately. | Not visual. | None. | Uses approved metadata only; omits preview image and canonical URL until defined. |
| `PageWrapper` | Route-level structural wrapper. | Provide consistent page spacing, section order, and page-level constraints. | `as`, `variant`, `className`, `children`. | Page sections. | `Container`, `MainLayout`. | Must preserve single `main` ownership. | Adapts spacing by viewport using tokens. | None by default. | Does not add decorative wrappers or floating page cards. |
| `Container` | Width and margin constraint. | Constrain content, text, and wide project layouts. | `size`, `className`, `children`. | Any content. | Design-system container tokens. | No ARIA needed. | Uses text/content/wide/full container variants. | None. | Prevents full-width paragraphs on desktop and ultra-wide screens. |
| `Section` | Semantic section wrapper. | Provide section landmarks, heading association, spacing, and optional `aria-labelledby`. | `id`, `labelledBy`, `variant`, `children`. | Section content. | `Container`, `SectionHeading`. | Must use semantic sectioning and heading association. | Section spacing adapts to viewport. | Optional reveal only if approved. | Keeps recruiter journey order intact. |
| `MainLayout` | Main content landmark. | Own the page `main` element and compose route content. | `children`. | Route sections. | `PageWrapper`. | Exactly one main landmark per page. | Full responsive flow. | None. | All page content appears inside main. |
| `FooterLayout` | Footer structural wrapper. | Organize footer navigation, social/contact links, and optional footer copy if approved. | `children`. | Footer components. | `FooterNavigation`, `FooterSocial`. | Uses `footer` landmark. | Compact stacking on mobile. | None. | Does not introduce unsupported copyright/built-with copy. |
| `NavigationLayout` | Header/nav structural wrapper. | Arrange desktop and mobile nav entry points. | `children`, `sticky` if approved. | Nav components. | `DesktopNavbar`, `MobileNavbar`. | Uses `header` and `nav` landmarks. | Desktop nav on larger viewports; mobile nav on smaller viewports. | Drawer/menu animation if approved. | Contains only approved nav labels in approved order. |

## 3. Navigation Components

| Component | Purpose | Props | Behavior | Animations | Keyboard Interactions | ARIA Requirements | Responsive Behavior | States |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `DesktopNavbar` | Primary desktop navigation. | `items`, `activePath`, `socialLinks` optional. | Renders Home, Projects, Experience, About, Resume, Contact in order. | Hover/focus transition only. | Tab through links; Enter activates. | `nav` with accessible label; labels from content spec. | Hidden or replaced on mobile. | Default, hover, focus, active. |
| `MobileNavbar` | Mobile navigation entry. | `items`, `isOpen`, `onOpen`, `onClose`. | Opens navigation drawer/menu if mobile nav is implemented. | Menu open/close transition uses design-system motion tokens. | Button opens menu; Escape closes if drawer used. | Toggle labels: "Open navigation" and "Close navigation". | Visible on mobile/tablet as needed. | Closed, open, focus. |
| `NavItem` | Single navigation link. | `label`, `href`, `isActive`, `external` optional. | Navigates to approved route or external URL. | Hover/focus only. | Focusable link; Enter activates. | Accessible name equals visible label. | Stable label across viewports. | Default, hover, focus, active, disabled if destination missing. |
| `NavGroup` | Group related nav links. | `label` optional, `items`. | Groups primary or secondary links. | None. | Tab order follows visual order. | Group label only if visible/source-backed. | May stack on mobile. | Default. |
| `Logo` | Site identity link. | `label`, `href`. | Links to Home; visual asset logo is MISSING INFORMATION. | Hover/focus only. | Focusable link. | Accessible name should identify Harsh Kumar Jha or Home. | Text-based identity until logo asset approved. | Default, hover, focus. |
| `ThemeToggle` | Theme switcher. | MISSING INFORMATION. | Not applicable for MVP. Theme behavior is MISSING INFORMATION. | None. | Not implemented. | Not implemented. | Not implemented. | Not implemented. |
| `NavigationDrawer` | Mobile nav drawer if chosen. | `isOpen`, `onClose`, `items`, `children`. | Contains mobile nav links and traps focus while open. | Open/close transform or opacity only. | Escape closes; focus remains inside; focus returns to trigger. | `dialog` or equivalent if drawer overlays page; label required. | Mobile only. | Closed, opening, open, closing. |
| `ActiveIndicator` | Show active route. | `activePath`, `itemHref`. | Indicates current route without relying only on color. | Subtle transition only. | No independent keyboard behavior. | Current page uses `aria-current="page"`. | Works in desktop and mobile nav. | Active, inactive. |
| `ScrollProgress` | Scroll progress indicator. | MISSING INFORMATION. | Not applicable for MVP unless approved. | Would be scroll-linked; high risk of decorative behavior. | Not interactive. | Must be hidden from screen readers if decorative. | MISSING INFORMATION. | Not implemented by default. |

## 4. Hero Components

| Component | Purpose | Content Source | Interactions | Animations | Responsive Behavior | Accessibility | Dependencies |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `HeroSection` | Introduce identity and primary next actions. | `FOUNDATION.md` and `CONTENT_SPEC.md`. | Contains primary CTA to Projects, secondary CTA to Resume, social links. | Optional section reveal only if approved; no typing animation. | Must not become oversized; projects should remain discoverable. | Contains page H1 strategy once finalized; all actions keyboard accessible. | `HeroTitle`, `HeroSubtitle`, `CTAGroup`, `SocialLinks`. |
| `HeroTitle` | Render approved page identity and professional headline hierarchy. | H1: "Harsh Kumar Jha"; professional headline: "Building AI Products, Open Source & Real-World Solutions". | None. | None or minimal entrance if approved. | Wraps cleanly on mobile. | Must preserve correct heading hierarchy. | Typography tokens. |
| `HeroSubtitle` | Render hero statement. | "Turning ideas into intelligent products through machine learning and engineering." | None. | None or paired with hero reveal. | Constrained readable width. | Text is readable and not hidden behind animation. | Typography tokens. |
| `HeroDescription` | Optional supporting description. | MISSING INFORMATION. | None. | None. | MISSING INFORMATION. | Not implemented until source-backed copy exists. | None. |
| `CTAGroup` | Group primary and secondary CTAs. | Labels: View Projects, Resume. | View Projects navigates to Projects; Resume navigates to `/resume`. | Button hover/focus only. | Stacks or wraps without awkward text overflow. | Buttons/links have accessible names. | `Button`, route config. |
| `SocialLinks` | Show approved social destinations. | GitHub, LinkedIn, X; email in contact/footer contexts. | External navigation. | Hover/focus only. | Compact; labels or accessible labels required. | Icon-only links require accessible names. | `SocialLink`, optional `Icon`. |
| `BackgroundAnimation` | Decorative hero background animation. | Not source-backed. | None. | Not allowed for MVP. | Not implemented. | Decorative motion would be hidden if ever approved. | None. |
| `ProfileImage` | Optional professional photo. | Asset and alt text MISSING INFORMATION. | None. | None unless approved. | Must not dominate hero. | Requires approved alt text. | `next/image` if asset approved. |
| `HeroBadge` | Optional hero badge. | MISSING INFORMATION. | None. | None. | Not implemented until approved. | Badge text must be source-backed. | `Badge`. |
| `ScrollIndicator` | Indicate more content below. | MISSING INFORMATION. | Optional anchor behavior if approved. | Risk of decorative motion; not implemented by default. | Not needed if projects are visible/discoverable. | Must not be essential. | None. |

## 5. Project Components

| Component | Purpose | Inputs | Outputs | States | Loading | Error | Accessibility | Animation | Responsive Behavior | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `ProjectsSection` | Present featured projects as primary proof. | Approved project list. | Section with heading and project grid/list. | Default. | None for static content. | Missing project content should fail build or QA, not render invented fallback. | Section labelled by heading. | Optional reveal only if approved. | Projects remain prominent after Hero. | Shows all four projects with approved descriptions and status. |
| `FeaturedProjectCard` | Higher-emphasis project card if layout differentiates featured cards. | Project name, description, status. | Project summary card. | Default, hover/focus if interactive. | None. | No unsupported fields. | Use `article`; status as text. | Hover transition only if interactive. | Card content stays readable. | Does not show repo/demo/metrics. |
| `ProjectGrid` | Layout project cards. | Projects array, layout variant. | Responsive grid/list. | Default. | None. | Empty state should not occur for required content. | List or region semantics as appropriate. | None. | Mobile single column; desktop comparison layout. | Preserves project order if specified by content. |
| `ProjectCard` | Standard project summary. | Project object. | Name, one-line description, status, link to static detail route. | Default, hover, focus. | None. | Missing project slug fails content validation. | `article`; project title link points to detail page. | Hover/focus only. | No hover-only content. | Essential content visible without interaction. |
| `ProjectPreview` | Optional visual preview. | Asset MISSING INFORMATION. | Not implemented for MVP. | Not applicable. | Not applicable. | MISSING INFORMATION. | Requires approved alt text. | None. | MISSING INFORMATION. | Must not render stock/fake visuals. |
| `ProjectTags` | Show source-backed tags. | Tags from approved content. | Tag list. | Default. | None. | Unsupported tags omitted. | Use list semantics if multiple. | None. | Wraps cleanly. | Does not infer project-specific tags. |
| `TechStack` | Show technologies for a project. | MISSING INFORMATION. | Not implemented for MVP. | Not applicable. | Not applicable. | Not applicable. | Not implemented until project tech stack is source-backed. | None. | MISSING INFORMATION. | Does not infer stack from general skills. |
| `GitHubButton` | Link to project repository. | Project repo URL. | Not implemented for MVP. | Disabled/not rendered. | None. | URL missing. | If future enabled, accessible link name required. | Hover/focus only. | Button label stable. | Must not render until repo URL exists. |
| `CaseStudyButton` | Link to case study/project detail. | Detail route or case-study URL. | Conditional link. | Default, disabled/not rendered if no detail. | None. | Missing detail content. | Accessible link name required. | Hover/focus only. | Must not imply missing content. | Only links to source-backed project detail. |
| `StatusBadge` | Display project status. | Status label. | Badge text "In Progress". | Default. | None. | Missing status should fail content validation. | Status is readable text. | None. | Compact and readable. | All four projects show In Progress. |
| `ProjectHeader` | Project detail header. | Project name, description, status. | Detail page header. | Default. | None. | Missing detail fields omitted. | Correct heading hierarchy. | None or approved reveal. | Maintains readable width. | Only source-backed content is shown. |
| `ProjectGallery` | Show project images. | Images MISSING INFORMATION. | Not implemented for MVP. | Not applicable. | Not applicable. | Missing images. | Requires alt text per image. | None. | MISSING INFORMATION. | Must not use placeholder/fake images. |
| `ArchitectureDiagram` | Show project architecture. | Diagram MISSING INFORMATION. | Not implemented for MVP. | Not applicable. | Not applicable. | Missing diagram/source. | Requires accessible explanation. | None. | Must remain readable if approved. | Must not invent architecture. |
| `MetricsSection` | Show metrics/outcomes. | Metrics MISSING INFORMATION. | Not implemented; fake metrics forbidden. | Not applicable. | Not applicable. | Metrics missing. | Not applicable. | None. | Not applicable. | Must not exist until verified metrics are source-backed. |
| `FutureWorkSection` | Show future project roadmap. | MISSING INFORMATION. | Not implemented for MVP. | Not applicable. | Not applicable. | Missing future content. | Not applicable. | None. | Not applicable. | Must not invent future work. |
| `NavigationBetweenProjects` | Move between project detail pages. | Project slugs/order. | Prev/next links if detail pages exist. | Default. | None. | Missing detail pages. | Links accessible by text. | Hover/focus only. | Stacks on mobile. | Only appears when detail routes are implemented. |

## 6. Experience Components

| Component | Purpose | Inputs | Behavior | Accessibility | Responsive Behavior | Animation | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `Timeline` | Present experience entries. | Experience list. | Orders documented roles; dates are MISSING INFORMATION. | Section/list semantics. | May collapse to stacked list on mobile. | Optional reveal only. | Does not invent dates. |
| `TimelineItem` | Single timeline entry. | Company, role, highlights. | Renders source-backed role content. | Each item has clear heading. | Full-width on mobile. | None or subtle reveal. | No unsupported achievements. |
| `CompanyCard` | Company-level grouping. | Company name, role children. | Groups role info. | Heading/region semantics if needed. | Stacks. | Hover only if interactive; not needed by default. | Company names match source. |
| `RoleCard` | Role details. | Role title, highlights. | Displays title and highlights. | Highlights as list. | Compact but readable. | None. | Titles and highlights match source. |
| `DurationBadge` | Show date/duration. | Dates MISSING INFORMATION. | Not implemented for MVP. | Not applicable. | Not applicable. | None. | Must not render until dates are approved. |
| `TechnologyList` | Show documented role technologies/topics. | Experience highlights. | Lists AI safety, FastAPI, etc. where source-backed. | Use list semantics. | Wraps cleanly. | None. | Does not infer unlisted technologies. |
| `AchievementList` | Show achievements. | Achievements MISSING INFORMATION except "2000+ JEE Physics questions" highlight. | Use only approved highlights. | List semantics. | Stacks. | None. | Does not turn responsibilities into inflated achievements. |

## 7. About Components

| Component | Purpose | Inputs | Behavior | Accessibility | Responsive Behavior | Animation | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `AboutSection` | Present identity, philosophy, vision, values. | Approved about content. | Composes about subcomponents. | Section labelled by heading. | Compact linear flow on mobile. | Optional reveal only. | No unsupported biography. |
| `Biography` | Biography area. | Biography content MISSING INFORMATION; identity facts approved. | Render structured identity facts only until biography exists. | Proper headings and lists. | Readable width. | None. | Does not invent personal narrative. |
| `EngineeringPhilosophy` | Show approved engineering philosophy. | Six philosophy statements. | Displays as list or paired statements. | List semantics. | Compact. | None. | Uses exact approved statements. |
| `LearningPhilosophy` | Show learning philosophy. | Partial approved content: Understanding over memorization; Research before implementation; Continuous Learning. | Can appear as subset of philosophy/values. | List semantics if rendered. | Compact. | None. | Expanded paragraph not added. |
| `ProfessionalPhoto` | Display photo. | Asset and alt text MISSING INFORMATION. | Not implemented for MVP. | Requires approved alt. | Must not dominate hero/about. | None. | No placeholder photo. |
| `ValuesGrid` | Display core values. | Approved values list. | Renders values as labels/list. | List semantics. | Grid collapses to list. | None. | No unapproved value descriptions. |
| `CompetitiveAdvantages` | Show differentiators. | MISSING INFORMATION. | Not implemented for MVP. | Not applicable. | Not applicable. | None. | Must not use comparative claims. |

## 8. Skills Components

| Component | Purpose | Inputs | Behavior | Accessibility | Responsive Behavior | Animation | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `SkillsSection` | Present documented skills. | Skill categories. | Composes categories in approved order. | Section heading and lists. | Compact mobile list. | Optional reveal only. | No percentages or levels. |
| `SkillCategory` | Group skills by category. | Category name, skills. | Renders category and items. | Heading plus list. | Stacks on mobile. | None. | Category order is Programming, Libraries, Backend, Developer Tools. |
| `SkillItem` | Single skill label. | Skill name. | Displays text only. | List item. | Wraps cleanly. | None. | No proficiency claim. |
| `TechnologyBadge` | Badge-style skill/tag. | Source-backed label. | Optional visual treatment for skills/tags. | Text remains readable. | Wraps. | None. | Does not imply ranking. |
| `CategoryHeader` | Skill category heading. | Category name. | Labels category. | Heading level fits page hierarchy. | Stable wrapping. | None. | Uses approved category names. |
| `ProjectReference` | Link skill to project. | MISSING INFORMATION. | Not implemented for MVP. | Not applicable. | Not applicable. | None. | Must not infer project-skill mapping. |

## 9. Education Components

| Component | Purpose | Inputs | Behavior | Accessibility | Responsive Behavior | Animation | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `EducationSection` | Present academic context. | Education object. | Composes university and academic facts. | Section labelled by heading. | Compact stack. | Optional reveal only. | Shows only approved facts. |
| `UniversityCard` | Institution summary. | Institution, degree, graduation, CGPA. | Displays MSIT/Maharaja Surajmal Institute of Technology and degree facts. | Article/card heading. | Stacks. | None. | No coursework/awards/certifications. |
| `Coursework` | Coursework list. | MISSING INFORMATION. | Not implemented for MVP. | Not applicable. | Not applicable. | None. | Must not render until coursework approved. |
| `AcademicInfo` | Structured academic facts. | Graduation, CGPA, degree. | Displays fields with labels. | Definition list or equivalent semantic structure. | Compact. | None. | Values match source. |

## 10. Resume Components

| Component | Purpose | Inputs | Behavior | Accessibility | Responsive Behavior | Animation | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `ResumeSection` | Provide resume access. | `/resume` route; resume asset/path MISSING INFORMATION. | Shows Resume CTA to `/resume` without implying download/open behavior until asset exists. | Link/button label "Resume". | Stacks with supporting content if approved. | None. | Route destination exists; download/open/PDF behavior remains absent until asset is approved. |
| `PDFPreview` | Preview resume PDF. | Resume PDF MISSING INFORMATION. | Not implemented for MVP. | Requires document title/description. | MISSING INFORMATION. | None. | Must not embed missing PDF. |
| `DownloadButton` | Download resume. | Download URL MISSING INFORMATION. | Not implemented until behavior approved. | Clear accessible name once approved. | Button label readable. | Hover/focus only. | Must not imply download prematurely. |
| `ResumeInfo` | Resume supporting copy. | MISSING INFORMATION. | Not implemented except label. | Text source-backed. | Readable width. | None. | No invented resume highlights. |
| `OpenPDFButton` | Open resume PDF. | PDF URL MISSING INFORMATION. | Not implemented until behavior approved. | Accessible external/document behavior. | Button label readable. | Hover/focus only. | Must not imply open behavior prematurely. |

## 11. Contact Components

| Component | Purpose | Inputs | Behavior | Accessibility | Responsive Behavior | Animation | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `ContactSection` | Provide follow-up paths. | Email and social links. | Renders direct contact methods; no form. | Section labelled by heading. | Stacks on mobile. | Optional reveal only. | Shows approved contact channels. |
| `EmailCard` | Email contact method. | Email address. | Renders `mailto:jhaharsh451@gmail.com`; no backend workflow. | Accessible label "Email". | Full-width on mobile. | Hover/focus if link. | Does not require backend. |
| `SocialLinks` | Social/contact links. | GitHub, LinkedIn, X. | External links. | Accessible names match labels. | Wraps/stack. | Hover/focus only. | URLs match source exactly. |
| `ContactCTA` | Contact action grouping. | Label "Contact"; destination contact section/page. | Navigates to contact route/section. | Accessible link/button. | Stacks. | Hover/focus only. | Does not create form. |
| `FooterContact` | Contact links in footer. | Email/social links. | Secondary footer contact access. | Link labels accessible. | Compact stacked or inline. | Hover/focus only. | No unsupported footer copy. |

## 12. Footer Components

| Component | Purpose | Inputs | Behavior | Accessibility | Responsive Behavior | Animation | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `Footer` | Site footer. | Nav links, social links, optional copy. | Composes footer navigation/contact. | `footer` landmark. | Stacks on mobile. | None. | No undocumented sections. |
| `FooterNavigation` | Footer nav links. | Approved nav items. | Internal navigation. | `nav` with label if needed. | Wraps or stacks. | Hover/focus only. | Same approved labels. |
| `FooterSocial` | Footer social links. | GitHub, LinkedIn, X, Email if approved. | External/direct contact links. | Accessible labels. | Compact. | Hover/focus only. | URLs match source. |
| `Copyright` | Legal/copyright copy. | MISSING INFORMATION. | Not implemented for MVP. | Text source-backed. | MISSING INFORMATION. | None. | Must not invent copyright text. |
| `BuiltWith` | Built-with technology note. | MISSING INFORMATION. | Not implemented for MVP. | Not applicable. | Not applicable. | None. | Avoids unnecessary self-referential footer content. |

## 13. Shared Components

| Component | Purpose | Props | Behavior | Accessibility | Responsive Behavior | Animation | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `Button` | Base action primitive. | `variant`, `size`, `href` or action, `disabled`, `children`, accessible label when needed. | Renders link/button based on semantic action. | Keyboard accessible; visible focus. | Label must not overflow. | Hover/focus only. | No unsupported labels. |
| `Card` | Generic grouping primitive. | `variant`, `interactive`, `children`. | Groups related content. | Semantic wrapper chosen by context. | Stable sizing. | Optional hover only if interactive. | No nested cards. |
| `SectionHeading` | Section heading primitive. | `level`, `id`, `children`. | Renders correct heading level. | Supports `aria-labelledby`. | Wraps cleanly. | None. | Heading hierarchy valid. |
| `Badge` | Compact status/tag primitive. | `variant`, `children`. | Displays source-backed labels. | Text readable; not color-only. | Wraps. | None. | Status "In Progress" supported. |
| `Divider` | Structural separator. | `orientation`, `decorative`. | Separates content when useful. | Hidden from screen readers if decorative. | Responsive orientation only if needed. | None. | Not used as decoration. |
| `Tooltip` | Explanatory hover/focus text. | Content MISSING INFORMATION. | Future-only unless source-backed copy exists. | Must work on keyboard and touch if implemented. | MISSING INFORMATION. | Enter/exit only. | Not implemented for MVP by default. |
| `Icon` | Icon primitive/wrapper. | `name`, `label`, `decorative`. | Renders approved icon. | Icon-only requires label. | Stable size. | None. | Uses one icon system if approved. |
| `Container` | Shared width primitive. | `size`, `children`. | Constrains content. | None. | Responsive widths. | None. | Prevents unreadable line length. |
| `Grid` | Shared responsive layout primitive. | `columns`, `gap`, `children`. | Provides layout only. | Semantics delegated to children. | Collapses by breakpoint. | None. | No arbitrary grid values. |
| `Modal` | Overlay primitive. | MISSING INFORMATION. | Future-only; no modal requirement. | Focus trap and Escape required if implemented. | Responsive overlay behavior required. | Open/close only. | Not implemented for MVP. |
| `Accordion` | Disclosure primitive. | Items and labels. | Future/conditional; essential content must remain accessible. | Button controls with expanded state. | Full-width mobile. | Open/close if approved. | Not used for required content unless accessible. |
| `Tabs` | Tab primitive. | MISSING INFORMATION. | Future-only; no tabbed UI required. | Full keyboard tab pattern if implemented. | Must not hide essential content on mobile. | Optional. | Not implemented for MVP. |

## 14. Loading Components

| Component | Purpose | Inputs | Behavior | Accessibility | Responsive Behavior | Animation | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `Skeleton` | Loading placeholder. | Shape/label MISSING INFORMATION. | Future-only; static core content should not need skeletons. | Must not be announced as content. | Matches final layout if used. | Subtle only; no shimmer unless approved. | Not used for static required content. |
| `ImageLoader` | Image loading state. | Image asset MISSING INFORMATION. | Future-only if approved images need it. | Must preserve alt behavior. | Stable aspect ratio. | None or subtle fade. | Prevents layout shift. |
| `ProjectLoader` | Project loading state. | Not needed for static project data. | Not implemented for MVP. | Not applicable. | Not applicable. | None. | Static project content renders without loader. |
| `LazySection` | Defer non-critical sections. | Section config. | Future-only for heavy approved sections. | Must not hide required content without JS. | MISSING INFORMATION. | Reveal if approved. | Not used for core text sections by default. |

## 15. Error Components

| Component | Purpose | Inputs | Behavior | Accessibility | Responsive Behavior | Animation | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `404` | Unknown route page. | Approved copy: "Page not found." | App Router not-found surface. | Proper heading and navigation path to Home or Projects. | Mobile readable. | None. | Exists structurally with source-backed system copy. |
| `ImageFallback` | Handle broken image. | Fallback copy/image MISSING INFORMATION. | Future-only. | Must not announce decorative fallback. | Preserves layout. | None. | Not needed until images approved. |
| `UnavailableDemo` | Demo unavailable state. | Demo copy MISSING INFORMATION. | Not implemented; demo URLs missing. | Not applicable. | Not applicable. | None. | Must not appear for MVP. |
| `UnknownError` | Unexpected runtime error surface. | Error copy MISSING INFORMATION. | App error boundary if needed. | Proper alert/heading if implemented. | Mobile readable. | None. | Does not invent error copy. |

## 16. Animation Responsibilities

Durations and easing are defined in `docs/DESIGN_SYSTEM.md`. All motion must respect reduced-motion preferences.

| Component | Animation Trigger | Duration | Easing | Interaction | Reduced Motion Behavior | Performance Considerations |
| --- | --- | --- | --- | --- | --- | --- |
| `NavItem` | Hover/focus. | `duration.fast` | `ease.standard` | Confirms interactivity. | State change remains visible without motion. | Use color/border/opacity tokens, no layout shift. |
| `NavigationDrawer` | Open/close. | `duration.base` | `ease.standard` | Mobile menu transition. | Instant open/close. | Animate transform/opacity only. |
| `ActiveIndicator` | Route active change. | `duration.fast` | `ease.standard` | Shows current route. | Static active state. | Avoid layout shift. |
| `Button` | Hover/focus/active. | `duration.fast` | `ease.standard` | Confirms action. | Static state change. | No size changes. |
| `ProjectCard` | Hover/focus if interactive. | `duration.fast` | `ease.standard` | Confirms card link. | Static border/focus state. | No tilt, zoom, or glow. |
| `HeroSection` | Optional initial reveal. | `duration.slow` | `ease.enter` | Page entry clarity. | Content visible immediately. | No typing or decorative animation. |
| `Section` | Optional viewport reveal. | `duration.slow` | `ease.enter` | Orientation only. | Section visible immediately. | Do not lazy-hide content. |
| `LazySection` | Viewport entry if future approved. | `duration.slow` | `ease.enter` | Deferred reveal. | Render content without motion. | Never hide critical content. |
| `BackgroundAnimation` | Not allowed. | Not applicable. | Not applicable. | Not implemented. | Not implemented. | Decorative animation forbidden. |
| `ScrollIndicator` | Not approved. | MISSING INFORMATION. | MISSING INFORMATION. | Future-only. | Hidden/disabled. | Avoid decorative looping. |

## 17. Accessibility Responsibilities

All components must use semantic HTML before ARIA. Components must meet WCAG 2.2 AA contrast requirements and provide at least a `44px` effective touch target for interactive controls.

| Component Group | ARIA | Keyboard Navigation | Focus Management | Screen Reader Behavior | Contrast Requirements | Semantic HTML |
| --- | --- | --- | --- | --- | --- | --- |
| Layout components | Landmarks only where needed. | Normal document flow. | No traps. | Clear landmarks. | Token contrast must pass final target. | `main`, `header`, `footer`, `section`. |
| Navigation components | Labels from content spec; `aria-current` for active route. | Tab/Enter; Escape for drawer. | Drawer traps focus and returns focus. | Links announced by visible label. | Active state not color-only. | `nav`, list of links. |
| Hero components | CTAs and social links labelled. | All links/buttons reachable. | Standard focus order. | Headline and statement read in order. | Text/CTA contrast. | H1/heading strategy must be valid. |
| Project components | Project status text; card links labelled. | Interactive cards reachable only if they link. | Visible focus on cards/links. | Project content announced without hover. | Status badge readable. | `section`, `article`, lists. |
| Experience components | None unless needed. | Links only if future employer links exist. | Standard. | Role highlights as lists. | Text contrast. | `section`, list/article. |
| About components | None unless needed. | Standard. | Standard. | Philosophy and values as lists. | Text contrast. | `section`, lists, definition structures if useful. |
| Skills components | None unless needed. | Standard. | Standard. | Skills as lists, not decorative badges only. | Badge/text contrast. | Lists grouped by headings. |
| Education components | None unless needed. | Standard. | Standard. | Academic facts announced with labels. | Text contrast. | Definition list or structured article. |
| Resume components | Resume route destination is `/resume`; download/open behavior waits for asset. | Link/button reachable. | Standard. | No false download/open claim. | Button contrast. | Section with link/button. |
| Contact components | Links labelled Email, GitHub, LinkedIn, X. | Links reachable. | Standard. | External/direct contact names announced. | Link contrast. | Address/contact section as appropriate. |
| Footer components | Footer nav labelled if multiple navs. | Links reachable. | Standard. | Footer content not duplicated confusingly. | Text/link contrast. | `footer`, `nav`. |
| Shared interactive components | Required accessible names. | Standard control patterns. | Visible focus. | State communicated textually. | Token contrast. | Native button/link where possible. |
| Future overlays | Dialog/drawer labels required. | Escape/Tab/Shift+Tab. | Trap and restore focus. | Overlay announced with label. | Overlay contrast. | Dialog semantics. |
| Error/loading components | Error role only when copy exists. | Actions reachable if present. | Focus to meaningful heading if routed error. | Loading not announced as final content. | Text contrast. | Heading/section/alert as appropriate. |

## 18. Responsive Responsibilities

| Component Group | Desktop | Laptop | Tablet | Mobile | Ultra-wide |
| --- | --- | --- | --- | --- | --- |
| Layout | Constrained content and project-wide areas. | Same as desktop with tighter margins. | Reduce columns as space tightens. | Single-column flow. | Preserve max widths; no stretched text. |
| Navigation | `DesktopNavbar` visible. | Desktop nav if space allows. | Switch to `MobileNavbar` if labels crowd. | Mobile nav/drawer. | Nav remains constrained. |
| Hero | Prominent but not oversized. | Same hierarchy. | CTAs may wrap. | Linear text and CTAs; projects discoverable below. | Do not expand hero just to fill width. |
| Projects | Grid/comparison layout. | Grid with readable cards. | Fewer columns. | Single-column cards. | Wider project container allowed, text constrained. |
| Experience | Timeline/list with balanced density. | Similar. | Stack entries. | Linear role cards. | Do not stretch highlights. |
| About | Structured facts/philosophy. | Same. | Stack grids. | Single-column. | Constrain paragraphs. |
| Skills | Compact grouped layout. | Same. | Wrap groups. | Stacked categories. | Avoid sparse spread. |
| Education | Compact card/facts. | Same. | Stack if needed. | Single-column. | Constrain facts. |
| Resume | CTA visible. | Same. | Stack. | Single CTA and clear label. | Do not over-enlarge. |
| Contact | Contact/social links visible. | Same. | Wrap. | Stack links/cards. | Keep compact. |
| Footer | Inline/structured footer. | Same. | Wrap groups. | Stacked navigation/social. | Constrained footer width. |
| Media/Future assets | Approved assets only. | Preserve aspect ratio. | Scale down. | Avoid unreadable diagrams. | Do not fill empty space decoratively. |

## 19. Component Dependencies

Primary composition graph:

```text
RootLayout
|-- Metadata
|-- Providers
|-- NavigationLayout
|   |-- Logo
|   |-- DesktopNavbar
|   |   |-- NavGroup
|   |   |-- NavItem
|   |   `-- ActiveIndicator
|   `-- MobileNavbar
|       `-- NavigationDrawer
|           |-- NavGroup
|           `-- NavItem
|-- MainLayout
|   `-- PageWrapper
|       |-- HeroSection
|       |   |-- HeroTitle
|       |   |-- HeroSubtitle
|       |   |-- CTAGroup
|       |   |   `-- Button
|       |   `-- SocialLinks
|       |       `-- Icon
|       |-- ProjectsSection
|       |   |-- ProjectGrid
|       |   |   `-- ProjectCard
|       |   |       |-- StatusBadge
|       |   |       `-- Badge
|       |   `-- FeaturedProjectCard
|       |-- Timeline
|       |   `-- TimelineItem
|       |       |-- CompanyCard
|       |       |-- RoleCard
|       |       `-- TechnologyList
|       |-- AboutSection
|       |   |-- Biography
|       |   |-- EngineeringPhilosophy
|       |   |-- LearningPhilosophy
|       |   `-- ValuesGrid
|       |-- SkillsSection
|       |   `-- SkillCategory
|       |       |-- CategoryHeader
|       |       `-- SkillItem
|       |-- EducationSection
|       |   |-- UniversityCard
|       |   `-- AcademicInfo
|       |-- ResumeSection
|       |   `-- Button
|       `-- ContactSection
|           |-- EmailCard
|           |-- SocialLinks
|           `-- ContactCTA
`-- FooterLayout
    `-- Footer
        |-- FooterNavigation
        |-- FooterSocial
        `-- FooterContact
```

Future-only dependency graph:

```text
ProjectHeader
|-- ProjectGallery
|-- ArchitectureDiagram
|-- MetricsSection
|-- FutureWorkSection
`-- NavigationBetweenProjects

PDFPreview
|-- DownloadButton
`-- OpenPDFButton

Modal / Accordion / Tabs
`-- Future approved feature components only
```

Dependency rules:

- Feature components may depend on shared primitives.
- Shared primitives must not depend on feature components.
- Layout components may depend on navigation/footer components.
- Content modules feed feature components, not shared primitives.
- Future-only components must not be imported by MVP pages unless source content exists.

## 20. Acceptance Criteria

### Component Definition Of Done

| Component Group | Definition Of Done | Required Tests | Accessibility Checks | Responsive Validation | Performance Expectations |
| --- | --- | --- | --- | --- | --- |
| Global layout | Correct landmarks, static render, no unnecessary providers. | Layout render tests. | Landmark and heading checks. | All viewports. | No client JS unless needed. |
| Navigation | Approved labels/order, active state, mobile behavior if implemented. | Link and active-state tests. | Keyboard tab, Escape drawer, `aria-current`. | Desktop/mobile switch. | Minimal client island only for mobile menu. |
| Hero | Approved copy, CTA labels, social links. | Content render tests. | H1/heading, link labels. | Mobile wrapping and CTA stacking. | No decorative animation. |
| Projects | Four projects, source-backed descriptions/status only. | Project list/card tests. | Article/list semantics, status text. | Grid-to-stack validation. | Static render; no loaders. |
| Experience | Two roles with exact titles/highlights. | Content render tests. | List semantics. | Timeline/list stack. | Static render. |
| About | Identity, philosophy, values, focus areas only. | Content render tests. | Heading/list semantics. | Paragraph width validation. | Static render. |
| Skills | Approved categories and skills; no percentages. | Category/item tests. | List semantics. | Wrap/stack validation. | Static render. |
| Education | Institution, degree, graduation, CGPA only. | Content render tests. | Label/value semantics. | Mobile stack. | Static render. |
| Resume | Resume CTA routes to `/resume`; asset-dependent download/open behavior is absent until approved. | Route/link test; asset link test once asset exists. | Accessible link behavior. | CTA readable. | No PDF preview unless approved. |
| Contact | Email/social links match source; no form. | Link URL tests. | Link names and keyboard access. | Stack/wrap validation. | Static render. |
| Footer | Approved navigation/contact only. | Link tests. | Footer/nav landmark checks. | Mobile stacking. | Static render. |
| Shared primitives | Variant behavior, focus, disabled state, no arbitrary tokens. | Unit/component tests. | Keyboard/focus checks. | Text fit and wrapping. | No heavy effects. |
| Loading components | Not used for static core content. | Only if future usage exists. | Loading not announced as content. | Layout-stable if used. | No decorative shimmer unless approved. |
| Error components | Structural support; copy source-backed. | Route/error tests once copy exists. | Heading/alert semantics. | Mobile readable. | Static-safe fallback. |
| Future-only components | Not implemented until approved content exists. | Failing test or lint rule if accidentally rendered without content. | Defined before activation. | Defined before activation. | No bundle impact before activation. |

### Required Component Inventory

All components named in this document must be classified as one of:

- MVP required.
- Conditional.
- Future only.
- Not applicable until MISSING INFORMATION is resolved.

No unclassified component may be implemented.

### Final Acceptance

The component architecture is complete when:

- `COMPONENT_SPEC.md` exists under `docs/`.
- Every requested component is specified.
- Unsupported components are explicitly marked as future-only or blocked by `MISSING INFORMATION`.
- Component responsibilities align with `TECH_SPEC.md` Server Component / Client Component boundaries.
- No component invents content, project evidence, assets, metrics, links, backend behavior, or unsupported interactions.
- Accessibility, responsive behavior, animation constraints, and performance expectations are defined for every component group.
- The dependency graph prevents circular ownership and keeps shared primitives content-agnostic.
