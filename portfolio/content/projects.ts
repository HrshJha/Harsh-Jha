/**
 * content/projects.ts - Featured project data, typed.
 *
 * Source of truth:
 *   Harsh's supplied project source blocks for FrameOS, Candidate Intelligence
 *   System, AppForge AI, and Hallucination Hunter. These provide the summaries,
 *   categories, stacks, GitHub repositories, problems, solutions, architectures,
 *   and key features used on cards and /projects/[id] pages.
 *
 * Status rule:
 *   Source documents disagree: FOUNDATION.md Part 4 says "In Progress," while
 *   the individual project source/default says "Completed." Per the existing
 *   build decision, the site renders "Completed" because the project-specific
 *   source is more precise.
 *
 * Display order: exactly FrameOS -> Candidate Intelligence System -> AppForge AI
 * -> Hallucination Hunter.
 */

export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  status: "Completed";
  focus: string;
  stack: string[];
  problem: string;
  solution: string;
  architecture: string;
  keyFeatures: string[];
  githubUrl: string;
  stage: "steel" | "gold" | "rust";
}

export const FEATURED_PROJECTS = [
  {
    id: "frameos",
    name: "FrameOS",
    description: "Autonomous AI-native media infrastructure platform for scaling content operations.",
    category: "AI Infrastructure",
    status: "Completed",
    focus: "Autonomous media pipelines",
    stack: [
      "TypeScript",
      "Python",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "Docker",
      "Prisma",
    ],
    githubUrl: "https://github.com/HrshJha/FrameOS",
    stage: "steel",
    problem:
      "Short-form media production depends on manual scripting, research, rendering, publishing, and analytics work across disconnected tools, creating context switching and bottlenecks for a single operator managing multiple pipelines.",
    solution:
      "FrameOS treats media production as infrastructure. It organizes work into autonomous pipeline stages for research, script generation, content assembly, rendering, publishing, analytics, and feedback learning.",
    architecture:
      "Trend detection -> AI research layer -> script generation and content assembly -> voice synthesis and rendering -> publishing and analytics feedback loop -> queue-based orchestration for distributed execution.",
    keyFeatures: [
      "Structured AI script generation with retention logic",
      "Multi-channel orchestration",
      "Brand voice locking",
      "Autonomous topic extraction and synthesis",
      "Predictive analytics and scoring",
      "Feedback loop for performance-aware optimization",
    ],
  },
  {
    id: "candidate-intelligence-system",
    name: "Candidate Intelligence System",
    description: "AI-powered resume intelligence backend for semantic matching and explainable candidate ranking.",
    category: "AI Platform",
    status: "Completed",
    focus: "Resume intelligence and ranking",
    stack: [
      "Python",
      "FastAPI",
      "Docker",
      "SQLAlchemy",
      "Alembic",
      "FAISS",
      "Sentence-Transformers",
      "BM25",
      "Redis",
      "PostgreSQL",
      "SQLite",
      "Nginx",
    ],
    githubUrl: "https://github.com/HrshJha/resume-checker",
    stage: "gold",
    problem:
      "Traditional ATS workflows over-index on keywords, miss semantic relevance, and give recruiters no insight into why a candidate was recommended.",
    solution:
      "Candidate Intelligence System converts resumes and job descriptions into structured intelligence. It parses documents, normalizes skills, retrieves candidate matches with hybrid search, reranks results, and exposes explainable scoring signals.",
    architecture:
      "FastAPI routes for auth, job, candidate, and search -> resume/JD parsers extracting fields and embeddings -> FAISS dense plus BM25 sparse hybrid retriever -> cross-encoder reranking and learning-to-rank abstractions -> SQLAlchemy, Alembic, PostgreSQL, Redis, and Nginx persistence/deployment layer.",
    keyFeatures: [
      "Resume parsing for PDF, DOCX, and OCR flows",
      "JD parsing for requirements and skill groups",
      "Hybrid semantic and keyword retrieval",
      "Cross-encoder reranking",
      "Explainable ranking records",
      "JWT authentication",
    ],
  },
  {
    id: "appforge-ai",
    name: "AppForge AI",
    description: "Compiler-inspired AI application generation platform.",
    category: "Developer Tool",
    status: "Completed",
    focus: "AI application generation",
    stack: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Pydantic",
      "Cerebras",
      "Groq",
      "OpenAI",
      "SQLite",
      "SQLAlchemy",
      "Railway",
    ],
    githubUrl: "https://github.com/HrshJha/AppForge-AI",
    stage: "gold",
    problem:
      "Standard LLM coding assistants generate raw code without enough structure, validation, or repair logic, which is brittle when outputs need to become coherent system designs instead of one-off snippets.",
    solution:
      "AppForge AI treats natural-language app generation as a compilation problem. It uses staged intermediate representations, typed schema validation, cross-layer checks, and repair loops before packaging.",
    architecture:
      "Intent extraction -> system design representation -> sequential schema generation for DB, API, UI, and auth -> validation and repair loops for cross-layer consistency -> boot repair engine normalizing structures before packaging.",
    keyFeatures: [
      "Five-stage generation pipeline",
      "Cerebras primary LLM with Groq/OpenAI fallback",
      "Strict Pydantic v2 validation",
      "Cross-layer validation and LLM-assisted repair",
      "Persistent compile history",
      "Railway-ready deployment config",
    ],
  },
  {
    id: "hallucination-hunter",
    name: "Hallucination Hunter",
    description: "Claim-level hallucination detection platform for verifying AI-generated answers.",
    category: "LLM Evaluation",
    status: "Completed",
    focus: "Claim-level hallucination detection",
    stack: [
      "Python",
      "FastAPI",
      "PyTorch",
      "Hugging Face Transformers",
      "spaCy",
      "scikit-learn",
      "XGBoost",
      "Pandas",
      "Seaborn",
      "Docker",
    ],
    githubUrl: "https://github.com/HrshJha/Hallucination-Hunter",
    stage: "rust",
    problem:
      "AI-generated answers can sound confident while containing unsupported or contradictory claims; whole-response checks are too coarse to catch partial hallucinations hiding in otherwise accurate answers.",
    solution:
      "Hallucination Hunter decomposes an answer into individual claims and verifies each against source text, combining NLI reasoning, semantic similarity, and conservative classification into readable output.",
    architecture:
      "FastAPI routes for detection, visualization, and health -> spaCy claim segmentation -> DeBERTa-v3 NLI cross-encoder for entailment, contradiction, and neutral signals -> Sentence-Transformers semantic similarity grounding -> aggregation and visualization producing verdicts, summaries, and heatmaps.",
    keyFeatures: [
      "Claim-level verification",
      "NLI-powered contradiction and entailment detection",
      "Semantic similarity grounding",
      "Conservative unsupported-claim classification",
      "Alignment heatmap",
      "Docker-ready deployment",
    ],
  },
] satisfies Project[];

export function getProjectById(id: string): Project | undefined {
  return FEATURED_PROJECTS.find((project) => project.id === id);
}
