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
 *
 * Content rules enforced here (prd.md Section 9 / FOUNDATION.md Content Rules):
 *   - No "passionate", "hardworking", "quick learner", "results-driven"
 *   - No proficiency bars, no fake metrics, no invented claims
 *   - Copy is verbatim from content/experience.ts which is verbatim from FOUNDATION.md
 *
 * Anchor: the section's id="experience" is stubbed in page.tsx for future nav.
 */

import { ScrollLinkedReveal } from "@/components/ScrollLinkedReveal";
import { EXPERIENCE, type ExperienceRole } from "@/content/experience";

function BulletItem({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  const className = "flex gap-3 text-sm sm:text-base leading-relaxed";
  const style = {
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    color: "var(--color-ink)",
    opacity: 0.65,
  };

  return (
    <li className={className} style={style}>
      <span
        aria-hidden="true"
        className="flex-shrink-0 mt-[0.45em] w-1 h-1 rounded-full"
        style={{ background: color, opacity: 0.7 }}
      />
      {children}
    </li>
  );
}

/* ─── Role card ─────────────────────────────────────────────────────────── */
function RoleCard({
  role,
  index,
}: {
  role: ExperienceRole;
  index: number;
}) {
  const isLast = index === EXPERIENCE.length - 1;

  const card = (
    <article
      className="relative"
      aria-label={`Experience: ${role.role} at ${role.company}`}
    >
      <div className="relative z-10">
        {/* Vertical timeline rail */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-signal-steel) 0%, transparent 100%)",
            opacity: "var(--timeline-opacity)",
          }}
        />

        {/* Timeline node dot */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-[1.75rem] w-2 h-2 rounded-full -translate-x-[3px]"
          style={{ background: "var(--color-signal-steel)" }}
        />

        {/* Card body — offset from timeline */}
        <div className={`pl-8 ${isLast ? "pb-0" : "pb-12 sm:pb-14 lg:pb-16"}`}>

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
              className="px-2.5 py-1 rounded text-[11px] uppercase tracking-wider border themed-chip"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--color-ink)",
                opacity: 0.55,
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
            {role.keyResponsibilities.map((item) => (
              <BulletItem
                key={item}
                color="var(--color-signal-steel)"
              >
                {item}
              </BulletItem>
            ))}
          </ul>
        </div>

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
            {role.whatILearned.map((item) => (
              <BulletItem
                key={item}
                color="var(--color-signal-gold)"
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
      </div>
    </article>
  );

  return card;
}

/* ─── Section component ─────────────────────────────────────────────────── */
export function Experience() {
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
          />
        ))}
      </div>

    </div>
  );

  return (
    <ScrollLinkedReveal sceneId="experience" distance={6}>
      {content}
    </ScrollLinkedReveal>
  );
}
