"use client";

/**
 * AboutSkillsEducation.tsx — About, Skills, and Education sections.
 *
 * Three sections combined in one component file (logged as DEFAULT in DECISIONS.md):
 * they share a data source (content/about.ts), are all intentionally small/compact,
 * and appear consecutively in the Recruiter Journey. Splitting them into 3 separate
 * components would be premature abstraction at this content volume.
 *
 * Data source: content/about.ts — verbatim from FOUNDATION.md Parts 1 & 3.
 * This component is purely presentational.
 *
 * Design intent (prd.md §5.4, rules.md §2):
 *   About ranks VISUALLY BELOW Projects and Experience. It is NOT a biography page.
 *   Heading size is intentionally smaller than Projects/Experience headings (3xl vs 4xl-5xl).
 *   Content stays minimal — identity signal, not narrative sprawl.
 *
 * Rules enforced:
 *   - No numbered markers (rules.md §2 — not a genuine ordered sequence)
 *   - No skill percentage bars (rules.md §1, prd.md §5.5 — banned outright)
 *   - No banned words anywhere (rules.md §1)
 *   - No colors outside the token set (rules.md §2)
 *
 * Anchor IDs present: #about, #skills, #education — for future nav (Part 6).
 */

import { motion } from "motion/react";
import { ABOUT, SKILLS, EDUCATION } from "@/content/about";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  DURATION_REVEAL,
  EASE_DEVELOP,
  REVEAL_LG,
  REVEAL_MD,
  STAGGER_BASE,
  STAGGER_TIGHT,
  VIEWPORT_REVEAL,
  stagger,
} from "@/lib/motion";

/* ─── Shared fade wrapper ───────────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  shouldReduce,
}: {
  children: React.ReactNode;
  delay?: number;
  shouldReduce: boolean;
}) {
  if (shouldReduce) return <>{children}</>;
  return (
    <motion.div
      // WHY: inner blocks use the standard reveal distance; paragraphs are
      // revealed as blocks, not word-by-word.
      initial={{ opacity: 0, y: REVEAL_MD }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_REVEAL}
      transition={{ duration: DURATION_REVEAL, delay, ease: EASE_DEVELOP }}
    >
      {children}
    </motion.div>
  );
}

function SkillChip({
  item,
  index,
  shouldReduce,
}: {
  item: string;
  index: number;
  shouldReduce: boolean;
}) {
  const className = "px-2.5 py-1 rounded text-xs border border-white/[0.08]";
  const style = {
    fontFamily: "var(--font-jetbrains-mono), monospace",
    color: "var(--color-ink)",
    opacity: 0.65,
    background: "rgba(255,255,255,0.04)",
  };

  if (shouldReduce) {
    return (
      <span className={className} style={style}>
        {item}
      </span>
    );
  }

  return (
    <motion.span
      // WHY: skill chips are discrete scan targets, so they use tight stagger.
      initial={{ opacity: 0, y: REVEAL_MD }}
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
      {item}
    </motion.span>
  );
}

/* ─── Section wrapper ────────────────────────────────────────────────────── */
// Shared layout shell for About, Skills, Education — keeps vertical rhythm consistent.
function SectionShell({
  id,
  eyebrow,
  heading,
  children,
  shouldReduce,
}: {
  id: string;
  eyebrow: string;
  heading: string;
  children: React.ReactNode;
  shouldReduce: boolean;
}) {
  const content = (
    <div id={id} className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
      {/* Section header — intentionally smaller than Projects/Experience (prd.md §5.4) */}
      <div className="mb-10 sm:mb-12">
        <p
          className="text-[11px] sm:text-xs uppercase tracking-[0.2em] mb-3"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            color: "var(--color-signal-steel)",
            opacity: 0.6,
          }}
        >
          {eyebrow}
        </p>
        <h2
          className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            color: "var(--color-ink)",
          }}
        >
          {heading}
        </h2>
      </div>
      {children}
    </div>
  );

  if (shouldReduce) return content;

  return (
    <motion.div
      // WHY: these compact sections resolve at section level first, then
      // their discrete blocks use the shared inner reveal below.
      initial={{ opacity: 0, y: REVEAL_LG }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_REVEAL}
      transition={{ duration: DURATION_REVEAL, ease: EASE_DEVELOP }}
    >
      {content}
    </motion.div>
  );
}

