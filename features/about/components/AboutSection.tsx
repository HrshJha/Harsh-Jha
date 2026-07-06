import type { ReactNode } from "react";
import Link from "next/link";
import { about } from "@/content/about";
import { education } from "@/content/education";
import { skillCategories } from "@/content/skills";

interface AboutSectionProps {
  readonly heading?: string;
  readonly headingId?: string;
}

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

function IntroBlock({ children }: { readonly children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 border-b border-border-subtle pb-8">
      {children}
    </div>
  );
}

function TextLink({
  href,
  children,
}: {
  readonly href: string;
  readonly children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-medium text-text-primary underline underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus"
    >
      {children}
    </Link>
  );
}

function CapabilityGroup({
  title,
  items,
  note,
}: {
  readonly title: string;
  readonly items: readonly string[];
  readonly note?: string;
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-card-title font-semibold text-text-primary">
        {title}
      </h3>
      <p className="max-w-text text-body leading-7 text-text-secondary">
        {items.join(", ")}
      </p>
      {note ? (
        <p className="max-w-text text-label text-text-muted">{note}</p>
      ) : null}
    </div>
  );
}

export function AboutSection({ heading, headingId }: AboutSectionProps) {
  const programming = skillCategories.find(
    (category) => category.category === "Programming",
  );
  const libraries = skillCategories.find(
    (category) => category.category === "Libraries",
  );
  const backend = skillCategories.find(
    (category) => category.category === "Backend",
  );
  const developerTools = skillCategories.find(
    (category) => category.category === "Developer Tools",
  );

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

      <IntroBlock>
        <p className="max-w-text text-body leading-7 text-text-secondary">
          I am an engineering student at {about.identity.institution}, working
          toward AI research and production AI engineering. My profile is
          centered on machine learning, AI systems, and the discipline required
          to turn technical ideas into maintainable products.
        </p>
        <p className="max-w-text text-body leading-7 text-text-secondary">
          The detailed evidence for that work lives in{" "}
          <TextLink href="/projects">Projects</TextLink>,{" "}
          <TextLink href="/experience">Experience</TextLink>, and{" "}
          <TextLink href="/resume">Resume</TextLink>. This page is the canonical
          profile for how I think, what I know, where I study, and the engineer
          I am working toward becoming.
        </p>
      </IntroBlock>

      <SectionBlock title="Current Focus">
        <p className="max-w-text text-body leading-7 text-text-secondary">
          My current focus areas are {about.focusAreas.join(", ")}. Across those
          areas, I am most interested in systems that combine research,
          engineering judgment, and product usefulness rather than isolated
          model demos.
        </p>
      </SectionBlock>

      <SectionBlock title="Engineering Philosophy">
        <p className="max-w-text text-body leading-7 text-text-secondary">
          These principles define how I evaluate technical work: the goal is to
          understand the problem, make the implementation defensible, and ship
          work that can be inspected beyond a surface-level demo.
        </p>
        <ul className="grid gap-2 text-body text-text-secondary md:grid-cols-2">
          {about.engineeringPhilosophy.map((statement) => (
            <li key={statement} className="before:mr-2 before:content-['-']">
              {statement}
            </li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock title="How I Learn">
        <p className="max-w-text text-body leading-7 text-text-secondary">
          My learning loop starts with research, moves into experimentation, and
          becomes useful through building. I try to understand concepts before
          memorizing patterns, then use implementation and iteration to expose
          gaps in the work.
        </p>
      </SectionBlock>

      <SectionBlock title="Technical Capabilities">
        <div className="grid gap-6 md:grid-cols-2">
          <CapabilityGroup
            title="Programming And Data"
            items={[
              ...(programming?.skills ?? []),
              ...(libraries?.skills ?? []),
            ]}
          />
          <CapabilityGroup
            title="Backend Engineering"
            items={backend?.skills ?? []}
            note="Related implementation context is documented on the Experience page where source-backed."
          />
          <CapabilityGroup
            title="AI Engineering Direction"
            items={about.focusAreas}
            note="Project-specific implementation details remain on the Projects page."
          />
          <CapabilityGroup
            title="Developer Workflow"
            items={developerTools?.skills ?? []}
          />
        </div>
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

      <SectionBlock title="Future Direction">
        <p className="max-w-text text-body leading-7 text-text-secondary">
          I am working toward becoming an {about.vision.primaryGoal} and{" "}
          {about.vision.secondaryGoal}. The direction is to keep building the
          judgment needed to connect AI research, production systems, and useful
          product execution.
        </p>
      </SectionBlock>
    </div>
  );
}
