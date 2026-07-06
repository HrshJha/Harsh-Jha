import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectsPage from "./page";

describe("ProjectsPage", () => {
  it("renders all four approved projects as cards linking to their detail routes", () => {
    render(<ProjectsPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Projects" }),
    ).toBeInTheDocument();

    const expected = [
      ["FrameOS", "/projects/frameos"],
      [
        "Candidate Intelligence System",
        "/projects/candidate-intelligence-system",
      ],
      ["AppForge AI", "/projects/appforge-ai"],
      ["Hallucination Hunter", "/projects/hallucination-hunter"],
    ] as const;

    for (const [name, href] of expected) {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
    }
  });

  it("shows In Progress status for every project", () => {
    render(<ProjectsPage />);
    expect(screen.getAllByText("In Progress")).toHaveLength(4);
  });
});
