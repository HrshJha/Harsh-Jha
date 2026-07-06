# Technical Specification

## 1. Executive Summary

### Project Architecture

The portfolio should be built as a static, content-driven Next.js application using the App Router, TypeScript, Server Components by default, and a small number of Client Components only where interactivity is required.

The architecture must support:

- Static deployment.
- No backend.
- No database.
- No authentication.
- No CMS.
- Source-backed content.
- High performance.
- Strong accessibility.
- SEO-ready metadata.
- Future scalability without changing the portfolio philosophy.

### Technology Goals

| Goal | Technical Direction | Why |
| --- | --- | --- |
| Static reliability | Generate all pages at build time. | Matches the mandatory static deployment constraint. |
| Maintainability | Store portfolio content in typed local content modules. | Avoids CMS/backend while keeping content centralized. |
| Performance | Minimize client JavaScript, images, animation, and runtime dependencies. | The site must feel fast and lightweight. |
| Accessibility | Use semantic HTML, visible focus, keyboard-safe navigation, and reduced-motion handling. | Required by PRD and design system. |
| SEO | Use App Router metadata APIs, sitemap, robots, canonical URLs, structured data, and semantic page structure. | Recruiters and technical evaluators need discoverability and clear metadata. |
| Design-system compliance | Implement UI through reusable primitives and feature components. | Prevents inconsistent interfaces. |

### Constraints

Mandatory constraints from existing documents:

- No backend.
- No database.
- No authentication.
- No CMS.
- Static deployment.
- No contact form requiring a backend.
- No blog.
- No certifications section.
- No GitHub contribution graph.
- No visitor counters.
- No fake metrics.
- No fake testimonials.
- No skill percentages.
- No unsupported project claims, repository links, demo links, screenshots, diagrams, code snippets, or achievements.

### Engineering Philosophy

The implementation should prefer:

- Static content over runtime data fetching.
- Server Components over Client Components.
- Typed data over unstructured strings.
- Semantic HTML over div-heavy markup.
- CSS and design tokens over ad hoc styling.
- Purposeful motion over animation libraries by default.
- Simple architecture over premature abstraction.

## 2. Technology Stack

This section resolves previously missing implementation choices. These choices must remain subordinate to `FOUNDATION.md`, `docs/PRD.md`, `docs/CONTENT_SPEC.md`, `docs/DESIGN_BRIEF.md`, and `docs/DESIGN_SYSTEM.md`.

| Area | Recommendation | Why Selected | Trade-off |
| --- | --- | --- | --- |
| Framework | Next.js App Router, current patched stable version at implementation time. | Supports static generation, file-based routing, metadata, sitemap, robots, Server Components, and strong SEO. | Adds framework conventions compared with plain Vite, but improves routing and metadata architecture. |
| Rendering | Static generation with static export where hosting requires fully static output. | Enforces no backend/runtime dependency. | Some Next.js server features must be avoided. |
| Language | TypeScript with strict mode. | Protects content models, route params, component props, and configuration. | Requires additional type definitions. |
| Package Manager | pnpm. | Fast installs, strict dependency layout, efficient disk usage. | Requires contributors to use pnpm consistently. |
| Styling | Tailwind CSS with design tokens mapped from `DESIGN_SYSTEM.md`. | Efficient responsive styling and consistent token usage. | Requires strict token discipline to avoid one-off styles. |
| Component Primitives | Local components first; shadcn/ui only if implementation needs accessible primitives such as Sheet/Dialog. | Keeps dependency surface small and aligns with static portfolio scope. | Local primitives require accessibility discipline. |
| Animation Library | CSS transitions by default; Framer Motion only for route/section motion that cannot be implemented cleanly with CSS and Intersection Observer. | Minimizes client JavaScript while allowing purposeful motion if needed. | Framer Motion adds bundle weight and should be isolated. |
| GSAP | Not recommended for MVP. | Too heavy for restrained portfolio motion. | More powerful timeline control, but unnecessary for documented needs. |
| Icons | lucide-react for functional interface icons only when icons are necessary. | Consistent outline style, tree-shakable React icons, suitable for restrained technical interfaces. | Brand/social icons should default to text labels unless approved assets are added. |
| Fonts | `next/font` using the font families defined in `docs/DESIGN_SYSTEM.md`. | Prevents layout shift and avoids external font runtime requests. | Font implementation must preserve the documented fallback stack. |
| Linting | ESLint with Next.js config, TypeScript rules, accessibility rules. | Catches framework, type, and accessibility issues early. | Requires configuration maintenance. |
| Formatting | Prettier. | Consistent formatting with low debate. | Another tool in the pipeline. |
| Testing | Vitest for unit tests, React Testing Library for component behavior, Playwright for end-to-end accessibility and navigation flows. | Covers content rendering, component contracts, and real browser behavior. | Adds setup cost but reduces regression risk. |
| Deployment | Vercel recommended for Next.js; static export compatible hosting acceptable. | Vercel has first-class Next.js support. Static hosting remains compatible with project constraints. | Deployment provider was previously MISSING INFORMATION. |
| Analytics | Disabled by default. Optional privacy-respecting analytics only after source approval. | Analytics strategy is MISSING INFORMATION and should not introduce tracking by default. | No conversion data until approved. |
| Image Optimization | `next/image` for approved local assets; static export may require unoptimized output or compatible image handling. | Prevents layout shift and supports responsive images. | Current assets are MISSING INFORMATION. |
| SEO | Next.js Metadata API, static sitemap, robots, canonical URLs once domain exists, JSON-LD. | Centralized and type-safe metadata. | Canonical domain is MISSING INFORMATION. |
| Accessibility | Semantic HTML, eslint-plugin-jsx-a11y, Playwright accessibility checks, manual keyboard testing. | Aligns with PRD and design system requirements. | Automated tools do not replace manual review. |

