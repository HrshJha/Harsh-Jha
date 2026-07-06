import { education } from "@/content/education";

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
      <dl className="grid gap-4 rounded-lg border border-border-subtle p-5 md:grid-cols-2">
        <div>
          <dt className="text-label font-medium uppercase tracking-normal text-text-muted">
            Institution
          </dt>
          <dd className="mt-1 text-body text-text-secondary">
            {education.institution}
          </dd>
        </div>
        <div>
          <dt className="text-label font-medium uppercase tracking-normal text-text-muted">
            Degree
          </dt>
          <dd className="mt-1 text-body text-text-secondary">
            {education.degree}
          </dd>
        </div>
        <div>
          <dt className="text-label font-medium uppercase tracking-normal text-text-muted">
            Expected Graduation
          </dt>
          <dd className="mt-1 text-body text-text-secondary">
            {education.graduationYear}
          </dd>
        </div>
        <div>
          <dt className="text-label font-medium uppercase tracking-normal text-text-muted">
            Current CGPA
          </dt>
          <dd className="mt-1 text-body text-text-secondary">
            {education.currentCgpa}
          </dd>
        </div>
      </dl>
    </div>
  );
}
