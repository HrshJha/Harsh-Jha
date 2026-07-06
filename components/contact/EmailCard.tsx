// COMPONENT_SPEC.md §11 EmailCard.
// Renders a mailto link using the approved email address.
// No backend form. Full-width on mobile.

import { contact } from "@/content/contact";

export function EmailCard() {
  return (
    <a
      href={`mailto:${contact.email}`}
      aria-label="Email"
      className="flex w-full flex-col gap-2 rounded-lg border border-border p-6 transition-colors duration-(--duration-fast) ease-(--ease-standard) hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:w-auto"
    >
      <span className="text-card-title font-semibold text-foreground">
        Email
      </span>
      <span className="text-body text-muted-foreground">{contact.email}</span>
    </a>
  );
}
