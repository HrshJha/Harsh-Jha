import type { SkillCategory } from "@/types/skills";

// Source: FOUNDATION.md Part 3; CONTENT_SPEC.md §8.
// Category order is fixed: Programming, Libraries, Backend, Developer Tools.
export const skillCategories: readonly SkillCategory[] = [
  { category: "Programming", skills: ["Python", "Java", "SQL"] },
  { category: "Libraries", skills: ["NumPy", "Pandas", "Matplotlib"] },
  { category: "Backend", skills: ["FastAPI", "Docker"] },
  {
    category: "Developer Tools",
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "VS Code",
      "Jupyter",
      "Google Colab",
      "IntelliJ IDEA",
    ],
  },
] as const;
