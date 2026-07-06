import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { ProjectsSection } from "@/features/projects/components/ProjectsSection";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <Section ariaLabelledBy="projects-heading" className="py-12 md:py-16">
        <div className="flex flex-col gap-10">
          <h1
            id="projects-heading"
            className="text-page-title font-semibold text-text-primary md:text-page-title-desktop"
          >
            Projects
          </h1>
          <ProjectsSection />
        </div>
      </Section>
    </PageWrapper>
  );
}
