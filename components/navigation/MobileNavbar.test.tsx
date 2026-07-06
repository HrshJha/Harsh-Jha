import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

import { MobileNavbar } from "./MobileNavbar";

describe("MobileNavbar", () => {
  it("opens the drawer, closes on Escape, and returns focus to the trigger", () => {
    render(<MobileNavbar />);

    const trigger = screen.getByRole("button", { name: "Open navigation" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    const dialog = screen.getByRole("dialog", { name: "Navigation menu" });
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByRole("link", { name: "Resume" })).toHaveAttribute(
      "href",
      "/resume",
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
});
