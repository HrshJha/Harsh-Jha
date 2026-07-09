/**
 * content/experience.ts — Experience data, typed.
 *
 * Architecture: per tech.md Section 7 — local typed TypeScript files,
 * no CMS. Same pattern as content/projects.ts.
 *
 * ⚠️  CONTENT INTEGRITY RULE (prd.md Section 8, rules.md Section 4):
 *   All text below is verbatim from FOUNDATION.md Part 3 — the single source
 *   of truth for experience content. FOUNDATION.md takes precedence over
 *   EXECUTION_PARTS.md if they ever disagree (prd.md header: "FOUNDATION.md wins").
 *
 *   DO NOT add, soften, strengthen, or synonym-swap anything:
 *   - No "passionate", "hardworking", "quick learner", "results-driven"
 *   - No invented responsibilities, tools, or outcomes
 *   - No metric fabrication
 *   If Harsh updates his actual experience, update FOUNDATION.md first,
 *   then update this file to match. Never update this file in isolation.
 */

export interface ExperienceRole {
  id: string;
  company: string;
  role: string;
  employmentType: string;
  techStack: string[]; // listed exactly as in FOUNDATION.md
  aboutTheRole: string; // verbatim paragraph from FOUNDATION.md
  keyResponsibilities: string[]; // verbatim list items from FOUNDATION.md
  whatILearned: string[]; // verbatim list items from FOUNDATION.md
  impact: string; // verbatim sentence from FOUNDATION.md
}

// Display order: most recent first (DomAIyn Labs → MathonGo).
// Neither FOUNDATION.md nor EXECUTION_PARTS.md specifies explicit ordering —
// most-recent-first is standard convention for experience sections.
// Logged as a layout decision in DECISIONS.md Part 4.
export const EXPERIENCE: ExperienceRole[] = [
  {
    id: "domayn-labs",
    company: "DomAIyn Labs LLP",
    role: "AI/ML Intern (AI Safety & Evaluation Research)",
    employmentType: "Internship",
    // Tech stack: verbatim from FOUNDATION.md Part 3.
    techStack: ["FastAPI", "NLP systems", "Retrieval systems", "LLM evaluation"],
    // "About the Role" paragraph: verbatim from FOUNDATION.md Part 3 (lines 216–221).
    // Note: EXECUTION_PARTS.md Part 4 omits the opening "The role centered on" —
    // FOUNDATION.md is the source of truth and includes it. Using FOUNDATION.md wording.
    aboutTheRole:
      "The role centered on AI safety and evaluation research, with work connected to hallucination detection, LLM evaluation, NLP systems, retrieval systems, and FastAPI. The responsibility was to contribute to the technical areas documented for the internship without turning related research topics into unsupported production claims.",
    // Key Responsibilities: verbatim from FOUNDATION.md Part 3 (lines 224–228).
    keyResponsibilities: [
      "Worked in the problem space of AI safety and hallucination detection.",
      "Engaged with LLM evaluation as a core technical focus.",
      "Worked with NLP systems and retrieval-system concepts.",
      "Used FastAPI as the documented backend technology in this experience area.",
      "Connected evaluation work to source-backed portfolio themes around AI reliability.",
    ],
    // What I Learned: verbatim from FOUNDATION.md Part 3 (lines 234–236).
    whatILearned: [
      "LLM outputs need evaluation methods that make failures inspectable.",
      "Hallucination detection benefits from claim-level and retrieval-aware thinking.",
      "AI safety work requires careful language and source-backed technical claims.",
    ],
    // Impact: verbatim from FOUNDATION.md Part 3 (lines 238–239).
    impact:
      "The experience strengthened the portfolio's AI safety, evaluation, NLP, retrieval, and backend engineering signal.",
  },
  {
    id: "mathongo",
    company: "MathonGo",
    role: "Research & Development Intern",
    employmentType: "Internship",
    // Tech stack: verbatim from FOUNDATION.md Part 3 (line 244).
    techStack: ["AI-assisted workflows", "Dataset organization"],
    // "About the Role" paragraph: verbatim from FOUNDATION.md Part 3 (lines 246–250).
    aboutTheRole:
      "The role focused on research and development work around JEE Physics question content, AI-assisted workflows, content validation, and dataset organization. The responsibility was to support structured question-workflow and validation work using the documented research and content-organization focus areas.",
    // Key Responsibilities: verbatim from FOUNDATION.md Part 3 (lines 253–257).
    keyResponsibilities: [
      "Worked with 2000+ JEE Physics questions as the documented content scope.",
      "Used AI-assisted workflows in the research and development process.",
      "Performed research connected to question content and validation.",
      "Supported content validation for technical education material.",
      "Contributed to dataset organization for structured question workflows.",
    ],
    // What I Learned: verbatim from FOUNDATION.md Part 3 (lines 260–262).
    whatILearned: [
      "AI-assisted workflows still require domain validation and structured review.",
      "Dataset organization affects how reliably content can be inspected and reused.",
      "Research work becomes more useful when paired with clear validation habits.",
    ],
    // Impact: verbatim from FOUNDATION.md Part 3 (lines 264–266).
    impact:
      "The experience added applied research, validation, and dataset-organization depth through a documented 2000+ question content scope.",
  },
] as const;
