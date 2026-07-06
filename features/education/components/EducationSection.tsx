// COMPONENT_SPEC.md §9 EducationSection.
// Composes section heading and UniversityCard.
// Education description paragraph: MISSING INFORMATION — not rendered.
// Coursework component: not implemented for MVP (COMPONENT_SPEC.md §9).
//
// `heading` and `headingId` are optional (same pattern as ExperienceSection,
// AboutSection, SkillsSection): the homepage/about page pass a heading, a
// dedicated education route would supply its own h1 without one.

import { UniversityCard } from "@/components/education/UniversityCard";

interface EducationSectionProps {
  readonly heading?: string;
  readonly headingId?: string;
}

export function EducationSection({
  heading,
  headingId,
}: EducationSectionProps) {
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
      {/* Description paragraph: MISSING INFORMATION (CONTENT_SPEC.md §9). */}
      <UniversityCard />
    </div>
  );
}
