import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { ResumeSection } from "@/features/resume/components/ResumeSection";

export const metadata: Metadata = buildMetadata({
  title: "Resume",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <Section ariaLabelledBy="resume-heading" className="py-12 md:py-16">
        <div className="flex flex-col gap-8">
          <h1
            id="resume-heading"
            className="text-page-title font-semibold text-text-primary md:text-page-title-desktop"
          >
            Resume
          </h1>
          {/*
            PDFPreview, DownloadButton, and OpenPDFButton are NOT rendered.
            Resume asset path is MISSING INFORMATION (CONTENT_SPEC.md §10).
            Implement RES-05 once an approved resume file or URL is supplied.
          */}
          <ResumeSection />
        </div>
      </Section>
    </PageWrapper>
  );
}

