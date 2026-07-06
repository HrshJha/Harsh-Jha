// RES-04: Validates that the resume content module is source-compliant.
// CONTENT_SPEC.md §10; COMPONENT_SPEC.md §10.
// - Resume asset path is /documents/Harsh_CV.pdf.
// - Supporting copy is MISSING INFORMATION.

import { describe, expect, it } from "vitest";
import { resume } from "./resume";

describe("resume content", () => {
  it("contains the approved navigation label", () => {
    expect(resume.label).toBe("Resume");
  });

  it("contains the approved stable route", () => {
    expect(resume.route).toBe("/resume");
  });

  it("contains the approved resume asset path", () => {
    expect(resume.assetPath).toBe("/documents/Harsh_CV.pdf");
  });

  it("does not include supporting copy", () => {
    expect(resume.supportingCopy).toBeNull();
  });
});
