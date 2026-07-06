# CLAUDE.md

This file defines how Claude Code must behave when working in this repository.

## Repository Overview

This repository contains the source documents and implementation plan for a static portfolio website for Harsh Kumar Jha.

Project purpose:

- Build a static, production-grade engineering portfolio.
- Support AI/ML internship, research, recruiter, founder, and collaborator journeys.
- Present source-backed identity, projects, experience, skills, education, resume access, and contact paths.

Architecture:

- Static frontend application.
- Next.js App Router architecture as defined in `docs/TECH_SPEC.md`.
- TypeScript-first implementation.
- Token-driven styling based on `docs/DESIGN_SYSTEM.md`.
- Component architecture based on `docs/COMPONENT_SPEC.md`.
- No backend, database, authentication, CMS, or runtime content fetching unless the source documents are formally updated.

Goals:

- Preserve accuracy and credibility.
- Implement incrementally and reviewably.
- Optimize for accessibility, performance, maintainability, and static deployment.
- Avoid unsupported content, speculative features, fake metrics, and invented project details.

## Documentation Hierarchy

Treat the documentation as immutable source of truth unless the user explicitly asks to update it.

Priority order:

1. `docs/FOUNDATION.md`
2. `docs/PRD.md`
3. `docs/CONTENT_SPEC.md`
4. `docs/DESIGN_BRIEF.md`
5. `docs/DESIGN_SYSTEM.md`
6. `docs/TECH_SPEC.md`
7. `docs/COMPONENT_SPEC.md`
8. `docs/IMPLEMENTATION_PLAN.md`

If two documents conflict, follow the higher-priority document and tell the user about the conflict before implementing.

If information is missing, do not guess. Use `MISSING INFORMATION` in documentation work, or block implementation until the missing information is supplied.

## Before Writing Code

Before making code changes, Claude must:

1. Read all relevant source documents in the hierarchy above.
2. Review the existing codebase and current file structure.
3. Identify the current milestone or task from `docs/IMPLEMENTATION_PLAN.md`.
4. Explain the implementation plan briefly before editing.
5. Identify assumptions, blockers, and missing information.
6. Ask the user before proceeding if documentation conflicts, required content is missing, or the requested work would violate the source documents.

Do not start implementation from memory. Re-check the repository state first.

## Coding Rules

Never:

- Invent requirements, features, metrics, achievements, URLs, assets, biographies, or project details.
- Modify unrelated files.
- Refactor unrelated code.
- Ignore the documented architecture.
- Ignore accessibility requirements.
- Ignore performance requirements.
- Add backend, database, authentication, CMS, analytics, or contact-form behavior unless the source documents are updated.
- Add decorative effects forbidden by the design documents.
- Replace documented decisions with personal preference.

Always:

- Explain important implementation decisions.
- Keep changes small and reviewable.
- Follow the documentation hierarchy.
- Preserve existing consistency.
- Prefer source-backed content modules over duplicated hardcoded copy.
- Prefer Server Components unless client behavior is necessary.
- Keep implementation aligned with static deployment.
- Preserve user changes and avoid destructive git operations.

## Component Rules

Every component must:

- Have one clear responsibility.
- Be reusable where reuse is documented or natural.
- Be typed.
- Be accessible.
- Be responsive.
- Use documented component names and ownership boundaries where defined.
- Keep content separate from presentation.
- Avoid hidden behavior that is not visible in the source documents.

Interactive components must define:

- Accessible name.
- Keyboard behavior.
- Focus behavior.
- Disabled or unavailable state when applicable.
- Reduced-motion behavior when animated.

## Styling Rules

Follow `docs/DESIGN_SYSTEM.md`.

Never:

- Hardcode arbitrary spacing, color, typography, radius, shadow, or motion values.
- Introduce undocumented visual styles.
- Create one-off component styling that bypasses tokens.
- Use nested cards, excessive gradients, heavy glassmorphism, low contrast, tiny text, or decorative UI patterns.

Always:

- Use semantic design tokens.
- Keep layout responsive.
- Preserve visual hierarchy from `docs/DESIGN_BRIEF.md`.
- Keep typography readable.
- Use consistent spacing and alignment.
- Treat missing token values as blockers for final polish.

## Animation Rules

Every animation must:

- Have a clear purpose.
- Support orientation, feedback, state change, or navigation clarity.
- Respect reduced-motion preferences.
- Remain performant.
- Avoid layout shift.
- Use transform, opacity, color, border, or other low-cost properties where possible.

Never add:

- Particle backgrounds.
- Matrix rain.
- Typing animation.
- Fake terminal effects.
- Decorative looping animation.
- Motion that hides required content.
- Motion that exists only to impress.

## Performance Rules

Maintain the performance architecture in `docs/TECH_SPEC.md`.

Required behavior:

- Avoid unnecessary JavaScript.
- Prefer static rendering.
- Keep Client Components minimal and justified.
- Avoid unnecessary dependencies.
- Optimize approved images.
- Lazy load non-critical approved assets where appropriate.
- Prevent layout shift.
- Keep bundle size reviewable.
- Run production build checks before claiming completion.

Lighthouse and Core Web Vitals targets are not fully specified in the source documents. Treat high performance as required, and do not invent numeric targets unless the documentation is updated.

## Accessibility Rules

Accessibility is required, not optional.

Every implementation must support:

- Semantic HTML.
- Keyboard navigation.
- Visible focus states.
- Appropriate ARIA only where semantic HTML is insufficient.
- Screen reader-friendly labels.
- Reduced-motion preferences.
- Responsive typography and readable line lengths.
- Usable touch targets.
- No text overlap or hidden essential content.

Interactive components must be usable without a mouse.

## Review Workflow

Before implementation, explain:

- The milestone or task being addressed.
- The files expected to change.
- Dependencies and blockers.
- Any assumptions.
- How the work will be verified.

After implementation, explain:

- What changed.
- Which files were modified.
- Which architectural decisions were made.
- Which validation commands were run.
- Which requirements remain blocked by `MISSING INFORMATION`.

If tests or checks could not be run, say so directly.

## Completion Rules

Stop after finishing one milestone or one explicitly requested task.

Never continue automatically into the next milestone.

Wait for user approval before starting the next milestone, broad refactor, visual polish pass, architecture change, dependency addition, or deployment-related change.

If the user requests multiple milestones at once, complete them only if the request is explicit and the dependency order is clear.

## Documentation Updates

Whenever architecture changes:

- Update `DECISIONS.md`.
- Create `DECISIONS.md` if it does not exist.
- Record the decision, reason, trade-offs, alternatives considered, and date.

Whenever implementation changes:

- Update `CHANGELOG.md`.
- Create `CHANGELOG.md` if it does not exist.
- Record user-visible changes, architectural changes, fixed issues, and known blockers.

Documentation updates must not invent product requirements. They must reflect actual approved changes only.

