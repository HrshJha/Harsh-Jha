import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { projects } from "@/content/projects";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { ProjectHeader } from "@/features/projects/components/ProjectHeader";
import { NavigationBetweenProjects } from "@/features/projects/components/NavigationBetweenProjects";

interface ProjectDetailPageProps {
  readonly params: Promise<{ slug: string }>;
}

// Static params are generated only for the four approved projects
// (TECH_SPEC.md §4). `dynamicParams = false` ensures any other slug 404s
// instead of being rendered on demand.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((candidate) => candidate.slug === slug);

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
  const project = projects.find((candidate) => candidate.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PageWrapper>
      <Section className="flex flex-col gap-10 py-12 md:py-16">
        <ProjectHeader project={project} />
        <NavigationBetweenProjects currentSlug={project.slug} />
      </Section>
    </PageWrapper>
  );
}
