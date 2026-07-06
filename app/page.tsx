import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectsSection } from "@/features/projects/components/ProjectsSection";
import { ExperienceSection } from "@/features/experience/components/ExperienceSection";
import { AboutSection } from "@/features/about/components/AboutSection";
import { SkillsSection } from "@/features/skills/components/SkillsSection";
import { EducationSection } from "@/features/education/components/EducationSection";

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
      <Section
        ariaLabelledBy="about-preview-heading"
        className="py-12 md:py-16"
      >
        <AboutSection
          heading="About"
          headingId="about-preview-heading"
        />
      </Section>
      <Section
        ariaLabelledBy="skills-preview-heading"
        className="py-12 md:py-16"
      >
        <SkillsSection
          heading="Skills"
          headingId="skills-preview-heading"
        />
      </Section>
      <Section
        ariaLabelledBy="education-preview-heading"
        className="py-12 md:py-16"
      >
        <EducationSection
          heading="Education"
          headingId="education-preview-heading"
        />
      </Section>
    </PageWrapper>
  );
}
