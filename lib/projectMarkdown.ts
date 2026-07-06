import { readFileSync } from "node:fs";
import { join } from "node:path";
import { PROJECT_STATUS_IN_PROGRESS } from "@/constants/status";
import type {
  Project,
  ProjectCaseStudy,
  ProjectMarkdownBlock,
  ProjectMarkdownSection,
  ProjectStatus,
} from "@/types/project";

const PROJECT_MARKDOWN_FILES = [
  "frameos.md",
  "candidate-intelligence-system.md",
  "appforge-ai.md",
  "hallucination-hunter.md",
] as const;

const PROJECTS_DIRECTORY = join(process.cwd(), "docs", "projects");

interface ParsedMarkdown {
  readonly title: string;
  readonly sections: readonly ProjectMarkdownSection[];
}

function slugFromFileName(fileName: string) {
  return fileName.replace(/\.md$/, "");
}

function stripMarkdownSyntax(value: string) {
  return value
    .replace(/^\s*[-*]\s+/, "")
    .replace(/^#+\s+/, "")
    .replace(/`/g, "")
    .trim();
}

function parseTable(lines: readonly string[], startIndex: number) {
  const rows: string[][] = [];
  let index = startIndex;

  while (index < lines.length && lines[index].trim().startsWith("|")) {
    const row = lines[index]
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => stripMarkdownSyntax(cell));
    rows.push(row);
    index += 1;
  }

  const [headers = [], separator = [], ...bodyRows] = rows;
  const hasSeparator = separator.every((cell) => /^-+$/.test(cell));

  return {
    block: {
      type: "table" as const,
      headers,
      rows: hasSeparator ? bodyRows : rows.slice(1),
    },
    nextIndex: index,
  };
}

function parseBlocks(lines: readonly string[]) {
  const blocks: ProjectMarkdownBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed || trimmed === "---") {
      index += 1;
      continue;
    }

    if (trimmed.startsWith("```")) {
      const language = trimmed.replace(/^```/, "").trim();
      const codeLines: string[] = [];
      index += 1;

      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }

      blocks.push({
        type: "code",
        language,
        code: codeLines.join("\n").trim(),
      });
      index += 1;
      continue;
    }

    if (/^#{3,4}\s+/.test(trimmed)) {
      blocks.push({
        type: "heading",
        depth: trimmed.startsWith("####") ? 4 : 3,
        text: stripMarkdownSyntax(trimmed),
      });
      index += 1;
      continue;
    }

    if (trimmed.startsWith("|")) {
      const { block, nextIndex } = parseTable(lines, index);
      blocks.push(block);
      index = nextIndex;
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      const items: string[] = [];

      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
        items.push(stripMarkdownSyntax(lines[index]));
        index += 1;
      }

      blocks.push({ type: "list", items });
      continue;
    }

    const paragraphLines: string[] = [];

    while (
      index < lines.length &&
      lines[index].trim() &&
      lines[index].trim() !== "---" &&
      !/^#{2,4}\s+/.test(lines[index].trim()) &&
      !lines[index].trim().startsWith("```") &&
      !lines[index].trim().startsWith("|") &&
      !/^[-*]\s+/.test(lines[index].trim())
    ) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }

    blocks.push({
      type: "paragraph",
      text: paragraphLines.join(" "),
    });
  }

  return blocks;
}

function parseMarkdown(markdown: string): ParsedMarkdown {
  const lines = markdown.split(/\r?\n/);
  const title = stripMarkdownSyntax(
    lines.find((line) => line.startsWith("# ")) ?? "",
  );
  const sections: ProjectMarkdownSection[] = [];
  let currentTitle: string | undefined;
  let currentLines: string[] = [];

  function commitSection() {
    if (!currentTitle) {
      return;
    }

    sections.push({
      title: currentTitle,
      blocks: parseBlocks(currentLines),
    });
  }

  for (const line of lines) {
    if (line.startsWith("## ")) {
      commitSection();
      currentTitle = stripMarkdownSyntax(line);
      currentLines = [];
      continue;
    }

    if (currentTitle) {
      currentLines.push(line);
    }
  }

  commitSection();

  return { title, sections };
}

