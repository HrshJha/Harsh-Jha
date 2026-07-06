import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getProjectCaseStudies } from "@/lib/projectMarkdown";

const STATIC_ROUTES = [
  "/",
  "/projects",
  "/experience",
  "/about",
  "/resume",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.siteUrl) {
    return [];
  }

  const projectRoutes = getProjectCaseStudies().map(
    (project) => `/projects/${project.slug}`,
  );

  return [...STATIC_ROUTES, ...projectRoutes].map((route) => ({
    url: new URL(route, siteConfig.siteUrl).toString(),
  }));
}
