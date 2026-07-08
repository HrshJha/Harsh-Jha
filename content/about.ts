/**
 * content/about.ts — About, Skills, and Education data, typed.
 *
 * Architecture: per tech.md Section 7 — local typed TypeScript, no CMS.
 *
 * ⚠️  CONTENT INTEGRITY RULE (prd.md Section 8, rules.md Section 1):
 *   All text is verbatim from FOUNDATION.md. FOUNDATION.md is the single source
 *   of truth. Do NOT add, soften, strengthen, or synonym-swap anything.
 *   Banned words — never use: passionate, hardworking, quick learner, results-driven.
 *   Banned patterns — never add: skill percentage bars, proficiency numbers,
 *   progress indicators of any kind (rules.md §1, prd.md §5.5).
 *
 * Sources by section:
 *   About identity   → FOUNDATION.md Part 1 lines 33–38
 *   Core message     → FOUNDATION.md Part 1 lines 48–50
 *   Long-term vision → FOUNDATION.md Part 1 lines 54–67
 *   Philosophy       → FOUNDATION.md Part 1 lines 71–78
 *   Core values      → FOUNDATION.md Part 1 lines 82–91
 *   Skills           → FOUNDATION.md Part 3 lines 278–301
 *   Education        → FOUNDATION.md Part 3 lines 270–274 + Part 1 line 37 (graduation)
 */

/* ─── About ────────────────────────────────────────────────────────────── */

export const ABOUT = {
  // Identity — FOUNDATION.md Part 1 lines 33–38
  name: "Harsh Kumar Jha",
  degree: "B.Tech (ECE)",
  institution: "Maharaja Surajmal Institute of Technology", // MSIT — full name from FOUNDATION.md Part 1 line 36
  institutionShort: "MSIT",
  graduation: 2029,
  cgpa: "8.59",

  // Core message — FOUNDATION.md Part 1 lines 48–50. Verbatim.
  coreMessage:
    "Building autonomous AI systems through research, engineering, and product thinking.",

  // Vision — FOUNDATION.md Part 1 lines 54–67. Verbatim.
  vision: {
    primary: "AI Research Engineer",
    secondary: "Production AI Engineer",
    focusAreas: [
      "Machine Learning",
      "Deep Learning",
      "NLP / LLMs",
      "AI Agents",
      "Generative AI",
    ],
  },

  // Engineering philosophy — FOUNDATION.md Part 1 lines 71–78. Verbatim.
  // Display as paired contrasts (A over B). Do not reorder.
  philosophy: [
    { over: "Products", under: "isolated models" },
    { over: "Systems", under: "demos" },
    { over: "Architecture", under: "screenshots" },
    { over: "Understanding", under: "memorization" },
    { over: "Research", under: "implementation" },
    { over: "Execution", under: "ideas" },
  ],

  // Core values — FOUNDATION.md Part 1 lines 82–91. Verbatim. Do not reorder.
  values: [
    "Curiosity",
    "Continuous Learning",
    "Ownership",
    "Scalability",
    "Innovation",
    "Open Knowledge",
    "Collaboration",
    "Discipline",
  ],
} as const;

/* ─── Skills ────────────────────────────────────────────────────────────── */

// Groups and items: verbatim from FOUNDATION.md Part 3 lines 278–301.
// Display order: exactly as listed in FOUNDATION.md (Programming, Libraries,
// Backend, Developer Tools). Do not reorder groups or items within groups.
//
// BANNED: skill percentage bars, proficiency ratings, progress indicators.
// Source: rules.md §1 and prd.md §5.5 — "No proficiency bars, no percentages."
export const SKILLS = [
  {
    group: "Programming",
    items: ["Python", "Java", "SQL"],
  },
  {
    group: "Libraries",
    items: ["NumPy", "Pandas", "Matplotlib"],
  },
  {
    group: "Backend",
    items: ["FastAPI", "Docker"],
  },
  {
    group: "Developer Tools",
    items: ["Git", "GitHub", "Linux", "VS Code", "Jupyter", "Google Colab", "IntelliJ IDEA"],
  },
] as const;

/* ─── Education ─────────────────────────────────────────────────────────── */

// Verbatim from FOUNDATION.md Part 3 lines 270–274 + Part 1 line 37.
// "MSIT" is the institution short form; full name is Maharaja Surajmal
// Institute of Technology (FOUNDATION.md Part 1 line 36).
export const EDUCATION = {
  institutionShort: "MSIT",
  institutionFull: "Maharaja Surajmal Institute of Technology",
  degree: "B.Tech Electronics & Communication Engineering",
  cgpa: "8.59",
  graduation: 2029,
} as const;
