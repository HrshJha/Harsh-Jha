import { Timeline } from "@/features/experience/components/Timeline";
import { experience } from "@/content/experience";

interface ExperienceSectionProps {
  readonly heading?: string;
  readonly headingId?: string;
}

export function ExperienceSection({
  heading,
  headingId,
}: ExperienceSectionProps) {
  return (
    <div className="flex flex-col gap-6">
      {heading ? (
        <h2
          id={headingId}
          className="text-section-heading font-semibold text-foreground "
        >
          {heading}
        </h2>
      ) : null}
      <Timeline entries={experience} />
    </div>
  );
}
