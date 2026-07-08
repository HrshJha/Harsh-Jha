"use client";

/**
 * Experience.tsx — Full experience section.
 *
 * Data source: content/experience.ts (typed, verbatim from FOUNDATION.md Part 3).
 * This component is purely presentational — all content lives in the data file.
 *
 * Design intent (FOUNDATION.md Part 5, prd.md §5.3):
 *   Experience is the proof layer — it reads as a technical dossier, not a
 *   promotional résumé. Typography is subdued relative to the projects section;
 *   Fraunces for company names, JetBrains Mono for metadata/labels, Geist for body.
 *   The Signal Core rust color (resolved/output stage) marks the "key project" link —
 *   tying experience directly to the work product it produced.
 *
 * Content rules enforced here (prd.md Section 9 / FOUNDATION.md Content Rules):
 *   - No "passionate", "hardworking", "quick learner", "results-driven"
 *   - No proficiency bars, no fake metrics, no invented claims
 *   - Copy is verbatim from content/experience.ts which is verbatim from FOUNDATION.md
 *
 * Anchor: the section's id="experience" is stubbed in page.tsx for future nav.
 */

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { EXPERIENCE, type ExperienceRole } from "@/content/experience";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  DURATION_REVEAL,
  EASE_DEVELOP,
  REVEAL_LG,
  REVEAL_MD,
  REVEAL_SM,
  STAGGER_BASE,
  STAGGER_TIGHT,
  VIEWPORT_REVEAL,
  stagger,
} from "@/lib/motion";

function ScrollReveal({
  children,
  delay = 0,
  distance = REVEAL_MD,
  shouldReduce,
}: {
  children: React.ReactNode;
  delay?: number;
  distance?: number;
  shouldReduce: boolean;
}) {
  if (shouldReduce) return <>{children}</>;

  return (
    <motion.div
      // WHY: scroll reveal lets the technical record resolve as the reader
      // reaches it, using the same develop timing across section content.
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_REVEAL}
      transition={{ duration: DURATION_REVEAL, delay, ease: EASE_DEVELOP }}
    >
      {children}
    </motion.div>
  );
}

function BulletItem({
  children,
  index,
  color,
  shouldReduce,
}: {
  children: React.ReactNode;
  index: number;
  color: string;
  shouldReduce: boolean;
}) {
  const content = (
    <>
      <span
        aria-hidden="true"
        className="flex-shrink-0 mt-[0.45em] w-1 h-1 rounded-full"
        style={{ background: color, opacity: 0.7 }}
      />
      {children}
    </>
  );

  const className = "flex gap-3 text-sm sm:text-base leading-relaxed";
  const style = {
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    color: "var(--color-ink)",
    opacity: 0.65,
  };

  if (shouldReduce) {
    return (
      <li className={className} style={style}>
        {content}
      </li>
    );
  }

  return (
    <motion.li
      // WHY: only true list items stagger here; dense paragraphs stay still.
      initial={{ opacity: 0, y: REVEAL_SM }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_REVEAL}
      transition={{
        duration: DURATION_REVEAL,
        delay: stagger(index, STAGGER_TIGHT),
        ease: EASE_DEVELOP,
      }}
      className={className}
      style={style}
    >
      {content}
    </motion.li>
  );
}

