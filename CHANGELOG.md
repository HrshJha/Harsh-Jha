# Changelog

Record of implementation changes, per `CLAUDE.md`.

---

## 2026-07-06 — Milestone 6: Experience

**Added:**

- `components/experience/TechnologyList.tsx` — renders source-backed role
  highlights as a semantic wrapped list. No unlisted technologies are inferred.
- `components/experience/RoleCard.tsx` — displays a role title (styled `p`)
  and its `TechnologyList`. `DurationBadge` is intentionally absent for MVP
  because dates are `MISSING INFORMATION` (COMPONENT_SPEC.md §6).
- `components/experience/CompanyCard.tsx` — company-level `article` grouping
  with an `h3` heading. `h3` is used so heading hierarchy is valid both on the
  dedicated `/experience` route (h1 → h3) and on the homepage where a section
  `h2` sits above it (h1 → h2 → h3).
- `features/experience/components/TimelineItem.tsx` — composes `CompanyCard`
  and `RoleCard` for a single experience entry.
- `features/experience/components/Timeline.tsx` — ordered list of
  `TimelineItem` components, using `<ol>` to reflect chronological ordering.
- `features/experience/components/ExperienceSection.tsx` — composes the
  optional section heading and `Timeline`. Section introduction is
  `MISSING INFORMATION` and is intentionally absent.
- `content/experience.test.ts` — 6 tests validating that the experience
  content module contains exactly the two approved companies, correct role
  titles, approved highlights only, and no `dates`, `location`, or
  `achievements` fields (EXP-06).

**Changed:**

- `app/experience/page.tsx` — replaced route skeleton with `ExperienceSection`
  beneath a proper `h1` "Experience" with page-title typography tokens.
- `app/page.tsx` — added experience preview section ("Experience" heading,
  `experience-preview-heading` id) after the Featured Projects section,
  matching the CONTENT_SPEC.md §4 Experience Preview and recruiter journey.

**Blocked (unchanged):**

- `DurationBadge` — not implemented; dates are `MISSING INFORMATION`.
- Section introduction — not implemented; copy is `MISSING INFORMATION`.
- Employer URLs — not implemented; links are `MISSING INFORMATION`.
- Achievements beyond documented highlights — not implemented;
  achievements are `MISSING INFORMATION`.

**Validation:**

- `pnpm tsc --noEmit` — passed (0 errors).
- `pnpm lint` — passed (0 warnings or errors).
- `pnpm vitest run` — 29/29 tests passed (6 new experience content tests).
- `pnpm build` — all 12 static routes compiled and generated successfully.

---

## 2026-07-06 — Milestone 1: Project Initialization


**Added:**

- Next.js App Router project (TypeScript strict mode, Tailwind CSS v4),
  package-managed with pnpm.
- ESLint (`eslint-config-next` core-web-vitals + TypeScript rules, which
  bundle `eslint-plugin-jsx-a11y`) with `eslint-config-prettier` to avoid
  formatting-rule conflicts.
- Prettier for formatting, with `.prettierrc.json` / `.prettierignore`.
- Vitest + React Testing Library + jsdom as baseline test tooling, with one
  smoke test for the homepage placeholder.
- `package.json` scripts: `dev`, `build`, `start`, `lint`, `typecheck`,
  `format`, `format:check`, `test`.
- Full folder structure from `docs/TECH_SPEC.md` §3: `app/`, `components/`,
  `features/`, `hooks/`, `lib/`, `styles/`, `constants/`, `config/`,
  `content/`, `types/`, `utils/`, `animations/`, `providers/`,
  `public/{assets,documents,icons,images}` (new folders hold `.gitkeep`
  placeholders — no feature code yet).
- `styles/globals.css` (Tailwind entry only, no invented tokens).
- Minimal `app/page.tsx` placeholder rendering the documented name "Harsh
  Kumar Jha".
