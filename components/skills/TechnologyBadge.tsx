// COMPONENT_SPEC.md §8 TechnologyBadge.
// Badge-style visual treatment for a single skill label.
// Text remains readable; does not imply proficiency ranking.
// No percentages, bars, or levels (CONTENT_SPEC.md §8 Display Rules).

import { Badge } from "@/components/ui/Badge";

interface TechnologyBadgeProps {
  readonly label: string;
}

export function TechnologyBadge({ label }: TechnologyBadgeProps) {
  return <Badge>{label}</Badge>;
}
