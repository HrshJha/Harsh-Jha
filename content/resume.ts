// RES-01: Resume content model.
// Source: CONTENT_SPEC.md §10; COMPONENT_SPEC.md §10.
//
// Resume asset path: MISSING INFORMATION — download/open/PDF preview behavior
// must not be implemented until an approved path or URL is supplied.
// Supporting copy: MISSING INFORMATION — not rendered.
// Secondary button: MISSING INFORMATION — not rendered.
//
// The route destination `/resume` is approved and stable.

export const resume = {
  // Navigation label used across nav, hero CTA, and footer.
  label: "Resume",

  // The stable route for the Resume page.
  route: "/resume",

  // Resume asset path is MISSING INFORMATION.
  // Do not add download, open, or PDF-preview behavior until this is defined.
  assetPath: null as null,

  // Supporting copy is MISSING INFORMATION.
  supportingCopy: null as null,
} as const;