/* ─── Role card ─────────────────────────────────────────────────────────── */
function RoleCard({
  role,
  index,
  shouldReduce,
}: {
  role: ExperienceRole;
  index: number;
  shouldReduce: boolean;
}) {
  const card = (
    <article
      className="relative"
      aria-label={`Experience: ${role.role} at ${role.company}`}
    >
      {/* Vertical timeline rail */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-signal-steel) 0%, transparent 100%)",
          opacity: 0.25,
        }}
      />

      {/* Timeline node dot */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-[1.75rem] w-2 h-2 rounded-full -translate-x-[3px]"
        style={{ background: "var(--color-signal-steel)" }}
      />

      {/* Card body — offset from timeline */}
      <div className="pl-8 pb-16 last:pb-0">

        {/* ── Header ── */}
        <div className="mb-5">
          {/* Index + employment type row */}
          <div className="flex items-center gap-3 mb-2">
            <span
              className="text-[10px] uppercase tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--color-signal-steel)",
                opacity: 0.6,
              }}
            >
              0{index + 1} / {role.employmentType}
            </span>
          </div>

          {/* Company name */}
          <h3
            className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight mb-1"
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              color: "var(--color-ink)",
            }}
          >
            {role.company}
          </h3>

          {/* Role title */}
          <p
            className="text-sm sm:text-base"
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              color: "var(--color-ink)",
              opacity: 0.6,
            }}
          >
            {role.role}
          </p>
        </div>

        {/* ── Tech stack chips ── */}
        <div className="flex flex-wrap gap-2 mb-6">
          {role.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded text-[11px] uppercase tracking-wider border border-white/[0.08]"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--color-ink)",
                opacity: 0.55,
                background: "rgba(255,255,255,0.04)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ── About the Role ── */}
        {/*
          Verbatim from FOUNDATION.md Part 3. Do not edit this text without
          first updating FOUNDATION.md. prd.md Section 8: "All content comes
          from FOUNDATION.md. Never infer, estimate, or invent."
        */}
        <div className="mb-6">
          <h4
            className="text-[11px] uppercase tracking-[0.15em] mb-2"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "var(--color-signal-gold)",
              opacity: 0.7,
            }}
          >
            About the Role
          </h4>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              color: "var(--color-ink)",
              opacity: 0.65,
            }}
          >
            {role.aboutTheRole}
          </p>
        </div>

        {/* ── Key Responsibilities ── */}
        {/*
          Verbatim from FOUNDATION.md Part 3. List items are the exact bullet
          points from the source document — no paraphrasing, no additions.
        */}
        <div className="mb-6">
          <h4
            className="text-[11px] uppercase tracking-[0.15em] mb-3"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "var(--color-signal-gold)",
              opacity: 0.7,
            }}
          >
            Key Responsibilities
          </h4>
          <ul className="space-y-2">
            {role.keyResponsibilities.map((item, i) => (
              <BulletItem
                key={i}
                index={i}
                color="var(--color-signal-steel)"
                shouldReduce={shouldReduce}
              >
                {item}
              </BulletItem>
            ))}
          </ul>
        </div>

        {/* ── Key Project (conditional — only DomAIyn Labs has one) ── */}
        {role.keyProject && (
          <div className="mb-6">
            <h4
              className="text-[11px] uppercase tracking-[0.15em] mb-2"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--color-signal-gold)",
                opacity: 0.7,
              }}
            >
              Key Project
            </h4>
            <a
              href={role.keyProject.url}
              target="_blank"
              rel="noopener noreferrer"
              id={`experience-${role.id}-key-project`}
              aria-label={`${role.keyProject.name} — project detail (opens in new tab)`}
              className="
                inline-flex items-center gap-2
                text-sm font-medium
                transition-opacity motion-feedback-transition
                hover:opacity-100
              "
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                color: "var(--color-signal-rust)",
                opacity: 0.85,
              }}
            >
              <ExternalLink size={13} aria-hidden="true" />
              {role.keyProject.name}
            </a>
          </div>
        )}

        {/* ── What I Learned ── */}
        {/*
          Verbatim from FOUNDATION.md Part 3. Each item is the exact text —
          no synonym swaps, no added context.
        */}
        <div className="mb-6">
          <h4
            className="text-[11px] uppercase tracking-[0.15em] mb-3"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "var(--color-signal-gold)",
              opacity: 0.7,
            }}
          >
            What I Learned
          </h4>
          <ul className="space-y-2">
            {role.whatILearned.map((item, i) => (
              <BulletItem
                key={i}
                index={i}
                color="var(--color-signal-gold)"
                shouldReduce={shouldReduce}
              >
                {item}
              </BulletItem>
            ))}
          </ul>
        </div>

        {/* ── Impact ── */}
        {/*
          Verbatim from FOUNDATION.md Part 3. One sentence, exactly as written.
        */}
        <div>
          <h4
            className="text-[11px] uppercase tracking-[0.15em] mb-2"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "var(--color-signal-gold)",
              opacity: 0.7,
            }}
          >
            Impact
          </h4>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              color: "var(--color-ink)",
              opacity: 0.65,
            }}
          >
            {role.impact}
          </p>
        </div>

      </div>
    </article>
  );

  return (
    <ScrollReveal
      delay={stagger(index, STAGGER_BASE)}
      distance={REVEAL_MD}
      shouldReduce={shouldReduce}
    >
      {card}
    </ScrollReveal>
  );
}

/* ─── Section component ─────────────────────────────────────────────────── */
export function Experience() {
  const shouldReduce = useReducedMotion();

  const content = (
    <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">

      {/* Section header */}
      <div className="mb-14 sm:mb-16">
        <p
          className="text-xs sm:text-sm uppercase tracking-[0.2em] mb-4"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            color: "var(--color-signal-steel)",
            opacity: 0.7,
          }}
        >
          Professional Record
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            color: "var(--color-ink)",
          }}
        >
          Experience
        </h2>
      </div>

      {/* Timeline — single column, left rail */}
      <div className="relative pl-4">
        {EXPERIENCE.map((role, index) => (
          <RoleCard
            key={role.id}
            role={role}
            index={index}
            shouldReduce={shouldReduce}
          />
        ))}
      </div>

    </div>
  );

  return (
    <ScrollReveal distance={REVEAL_LG} shouldReduce={shouldReduce}>
      {content}
    </ScrollReveal>
  );
}
