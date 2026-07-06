import { describe, expect, it } from "vitest";
import { navigationLinks } from "./navigation";

describe("navigation content", () => {
  it("matches the approved labels and order from CONTENT_SPEC.md", () => {
    expect(navigationLinks).toEqual([
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Experience", href: "/experience" },
      { label: "About", href: "/about" },
      { label: "Resume", href: "/resume" },
      { label: "Contact", href: "/contact" },
    ]);
  });
});
