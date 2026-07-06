# Implementation Plan

## 1. Executive Summary

This document defines the implementation strategy for the static portfolio website for Harsh Kumar Jha. It translates `FOUNDATION.md`, `PRD.md`, `CONTENT_SPEC.md`, `DESIGN_BRIEF.md`, `DESIGN_SYSTEM.md`, `TECH_SPEC.md`, and `COMPONENT_SPEC.md` into an execution plan that can be followed by engineers, designers, reviewers, and AI coding agents.

The implementation philosophy is incremental, dependency-driven, and quality-first. Each task must be small enough to complete, review, test, and roll back independently. The project must avoid speculative functionality and must not implement any feature whose content, behavior, or asset is marked `MISSING INFORMATION`.

Core constraints:

| Constraint | Implementation Impact |
|---|---|
| Static deployment | All required pages must be build-time generated and must not depend on runtime services. |
| No backend | No API routes, server actions, form submission handlers, or backend contact workflows. |
| No database | All content must come from source-backed local modules or static files. |
| No authentication | No protected routes, sessions, middleware auth, or user accounts. |
| No CMS | No CMS SDKs, preview modes, webhooks, or runtime content fetches. |
| Source-backed content only | Any missing text, asset, URL, metric, or achievement must remain absent or explicitly blocked until approved. |
| Performance-first architecture | Keep JavaScript small, prefer Server Components, avoid unnecessary dependencies, and use static content. |
| Accessibility-first implementation | Semantic HTML, keyboard support, visible focus states, reduced motion support, and readable layouts are required. |

## 2. Milestones

| Milestone | Name | Primary Outcome | Dependency |
|---|---|---|---|
| 1 | Project Initialization | Production-ready Next.js, TypeScript, Tailwind, linting, formatting, and folder baseline. | Source documents |
| 2 | Core Architecture | Routes, layouts, content model, metadata foundation, and shared primitives. | Milestone 1 |
| 3 | Navigation | Desktop and mobile navigation with source-backed labels and accessible behavior. | Milestone 2 |
| 4 | Hero | Homepage entry section with approved messaging and CTAs. | Milestones 2-3 |
| 5 | Projects | Project overview, featured cards, minimal project detail pages, and project status. | Milestones 2-4 |
| 6 | Experience | Experience section and route using approved roles, companies, and highlights. | Milestone 2 |
| 7 | About | About route and sections using approved identity, philosophy, values, and focus areas. | Milestone 2 |
| 8 | Skills | Skills section and route content using approved categories and skills only. | Milestone 2 |
| 9 | Education | Education section and route using approved institution, degree, graduation year, and CGPA. | Milestone 2 |
| 10 | Resume | Resume route and CTA handling, with asset-dependent download/open behavior deferred until resume asset/path exists. | Milestones 2-4 |
| 11 | Contact | Contact route and direct contact links with no backend form. | Milestone 2 |
| 12 | Animations | Purposeful transitions and reduced-motion behavior. | Milestones 3-11 |
| 13 | Accessibility | Full accessibility pass across routes and components. | Milestones 3-12 |
| 14 | SEO | Metadata, structured data, sitemap, robots, and canonical handling where source-backed. | Milestones 2-13 |
| 15 | Optimization | Performance, bundle, image, font, and static export validation. | Milestones 1-14 |
| 16 | Deployment | Preview and production deployment with rollback process. | Milestones 1-15 |

## 3. Feature Breakdown

### Milestone 1: Project Initialization

| Field | Definition |
|---|---|
| Purpose | Establish a production-ready frontend foundation aligned with `TECH_SPEC.md`. |
| Dependencies | Completed source documents. |
| Deliverables | Next.js App Router project, TypeScript strict mode, pnpm setup, Tailwind CSS, linting, formatting, baseline test tooling, static-compatible configuration, initial folder structure. |
| Files affected | `package.json`, package lockfile, Next.js config, TypeScript config, ESLint config, Prettier config, Tailwind config, `app/`, `styles/`, `components/`, `features/`, `content/`, `types/`, `lib/`, `utils/`, `config/`, `constants/`, `public/`. |
| Acceptance Criteria | App installs, builds, lints, formats, and renders a static placeholder without unsupported content. Folder structure matches `TECH_SPEC.md`. No backend, database, auth, CMS, analytics, or tracking packages are added. |
| Estimated Complexity | Medium |
| Risk Level | Medium |
| Rollback Strategy | Revert the initialization commit and return to documentation-only repository state. |

### Milestone 2: Core Architecture

| Field | Definition |
|---|---|
| Purpose | Create the route, layout, metadata, and content architecture before implementing page-specific UI. |
| Dependencies | Milestone 1 |
| Deliverables | Root layout, route skeletons, typed content modules, static route configuration, shared layout primitives, metadata helpers, not-found structure without invented copy. |
| Files affected | `app/layout.*`, `app/page.*`, `app/projects/`, `app/projects/[slug]/`, `app/experience/`, `app/about/`, `app/resume/`, `app/contact/`, `app/not-found.*`, `content/`, `types/`, `config/`, `components/layout/`, `components/shared/`. |
| Acceptance Criteria | All required routes exist, build statically, and consume centralized content. Project detail routes are generated only for the four approved projects. Missing copy is not invented. |
| Estimated Complexity | High |
| Risk Level | Medium |
| Rollback Strategy | Revert architecture commit without affecting initialization. Route skeletons can be removed independently. |

### Milestone 3: Navigation

| Field | Definition |
|---|---|
| Purpose | Implement global navigation that supports the required recruiter journey and all top-level routes. |
| Dependencies | Milestone 2 |
| Deliverables | `DesktopNavbar`, `MobileNavbar`, `NavItem`, `Logo`, `NavigationDrawer`, `ActiveIndicator`, `NavigationLayout`. |
| Files affected | `components/navigation/`, `components/layout/`, `content/navigation.*`, `app/layout.*`. |
| Acceptance Criteria | Navigation labels and order match `CONTENT_SPEC.md`: Home, Projects, Experience, About, Resume, Contact. Keyboard navigation works. Active route state is visible. Mobile menu opens and closes accessibly. No theme toggle is implemented. |
| Estimated Complexity | Medium |
| Risk Level | Medium |
| Rollback Strategy | Revert navigation commit and keep routes accessible through direct URLs. |

