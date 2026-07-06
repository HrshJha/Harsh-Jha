// EXP-06: Validates that the experience content module is source-compliant.
// CONTENT_SPEC.md §7; COMPONENT_SPEC.md §6.
// Dates, locations, and achievements are MISSING INFORMATION and must not
// appear in the content array.

import { describe, expect, it } from "vitest";
import { experience } from "./experience";

const APPROVED_COMPANIES = ["DomAIyn Labs LLP", "MathonGo"] as const;

const APPROVED_HIGHLIGHTS: Record<string, readonly string[]> = {
  "DomAIyn Labs LLP": [
    "AI safety",
    "Hallucination detection",
    "LLM evaluation",
    "FastAPI",
    "NLP systems",
    "Retrieval systems",
  ],
  MathonGo: [
    "2000+ JEE Physics questions",
    "AI-assisted workflows",
    "Research",
    "Content validation",
    "Dataset organization",
  ],
};

describe("experience content", () => {
  it("contains exactly the two approved companies", () => {
    expect(experience.map((e) => e.company)).toEqual([...APPROVED_COMPANIES]);
  });

  it("contains the approved roles", () => {
    expect(experience[0]?.role).toBe(
      "AI/ML Intern (AI Safety & Evaluation Research)",
    );
    expect(experience[1]?.role).toBe("Research & Development Intern");
  });

  it("contains only approved highlights for each company", () => {
    for (const entry of experience) {
      const approved = APPROVED_HIGHLIGHTS[entry.company];
      expect(approved).toBeDefined();
      expect([...entry.highlights]).toEqual([...(approved ?? [])]);
    }
  });

  it("does not include dates", () => {
    for (const entry of experience) {
      // The ExperienceRole type must not have a dates field.
      // If a 'dates' property were accidentally added, this cast would expose it.
      const raw = entry as unknown as Record<string, unknown>;
      expect(raw["dates"]).toBeUndefined();
    }
  });

  it("does not include location", () => {
    for (const entry of experience) {
      const raw = entry as unknown as Record<string, unknown>;
      expect(raw["location"]).toBeUndefined();
    }
  });

  it("does not include achievements", () => {
    for (const entry of experience) {
      const raw = entry as unknown as Record<string, unknown>;
      expect(raw["achievements"]).toBeUndefined();
    }
  });

  it("contains source-backed expanded experience details", () => {
    const domaiyn = experience[0];
    const mathongo = experience[1];

    expect(domaiyn?.employmentType).toBe("Internship");
    expect(domaiyn?.technologies).toEqual([
      "FastAPI",
      "NLP systems",
      "Retrieval systems",
      "LLM evaluation",
    ]);
    expect(domaiyn?.keyProjects).toEqual([
      {
        name: "Hallucination Hunter",
        href: "/projects/hallucination-hunter",
      },
    ]);

    expect(mathongo?.employmentType).toBe("Internship");
    expect(mathongo?.technologies).toEqual([
      "AI-assisted workflows",
      "Dataset organization",
    ]);
    expect(mathongo?.impact).toContain("2000+ question content scope");
  });
});
