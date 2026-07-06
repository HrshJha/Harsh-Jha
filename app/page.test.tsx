import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the professional headline as the H1", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Building Intelligent Products Through Machine Learning & Engineering",
      }),
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
    expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute(
      "href",
      "/resume",
    );
  });

  it("renders the approved social links", () => {
    render(<Home />);
    const socialProfiles = screen.getByRole("list", {
      name: "Social profiles",
    });

    expect(
      within(socialProfiles).getByRole("link", { name: "GitHub" }),
    ).toHaveAttribute("href", "https://github.com/HrshJha");
    expect(
      within(socialProfiles).getByRole("link", { name: "LinkedIn" }),
    ).toHaveAttribute("href", "https://www.linkedin.com/in/hrshjha/");
    expect(
      within(socialProfiles).getByRole("link", { name: "X" }),
    ).toHaveAttribute("href", "https://x.com/m_eharsh");
  });

  it("renders the static hero systems visual", () => {
    render(<Home />);

    expect(
      screen.getByRole("img", { name: "AI systems focus map" }),
    ).toBeInTheDocument();
  });

  it("keeps the home page focused on the hero only", () => {
    render(<Home />);

    expect(
      screen.queryByRole("heading", { level: 2, name: "Featured Projects" }),
    ).toBeNull();
    expect(
      screen.queryByRole("heading", { level: 2, name: "Experience" }),
    ).toBeNull();
    expect(
      screen.queryByRole("heading", { level: 2, name: "About" }),
    ).toBeNull();
    expect(
      screen.queryByRole("heading", { level: 2, name: "Contact" }),
    ).toBeNull();
  });
});
