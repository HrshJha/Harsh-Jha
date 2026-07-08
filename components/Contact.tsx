"use client";

/**
 * Contact.tsx — Contact section.
 *
 * Spec (EXECUTION_PARTS.md Part 6, DECISIONS.md seed default):
 *   "Mailto link + social icons only — no contact form, no form backend."
 *
 * Content verbatim from FOUNDATION.md Contact section (lines 383–395):
 *   Email:    jhaharsh451@gmail.com
 *   GitHub:   https://github.com/HrshJha
 *   LinkedIn: https://www.linkedin.com/in/hrshjha/
 *   X:        https://x.com/m_eharsh
 *
 * Icons: same inline SVG approach as Hero.tsx (Part 2) — lucide-react v1.23.0
 * does not export brand icons. Brand icons require exact official paths.
 * (See DECISIONS.md Part 2 for full rationale.)
 *
 * Anchor: id="contact" — target of Nav "Contact" link and Resume page CTA.
 */

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  DURATION_REVEAL,
  EASE_DEVELOP,
  REVEAL_LG,
  VIEWPORT_REVEAL,
} from "@/lib/motion";

/* ─── Contact data — verbatim from FOUNDATION.md Contact section ─────────── */
const CONTACT = {
  email: "jhaharsh451@gmail.com",
  socials: [
    {
      id: "contact-github",
      label: "GitHub",
      href: "https://github.com/HrshJha",
      // GitHub Octicon mark-github path — official SVG
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          width={20}
          height={20}
          aria-hidden="true"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      id: "contact-linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hrshjha/",
      // LinkedIn official logo path
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          width={20}
          height={20}
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      id: "contact-x",
      label: "X (Twitter)",
      href: "https://x.com/m_eharsh",
      // X (Twitter) official logo path
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          width={20}
          height={20}
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ],
} as const;

/* ─── Component ─────────────────────────────────────────────────────────────── */
export function Contact() {
  const shouldReduce = useReducedMotion();

  const content = (
    <div
      id="contact"
      className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20"
    >
      {/* Section header */}
      <div className="mb-10">
        <p
          className="text-[11px] sm:text-xs uppercase tracking-[0.2em] mb-3"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            color: "var(--color-signal-steel)",
            opacity: 0.6,
          }}
        >
          Get in Touch
        </p>
        <h2
          className="text-2xl sm:text-3xl font-bold tracking-tight"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            color: "var(--color-ink)",
          }}
        >
          Contact
        </h2>
      </div>

      {/* Email — primary contact method */}
      {/*
        Verbatim from FOUNDATION.md Contact: jhaharsh451@gmail.com
        No contact form, no form backend — DECISIONS.md seed default.
      */}
      <div className="mb-8">
        <p
          className="text-[11px] uppercase tracking-[0.15em] mb-2"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            color: "var(--color-signal-gold)",
            opacity: 0.65,
          }}
        >
          Email
        </p>
        <a
          href={`mailto:${CONTACT.email}`}
          id="contact-email"
          aria-label={`Send email to ${CONTACT.email}`}
          className="
            inline-flex items-center gap-2
            text-base sm:text-lg
            transition-opacity motion-feedback-transition
            hover:opacity-100
          "
          style={{
            fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
            color: "var(--color-signal-rust)",
            opacity: 0.85,
          }}
        >
          {CONTACT.email}
        </a>
      </div>

      {/* Social links — icon + label, no form */}
      {/*
        Icons: inline SVG — lucide-react does not export brand icons (DECISIONS.md Part 2).
        URLs verbatim from FOUNDATION.md Contact section.
      */}
      <div>
        <p
          className="text-[11px] uppercase tracking-[0.15em] mb-4"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            color: "var(--color-signal-gold)",
            opacity: 0.65,
          }}
        >
          Socials
        </p>
        <div className="flex flex-wrap gap-4">
          {CONTACT.socials.map((social) => (
            <a
              key={social.id}
              id={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} profile (opens in new tab)`}
              className="
                flex items-center gap-2.5
                px-4 py-2.5 rounded-lg
                border themed-panel
                text-sm
                transition-all motion-feedback-transition
                hover:opacity-100
              "
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                color: "var(--color-ink)",
                opacity: 0.6,
              }}
            >
              {social.icon}
              <span>{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  if (shouldReduce) return content;

  return (
    <motion.div
      // WHY: Contact is the final section in the journey, so it resolves once
      // when reached rather than replaying on scroll.
      initial={{ opacity: 0, y: REVEAL_LG }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_REVEAL}
      transition={{ duration: DURATION_REVEAL, ease: EASE_DEVELOP }}
    >
      {content}
    </motion.div>
  );
}