Versioning rule: Do not pin stale framework versions in documentation. During implementation, pin the latest patched stable versions of Next.js, React, React DOM, TypeScript, and tooling.

## 3. Project Folder Structure

Recommended structure:

```text
.
|-- app/
|-- components/
|-- features/
|-- hooks/
|-- lib/
|-- styles/
|-- constants/
|-- config/
|-- content/
|-- types/
|-- utils/
|-- public/
|   |-- assets/
|   |-- documents/
|   |-- icons/
|   `-- images/
|-- animations/
|-- providers/
`-- docs/
```

| Folder | Purpose | Why It Exists |
| --- | --- | --- |
| `app/` | App Router routes, layouts, metadata files, not-found UI, sitemap, robots. | Keeps routing aligned with Next.js conventions. |
| `components/` | Shared UI primitives and reusable components. | Prevents duplication across pages and features. |
| `features/` | Domain-specific feature modules such as hero, projects, experience, about, skills, education, resume, contact. | Keeps product sections isolated and maintainable. |
| `hooks/` | Client-only React hooks. | Limits browser logic to explicit client code. |
| `lib/` | Framework utilities, metadata builders, structured data helpers, content access functions. | Centralizes non-UI logic. |
| `styles/` | Global CSS, token mapping, Tailwind entry styles. | Keeps styling foundations separate from components. |
| `constants/` | Immutable route names, external links, nav labels, status labels. | Prevents duplicated strings. |
| `config/` | Site config, SEO config, deployment-safe settings. | Separates configuration from rendering code. |
| `content/` | Typed local content for projects, experience, skills, education, social links, copy. | Replaces CMS/database while keeping content source-backed. |
| `types/` | Shared TypeScript types and discriminated unions. | Ensures content and components remain type-safe. |
| `utils/` | Small generic helpers. | Avoids mixing generic utilities into feature code. |
| `public/` | Static assets served directly. | Required for static documents, icons, images, favicon, resume once available. |
| `public/assets/` | General static assets. | Asset grouping. |
| `public/documents/` | Resume PDF once defined. | Keeps documents separate from images. |
| `public/icons/` | Static icons or favicons. | Supports metadata and static assets. |
| `public/images/` | Approved images only. | Images are currently MISSING INFORMATION. |
| `animations/` | Shared motion constants and animation helpers. | Keeps motion controlled and purposeful. |
| `providers/` | Client providers only if needed. | Keeps provider usage explicit and minimal. |
| `docs/` | Product, content, design, design system, and technical documentation. | Maintains implementation source of truth. |

Folder rules:

