import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectsPage from "./page";

const GITHUB_LINKS = [
  "https://github.com/HrshJha/FrameOS",
  "https://github.com/HrshJha/resume-checker",
  "https://github.com/HrshJha/AppForge-AI",
  "https://github.com/HrshJha/Hallucination-Hunter",
] as const;

describe("ProjectsPage", () => {
  it("renders concise project cards with internal and GitHub actions", () => {
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
    const exploreLinks = screen.getAllByRole("link", {
      name: "Explore Project",
    });

    for (const [index, [name, href]] of expected.entries()) {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(exploreLinks[index]).toHaveAttribute("href", href);
      expect(
        screen.getByRole("link", {
          name: `Open ${name} GitHub repository`,
        }),
      ).toHaveAttribute("href", expect.stringContaining("github.com"));
    }
  });

  it("shows completed status, tech stacks, and GitHub links without placeholders", () => {
    render(<ProjectsPage />);

    expect(screen.getAllByText("Completed")).toHaveLength(4);
    expect(screen.getByText("AI Infrastructure")).toBeInTheDocument();
    expect(screen.getByText("Resume intelligence")).toBeInTheDocument();
    expect(screen.getAllByText("Python").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Explore Project")).toHaveLength(4);
    expect(screen.getAllByText("GitHub")).toHaveLength(4);

    for (const href of GITHUB_LINKS) {
      expect(
        screen
          .getAllByRole("link")
          .some((link) => link.getAttribute("href") === href),
      ).toBe(true);
    }

    expect(screen.queryByText(new RegExp("In " + "Progress"))).toBeNull();
    expect(
      screen.queryByText(new RegExp("not yet " + "implemented", "i")),
    ).toBeNull();
    expect(screen.queryByText(new RegExp("Source: " + "docs", "i"))).toBeNull();
    expect(screen.queryByText("View " + "Case Study")).toBeNull();
  });
});
