// COMPONENT_SPEC.md §7 Biography.
// Renders structured identity facts only — no biography paragraph exists
// (CONTENT_SPEC.md §5 Biography: Approved Content = MISSING INFORMATION).
// ProfessionalPhoto is not implemented for MVP (asset and alt: MISSING INFORMATION).

import { about } from "@/content/about";

export function Biography() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-body text-text-secondary">{about.identity.coreMessage}</p>
      <dl className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-x-2">
          <dt className="text-label font-medium text-text-primary">Degree</dt>
          <dd className="text-label text-text-secondary">
            {about.identity.degreeShortForm}, {about.identity.institution}
          </dd>
        </div>
        <div className="flex flex-wrap gap-x-2">
          <dt className="text-label font-medium text-text-primary">
            Graduation
          </dt>
          <dd className="text-label text-text-secondary">
            {about.identity.graduationYear}
          </dd>
        </div>
        <div className="flex flex-wrap gap-x-2">
          <dt className="text-label font-medium text-text-primary">
            Current CGPA
          </dt>
          <dd className="text-label text-text-secondary">
            {about.identity.currentCgpa}
          </dd>
        </div>
      </dl>
    </div>
  );
}
