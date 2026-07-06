import { Badge } from "@/components/ui/Badge";

interface ProjectTagsProps {
  readonly tags: readonly string[];
}

// CONTENT_SPEC.md §6 lists each project's only approved tag as its status
// ("Project Tags | In Progress"); no other tag content is source-backed.
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
