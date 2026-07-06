import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectsSection } from "@/features/projects/components/ProjectsSection";
import { ExperienceSection } from "@/features/experience/components/ExperienceSection";
import { AboutSection } from "@/features/about/components/AboutSection";
import { SkillsSection } from "@/features/skills/components/SkillsSection";
import { EducationSection } from "@/features/education/components/EducationSection";
import { ResumeSection } from "@/features/resume/components/ResumeSection";
import { ContactSection } from "@/features/contact/components/ContactSection";

export default function Home() {
  return (
    <PageWrapper>
      <Section ariaLabelledBy="hero-heading" containerSize="wide">
        <HeroSection />
      </Section>
      <Section
        id="featured-projects"
        ariaLabelledBy="featured-projects-heading"
        className="border-t border-border py-16 md:py-24"
        containerSize="wide"
      >
        <ProjectsSection
          heading="Featured Projects"
          headingId="featured-projects-heading"
        />
      </Section>
      <Section
        ariaLabelledBy="experience-heading"
        className="border-t border-border py-16 md:py-24"
      >
        <ExperienceSection heading="Experience" headingId="experience-heading" />
      </Section>
      <Section
        ariaLabelledBy="about-heading"
        className="border-t border-border py-16 md:py-24"
      >
        <AboutSection
          heading="About"
          headingId="about-heading"
          headingLevel={2}
        />
      </Section>
      <Section
        ariaLabelledBy="skills-heading"
        className="border-t border-border py-16 md:py-24"
      >
        <SkillsSection heading="Skills" headingId="skills-heading" />
      </Section>
      <Section
        ariaLabelledBy="education-heading"
        className="border-t border-border py-16 md:py-24"
      >
        <EducationSection heading="Education" headingId="education-heading" />
      </Section>
      <Section
        ariaLabelledBy="resume-heading"
        className="border-t border-border py-16 md:py-24"
      >
        <ResumeSection heading="Resume" headingId="resume-heading" />
      </Section>
      <Section
        ariaLabelledBy="contact-heading"
        className="border-t border-border py-16 md:py-24"
      >
        <ContactSection heading="Contact" headingId="contact-heading" />
      </Section>
    </PageWrapper>
  );
}
