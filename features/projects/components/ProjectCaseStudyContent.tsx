import type { ReactNode } from "react";
import type {
  ProjectCaseStudy,
  ProjectMarkdownBlock,
  ProjectMarkdownSection,
} from "@/types/project";

const HERO_RENDERED_SECTIONS = new Set(["One-line Summary"]);

function InlineMarkdown({ text }: { readonly text: string }) {
  const parts = text.split(/(`[^`]+`)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={`${part}-${index}`}
              className="rounded-sm bg-surface-raised px-1 py-0.5 text-[0.875em] text-text-primary"
            >
              {part.slice(1, -1)}
            </code>
          );
        }

        return <span key={`${part}-${index}`}>{part}</span>;
      })}
    </>
  );
}

function SectionHeading({
  depth,
  children,
}: {
  readonly depth: 3 | 4;
  readonly children: ReactNode;
}) {
  if (depth === 4) {
    return (
      <h4 className="pt-2 text-body font-semibold text-text-primary">
        {children}
      </h4>
    );
  }

  return (
    <h3 className="pt-3 text-card-title font-semibold text-text-primary">
      {children}
    </h3>
  );
}

function MarkdownBlockView({
  block,
}: {
  readonly block: ProjectMarkdownBlock;
}) {
  if (block.type === "paragraph") {
    return (
      <p className="max-w-text text-body leading-7 text-text-secondary">
        <InlineMarkdown text={block.text} />
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="flex max-w-text list-disc flex-col gap-2 pl-5 text-body leading-7 text-text-secondary">
        {block.items.map((item) => (
          <li key={item}>
            <InlineMarkdown text={item} />
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "table") {
    return (
      <div className="overflow-x-auto">
        <table className="w-full min-w-[32rem] border-collapse text-left text-body">
          <thead>
            <tr className="border-b border-border-subtle">
              {block.headers.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="py-3 pr-4 font-semibold text-text-primary"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr
                key={row.join("-") || rowIndex}
                className="border-b border-border-subtle"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${cell}-${cellIndex}`}
                    className="py-3 pr-4 text-text-secondary"
                  >
                    <InlineMarkdown text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.type === "code") {
    return (
      <pre className="overflow-x-auto rounded-lg border border-border-subtle bg-surface-raised p-4 text-sm leading-6 text-text-primary">
        <code>{block.code}</code>
      </pre>
    );
  }

  return (
    <SectionHeading depth={block.depth}>
      <InlineMarkdown text={block.text} />
    </SectionHeading>
  );
}

function ProjectSectionView({
  section,
}: {
  readonly section: ProjectMarkdownSection;
}) {
  if (HERO_RENDERED_SECTIONS.has(section.title)) {
    return null;
  }

  return (
    <section
      aria-labelledby={`project-section-${section.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")}`}
      className="flex flex-col gap-5 border-b border-border-subtle pb-10 last:border-b-0 last:pb-0"
    >
      <h2
        id={`project-section-${section.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")}`}
        className="text-section-heading font-semibold text-text-primary md:text-section-heading-desktop"
      >
        {section.title}
      </h2>
      <div className="flex flex-col gap-4">
        {section.blocks.map((block, index) => (
          <MarkdownBlockView
            key={`${section.title}-${block.type}-${index}`}
            block={block}
          />
        ))}
      </div>
    </section>
  );
}

export function ProjectCaseStudyContent({
  project,
}: {
  readonly project: ProjectCaseStudy;
}) {
  return (
    <div className="flex flex-col gap-10">
      {project.sections.map((section) => (
        <ProjectSectionView key={section.title} section={section} />
      ))}
    </div>
  );
}
