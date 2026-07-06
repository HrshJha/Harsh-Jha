import { Badge } from "@/components/ui/Badge";
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
      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((category) => (
          <section
            key={category.category}
            aria-labelledby={`${category.category}-skills-heading`}
            className="rounded-lg border border-border-subtle p-5"
          >
            <h3
              id={`${category.category}-skills-heading`}
              className="text-card-title font-semibold text-text-primary"
            >
              {category.category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li key={skill}>
                  <Badge>{skill}</Badge>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
