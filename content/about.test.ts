// ABOUT-06: Validates that the about content module is source-compliant.
// CONTENT_SPEC.md §5; COMPONENT_SPEC.md §7.
// - Biography paragraph must be absent (MISSING INFORMATION).
// - No photo (MISSING INFORMATION).
// - No competitive advantages (MISSING INFORMATION).
// - Philosophy and values must match approved source content exactly.

import { describe, expect, it } from "vitest";
import { about } from "./about";

const APPROVED_ENGINEERING_PHILOSOPHY = [
  "Products over isolated models",
  "Systems over demos",
  "Architecture over screenshots",
  "Understanding over memorization",
  "Research before implementation",
  "Execution over ideas",
] as const;

const APPROVED_CORE_VALUES = [
  "Curiosity",
  "Continuous Learning",
  "Ownership",
  "Scalability",
  "Innovation",
  "Open Knowledge",
  "Collaboration",
  "Discipline",
] as const;

describe("about content", () => {
  it("contains the approved name", () => {
    expect(about.identity.name).toBe("Harsh Kumar Jha");
  });

  it("contains the approved degree", () => {
    expect(about.identity.degreeShortForm).toBe("B.Tech (ECE)");
    expect(about.identity.institution).toBe(
      "Maharaja Surajmal Institute of Technology",
    );
  });

  it("contains the approved graduation year and CGPA", () => {
    expect(about.identity.graduationYear).toBe(2029);
    expect(about.identity.currentCgpa).toBe(8.59);
  });

  it("contains the approved core message", () => {
    expect(about.identity.coreMessage).toBe(
      "Building autonomous AI systems through research, engineering, and product thinking.",
    );
  });

  it("contains exactly the 6 approved engineering philosophy statements", () => {
    expect([...about.engineeringPhilosophy]).toEqual([
      ...APPROVED_ENGINEERING_PHILOSOPHY,
    ]);
  });

  it("contains exactly the 8 approved core values", () => {
    expect([...about.coreValues]).toEqual([...APPROVED_CORE_VALUES]);
  });

  it("does not include a biography paragraph field", () => {
    const raw = about as unknown as Record<string, unknown>;
    expect(raw["biography"]).toBeUndefined();
    expect(raw["biographyParagraph"]).toBeUndefined();
  });

  it("does not include a photo field", () => {
    const raw = about as unknown as Record<string, unknown>;
    expect(raw["photo"]).toBeUndefined();
    expect(raw["profilePhoto"]).toBeUndefined();
  });

  it("does not include competitive advantages", () => {
    const raw = about as unknown as Record<string, unknown>;
    expect(raw["competitiveAdvantages"]).toBeUndefined();
  });
});
