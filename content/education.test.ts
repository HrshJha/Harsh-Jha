// EDU-04: Validates that the education content module is source-compliant.
// CONTENT_SPEC.md §9; COMPONENT_SPEC.md §9.
// Coursework, awards, and academic projects must be absent (MISSING INFORMATION).
// All required fields must match source documents exactly.

import { describe, expect, it } from "vitest";
import { education } from "./education";

describe("education content", () => {
  it("contains the approved institution", () => {
    expect(education.institution).toBe(
      "Maharaja Surajmal Institute of Technology",
    );
    expect(education.shortInstitution).toBe("MSIT");
  });

  it("contains the approved degree", () => {
    expect(education.degree).toBe(
      "B.Tech Electronics & Communication Engineering",
    );
    expect(education.degreeShortForm).toBe("B.Tech (ECE)");
  });

  it("contains the approved graduation year", () => {
    expect(education.graduationYear).toBe(2029);
  });

  it("contains the approved current CGPA", () => {
    expect(education.currentCgpa).toBe(8.59);
  });

  it("does not include coursework", () => {
    const raw = education as unknown as Record<string, unknown>;
    expect(raw["coursework"]).toBeUndefined();
  });

  it("does not include awards", () => {
    const raw = education as unknown as Record<string, unknown>;
    expect(raw["awards"]).toBeUndefined();
  });

  it("does not include academic projects", () => {
    const raw = education as unknown as Record<string, unknown>;
    expect(raw["academicProjects"]).toBeUndefined();
    expect(raw["projects"]).toBeUndefined();
  });

  it("does not include a description paragraph", () => {
    const raw = education as unknown as Record<string, unknown>;
    expect(raw["description"]).toBeUndefined();
  });
});