- Do not add `api/`, server actions, database clients, auth helpers, or CMS clients for MVP.
- Do not create feature folders for out-of-scope sections such as blog or certifications.
- Content must be imported from `content/`, not copied into arbitrary components.

## 4. Routing Strategy

### Route Hierarchy

| Route | App Router File | Purpose | Rendering |
| --- | --- | --- | --- |
| `/` | `app/page.tsx` | Homepage and recruiter journey entry. | Static. |
| `/projects` | `app/projects/page.tsx` | Full project overview. | Static. |
| `/projects/[slug]` | `app/projects/[slug]/page.tsx` | Project detail using documented project fields only. | Static via generated params. |
| `/experience` | `app/experience/page.tsx` | Professional experience. | Static. |
| `/about` | `app/about/page.tsx` | Identity, philosophy, values, focus areas. | Static. |
| `/resume` | `app/resume/page.tsx` | Stable resume access destination. | Static; download/open/PDF behavior waits for resume asset/path. |
| `/contact` | `app/contact/page.tsx` | Direct contact links. | Static. |
| `404` | `app/not-found.tsx` | Unknown route handling. | Static. |

### Nested Routes

No nested route groups are required for MVP. Route groups may be used for organization only if they do not affect URLs, for example `app/(site)/...`.

### Dynamic Routes

Use `app/projects/[slug]/page.tsx` for project details only if the implementation chooses project detail pages rather than anchored sections. Slugs must be generated from the approved project list:

- `frameos`
- `candidate-intelligence-system`
- `appforge-ai`
- `hallucination-hunter`

Dynamic project pages must not include unsupported fields.

### Project Detail Pages

Project detail pages are permitted by PRD but content depth is MISSING INFORMATION. Therefore:

- Render only project name, one-line description, and status.
- Omit architecture, repository, demo, screenshots, diagrams, and code sections until approved.
- Do not add "coming soon" copy unless approved.
- Project cards must link to their corresponding static detail routes.

### 404

Use approved system copy from `docs/CONTENT_SPEC.md`: "Page not found." The route should provide a source-backed path back to Home or Projects without adding personality-driven copy.

### Metadata Routes

| Route/File | Requirement |
| --- | --- |
| `app/robots.ts` | Generate static robots rules. |
| `app/sitemap.ts` | Generate static sitemap from route config and project slugs. |
| `app/icon.*` or `public/favicon.*` | Favicon asset is MISSING INFORMATION. |
| `app/opengraph-image.*` | Preview image is MISSING INFORMATION; use static metadata without image until approved. |

### Canonical URLs

Canonical domain is MISSING INFORMATION. Implement metadata helpers so canonical URLs can be enabled once `siteUrl` is defined.

## 5. Component Architecture

### Strategy

Use a hybrid strategy:

- Atomic primitives for generic UI.
- Feature-based components for portfolio sections.
- Page components for route composition.

This keeps reusable UI consistent while keeping business/content rules close to each feature.

### Component Layers

| Layer | Examples | Ownership |
| --- | --- | --- |
| Primitives | `Button`, `Badge`, `Card`, `IconButton`, `Section`, `Container` | `components/ui/` |
| Layout | `AppShell`, `SiteHeader`, `DesktopNavigation`, `MobileNavigation`, `SiteFooter` | `components/layout/` |
| Feature components | `HeroSection`, `ProjectsSection`, `ExperienceSection`, `SkillsSection`, `EducationSummary`, `ContactLinks` | `features/*/components/` |
| Route components | Page files under `app/` | Route owner |
| Data/content access | `getProjects`, `getExperience`, `siteConfig` | `content/`, `lib/` |

### Server Components

Default to Server Components for:

- Pages.
- Static sections.
- Project lists.
- Experience lists.
- Skills and education.
- SEO/metadata.

Why: Server Components ship less JavaScript and suit static content.

### Client Components

Use Client Components only for:

- Mobile navigation open/close state.
- Reduced-motion-aware animation controls.
- Intersection Observer section reveals if implemented.
- Any browser-only APIs.

Rules:

- Push `'use client'` as far down the tree as possible.
- Do not make entire pages Client Components.
- Do not introduce global state libraries for static content.

### Shared Components

