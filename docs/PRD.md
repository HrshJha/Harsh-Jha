# Product Requirements Document

## 1. Document Information

| Field | Value |
| --- | --- |
| Project Name | Harsh Kumar Jha Portfolio Website |
| Version | 1.0 |
| Status | Draft |
| Owner | Harsh Kumar Jha |
| Last Updated | 2026-07-06 |

Source of truth: [FOUNDATION.md](../FOUNDATION.md)

If this PRD conflicts with `FOUNDATION.md`, `FOUNDATION.md` takes precedence.

## 2. Executive Summary

The project is a static portfolio website for Harsh Kumar Jha, an ECE undergraduate at Maharaja Surajmal Institute of Technology graduating in 2029 with a current CGPA of 8.59.

The website exists to increase AI/ML internship and research interview opportunities by presenting credible evidence of engineering capability through projects, engineering decisions, experience, and concise professional context.

The website serves recruiters, hiring managers, and research engineers as its primary audience. Secondary audiences include startup founders and technical collaborators.

The expected outcome is a minimal, premium, technical, professional, calm, and intentional portfolio that communicates Harsh's ability to engineer production-grade AI systems without exaggeration, fabricated metrics, or generic self-promotion.

## 3. Vision

Harsh Kumar Jha's long-term vision is to become an AI Research Engineer, with a secondary path as a Production AI Engineer.

The portfolio should support that vision by presenting work in machine learning, deep learning, NLP/LLMs, AI agents, and generative AI through evidence-based project narratives and professional context.

## 4. Mission

Demonstrate the ability to engineer production-grade AI systems.

Every feature, section, and interaction must increase at least one of:

- Credibility
- Clarity
- Trust
- Technical depth

If a proposed feature does not increase one of these outcomes, it should not be included.

## 5. Problem Statement

Many portfolio websites fail to help technical evaluators make fast, evidence-based decisions because they over-prioritize visual novelty, vague personal claims, inflated language, generic skill lists, fake metrics, visitor counters, testimonials, or decorative effects.

For this project, the portfolio must avoid those patterns. It exists to make Harsh's engineering capability easier to evaluate through projects, experience, technical focus areas, education, resume access, and contact paths.

The site must be minimal and technically credible. It should not rely on unsupported claims, fabricated achievements, certifications, blog content, or vanity indicators.

## 6. Objectives

### Business Objectives

| ID | Objective | Source |
| --- | --- | --- |
| BO-01 | Increase AI/ML internship and research interview opportunities. | FOUNDATION.md Primary Goal |
| BO-02 | Build credibility with recruiters, hiring managers, and research engineers. | FOUNDATION.md Secondary Goals and Audience |
| BO-03 | Enable technical collaboration. | FOUNDATION.md Secondary Goals |

### User Objectives

| ID | Audience | Objective |
| --- | --- | --- |
| UO-01 | Recruiter | Quickly understand Harsh's profile, project proof, experience, education, resume, and contact details. |
| UO-02 | Hiring Manager | Evaluate technical direction, project relevance, and evidence of engineering execution. |
| UO-03 | Research Engineer | Assess fit with AI safety, LLM evaluation, NLP systems, retrieval systems, and broader AI research engineering interests. |
| UO-04 | Founder | Determine whether Harsh can contribute to real-world AI product and system development. |
| UO-05 | Collaborator | Identify shared technical interests and contact channels. |

### Engineering Objectives

| ID | Objective |
| --- | --- |
| EO-01 | Implement as a static website with no backend, database, authentication, or CMS. |
| EO-02 | Keep content maintainable and traceable to `FOUNDATION.md` or explicitly maintained source content. |
| EO-03 | Prioritize performance, accessibility, SEO, responsiveness, code quality, and developer experience. |
| EO-04 | Avoid features that create unnecessary operational or maintenance burden. |

## 7. Scope

### In Scope

- Static portfolio website.
- Navigation items: Home, Projects, Experience, About, Resume, Contact.
- Hero section with professional headline, hero statement, primary CTA, secondary CTA, and social links.
- Featured projects:
  - FrameOS
  - Candidate Intelligence System
  - AppForge AI
  - Hallucination Hunter
- Experience section:
  - DomAIyn Labs LLP, AI/ML Intern (AI Safety & Evaluation Research)
  - MathonGo, Research & Development Intern
- Education content:
  - MSIT
  - B.Tech Electronics & Communication Engineering
  - CGPA: 8.59
- Skills content:
  - Programming: Python, Java, SQL
  - Libraries: NumPy, Pandas, Matplotlib
  - Backend: FastAPI, Docker
  - Developer Tools: Git, GitHub, Linux, VS Code, Jupyter, Google Colab, IntelliJ IDEA
