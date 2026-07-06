// ABOUT-01: Source-backed about content.
// Source: FOUNDATION.md Part 1; CONTENT_SPEC.md §5; identity.ts.
//
// Biography paragraph: MISSING INFORMATION — not included.
// Competitive advantages: MISSING INFORMATION — not included.
// Expanded learning philosophy paragraph: MISSING INFORMATION — not included.
// All fields are derived verbatim from identity.ts or CONTENT_SPEC.md §5.

import { identity } from "@/content/identity";

export const about = {
  // Professional identity facts (CONTENT_SPEC.md §5 Professional Identity).
  identity: {
    name: identity.name,
    degreeShortForm: identity.degreeShortForm,
    institution: identity.institution,
    graduationYear: identity.graduationYear,
    currentCgpa: identity.currentCgpa,
    coreMessage: identity.coreMessage,
    mission: identity.mission,
  },

  // Engineering philosophy (CONTENT_SPEC.md §5 Engineering Philosophy).
  // 6 approved statements — displayed as bullets or paired statements.
  // No explanations until future source content defines them.
  engineeringPhilosophy: identity.engineeringPhilosophy,

  // Career vision (CONTENT_SPEC.md §5 Career Vision).
  // Do not claim current role as AI Research Engineer.
  vision: identity.vision,
  focusAreas: identity.focusAreas,

  // Core values (CONTENT_SPEC.md §5 Core Values).
  // Display as labels or concise list items. No descriptions.
  coreValues: identity.coreValues,
} as const;