### Milestone 4: Hero

| Field | Definition |
|---|---|
| Purpose | Build the primary homepage entry using approved identity and messaging. |
| Dependencies | Milestones 2-3 |
| Deliverables | `HeroSection`, `HeroTitle`, `HeroSubtitle`, `CTAGroup`, `SocialLinks`, approved hero copy, primary project CTA, secondary resume CTA state. |
| Files affected | `features/home/`, `components/hero/`, `content/home.*`, `content/social.*`. |
| Acceptance Criteria | Hero includes approved identity, headline, hero statement, and core message. Primary CTA routes to Projects. Secondary CTA routes to `/resume` and does not imply unavailable download/open behavior. No profile image, background animation, badge, or scroll indicator is added unless source-backed. |
| Estimated Complexity | Medium |
| Risk Level | Medium |
| Rollback Strategy | Revert hero commit; homepage falls back to route skeleton. |

### Milestone 5: Projects

| Field | Definition |
|---|---|
| Purpose | Implement the project overview and source-backed project detail surfaces. |
| Dependencies | Milestones 2-4 |
| Deliverables | `ProjectsSection`, `ProjectGrid`, `FeaturedProjectCard`, `ProjectCard`, `ProjectTags`, `StatusBadge`, `ProjectHeader`, `NavigationBetweenProjects`, project overview route, project detail route. |
| Files affected | `features/projects/`, `components/projects/`, `content/projects.*`, `app/projects/`, `app/projects/[slug]/`. |
| Acceptance Criteria | Four projects render exactly as documented: FrameOS, Candidate Intelligence System, AppForge AI, Hallucination Hunter. Status is `In Progress`. Detail pages do not invent long descriptions, repository URLs, demo URLs, metrics, screenshots, diagrams, architecture, code snippets, or outcomes. |
| Estimated Complexity | High |
| Risk Level | High |
| Rollback Strategy | Revert project feature commit; route skeleton remains. Project content module can be restored independently if needed. |

### Milestone 6: Experience

| Field | Definition |
|---|---|
| Purpose | Present approved professional experience clearly for recruiters and research engineers. |
| Dependencies | Milestone 2 |
| Deliverables | `Timeline`, `TimelineItem`, `CompanyCard`, `RoleCard`, `TechnologyList`, `AchievementList`, experience route and homepage preview. |
| Files affected | `features/experience/`, `components/experience/`, `content/experience.*`, `app/experience/`, `features/home/`. |
| Acceptance Criteria | DomAIyn Labs LLP and MathonGo render with approved titles and highlights only. Dates, locations, achievements, and metrics remain absent where marked `MISSING INFORMATION`. |
| Estimated Complexity | Medium |
| Risk Level | Medium |
| Rollback Strategy | Revert experience commit; remove homepage preview linkage if needed. |

### Milestone 7: About

| Field | Definition |
|---|---|
| Purpose | Present approved identity, engineering philosophy, learning philosophy, core values, and professional direction without inventing biography. |
| Dependencies | Milestone 2 |
| Deliverables | `AboutSection`, `Biography`, `EngineeringPhilosophy`, `LearningPhilosophy`, `ValuesGrid`, about route and homepage preview. |
| Files affected | `features/about/`, `components/about/`, `content/about.*`, `app/about/`, `features/home/`. |
| Acceptance Criteria | About content uses only approved source-backed identity and philosophy. Additional biography, photo, competitive advantages, and unsupported personal narrative are not added. |
| Estimated Complexity | Medium |
| Risk Level | Medium |
| Rollback Strategy | Revert about commit and remove preview linkage. |

### Milestone 8: Skills

| Field | Definition |
|---|---|
| Purpose | Display approved technical skills without skill levels, percentages, or inferred expertise claims. |
| Dependencies | Milestone 2 |
| Deliverables | `SkillsSection`, `SkillCategory`, `SkillItem`, `TechnologyBadge`, `CategoryHeader`, skills route or section placement as defined by architecture. |
| Files affected | `features/skills/`, `components/skills/`, `content/skills.*`, route or page section files. |
| Acceptance Criteria | Categories and skills exactly match `FOUNDATION.md` and `CONTENT_SPEC.md`. No skill bars, ratings, percentages, or project-skill mappings are introduced. |
| Estimated Complexity | Low |
| Risk Level | Low |
| Rollback Strategy | Revert skills commit. |

### Milestone 9: Education

| Field | Definition |
|---|---|
| Purpose | Present academic information required for recruiter confidence. |
| Dependencies | Milestone 2 |
| Deliverables | `EducationSection`, `UniversityCard`, `AcademicInfo`, education route or section placement as defined by architecture. |
| Files affected | `features/education/`, `components/education/`, `content/education.*`, route or page section files. |
| Acceptance Criteria | Institution, degree, graduation year, and CGPA render exactly as approved. Coursework, awards, academic projects, and additional supporting information remain absent where missing. |
| Estimated Complexity | Low |
| Risk Level | Low |
| Rollback Strategy | Revert education commit. |

### Milestone 10: Resume

| Field | Definition |
|---|---|
| Purpose | Provide resume access without implying unavailable download or PDF behavior. |
| Dependencies | Milestones 2-4 |
| Deliverables | `ResumeSection`, resume route, resume CTA state, content-backed handling for missing resume destination. |
| Files affected | `features/resume/`, `components/resume/`, `content/resume.*`, `app/resume/`, `public/documents/` if asset is provided. |
| Acceptance Criteria | Resume navigation and CTA route to `/resume`. Production release is not blocked by missing PDF/download behavior, but `PDFPreview`, `DownloadButton`, and `OpenPDFButton` are not implemented until the asset and behavior are approved. |
| Estimated Complexity | Medium |
| Risk Level | High |
| Rollback Strategy | Revert resume commit or keep route skeleton with explicit missing-information handling. |

### Milestone 11: Contact

