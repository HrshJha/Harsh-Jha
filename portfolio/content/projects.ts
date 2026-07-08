/**
 * content/projects.ts — Featured project data, typed.
 *
 * Architecture: per tech.md Section 7 — "No CMS. Project, experience, and
 * skills content lives in local, typed TypeScript files (/content/projects.ts,
 * /content/experience.ts, etc.), imported directly."
 *
 * Status rule — ALL projects show "Completed":
 *   FOUNDATION.md Part 4 lists all four as "In Progress."
 *   Each project's own documentation lists it as "Completed."
 *   RESOLUTION (DECISIONS.md "Known at project start" / prd.md Section 10):
 *   the live site uses each project's own documentation status ("Completed"),
 *   because it is the more specific, more current source. If Harsh later
 *   updates a project's actual status, the site follows that project's own
 *   doc, not this file — update it here.
 *
 * Missing links:
 *   GitHub links for all four projects: [OPEN] — not supplied by Harsh.
 *   Live links for FrameOS, Candidate Intelligence System, AppForge AI: [OPEN].
 *   See DECISIONS.md Part 3 for the standing open items.
 *   Do NOT infer or fabricate any URL — rules.md Section 4 and prd.md Section 8.
 *
 * Display order: exactly FrameOS → CIS → AppForge AI → Hallucination Hunter
 *   per EXECUTION_PARTS.md Part 3 and prd.md Section 5.2.
 */

export interface Project {
  id: string;
  name: string;
  description: string; // one-line, verbatim from source documents — do not embellish
  status: "Completed"; // see status rule above — always "Completed" (not "In Progress")
  liveUrl: string | null; // null = [OPEN] — do not fabricate
  githubUrl: string | null; // null = [OPEN] — do not fabricate
  stage: "steel" | "gold" | "rust"; // which Signal Core color group this project maps to
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "frameos",
    name: "FrameOS",
    description: "AI-native operating system for autonomous media production.",
    // Status: "Completed" — see status rule in the file header comment.
    // Source: FrameOS individual project documentation (more specific than FOUNDATION.md Part 4).
    status: "Completed",
    // [OPEN] — live link not supplied by Harsh. Do not fabricate. See DECISIONS.md Part 3.
    liveUrl: null,
    // [OPEN] — GitHub link not supplied by Harsh. Do not fabricate. See DECISIONS.md Part 3.
    githubUrl: null,
    stage: "steel",
  },
  {
    id: "candidate-intelligence-system",
    name: "Candidate Intelligence System",
    description: "AI-powered resume intelligence platform.",
    // Status: "Completed" — see status rule in the file header comment.
    status: "Completed",
    // [OPEN] — live link not supplied by Harsh. Do not fabricate. See DECISIONS.md Part 3.
    liveUrl: null,
    // [OPEN] — GitHub link not supplied by Harsh. Do not fabricate. See DECISIONS.md Part 3.
    githubUrl: null,
    stage: "gold",
  },
  {
    id: "appforge-ai",
    name: "AppForge AI",
    description: "Compiler-inspired AI application generation platform.",
    // Status: "Completed" — see status rule in the file header comment.
    status: "Completed",
    // [OPEN] — live link not supplied by Harsh. Do not fabricate. See DECISIONS.md Part 3.
    liveUrl: null,
    // [OPEN] — GitHub link not supplied by Harsh. Do not fabricate. See DECISIONS.md Part 3.
    githubUrl: null,
    stage: "gold",
  },
  {
    id: "hallucination-hunter",
    name: "Hallucination Hunter",
    description: "Claim-level hallucination detection platform.",
    // Status: "Completed" — see status rule in the file header comment.
    status: "Completed",
    // Live link: supplied by Harsh in EXECUTION_PARTS.md Part 3 and prd.md Section 5.2.
    liveUrl: "https://hrshjha.vercel.app/projects/hallucination-hunter",
    // [OPEN] — GitHub link not supplied by Harsh. Do not fabricate. See DECISIONS.md Part 3.
    githubUrl: null,
    stage: "rust",
  },
] as const;
