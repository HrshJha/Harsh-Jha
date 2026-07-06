import Link from "next/link";
import { ProjectTags } from "@/features/projects/components/ProjectTags";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  readonly project: Project;
}

// DESIGN_SYSTEM.md §8: project cards use `radius.lg`, `space.5` padding
// (highest card priority), and a border rather than a shadow. Only the
// title links to the detail route (COMPONENT_SPEC.md §5 ProjectCard).
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-lg border border-border-subtle p-6">
      <h3 className="text-card-title font-semibold text-text-primary">
        <Link
          href={`/projects/${project.slug}`}
          className="hover:text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus"
        >
          {project.name}
        </Link>
      </h3>
      <p className="text-body text-text-secondary">
        {project.shortDescription}
      </p>
      <ProjectTags tags={[project.status]} />
    </article>
  );
}
