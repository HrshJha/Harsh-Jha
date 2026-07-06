import { describe, expect, it } from "vitest";
import { generateStaticParams, dynamicParams } from "./page";

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
});
