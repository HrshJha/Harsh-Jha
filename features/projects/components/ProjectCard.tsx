import { Button } from "@/components/ui/Button";
import { ProjectTags } from "@/features/projects/components/ProjectTags";
import type { ProjectCaseStudy } from "@/types/project";

interface ProjectCardProps {
  readonly project: ProjectCaseStudy;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const visibleTech = project.techStack.slice(0, 6);

  return (
    <article className="flex h-full flex-col gap-5 rounded-lg border border-border-subtle p-6 transition-colors duration-(--duration-fast) ease-(--ease-standard) hover:border-border-strong focus-within:border-border-strong">
      <div className="flex flex-col gap-3">
        <ProjectTags tags={[project.category, project.status]} />
        <h3 className="text-card-title font-semibold text-text-primary">
          {project.name}
        </h3>
        <p className="text-body text-text-secondary">
          {project.shortDescription}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-label font-medium uppercase tracking-normal text-text-muted">
          {project.primaryFocus}
        </p>
        <ProjectTags tags={visibleTech} />
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-3">
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
          ariaLabel={`Open ${project.name} GitHub repository`}
          className="h-10 px-4 text-sm"
        >
          GitHub
        </Button>
      </div>
    </article>
  );
}
