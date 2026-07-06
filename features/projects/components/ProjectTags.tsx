import { Badge } from "@/components/ui/Badge";

interface ProjectTagsProps {
  readonly tags: readonly string[];
}

export function ProjectTags({ tags }: ProjectTagsProps) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag}>
          <Badge>{tag}</Badge>
        </li>
      ))}
    </ul>
  );
}
