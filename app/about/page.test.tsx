import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutPage from "./page";

describe("AboutPage", () => {
  it("renders the consolidated professional profile hierarchy", () => {
    render(<AboutPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "About" }),
    ).toBeInTheDocument();

    for (const heading of [
      "Current Focus",
      "Engineering Philosophy",
      "How I Learn",
      "Technical Capabilities",
      "Education",
      "Future Direction",
    ]) {
      expect(
        screen.getByRole("heading", { level: 2, name: heading }),
      ).toBeInTheDocument();
    }
  });

  it("links to canonical evidence pages instead of duplicating their details", () => {
    render(<AboutPage />);

    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "href",
      "/projects",
    );
    expect(screen.getByRole("link", { name: "Experience" })).toHaveAttribute(
      "href",
      "/experience",
    );
    expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute(
      "href",
      "/resume",
    );
  });

  it("removes duplicate legacy profile sections", () => {
    render(<AboutPage />);

    expect(screen.queryByText("Learning Philosophy")).not.toBeInTheDocument();
    expect(screen.queryByText("Core Values")).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Skills" })).toBeNull();
  });
});
