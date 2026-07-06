# Architecture Decisions

Record of decisions made during implementation, per `CLAUDE.md`.

---

## 2026-07-06 — Milestone 1: Project Initialization

**Decision:** Scaffold with `create-next-app` (Next.js App Router, TypeScript
strict, Tailwind CSS v4), package-managed with pnpm, then strip all
non-source-backed defaults before committing.

**Reason:** `docs/TECH_SPEC.md` §2 names this exact stack. Using the official
scaffold is faster and more consistent than hand-authoring config, provided
the generated boilerplate content is removed afterward.

**Trade-offs:** The scaffold ships default marketing copy, branding assets,
a font choice, and light/dark color tokens that are not approved anywhere in
`docs/`. These were deleted rather than kept, per `FOUNDATION.md`'s
"never invent" rule and `DESIGN_SYSTEM.md` §2's explicit prohibition on
inventing token values.

**Alternatives considered:** Hand-writing every config file. Rejected as
higher-risk (version drift, misconfiguration) for no benefit once the
boilerplate content is stripped.

---

## 2026-07-06 — Global styles reset

**Decision:** Replaced the scaffolded `app/globals.css` (hardcoded
`--background`/`--foreground` hex values, a `prefers-color-scheme: dark`
block, and Geist font wiring) with a single-line `styles/globals.css`
containing only `@import "tailwindcss";`. Moved the file from `app/` to
`styles/` and removed the Geist Google Fonts integration from
`app/layout.tsx`.

**Reason:** `docs/DESIGN_SYSTEM.md` §2–4 marks every color, typography, and
dark-mode value as `MISSING INFORMATION` and explicitly forbids inventing
them. `docs/TECH_SPEC.md` §14 also marks font choice as `MISSING
INFORMATION`. `docs/TECH_SPEC.md` §3 assigns "Global CSS, token mapping,
Tailwind entry styles" to a dedicated `styles/` folder, separate from `app/`.

**Trade-offs:** No color theme or dark mode exists yet; the site currently
renders with browser/Tailwind defaults only. This is intentional and will be
resolved once token values are approved (tracked as a blocker in
`docs/IMPLEMENTATION_PLAN.md` §4).

**Alternatives considered:** Keep the scaffolded tokens as a temporary
placeholder. Rejected — `DESIGN_SYSTEM.md` treats invented token values as a
forbidden pattern, not a placeholder.

---

## 2026-07-06 — Removed default Next.js/Vercel boilerplate

**Decision:** Deleted the default marketing homepage content, `public/*.svg`
Next.js/Vercel logos, and the default `app/favicon.ico`. Replaced
`app/page.tsx` with a minimal placeholder rendering only the documented name
"Harsh Kumar Jha" inside a semantic `<main>`/`<h1>`. Replaced the page
metadata title ("Create Next App") with "Harsh Kumar Jha" and removed the
placeholder description entirely rather than inventing one.

**Reason:** Milestone 1's acceptance criteria in
`docs/IMPLEMENTATION_PLAN.md` requires the app to render "a static placeholder
without unsupported content." The favicon asset is explicitly marked
`MISSING INFORMATION` in `docs/CONTENT_SPEC.md` and `docs/TECH_SPEC.md`, so
supplying Next.js's default icon would silently imply an approved asset that
does not exist.

**Trade-offs:** No favicon, hero copy, or SEO metadata exists yet. Full
homepage content is explicitly out of scope for Milestone 1 (owned by
Milestone 4 "Hero" and Milestone 14 "SEO").

---

## 2026-07-06 — Test tooling scoped to Vitest + React Testing Library only

**Decision:** Installed Vitest, React Testing Library, and jsdom for
Milestone 1's "baseline test tooling" deliverable. Did not install Playwright.

**Reason:** `docs/TECH_SPEC.md` §2 names Playwright for "end-to-end
accessibility and navigation flows," but no routes, navigation, or UI exist
yet to exercise end-to-end. Milestone 13 (Accessibility) is the first
milestone that actually calls for automated accessibility/e2e checks.

**Trade-offs:** Playwright setup is deferred, not decided against — it should
be added once there is real UI to test against it.

**Alternatives considered:** Installing Playwright now for completeness.
Rejected as premature tooling with nothing to validate, adding maintenance
surface ahead of need (`docs/PRD.md` EO-04: avoid unnecessary operational
burden).

---

## 2026-07-06 — Deferred, not decided: static export vs. hybrid rendering

**Status:** Open, deferred to Milestone 16 (Deployment).

`docs/TECH_SPEC.md` §2 hedges between full static export and Vercel's hybrid
Next.js runtime without resolving which one applies. `next.config.ts` is left
at its scaffolded default (no `output: "export"`) so this decision isn't
made unilaterally here. This will need to be pinned down before Milestone 15
(Optimization) validates static export compatibility.

---

## 2026-07-06 — Deferred, not decided: icon library

**Status:** Open, deferred until an icon is actually needed (earliest:
Milestone 3 Navigation, for a mobile menu toggle or social icons).

`docs/TECH_SPEC.md` recommends `lucide-react` but `docs/DESIGN_SYSTEM.md` §6
still marks the icon library as `MISSING INFORMATION` and asks for
confirmation before use. Nothing was installed in Milestone 1.