- `.gitignore`.
- `DECISIONS.md` (this milestone's architecture decisions).

**Removed (from the default `create-next-app` scaffold):**

- Default marketing homepage copy and layout.
- `public/next.svg`, `public/vercel.svg`, `public/file.svg`,
  `public/globe.svg`, `public/window.svg` (Next.js/Vercel branding).
- `app/favicon.ico` (unapproved default asset).
- Geist Google Fonts integration in `app/layout.tsx`.
- Hardcoded color tokens and `prefers-color-scheme: dark` block in the
  default global stylesheet.
- Default `"Create Next App"` page metadata.

**Known blockers (unresolved `MISSING INFORMATION`, not addressed by this
milestone):** design tokens (color/typography/spacing/motion/breakpoints),
font family, icon library confirmation, favicon/OG asset, resume asset/path,
canonical domain, static-export-vs-hybrid rendering decision. See
`DECISIONS.md` and `docs/IMPLEMENTATION_PLAN.md` §4 for details.

**Validation run:** `pnpm install`, `pnpm build`, `pnpm lint`,
`pnpm typecheck`, `pnpm test`.

---

## 2026-07-06 — Milestone 2: Core Architecture

**Added:**

- Typed content modules in `content/` (`identity.ts`, `projects.ts`,
  `experience.ts`, `education.ts`, `skills.ts`, `social.ts`), each sourced
  verbatim from `docs/FOUNDATION.md` / `docs/CONTENT_SPEC.md`, backed by
  types in `types/` (`identity.ts`, `project.ts`, `experience.ts`,
  `education.ts`, `skills.ts`, `social.ts`).
- `constants/status.ts` (shared `"In Progress"` status literal).
- `config/site.ts` (site name; `siteUrl` left undefined — canonical domain
  is `MISSING INFORMATION`).
- `lib/metadata.ts` — `buildMetadata()` helper; emits a canonical URL only
  once `siteConfig.siteUrl` is set.
- Shared layout primitives: `components/ui/{Container,Section,Grid}.tsx`,
  `components/layout/{MainLayout,PageWrapper}.tsx`, plus a small
  `utils/cn.ts` class-joining helper (no new dependency added for this).
- Route skeletons: `app/projects/page.tsx`, `app/projects/[slug]/page.tsx`
  (static params generated only for the four approved project slugs,
  `dynamicParams = false`), `app/experience/page.tsx`, `app/about/page.tsx`,
  `app/resume/page.tsx`, `app/contact/page.tsx`, `app/not-found.tsx`. Each
  renders only its own already-approved section label (or, for the project
  detail route, the matched project's approved name) — no feature content.
- Tests: `content/projects.test.ts`, `app/projects/[slug]/page.test.ts`.

**Modified:**

- `app/layout.tsx` — metadata now built via `buildMetadata()`; `children`
  now wrapped in `MainLayout` (single `main` landmark, owned at the root
  instead of per-page).
- `app/page.tsx` — same "Harsh Kumar Jha" placeholder content from
  Milestone 1, now composed through `PageWrapper`/`Section` instead of a
  raw `<main>` tag (avoids double `main` landmarks now that the root layout
  owns it).

**Not implemented (explicitly deferred to later milestones):**
navigation content/components (Milestone 3), all real page content for
Hero/Projects/Experience/About/Skills/Education/Resume/Contact
(Milestones 4–11), full SEO metadata beyond `title` (Milestone 14), approved
404 copy (blocked on `MISSING INFORMATION`).

**Validation run:** `pnpm typecheck`, `pnpm lint`, `pnpm format:check`,
`pnpm test` (4 tests passing), `pnpm build` (all 12 routes prerendered
statically, including exactly the four approved project slugs).

---

## 2026-07-06 — Milestone 3: Navigation

**Added:**

- `types/navigation.ts` (`NavLink`), `content/navigation.ts` (the six
  approved nav links, in order), `content/navigation.test.ts`.
- `utils/isNavItemActive.ts` (prefix-aware active-route matching) +
  `utils/isNavItemActive.test.ts`.
- `components/navigation/`: `Logo`, `NavItem`, `ActiveIndicator`,
  `DesktopNavbar` (+ test), `MobileNavbar` (+ test), `NavigationDrawer`.
- `components/layout/NavigationLayout.tsx` — composes `Logo` +
  `DesktopNavbar` + `MobileNavbar` inside a `header`.
- Mobile nav drawer with a hand-rolled focus trap: initial focus on open,
  Tab/Shift+Tab wrapping, Escape to close, focus returned to the trigger
  button on close. `role="dialog"` / `aria-modal="true"`.
- Active-route indication via `aria-current="page"` plus a non-color-only
  visual underline (`ActiveIndicator`), for both desktop and mobile nav.

**Modified:**

- `app/layout.tsx` — renders `<NavigationLayout />` above `<MainLayout>`.

**Not implemented (explicitly deferred):** drawer open/close animation
(Milestone 12, task `MOT-03`), sticky header (`MISSING INFORMATION`),
social/contact links in the header nav (Milestone 11 / Footer),
`ThemeToggle` (explicitly excluded by this milestone's own acceptance
criteria), `NavGroup`/`ScrollProgress` (not requested by this milestone's
deliverable list).

**Judgment calls made on unapproved microcopy** (see `DECISIONS.md` for
full reasoning — all four strings are cheap to change): mobile toggle
label "Menu", close button "Close", drawer `aria-label="Navigation menu"`,
nav landmark `aria-label="Primary"`.

**Also fixed:** two markdown headings in `DECISIONS.md` that had been
accidentally hard-wrapped across two lines during Milestone 2 authoring,
which broke them into non-heading paragraphs once Prettier reformatted the
file.

**Validation run:** `pnpm typecheck`, `pnpm lint`, `pnpm format:check`,
`pnpm test` (7 test files, 11 tests passing), `pnpm build`.

---

## 2026-07-06 — Milestone 4: Hero

**Added:**

- Tailwind v4 `@theme` block in `styles/globals.css` wiring the MVP token
  baseline from `docs/DESIGN_SYSTEM.md` §2-4, §12: colors, typography
  scale (`type.hero`, `type.pageTitle`, `type.body` with paired line
  heights), border radius, container widths, and motion (duration/easing)
  tokens. Milestones 1-3 had wrongly treated these as `MISSING
INFORMATION`; see `DECISIONS.md`.
- `types/home.ts`, `content/home.ts` (+ `content/home.test.ts`) — hero CTA
  labels/destinations (`View Projects` → `/projects`, `Resume` →
  `/resume`).
- `components/ui/Button.tsx` — base action primitive (`variant`: primary/
  secondary; renders as a link when `href` is given, otherwise a native
  `button`), keyboard-focusable with a visible focus ring.
- `components/hero/`: `HeroTitle` (H1 "Harsh Kumar Jha" + professional
  headline), `HeroSubtitle` (hero statement), `CTAGroup` (View
  Projects/Resume buttons), `SocialLinks` (GitHub/LinkedIn/X as text
  links, no icons), `HeroSection` (composes all four).

**Modified:**

- `components/ui/Container.tsx` — now applies `max-w-content` (72rem) and
  responsive horizontal padding, since the container-width tokens it was
  waiting on turned out to already be defined.
- `app/page.tsx` — renders `HeroSection` instead of the Milestone 1/2
  placeholder heading.
- `app/page.test.tsx` — extended to also assert the professional headline,
  hero statement, both CTA destinations, and all three social link URLs.

**Not implemented (explicitly deferred):** `Grid.tsx`/`PageWrapper.tsx`
retrofits (tokens now available but neither is used by Hero — deferred to
whichever milestone first exercises them), real Geist font loading (would
require a new dependency or font asset, not yet approved), any hover/
focus motion beyond color/opacity transitions (purposeful only, no
section-entry animation — that's Milestone 12).

**Judgment calls made** (see `DECISIONS.md` for full reasoning): the
professional headline renders larger (`type.hero`) than the H1
(`type.pageTitle`); `Button` primary/secondary hover colors; `SocialLinks`
scoped to `components/hero/` rather than a shared folder.

**Validation run:** `pnpm typecheck`, `pnpm lint`, `pnpm format:check`,
`pnpm test` (8 test files, 15 tests passing), `pnpm build` (all 12 routes
prerendered statically). Also spot-checked the compiled production CSS to
confirm the new `@theme` tokens and the `duration-(--duration-fast)`/
`ease-(--ease-standard)` arbitrary-value syntax actually compiled to the
expected declarations rather than being silently dropped.

---

## 2026-07-06 — Milestone 5: Projects

**Added:**

- `components/ui/Badge.tsx` — generic compact status/tag primitive.
- `features/projects/components/`: `StatusBadge` (project status via
  `Badge`), `ProjectTags` (renders each project's only approved tag, its
  status), `ProjectCard` (name linking to its detail route, one-line
  description, status — `article` semantics), `ProjectGrid` (responsive
  1/2-column layout), `ProjectsSection` (optional heading, used with
  "Featured Projects" on the homepage and headless on `/projects`),
  `ProjectHeader` (detail-page name/description/status), and
  `NavigationBetweenProjects` (previous/next links sourced from the
  static project order in `content/projects.ts`, no wrap-around).
- Additional typography tokens in `styles/globals.css`'s `@theme` block:
  `type.sectionHeading` and `type.cardTitle` (with paired line-heights)
  and `type.label`, from `docs/DESIGN_SYSTEM.md` §4.
- Tests: `features/projects/components/NavigationBetweenProjects.test.tsx`,
  `app/projects/page.test.tsx`; extended `app/page.test.tsx` (Featured
  Projects section) and converted `app/projects/[slug]/page.test.ts` to
  `.test.tsx` to add rendering assertions (approved name/description/
  status only, correct prev/next links).

**Modified:**

- `app/projects/page.tsx` — renders `ProjectsSection` (all four approved
  projects as cards) under the existing "Projects" H1.
- `app/projects/[slug]/page.tsx` — renders `ProjectHeader` +
  `NavigationBetweenProjects` instead of the Milestone 2 placeholder
  heading. `generateStaticParams`/`dynamicParams` unchanged.
- `app/page.tsx` — adds a "Featured Projects" section (all four projects)
  below Hero.

**Not implemented (explicitly excluded, no source content exists):**
repository/demo links, screenshots, diagrams, code snippets, architecture,
metrics, outcomes, a separate "Technical Focus" section on project detail
pages (`docs/CONTENT_SPEC.md` §6 lists it as a required section, but no
source document defines its content — see `DECISIONS.md`), and a distinct
`FeaturedProjectCard` component (see `DECISIONS.md`).

**Judgment calls made** (see `DECISIONS.md` for full reasoning): Projects
feature components placed under `features/projects/components/` per
`docs/TECH_SPEC.md` §5 (correcting the Milestone 4 precedent of
`components/hero/`, which is left as-is); implemented `ProjectHeader` and
`NavigationBetweenProjects` for MVP despite `docs/COMPONENT_SPEC.md`'s
composition-tree diagram listing them under a "Future-only dependency
graph" heading, which conflicts with that same document's own row-level
component table; no `FeaturedProjectCard` (all four projects are equally
"featured," so there's no differentiated layout for it to serve).

**Validation run:** `pnpm typecheck`, `pnpm lint`, `pnpm format:check`,
`pnpm test` (10 test files, 23 tests passing), `pnpm build` (all 12
routes prerendered statically, including exactly the four approved
project detail slugs). Manually grepped the new Projects code for
repo/demo/screenshot/metric/"coming soon"/download-style language —
none found.
