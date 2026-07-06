export interface SiteConfig {
  readonly name: string;
  // Canonical production domain is MISSING INFORMATION
  // (PRD.md §17, TECH_SPEC.md §4/§10). Canonical URLs stay disabled in
  // lib/metadata.ts until this is supplied — do not invent a value.
  readonly siteUrl?: string;
}

export const siteConfig: SiteConfig = {
  name: "Harsh Kumar Jha",
};
