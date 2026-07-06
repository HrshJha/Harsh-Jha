// COMPONENT_SPEC.md §6 TimelineItem.
// Single timeline entry: company + role + highlights.
// Dates are MISSING INFORMATION and must not be rendered.

import { CompanyCard } from "@/components/experience/CompanyCard";
import { RoleCard } from "@/components/experience/RoleCard";
import type { ExperienceRole } from "@/types/experience";

interface TimelineItemProps {
  readonly entry: ExperienceRole;
}

export function TimelineItem({ entry }: TimelineItemProps) {
  return (
    <CompanyCard company={entry.company}>
      <RoleCard role={entry.role} highlights={entry.highlights} />
    </CompanyCard>
  );
}