- Contact links:
  - Email
  - GitHub
  - LinkedIn
  - X
- Minimal, premium, technical, professional, calm, intentional visual direction.
- Purposeful, smooth, narrative-driven animation only.

### Out of Scope

- Backend.
- Database.
- Authentication.
- CMS.
- Blog.
- Certifications section.
- GitHub contribution graph.
- Visitor counters.
- Fake metrics.
- Fake testimonials.
- Skill percentages.
- Unsupported achievements.
- Unsupported business claims.

### Future Scope

Future scope is limited to items consistent with `FOUNDATION.md`.

| Item | Status |
| --- | --- |
| Additional project detail as projects mature | MISSING INFORMATION |
| Case-study expansion for featured projects | MISSING INFORMATION |
| Analytics or conversion tracking | MISSING INFORMATION |
| Deployment provider-specific optimization | MISSING INFORMATION |

## 8. Success Metrics

The foundation defines directional outcomes but does not define numeric targets. Therefore, measurable thresholds are marked as missing information.

| Category | Metric | Target |
| --- | --- | --- |
| Recruiter journey | Recruiter can move from Hero to Projects, Experience, About, Skills, Education, Resume, and Contact. | Complete journey available on site. |
| Interview conversion | Number of AI/ML internship or research interview opportunities attributed to the portfolio. | MISSING INFORMATION |
| Collaboration | Number of technical collaboration inquiries attributed to the portfolio. | MISSING INFORMATION |
| Performance | Lighthouse performance score on production build. | 90+ |
| Accessibility | Accessibility score and conformance baseline. | Lighthouse Accessibility 90+ and WCAG 2.2 AA baseline |
| SEO | Search metadata and crawlability checks. | Lighthouse SEO 90+ with source-backed metadata |
| Resume access | Resume CTA is visible and functional. | CTA routes to `/resume`; asset-dependent download/open behavior waits for resume asset/path |
| Contact access | Email, GitHub, LinkedIn, and X links are accessible. | Links defined in `FOUNDATION.md`. |

## 9. Target Audience

### Primary

- Recruiters
- Hiring Managers
- Research Engineers

### Secondary

- Startup founders
- Technical collaborators

### Personas

| Persona | Description | Pain Points | Goals |
| --- | --- | --- | --- |
| Recruiter | Evaluates Harsh for AI/ML internship and research opportunities. | Limited time; needs fast signal; avoids vague portfolios. | Understand fit, review projects, access resume, contact Harsh. |
| Hiring Manager | Evaluates engineering capability and project maturity. | Needs evidence of technical judgment, not generic claims. | Understand project direction, systems thinking, and relevant experience. |
| Research Engineer | Evaluates alignment with AI safety, LLM evaluation, NLP systems, retrieval systems, and AI research engineering. | Needs technical depth and credible focus areas. | Assess whether Harsh's work maps to research engineering needs. |
| Startup Founder | Evaluates possible product or engineering collaboration. | Needs confidence that work is practical and product-oriented. | Identify real-world AI product capability and contact path. |
| Technical Collaborator | Looks for shared interests and collaboration potential. | Needs clarity on focus areas and available channels. | Understand areas of work and reach out. |

## 10. User Journey

### Recruiter Journey

Required order from `FOUNDATION.md`:

1. Hero
2. Featured Projects
3. Experience
4. About
5. Skills
6. Education
7. Resume
8. Contact

Outcome: The recruiter can rapidly assess profile fit, project proof, experience, education, and next action.

### Founder Journey

ASSUMPTION: `FOUNDATION.md` identifies startup founders as a secondary audience but does not define a dedicated journey. The journey below is derived from the project decision hierarchy and secondary goal of collaboration.

1. Hero
2. Featured Projects
3. Project details or project summaries
4. Experience
5. About
6. Contact

Outcome: The founder can evaluate whether Harsh's work demonstrates product-oriented AI engineering and decide whether to initiate contact.

### Research Engineer Journey

ASSUMPTION: `FOUNDATION.md` identifies research engineers as a primary audience but does not define a dedicated journey. The journey below is derived from focus areas and experience highlights.

1. Hero
2. Featured Projects
3. Hallucination Hunter
4. DomAIyn Labs LLP experience
5. Skills
6. Resume
7. Contact

Outcome: The research engineer can evaluate alignment with AI safety, hallucination detection, LLM evaluation, NLP systems, retrieval systems, and research engineering.

### Collaborator Journey

ASSUMPTION: `FOUNDATION.md` identifies technical collaborators as a secondary audience but does not define a dedicated journey. The journey below is derived from the secondary goal of enabling collaboration.