function getSection(
  sections: readonly ProjectMarkdownSection[],
  title: string,
) {
  return sections.find((section) => section.title === title);
}

function getFirstParagraph(section: ProjectMarkdownSection | undefined) {
  return (
    section?.blocks.find((block) => block.type === "paragraph")?.text ?? ""
  );
}

function getAllParagraphs(section: ProjectMarkdownSection | undefined) {
  return (
    section?.blocks
      .filter((block) => block.type === "paragraph")
      .map((block) => block.text) ?? []
  );
}

function getListAfterHeading(
  section: ProjectMarkdownSection | undefined,
  heading: string,
) {
  if (!section) {
    return [];
  }

  const headingIndex = section.blocks.findIndex(
    (block) => block.type === "heading" && block.text === heading,
  );

  if (headingIndex === -1) {
    return [];
  }

  const list = section.blocks
    .slice(headingIndex + 1)
    .find((block) => block.type === "list");

  return list?.type === "list" ? list.items : [];
}

function getProductStackStatus(section: ProjectMarkdownSection | undefined) {
  const table = section?.blocks.find((block) => block.type === "table");

  if (!table || table.type !== "table") {
    return "Planned";
  }

  const statuses = new Set(table.rows.map((row) => row[1]).filter(Boolean));

  if (statuses.size === 1) {
    return Array.from(statuses)[0];
  }

  return "Documented in case study";
}

function getRepositoryStatus(section: ProjectMarkdownSection | undefined) {
  const line =
    getAllParagraphs(section).find((paragraph) =>
      paragraph.startsWith("GitHub link:"),
    ) ?? "GitHub link: Not yet implemented.";

  return line.replace(/^GitHub link:\s*/, "").replace(/\.$/, "");
}

function getCategoryAndFocus(elevatorPitch: string) {
  const match = elevatorPitch.match(
    /as an in-progress (.+?) focused on (.+?)\./,
  );

  return {
    category: match?.[1] ?? "AI product direction",
    primaryFocus: match?.[2] ?? "Planned",
  };
}

function getStatus(section: ProjectMarkdownSection | undefined): ProjectStatus {
  const statusLine = getAllParagraphs(section).find((paragraph) =>
    paragraph.startsWith("Current status:"),
  );
  const parsedStatus = statusLine
    ?.replace("Current status:", "")
    .replace(/\.$/, "")
    .trim();

  if (parsedStatus === PROJECT_STATUS_IN_PROGRESS) {
    return parsedStatus;
  }

  return PROJECT_STATUS_IN_PROGRESS;
}

function loadProjectCaseStudy(fileName: string): ProjectCaseStudy {
  const sourcePath = `docs/projects/${fileName}`;
  const markdown = readFileSync(join(PROJECTS_DIRECTORY, fileName), "utf8");
  const { title, sections } = parseMarkdown(markdown);
  const summary = getFirstParagraph(getSection(sections, "One-line Summary"));
  const elevatorPitch = getFirstParagraph(getSection(sections, "Elevator Pitch"));
  const systemOverview = getSection(sections, "System Overview");
  const technicalStack = getSection(sections, "Technical Stack");
  const repository = getSection(sections, "Repository");
  const { category, primaryFocus } = getCategoryAndFocus(elevatorPitch);

  return {
    name: title,
    slug: slugFromFileName(fileName),
    shortDescription: summary,
    status: getStatus(systemOverview),
    sourcePath,
    category,
    primaryFocus,
    overview: elevatorPitch,
    portfolioTechnologies: getListAfterHeading(
      technicalStack,
      "Repository-backed Portfolio Stack",
    ),
    productStackStatus: getProductStackStatus(technicalStack),
    repositoryStatus: getRepositoryStatus(repository),
    sections,
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
