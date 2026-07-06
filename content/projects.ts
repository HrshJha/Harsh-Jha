import type { Project } from "@/types/project";
import { getProjectSummaries } from "@/lib/projectMarkdown";

// Source: docs/projects/*.md. These markdown case studies are the
// authoritative project source; this export keeps legacy project-order
// consumers on the same source-backed data.
export const projects: readonly Project[] = getProjectSummaries();