1. Hero
2. Projects
3. Skills
4. About
5. Contact and social links

Outcome: The collaborator can identify shared technical interests and choose a contact channel.

## 11. Information Architecture

### Sitemap

ASSUMPTION: The navigation in `FOUNDATION.md` defines the required top-level site structure. Project detail pages are included because the PRD request explicitly asks for a Project Detail specification; the foundation does not define exact URLs.

| Page / Section | URL | Purpose |
| --- | --- | --- |
| Home | `/` | Primary landing page and recruiter journey entry point. |
| Projects | `/projects` | Full project overview and featured project access. |
| Project Detail | `/projects/[project]` | Individual project explanation. Exact content depth: MISSING INFORMATION |
| Experience | `/experience` | Professional experience. |
| About | `/about` | Professional identity, philosophy, values, and focus areas. |
| Resume | `/resume` | Resume access. Resume file/path: MISSING INFORMATION |
| Contact | `/contact` | Contact channels. |

### Navigation Hierarchy

Primary navigation:

- Home
- Projects
- Experience
- About
- Resume
- Contact

Secondary links:

- GitHub
- LinkedIn
- X
- Email

### Internal Linking

| Source | Destination | Requirement |
| --- | --- | --- |
| Hero primary CTA | Projects | Must navigate to the Projects page or Projects section. |
| Hero secondary CTA | Resume | Must navigate to `/resume`. The `/resume` route is the stable destination; downloadable/openable resume asset behavior remains unavailable until a resume asset/path is provided. |
| Hero social links | GitHub, LinkedIn, X | Must use URLs from `FOUNDATION.md`. |
| Featured Project cards | Project detail pages | Must link to static project detail routes generated from the approved project list. Detail pages must render only documented project fields until more source content exists. |
| Resume page/section | Contact | Should provide a path to contact after resume review. |
| Footer | Primary navigation and contact/social links | Must not introduce undocumented sections. |

### Page Relationships

The Home page should present the complete recruiter journey. Top-level pages may either repeat the relevant content from Home or provide focused views of the same content.

ASSUMPTION: Because no backend, database, or CMS is allowed, page content should be statically defined in the codebase or static content files.

## 12. Functional Requirements

| ID | Description | Priority | Acceptance Criteria | Dependencies |
| --- | --- | --- | --- | --- |
| FR-001 | Provide a Home entry point that follows the recruiter journey. | P0 | Home includes Hero, Featured Projects, Experience, About, Skills, Education, Resume, and Contact in the required order or with clear navigation between them. | Content from `FOUNDATION.md` |
| FR-002 | Provide primary navigation. | P0 | Navigation includes Home, Projects, Experience, About, Resume, and Contact. | None |
| FR-003 | Provide hero content. | P0 | Hero includes professional headline, hero statement, primary CTA "View Projects", secondary CTA "Resume", and links to GitHub, LinkedIn, and X. | URLs from `FOUNDATION.md`; resume destination missing |
| FR-004 | Provide featured projects. | P0 | Displays FrameOS, Candidate Intelligence System, AppForge AI, and Hallucination Hunter as featured projects. | Project content from `FOUNDATION.md` |
| FR-005 | Show project status. | P0 | Each listed project shows status "In Progress". | Project status from `FOUNDATION.md` |
| FR-006 | Provide project detail surfaces. | P1 | Each featured project links to a static detail page that renders only project name, one-line description, and status until more source-backed fields are provided. | Project content from `FOUNDATION.md` |
| FR-007 | Provide experience content. | P0 | Experience includes DomAIyn Labs LLP and MathonGo with titles and documented highlights. | Experience content from `FOUNDATION.md` |
| FR-008 | Provide education content. | P0 | Education includes MSIT, B.Tech Electronics & Communication Engineering, and CGPA 8.59. | Education content from `FOUNDATION.md` |
| FR-009 | Provide skills content. | P0 | Skills are grouped into Programming, Libraries, Backend, and Developer Tools using only documented skills. | Skills content from `FOUNDATION.md` |
| FR-010 | Provide About content. | P0 | About communicates professional identity, long-term vision, focus areas, engineering philosophy, and core values without banned language. | Identity and philosophy from `FOUNDATION.md` |
| FR-011 | Provide Resume access. | P0 | Resume CTA and nav item resolve to `/resume`. Resume download/open behavior is not implemented until resume asset/path is provided. | Resume file missing |
| FR-012 | Provide Contact content. | P0 | Contact includes email, GitHub, LinkedIn, and X exactly as documented. | Contact details from `FOUNDATION.md` |
| FR-013 | Provide footer. | P1 | Footer includes relevant navigation/contact links and does not introduce undocumented content. | Navigation and contact details |
| FR-014 | Enforce content rules. | P0 | Site does not use banned terms or sections: "Passionate", "Hardworking", "Quick learner", "Results-driven", skill percentages, visitor counters, fake metrics, fake testimonials, blog, certifications section, or GitHub contribution graph. | Content QA |
| FR-015 | Use purposeful animation only. | P1 | Animations support narrative or interaction clarity and are not decorative. | Design implementation |
| FR-016 | Support static deployment. | P0 | Site can be built and served statically without backend, database, authentication, or CMS. | Technical implementation |

