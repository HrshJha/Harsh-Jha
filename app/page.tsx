import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectsSection } from "@/features/projects/components/ProjectsSection";
import { ExperienceSection } from "@/features/experience/components/ExperienceSection";

export default function Home() {
  return (
    <PageWrapper>
      <Section className="py-12 md:py-16">
        <HeroSection />
      </Section>
      <Section
        ariaLabelledBy="featured-projects-heading"
        className="py-12 md:py-16"
      >
        <ProjectsSection
          heading="Featured Projects"
          headingId="featured-projects-heading"
        />
      </Section>
      <Section
        ariaLabelledBy="experience-preview-heading"
        className="py-12 md:py-16"
      >
        <ExperienceSection
          heading="Experience"
          headingId="experience-preview-heading"
        />
      </Section>
    </PageWrapper>
  );
}
