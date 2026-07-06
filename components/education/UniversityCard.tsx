// COMPONENT_SPEC.md §9 UniversityCard.
// Institution summary: shows institution, degree, graduation, CGPA.
// No coursework, awards, or certifications (CONTENT_SPEC.md §9 Supporting
// Information — all are MISSING INFORMATION or out of scope).
// Education description paragraph: MISSING INFORMATION — not rendered.

import { AcademicInfo } from "@/components/education/AcademicInfo";
import { education } from "@/content/education";

export function UniversityCard() {
  return (
    <article
      className="flex flex-col gap-4 rounded-lg border border-border-subtle p-6"
      aria-label={education.institution}
    >
      <h3 className="text-card-title font-semibold text-text-primary">
        {education.shortInstitution} — {education.institution}
      </h3>
      <AcademicInfo />
    </article>
  );
}
