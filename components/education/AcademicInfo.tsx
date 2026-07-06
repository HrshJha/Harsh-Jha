// COMPONENT_SPEC.md §9 AcademicInfo.
// Displays structured academic facts with labels in field-ordering per
// CONTENT_SPEC.md §9: Institution → Degree → Graduation → CGPA.
// Uses a definition list for semantic field/value pairing.
// No coursework, awards, academic projects, or certifications —
// all are MISSING INFORMATION or out of scope (CONTENT_SPEC.md §9).

import { education } from "@/content/education";

export function AcademicInfo() {
  return (
    <dl className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-x-2">
        <dt className="text-label font-medium text-text-primary">
          Institution
        </dt>
        <dd className="text-label text-text-secondary">
          {education.institution}
        </dd>
      </div>
      <div className="flex flex-wrap gap-x-2">
        <dt className="text-label font-medium text-text-primary">Degree</dt>
        <dd className="text-label text-text-secondary">{education.degree}</dd>
      </div>
      <div className="flex flex-wrap gap-x-2">
        <dt className="text-label font-medium text-text-primary">
          Graduation
        </dt>
        <dd className="text-label text-text-secondary">
          {education.graduationYear}
        </dd>
      </div>
      <div className="flex flex-wrap gap-x-2">
        <dt className="text-label font-medium text-text-primary">
          Current CGPA
        </dt>
        <dd className="text-label text-text-secondary">
          {education.currentCgpa}
        </dd>
      </div>
    </dl>
  );
}
