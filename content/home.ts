import type { HeroCtas } from "@/types/home";

// Source: CONTENT_SPEC.md §4 Hero; IMPLEMENTATION_PLAN.md Milestone 4.
export const heroCtas: HeroCtas = {
  primary: { label: "View Projects", href: "/projects" },
  secondary: {
    label: "Resume",
    href: "/documents/Harsh_CV.pdf",
    download: "Harsh_Kumar_Jha_Resume.pdf",
  },
} as const;
