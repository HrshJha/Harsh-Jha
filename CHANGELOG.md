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
