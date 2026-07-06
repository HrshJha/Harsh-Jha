import { Button } from "@/components/ui/Button";
import type { ProjectCaseStudy } from "@/types/project";

function ParagraphSection({
  title,
  paragraphs,
}: {
  readonly title: string;
  readonly paragraphs: readonly string[];
}) {
  if (paragraphs.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-4 border-b border-border-subtle pb-8">
      <h2 className="text-section-heading font-semibold text-text-primary md:text-section-heading-desktop">
        {title}
      </h2>
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className="max-w-text text-body leading-7 text-text-secondary"
        >
          {paragraph}
        </p>
      ))}
    </section>
  );
}

function BulletSection({
  title,
  items,
  maxItems,
}: {
  readonly title: string;
  readonly items: readonly string[];
  readonly maxItems: number;
}) {
  const visibleItems = items.slice(0, maxItems);

  if (visibleItems.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-4 border-b border-border-subtle pb-8">
      <h2 className="text-section-heading font-semibold text-text-primary md:text-section-heading-desktop">
        {title}
      </h2>
      <ul className="grid gap-2 text-body leading-7 text-text-secondary md:grid-cols-2">
        {visibleItems.map((item) => (
          <li key={item} className="before:mr-2 before:content-['-']">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProjectCaseStudyContent({
  project,
}: {
  readonly project: ProjectCaseStudy;
}) {
  return (
    <div className="flex flex-col gap-8">
      <ParagraphSection title="The Problem" paragraphs={project.problem} />
      <ParagraphSection title="The Solution" paragraphs={project.solution} />
      <BulletSection
        title="Architecture"
        items={project.architecture}
        maxItems={5}
      />
      <BulletSection
        title="Key Features"
        items={project.keyFeatures}
        maxItems={6}
      />
      <BulletSection
        title="Technical Highlights"
        items={project.technicalHighlights}
        maxItems={6}
      />
      <BulletSection
        title="Challenges"
        items={project.challenges}
        maxItems={4}
      />
      <BulletSection
        title="What I Learned"
        items={project.learnings}
        maxItems={4}
      />
      <section className="flex flex-col gap-4 border-b border-border-subtle pb-8">
        <h2 className="text-section-heading font-semibold text-text-primary md:text-section-heading-desktop">
          Repository
        </h2>
        <div>
          <Button
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            className="h-10 px-4 text-sm"
          >
            GitHub
          </Button>
        </div>
      </section>
    </div>
  );
}
