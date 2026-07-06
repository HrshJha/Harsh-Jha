// COMPONENT_SPEC.md §7 ValuesGrid.
// Renders the 8 approved core values as labels.
// No descriptions — value descriptions are MISSING INFORMATION
// (CONTENT_SPEC.md §5 Core Values display requirements).

import { about } from "@/content/about";
import { Badge } from "@/components/ui/Badge";

export function ValuesGrid() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-card-title font-semibold text-text-primary">
        Core Values
      </h3>
      <ul className="flex flex-wrap gap-2" aria-label="Core values">
        {about.coreValues.map((value) => (
          <li key={value}>
            <Badge>{value}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
