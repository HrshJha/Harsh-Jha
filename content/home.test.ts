import { describe, expect, it } from "vitest";
import { heroCtas } from "./home";

describe("home content", () => {
  it("matches the approved hero CTA labels and destinations from CONTENT_SPEC.md", () => {
    expect(heroCtas).toEqual({
      primary: { label: "View Projects", href: "/projects" },
      secondary: { label: "Resume", href: "/resume" },
    });
  });
});
