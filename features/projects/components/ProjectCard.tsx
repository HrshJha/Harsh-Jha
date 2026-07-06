import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProjectTags } from "@/features/projects/components/ProjectTags";
import type { ProjectCaseStudy } from "@/types/project";

interface ProjectCardProps {
  readonly project: ProjectCaseStudy;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const visibleTech = project.techStack.slice(0, 6);

  return (
    <Card as="article" interactive className="flex h-full flex-col gap-5">
      <div className="flex flex-col gap-3">
        <ProjectTags tags={[project.category, project.status]} />
        <h3 className="text-card-title font-semibold text-foreground">
          {project.name}
        </h3>
        <p className="text-body text-muted-foreground">
          {project.shortDescription}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-label font-medium uppercase tracking-normal text-muted-foreground">
          {project.primaryFocus}
        </p>
        <ProjectTags tags={visibleTech} />
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-3">
        <Button
          href={`/projects/${project.slug}`}
          variant="secondary"
          size="sm"
        >
          Explore Project
        </Button>
        <Button
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          ariaLabel={`Open ${project.name} GitHub repository`}
          size="sm"
        >
          GitHub
        </Button>
      </div>
    </Card>
  );
}
