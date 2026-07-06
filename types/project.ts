export type ProjectStatus = "In Progress";

export interface Project {
  readonly name: string;
  readonly slug: string;
  readonly shortDescription: string;
  readonly status: ProjectStatus;
}
