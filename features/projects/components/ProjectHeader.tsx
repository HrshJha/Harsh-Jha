import { StatusBadge } from "@/features/projects/components/StatusBadge";
import type { Project } from "@/types/project";

interface ProjectHeaderProps {
  readonly project: Project;
}

// TECH_SPEC.md §4 Project Detail Pages: "Render only project name,
// one-line description, and status." Nothing else is source-backed yet.
export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <header className="flex flex-col gap-4">
      <h1 className="text-page-title font-semibold text-text-primary md:text-page-title-desktop">
        {project.name}
      </h1>
      <p className="max-w-text text-body text-text-secondary">
        {project.shortDescription}
      </p>
      <StatusBadge status={project.status} />
    </header>
  );
}
