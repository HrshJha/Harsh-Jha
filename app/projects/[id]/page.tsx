import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  FEATURED_PROJECTS,
  getProjectById,
  type Project,
} from "@/content/projects";
import { ProjectCaseGrid } from "@/components/ProjectCaseGrid";
import { ProjectDetailReveal } from "@/components/ProjectDetailReveal";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

const STAGE_COLOR: Record<Project["stage"], string> = {
  steel: "var(--color-signal-steel)",
  gold: "var(--color-signal-gold)",
  rust: "var(--color-signal-rust)",
};

function GitHubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function generateStaticParams() {
  return FEATURED_PROJECTS.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found - Harsh Kumar Jha",
    };
  }

  return {
    title: `${project.name} - Harsh Kumar Jha`,
    description: project.description,
  };
}

function Label({
  children,
  color = "var(--color-signal-gold)",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <p
      className="mb-3 text-[11px] uppercase tracking-[0.18em]"
      style={{
        fontFamily: "var(--font-jetbrains-mono), monospace",
        color,
        opacity: 0.7,
      }}
    >
      {children}
    </p>
  );
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) notFound();

  const accentColor = STAGE_COLOR[project.stage];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
      <ProjectDetailReveal>
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] transition-opacity motion-feedback-transition hover:opacity-100"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            color: "var(--color-ink)",
            opacity: 0.45,
          }}
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Projects
        </Link>
      </ProjectDetailReveal>

      <ProjectDetailReveal order={1}>
        <section
          className="relative overflow-hidden border-b pt-7 pb-10 sm:pt-8 sm:pb-12"
          style={{ borderColor: "var(--line)" }}
        >
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-px"
            style={{ background: `linear-gradient(90deg, ${accentColor} 0%, transparent 100%)` }}
          />
          <div className="relative z-10">
            <Label color={accentColor}>{project.category}</Label>
            <h1
              className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                color: "var(--color-ink)",
              }}
            >
              {project.name}
            </h1>
            <p
              className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed"
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                color: "var(--color-ink)",
                opacity: 0.68,
              }}
            >
              {project.description}
            </p>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["Status", project.status],
                ["Focus", project.focus],
                ["Stage", project.stage === "steel" ? "Input / Gathering" : project.stage === "gold" ? "Active Processing" : "Resolved / Output"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border themed-static-panel px-4 py-3">
                  <p
                    className="mb-1 text-[10px] uppercase tracking-[0.16em]"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      color: "var(--color-ink)",
                      opacity: 0.35,
                    }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                      color: label === "Stage" ? accentColor : "var(--color-ink)",
                      opacity: 0.75,
                    }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border themed-chip px-2.5 py-1 text-[11px]"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    color: "var(--color-ink)",
                    opacity: 0.6,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`project-detail-${project.id}-github`}
                aria-label={`${project.name} GitHub repository (opens in new tab)`}
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm premium-action transition-all motion-feedback-transition hover:opacity-100"
                style={{
                  fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                  borderColor: "var(--line-strong)",
                  background: "var(--panel-muted)",
                  color: "var(--color-ink)",
                  opacity: 0.78,
                }}
              >
                <GitHubIcon />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </ProjectDetailReveal>

      <ProjectDetailReveal distance="md" order={2} staggerBy="base">
        <ProjectCaseGrid
          accentColor={accentColor}
          problem={project.problem}
          solution={project.solution}
          architecture={project.architecture}
          keyFeatures={project.keyFeatures}
        />
      </ProjectDetailReveal>
    </div>
  );
}
