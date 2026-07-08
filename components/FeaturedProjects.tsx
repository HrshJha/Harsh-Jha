"use client";

/**
 * FeaturedProjects — the home-page Featured Projects section.
 *
 * Architecture per tech.md Section 7: project data lives in /content/projects.ts,
 * not hardcoded here. This component is purely presentational.
 *
 * Design intent (FOUNDATION.md Part 5, rules.md):
 *   Each card uses the project's Signal Core stage color as its accent — creating
 *   a visual throughline from the pipeline diagram in the Hero to the work it
 *   represents. This is narrative color use, not decoration.
 *
 *   "Every atmospheric choice must earn its place by reinforcing the AI systems
 *   narrative. It should read as instrumentation, not decoration." — FOUNDATION.md
 *
 * Status: always "Completed" per DECISIONS.md resolution.
 * Project details: "Read More" routes open internal /projects/[id] case-study pages.
 * GitHub links: supplied by Harsh's project source blocks and rendered on every card.
 *
 * Anchor: this section's id="projects" is the target of the Hero "View Projects" CTA.
 * The id is on the parent <section> in page.tsx, not here — this component is
 * inserted inside that stub.
 */

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FEATURED_PROJECTS, type Project } from "@/content/projects";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  DURATION_BASE,
  DURATION_REVEAL,
  EASE_DEVELOP,
  EASE_FEEDBACK,
  HOVER_LIFT,
  REVEAL_MD,
  STAGGER_BASE,
  VIEWPORT_REVEAL,
  stagger,
} from "@/lib/motion";

/* ─── Stage color map — traces to globals.css @theme tokens ─────────────── */
// This mirrors the Signal Core color mapping (tech.md Section 2) so the
// project cards read as continuations of the pipeline diagram above.
const STAGE_COLOR: Record<Project["stage"], string> = {
  steel: "var(--color-signal-steel)",
  gold:  "var(--color-signal-gold)",
  rust:  "var(--color-signal-rust)",
};

const CARD_STACK_LIMIT = 5;

function GitHubIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

