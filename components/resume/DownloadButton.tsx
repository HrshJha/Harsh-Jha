// COMPONENT_SPEC.md §10 DownloadButton.
// Provides a download link for the resume asset.
// Displays clear accessible name. Button label readable.

import { Button } from "@/components/ui/Button";

interface DownloadButtonProps {
  readonly assetPath: string;
}

export function DownloadButton({ assetPath }: DownloadButtonProps) {
  return (
    <Button href={assetPath} download variant="primary" size="lg">
      Download Resume
    </Button>
  );
}
