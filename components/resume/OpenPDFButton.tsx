// COMPONENT_SPEC.md §10 OpenPDFButton.
// Opens the resume PDF in a new tab.
// Accessible external/document behavior. Button label readable.

import { Button } from "@/components/ui/Button";

interface OpenPDFButtonProps {
  readonly assetPath: string;
}

export function OpenPDFButton({ assetPath }: OpenPDFButtonProps) {
  return (
    <Button
      href={assetPath}
      target="_blank"
      rel="noopener noreferrer"
      variant="secondary"
      size="lg"
    >
      Open PDF
    </Button>
  );
}
