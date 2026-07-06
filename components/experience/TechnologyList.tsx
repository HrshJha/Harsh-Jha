// COMPONENT_SPEC.md §6 TechnologyList.
// Renders source-backed role highlights as a semantic list.
// Does not infer or add unlisted technologies (CONTENT_SPEC.md §7).

interface TechnologyListProps {
  readonly highlights: readonly string[];
}

export function TechnologyList({ highlights }: TechnologyListProps) {
  if (highlights.length === 0) {
    return null;
  }

  return (
    <ul
      className="flex flex-wrap gap-x-3 gap-y-1"
      aria-label="Technologies and topics"
    >
      {highlights.map((item) => (
        <li
          key={item}
          className="text-label text-text-secondary before:mr-1.5 before:content-['·'] first:before:content-['']"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
