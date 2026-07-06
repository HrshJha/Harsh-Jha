// COMPONENT_SPEC.md §6 RoleCard.
// Displays a role title and its approved highlights list.
// No dates, locations, or achievements beyond documented highlights
// (CONTENT_SPEC.md §7; DurationBadge is NOT implemented for MVP).
// Role title is a styled paragraph, not a heading, because the parent
// CompanyCard already provides the h3 for this card's heading.

import { TechnologyList } from "@/components/experience/TechnologyList";

interface RoleCardProps {
  readonly role: string;
  readonly highlights: readonly string[];
}

export function RoleCard({ role, highlights }: RoleCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-body font-medium text-text-secondary">{role}</p>
      <TechnologyList highlights={highlights} />
    </div>
  );
}

