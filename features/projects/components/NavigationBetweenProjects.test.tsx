import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NavigationBetweenProjects } from "./NavigationBetweenProjects";

describe("NavigationBetweenProjects", () => {
  it("shows only a Next link for the first project", () => {
    render(<NavigationBetweenProjects currentSlug="frameos" />);
    expect(screen.queryByText("Previous")).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: "Next Candidate Intelligence System",
      }),
    ).toHaveAttribute("href", "/projects/candidate-intelligence-system");
  });

  it("shows both Previous and Next links for a middle project", () => {
    render(<NavigationBetweenProjects currentSlug="appforge-ai" />);
    expect(
      screen.getByRole("link", {
        name: "Previous Candidate Intelligence System",
      }),
    ).toHaveAttribute("href", "/projects/candidate-intelligence-system");
    expect(
      screen.getByRole("link", { name: "Next Hallucination Hunter" }),
    ).toHaveAttribute("href", "/projects/hallucination-hunter");
  });

  it("shows only a Previous link for the last project", () => {
    render(<NavigationBetweenProjects currentSlug="hallucination-hunter" />);
    expect(screen.queryByText("Next")).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Previous AppForge AI" }),
    ).toHaveAttribute("href", "/projects/appforge-ai");
  });
});