Priority definitions:

- P0: Required for initial release.
- P1: Important but may be refined after core content is functional.
- P2: Future enhancement only.

## 13. Non-Functional Requirements

| Category | Requirement | Acceptance Criteria |
| --- | --- | --- |
| Performance | Site must feel fast and lightweight as a static portfolio. | Lighthouse target: 90+ for Performance, Accessibility, Best Practices, and SEO on production build unless a documented platform limitation prevents it. |
| Accessibility | Content and navigation must be usable by keyboard and assistive technologies. | WCAG 2.2 AA baseline; zero known critical accessibility violations before production. |
| Responsiveness | Site must support desktop and mobile viewports. | Breakpoints and container behavior defined in `docs/DESIGN_SYSTEM.md`. |
| SEO | Site must expose accurate identity, role, project, and contact metadata. | Metadata fields and target queries: MISSING INFORMATION |
| Maintainability | Content must be easy to update without backend or CMS. | Content source format: MISSING INFORMATION |
| Scalability | Architecture must allow additional documented projects or details without redesigning the site. | Future content model: MISSING INFORMATION |
| Security | No authentication, backend, database, or user-submitted data should exist. | Static-only deployment confirmed. |
| Code Quality | Code should be simple, readable, and aligned with the selected framework. | Framework and tooling defined in `docs/TECH_SPEC.md`. |
| Developer Experience | Local development, build, and deployment commands should be documented. | Toolchain defined in `docs/TECH_SPEC.md` and execution sequence defined in `docs/IMPLEMENTATION_PLAN.md`. |

## 14. Feature Specification

### F-001: Hero

Purpose: Establish identity, positioning, and primary next actions.

Behavior:

- Display professional headline: "Building AI Products, Open Source & Real-World Solutions".
- Display hero statement: "Turning ideas into intelligent products through machine learning and engineering."
- Provide primary CTA: "View Projects".
- Provide secondary CTA: "Resume".
- Provide links to GitHub, LinkedIn, and X.

User Value: Allows visitors to quickly understand who Harsh is, what he is building toward, and where to go next.

Implementation Notes:

- Tone must remain minimal, technical, and professional.
- Do not add unsupported claims or decorative copy.

Acceptance Criteria:

- Hero content exactly matches documented text unless `FOUNDATION.md` is updated.
- CTA labels match `FOUNDATION.md`.
- Social links use documented URLs.

### F-002: Featured Projects

Purpose: Provide primary proof of engineering capability.

Behavior:

- Show four featured projects:
  - FrameOS
  - Candidate Intelligence System
  - AppForge AI
  - Hallucination Hunter
- Show each project as "In Progress".

User Value: Gives evaluators a concise view of current AI product and systems work.

Implementation Notes:

- Projects have highest priority in the site decision hierarchy.
- Avoid fake metrics, screenshots, or claims not present in source material.

Acceptance Criteria:

- All four projects are present.
- No undocumented project is added.
- No undocumented achievement or metric is added.

### F-003: Project Detail

Purpose: Allow deeper evaluation of each project.

Behavior:

- Featured project cards link to static project detail routes.
- Project detail pages render only the project name, one-line description, and status from `FOUNDATION.md`.
- Architecture, implementation details, repositories, demos, screenshots, diagrams, code snippets, outcomes, and metrics are omitted until source-backed content exists.

User Value: Helps technical evaluators understand project intent and engineering direction.

Implementation Notes:

- Project detail content must not invent architecture, metrics, users, or outcomes.
- Current documented project descriptions are limited to one-line summaries and status.

Acceptance Criteria:

- Detail pages or expanded views do not include unsupported claims.
- Missing fields remain empty or are labeled as unavailable until source content exists.

### F-004: Experience

Purpose: Present relevant professional experience.

Behavior:

- Display DomAIyn Labs LLP role:
  - AI/ML Intern (AI Safety & Evaluation Research)
  - Highlights: AI safety, hallucination detection, LLM evaluation, FastAPI, NLP systems, retrieval systems.
