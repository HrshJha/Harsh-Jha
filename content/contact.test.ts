// CONT-06: Validates that the contact content module is source-compliant.
// CONTENT_SPEC.md §11.

import { describe, expect, it } from "vitest";
import { contact } from "./contact";

describe("contact content", () => {
  it("contains the approved heading", () => {
    expect(contact.heading).toBe("Contact");
  });

  it("contains the approved email", () => {
    expect(contact.email).toBe("jhaharsh451@gmail.com");
  });

  it("contains the approved social links exactly as written", () => {
    expect(contact.socials.linkedIn).toBe("https://www.linkedin.com/in/hrshjha/");
    expect(contact.socials.gitHub).toBe("https://github.com/HrshJha");
    expect(contact.socials.x).toBe("https://x.com/m_eharsh");
  });

  it("does not include missing information fields", () => {
    const raw = contact as unknown as Record<string, unknown>;
    expect(raw["description"]).toBeUndefined();
    expect(raw["footerCopy"]).toBeUndefined();
  });
});