| Field | Definition |
|---|---|
| Purpose | Provide direct contact paths without backend functionality. |
| Dependencies | Milestone 2 |
| Deliverables | `ContactSection`, `EmailCard`, `SocialLinks`, `ContactCTA`, `FooterContact`, contact route and footer links. |
| Files affected | `features/contact/`, `components/contact/`, `components/footer/`, `content/contact.*`, `app/contact/`. |
| Acceptance Criteria | Email, GitHub, LinkedIn, and X match source documents. Email uses `mailto:jhaharsh451@gmail.com`. No contact form, validation workflow, backend endpoint, or message submission state is implemented. |
| Estimated Complexity | Low |
| Risk Level | Medium |
| Rollback Strategy | Revert contact commit; social links can remain centralized for reuse. |

### Milestone 12: Animations

| Field | Definition |
|---|---|
| Purpose | Add restrained, purposeful motion after static content and layout are stable. |
| Dependencies | Milestones 3-11 |
| Deliverables | Hover, focus, navigation drawer, active state, and optional section reveal behavior using approved motion constraints. Reduced-motion handling. |
| Files affected | `animations/`, relevant component files, global styles. |
| Acceptance Criteria | Animations are limited to transform, opacity, border, color, or focus state changes. Motion never hides critical content. Reduced motion disables non-essential animation. No particles, typing animation, matrix effects, fake terminal, looping decorative animation, or unsupported background animation. |
| Estimated Complexity | Medium |
| Risk Level | High |
| Rollback Strategy | Remove animation layer while preserving static UI and content. |

### Milestone 13: Accessibility

| Field | Definition |
|---|---|
| Purpose | Validate and correct accessibility across all implemented surfaces. |
| Dependencies | Milestones 3-12 |
| Deliverables | Semantic landmark audit, heading order audit, keyboard navigation audit, focus management pass, screen reader label pass, reduced-motion verification, touch target review. |
| Files affected | All implemented components and pages; test configuration if automated accessibility checks are added. |
| Acceptance Criteria | All routes are keyboard navigable. Focus is visible. Mobile drawer controls are labeled. Links and buttons have accessible names. Decorative media is absent or ignored by assistive technology. WCAG 2.2 AA contrast baseline and `44px` effective touch targets are met. |
| Estimated Complexity | High |
| Risk Level | High |
| Rollback Strategy | Revert targeted accessibility change only if it causes a regression; do not roll back the full accessibility milestone unless necessary. |

### Milestone 14: SEO

| Field | Definition |
|---|---|
| Purpose | Implement source-backed metadata and static discovery files. |
| Dependencies | Milestones 2-13 |
| Deliverables | Page titles, descriptions, Open Graph metadata without unsupported image, Twitter metadata without unsupported image, JSON-LD where source-backed, robots, sitemap, canonical URL configuration. |
| Files affected | `app/`, `config/site.*`, metadata helpers, sitemap and robots files. |
| Acceptance Criteria | Metadata uses approved content only. Canonical URLs are emitted only when canonical domain is defined. Preview images and favicon are omitted or blocked until assets are approved. Sitemap includes static routes and approved project routes. |
| Estimated Complexity | Medium |
| Risk Level | Medium |
| Rollback Strategy | Revert metadata commit; static pages remain accessible. |

### Milestone 15: Optimization

| Field | Definition |
|---|---|
| Purpose | Verify performance, static export compatibility, asset discipline, and bundle size before deployment. |
| Dependencies | Milestones 1-14 |
| Deliverables | Production build audit, static route validation, bundle review, font loading review, image handling review, dependency audit, Lighthouse pass. |
| Files affected | Build configuration, asset configuration, font setup, component imports, performance test setup. |
| Acceptance Criteria | No unnecessary client components. No unapproved heavy animation libraries. No unused routes or assets. Static pages render without layout shift from missing media. Numeric Lighthouse targets are `MISSING INFORMATION`, but architecture should aim for high scores and resolve measurable gaps before production. |
| Estimated Complexity | Medium |
| Risk Level | Medium |
| Rollback Strategy | Revert individual optimization changes if visual or content regressions occur. |

### Milestone 16: Deployment

| Field | Definition |
|---|---|
| Purpose | Ship the static portfolio through preview and production environments with a rollback path. |
| Dependencies | Milestones 1-15 |
| Deliverables | Hosting configuration, preview deployment, production deployment, environment variable review, caching review, rollback documentation. |
| Files affected | Hosting config, deployment config, environment variable documentation, README deployment section if needed. |
| Acceptance Criteria | Preview deployment passes build, route, accessibility, SEO, and performance checks. Production deployment uses no backend, database, authentication, CMS, or runtime data dependency. Domain and canonical configuration are blocked until supplied. |
| Estimated Complexity | Medium |
| Risk Level | Medium |
| Rollback Strategy | Revert deployment to previous stable build using hosting provider rollback. Keep previous production deployment available until new deployment is verified. |

## 4. Dependency Graph

Primary implementation graph:

Source Documents -> Project Initialization -> Core Architecture -> Navigation -> Hero -> Projects -> Experience -> About -> Skills -> Education -> Resume -> Contact -> Animations -> Accessibility -> SEO -> Optimization -> Deployment

Parallelizable work after Core Architecture:

| Starting Point | Parallel Task |
|---|---|
| Core Architecture | Navigation |
| Core Architecture | Hero |
| Core Architecture | Projects |
| Core Architecture | Experience |
| Core Architecture | About |
| Core Architecture | Skills |
| Core Architecture | Education |
| Core Architecture | Resume |
| Core Architecture | Contact |

Hard blockers:

| Blocked Area | Blocking Dependency | Required Resolution |
|---|---|---|
| Resume download/open behavior | Resume asset/path is `MISSING INFORMATION` | `/resume` route is implemented for MVP; provide approved resume file path or external URL before enabling download/open/PDF preview behavior. |
| Canonical URLs | Canonical domain is `MISSING INFORMATION` | Provide approved production domain. |
| Favicon and preview image | Assets are `MISSING INFORMATION` | Provide approved static assets and alt/metadata requirements. |
| Project repository/demo buttons | URLs are `MISSING INFORMATION` | Provide approved repository and demo URLs per project. |
| Project screenshots/diagrams/code snippets | Assets and content are `MISSING INFORMATION` | Provide approved project media and descriptions. |
| Production domain | Canonical domain is `MISSING INFORMATION` | Provide approved production domain before emitting canonical URLs. |

## 5. Repository Setup

### Git Strategy

