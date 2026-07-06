// COMPONENT_SPEC.md §6 Timeline.
// Renders the ordered list of experience entries.
// May collapse to a stacked list on mobile (COMPONENT_SPEC.md §6 Timeline).
// Dates are MISSING INFORMATION; no DurationBadge is rendered (MVP scope).

import { TimelineItem } from "@/features/experience/components/TimelineItem";
import type { ExperienceRole } from "@/types/experience";

interface TimelineProps {
  readonly entries: readonly ExperienceRole[];
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <ol className="flex flex-col gap-6">
      {entries.map((entry) => (
        <li key={entry.company}>
          <TimelineItem entry={entry} />
        </li>
      ))}
    </ol>
  );
}
