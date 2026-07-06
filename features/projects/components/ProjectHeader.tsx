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
        <p className="max-w-text text-body text-text-secondary">
          {project.overview}
        </p>
      </div>
      <dl className="grid gap-4 md:grid-cols-3">
        <div>
          <dt className="text-label font-medium uppercase tracking-normal text-text-muted">
            Primary focus
          </dt>
          <dd className="mt-1 text-body text-text-secondary">
            {project.primaryFocus}
          </dd>
        </div>
        <div>
          <dt className="text-label font-medium uppercase tracking-normal text-text-muted">
            Product stack
          </dt>
          <dd className="mt-1 text-body text-text-secondary">
            {project.productStackStatus}
          </dd>
        </div>
        <div>
          <dt className="text-label font-medium uppercase tracking-normal text-text-muted">
            Repository
          </dt>
          <dd className="mt-1 text-body text-text-secondary">
            {project.repositoryStatus}
          </dd>
        </div>
      </dl>
    </header>
  );
}