Use small, reviewable commits organized by milestone and feature. Each commit should include one coherent change: setup, architecture, one component family, one route, one accessibility pass, or one optimization pass.

Required rules:

| Rule | Purpose |
|---|---|
| Keep documentation commits separate from implementation commits | Makes source-of-truth changes auditable. |
| Keep generated lockfile changes with dependency changes | Prevents install drift. |
| Avoid broad refactors during feature work | Keeps rollback simple. |
| Do not commit unsupported content placeholders as real product content | Preserves source-backed content integrity. |

### Branch Strategy

| Branch Type | Purpose |
|---|---|
| `main` | Production-ready branch only. |
| Feature branch | One milestone or feature family per branch. |
| Fix branch | One regression or quality issue per branch. |
| Release branch | Optional if deployment process requires final stabilization. |

### Commit Strategy

Recommended commit sequence:

| Commit Type | Example Scope |
|---|---|
| Setup | Initialize app, tooling, and folder structure. |
| Architecture | Add layouts, route skeletons, content models. |
| Feature | Add navigation, hero, projects, experience, or contact. |
| Quality | Add tests, accessibility fixes, performance fixes. |
| Release | Add deployment configuration and release documentation. |

Every commit should include:

| Requirement | Reason |
|---|---|
| Clear scope | Enables review and rollback. |
| Passing local validation | Prevents broken intermediate states. |
| Source document compliance | Prevents content drift. |
| No unrelated formatting churn | Keeps diffs readable. |

### Folder Initialization

Initialize folders according to `TECH_SPEC.md`:

| Folder | Initialization Requirement |
|---|---|
| `app/` | Required routes, layout, metadata, and not-found structure. |
| `components/` | Shared and layout components grouped by component family. |
| `features/` | Page or section-level compositions. |
| `hooks/` | Client-only hooks, only when needed. |
| `lib/` | Shared helpers for metadata, content access, and framework utilities. |
| `styles/` | Global styles and token mappings. |
| `constants/` | Stable constants that are not content. |
| `config/` | Site configuration, navigation config, metadata config. |
| `content/` | Source-backed portfolio content. |
| `types/` | Shared TypeScript types. |
| `utils/` | Pure utility functions. |
| `public/` | Static documents, images, favicons, and assets once approved. |
| `assets/` | Source asset organization if the implementation separates raw and public assets. |
| `animations/` | Motion constants and helpers only if motion needs shared definitions. |
| `providers/` | App-level providers only if needed. |

### Dependency Installation

Dependencies must follow `TECH_SPEC.md`:

| Category | Decision |
|---|---|
| Framework | Next.js App Router |
| Language | TypeScript strict mode |
| Package manager | pnpm |
| Styling | Tailwind CSS with semantic tokens |
| Animation | CSS transitions by default; Framer Motion only if necessary |
| Icons | lucide-react only if icon library approval is resolved or required by implementation |
| Analytics | Disabled by default |
| Backend/CMS/Auth | Not installed |

### Linting

Linting must enforce:

| Area | Requirement |
|---|---|
| TypeScript | No implicit unsafe patterns. |
| React | Server Components by default; Client Components only where required. |
| Accessibility | Prefer semantic HTML and flag missing labels where tooling supports it. |
| Imports | Stable import ordering and no unused imports. |
| Content integrity | Optional custom checks may assert approved project names, statuses, and links. |

### Formatting

Formatting should be automated and consistent:

| Area | Requirement |
|---|---|
| TypeScript and TSX | Prettier or equivalent formatter. |
| CSS/Tailwind | Consistent class ordering if tooling is approved. |
| Markdown | Keep source documents readable and avoid unrelated changes. |

### Testing

Prepare testing in layers:

| Layer | Purpose |
|---|---|
| Unit tests | Validate content helpers, slug generation, and component rendering logic. |
| Component tests | Validate source-backed text, accessible names, and states. |
| Route tests | Validate required static routes and project detail params. |
| Accessibility checks | Validate keyboard, labels, landmarks, and reduced motion. |
| Visual checks | Validate responsive layouts and no text overlap. |
| Performance checks | Validate static build, bundle size, and Lighthouse output. |

### CI Preparation

CI should run before merge:

| Check | Required |
|---|---|
| Install | Yes |
| Typecheck | Yes |
| Lint | Yes |
| Format check | Yes |
| Tests | Yes, once tests exist |
| Production build | Yes |
| Static export compatibility check | Yes, if deployment requires full static export |
| Accessibility smoke test | Recommended |
| Link check | Recommended |

## 6. Development Phases

| Phase | Milestones | Goal | Exit Criteria |
|---|---|---|---|
| Foundation | 1-2 | Establish architecture, tooling, routes, content model, and shared primitives. | App builds statically and required routes exist. |
| Core UI | 3-11 | Implement required sections and pages with approved content. | All source-backed content renders and blocked content remains absent. |
| Content QA | 4-11 | Confirm every heading, CTA, label, link, and metadata field matches `CONTENT_SPEC.md`. | No invented copy or unsupported claims. |
| Motion | 12 | Add purposeful interaction motion after static UI is complete. | Reduced-motion behavior works and no decorative motion exists. |
| Accessibility | 13 | Validate keyboard, semantic structure, focus, screen reader labels, and responsive usability. | All major issues resolved or documented as blocked by missing token values. |
| SEO | 14 | Add source-backed metadata, robots, sitemap, and structured data. | Metadata is accurate and canonical behavior is blocked or enabled correctly. |
| Optimization | 15 | Reduce bundle weight, validate performance, and finalize static behavior. | Production build and performance checks pass. |
| Deployment | 16 | Ship preview and production with rollback. | Production deployment is verified and rollback path is documented. |

## 7. Task Granularity

Each task below is intended to fit one AI-assisted implementation iteration. A task is not complete until implementation, local validation, and self-review are done.

### Foundation Tasks

