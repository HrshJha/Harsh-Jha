// COMPONENT_SPEC.md §7 EngineeringPhilosophy.
// Displays the 6 approved engineering philosophy statements as a list.
// No statement explanations — expanded descriptions are MISSING INFORMATION
// (CONTENT_SPEC.md §5 Engineering Philosophy).

import { about } from "@/content/about";

export function EngineeringPhilosophy() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-card-title font-semibold text-text-primary">
        Engineering Philosophy
      </h3>
      <ul className="flex flex-col gap-2">
        {about.engineeringPhilosophy.map((statement) => (
          <li
            key={statement}
            className="text-body text-text-secondary before:mr-2 before:text-text-muted before:content-['—']"
          >
            {statement}
          </li>
        ))}
      </ul>
    </div>
  );
}
