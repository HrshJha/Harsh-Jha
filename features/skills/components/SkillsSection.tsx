// COMPONENT_SPEC.md §8 SkillsSection.
// Composes categories in approved order: Programming, Libraries, Backend,
// Developer Tools (CONTENT_SPEC.md §8 Category Names And Ordering).
// No percentages, progress bars, ratings, or levels.
// ProjectReference is NOT implemented for MVP.
//
// `heading` and `headingId` are optional (same pattern as ExperienceSection
// and AboutSection): the homepage passes a heading, the /about page may
// call this without a heading when an outer heading already labels the section.

import { SkillCategory } from "@/components/skills/SkillCategory";
import { skillCategories } from "@/content/skills";

interface SkillsSectionProps {
  readonly heading?: string;
  readonly headingId?: string;
}

export function SkillsSection({ heading, headingId }: SkillsSectionProps) {
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
      <div className="flex flex-col gap-6">
        {skillCategories.map((category) => (
          <SkillCategory key={category.category} category={category} />
        ))}
      </div>
    </div>
  );
}
