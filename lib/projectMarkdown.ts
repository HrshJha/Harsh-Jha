import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Project, ProjectCaseStudy, ProjectStatus } from "@/types/project";

const PROJECT_MARKDOWN_FILES = [
  "frameos.md",
  "candidate-intelligence-system.md",
  "appforge-ai.md",
  "hallucination-hunter.md",
] as const;

const PROJECTS_DIRECTORY = join(process.cwd(), "docs", "projects");

function slugFromFileName(fileName: string) {
  return fileName.replace(/\.md$/, "");
}

function stripMarkdown(value: string) {
  return value
    .replace(/^#+\s+/, "")
    .replace(/^\s*-\s+/, "")
    .trim();
}

function getTitle(markdown: string) {
  return stripMarkdown(
    markdown.split(/\r?\n/).find((line) => line.startsWith("# ")) ?? "",
  );
}

function getSection(markdown: string, title: string) {
  const pattern = new RegExp(`## ${title}\\n\\n([\\s\\S]*?)(?=\\n## |$)`);
  const match = markdown.match(pattern);

  return match?.[1].trim() ?? "";
}

function getParagraphs(section: string) {
  return section
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\n/g, " ").trim())
    .filter(Boolean);
}

function getBulletItems(section: string) {
  return section
    .split(/\r?\n/)
    .filter((line) => line.trim().startsWith("- "))
    .map(stripMarkdown);
}

function getMetadataValue(section: string, key: string) {
  const item = getBulletItems(section).find((line) =>
    line.startsWith(`${key}:`),
  );

  return item?.replace(`${key}:`, "").trim() ?? "";
}

function getRequiredMetadataValue(section: string, key: string) {
  const value = getMetadataValue(section, key);

  if (!value) {
    throw new Error(`Missing project metadata field: ${key}`);
  }

  return value;
}

function getStatus(value: string): ProjectStatus {
  if (value === "Completed") {
    return value;
  }

  throw new Error(`Unsupported project status: ${value}`);
}

function getTechStack(metadata: string) {
  return getRequiredMetadataValue(metadata, "Tech Stack")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function loadProjectCaseStudy(fileName: string): ProjectCaseStudy {
  const markdown = readFileSync(join(PROJECTS_DIRECTORY, fileName), "utf8");
  const metadata = getSection(markdown, "Project Metadata");

  return {
    name: getTitle(markdown),
    slug: slugFromFileName(fileName),
    shortDescription: getParagraphs(
      getSection(markdown, "One-line Summary"),
    )[0],
    category: getRequiredMetadataValue(metadata, "Category"),
    status: getStatus(getRequiredMetadataValue(metadata, "Status")),
    githubUrl: getRequiredMetadataValue(metadata, "GitHub"),
    primaryFocus: getRequiredMetadataValue(
      metadata,
      "Primary Engineering Focus",
    ),
    techStack: getTechStack(metadata),
    problem: getParagraphs(getSection(markdown, "The Problem")),
    solution: getParagraphs(getSection(markdown, "The Solution")),
    architecture: getBulletItems(getSection(markdown, "Architecture")),
    keyFeatures: getBulletItems(getSection(markdown, "Key Features")),
    technicalHighlights: getBulletItems(
      getSection(markdown, "Technical Highlights"),
    ),
    challenges: getBulletItems(getSection(markdown, "Challenges")),
    learnings: getBulletItems(getSection(markdown, "What I Learned")),
  };
}

export function getProjectCaseStudies(): readonly ProjectCaseStudy[] {
  return PROJECT_MARKDOWN_FILES.map((fileName) =>
    loadProjectCaseStudy(fileName),
  );
}

export function getProjectCaseStudy(slug: string) {
  return getProjectCaseStudies().find((project) => project.slug === slug);
}

export function getProjectSummaries(): readonly Project[] {
  return getProjectCaseStudies().map(
    ({ name, slug, shortDescription, status }) => ({
      name,
      slug,
      shortDescription,
      status,
    }),
  );
}
