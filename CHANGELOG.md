# Changelog

Record of implementation changes, per `CLAUDE.md`.

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
