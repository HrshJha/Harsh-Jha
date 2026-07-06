import type { HeroCtas } from "@/types/home";

// Source: CONTENT_SPEC.md §4 Hero; IMPLEMENTATION_PLAN.md Milestone 4
// acceptance criteria (primary CTA routes to Projects, secondary to /resume).
export const heroCtas: HeroCtas = {
  primary: { label: "View Projects", href: "/projects" },
  secondary: { label: "Resume", href: "/resume" },
} as const;
