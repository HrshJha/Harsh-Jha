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

---

## 2026-07-06 — Milestone 2: folder ownership conflict (`components/ui` vs. `components/layout` vs. `components/shared`)

**Decision:** `Container`, `Section`, and `Grid` live in `components/ui/`.
`MainLayout` and `PageWrapper` live in `components/layout/`. No
`components/shared/` folder was created.

**Reason:** Three source documents disagree on where these primitives
belong: `docs/TECH_SPEC.md` §5 puts `Section`/`Container` under
`components/ui/` (as "Primitives"); `docs/COMPONENT_SPEC.md` §2 groups
`Section`/`Container`/`PageWrapper`/`MainLayout` together as "Global Layout
Components" without naming a folder; `docs/IMPLEMENTATION_PLAN.md`'s
Milestone 2 file list says `components/layout/` and `components/shared/`.
Per `CLAUDE.md`'s documentation hierarchy, `TECH_SPEC.md` outranks both
`COMPONENT_SPEC.md` and `IMPLEMENTATION_PLAN.md`, so its `components/ui/`
placement for content-agnostic primitives wins. `MainLayout`/`PageWrapper`
are page-composition components, not generic primitives, so they went to
`components/layout/` — the one folder name all three documents agree on.

**Trade-offs:** None functionally; this is a folder-naming resolution only.

---

## 2026-07-06 — Milestone 2: route skeletons render approved labels only

**Decision:** Each new route (`/projects`, `/experience`, `/about`,
`/resume`, `/contact`) renders only its own single-word section heading
already approved in `docs/CONTENT_SPEC.md` §17 (e.g. "Projects",
"Experience"). `/projects/[slug]` renders only the matched project's
approved `name`. No hero copy, project cards, timelines, or other feature
content was added.

**Reason:** Full page content is explicitly owned by Milestones 4–11
(Hero, Projects, Experience, About, Skills, Education, Resume, Contact), not
Milestone 2 ("Core Architecture"). Rendering more now would implement future
milestones ahead of their own tasks and components (e.g. `ProjectCard`,
`StatusBadge` don't exist yet).

**Trade-offs:** Pages are visually empty beyond a heading until their
dedicated milestones land. This is intentional.

---

## 2026-07-06 — Milestone 2: `/projects/[slug]` restricted to approved slugs

**Decision:** `dynamicParams = false` on `app/projects/[slug]/page.tsx`, so
only the four slugs returned by `generateStaticParams` (derived from
`content/projects.ts`) resolve; any other slug 404s instead of rendering
on demand.

**Reason:** `docs/IMPLEMENTATION_PLAN.md` Milestone 2 acceptance criteria:
"Project detail routes are generated only for the four approved projects."

**Trade-offs:** None — this is the documented requirement, not a judgment
call.

---

## 2026-07-06 — Milestone 2: 404 page still has no real copy

**Decision:** `app/not-found.tsx` renders only the numeral "404" and a link
to Home (label "Home", already approved for navigation).

**Reason:** `docs/CONTENT_SPEC.md` §15 and `docs/TECH_SPEC.md` §12 both mark
404 copy as `MISSING INFORMATION`. A bare status code isn't invented prose;
a Home link uses only an already-approved label.

**Trade-offs:** No user-facing explanation of what happened exists yet.
Deferred until approved 404 copy is supplied.

---

## 2026-07-06 — Milestone 2: root/homepage metadata still title-only

**Decision:** Did not add `description`, Open Graph, Twitter, or structured
data to `app/layout.tsx` or any new route, even though `docs/CONTENT_SPEC.md`
§13 already has approved homepage description/OG/Twitter text.

**Reason:** Populating full SEO metadata is explicitly Milestone 14's job
(task `SEO-01`). Content being available doesn't move milestone ownership.

**Trade-offs:** None; deferred, not blocked — the approved copy is ready
for Milestone 14 to consume via `lib/metadata.ts`.

---

## 2026-07-06 — Ongoing: uncommitted changes are being auto-committed by an external process

**Status:** Observed again this milestone, not caused by me.

A background process outside Claude Code (`~/.clario/mcp-server`, per two
running processes found in Milestone 1) committed the pending
`.prettierignore`/`next.config.ts` changes left at the end of Milestone 1
into a new commit (`7d15370`) under the repository owner's git identity,
without either of us running `git commit`. I verified this specific commit's
diff contains only the changes I actually made — no additional fabricated
content this time (unlike the Milestone 1 finding, where the same mechanism
had rewritten two `MISSING INFORMATION` fields in `docs/COMPONENT_SPEC.md`
and `docs/IMPLEMENTATION_PLAN.md` into invented "approved" values). Flagged
to the user at the end of Milestone 1; no action taken on it since, and I'm
not taking unilateral action on it now either — noting it here so it's on
the record.

---

## 2026-07-06 — Milestone 3: functional interface microcopy filled in ahead of formal approval

**Decision:** Used minimal, conventional text for four pieces of UI copy
that multiple source documents mark `MISSING INFORMATION`: the mobile menu
trigger ("Menu"), its close button ("Close" / `aria-label="Close menu"`),
the drawer's accessible name (`aria-label="Navigation menu"`), and both
`nav` landmarks' accessible name (`aria-label="Primary"`).

**Reason:** These aren't product/marketing content in the sense
`FOUNDATION.md`'s "never invent" rule is protecting against (achievements,
claims, biography) — they're required accessible names for interactive
controls that must exist for the component to be usable at all (an
icon/text-only toggle and a `role="dialog"` both require an accessible
name per WCAG). `docs/COMPONENT_SPEC.md` §3 explicitly says the toggle's
label "must be supplied before release," implying the component should
still be built now with a placeholder. Leaving these blank or blocking the
whole milestone on approval of the word "Menu" seemed disproportionate.

