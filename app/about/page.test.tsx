import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutPage from "./page";

describe("AboutPage", () => {
  it("renders only the concise personal profile sections", () => {
    render(<AboutPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "About" }),
    ).toBeInTheDocument();

    const sectionHeadings = screen
      .getAllByRole("heading", { level: 2 })
      .map((heading) => heading.textContent);

    expect(sectionHeadings).toEqual([
      "About Me",
      "Engineering Philosophy",
      "Education",
      "Currently Exploring",
    ]);
  });

  it("renders the approved About Me copy exactly", () => {
    render(<AboutPage />);

    expect(
      screen.getByText(
        "I'm Harsh Kumar Jha, an Electronics & Communication Engineering student at Maharaja Surajmal Institute of Technology with a strong interest in AI systems, machine learning, and production engineering.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "I enjoy turning research ideas into real software by combining engineering fundamentals, scalable system design, and practical implementation. My goal is to build AI products that are reliable, maintainable, and useful beyond demonstrations.",
      ),
    ).toBeInTheDocument();
  });

  it("removes long profile sections and cross-page prompts", () => {
    render(<AboutPage />);

    for (const removedText of [
      "Current Focus",
      "Technical Capabilities",
      "Programming And Data",
      "Backend Engineering",
      "AI Engineering Direction",
      "Developer Workflow",
      "Future Direction",
      "Learning Philosophy",
      "Projects",
      "Experience",
      "Resume",
    ]) {
      expect(screen.queryByText(removedText)).toBeNull();
    }
  });
});