- Display MathonGo role:
  - Research & Development Intern
  - Highlights: 2000+ JEE Physics questions, AI-assisted workflows, research, content validation, dataset organization.

User Value: Shows applied experience relevant to AI/ML and research workflows.

Implementation Notes:

- Do not add dates, outcomes, or metrics beyond those documented.

Acceptance Criteria:

- Both experiences are present.
- Titles and highlights match `FOUNDATION.md`.
- No unsupported employment details are introduced.

### F-005: About

Purpose: Communicate identity, long-term direction, philosophy, values, and focus areas.

Behavior:

- Include professional identity.
- Include long-term vision: AI Research Engineer.
- Include secondary goal: Production AI Engineer.
- Include focus areas.
- Include engineering philosophy and core values.

User Value: Helps evaluators understand how Harsh thinks about engineering and AI systems.

Implementation Notes:

- Avoid generic biography.
- Prefer engineering orientation over personal narrative.

Acceptance Criteria:

- About content remains consistent with `FOUNDATION.md`.
- Banned phrases are not used.

### F-006: Skills

Purpose: Present documented technical skills clearly.

Behavior:

- Group skills by Programming, Libraries, Backend, and Developer Tools.
- Do not use skill percentages.

User Value: Allows quick scanning of tools and technical familiarity.

Implementation Notes:

- Skills should support credibility but remain lower priority than projects and experience.

Acceptance Criteria:

- Only documented skills are included.
- No ranking, percentage, or proficiency scale is introduced.

### F-007: Education

Purpose: Provide academic context.

Behavior:

- Display MSIT.
- Display B.Tech Electronics & Communication Engineering.
- Display CGPA 8.59.
- Display graduation year 2029.

User Value: Provides recruiters and hiring managers with academic baseline information.

Implementation Notes:

- Do not add coursework, awards, or certifications unless added to `FOUNDATION.md`.

Acceptance Criteria:

- Education content matches documented facts.

### F-008: Resume

Purpose: Give evaluators direct access to Harsh's resume.

Behavior:

- Provide Resume navigation item.
- Provide secondary CTA in Hero.

User Value: Allows recruiters and hiring managers to continue evaluation in a standard format.

Implementation Notes:

- Resume asset/path is not defined in `FOUNDATION.md`.
- The stable Resume CTA destination is `/resume`.
- Download/open/PDF preview behavior is not implemented until a resume asset/path is supplied.

Acceptance Criteria:

- Resume nav item and Hero CTA route to `/resume`.
- Resume download/open/PDF preview behavior is absent until a resume asset/path is provided.
- Resume asset/path: MISSING INFORMATION

### F-009: Contact

Purpose: Provide direct next steps for opportunities and collaboration.

Behavior:

- Display email.
- Display GitHub.
- Display LinkedIn.
- Display X.

User Value: Allows visitors to initiate contact through documented channels.

Implementation Notes:

- No contact form is specified because the project has no backend.

Acceptance Criteria:

- All documented contact links are present.
- No backend-dependent form is implemented.

### F-010: Footer

Purpose: Provide persistent navigation and contact access.

Behavior:

- Include primary navigation links.
- Include contact or social links.
- Avoid introducing new sections or claims.

User Value: Supports orientation and next actions at the end of the page.

Implementation Notes:

- Keep footer minimal.

Acceptance Criteria:

- Footer links work.
- Footer content remains consistent with `FOUNDATION.md`.

## 15. Page Specifications

### Hero

Purpose: Introduce Harsh and direct users to projects or resume.

Goals:

- Establish technical identity.
- Prioritize project exploration.
- Provide quick resume and social access.

Required Content:

- Professional headline.
- Hero statement.
- Primary CTA: View Projects.
- Secondary CTA: Resume.
- GitHub, LinkedIn, and X links.

Interactions:

- View Projects navigates to Projects.
- Resume navigates to resume destination.
- Social links navigate externally.

Edge Cases:

- Resume destination missing.
- External social link fails.

Acceptance Criteria:

- Hero matches source content.
- All CTA and social links are visible and usable.

### Projects

Purpose: Present projects as primary proof of engineering capability.

Goals:

- Show the four featured projects.
- Make project status visible.
- Support deeper inspection where content exists.

Required Content:

- FrameOS: AI-native operating system for autonomous media production.
- Candidate Intelligence System: AI-powered resume intelligence platform.
- AppForge AI: Compiler-inspired AI application generation platform.
- Hallucination Hunter: Claim-level hallucination detection platform.
- Status: In Progress for each.

Interactions:

- Project item selection opens project detail or anchored detail.

Edge Cases:

- Project detail content is missing.
- Project remains in progress.

Acceptance Criteria:

- All documented projects render.
- No unsupported metrics, screenshots, claims, or outcomes appear.

### Project Detail

Purpose: Provide project-specific technical depth.

Goals:

- Help evaluators understand individual project intent.
- Avoid unsupported claims.

Required Content:

- Project name.
- One-line description.
- Status.
- Additional architecture, implementation, repository, demo, or decision details: MISSING INFORMATION

Interactions:

- Navigate back to Projects.
- External repository/demo links: MISSING INFORMATION

Edge Cases:

- Detail content unavailable.
- Project is still in progress.

Acceptance Criteria:

- Detail content is limited to documented information.
- Missing fields are omitted or explicitly marked unavailable.

### Experience

Purpose: Present professional experience relevant to AI/ML and research workflows.

Goals:

- Show role credibility.
- Surface relevant AI safety, evaluation, NLP, retrieval, and research experience.

Required Content:

- DomAIyn Labs LLP role and highlights.
- MathonGo role and highlights.

Interactions:

- MISSING INFORMATION

Edge Cases:

- Dates are not documented.
- Employer URLs are not documented.

Acceptance Criteria:

- Experience content matches `FOUNDATION.md`.
- No undocumented dates, employer links, or achievements are added.

### About

Purpose: Communicate professional identity and engineering philosophy.

Goals:

- Explain long-term vision and focus areas.
- Communicate philosophy and values without self-promotional language.

Required Content:

- Name.
- Degree, institution, graduation, CGPA.
- Long-term vision.
- Focus areas.
- Engineering philosophy.
- Core values.
- Core message.

Interactions:

- Internal links to Projects, Experience, or Contact may be included if consistent with navigation.

Edge Cases:

- Long-form biography becomes generic or promotional.

Acceptance Criteria:

- About content is concise, technical, and evidence-oriented.
- Banned language is not used.

### Skills

Purpose: Present documented tools and technical areas.

Goals:

- Support technical scanning.
- Avoid inflated proficiency claims.

Required Content:

- Programming: Python, Java, SQL.
- Libraries: NumPy, Pandas, Matplotlib.
- Backend: FastAPI, Docker.
- Developer Tools: Git, GitHub, Linux, VS Code, Jupyter, Google Colab, IntelliJ IDEA.

Interactions:

- MISSING INFORMATION

Edge Cases:

- Skill percentages or rankings are requested.

Acceptance Criteria:

- Skills are grouped as documented.
- No percentages, levels, or undocumented tools are added.

### Education

Purpose: Provide academic context.

Goals:

- Communicate institution, degree, graduation year, and CGPA.

Required Content:

- Maharaja Surajmal Institute of Technology / MSIT.
- B.Tech Electronics & Communication Engineering.
- Graduation: 2029.
- Current CGPA: 8.59.

Interactions:

- MISSING INFORMATION

Edge Cases:

- Coursework, awards, or certifications are not documented.

Acceptance Criteria:

- Education information matches `FOUNDATION.md`.

### Resume

Purpose: Provide a standard evaluation artifact.

Goals:

- Make resume access obvious.
- Support recruiter and hiring manager review.

Required Content:

- Resume file or resume page: MISSING INFORMATION

Interactions:

- Open or download resume: MISSING INFORMATION

Edge Cases:

- Resume file unavailable.
- Resume link broken.

Acceptance Criteria:

- Resume nav and CTA exist.
- Resume nav and CTA route to `/resume`.
- Download/open behavior works only after resume asset/path is defined.

### Contact

Purpose: Enable follow-up for interviews and collaboration.

Goals:

- Provide direct contact paths.
- Avoid backend-dependent features.

Required Content:

- Email: `jhaharsh451@gmail.com`
- GitHub: `https://github.com/HrshJha`
- LinkedIn: `https://www.linkedin.com/in/hrshjha/`
- X: `https://x.com/m_eharsh`

Interactions:

- Email link opens the visitor's mail client using `mailto:jhaharsh451@gmail.com`.
- Social links open external destinations.

Edge Cases:

- External social profile unavailable.
- Contact form is requested but no backend exists.

Acceptance Criteria:

- Contact channels are visible and functional.
- No contact form requiring backend is implemented.

### Footer

Purpose: Provide final navigation and contact orientation.

Goals:

- Reinforce primary navigation.
- Provide contact/social access.
- Stay minimal.

Required Content:

- Primary nav links.
- Contact/social links.
- Copyright or legal text: MISSING INFORMATION

Interactions:

- Internal navigation.
- External social navigation.