| Task ID | Task | Depends On | Output |
|---|---|---|---|
| FND-01 | Initialize Next.js App Router project with TypeScript and pnpm. | Source docs | Buildable app baseline. |
| FND-02 | Configure Tailwind CSS and global style entry. | FND-01 | Styling pipeline exists. |
| FND-03 | Configure linting, formatting, and typechecking. | FND-01 | Local quality gates exist. |
| FND-04 | Create folder structure from `TECH_SPEC.md`. | FND-01 | Empty folders or starter files exist where needed. |
| FND-05 | Create central site config with missing values explicitly marked. | FND-04 | Config supports domain, metadata, and social links. |
| FND-06 | Create typed content model for identity, projects, experience, education, skills, and contact. | FND-04 | Content can be rendered without runtime fetches. |
| FND-07 | Add route skeletons for all required pages. | FND-04 | Required routes return static pages. |
| FND-08 | Add shared layout primitives: root, page wrapper, container, section, grid. | FND-04 | Pages can share consistent structure. |
| FND-09 | Add metadata helper pattern with blocked canonical handling. | FND-05 | Metadata can be added route by route. |
| FND-10 | Validate build, typecheck, lint, and route rendering. | FND-01 to FND-09 | Foundation milestone can be reviewed. |

### Navigation Tasks

| Task ID | Task | Depends On | Output |
|---|---|---|---|
| NAV-01 | Add navigation content module with approved labels and order. | FND-06 | Single source for nav labels. |
| NAV-02 | Implement desktop navigation structure. | NAV-01, FND-08 | Desktop nav renders. |
| NAV-03 | Implement logo/name link behavior. | NAV-02 | Home link works. |
| NAV-04 | Implement active route state. | NAV-02 | Current route is visually identifiable. |
| NAV-05 | Implement mobile navigation drawer. | NAV-01 | Mobile menu opens and closes. |
| NAV-06 | Add keyboard and focus behavior for nav and drawer. | NAV-05 | Accessible navigation. |
| NAV-07 | Validate responsive behavior across breakpoints. | NAV-02 to NAV-06 | Navigation is stable on desktop and mobile. |

### Hero Tasks

| Task ID | Task | Depends On | Output |
|---|---|---|---|
| HERO-01 | Add hero content module from approved messaging. | FND-06 | Hero content source exists. |
| HERO-02 | Implement hero title and statement components. | HERO-01 | Hero text renders. |
| HERO-03 | Implement CTA group with View Projects and Resume handling. | HERO-02 | Primary CTA works; resume behavior remains source-compliant. |
| HERO-04 | Implement social links using approved URLs. | HERO-01 | GitHub, LinkedIn, and X links render. |
| HERO-05 | Validate hero heading hierarchy and mobile wrapping. | HERO-02 to HERO-04 | Hero is readable and accessible. |

### Project Tasks

| Task ID | Task | Depends On | Output |
|---|---|---|---|
| PROJ-01 | Add typed project content for four approved projects. | FND-06 | Project data source exists. |
| PROJ-02 | Add slug generation and validation for project detail routes. | PROJ-01 | Static params are reliable. |
| PROJ-03 | Implement status badge for `In Progress`. | PROJ-01 | Project status renders. |
| PROJ-04 | Implement project card component. | PROJ-03 | Cards render approved content. |
| PROJ-05 | Implement featured projects section on homepage. | PROJ-04 | Homepage project preview exists. |
| PROJ-06 | Implement projects overview route. | PROJ-04 | Full project list exists. |
| PROJ-07 | Implement minimal project detail route. | PROJ-02 | Detail pages render source-backed fields only. |
| PROJ-08 | Add previous/next project navigation if it can be sourced from static project order. | PROJ-07 | Project navigation exists without invented copy. |
| PROJ-09 | Validate no missing URLs or media are rendered as buttons or placeholders. | PROJ-01 to PROJ-08 | Project implementation is source-compliant. |

### Experience Tasks

| Task ID | Task | Depends On | Output |
|---|---|---|---|
| EXP-01 | Add typed experience content for DomAIyn Labs LLP and MathonGo. | FND-06 | Experience data source exists. |
| EXP-02 | Implement role/company card components. | EXP-01 | Experience items render. |
| EXP-03 | Implement highlight and technology lists. | EXP-02 | Approved details render clearly. |
| EXP-04 | Implement experience route. | EXP-02 | Dedicated route exists. |
| EXP-05 | Implement homepage experience preview. | EXP-02 | Recruiter journey includes experience. |
| EXP-06 | Validate missing dates, locations, and metrics are not invented. | EXP-01 to EXP-05 | Experience content passes QA. |

### About Tasks

| Task ID | Task | Depends On | Output |
|---|---|---|---|
| ABOUT-01 | Add about content from approved identity, philosophy, values, and focus areas. | FND-06 | About content source exists. |
| ABOUT-02 | Implement biography component with approved structured identity only. | ABOUT-01 | No unsupported biography. |
| ABOUT-03 | Implement engineering philosophy and learning philosophy sections. | ABOUT-01 | Philosophy content renders. |
| ABOUT-04 | Implement values grid. | ABOUT-01 | Core values render. |
| ABOUT-05 | Implement about route and homepage preview. | ABOUT-02 to ABOUT-04 | About content is discoverable. |
| ABOUT-06 | Validate no photo, unsupported competitive claims, or invented personal narrative. | ABOUT-05 | About content passes QA. |

### Skills Tasks

| Task ID | Task | Depends On | Output |
|---|---|---|---|
| SKILL-01 | Add approved skill categories and items. | FND-06 | Skills content source exists. |
| SKILL-02 | Implement skill category component. | SKILL-01 | Grouping renders. |
| SKILL-03 | Implement skill item or technology badge component. | SKILL-02 | Skills render consistently. |
| SKILL-04 | Add skills to required page or section placement. | SKILL-03 | Recruiter journey includes skills. |
| SKILL-05 | Validate no percentages, ratings, bars, or unsupported skill descriptions. | SKILL-01 to SKILL-04 | Skills content passes QA. |

### Education Tasks

| Task ID | Task | Depends On | Output |
|---|---|---|---|
| EDU-01 | Add approved education content. | FND-06 | Education content source exists. |
| EDU-02 | Implement education card and academic info components. | EDU-01 | Education content renders. |
| EDU-03 | Add education to required page or section placement. | EDU-02 | Recruiter journey includes education. |
| EDU-04 | Validate coursework, awards, and academic projects are absent unless approved. | EDU-01 to EDU-03 | Education content passes QA. |

### Resume Tasks