Shared components must not contain portfolio-specific copy unless intentionally designed as feature components. For example, `Button` should not know about "View Projects"; `HeroSection` may.

## 6. State Management

### Local State

Use local React state only in Client Components for:

- Mobile menu open/closed state.
- Focus or disclosure state if a static-safe disclosure exists.
- Reduced-motion client behavior if needed.

### Global State

No global state library is required for MVP.

Rejected options:

- Redux: unnecessary for static content.
- Zustand: unnecessary unless future interactive filters/search become complex.
- React Query/SWR: unnecessary because there is no API or runtime data fetching.

### Theme

Theme behavior is MISSING INFORMATION. Do not add a theme switcher unless approved.

Recommended implementation:

- Use one static theme defined by design tokens.
- Keep token architecture compatible with future light/dark expansion.

### Animation State

Animation state should be local and isolated. Avoid app-wide animation state.

### Project Filters

Project filters are not defined in source documents. Do not implement filters for MVP.

### Search

Search is not defined in source documents. Do not implement search for MVP.

### URL State

Use URL state only for routes and project slugs. Do not add query-parameter filters or search until approved.

### Future Scalability

If future source documents approve filters, search, or CMS data:

- Start with URL state for shareable filters.
- Add lightweight local state before global state.
- Introduce data-fetching libraries only after real runtime data exists.

## 7. Styling Architecture

### CSS Strategy

Use Tailwind CSS backed by semantic CSS custom properties. Tailwind utilities should reference approved design tokens, not arbitrary values.

### Tailwind Strategy

- Map `DESIGN_SYSTEM.md` tokens to Tailwind theme values once token values are approved.
- Use semantic classes and component variants.
- Avoid arbitrary values except during prototyping, and remove them before acceptance.

### Utility Strategy

Allowed:

- Layout utilities.
- Responsive utilities.
- State utilities.
- Typography utilities mapped to tokens.

Not allowed:

- One-off arbitrary color values.
- One-off spacing values.
- Decorative gradient utilities.
- Utility chains that obscure component intent.

### Component Styling

Use component variants for:

- Button variants.
- Badge variants.
- Card variants.
- Section/container variants.

Recommended helper:

- Class composition utility such as `clsx` or `tailwind-merge` if needed.
- Component variant helper such as `class-variance-authority` if component variants become complex.

### Responsive Styling

Responsive rules must follow the design system:

- Mobile single-column flow.
- Tablet simplified grids.
- Desktop comparison layouts.
- Ultra-wide constrained reading widths.

### Dark Mode Strategy

Theme mode is MISSING INFORMATION. Do not implement a theme toggle. If dark mode is later approved, use token-based class strategy rather than duplicating component styles.

## 8. Animation Architecture

### Default Approach

Use CSS transitions for basic hover, focus, and state changes.

Use Intersection Observer only if section reveal motion is approved and improves orientation.

Use Framer Motion only if:

- CSS cannot meet the interaction requirement.
- The animation is purposeful.
- Bundle impact is measured.
- Reduced-motion behavior is implemented.

Do not use GSAP for MVP.

### Motion Hierarchy

| Level | Example | Implementation |
| --- | --- | --- |
| Micro | Button hover, link hover, focus feedback. | CSS transitions. |
| Section | Subtle reveal when content enters viewport. | Intersection Observer plus CSS or isolated Framer Motion. |
| Navigation | Mobile menu/drawer. | CSS or accessible primitive. |
| Page | Route transition. | Avoid by default; only if performance remains strong. |

### Animation Triggers

Allowed triggers:

- Hover.
- Focus.
- Menu open/close.
- Viewport entry if approved.

Forbidden:

- Scroll hijacking.
- Constant background movement.
- Typing animation.
- Particle systems.
- Decorative loops.

### Animation Organization

Store shared motion constants in `animations/` using the duration and easing tokens defined in `docs/DESIGN_SYSTEM.md`.

### Performance Strategy

- Prefer transform and opacity.
- Avoid layout-triggering animation.
- Respect `prefers-reduced-motion`.
- Do not animate essential content into existence if it remains hidden without JavaScript.

## 9. Performance Architecture

### Image Optimization

Assets are MISSING INFORMATION. When assets are approved:

- Use `next/image` for local images where compatible with deployment.
- Provide width and height to prevent layout shift.
- Use priority only for above-the-fold critical images.
- Lazy-load non-critical images.
- Do not include decorative large media.

If using static export and default image optimization is unavailable, use pre-optimized local assets or compatible static image settings.

### Code Splitting

Next.js route-based code splitting is sufficient for pages. Additional dynamic imports should be used for:

- Optional animation libraries.
- Heavy future visual components.
- Non-critical interactive widgets if approved.

### Lazy Loading

Lazy-load:

- Non-critical images.
- Optional motion components.
- Future project media.

Do not lazy-load critical text content required for first evaluation.

### Dynamic Imports

Use dynamic imports only for client-only heavy dependencies. Do not dynamically import static content just to hide bundle problems.

### Fonts

- Use `next/font`.
- Avoid external runtime font loading.
- Use the font family stack defined in `docs/DESIGN_SYSTEM.md`.
- Preload only required font weights.

### Icons

- Use tree-shakable imports.
- Avoid icon packs imported wholesale.
- Use icons sparingly.

### Caching

Static pages and assets should be cacheable by hosting infrastructure. No runtime cache layer is required because there is no backend or API.

### Bundle Optimization

Rules:

- Keep client components minimal.
- Avoid large animation libraries unless justified.
- Avoid CMS, analytics, and data-fetching libraries by default.
- Use bundle analysis before release.

### Lighthouse Targets

Required production Lighthouse targets:

- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

If a target is missed due to a documented platform limitation, record the limitation and remediation plan before production release.

### Core Web Vitals

Architecture should optimize for:

- Low LCP through minimal hero media and optimized fonts.
- Low CLS through fixed asset dimensions and stable layout.
- Low INP through minimal client JavaScript.

## 10. SEO Architecture

### Metadata

Use Next.js Metadata API. Metadata must come from `content/` and `config/`, not duplicated in pages.

Approved homepage metadata:

- Title: `Harsh Kumar Jha - Building AI Products, Open Source & Real-World Solutions`
- Description: `Building autonomous AI systems through research, engineering, and product thinking.`

### Open Graph

Use approved title and description. Preview image is MISSING INFORMATION and must be omitted or use no image until approved.

### Twitter

Use approved Twitter title and description. Preview image is MISSING INFORMATION.

### Structured Data

Use JSON-LD only for source-backed fields.

Allowed:

- Person name.
- Site name.
- Social sameAs links for GitHub, LinkedIn, X.
- Education fields if valid for selected schema.

Do not include:

- Unsupported job titles.
- Employer dates.
- Project URLs.
- Awards.
- Certifications.
- Metrics.
- Demo links.

### Canonical URLs

Canonical domain is MISSING INFORMATION. Implement `siteUrl` as a config value that must be defined before canonical URLs are emitted in production.

### Robots

Generate `robots.txt` via `app/robots.ts`.

Default:

- Allow public crawling.
- Sitemap URL requires canonical domain, currently MISSING INFORMATION.

### Sitemap

Generate sitemap from:

- Static route config.
- Project slugs.

Do not include routes for out-of-scope sections.

### Semantic HTML

Use:

- One page-level `h1`.
- Ordered heading hierarchy.
- `main`, `header`, `nav`, `section`, `article`, `footer`.
- Lists for skills, values, highlights, and navigation groups.

### Breadcrumbs

Breadcrumbs are optional for project detail pages. If used, they must be semantic and not introduce new visible copy outside approved labels.

## 11. Accessibility Architecture

### ARIA

Use native semantic HTML first. Add ARIA only where native HTML is insufficient.

Known labels from content spec:

- Home.
- Projects.
- Experience.
- About.
- Resume.
- Contact.
- GitHub.
- LinkedIn.
- X.
- Email.

Expanded ARIA copy remains MISSING INFORMATION.

### Keyboard

Required:

- All links and buttons keyboard accessible.
- Visible focus state.
- Mobile navigation must support Escape close if a drawer is used.
- Focus trap required for modal/drawer navigation if implemented.

### Focus

Focus indicators must be visible and cannot be removed for aesthetics. Focus order must follow DOM and reading order.

### Reduced Motion

