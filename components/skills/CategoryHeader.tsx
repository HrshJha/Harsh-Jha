// COMPONENT_SPEC.md §8 CategoryHeader.
// Labels a skill category. Heading level fits page hierarchy:
// On the homepage, SkillsSection has an h2 heading above, so category
// headings use h3. On the /about page, the structure is the same.
// Uses approved category names only (CONTENT_SPEC.md §8).

interface CategoryHeaderProps {
  readonly name: string;
}

export function CategoryHeader({ name }: CategoryHeaderProps) {
  return (
    <h3 className="text-card-title font-semibold text-text-primary">{name}</h3>
  );
}