Edge Cases:

- Footer becomes a dumping ground for unsupported links or sections.

Acceptance Criteria:

- Footer contains no undocumented sections.
- Footer links work.

## 16. Content Requirements

| Content | Required | Origin | Maintainer | Change Frequency |
| --- | --- | --- | --- | --- |
| Professional identity | Yes | `FOUNDATION.md` | Harsh Kumar Jha | MISSING INFORMATION |
| Headline and hero statement | Yes | `FOUNDATION.md` | Harsh Kumar Jha | MISSING INFORMATION |
| Core message | Yes | `FOUNDATION.md` | Harsh Kumar Jha | MISSING INFORMATION |
| Vision and focus areas | Yes | `FOUNDATION.md` | Harsh Kumar Jha | MISSING INFORMATION |
| Engineering philosophy | Yes | `FOUNDATION.md` | Harsh Kumar Jha | MISSING INFORMATION |
| Core values | Yes | `FOUNDATION.md` | Harsh Kumar Jha | MISSING INFORMATION |
| Projects | Yes | `FOUNDATION.md` | Harsh Kumar Jha | MISSING INFORMATION |
| Project detail content | Partial | `FOUNDATION.md` one-line summaries only | Harsh Kumar Jha | MISSING INFORMATION |
| Experience | Yes | `FOUNDATION.md` | Harsh Kumar Jha | MISSING INFORMATION |
| Education | Yes | `FOUNDATION.md` | Harsh Kumar Jha | MISSING INFORMATION |
| Skills | Yes | `FOUNDATION.md` | Harsh Kumar Jha | MISSING INFORMATION |
| Resume | Yes | MISSING INFORMATION | Harsh Kumar Jha | MISSING INFORMATION |
| Contact links | Yes | `FOUNDATION.md` | Harsh Kumar Jha | MISSING INFORMATION |

## 17. Technical Constraints

The following constraints are mandatory:

- No backend.
- No database.
- No authentication.
- No CMS.
- Static deployment.
- Content must be traceable to `FOUNDATION.md` or explicitly provided future source documents.

Implementation framework, build tool, package manager, and styling system are defined in `docs/TECH_SPEC.md`. Hosting provider and production domain remain unresolved until deployment selection.

MISSING INFORMATION:

- Hosting provider.
- Deployment process.
- Resume asset path.
- Asset strategy.
- Analytics strategy.

## 18. Risks

### Technical Risks

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Resume destination is undefined. | Resume CTA may be broken or delayed. | Define resume asset/path before implementation completion. |
| Framework/tooling not defined. | Engineering setup may diverge from expectations. | Select stack in a technical specification or implementation plan. |
| Project detail content is sparse. | Detail pages may feel incomplete. | Do not invent content; publish only documented details. |
| Static-only constraint limits dynamic contact forms. | Users cannot submit through an onsite form. | Use email and social links as documented. |

### Design Risks

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Site becomes overdesigned. | Conflicts with minimal, calm, professional brand. | Keep visual system restrained and content-led. |
| Animation becomes decorative. | Violates animation principle. | Use animation only for narrative or interaction clarity. |
| Portfolio becomes generic. | Reduces credibility. | Prioritize projects and engineering decisions. |

### Content Risks

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Unsupported achievements are added. | Damages trust and violates foundation. | Require source-backed content review. |
| Banned language appears. | Conflicts with content rules. | Run content QA before release. |
| Fake metrics or testimonials are added. | Violates foundation. | Prohibit unsupported metrics and testimonials. |

### Maintenance Risks

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Content becomes stale as projects evolve. | Reduces credibility. | Define content update cadence. Cadence: MISSING INFORMATION |
| No CMS means updates require code changes. | Maintenance depends on developer workflow. | Keep content centralized and simple. |
| Multiple documents drift from foundation. | Conflicting product direction. | Treat `FOUNDATION.md` as source of truth. |

## 19. Assumptions

ASSUMPTION: Top-level pages may be implemented as separate routes or as sections on a single static page, provided the required navigation and recruiter journey are preserved.

ASSUMPTION: Project detail surfaces are required because the PRD request includes Project Detail; however, the foundation only provides project names, one-line descriptions, and status.

ASSUMPTION: Skills and Education may appear as Home sections, focused pages, or About subsections because `FOUNDATION.md` includes them in the recruiter journey but not in the primary navigation.

ASSUMPTION: Contact should use direct links because the foundation requires no backend and does not specify a contact form.

ASSUMPTION: Resume access is required, but the resume asset/path is not documented.

ASSUMPTION: Numeric performance, accessibility, SEO, and conversion targets require separate definition because they are not specified in `FOUNDATION.md`.