Use CSS media queries and client checks where needed to respect reduced motion.

### Semantic HTML

Project cards should be `article` elements or equivalent semantic structures when they represent standalone project summaries. Navigation must use `nav`. Section headings must be programmatically associated with sections.

### Color Contrast

Color contrast must meet WCAG 2.2 AA for text and interactive controls. Token-level correction is required if automated or manual review finds a contrast failure.

### Screen Readers

- Project status must be text.
- Icon-only links require accessible names.
- Decorative images must be hidden from assistive tech.
- Resume link behavior must be described after destination is defined.

### Touch Targets

Interactive controls must provide at least a `44px` effective hit area on touch devices.

## 12. Error Handling

### 404

Implement `app/not-found.tsx` with the approved system copy from `docs/CONTENT_SPEC.md`: "Page not found."

### Unexpected Errors

Implement `app/error.tsx` only if needed for route-level runtime errors. Since the app is static, unexpected runtime errors should be minimal.

Error copy is MISSING INFORMATION.

### Broken Images

Images are MISSING INFORMATION. If images are later approved:

- Use static imports where possible.
- Provide dimensions.
- Avoid rendering missing asset placeholders unless approved copy exists.

### Unavailable Project Demos

Project demo URLs are MISSING INFORMATION. Do not render demo buttons or unavailable-demo states for MVP.

### Loading Failures

Static pages should not require user-visible loading states for core content. Loading copy is MISSING INFORMATION.

### Graceful Degradation

The site must remain readable if:

- JavaScript fails.
- Motion is disabled.
- Images fail.
- External social links are unavailable.

Core content must be server-rendered/static HTML.

## 13. Asset Organization

### Images

Path: `public/images/`

Status: MISSING INFORMATION

Rules:

- Use only approved assets.
- Optimize before commit.
- Include dimensions.
- Include approved alt text.

### Icons

Path: `public/icons/` for static icons or package imports for icon library.

Icon library recommendation: lucide-react if approved.

### Videos

Videos are MISSING INFORMATION and not recommended for MVP because they add weight and are not documented.

### Documents / PDF

Path: `public/documents/`

Resume asset path: MISSING INFORMATION.

Rule: Resume CTA must not claim download/open behavior until asset behavior is defined.

### Fonts

Use `next/font`. Local font files may be stored under `public/fonts/` only if a local font strategy is approved. Font family must follow `docs/DESIGN_SYSTEM.md`.

### SVG

SVGs must be:

- Icons.
- Logos/favicons.
- Functional diagrams if approved.

SVGs must not be decorative filler.

### Naming Conventions

| Asset Type | Naming Rule | Example |
| --- | --- | --- |
| Images | lowercase-kebab-case | `project-frameos-overview.png` |
| Documents | lowercase-kebab-case | `harsh-kumar-jha-resume.pdf` |
| Icons | lowercase-kebab-case | `icon-github.svg` |
| Diagrams | lowercase-kebab-case | `hallucination-hunter-architecture.svg` |

Examples are naming patterns only, not approved asset names.

### Compression Rules

- Compress raster images before commit.
- Prefer SVG for simple icons and diagrams.
- Avoid large uncompressed assets.
- Do not add stock imagery.

## 14. Environment Strategy

### Environment Variables

MVP should require no environment variables.

Optional future variables:

| Variable | Status | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Required only when production domain is approved | Canonical URLs and sitemap. |
| `NEXT_PUBLIC_ANALYTICS_ID` | Future only | Analytics if approved. |

### Public Variables

Only expose values that are safe for the browser. Social URLs and static content should live in typed config, not env vars.

### Secrets

No secrets are required. Do not add secrets for MVP.

### Future Backend Compatibility

If backend features are later approved:

- Add server-only environment variables.
- Never initialize service clients at module scope.
- Validate environment variables at startup/build.
- Keep backend code outside static-only MVP routes.

### Deployment Strategy

Recommended:

- Vercel for first-class Next.js support.
- Static export compatible deployment if a fully static host is required.

Vercel is the recommended deployment provider. A different static-compatible provider may be selected only if it preserves the static deployment constraints.

## 15. Coding Standards

### Naming Conventions

