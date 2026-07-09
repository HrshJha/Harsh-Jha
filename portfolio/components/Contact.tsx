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

import { ScrollLinkedReveal } from "@/components/ScrollLinkedReveal";

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
  const content = (
    <div
      id="contact"
      data-atmosphere-scene="contact"
      className="relative isolate w-full overflow-hidden"
    >
      <div className="relative z-10 mx-auto flex min-h-[78vh] w-full max-w-5xl flex-col justify-between px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.72fr)] lg:items-stretch">
          <div className="flex min-w-0 flex-col justify-between rounded-xl border themed-static-panel px-5 py-5 sm:px-6 sm:py-6">
            <div>
              <p
                className="mb-3 text-[11px] uppercase tracking-[0.2em] sm:text-xs"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  color: "var(--color-signal-steel)",
                  opacity: 0.6,
                }}
              >
                Get in Touch
              </p>
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  color: "var(--color-ink)",
                }}
              >
                Contact
              </h2>
            </div>

            <div className="mt-8">
              <p
                className="mb-2 text-[11px] uppercase tracking-[0.15em]"
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
                  inline-flex max-w-full items-center gap-2 break-all
                  text-xl leading-tight sm:text-2xl lg:text-3xl
                  transition-opacity motion-feedback-transition
                  hover:opacity-100
                "
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  color: "var(--color-signal-rust)",
                  opacity: 0.9,
                }}
              >
                {CONTACT.email}
              </a>

              <div className="mt-5">
                <a
                  href={`mailto:${CONTACT.email}`}
                  id="contact-send-email"
                  className="
                    premium-action inline-flex items-center justify-center rounded-full border px-4 py-2.5
                    text-sm font-medium
                  "
                  style={{
                    borderColor: "var(--line-accent)",
                    color: "var(--color-ink)",
                    background: "var(--panel-muted)",
                    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                  }}
                >
                  Send Email
                  <span aria-hidden="true" className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>

          <aside className="rounded-xl border themed-static-panel px-5 py-5 sm:px-6 sm:py-6">
            <p
              className="mb-4 text-[11px] uppercase tracking-[0.15em]"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--color-signal-gold)",
                opacity: 0.65,
              }}
            >
              Socials
            </p>
            <div className="grid gap-2.5">
              {CONTACT.socials.map((social) => (
                <a
                  key={social.id}
                  id={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} profile (opens in new tab)`}
                  className="
                    group flex items-center justify-between gap-4 rounded-lg border themed-panel
                    px-4 py-3 text-sm premium-action
                  "
                  style={{
                    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                    color: "var(--color-ink)",
                    opacity: 0.68,
                  }}
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    {social.icon}
                    <span className="truncate">{social.label}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-xs opacity-40 transition-opacity motion-feedback-transition group-hover:opacity-80"
                    style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </aside>
        </div>

        <footer
          aria-label="Closing footer"
          className="mt-7 border-t pt-5 sm:mt-8 sm:pt-6"
          style={{ borderColor: "var(--line-muted)" }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className="text-sm font-semibold"
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  color: "var(--color-ink)",
                }}
              >
                Harsh Kumar Jha
              </p>
              <p
                className="mt-1 text-[11px] uppercase tracking-[0.16em]"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  color: "var(--color-ink)",
                  opacity: 0.38,
                }}
              >
                AI / ML Portfolio · © {new Date().getFullYear()}
              </p>
            </div>
            <a
              href="#"
              id="contact-back-to-top"
              aria-label="Back to top"
              className="
                self-start text-[11px] uppercase tracking-[0.12em]
                transition-opacity motion-base-drift-transition
                hover:opacity-80 sm:self-auto
              "
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--color-ink)",
                opacity: 0.36,
              }}
            >
              ↑ Top
            </a>
          </div>
        </footer>
      </div>
    </div>
  );

  return (
    <ScrollLinkedReveal sceneId="contact" distance={6}>
      {content}
    </ScrollLinkedReveal>
  );
}
