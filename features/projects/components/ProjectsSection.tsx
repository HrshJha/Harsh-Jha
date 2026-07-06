import { ProjectGrid } from "@/features/projects/components/ProjectGrid";
import { projects } from "@/content/projects";

interface ProjectsSectionProps {
  readonly heading?: string;
  readonly headingId?: string;
}

// `heading` is optional: the homepage passes "Featured Projects"
// (CONTENT_SPEC.md §4), while the standalone /projects route already has
// its own "Projects" H1 and doesn't need a second, duplicate heading.
export function ProjectsSection({ heading, headingId }: ProjectsSectionProps) {
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
      <ProjectGrid projects={projects} />
    </div>
  );
}
