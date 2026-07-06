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
        "Building AI Products, Open Source & Real-World Solutions",
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
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/HrshJha",
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/hrshjha/",
    );
    expect(screen.getByRole("link", { name: "X" })).toHaveAttribute(
      "href",
      "https://x.com/m_eharsh",
    );
  });
});

