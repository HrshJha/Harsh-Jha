"use client";

import { useId, useState, type ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TechnologyList } from "@/components/experience/TechnologyList";
import type { ExperienceRole } from "@/types/experience";

interface TimelineItemProps {
  readonly entry: ExperienceRole;
}

function BulletList({ items }: { readonly items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-2 text-body text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="before:mr-2 before:content-['-']">
          {item}
        </li>
      ))}
    </ul>
  );
}

function DetailSection({
  title,
  children,
}: {
  readonly title: string;
  readonly children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h4 className="text-body font-semibold text-foreground">{title}</h4>
      {children}
    </section>
  );
}

export function TimelineItem({ entry }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = useId();

  return (
    <Card
      as="article"
      variant="default"
      className="flex flex-col gap-5"
      aria-label={entry.company}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-card-title font-semibold text-foreground">
            {entry.company}
          </h3>
          <p className="text-body font-medium text-muted-foreground">
            {entry.role}
          </p>
        </div>

        <dl className="grid gap-3 md:grid-cols-2">
          <div>
            <dt className="text-label font-medium uppercase tracking-normal text-muted-foreground">
              Employment Type
            </dt>
            <dd className="mt-1 text-body text-muted-foreground">
              {entry.employmentType}
            </dd>
          </div>
          <div>
            <dt className="text-label font-medium uppercase tracking-normal text-muted-foreground">
              Technology Stack
            </dt>
            <dd className="mt-2">
              <TechnologyList
                highlights={entry.technologies}
                ariaLabel={`${entry.company} technologies`}
              />
            </dd>
          </div>
        </dl>

        <Button
          aria-expanded={isExpanded}
          aria-controls={contentId}
          onClick={() => setIsExpanded((current) => !current)}
          variant="secondary"
          size="sm"
          className="w-fit"
        >
          {isExpanded ? "Hide Details" : "Expand Experience"}
        </Button>
      </div>

      {isExpanded ? (
        <div
          id={contentId}
          className="flex flex-col gap-6 border-t border-border pt-5"
        >
          <DetailSection title="About The Role">
            {entry.about.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-text text-body leading-(--leading-body) text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </DetailSection>

          <DetailSection title="Key Responsibilities">
            <BulletList items={entry.responsibilities} />
          </DetailSection>

          <DetailSection title="Technologies Used">
            <TechnologyList
              highlights={entry.technologies}
              ariaLabel={`${entry.company} technologies used`}
            />
          </DetailSection>

          {entry.keyProjects.length > 0 ? (
            <DetailSection title="Key Projects">
              <ul className="flex flex-wrap gap-2">
                {entry.keyProjects.map((project) => (
                  <li key={project.href}>
                    <Link
                      href={project.href}
                      className="text-body font-medium text-foreground underline underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      {project.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </DetailSection>
          ) : null}

          <DetailSection title="Engineering Highlights">
            <BulletList items={entry.engineeringHighlights} />
          </DetailSection>

          <DetailSection title="What I Learned">
            <BulletList items={entry.learnings} />
          </DetailSection>

          <DetailSection title="Impact">
            <p className="max-w-text text-body leading-(--leading-body) text-muted-foreground">
              {entry.impact}
            </p>
          </DetailSection>
        </div>
      ) : null}
    </Card>
  );
}
