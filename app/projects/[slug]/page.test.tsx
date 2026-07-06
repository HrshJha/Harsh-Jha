import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectDetailPage, { generateStaticParams, dynamicParams } from "./page";

describe("project detail route", () => {
  it("generates static params for exactly the four approved project slugs", async () => {
    const params = await generateStaticParams();
    expect(params).toEqual([
      { slug: "frameos" },
      { slug: "candidate-intelligence-system" },
      { slug: "appforge-ai" },
      { slug: "hallucination-hunter" },
    ]);
  });

  it("disables on-demand rendering for slugs outside the approved list", () => {
    expect(dynamicParams).toBe(false);
  });

  it("renders markdown-backed case study sections for a project", async () => {
    render(
      await ProjectDetailPage({ params: Promise.resolve({ slug: "frameos" }) }),
    );

    expect(
      screen.getByRole("heading", { level: 1, name: "FrameOS" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "FrameOS is an AI-native operating system for autonomous media production.",
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByText("In Progress").length).toBeGreaterThan(0);
    expect(
      screen.getByRole("heading", { level: 2, name: "Problem Statement" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Architecture" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Technical Stack" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Current Progress" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Recruiter Takeaways" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("flowchart TD", { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("GitHub link: Not yet implemented."),
    ).toBeInTheDocument();
  });

  it("renders previous/next project navigation sourced from the static project order", async () => {
    render(
      await ProjectDetailPage({
        params: Promise.resolve({ slug: "appforge-ai" }),
      }),
    );

    expect(
      screen.getByRole("link", {
        name: "Previous Candidate Intelligence System",
      }),
    ).toHaveAttribute("href", "/projects/candidate-intelligence-system");
    expect(
      screen.getByRole("link", { name: "Next Hallucination Hunter" }),
    ).toHaveAttribute("href", "/projects/hallucination-hunter");
  });
});
