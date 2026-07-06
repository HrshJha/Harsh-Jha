// COMPONENT_SPEC.md §6 CompanyCard.
// Company-level grouping: company name heading + role children.
// Company names must match CONTENT_SPEC.md §7 exactly.
// h3 is used so the heading level is valid in both the dedicated /experience
// route (h1 → h3) and on the homepage (h1 → h2[section heading] → h3[company]).

import type { ReactNode } from "react";

interface CompanyCardProps {
  readonly company: string;
  readonly children: ReactNode;
}

export function CompanyCard({ company, children }: CompanyCardProps) {
  return (
    <article
      className="flex flex-col gap-4 rounded-lg border border-border-subtle p-6"
      aria-label={company}
    >
      <h3 className="text-card-title font-semibold text-text-primary">
        {company}
      </h3>
      {children}
    </article>
  );
}

