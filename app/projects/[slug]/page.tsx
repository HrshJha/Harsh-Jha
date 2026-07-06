import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import {
  getProjectCaseStudies,
  getProjectCaseStudy,
} from "@/lib/projectMarkdown";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { ProjectHeader } from "@/features/projects/components/ProjectHeader";
import { ProjectCaseStudyContent } from "@/features/projects/components/ProjectCaseStudyContent";
import { NavigationBetweenProjects } from "@/features/projects/components/NavigationBetweenProjects";

interface ProjectDetailPageProps {
  readonly params: Promise<{ slug: string }>;
}

// Static params are generated only for the four approved projects
// (TECH_SPEC.md §4). `dynamicParams = false` ensures any other slug 404s
// instead of being rendered on demand.
export function generateStaticParams() {
  const projects = getProjectCaseStudies();

  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectCaseStudy(slug);

  if (!project) {
    return buildMetadata({ title: "Projects", path: "/projects" });
  }

  return buildMetadata({
    title: project.name,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectCaseStudy(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageWrapper>
      <Section className="py-12 md:py-16">
        <div className="flex flex-col gap-10">
          <ProjectHeader project={project} />
          <ProjectCaseStudyContent project={project} />
          <NavigationBetweenProjects currentSlug={project.slug} />
        </div>
      </Section>
    </PageWrapper>
  );
}