| Task ID | Task | Depends On | Output |
|---|---|---|---|
| RES-01 | Add resume content model with route destination `/resume` and asset path marked `MISSING INFORMATION`. | FND-06 | Resume state is explicit. |
| RES-02 | Implement resume route without unsupported PDF preview or download behavior. | RES-01 | Route exists and remains honest about available behavior. |
| RES-03 | Wire hero/nav resume CTA to approved route or destination state. | RES-02, HERO-03, NAV-01 | Resume path is reachable. |
| RES-04 | Block only asset-dependent resume download/open/PDF preview behavior if resume asset/path remains missing. | RES-01 | Release readiness is explicit without breaking the required Resume route. |
| RES-05 | If asset is supplied, add approved PDF handling and validate links. | Approved resume asset | Resume access becomes functional. |

### Contact Tasks

| Task ID | Task | Depends On | Output |
|---|---|---|---|
| CONT-01 | Add contact content module with email and social URLs. | FND-06 | Contact data source exists. |
| CONT-02 | Implement social links component. | CONT-01 | Social links render. |
| CONT-03 | Implement email contact component with approved behavior. | CONT-01 | Email access renders without backend. |
| CONT-04 | Implement contact route. | CONT-02 to CONT-03 | Dedicated contact route exists. |
| CONT-05 | Implement footer contact links. | CONT-02 | Footer supports contact journey. |
| CONT-06 | Validate no contact form, validation states, or backend workflow. | CONT-01 to CONT-05 | Contact implementation passes QA. |

### Footer Tasks

| Task ID | Task | Depends On | Output |
|---|---|---|---|
| FOOT-01 | Add footer navigation using approved nav labels. | NAV-01 | Footer nav source exists. |
| FOOT-02 | Add footer social links using contact content. | CONT-01 | Footer social links render. |
| FOOT-03 | Exclude copyright and built-with text until approved. | FOOT-01 | Footer remains source-backed. |
| FOOT-04 | Validate footer landmarks and mobile layout. | FOOT-01 to FOOT-03 | Footer is accessible. |

### Motion Tasks

| Task ID | Task | Depends On | Output |
|---|---|---|---|
| MOT-01 | Define shared motion constants using approved or missing-token-safe values. | Core UI complete | Motion source exists. |
| MOT-02 | Add button/link hover and focus transitions. | MOT-01 | Interactions feel responsive. |
| MOT-03 | Add mobile drawer transition. | MOT-01, NAV-05 | Drawer motion is purposeful. |
| MOT-04 | Add optional section entry behavior only if it does not hide content. | MOT-01 | Static content remains visible. |
| MOT-05 | Add reduced-motion handling. | MOT-01 to MOT-04 | Motion respects user preference. |
| MOT-06 | Validate forbidden motion patterns are absent. | MOT-01 to MOT-05 | Motion passes QA. |

### Accessibility Tasks

| Task ID | Task | Depends On | Output |
|---|---|---|---|
| A11Y-01 | Audit heading order across all routes. | Core UI complete | Correct document structure. |
| A11Y-02 | Audit landmarks: header, nav, main, footer. | Core UI complete | Semantic page structure. |
| A11Y-03 | Audit keyboard navigation and focus visibility. | Core UI complete | Keyboard usability. |
| A11Y-04 | Audit mobile drawer focus behavior. | NAV-05 | Accessible drawer behavior. |
| A11Y-05 | Audit links and buttons for accessible names. | Core UI complete | Screen reader clarity. |
| A11Y-06 | Audit reduced motion. | MOT-05 | Motion preference respected. |
| A11Y-07 | Audit responsive text wrapping and touch usability. | Core UI complete | Mobile usability. |
| A11Y-08 | Run automated accessibility checks. | A11Y-01 to A11Y-07 | Accessibility issues are documented and fixed. |

### SEO Tasks

| Task ID | Task | Depends On | Output |
|---|---|---|---|
| SEO-01 | Add homepage metadata from `CONTENT_SPEC.md`. | FND-09 | Homepage metadata exists. |
| SEO-02 | Add route metadata for Projects, Experience, About, Resume, and Contact. | SEO-01 | Route metadata exists. |
| SEO-03 | Add project detail metadata using project names and one-line descriptions only. | PROJ-07 | Project metadata is source-backed. |
| SEO-04 | Add robots configuration. | FND-09 | Discovery rules exist. |
| SEO-05 | Add sitemap with static routes and approved project routes. | SEO-04 | Sitemap exists. |
| SEO-06 | Add structured data only where source-backed. | SEO-01 | JSON-LD does not invent fields. |
| SEO-07 | Gate canonical URLs behind approved domain configuration. | SEO-01 | No incorrect canonical URLs. |
| SEO-08 | Validate no unsupported preview image or favicon is referenced. | SEO-01 to SEO-07 | SEO implementation passes QA. |

### Optimization Tasks

| Task ID | Task | Depends On | Output |
|---|---|---|---|
| OPT-01 | Run production build and inspect warnings. | SEO complete | Build baseline. |
| OPT-02 | Audit Client Components and remove unnecessary client boundaries. | Core UI complete | Smaller JavaScript surface. |
| OPT-03 | Audit dependency usage and remove unused packages. | OPT-01 | Lean dependency graph. |
| OPT-04 | Audit fonts and prevent layout shift. | OPT-01 | Stable typography loading. |
| OPT-05 | Audit assets and ensure no unapproved media is shipped. | OPT-01 | Asset integrity. |
| OPT-06 | Run Lighthouse or equivalent performance check. | OPT-01 | Performance report. |
| OPT-07 | Validate static export compatibility if deployment requires it. | OPT-01 | Static deployment readiness. |

### Deployment Tasks

| Task ID | Task | Depends On | Output |
|---|---|---|---|
| DEP-01 | Select or confirm hosting provider. | OPT complete | Deployment target exists. |
| DEP-02 | Configure preview deployment. | DEP-01 | Preview URL available. |
| DEP-03 | Validate preview routes, navigation, content, accessibility, and SEO. | DEP-02 | Preview signoff. |
| DEP-04 | Configure production deployment. | DEP-03 | Production deployment ready. |
| DEP-05 | Configure domain and canonical URLs if approved. | DEP-04, approved domain | Canonical production setup. |
| DEP-06 | Verify rollback process. | DEP-04 | Rollback path documented. |
| DEP-07 | Final production smoke test. | DEP-04 to DEP-06 | Release complete. |

