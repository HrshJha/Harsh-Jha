// COMPONENT_SPEC.md §10 ResumeSection.
// Shows the Resume label and buttons to download and open the resume PDF.
// PDFPreview is not implemented for MVP (MISSING INFORMATION for title/desc).
//
// Supporting copy: MISSING INFORMATION — not rendered.

import { resume } from "@/content/resume";
import { DownloadButton } from "@/components/resume/DownloadButton";
import { OpenPDFButton } from "@/components/resume/OpenPDFButton";

interface ResumeSectionProps {
  readonly heading?: string;
  readonly headingId?: string;
}

export function ResumeSection({ heading, headingId }: ResumeSectionProps) {
  return (
    <div className="flex flex-col gap-8">
      {heading ? (
        <h2 id={headingId} className="text-section-heading font-semibold text-foreground">
          {heading}
        </h2>
      ) : null}
      <div className="flex flex-wrap gap-4">
        <DownloadButton assetPath={resume.assetPath} />
        <OpenPDFButton assetPath={resume.assetPath} />
      </div>
    </div>
  );
}