| Item | Convention | Example |
| --- | --- | --- |
| Components | PascalCase | `ProjectCard` |
| Hooks | camelCase with `use` prefix | `useReducedMotion` |
| Utilities | camelCase | `formatProjectSlug` |
| Types | PascalCase | `Project` |
| Constants | camelCase or UPPER_CASE for true constants | `siteConfig` |
| Routes | lowercase kebab-case | `/candidate-intelligence-system` |

### Folder Naming

Use lowercase kebab-case for folders except Next.js route segment conventions. Keep feature folders semantic:

- `features/projects`
- `features/experience`
- `features/contact`

### File Naming

Recommended:

- Components: `ProjectCard.tsx`
- Types: `project.ts` or colocated `types.ts`
- Content modules: `projects.ts`
- Tests: `ProjectCard.test.tsx`

### Import Ordering

Order imports:

1. React/Next.
2. Third-party packages.
3. Internal absolute imports.
4. Relative imports.
5. Types.
6. Styles.

### TypeScript Rules

- Enable strict mode.
- Avoid `any`.
- Use discriminated unions for content variants.
- Type project slugs.
- Type metadata builders.
- Use readonly content arrays where possible.

### Comment Rules

- Prefer self-documenting code.
- Add comments only for non-obvious architectural choices.
- Do not add comments that restate code.

### Documentation Rules

- Update docs when architecture changes.
- Do not add content not present in approved source documents.
- Keep `TECH_SPEC.md` aligned with implementation.

## 16. Security

### Headers

Recommended security headers:

