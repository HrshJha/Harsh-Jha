import Link from "next/link";
import { Download, ExternalLink, Mail } from "lucide-react";

/**
 * /resume — Resume route
 *
 * Source file: public/Harsh_CV.pdf, copied from the CV Harsh supplied in the
 * portfolio folder. This page does not rewrite or extract resume claims; it
 * only previews and links to the supplied PDF.
 */

import type { Metadata } from "next";

const RESUME_PDF_PATH = "/Harsh_CV.pdf";
const RESUME_DOWNLOAD_NAME = "Harsh_Kumar_Jha_CV.pdf";

export const metadata: Metadata = {
  title: "Resume — Harsh Kumar Jha",
  description: "CV of Harsh Kumar Jha, AI/ML Engineer & Product Builder.",
};

export default function ResumePage() {
  return (
    <div className="flex-1 px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
      <section className="w-full max-w-5xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <p
            className="mb-3 text-[11px] sm:text-xs uppercase tracking-[0.2em]"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "var(--color-signal-steel)",
              opacity: 0.7,
            }}
          >
            Curriculum Vitae
          </p>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  color: "var(--color-ink)",
                }}
              >
                Resume
              </h1>
              <p
                className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed"
                style={{
                  fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                  color: "var(--color-ink)",
                  opacity: 0.62,
                }}
              >
                Preview the supplied PDF here, or open/download the file directly.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={RESUME_PDF_PATH}
                id="resume-open-pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Harsh Kumar Jha CV PDF in a new tab"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full border px-4 py-2.5
                  text-xs uppercase tracking-[0.12em]
                  press-scale-control
                "
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  background: "var(--chip-steel-surface)",
                  borderColor: "var(--chip-steel-line)",
                  color: "var(--color-signal-steel)",
                }}
              >
                <ExternalLink size={14} aria-hidden="true" />
                Open
              </a>
              <a
                href={RESUME_PDF_PATH}
                id="resume-download-pdf"
                download={RESUME_DOWNLOAD_NAME}
                aria-label="Download Harsh Kumar Jha CV PDF"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full px-4 py-2.5
                  text-xs uppercase tracking-[0.12em]
                  press-scale-control
                "
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  background: "var(--color-signal-gold)",
                  color: "var(--color-ink-light)",
                  boxShadow: "var(--cta-shadow)",
                }}
              >
                <Download size={14} aria-hidden="true" />
                Download
              </a>
              <Link
                href="/#contact"
                id="resume-contact-cta"
                aria-label="Go to Contact section"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full border px-4 py-2.5
                  text-xs uppercase tracking-[0.12em]
                  press-scale-control
                "
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  background: "var(--panel-muted)",
                  borderColor: "var(--line-strong)",
                  color: "var(--color-ink)",
                  opacity: 0.82,
                }}
              >
                <Mail size={14} aria-hidden="true" />
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div
          className="overflow-hidden rounded-lg border"
          style={{
            background: "var(--panel-muted)",
            borderColor: "var(--line)",
            boxShadow: "var(--panel-shadow)",
          }}
        >
          <iframe
            title="Harsh Kumar Jha CV PDF preview"
            src={`${RESUME_PDF_PATH}#view=FitH`}
            className="block h-[72vh] min-h-[560px] w-full"
          />
        </div>
      </section>
    </div>
  );
}
