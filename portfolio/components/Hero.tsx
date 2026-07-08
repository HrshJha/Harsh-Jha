"use client";

/**
 * Hero — the site's thesis, not a banner.
 *
 * Layout intent (prd.md §5.1, rules.md §2):
 *   Signal Core leads — it opens the section, carries the visual boldness.
 *   Everything else is quiet and disciplined around it.
 *   Vertical composition: diagram → headline → hero statement → CTAs → social links.
 *   No dead space above the fold. The pipeline IS the opening statement.
 *
 * Copy — verbatim from FOUNDATION.md Part 1 (source of truth):
 *   Headline:     "Building AI Products, Open Source & Real-World Solutions"
 *   Hero stmt:    "Turning ideas into intelligent products through machine learning
 *                  and engineering."
 *   Primary CTA:  "View Projects" → /#projects (Featured Projects section, Part 3)
 *   Secondary CTA:"Resume"        → /resume (Part 6; graceful 404 until then)
 *   Social:       GitHub / LinkedIn / X — exact URLs from FOUNDATION.md Contact
 *
 * Signal Core is imported AS-IS from components/SignalCore.tsx — not patched here.
 * If it needs a fix, it goes back to the isolated route first (tech.md §6 process rule).
 */

import Link from "next/link";
import { SignalCore } from "@/components/SignalCore";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motion } from "motion/react";
import {
  DURATION_REVEAL,
  EASE_DEVELOP,
  REVEAL_MD,
  REVEAL_SM,
  STAGGER_LOOSE,
  stagger,
} from "@/lib/motion";

/* ─── Brand icon SVGs ────────────────────────────────────────────────────────
   lucide-react v1.23.0 does not include brand logos (GitHub, LinkedIn, X).
   Using precise SVG paths directly — brand icons should never be sourced from
   a utility icon library anyway. Sizes match the 18px used throughout.
   ───────────────────────────────────────────────────────────────────────────── */
function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.213 5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}



/* ─── Social links — verbatim from FOUNDATION.md Contact section ────────── */
const SOCIAL_LINKS = [
  {
    href: "https://github.com/HrshJha",
    label: "GitHub",
    Icon: GitHubIcon,
  },
  {
    href: "https://www.linkedin.com/in/hrshjha/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: "https://x.com/m_eharsh",
    label: "X (Twitter)",
    Icon: XIcon,
  },
] as const;

/* ─── Hero entrance sequence (MOTION_SYSTEM.md §4.2 / §4.6) ─────────────── */
// WHY: Signal Core starts first, then text resolves top-to-bottom so the
// message feels transmitted after the instrument comes alive.
const EYEBROW_DELAY = stagger(1, STAGGER_LOOSE);
const HEADLINE_DELAY = stagger(2, STAGGER_LOOSE);
const STATEMENT_DELAY = stagger(4, STAGGER_LOOSE);
const CTA_DELAY = stagger(5, STAGGER_LOOSE);
const SOCIAL_DELAY = stagger(6, STAGGER_LOOSE);

function RevealBlock({
  children,
  delay = 0,
  distance = REVEAL_MD,
  shouldReduce,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  distance?: number;
  shouldReduce: boolean;
  className?: string;
}) {
  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION_REVEAL, delay, ease: EASE_DEVELOP }}
    >
      {children}
    </motion.div>
  );
}

function LineReveal({
  children,
  delay,
  shouldReduce,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  shouldReduce: boolean;
  className?: string;
}) {
  if (shouldReduce) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span className="block overflow-hidden">
      <motion.span
        className={className}
        style={{ display: "block" }}
        initial={{ opacity: 0, y: REVEAL_SM, clipPath: "inset(0 0 100% 0)" }}
        animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: DURATION_REVEAL, delay, ease: EASE_DEVELOP }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* ─── Hero component ─────────────────────────────────────────────────────── */
