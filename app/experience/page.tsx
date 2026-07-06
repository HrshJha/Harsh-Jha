import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { ExperienceSection } from "@/features/experience/components/ExperienceSection";

export const metadata: Metadata = buildMetadata({
  title: "Experience",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <Section ariaLabelledBy="experience-heading" className="py-12 md:py-16">
        <div className="flex flex-col gap-8">
          <h1
            id="experience-heading"
            className="text-page-title font-semibold text-foreground "
          >
            Experience
          </h1>
          <ExperienceSection />
        </div>
      </Section>
    </PageWrapper>
  );
}
