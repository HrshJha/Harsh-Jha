// COMPONENT_SPEC.md §7 AboutSection.
// Composes Biography, EngineeringPhilosophy, LearningPhilosophy, ValuesGrid.
// ProfessionalPhoto and CompetitiveAdvantages are NOT implemented for MVP
// — assets and content are MISSING INFORMATION (COMPONENT_SPEC.md §7).
//
// `heading` and `headingId` are optional (same pattern as ExperienceSection
// and ProjectsSection): the dedicated /about page supplies its own h1, the
// homepage uses a section h2 heading.

import { Biography } from "@/components/about/Biography";
import { EngineeringPhilosophy } from "@/components/about/EngineeringPhilosophy";
import { LearningPhilosophy } from "@/components/about/LearningPhilosophy";
import { ValuesGrid } from "@/components/about/ValuesGrid";

interface AboutSectionProps {
  readonly heading?: string;
  readonly headingId?: string;
}

export function AboutSection({ heading, headingId }: AboutSectionProps) {
  return (
    <div className="flex flex-col gap-8">
      {heading ? (
        <h2
          id={headingId}
          className="text-section-heading font-semibold text-text-primary md:text-section-heading-desktop"
        >
          {heading}
        </h2>
      ) : null}
      <Biography />
      <EngineeringPhilosophy />
      <LearningPhilosophy />
      <ValuesGrid />
    </div>
  );
}
