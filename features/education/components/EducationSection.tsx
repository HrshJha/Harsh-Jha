import { Card } from "@/components/ui/Card";
import { education } from "@/content/education";

interface EducationSectionProps {
  readonly heading?: string;
  readonly headingId?: string;
}

const FACTS = [
  { label: "Institution", value: education.institution },
  { label: "Degree", value: education.degree },
  { label: "Expected Graduation", value: String(education.graduationYear) },
  { label: "Current CGPA", value: String(education.currentCgpa) },
] as const;

export function EducationSection({
  heading,
  headingId,
}: EducationSectionProps) {
  return (
    <div className="flex flex-col gap-8">
      {heading ? (
        <h2 id={headingId} className="text-section-heading font-semibold text-foreground">
          {heading}
        </h2>
      ) : null}
      <Card as="article" variant="default">
        <dl className="grid gap-6 md:grid-cols-2">
          {FACTS.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-2">
              <dt className="text-label font-medium text-muted-foreground">
                {fact.label}
              </dt>
              <dd className="text-body-small text-foreground">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Card>
    </div>
  );
}
