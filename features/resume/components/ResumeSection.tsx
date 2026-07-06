// COMPONENT_SPEC.md §10 ResumeSection.
// Shows the Resume label and buttons to download and open the resume PDF.
// PDFPreview is not implemented for MVP (MISSING INFORMATION for title/desc).
//
// Supporting copy: MISSING INFORMATION — not rendered.

import { resume } from "@/content/resume";
import { DownloadButton } from "@/components/resume/DownloadButton";
import { OpenPDFButton } from "@/components/resume/OpenPDFButton";

export function ResumeSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-4">
        <DownloadButton assetPath={resume.assetPath} />
        <OpenPDFButton assetPath={resume.assetPath} />
      </div>
    </div>
  );
}


