import type { ExperienceRole } from "@/types/experience";

// Source: FOUNDATION.md Part 3; CONTENT_SPEC.md §7; PRD.md recruiter and
// research-engineer journeys; docs/projects/hallucination-hunter.md for the
// related portfolio project link. Dates and locations remain absent because
// they are not source-backed.
export const experience: readonly ExperienceRole[] = [
  {
    company: "DomAIyn Labs LLP",
    role: "AI/ML Intern (AI Safety & Evaluation Research)",
    employmentType: "Internship",
    highlights: [
      "AI safety",
      "Hallucination detection",
      "LLM evaluation",
      "FastAPI",
      "NLP systems",
      "Retrieval systems",
    ],
    technologies: [
      "FastAPI",
      "NLP systems",
      "Retrieval systems",
      "LLM evaluation",
    ],
    about: [
      "The role centered on AI safety and evaluation research, with work connected to hallucination detection, LLM evaluation, NLP systems, retrieval systems, and FastAPI.",
      "My responsibility was to contribute to the technical areas documented for the internship without turning related research topics into unsupported production claims.",
    ],
    responsibilities: [
      "Worked in the problem space of AI safety and hallucination detection.",
      "Engaged with LLM evaluation as a core technical focus.",
      "Worked with NLP systems and retrieval-system concepts.",
      "Used FastAPI as the documented backend technology in this experience area.",
      "Connected evaluation work to source-backed portfolio themes around AI reliability.",
    ],
    keyProjects: [
      {
        name: "Hallucination Hunter",
        href: "/projects/hallucination-hunter",
      },
    ],
    engineeringHighlights: [
      "AI safety",
      "Hallucination detection",
      "LLM evaluation",
      "FastAPI APIs",
      "NLP systems",
      "Retrieval systems",
    ],
    learnings: [
      "LLM outputs need evaluation methods that make failures inspectable.",
      "Hallucination detection benefits from claim-level and retrieval-aware thinking.",
      "AI safety work requires careful language and source-backed technical claims.",
    ],
    impact:
      "The experience strengthened the portfolio's AI safety, evaluation, NLP, retrieval, and backend engineering signal.",
  },
  {
    company: "MathonGo",
    role: "Research & Development Intern",
    employmentType: "Internship",
    highlights: [
      "2000+ JEE Physics questions",
      "AI-assisted workflows",
      "Research",
      "Content validation",
      "Dataset organization",
    ],
    technologies: ["AI-assisted workflows", "Dataset organization"],
    about: [
      "The role focused on research and development work around JEE Physics question content, AI-assisted workflows, content validation, and dataset organization.",
      "My responsibility was to support structured question-workflow and validation work using the documented research and content-organization focus areas.",
    ],
    responsibilities: [
      "Worked with 2000+ JEE Physics questions as the documented content scope.",
      "Used AI-assisted workflows in the research and development process.",
      "Performed research connected to question content and validation.",
      "Supported content validation for technical education material.",
      "Contributed to dataset organization for structured question workflows.",
    ],
    keyProjects: [],
    engineeringHighlights: [
      "AI-assisted workflows",
      "Research",
      "Content validation",
      "Dataset organization",
      "Large-scale question content handling",
    ],
    learnings: [
      "AI-assisted workflows still require domain validation and structured review.",
      "Dataset organization affects how reliably content can be inspected and reused.",
      "Research work becomes more useful when paired with clear validation habits.",
    ],
    impact:
      "The experience added applied research, validation, and dataset-organization depth through a documented 2000+ question content scope.",
  },
] as const;
