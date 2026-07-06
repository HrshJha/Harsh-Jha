import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  usePathname: () => "/projects",
}));

import { DesktopNavbar } from "./DesktopNavbar";

describe("DesktopNavbar", () => {
  it("renders all approved nav links in order and marks the active one", () => {
    render(<DesktopNavbar />);

    const nav = screen.getByRole("navigation", { name: "Primary" });
    const links = within(nav).getAllByRole("link");

    expect(links.map((link) => link.textContent)).toEqual([
      "Home",
      "Projects",
      "Experience",
      "About",
      "Resume",
      "Contact",
    ]);

    expect(links[1]).toHaveAttribute("aria-current", "page");
    expect(links[0]).not.toHaveAttribute("aria-current");
  });
});