## 8. Review Checklist

Every feature review must validate the following:

| Category | Checklist |
|---|---|
| Source compliance | Content matches source documents. Missing information is not guessed. Unsupported achievements, metrics, testimonials, and project claims are absent. |
| Accessibility | Semantic HTML, headings, labels, keyboard behavior, visible focus, reduced motion, and readable text are verified. |
| Performance | Server Components are preferred, client code is minimized, no heavy unnecessary dependencies are introduced, and static build remains fast. |
| Responsiveness | Desktop, laptop, tablet, mobile, and ultra-wide layouts remain readable with no overlap or layout shift. |
| Design consistency | Components follow `DESIGN_BRIEF.md` and `DESIGN_SYSTEM.md`; no forbidden patterns are introduced. |
| Content correctness | Headings, CTAs, labels, links, status badges, and metadata match `CONTENT_SPEC.md`. |
| Animation quality | Motion is purposeful, restrained, reversible, and disabled or simplified for reduced-motion users. |
| SEO | Metadata is accurate, structured data is source-backed, and canonical behavior is correct or blocked. |
| Code quality | Types are explicit, components have single responsibility, imports are clean, and implementation follows `TECH_SPEC.md`. |
| Rollback readiness | The feature can be reverted without damaging unrelated features. |

## 9. Testing Strategy

### Manual Testing

| Area | Required Checks |
|---|---|
| Navigation | All top-level links work; mobile menu works; active state is correct. |
| Recruiter journey | Home flow follows Hero -> Projects -> Experience -> About -> Skills -> Education -> Resume -> Contact. |
| Projects | Four projects render, statuses are correct, detail pages do not invent missing details. |
| Resume | CTA routes to `/resume`; PDF/download/open behavior appears only if an approved resume asset exists. |
| Contact | Email and social links match approved URLs; no form exists. |
| Responsive | Test common mobile, tablet, laptop, desktop, and ultra-wide widths. |
| Reduced motion | UI remains usable with motion reduced. |

### Automated Testing

| Test Type | Purpose |
|---|---|
| Typecheck | Catch type and content model errors. |
| Lint | Catch React, import, and accessibility issues where possible. |
| Unit tests | Validate content helpers, slugs, and metadata helpers. |
| Component tests | Validate source-backed text, link labels, and rendering states. |
| Route tests | Validate required routes and project detail generation. |
| Accessibility tests | Catch missing labels, invalid landmarks, and common violations. |

### Visual Regression

Visual regression should be introduced once core UI is stable:

| View | Required Coverage |
|---|---|
| Homepage | Hero, projects, experience preview, about preview, skills, education, resume, contact, footer. |
| Projects | Overview grid and detail route. |
| Navigation | Desktop and mobile drawer states. |
| Contact | Link layout and footer behavior. |
| Error surface | Not-found structure once approved copy exists. |

### Cross-Browser Testing

| Browser | Requirement |
|---|---|
| Chrome | Required |
| Safari | Required due to font, layout, and mobile relevance |
| Firefox | Recommended |
| Mobile Safari | Required for iOS behavior |
| Mobile Chrome | Required for Android behavior |

### Performance Testing

| Check | Requirement |
|---|---|
| Production build | Must pass before merge and deployment. |
| Bundle analysis | Review before production release. |
| Lighthouse | Run before production release; numeric targets remain `MISSING INFORMATION`. |
| Core Web Vitals | Validate architecture supports good LCP, CLS, and INP. |
| Static export | Validate if selected deployment target requires fully static output. |

## 10. Deployment Strategy

### Development

| Requirement | Definition |
|---|---|
| Local install | Must be reproducible with the package manager selected in `TECH_SPEC.md`. |
| Local validation | Typecheck, lint, format check, tests, and production build should run before review. |
| Local content changes | Content must be updated only through centralized source-backed files. |

### Preview

| Requirement | Definition |
|---|---|
| Preview deployment | Every merge candidate should produce a preview deployment. |
| Preview review | Validate routes, content, responsiveness, accessibility, SEO, and performance. |
| Preview blockers | Missing canonical domain or required assets must be explicitly tracked before production. Missing resume asset blocks only asset-dependent download/open/PDF behavior. |

### Production

| Requirement | Definition |
|---|---|
| Static deployment | Production must not rely on runtime services. |
| Environment variables | Only public static config is allowed unless future backend scope is approved. |
| Domain | Production domain is `MISSING INFORMATION`. |
| Canonical URLs | Must remain disabled or blocked until domain is approved. |
| Analytics | Disabled unless approved in source documents. |

### Caching

| Asset Type | Strategy |
|---|---|
| Static assets | Cache through hosting provider with immutable naming where possible. |
| HTML pages | Follow static hosting defaults and redeploy on content updates. |
| Resume PDF | Cache as a static asset once approved. |
| Runtime cache | Not required because there is no backend or API. |

### Versioning

| Version | Meaning |
|---|---|
| MVP | Required static portfolio using source-backed content only. |
| Version 1.1 | Resolve missing release-critical content and polish based on approved updates. |
| Version 2 | Expand approved project detail content if source documents are updated. |
| Version 3 | Future additions only if approved by updated source documents. |

### Rollback

Rollback requirements:

| Requirement | Definition |
|---|---|
| Previous deployment retained | Do not remove the last stable production deployment until new release is verified. |
| Small commits | Enable rollback of one feature without reverting the full project. |
| Static assets versioned | Avoid broken references after rollback. |
| Environment changes documented | Domain and public config changes must be reversible. |

## 11. Risks

