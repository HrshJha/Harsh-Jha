import type { ContactInfo } from "@/types/social";

// Source: FOUNDATION.md "Contact"; CONTENT_SPEC.md §11.
export const contact: ContactInfo = {
  email: "jhaharsh451@gmail.com",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/HrshJha" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hrshjha/" },
    { label: "X", href: "https://x.com/m_eharsh" },
  ],
} as const;