- `Content-Security-Policy`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy`
- `Permissions-Policy`
- `X-Frame-Options` or CSP `frame-ancestors`

Exact CSP depends on deployment, fonts, analytics, and assets. Since analytics and font source are MISSING INFORMATION, CSP must be finalized during implementation.

### Content Security Policy

Default posture:

- Allow self-hosted scripts and styles.
- Avoid inline scripts.
- Avoid external analytics until approved.
- Allow approved external social links only as navigation destinations.

### External Links

External links must:

- Use approved URLs.
- Use `rel="noopener noreferrer"` when opened in a new tab.
- Have accessible labels.

### Dependency Management

- Pin dependencies through lockfile.
- Keep Next.js and React on patched stable versions.
- Run dependency audits.
- Avoid unnecessary dependencies.

### XSS Prevention

- Do not use `dangerouslySetInnerHTML` unless absolutely required and source is trusted.
- Prefer typed content objects over raw HTML or Markdown.
- If Markdown is later added, sanitize and constrain allowed elements.

### Future Authentication Compatibility

Authentication is out of scope. If future auth is approved:

- Do not rely on middleware/proxy alone for authorization.
- Revalidate authorization in server-side code.
- Keep secrets server-only.

## 17. Scalability

Future changes must first be approved in source documents. This section describes technical evolution paths, not current scope.

### If Blog Is Added

Current status: Out of scope.

If approved:

- Add `content/posts/`.
- Add static routes under `/blog`.
- Add typed frontmatter.
- Add sitemap entries.
- Add RSS only if approved.
- Avoid CMS unless approved.

### If Research Page Is Added

Current status: MISSING INFORMATION.

If approved:

- Add `/research`.
- Model research entries as typed local content.
- Add source-backed metadata only.

### If Backend Is Added

Current status: Out of scope.

If approved:

- Introduce API routes or external service integration deliberately.
- Add environment validation.
- Add server-only modules.
- Add error handling and observability.

### If CMS Is Added

Current status: Out of scope.

If approved:

- Define schema based on existing content models.
- Keep source-backed constraints.
- Add preview only if required.
- Add cache strategy.

### If Analytics Expanded

Current status: MISSING INFORMATION.

If approved:

- Choose privacy-respecting analytics.
- Document event names.
- Do not add visitor counters.
- Do not expose analytics data as vanity metrics.

## 18. Technical Constraints

| Constraint | Architectural Enforcement |
| --- | --- |
| No backend | No route handlers, server actions, API clients, or form submission endpoints for MVP. |
| No database | Content stored in typed local modules. |
| No authentication | No auth providers, sessions, middleware auth, or protected routes. |
| Static deployment | Static generation/export-compatible architecture. |
| Maximum performance | Server Components by default, minimal client JS, optimized assets. |
| Maintainability | Feature folders, typed content, shared components, centralized config. |
| No CMS | No CMS SDKs, preview mode, webhooks, or runtime content fetches. |
| No unsupported content | Content modules must mirror approved documents. |

## 19. Engineering Decisions

| Decision | Reason | Trade-offs | Alternative Considered | Why Rejected |
| --- | --- | --- | --- | --- |
| Use Next.js App Router. | Best fit for static routes, metadata, sitemap, and future scalability. | More framework structure than Vite. | Vite SPA. | We need SEO, file routing, metadata, and static route generation without SPA drawbacks. |
| Use TypeScript strict mode. | Content and route safety matter. | More upfront typing. | JavaScript. | Higher risk of content/model drift. |
| Use static generation/static export-compatible architecture. | Mandatory static deployment and no backend. | Avoids some server features. | SSR or ISR. | Runtime server behavior conflicts with static constraints. |
| Use typed local content modules. | Replaces CMS/database and keeps content source-backed. | Content changes require code changes. | CMS. | CMS is explicitly out of scope. |
| Use Server Components by default. | Minimizes shipped JavaScript. | Browser APIs require client islands. | Client-rendered app. | Less performant and weaker no-JS fallback. |
| Avoid global state library. | Site has no complex client state. | Future interactivity may require reevaluation. | Zustand/Redux. | Unnecessary dependency and complexity. |
| Use Tailwind with semantic tokens. | Efficient styling while enforcing design system constraints. | Requires token mapping discipline. | CSS Modules only. | Harder to keep responsive/token consistency across many components. |
| Use CSS motion first. | Lightweight and sufficient for restrained motion. | Less expressive than animation libraries. | Framer Motion everywhere. | Adds bundle weight and risks over-animation. |
| Keep analytics disabled by default. | Analytics strategy is missing and visitor counters are forbidden. | No conversion data initially. | Add analytics immediately. | Would invent an unapproved dependency and tracking model. |
| Use local components before UI libraries. | Portfolio needs a small, controlled component set. | More responsibility for accessibility. | Full component library. | Can add unused weight and style assumptions. |
| Do not implement search or filters. | Not in source documents. | Less browsing functionality. | Add client filters. | Invents features and state. |
| Do not render project repo/demo buttons. | URLs are MISSING INFORMATION. | Project cards may be simpler. | Placeholder buttons. | Would imply unavailable or unsupported actions. |

## 20. Acceptance Criteria

The architecture is complete when:

- `docs/TECH_SPEC.md` exists and aligns with all prior source documents.
- The selected stack supports static deployment with no backend, database, authentication, or CMS.
- The route hierarchy covers Home, Projects, Project Detail, Experience, About, Resume, Contact, 404, robots, sitemap, and favicon strategy.
- The folder structure supports `app/`, `components/`, `features/`, `hooks/`, `lib/`, `styles/`, `constants/`, `config/`, `content/`, `types/`, `utils/`, `public/`, `assets/`, `animations/`, and `providers/`.
- Component architecture distinguishes primitives, layout, feature components, pages, Server Components, and Client Components.
- State management avoids global state unless future approved needs emerge.
- Styling architecture maps to `DESIGN_SYSTEM.md` and uses the defined MVP token baseline.
- Animation architecture is purposeful, minimal, reduced-motion-aware, and performance-conscious.
- SEO architecture covers metadata, Open Graph, Twitter metadata, structured data, canonical URLs, robots, sitemap, semantic HTML, and optional breadcrumbs.
- Accessibility architecture covers ARIA, keyboard, focus, reduced motion, semantic HTML, contrast, screen readers, and touch targets.
- Error handling covers 404, unexpected errors, broken images, unavailable demos, loading failures, and graceful degradation without inventing copy.
- Asset organization covers images, icons, videos, documents, PDF, fonts, SVG, naming, and compression.
- Environment strategy requires no secrets for MVP.
- Security guidance covers headers, CSP, external links, dependency management, XSS prevention, and future authentication compatibility.
- Scalability guidance explains how future blog, research, backend, CMS, and analytics additions would be handled only after source approval.
- Engineering decisions document reason, trade-offs, alternatives, and rejection rationale.
