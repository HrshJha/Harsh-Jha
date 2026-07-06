export type ProjectStatus = "Completed";

export interface Project {
  readonly name: string;
  readonly slug: string;
  readonly shortDescription: string;
  readonly status: ProjectStatus;
}

export interface ProjectCaseStudy extends Project {
  readonly category: string;
  readonly githubUrl: string;
  readonly primaryFocus: string;
  readonly techStack: readonly string[];
  readonly problem: readonly string[];
  readonly solution: readonly string[];
  readonly architecture: readonly string[];
  readonly keyFeatures: readonly string[];
  readonly technicalHighlights: readonly string[];
  readonly challenges: readonly string[];
  readonly learnings: readonly string[];
}
