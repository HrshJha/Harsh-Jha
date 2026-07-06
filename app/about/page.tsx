import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { AboutSection } from "@/features/about/components/AboutSection";
import { SkillsSection } from "@/features/skills/components/SkillsSection";
import { EducationSection } from "@/features/education/components/EducationSection";

export const metadata: Metadata = buildMetadata({
  title: "About",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageWrapper>
      <Section ariaLabelledBy="about-heading" className="py-12 md:py-16">
        <div className="flex flex-col gap-8">
          <h1
            id="about-heading"
            className="text-page-title font-semibold text-text-primary md:text-page-title-desktop"
          >
            About
          </h1>
          <AboutSection />
        </div>
      </Section>
      {/* Skills appear on the About page per CONTENT_SPEC.md §8 (line 822). */}
      <Section
        ariaLabelledBy="about-skills-heading"
        className="py-12 md:py-16"
      >
        <SkillsSection heading="Skills" headingId="about-skills-heading" />
      </Section>
      {/* Education appears on the About page per CONTENT_SPEC.md §9 (line 823). */}
      <Section
        ariaLabelledBy="about-education-heading"
        className="py-12 md:py-16"
      >
        <EducationSection
          heading="Education"
          headingId="about-education-heading"
        />
      </Section>
    </PageWrapper>
  );
}
