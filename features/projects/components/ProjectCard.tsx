import { Button } from "@/components/ui/Button";
import { ProjectTags } from "@/features/projects/components/ProjectTags";
import type { ProjectCaseStudy } from "@/types/project";

interface ProjectCardProps {
  readonly project: ProjectCaseStudy;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const visibleTech = project.techStack.slice(0, 6);

  return (
    <article className="relative flex h-full flex-col gap-5 rounded-lg border border-border-subtle p-6">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.name} GitHub repository`}
        className="absolute inset-0 z-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus"
      />

      <div className="pointer-events-none relative z-10 flex flex-col gap-3">
        <ProjectTags tags={[project.category, project.status]} />
        <h3 className="text-card-title font-semibold text-text-primary">
          {project.name}
        </h3>
        <p className="text-body text-text-secondary">
          {project.shortDescription}
        </p>
      </div>

      <div className="pointer-events-none relative z-10 flex flex-col gap-3">
        <p className="text-label font-medium uppercase tracking-normal text-text-muted">
          {project.primaryFocus}
        </p>
        <ProjectTags tags={visibleTech} />
      </div>

      <div className="relative z-10 mt-auto flex flex-wrap items-center gap-3">
        <Button
          href={`/projects/${project.slug}`}
          variant="secondary"
          className="h-10 px-4 text-sm"
        >
          Explore Project
        </Button>
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
    </article>
  );
}