**Trade-offs:** This is a judgment call, not a resolved requirement — flag
if you want different wording; all four strings live in exactly four
places (`components/navigation/{MobileNavbar,NavigationDrawer}.tsx`,
`components/navigation/DesktopNavbar.tsx`) so they're cheap to change.

---

## 2026-07-06 — Milestone 3: hand-rolled focus trap instead of a dependency

**Decision:** `NavigationDrawer`'s focus trap (Tab wrapping, Escape close,
initial focus) is hand-written with `useEffect` + `querySelectorAll`,
rather than using an accessible-dialog library (e.g. Radix UI's Dialog,
which `docs/TECH_SPEC.md` §2 explicitly allows: "shadcn/ui only if
implementation needs accessible primitives such as Sheet/Dialog").

**Reason:** `CLAUDE.md`'s Completion Rules require your approval before any
dependency addition. Rather than pause mid-milestone to ask, I implemented
the trap directly — it's a bounded, six-link menu, not a general-purpose
modal system, so this was tractable without a library.

**Trade-offs:** A hand-rolled trap is more surface area to get subtly wrong
than a battle-tested primitive. Covered by
`components/navigation/MobileNavbar.test.tsx` (open → Escape → focus
returns to trigger). If you'd rather standardize on Radix/shadcn for this
and future overlays (there will be at least one more: none currently
planned, but `docs/COMPONENT_SPEC.md` reserves `Modal`/`Accordion`/`Tabs`
as future-only), say so and I'll swap it in.

---

## 2026-07-06 — Milestone 3: no drawer open/close animation yet

**Decision:** The mobile drawer mounts/unmounts instantly (conditional
render), no transition.

**Reason:** `docs/IMPLEMENTATION_PLAN.md` assigns "Add mobile drawer
transition" to Milestone 12 (Animations, task `MOT-03`), which explicitly
depends on this milestone's `NAV-05`. Motion is scoped to land after all of
Milestones 3–11 are functionally complete, not incrementally per milestone.

**Trade-offs:** None; this is the documented sequencing, not a shortcut.

---

## 2026-07-06 — Milestone 3: active-route matching uses prefix match

**Decision:** `utils/isNavItemActive.ts` treats `/projects/frameos` as
matching the "Projects" nav item (`href: "/projects"`), not just an exact
path match. Home (`/`) is the one exception — it matches only the exact
root path.

**Reason:** Not specified by any source document at this level of detail;
this is the conventional interpretation of "active route" (a project detail
page is still "within" Projects) and avoids every nav item going dark once
a user navigates to `/projects/[slug]`.

**Trade-offs:** Judgment call — flag if you want exact-match-only
semantics instead.

---

## 2026-07-06 — Milestone 3: no sticky header

**Decision:** `NavigationLayout`'s `<header>` uses normal document flow, no
`position: sticky`.

**Reason:** `docs/DESIGN_SYSTEM.md` §9 marks sticky-nav behavior
`MISSING INFORMATION` ("allowed only if it improves orientation... Sticky
behavior: MISSING INFORMATION"). Non-sticky is the conservative default
that doesn't require inventing a behavior.

**Trade-offs:** None; deferred, not decided against.

---

## 2026-07-06 — Milestone 3: no social links in the primary nav

**Decision:** `NavigationLayout` renders only `Logo` + the six primary
links (via `DesktopNavbar`/`MobileNavbar`) — no GitHub/LinkedIn/X/Email.

**Reason:** `docs/DESIGN_SYSTEM.md` §9: "Social links are secondary and
must not compete with primary navigation." Social/contact links belong to
Milestone 11 (Contact) and the Footer tasks, not Milestone 3.

**Trade-offs:** None; this is the documented scope boundary.
