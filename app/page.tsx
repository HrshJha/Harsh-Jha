import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectsSection } from "@/features/projects/components/ProjectsSection";
import { ExperienceSection } from "@/features/experience/components/ExperienceSection";
import { AboutSection } from "@/features/about/components/AboutSection";
import { SkillsSection } from "@/features/skills/components/SkillsSection";
import { EducationSection } from "@/features/education/components/EducationSection";
import { ContactSection } from "@/features/contact/components/ContactSection";
import { resume } from "@/content/resume";

export default function Home() {
  return (
    <PageWrapper className="py-12 md:py-16">
      <Section ariaLabelledBy="hero-heading" className="pb-12 md:pb-16">
        <HeroSection />
      </Section>
      <Section
        id="featured-projects"
        ariaLabelledBy="featured-projects-heading"
        className="py-12 md:py-16"
      >
        <ProjectsSection
          heading="Featured Projects"
          headingId="featured-projects-heading"
        />
      </Section>
      <Section
        id="experience"
        ariaLabelledBy="home-experience-heading"
        className="py-12 md:py-16"
      >
        <ExperienceSection
          heading="Experience"
          headingId="home-experience-heading"
        />
      </Section>
      <Section
        id="about"
        ariaLabelledBy="home-about-heading"
        className="py-12 md:py-16"
      >
        <AboutSection
          heading="About"
          headingId="home-about-heading"
          headingLevel={2}
        />
      </Section>
      <Section
        id="skills"
        ariaLabelledBy="home-skills-heading"
        className="py-12 md:py-16"
      >
        <SkillsSection heading="Skills" headingId="home-skills-heading" />
      </Section>
      <Section
        id="education"
        ariaLabelledBy="home-education-heading"
        className="py-12 md:py-16"
      >
        <EducationSection
          heading="Education"
          headingId="home-education-heading"
        />
      </Section>
      <Section
        id="resume"
        ariaLabelledBy="home-resume-heading"
        className="py-12 md:py-16"
      >
        <div className="flex flex-col gap-6">
          <h2
            id="home-resume-heading"
            className="text-section-heading font-semibold text-text-primary md:text-section-heading-desktop"
          >
            Resume
          </h2>
          <div>
            <Button href={resume.route} variant="secondary">
              {resume.label}
            </Button>
          </div>
        </div>
      </Section>
      <Section
        id="contact"
        ariaLabelledBy="home-contact-heading"
        className="pt-12 md:pt-16"
      >
        <ContactSection heading="Contact" headingId="home-contact-heading" />
      </Section>
    </PageWrapper>
  );
}
