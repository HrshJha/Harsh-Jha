import { ProjectCard } from "@/features/projects/components/ProjectCard";
import type { Project } from "@/types/project";

interface ProjectGridProps {
  readonly projects: readonly Project[];
}

// Mobile single column, tablet/desktop comparison layout
// (COMPONENT_SPEC.md §5 ProjectGrid; DESIGN_SYSTEM.md §13).
export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
