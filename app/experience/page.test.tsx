import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ExperiencePage from "./page";

describe("ExperiencePage", () => {
  it("renders collapsed experience cards by default", () => {
    render(<ExperiencePage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Experience" }),
    ).toBeInTheDocument();
    expect(screen.getByText("DomAIyn Labs LLP")).toBeInTheDocument();
    expect(screen.getByText("MathonGo")).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: "Expand Experience" }),
    ).toHaveLength(2);
    expect(screen.queryByText("About The Role")).not.toBeInTheDocument();
  });

  it("expands and collapses details from an explicit control", () => {
    render(<ExperiencePage />);

    const domaiynCard = screen.getByText("DomAIyn Labs LLP").closest("article");

    expect(domaiynCard).not.toBeNull();

    const expandButton = within(domaiynCard as HTMLElement).getByRole(
      "button",
      { name: "Expand Experience" },
    );

    fireEvent.click(expandButton);

    expect(expandButton).toHaveAttribute("aria-expanded", "true");
    expect(
      within(domaiynCard as HTMLElement).getByText("About The Role"),
    ).toBeInTheDocument();
    expect(
      within(domaiynCard as HTMLElement).getByRole("link", {
        name: "Hallucination Hunter",
      }),
    ).toHaveAttribute("href", "/projects/hallucination-hunter");

    fireEvent.click(expandButton);

    expect(expandButton).toHaveAttribute("aria-expanded", "false");
    expect(
      within(domaiynCard as HTMLElement).queryByText("About The Role"),
    ).not.toBeInTheDocument();
  });
});
