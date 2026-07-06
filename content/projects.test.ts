import { describe, expect, it } from "vitest";
import { projects } from "./projects";

describe("projects content", () => {
  it("contains exactly the four approved projects with Completed status", () => {
    expect(projects.map((project) => project.name)).toEqual([
      "FrameOS",
      "Candidate Intelligence System",
      "AppForge AI",
      "Hallucination Hunter",
    ]);

    for (const project of projects) {
      expect(project.status).toBe("Completed");
    }
  });
});
