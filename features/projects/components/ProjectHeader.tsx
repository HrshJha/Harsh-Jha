import { Button } from "@/components/ui/Button";
import { ProjectTags } from "@/features/projects/components/ProjectTags";
import { StatusBadge } from "@/features/projects/components/StatusBadge";
import type { ProjectCaseStudy } from "@/types/project";

interface ProjectHeaderProps {
  readonly project: ProjectCaseStudy;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <header className="flex flex-col gap-6 border-b border-border-subtle pb-10">
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge status={project.status} />
        <span className="text-label text-text-muted">{project.category}</span>
      </div>
      <div className="flex max-w-4xl flex-col gap-4">
        <h1 className="text-page-title font-semibold text-text-primary md:text-page-title-desktop">
          {project.name}
        </h1>
        <p className="text-section-heading font-medium text-text-primary">
          {project.shortDescription}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-label font-medium uppercase tracking-normal text-text-muted">
          {project.primaryFocus}
        </p>
        <ProjectTags tags={project.techStack} />
      </div>
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
    </header>
  );
}
