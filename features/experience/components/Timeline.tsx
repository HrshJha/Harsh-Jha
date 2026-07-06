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
