// COMPONENT_SPEC.md §10 ResumeSection.
// Shows the Resume label and a clear notice that the resume asset is
// not yet available. Does NOT implement PDFPreview, DownloadButton, or
// OpenPDFButton — all three require an approved resume asset/path which
// is MISSING INFORMATION (CONTENT_SPEC.md §10; RES-04).
//
// resume.assetPath === null — see content/resume.ts.
// Supporting copy: MISSING INFORMATION — not rendered.

export function ResumeSection() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-body text-text-secondary">
        The resume is not yet available for download or preview. Check back
        once the document is published.
      </p>
      {/*
        PDFPreview, DownloadButton, and OpenPDFButton are intentionally absent.
        Implement RES-05 only after an approved resume asset path or URL is
        supplied and the behavior is formally approved.
      */}
    </div>
  );
}

