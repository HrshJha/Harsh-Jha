import type { ReactNode } from "react";
import { about } from "@/content/about";
import { education } from "@/content/education";
import { Badge } from "@/components/ui/Badge";

interface AboutSectionProps {
  readonly heading?: string;
  readonly headingId?: string;
  readonly headingLevel?: 1 | 2;
}

const CURRENTLY_EXPLORING = [
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Large Language Models",
  "AI Agents",
  "Generative AI",
  "Production AI Systems",
  "System Design",
] as const;

function SectionBlock({
  title,
  headingLevel,
  children,
}: {
  readonly title: string;
  readonly headingLevel: 2 | 3;
  readonly children: ReactNode;
}) {
  const HeadingTag = headingLevel === 2 ? "h2" : "h3";

  return (
    <section className="flex flex-col gap-4 border-b border-border-subtle pb-8 last:border-b-0 last:pb-0">
      <HeadingTag className="text-section-heading font-semibold text-text-primary md:text-section-heading-desktop">
        {title}
      </HeadingTag>
      {children}
    </section>
  );
}

export function AboutSection({
  heading,
  headingId,
  headingLevel = 1,
}: AboutSectionProps) {
  const HeadingTag = headingLevel === 1 ? "h1" : "h2";
  const sectionBlockHeadingLevel = headingLevel === 1 ? 2 : 3;

  return (
    <div className="flex flex-col gap-10">
      {heading ? (
        <HeadingTag
          id={headingId}
          className={
            headingLevel === 1
              ? "text-page-title font-semibold text-text-primary md:text-page-title-desktop"
              : "text-section-heading font-semibold text-text-primary md:text-section-heading-desktop"
          }
        >
          {heading}
        </HeadingTag>
      ) : null}

      <SectionBlock title="About Me" headingLevel={sectionBlockHeadingLevel}>
        <p className="max-w-text text-body leading-7 text-text-secondary">
          I&apos;m Harsh Kumar Jha, an Electronics &amp; Communication
          Engineering student at Maharaja Surajmal Institute of Technology with
          a strong interest in AI systems, machine learning, and production
          engineering.
        </p>
        <p className="max-w-text text-body leading-7 text-text-secondary">
          I enjoy turning research ideas into real software by combining
          engineering fundamentals, scalable system design, and practical
          implementation. My goal is to build AI products that are reliable,
          maintainable, and useful beyond demonstrations.
        </p>
      </SectionBlock>

      <SectionBlock
        title="Engineering Philosophy"
        headingLevel={sectionBlockHeadingLevel}
      >
        <p className="max-w-text text-body leading-7 text-text-secondary">
          The principles that guide how I approach engineering and problem
          solving.
        </p>
        <ul className="grid gap-2 text-body text-text-secondary md:grid-cols-2">
          {about.engineeringPhilosophy.map((statement) => (
            <li key={statement} className="before:mr-2 before:content-['-']">
              {statement}
            </li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock title="Education" headingLevel={sectionBlockHeadingLevel}>
        <dl className="grid gap-4 md:grid-cols-2">
          <div>
            <dt className="text-label font-medium uppercase tracking-normal text-text-muted">
              Institution
            </dt>
            <dd className="mt-1 text-body text-text-secondary">
              {education.institution}
            </dd>
          </div>
          <div>
            <dt className="text-label font-medium uppercase tracking-normal text-text-muted">
              Degree
            </dt>
            <dd className="mt-1 text-body text-text-secondary">
              {education.degree}
            </dd>
          </div>
          <div>
            <dt className="text-label font-medium uppercase tracking-normal text-text-muted">
              Expected Graduation
            </dt>
            <dd className="mt-1 text-body text-text-secondary">
              {education.graduationYear}
            </dd>
          </div>
          <div>
            <dt className="text-label font-medium uppercase tracking-normal text-text-muted">
              Current CGPA
            </dt>
            <dd className="mt-1 text-body text-text-secondary">
              {education.currentCgpa}
            </dd>
          </div>
        </dl>
      </SectionBlock>

      <SectionBlock
        title="Currently Exploring"
        headingLevel={sectionBlockHeadingLevel}
      >
        <ul className="flex flex-wrap gap-2" aria-label="Currently exploring">
          {CURRENTLY_EXPLORING.map((item) => (
            <li key={item}>
              <Badge>{item}</Badge>
            </li>
          ))}
        </ul>
      </SectionBlock>
    </div>
  );
}
