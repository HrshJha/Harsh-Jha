import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the documented identity as the H1", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Harsh Kumar Jha" }),
    ).toBeInTheDocument();
  });

  it("renders the approved professional headline and hero statement", () => {
    render(<Home />);
    expect(
      screen.getByText(
        "Building Intelligent Products Through Machine Learning & Engineering",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Turning ideas into intelligent products through machine learning and engineering.",
      ),
    ).toBeInTheDocument();
  });

  it("routes the primary CTA to Projects and the secondary CTA to Resume", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: "View Projects" })).toHaveAttribute(
      "href",
      "/projects",
    );
    expect(
      screen
        .getAllByRole("link", { name: "Resume" })
        .some((link) => link.getAttribute("href") === "/resume"),
    ).toBe(true);
  });

  it("renders the approved social links", () => {
    render(<Home />);
    expect(
      screen
        .getAllByRole("link", { name: "GitHub" })
        .some(
          (link) => link.getAttribute("href") === "https://github.com/HrshJha",
        ),
    ).toBe(true);
    expect(
      screen
        .getAllByRole("link", { name: "LinkedIn" })
        .some(
          (link) =>
            link.getAttribute("href") ===
            "https://www.linkedin.com/in/hrshjha/",
        ),
    ).toBe(true);
    expect(
      screen
        .getAllByRole("link", { name: "X" })
        .some((link) => link.getAttribute("href") === "https://x.com/m_eharsh"),
    ).toBe(true);
  });

  it("renders the full evaluation journey after the hero", () => {
    render(<Home />);

    for (const heading of [
      "Featured Projects",
      "Experience",
      "About",
      "Skills",
      "Education",
      "Resume",
      "Contact",
    ]) {
      expect(
        screen.getByRole("heading", { level: 2, name: heading }),
      ).toBeInTheDocument();
    }
  });
});
