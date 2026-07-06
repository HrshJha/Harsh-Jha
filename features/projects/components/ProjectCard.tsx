import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ProjectTags } from "@/features/projects/components/ProjectTags";
import type { ProjectCaseStudy } from "@/types/project";

interface ProjectCardProps {
  readonly project: ProjectCaseStudy;
}

function ProjectMetaItem({
  label,
  value,
}: {
  readonly label: string;
  readonly value: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-label font-medium uppercase tracking-normal text-text-muted">
        {label}
      </dt>
      <dd className="text-body text-text-secondary">{value}</dd>
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const previewTechnologies = project.portfolioTechnologies.slice(0, 4);

  return (
    <article className="flex h-full flex-col gap-6 rounded-lg border border-border-subtle p-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <ProjectTags tags={[project.category, project.status]} />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-card-title font-semibold text-text-primary">
            <Link
              href={`/projects/${project.slug}`}
              className="hover:text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus"
            >
              {project.name}
            </Link>
          </h3>
          <p className="text-body font-medium text-text-primary">
            {project.shortDescription}
          </p>
          <p className="text-body text-text-secondary">{project.overview}</p>
        </div>
      </div>

      <dl className="grid gap-4 border-t border-border-subtle pt-5 md:grid-cols-2">
        <ProjectMetaItem label="Primary focus" value={project.primaryFocus} />
        <ProjectMetaItem
          label="Product stack"
          value={project.productStackStatus}
        />
        <ProjectMetaItem
          label="Repository"
          value={project.repositoryStatus}
        />
        <ProjectMetaItem
          label="Portfolio stack"
          value={
            previewTechnologies.length > 0
              ? previewTechnologies.join(", ")
              : "Not documented"
          }
        />
      </dl>

      <div className="mt-auto flex flex-wrap items-center gap-3">
        <Button
          href={`/projects/${project.slug}`}
          variant="secondary"
          className="h-10 px-4 text-sm"
        >
          View Case Study
        </Button>
        <span className="text-label text-text-muted">
          Source: {project.sourcePath}
        </span>
      </div>
    </article>
  );
}
