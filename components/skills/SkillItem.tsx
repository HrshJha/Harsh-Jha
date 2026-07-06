// COMPONENT_SPEC.md §8 SkillItem.
// Renders a single skill label as a list item containing a TechnologyBadge.
// Displays text only; no proficiency claim, rating, bar, or percentage.

import { TechnologyBadge } from "@/components/skills/TechnologyBadge";

interface SkillItemProps {
  readonly skill: string;
}

export function SkillItem({ skill }: SkillItemProps) {
  return (
    <li>
      <TechnologyBadge label={skill} />
    </li>
  );
}
