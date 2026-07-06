export interface ExperienceRole {
  readonly company: string;
  readonly role: string;
  readonly employmentType: string;
  readonly highlights: readonly string[];
  readonly technologies: readonly string[];
  readonly about: readonly string[];
  readonly responsibilities: readonly string[];
  readonly keyProjects: readonly {
    readonly name: string;
    readonly href: string;
  }[];
  readonly engineeringHighlights: readonly string[];
  readonly learnings: readonly string[];
  readonly impact: string;
}