/* ─── About section ─────────────────────────────────────────────────────── */
/*
 * Intentionally short (prd.md §5.4). Ranked below Projects and Experience.
 * Shows: identity row, core message, vision, philosophy pairs, values tags.
 * Nothing added beyond what FOUNDATION.md Part 1 states.
 */
function AboutSection({ shouldReduce }: { shouldReduce: boolean }) {
  return (
    <SectionShell
      id="about"
      eyebrow="Who I Am"
      heading="About"
      shouldReduce={shouldReduce}
    >
      <div className="space-y-8 sm:space-y-10">

        {/* Identity row — compact, de-emphasized */}
        <FadeIn shouldReduce={shouldReduce}>
          <div
            className="flex flex-wrap gap-x-6 gap-y-1 text-sm"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "var(--color-ink)",
              opacity: 0.45,
            }}
          >
            <span>{ABOUT.institutionShort} / {ABOUT.degree}</span>
            <span>CGPA {ABOUT.cgpa}</span>
            <span>Graduating {ABOUT.graduation}</span>
          </div>
        </FadeIn>

        {/* Core message — verbatim from FOUNDATION.md Part 1 line 50 */}
        <FadeIn delay={stagger(1, STAGGER_BASE)} shouldReduce={shouldReduce}>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl"
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              color: "var(--color-ink)",
              opacity: 0.85,
            }}
          >
            {ABOUT.coreMessage}
          </p>
        </FadeIn>

        {/* Vision block */}
        <FadeIn delay={stagger(2, STAGGER_BASE)} shouldReduce={shouldReduce}>
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.15em] mb-3"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--color-signal-gold)",
                opacity: 0.65,
              }}
            >
              Vision
            </p>
            {/* Primary + Secondary goal */}
            <div className="flex flex-wrap gap-4 mb-4">
              {[
                { label: "Primary", value: ABOUT.vision.primary },
                { label: "Secondary", value: ABOUT.vision.secondary },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span
                    className="text-[10px] uppercase tracking-wider"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      color: "var(--color-ink)",
                      opacity: 0.35,
                    }}
                  >
                    {label}
                  </span>
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                      color: "var(--color-ink)",
                      opacity: 0.7,
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
            {/* Focus areas */}
            <div className="flex flex-wrap gap-2">
              {ABOUT.vision.focusAreas.map((area) => (
                <span
                  key={area}
                  className="px-2.5 py-1 rounded text-[11px] border border-white/[0.07]"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    color: "var(--color-signal-steel)",
                    background: "rgba(92,122,153,0.08)",
                    opacity: 0.85,
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Engineering philosophy — displayed as "X over Y" pairs */}
        {/*
          Verbatim from FOUNDATION.md Part 1 lines 71–78.
          "Products over isolated models" etc — the "over" is the exact wording.
          Displayed as contrast pairs to preserve the intent of the original list.
        */}
        <FadeIn delay={stagger(3, STAGGER_BASE)} shouldReduce={shouldReduce}>
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.15em] mb-4"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--color-signal-gold)",
                opacity: 0.65,
              }}
            >
              Engineering Philosophy
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ABOUT.philosophy.map(({ over, under }) => (
                <div
                  key={over}
                  className="flex flex-col gap-0.5 px-3 py-2.5 rounded border border-white/[0.06]"
                  style={{ background: "rgba(255,255,255,0.025)" }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{
                      fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                      color: "var(--color-ink)",
                      opacity: 0.85,
                    }}
                  >
                    {over}
                  </span>
                  <span
                    className="text-[11px]"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      color: "var(--color-ink)",
                      opacity: 0.35,
                    }}
                  >
                    over {under}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Core values — plain tags, verbatim from FOUNDATION.md Part 1 lines 82–91 */}
        <FadeIn delay={stagger(4, STAGGER_BASE)} shouldReduce={shouldReduce}>
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.15em] mb-3"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--color-signal-gold)",
                opacity: 0.65,
              }}
            >
              Values
            </p>
            <div className="flex flex-wrap gap-2">
              {ABOUT.values.map((value) => (
                <span
                  key={value}
                  className="px-3 py-1.5 rounded-full text-xs border border-white/[0.08]"
                  style={{
                    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                    color: "var(--color-ink)",
                    opacity: 0.55,
                    background: "rgba(255,255,255,0.035)",
                  }}
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}

/* ─── Skills section ─────────────────────────────────────────────────────── */
/*
 * Four groups, exact items, exact order — verbatim from FOUNDATION.md Part 3.
 * NO bars, NO percentages, NO proficiency indicators of any kind.
 * Source: rules.md §1, prd.md §5.5 — "banned outright."
 */
function SkillsSection({ shouldReduce }: { shouldReduce: boolean }) {
  return (
    <SectionShell
      id="skills"
      eyebrow="Capabilities"
      heading="Skills"
      shouldReduce={shouldReduce}
    >
      {/*
        Display: plain grouped tag lists. No bars. No percentage numbers. No star ratings.
        BANNED: skill percentage bars, proficiency ratings, progress indicators.
        (rules.md §1, prd.md §5.5)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {SKILLS.map((group, index) => (
          <FadeIn
            key={group.group}
            delay={stagger(index, STAGGER_BASE)}
            shouldReduce={shouldReduce}
          >
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.2em] mb-3"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  color: "var(--color-signal-gold)",
                  opacity: 0.65,
                }}
              >
                {group.group}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, itemIndex) => (
                  <SkillChip
                    key={item}
                    item={item}
                    index={itemIndex}
                    shouldReduce={shouldReduce}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}

/* ─── Education section ──────────────────────────────────────────────────── */
/*
 * Verbatim from FOUNDATION.md Part 3 lines 270–274 and Part 1 line 37.
 * Simple and dignified — no fabricated achievements, no invented honors.
 */
function EducationSection({ shouldReduce }: { shouldReduce: boolean }) {
  return (
    <SectionShell
      id="education"
      eyebrow="Academic Background"
      heading="Education"
      shouldReduce={shouldReduce}
    >
      <FadeIn shouldReduce={shouldReduce}>
        {/*
          Verbatim: MSIT, B.Tech Electronics & Communication Engineering,
          CGPA 8.59, graduating 2029.
          (FOUNDATION.md Part 3 lines 270–274, Part 1 line 37)
        */}
        <div
          className="
            flex flex-col sm:flex-row sm:items-start gap-6
            px-6 py-6 rounded-xl border border-white/[0.07]
          "
          style={{ background: "rgba(255,255,255,0.025)" }}
        >
          {/* Institution + degree */}
          <div className="flex-1">
            <div
              className="text-[11px] uppercase tracking-[0.2em] mb-2"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--color-signal-steel)",
                opacity: 0.55,
              }}
            >
              {EDUCATION.institutionShort}
            </div>
            <h3
              className="text-lg sm:text-xl font-semibold leading-snug mb-1"
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                color: "var(--color-ink)",
              }}
            >
              {EDUCATION.degree}
            </h3>
            <p
              className="text-sm"
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                color: "var(--color-ink)",
                opacity: 0.45,
              }}
            >
              {EDUCATION.institutionFull}
            </p>
          </div>

          {/* Stats — CGPA + graduation year */}
          <div className="flex sm:flex-col gap-6 sm:gap-4 sm:text-right">
            <div>
              <div
                className="text-[10px] uppercase tracking-wider mb-0.5"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  color: "var(--color-ink)",
                  opacity: 0.35,
                }}
              >
                CGPA
              </div>
              <div
                className="text-xl font-semibold"
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  color: "var(--color-signal-gold)",
                }}
              >
                {EDUCATION.cgpa}
              </div>
            </div>
            <div>
              <div
                className="text-[10px] uppercase tracking-wider mb-0.5"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  color: "var(--color-ink)",
                  opacity: 0.35,
                }}
              >
                Graduating
              </div>
              <div
                className="text-xl font-semibold"
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  color: "var(--color-ink)",
                  opacity: 0.8,
                }}
              >
                {EDUCATION.graduation}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}

/* ─── Combined export ────────────────────────────────────────────────────── */
/*
 * DEFAULT (logged in DECISIONS.md Part 5):
 *   All three sections exported as a single component file rather than three
 *   separate files. Rationale: they share a data source (content/about.ts),
 *   are all compact in content volume, and appear consecutively in the Recruiter
 *   Journey. Separate wiring is preserved via individual section id anchors
 *   (#about, #skills, #education) for Part 6 nav.
 */
export function AboutSkillsEducation() {
  const shouldReduce = useReducedMotion();
  return (
    <>
      <AboutSection shouldReduce={shouldReduce} />
      <SkillsSection shouldReduce={shouldReduce} />
      <EducationSection shouldReduce={shouldReduce} />
    </>
  );
}
