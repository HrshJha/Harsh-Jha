import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <Section ariaLabelledBy="projects-heading">
        <h1 id="projects-heading" className="text-2xl font-semibold">
          Projects
        </h1>
      </Section>
    </PageWrapper>
  );
}
