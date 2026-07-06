import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { projects } from "@/content/projects";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";

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
      <Section ariaLabelledBy="project-detail-heading">
        <h1 id="project-detail-heading" className="text-2xl font-semibold">
          {project.name}
        </h1>
      </Section>
    </PageWrapper>
  );
}
