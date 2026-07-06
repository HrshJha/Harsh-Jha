import { describe, expect, it } from "vitest";
import { isNavItemActive } from "./isNavItemActive";

describe("isNavItemActive", () => {
  it("matches the home link only on the exact root path", () => {
    expect(isNavItemActive("/", "/")).toBe(true);
    expect(isNavItemActive("/projects", "/")).toBe(false);
  });

  it("matches a nav link on its own path", () => {
    expect(isNavItemActive("/projects", "/projects")).toBe(true);
  });

  it("matches a nav link for nested routes under its path", () => {
    expect(isNavItemActive("/projects/frameos", "/projects")).toBe(true);
  });

  it("does not match unrelated paths", () => {
    expect(isNavItemActive("/contact", "/projects")).toBe(false);
  });
});
