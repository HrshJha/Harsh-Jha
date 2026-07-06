import type { Project } from "@/types/project";
import { PROJECT_STATUS_IN_PROGRESS } from "@/constants/status";

// Source: FOUNDATION.md Part 2 & 4; CONTENT_SPEC.md §6. Order matches the
// "Featured Projects" order used consistently across FOUNDATION.md, PRD.md,
// CONTENT_SPEC.md, and TECH_SPEC.md §4.
export const projects: readonly Project[] = [
  {
    name: "FrameOS",
    slug: "frameos",
    shortDescription:
      "AI-native operating system for autonomous media production.",
    status: PROJECT_STATUS_IN_PROGRESS,
  },
  {
    name: "Candidate Intelligence System",
    slug: "candidate-intelligence-system",
    shortDescription: "AI-powered resume intelligence platform.",
    status: PROJECT_STATUS_IN_PROGRESS,
  },
  {
    name: "AppForge AI",
    slug: "appforge-ai",
    shortDescription: "Compiler-inspired AI application generation platform.",
    status: PROJECT_STATUS_IN_PROGRESS,
  },
  {
    name: "Hallucination Hunter",
    slug: "hallucination-hunter",
    shortDescription: "Claim-level hallucination detection platform.",
    status: PROJECT_STATUS_IN_PROGRESS,
  },
] as const;
