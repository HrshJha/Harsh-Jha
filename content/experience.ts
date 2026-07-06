import type { ExperienceRole } from "@/types/experience";

// Source: FOUNDATION.md Part 3; CONTENT_SPEC.md §7.
// Dates, locations, and achievements beyond these highlights are
// MISSING INFORMATION and must not be invented.
export const experience: readonly ExperienceRole[] = [
  {
    company: "DomAIyn Labs LLP",
    role: "AI/ML Intern (AI Safety & Evaluation Research)",
    highlights: [
      "AI safety",
      "Hallucination detection",
      "LLM evaluation",
      "FastAPI",
      "NLP systems",
      "Retrieval systems",
    ],
  },
  {
    company: "MathonGo",
    role: "Research & Development Intern",
    highlights: [
      "2000+ JEE Physics questions",
      "AI-assisted workflows",
      "Research",
      "Content validation",
      "Dataset organization",
    ],
  },
] as const;
