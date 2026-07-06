import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

const pathnameMock = vi.hoisted(() => vi.fn());

vi.mock("next/navigation", () => ({
  usePathname: pathnameMock,
}));

import { RouteAwareFooter } from "./RouteAwareFooter";

describe("RouteAwareFooter", () => {
  it("does not render the footer on the home page", () => {
    pathnameMock.mockReturnValue("/");

    render(<RouteAwareFooter />);

    expect(screen.queryByRole("contentinfo")).toBeNull();
  });

  it("renders the footer on other routes", () => {
    pathnameMock.mockReturnValue("/projects");

    render(<RouteAwareFooter />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
