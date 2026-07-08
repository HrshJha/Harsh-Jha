import Link from "next/link";

/**
 * /resume — Resume route
 *
 * [OPEN] — Resume PDF not yet supplied by Harsh Kumar Jha.
 * Per DECISIONS.md seed default and rules.md Section 1:
 *   "Do not fabricate placeholder resume content."
 *   "If a required fact is missing, mark it [OPEN] in code/comments and stop."
 *
 * This route renders a structurally ready empty state — not a broken link,
 * not fabricated content. When Harsh supplies the PDF, replace this route with:
 *   Option A: embed the PDF via <iframe src="/resume.pdf" /> (drop resume.pdf
 *             in the /public folder, no code changes needed beyond this file)
 *   Option B: redirect to a hosted PDF URL via Next.js redirect in next.config.ts
 *   Option C: render a designed resume page using content/about.ts + content/experience.ts
 *
 * The Hero's Resume CTA (Part 2) now correctly resolves here instead of a 404.
 *
 * Metadata: noindex — resume route should not appear in search results until
 * the actual resume content is present.
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Harsh Kumar Jha",
  description: "Resume of Harsh Kumar Jha, AI/ML Engineer & Product Builder.",
  robots: {
    index: false, // [OPEN] — do not index until resume content is present
    follow: true,
  },
};

export default function ResumePage() {
  return (
    /*
     * [OPEN] — Resume PDF not yet supplied.
     * This is a clean empty state, not placeholder content.
     * Do not add invented achievements, skills, or experience here.
     * When the PDF is ready, replace this entire return block.
     */
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">

      {/* Status signal — rust color = "needs action / pending" (Signal Core stage 3) */}
      <div
        className="mb-6 text-[10px] uppercase tracking-[0.25em]"
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          color: "var(--color-signal-rust)",
          opacity: 0.7,
        }}
      >
        [OPEN] — Not yet available
      </div>

      <h1
        className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight"
        style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          color: "var(--color-ink)",
        }}
      >
        Resume
      </h1>

      <p
        className="text-base sm:text-lg max-w-md leading-relaxed mb-8"
        style={{
          fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
          color: "var(--color-ink)",
          opacity: 0.55,
        }}
      >
        The resume PDF hasn&apos;t been uploaded yet. Check back soon, or reach
        out directly via the contact links below.
      </p>

      {/* CTA back to contact */}
      <Link
        href="/#contact"
        id="resume-contact-cta"
        aria-label="Go to Contact section"
        className="
          inline-flex items-center gap-2
          px-5 py-2.5 rounded-full
          border
          text-sm uppercase tracking-[0.12em]
          transition-all motion-feedback-transition
          hover:opacity-100
        "
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          borderColor: "var(--line-strong)",
          color: "var(--color-signal-steel)",
          opacity: 0.75,
          background: "var(--chip-steel-surface)",
          boxShadow: "var(--panel-shadow)",
        }}
      >
        Contact
      </Link>
    </div>
  );
}
