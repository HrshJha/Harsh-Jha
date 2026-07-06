// COMPONENT_SPEC.md §6. ExperienceSection composes the section heading
// and Timeline. Section introduction is MISSING INFORMATION (CONTENT_SPEC.md §7)
// and must not be invented.
//
// `heading` and `headingId` are optional: the dedicated /experience page
// supplies its own h1, while the homepage uses this with a section heading.

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
          className="text-section-heading font-semibold text-text-primary md:text-section-heading-desktop"
        >
          {heading}
        </h2>
      ) : null}
      <Timeline entries={experience} />
    </div>
  );
}