export function Hero() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      aria-label="Hero — Harsh Kumar Jha portfolio introduction"
      className="
        relative w-full min-h-screen
        flex flex-col items-center justify-center
        px-6 sm:px-10 lg:px-16
        py-20 sm:py-24
        overflow-hidden
      "
    >
      {/*
        Atmospheric glow — sits behind everything.
        Functional reason: the dark surface should feel like "a darkened room
        with something glowing in it" (FOUNDATION.md Part 5).
        Two subtle radial gradients anchored at the top-center (steel) and
        bottom-right (rust) — directional light, not flat fill.
        CSS radial-gradient + filter: blur(), no shader library (tech.md §8).
      */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Steel glow — top-center, input stage warmth */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, var(--color-signal-steel) 0%, transparent 70%)",
            opacity: 0.06,
            filter: "blur(60px)",
          }}
        />
        {/* Rust glow — bottom-right, output stage warmth */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[350px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, var(--color-signal-rust) 0%, transparent 70%)",
            opacity: 0.05,
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* ── Content column ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-0">

        {/*
          Eyebrow label — JetBrains Mono, small uppercase.
          Functional reason: grounds Signal Core in its narrative context before
          the user reads it. Sets register as "instrumentation readout."
        */}
        <RevealBlock
          delay={EYEBROW_DELAY}
          distance={REVEAL_SM}
          shouldReduce={shouldReduce}
          className="w-full text-center mb-8 sm:mb-10"
        >
          <p
            className="text-xs sm:text-sm uppercase tracking-[0.2em]"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "var(--color-signal-steel)",
              opacity: 0.75,
            }}
          >
            AI Signal Pipeline
          </p>
        </RevealBlock>

        {/*
          Signal Core — the opening visual statement.
          Pulled in AS-IS per the process rule (tech.md §6 / rules.md §3):
          "built and verified in isolation before being wired into the Hero."
          No internals touched here. If it breaks in this layout context,
          the fix goes back to /dev/signal-core first.
        */}
        <div className="w-full">
          <SignalCore />
        </div>

        {/* Deliberate vertical gap — creates rhythm between diagram and text */}
        <div className="h-12 sm:h-16" />

        {/*
          Headline — Fraunces display, large scale.
          Verbatim from FOUNDATION.md Part 1 Professional Headline.
          Never softened, strengthened, or paraphrased.
        */}
        <div className="w-full text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight"
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              color: "var(--color-ink)",
            }}
          >
            <LineReveal delay={HEADLINE_DELAY} shouldReduce={shouldReduce}>
              Building AI Products,
            </LineReveal>
            <LineReveal
              delay={HEADLINE_DELAY + STAGGER_LOOSE}
              shouldReduce={shouldReduce}
            >
              Open Source &amp;{" "}
              <span style={{ color: "var(--color-signal-gold)" }}>
                Real-World Solutions
              </span>
            </LineReveal>
          </h1>
        </div>

        <div className="h-5 sm:h-6" />

        {/*
          Hero statement — Geist Sans body, quieter than headline.
          Verbatim from FOUNDATION.md Part 1 Hero Statement.
        */}
        <div className="w-full text-center max-w-2xl mx-auto">
          <p
            className="text-lg sm:text-xl leading-relaxed"
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              color: "var(--color-ink)",
              opacity: 0.72,
            }}
          >
            <LineReveal delay={STATEMENT_DELAY} shouldReduce={shouldReduce}>
              Turning ideas into intelligent products through machine learning
              and engineering.
            </LineReveal>
          </p>
        </div>

        <div className="h-8 sm:h-10" />

        {/*
          CTAs — Primary: View Projects, Secondary: Resume
          Per FOUNDATION.md Part 2 Hero and prd.md §5.1.
          View Projects → /#projects (Featured Projects section, Part 3 will anchor this)
          Resume → /resume (Part 6 — currently a graceful 404; noted in DECISIONS.md)
        */}
        <RevealBlock
          delay={CTA_DELAY}
          shouldReduce={shouldReduce}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
        >
          {/* Primary CTA */}
          <Link
            href="/#projects"
            id="hero-cta-view-projects"
            className="
              inline-flex items-center justify-center
              px-7 py-3.5
              rounded-full
              text-sm font-medium tracking-wide
              hover:opacity-90
              press-scale-control
            "
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              background: "var(--color-signal-gold)",
              color: "var(--color-ink-light)",
            }}
          >
            View Projects
          </Link>

          {/*
            Secondary CTA — Resume.
            /resume route does not exist until Part 6.
            Per DECISIONS.md: "graceful 404 until Part 6 lands."
            Using an anchor tag with /resume — Next.js will serve the 404 page,
            which is clean (no crash, no broken link indicator in the browser).
          */}
          <Link
            href="/resume"
            id="hero-cta-resume"
            className="
              inline-flex items-center justify-center
              px-7 py-3.5
              rounded-full
              text-sm font-medium tracking-wide
              border
              hover:opacity-80
              press-scale-control
            "
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              borderColor: "var(--color-ink)",
              color: "var(--color-ink)",
              opacity: 0.85,
            }}
          >
            Resume
          </Link>
        </RevealBlock>

        <div className="h-7 sm:h-8" />

        {/*
          Social links — GitHub / LinkedIn / X
          Verbatim URLs from FOUNDATION.md Contact section.
          Icon-only with sr-only labels for accessibility.
        */}
        <RevealBlock
          delay={SOCIAL_DELAY}
          shouldReduce={shouldReduce}
          className="flex items-center gap-5"
        >
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              id={`hero-social-${label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in new tab)`}
              className="
                inline-flex items-center justify-center
                w-10 h-10 rounded-full
                transition-all motion-feedback-transition
                hover:opacity-100
              "
              style={{
                color: "var(--color-ink)",
                opacity: 0.5,
                border: "1px solid color-mix(in srgb, var(--color-ink) 25%, transparent)",
              }}
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </RevealBlock>

      </div>
    </section>
  );
}
