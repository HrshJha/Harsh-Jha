import { Badge } from "@/components/ui/Badge";

interface TechnologyListProps {
  readonly highlights: readonly string[];
  readonly ariaLabel?: string;
}

export function TechnologyList({
  highlights,
  ariaLabel = "Technologies and topics",
}: TechnologyListProps) {
  if (highlights.length === 0) {
    return null;
  }

  return (
    <ul className="flex flex-wrap gap-2" aria-label={ariaLabel}>
      {highlights.map((item) => (
        <li key={item}>
          <Badge>{item}</Badge>
        </li>
      ))}
    </ul>
  );
}
