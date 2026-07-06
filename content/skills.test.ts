// SKILL-05: Validates that the skills content module is source-compliant.
// CONTENT_SPEC.md §8; COMPONENT_SPEC.md §8.
// - Category order must be: Programming, Libraries, Backend, Developer Tools.
// - Skills per category must match exactly.
// - No progress bars, percentages, levels, or undocumented tools.

import { describe, expect, it } from "vitest";
import { skillCategories } from "./skills";

describe("skills content", () => {
  it("contains exactly 4 categories in the approved order", () => {
    expect(skillCategories.map((c) => c.category)).toEqual([
      "Programming",
      "Libraries",
      "Backend",
      "Developer Tools",
    ]);
  });

  it("Programming contains exactly the approved skills", () => {
    const programming = skillCategories.find(
      (c) => c.category === "Programming",
    );
    expect([...(programming?.skills ?? [])]).toEqual(["Python", "Java", "SQL"]);
  });

  it("Libraries contains exactly the approved skills", () => {
    const libraries = skillCategories.find((c) => c.category === "Libraries");
    expect([...(libraries?.skills ?? [])]).toEqual([
      "NumPy",
      "Pandas",
      "Matplotlib",
    ]);
  });

  it("Backend contains exactly the approved skills", () => {
    const backend = skillCategories.find((c) => c.category === "Backend");
    expect([...(backend?.skills ?? [])]).toEqual(["FastAPI", "Docker"]);
  });

  it("Developer Tools contains exactly the approved skills", () => {
    const devTools = skillCategories.find(
      (c) => c.category === "Developer Tools",
    );
    expect([...(devTools?.skills ?? [])]).toEqual([
      "Git",
      "GitHub",
      "Linux",
      "VS Code",
      "Jupyter",
      "Google Colab",
      "IntelliJ IDEA",
    ]);
  });

  it("does not include proficiency levels on any category", () => {
    for (const category of skillCategories) {
      const raw = category as unknown as Record<string, unknown>;
      expect(raw["level"]).toBeUndefined();
      expect(raw["proficiency"]).toBeUndefined();
      expect(raw["percentage"]).toBeUndefined();
    }
  });

  it("does not include category descriptions", () => {
    for (const category of skillCategories) {
      const raw = category as unknown as Record<string, unknown>;
      expect(raw["description"]).toBeUndefined();
    }
  });
});
