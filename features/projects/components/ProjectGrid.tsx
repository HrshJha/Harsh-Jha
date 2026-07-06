import { ProjectCard } from "@/features/projects/components/ProjectCard";
import type { ProjectCaseStudy } from "@/types/project";

interface ProjectGridProps {
  readonly projects: readonly ProjectCaseStudy[];
}

// Markdown-backed project previews are intentionally denser than the original
// summary cards, so the grid stays single-column until wide desktop.
export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