/* ─── Card component ────────────────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  shouldReduce,
}: {
  project: Project;
  index: number;
  shouldReduce: boolean;
}) {
  const accentColor = STAGE_COLOR[project.stage];
  const cardStack = project.stack.slice(0, CARD_STACK_LIMIT);
  const remainingStackCount = project.stack.length - cardStack.length;

  const card = (
    <motion.article
      // WHY: cards respond to user attention with a small lift and gold glow.
      // They stay static at rest so Signal Core remains the only ambient motion.
      whileHover={shouldReduce ? undefined : { y: HOVER_LIFT }}
      transition={{ duration: DURATION_BASE, ease: EASE_FEEDBACK }}
      className="
        relative flex h-full min-h-[460px] flex-col
        rounded-xl overflow-hidden
        border themed-panel
        p-6 sm:p-7
        group
        transition-all motion-base-feedback-transition
      "
      aria-label={`Project: ${project.name}`}
    >
      {/* Top accent line — stage color, always visible */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, ${accentColor} 0%, transparent 100%)` }}
      />

      {/* Card glow — subtle, scales on hover */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 rounded-xl opacity-0
          group-hover:opacity-100
          transition-opacity motion-base-feedback-transition pointer-events-none
        "
        style={{
          background: "var(--card-glow)",
        }}
      />

      {/* ── Card content ── */}
      <div className="relative z-10 flex h-full flex-col gap-4">

        {/* Header row: stage dot + project number */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Stage color indicator — visual bridge to Signal Core */}
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: accentColor }}
              aria-hidden="true"
            />
            <span
              className="text-[10px] uppercase tracking-[0.2em] opacity-50"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: accentColor,
              }}
            >
              {project.stage === "steel" ? "Input / Gathering" :
               project.stage === "gold"  ? "Active Processing" :
                                           "Resolved / Output"}
            </span>
          </div>
          {/* Index marker */}
          <span
            className="text-[10px] opacity-30"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "var(--color-ink)",
            }}
          >
            0{index + 1}
          </span>
        </div>

        {/* Project name */}
        <h3
          className="text-xl sm:text-2xl font-semibold leading-tight tracking-tight"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            color: "var(--color-ink)",
          }}
        >
          {project.name}
        </h3>

        {/* Description — from Harsh's project source blocks */}
        <p
          className="text-sm sm:text-base leading-relaxed min-h-[4.5rem]"
          style={{
            fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
            color: "var(--color-ink)",
            opacity: 0.6,
          }}
        >
          {project.description}
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <p
              className="mb-1 text-[10px] uppercase tracking-[0.16em]"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--color-ink)",
                opacity: 0.35,
              }}
            >
              Category
            </p>
            <p
              className="text-xs"
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                color: accentColor,
                opacity: 0.85,
              }}
            >
              {project.category}
            </p>
          </div>
          <div>
            <p
              className="mb-1 text-[10px] uppercase tracking-[0.16em]"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--color-ink)",
                opacity: 0.35,
              }}
            >
              Focus
            </p>
            <p
              className="text-xs"
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                color: "var(--color-ink)",
                opacity: 0.62,
              }}
            >
              {project.focus}
            </p>
          </div>
        </div>

        <div>
          <p
            className="mb-2 text-[10px] uppercase tracking-[0.16em]"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "var(--color-ink)",
              opacity: 0.35,
            }}
          >
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {cardStack.map((tech) => (
              <span
                key={tech}
                className="rounded border themed-chip px-2 py-0.5 text-[10px]"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  color: "var(--color-ink)",
                  opacity: 0.58,
                }}
              >
                {tech}
              </span>
            ))}
            {remainingStackCount > 0 && (
              <span
                className="rounded border themed-chip px-2 py-0.5 text-[10px]"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  color: accentColor,
                  opacity: 0.72,
                }}
              >
                +{remainingStackCount}
              </span>
            )}
          </div>
        </div>

        {/* Status badge */}
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: accentColor,
              opacity: 0.8,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: accentColor }}
              aria-hidden="true"
            />
            {project.status}
          </span>
        </div>

        <div
          className="mt-auto flex flex-wrap items-center gap-3 border-t pt-4"
          style={{ borderColor: "var(--line)" }}
        >
          <Link
            href={`/projects/${project.id}`}
            id={`project-${project.id}-read-more`}
            aria-label={`Read more about ${project.name}`}
            className="
              inline-flex items-center gap-1.5
              text-xs font-medium
              transition-all motion-feedback-transition
              hover:opacity-100
            "
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              color: accentColor,
              opacity: 0.85,
            }}
          >
            Read More
            <ArrowRight size={13} aria-hidden="true" />
          </Link>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-${project.id}-github`}
            aria-label={`${project.name} GitHub repository (opens in new tab)`}
            className="
              inline-flex items-center gap-1.5
              text-xs font-medium
              transition-all motion-feedback-transition
              hover:opacity-100
            "
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              color: "var(--color-ink)",
              opacity: 0.52,
            }}
          >
            <GitHubIcon />
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              id={`project-${project.id}-live`}
              aria-label={`${project.name} live demo (opens in new tab)`}
              className="
                inline-flex items-center gap-1.5
                text-xs font-medium
                transition-all motion-feedback-transition
                hover:opacity-100
              "
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                color: accentColor,
                opacity: 0.72,
              }}
            >
              <ExternalLink size={13} aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );

  // Reduced motion: no animation wrapper
  if (shouldReduce) return card;

  return (
    <motion.div
      // WHY: one-time scroll reveal marks project cards as discrete work items
      // entering the dossier, not content that replays on every scroll pass.
      initial={{ opacity: 0, y: REVEAL_MD }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_REVEAL}
      transition={{
        duration: DURATION_REVEAL,
        delay: stagger(index, STAGGER_BASE),
        ease: EASE_DEVELOP,
      }}
      className="h-full"
    >
      {card}
    </motion.div>
  );
}

/* ─── Section component ──────────────────────────────────────────────────── */
export function FeaturedProjects() {
  const shouldReduce = useReducedMotion();

  return (
    <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">

      {/* Section header */}
      <div className="mb-12 sm:mb-16">
        {/* Eyebrow label — same typographic register as Hero eyebrow */}
        <p
          className="text-xs sm:text-sm uppercase tracking-[0.2em] mb-4"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            color: "var(--color-signal-gold)",
            opacity: 0.7,
          }}
        >
          Featured Work
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            color: "var(--color-ink)",
          }}
        >
          Projects
        </h2>
        <p
          className="mt-3 text-base sm:text-lg max-w-xl"
          style={{
            fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
            color: "var(--color-ink)",
            opacity: 0.55,
          }}
        >
          Production-grade AI systems, built end to end.
        </p>
      </div>

      {/* Project grid — 1 col on mobile, 2 col on sm+, intentional asymmetry at lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {FEATURED_PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            shouldReduce={shouldReduce}
          />
        ))}
      </div>

    </div>
  );
}