| Risk Type | Risk | Impact | Mitigation |
|---|---|---|---|
| Technical | Static export incompatibility with selected Next.js features. | Deployment may require config changes. | Avoid route handlers, server actions, runtime APIs, and unsupported dynamic behavior. |
| Technical | Too many Client Components. | Larger JavaScript bundle and weaker performance. | Use Server Components by default and isolate client behavior. |
| Technical | Premature animation library adoption. | Bundle bloat and motion inconsistency. | Use CSS transitions first; add Framer Motion only if justified. |
| Content | Resume asset/path is missing. | Download/open/PDF preview behavior cannot be implemented. | Implement `/resume` route for MVP and defer asset-dependent behavior until approved. |
| Content | Project details are thin. | Project pages may feel sparse. | Render only approved fields and avoid invented details; expand later when source content exists. |
| Content | Dates and locations for experience are missing. | Timeline may lack chronology. | Use company and role structure without invented dates. |
| Design | Token values are missing. | Final polish may be inconsistent. | Implement semantic token architecture and resolve exact values before final design QA. |
| Design | Overuse of decorative UI patterns. | Reduces engineering credibility. | Enforce forbidden patterns from `DESIGN_BRIEF.md` and `DESIGN_SYSTEM.md`. |
| Animation | Motion hides content or harms accessibility. | Poor usability and accessibility regressions. | Keep content visible by default and respect reduced motion. |
| Performance | Unapproved images or heavy assets are introduced. | Slower pages and layout shift. | Do not ship assets without approval; define dimensions for future assets. |
| Deployment | Canonical domain is missing. | SEO canonical URLs cannot be finalized. | Gate canonical URL output behind approved config. |
| Maintenance | No CMS means content updates require code changes. | Updates may be slower. | Keep content centralized, typed, and easy to edit. |

## 12. Definition of Done

### Component Done

A component is done when:

| Requirement | Definition |
|---|---|
| Source-backed | It renders only approved content and approved behavior. |
| Typed | Props and content inputs are typed. |
| Accessible | Semantic HTML is used before ARIA; focus and keyboard behavior are correct where interactive. |
| Responsive | Layout works across desktop, laptop, tablet, mobile, and ultra-wide contexts. |
| Performant | It does not introduce unnecessary client JavaScript or heavy dependencies. |
| Tested | Relevant render, content, accessibility, or interaction tests are added where risk justifies them. |
| Reviewable | The diff is focused and can be reverted independently. |

### Page Done

A page is done when:

| Requirement | Definition |
|---|---|
| Required content | All approved content for the page renders. |
| Missing content | Missing fields are absent or explicitly blocked; no placeholder product claims. |
| Metadata | Page metadata is source-backed. |
| Navigation | Page is reachable through required navigation or internal links. |
| Accessibility | Heading order, landmarks, link names, and keyboard flow are verified. |
| Responsiveness | Page is readable at all required viewport classes. |
| Performance | Page builds statically and avoids unnecessary client code. |

### Milestone Done

A milestone is done when:

| Requirement | Definition |
|---|---|
| Deliverables complete | All listed deliverables are implemented or explicitly blocked by `MISSING INFORMATION`. |
| Acceptance criteria met | Milestone acceptance criteria pass. |
| Validation complete | Typecheck, lint, tests, and build pass where applicable. |
| Documentation updated | Any implementation notes or unresolved blockers are recorded. |
| Review complete | Reviewer can verify source compliance and rollback scope. |

### Entire Project Done

The project is complete when:

| Requirement | Definition |
|---|---|
| All MVP milestones complete | Milestones 1-16 are completed or explicitly blocked by approved missing information. |
| Source compliance verified | No page includes invented achievements, fake metrics, unsupported project details, testimonials, or unavailable links. |
| Static constraints satisfied | No backend, database, authentication, CMS, runtime API, or contact form exists. |
| Resume behavior verified | `/resume` route works; asset-dependent download/open/PDF behavior is absent unless resume asset/path is supplied. |
| Accessibility pass complete | Keyboard, focus, semantic structure, reduced motion, and screen reader checks pass. |
| SEO pass complete | Metadata, robots, sitemap, and canonical handling are correct. |
| Performance pass complete | Production build succeeds and performance issues are resolved or documented. |
| Deployment verified | Preview and production deployments are validated with rollback available. |

## 13. Future Roadmap

Future roadmap items must not be implemented unless source documents are updated and the new scope is approved.

### Version 1.1

| Item | Status | Requirement |
|---|---|---|
| Resume asset/path | MISSING INFORMATION | Provide approved PDF or external asset before enabling download/open/PDF preview behavior. |
| Canonical domain | MISSING INFORMATION | Provide production domain. |
| Favicon | MISSING INFORMATION | Provide approved asset. |
| Open Graph preview image | MISSING INFORMATION | Provide approved image and alt/metadata requirements. |
| Token refinement | Defined for MVP | Future adjustments require design-system versioning. |
| 404 copy | Defined for MVP | Keep system copy minimal unless source documents are updated. |
| Numeric performance and accessibility targets | Defined for MVP | Review after implementation against production build results. |

### Version 2

| Item | Status | Requirement |
|---|---|---|
| Expanded project case studies | MISSING INFORMATION | Add approved project architecture, implementation notes, decisions, outcomes, assets, and links. |
| Project repository links | MISSING INFORMATION | Provide approved URLs. |
| Project demo links | MISSING INFORMATION | Provide approved URLs and unavailable-state copy if needed. |
| Project screenshots and diagrams | MISSING INFORMATION | Provide approved media, dimensions, and alt text. |
| Research detail expansion | MISSING INFORMATION | Update source documents before creating new research surfaces. |

### Version 3

| Item | Status | Requirement |
|---|---|---|
| Blog | Out of current scope | Requires updated source documents and content model approval. |
| CMS | Out of current scope | Requires reversal of current no-CMS constraint. |
| Backend | Out of current scope | Requires reversal of current no-backend constraint. |
| Contact form | Out of current scope | Requires backend or approved external workflow. |
| Analytics | MISSING INFORMATION | Requires approved tracking goals, privacy policy, and implementation scope. |

### Future Enhancements

Any future enhancement must pass this gate before implementation:

| Gate | Requirement |
|---|---|
| Source approval | New scope must be documented in `FOUNDATION.md` or an approved successor source. |
| Content approval | All visible text, labels, metadata, assets, and states must be defined. |
| Architecture review | New dependency must not violate static deployment unless constraints are formally changed. |
| Design review | New UI must follow `DESIGN_BRIEF.md` and `DESIGN_SYSTEM.md`. |
| Accessibility review | Keyboard, screen reader, focus, contrast, and reduced-motion behavior must be specified. |
| Rollback plan | The feature must be independently removable. |
