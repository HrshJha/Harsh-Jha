import type { NavLink } from "@/types/navigation";

// Source: FOUNDATION.md "Navigation"; CONTENT_SPEC.md §12. Order is fixed
// and mobile labels must match desktop labels exactly.
export const navigationLinks: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
] as const;
