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
            className="text-page-title font-semibold text-foreground"
          >
            Resume
          </h1>
          {/*
            PDFPreview is NOT rendered (title/description MISSING INFORMATION).
            DownloadButton and OpenPDFButton are implemented (RES-05) since
            the asset path is now supplied.
          */}
          <ResumeSection />
        </div>
      </Section>
    </PageWrapper>
  );
}

