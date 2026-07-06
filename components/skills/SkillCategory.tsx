// COMPONENT_SPEC.md §8 SkillCategory.
// Groups a category name (CategoryHeader) with its approved skill items (SkillItem list).
// No category descriptions — descriptions are MISSING INFORMATION (CONTENT_SPEC.md §8).
// ProjectReference is NOT implemented for MVP (MISSING INFORMATION).

import { CategoryHeader } from "@/components/skills/CategoryHeader";
import { SkillItem } from "@/components/skills/SkillItem";
import type { SkillCategory as SkillCategoryType } from "@/types/skills";

interface SkillCategoryProps {
  readonly category: SkillCategoryType;
}

export function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <div className="flex flex-col gap-3">
      <CategoryHeader name={category.category} />
      <ul className="flex flex-wrap gap-2" aria-label={category.category}>
        {category.skills.map((skill) => (
          <SkillItem key={skill} skill={skill} />
        ))}
      </ul>
    </div>
  );
}
