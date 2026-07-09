/**
 * Home page — / (root)
 *
 * Content sections, in Recruiter Journey order (FOUNDATION.md Part 2, line 166):
 *   Hero → Featured Projects → Experience → About → Skills → Education → Resume → Contact
 *
 * Parts completed:
 *   Part 2: Hero (Signal Core + headline + CTAs + socials)
 *   Part 3: Featured Projects (id="projects" — Hero "View Projects" CTA target)
 *   Part 4: Experience (id="experience")
 *   Part 5: About (id="about") · Skills (id="skills") · Education (id="education")
 *   Part 6: Contact (id="contact") · Nav · ThemeToggle · /resume route
 *
 * Nav and <main>/<footer> landmarks are in layout.tsx (root layout, all pages).
 */

import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Experience } from "@/components/Experience";
import { AboutSkillsEducation } from "@/components/AboutSkillsEducation";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative z-10 isolate overflow-visible">
      {/* Hero — Signal Core leads, headline/CTAs/socials follow. Part 2. */}
      <Hero />

      {/*
        Featured Projects — id="projects" anchors the Hero "View Projects" CTA.
        Data: content/projects.ts. Part 3.
      */}
      <section id="projects" aria-label="Featured Projects">
        <FeaturedProjects />
      </section>

      {/*
        Experience — id="experience", future nav anchor.
        Data: content/experience.ts, verbatim from FOUNDATION.md Part 3. Part 4.
      */}
      <section id="experience" aria-label="Experience">
        <Experience />
      </section>

      {/*
        About, Skills, Education — ids set on SectionShell inside component.
        Data: content/about.ts, verbatim from FOUNDATION.md Parts 1 & 3. Part 5.
      */}
      <AboutSkillsEducation />

      {/*
        Contact — id="contact" is set inside the component directly.
        mailto + social icons only. No form. Part 6.
        Target of Nav "Contact" link and /resume page back-CTA.
      */}
      <Contact />
    </div>
  );
}