## 20. Dependencies

| Dependency | Required | Status |
| --- | --- | --- |
| Static hosting | Yes | Recommended in `docs/TECH_SPEC.md`; final provider/domain MISSING INFORMATION |
| Frontend framework or static site generator | Yes | Next.js App Router defined in `docs/TECH_SPEC.md` |
| Package manager | Yes | pnpm defined in `docs/TECH_SPEC.md` |
| Styling system | Yes | Tailwind CSS with design tokens defined in `docs/TECH_SPEC.md` and `docs/DESIGN_SYSTEM.md` |
| Icons | Optional | lucide-react for functional UI icons if icons are implemented |
| Fonts | Optional | Defined in `docs/DESIGN_SYSTEM.md` |
| Resume asset | Yes | MISSING INFORMATION |
| Social profile URLs | Yes | Defined in `FOUNDATION.md` |
| Email address | Yes | Defined in `FOUNDATION.md` |
| Project assets/screenshots | Optional | MISSING INFORMATION |
| Analytics | Optional | MISSING INFORMATION |

## 21. Release Strategy

### MVP

The MVP must include:

- Static deployment.
- Home page or landing experience following the recruiter journey.
- Primary navigation.
- Hero.
- Featured Projects.
- Experience.
- About.
- Skills.
- Education.
- Resume access.
- Contact.
- Footer.
- Content rules enforced.
- No backend, database, authentication, CMS, blog, certifications section, visitor counter, fake metrics, fake testimonials, skill percentages, or GitHub contribution graph.

### Version 1.1

MISSING INFORMATION

Potential candidates must be consistent with `FOUNDATION.md`, such as improved project detail content after source material is provided.

### Version 2

MISSING INFORMATION

Potential candidates must continue to prioritize projects, engineering decisions, experience, about, skills, and documented credibility.

### Future

MISSING INFORMATION

Future additions require updates to `FOUNDATION.md` or another approved source document before implementation.

## 22. Acceptance Criteria

The project is considered complete when all of the following are true:

- `FOUNDATION.md` remains the source of truth.
- The site is statically deployable.
- No backend, database, authentication, or CMS is used.
- Primary navigation includes Home, Projects, Experience, About, Resume, and Contact.
- The recruiter journey is available: Hero, Featured Projects, Experience, About, Skills, Education, Resume, Contact.
- Hero content, CTAs, and social links match `FOUNDATION.md`.
- All four featured projects are present with documented descriptions and "In Progress" status.
- Experience content includes only documented roles and highlights.
- Education content includes only documented academic details.
- Skills content includes only documented skills and no percentages.
- Resume access exists through `/resume`; download/open/PDF behavior is enabled only after the missing resume asset/path is provided.
- Contact includes the documented email, GitHub, LinkedIn, and X links.
- The site does not include banned words, banned sections, fake metrics, fake testimonials, visitor counters, skill percentages, a blog, certifications section, or GitHub contribution graph.
- Animations, if present, are purposeful, smooth, and narrative-driven.
- The design direction is minimal, premium, technical, professional, calm, and intentional.
- Missing information is not silently replaced with assumptions or invented content.

## 23. Appendix

### Glossary

| Term | Definition |
| --- | --- |
| Foundation | `FOUNDATION.md`, the single source of truth for this project. |
| Portfolio Constitution | The mission and decision hierarchy defined in `FOUNDATION.md`. |
| Recruiter Journey | The required sequence: Hero, Featured Projects, Experience, About, Skills, Education, Resume, Contact. |
| Static Deployment | Deployment without backend, database, authentication, or CMS. |
| Featured Projects | FrameOS, Candidate Intelligence System, AppForge AI, and Hallucination Hunter. |

### Definitions

Decision hierarchy:

1. Projects
2. Engineering decisions
3. Experience
4. About
5. Skills
6. Everything else

Design personality:

- Minimal
- Premium
- Technical
- Professional
- Calm
- Intentional

Content must avoid:

- Passionate
- Hardworking
- Quick learner
- Results-driven
- Skill percentages
- Visitor counters
- Fake metrics
- Fake testimonials
- Blog
- Certifications section
- GitHub contribution graph

### References

- [FOUNDATION.md](../FOUNDATION.md)

### Important Notes

- Never invent achievements.
- Never fabricate metrics.
- Never exaggerate skills.
- Prefer evidence over claims.
- Prefer engineering over aesthetics.
- Prefer projects over biography.
- Keep the portfolio minimal and technically credible.
- Any future change that conflicts with `FOUNDATION.md` must first update `FOUNDATION.md`.
