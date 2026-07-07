import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the professional headline as the H1", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Building AI Systems From Research to Production",
      }),
    ).toBeInTheDocument();
  });

  it("renders the production AI headline and hero statement", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Building AI Systems From Research to Production",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Building production-grade AI systems through research, engineering and open source.",
      ),
    ).toBeInTheDocument();
  });

  it("routes the primary CTA to Projects and downloads the resume PDF", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: "View Projects" })).toHaveAttribute(
      "href",
      "/projects",
    );
    const resumeLink = screen.getByRole("link", { name: "Resume" });
    expect(resumeLink).toHaveAttribute("href", "/documents/Harsh_CV.pdf");
    expect(resumeLink).toHaveAttribute(
      "download",
      "Harsh_Kumar_Jha_Resume.pdf",
    );
  });

  it("renders the hero trust signals", () => {
    render(<Home />);
    const focusAreas = screen.getByRole("list", {
      name: "Engineering focus areas",
    });

    for (const label of [
      "Machine Learning",
      "LLMs",
      "AI Agents",
      "Evaluation",
      "Open Source",
    ]) {
      expect(within(focusAreas).getByText(label)).toBeInTheDocument();
    }
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
      within(socialProfiles).getByRole("link", { name: "Email" }),
    ).toHaveAttribute("href", "mailto:jhaharsh451@gmail.com");
  });

  it("renders the hero architecture diagram", () => {
    render(<Home />);

    expect(
      screen.getByRole("img", { name: /AI systems architecture flow/ }),
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
    expect(screen.queryByRole("contentinfo")).toBeNull();
  });
});
