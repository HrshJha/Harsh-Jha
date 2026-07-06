import Link from "next/link";
import { projects } from "@/content/projects";

interface NavigationBetweenProjectsProps {
  readonly currentSlug: string;
}

const LINK_STYLES =
  "flex flex-col gap-1 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus";

// COMPONENT_SPEC.md §5: "Prev/next links if detail pages exist... Only
// appears when detail routes are implemented." Order follows the static
// project list (content/projects.ts) — no wrap-around, since neither
// source document specifies circular navigation.
export function NavigationBetweenProjects({
  currentSlug,
}: NavigationBetweenProjectsProps) {
  const index = projects.findIndex((project) => project.slug === currentSlug);
  const previous = index > 0 ? projects[index - 1] : undefined;
  const next = index < projects.length - 1 ? projects[index + 1] : undefined;

  if (!previous && !next) {
    return null;
  }

  return (
    <nav
      aria-label="Project navigation"
      className="flex flex-wrap justify-between gap-4"
    >
      {previous ? (
        <Link href={`/projects/${previous.slug}`} className={LINK_STYLES}>
          <span className="text-label text-text-muted">Previous</span>
          <span className="text-body text-text-primary">
            {previous.name}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className={`${LINK_STYLES} items-end text-right`}
        >
          <span className="text-label text-text-muted">Next</span>
          <span className="text-body text-text-primary">{next.name}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
