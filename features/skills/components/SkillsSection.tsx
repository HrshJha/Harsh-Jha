import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { skillCategories } from "@/content/skills";

interface SkillsSectionProps {
  readonly heading?: string;
  readonly headingId?: string;
}

export function SkillsSection({ heading, headingId }: SkillsSectionProps) {
  return (
    <div className="flex flex-col gap-8">
      {heading ? (
        <h2 id={headingId} className="text-section-heading font-semibold text-foreground">
          {heading}
        </h2>
      ) : null}
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <Card key={category.category} variant="inset" className="flex flex-col gap-4">
            <h3 className="text-card-title font-semibold text-foreground">
              {category.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li key={skill}>
                  <Badge>{skill}</Badge>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
