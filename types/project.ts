export type ProjectStatus = "In Progress";

export type ProjectMarkdownBlock =
  | {
      readonly type: "paragraph";
      readonly text: string;
    }
  | {
      readonly type: "list";
      readonly items: readonly string[];
    }
  | {
      readonly type: "table";
      readonly headers: readonly string[];
      readonly rows: readonly (readonly string[])[];
    }
  | {
      readonly type: "code";
      readonly language: string;
      readonly code: string;
    }
  | {
      readonly type: "heading";
      readonly depth: 3 | 4;
      readonly text: string;
    };

export interface ProjectMarkdownSection {
  readonly title: string;
  readonly blocks: readonly ProjectMarkdownBlock[];
}

export interface Project {
  readonly name: string;
  readonly slug: string;
  readonly shortDescription: string;
  readonly status: ProjectStatus;
}

export interface ProjectCaseStudy extends Project {
  readonly sourcePath: string;
  readonly category: string;
  readonly primaryFocus: string;
  readonly overview: string;
  readonly portfolioTechnologies: readonly string[];
  readonly productStackStatus: string;
  readonly repositoryStatus: string;
  readonly sections: readonly ProjectMarkdownSection[];
}
