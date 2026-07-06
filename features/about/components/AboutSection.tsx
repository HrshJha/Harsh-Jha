import type { ReactNode } from "react";
import { about } from "@/content/about";
import { education } from "@/content/education";
import { Badge } from "@/components/ui/Badge";

interface AboutSectionProps {
  readonly heading?: string;
  readonly headingId?: string;
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
  children,
}: {
  readonly title: string;
  readonly children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 border-b border-border-subtle pb-8 last:border-b-0 last:pb-0">
      <h2 className="text-section-heading font-semibold text-text-primary md:text-section-heading-desktop">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function AboutSection({ heading, headingId }: AboutSectionProps) {
  return (
    <div className="flex flex-col gap-10">
      {heading ? (
        <h1
          id={headingId}
          className="text-page-title font-semibold text-text-primary md:text-page-title-desktop"
        >
          {heading}
        </h1>
      ) : null}

      <SectionBlock title="About Me">
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

      <SectionBlock title="Engineering Philosophy">
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

      <SectionBlock title="Education">
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

      <SectionBlock title="Currently Exploring">
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
