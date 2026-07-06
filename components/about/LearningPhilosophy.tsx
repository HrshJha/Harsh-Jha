// COMPONENT_SPEC.md §7 LearningPhilosophy.
// Approved content: "Understanding over memorization", "Research before
// implementation", "Continuous Learning" (CONTENT_SPEC.md §5 Learning
// Philosophy). These three items overlap with engineeringPhilosophy and
// may appear as a focused subset (CONTENT_SPEC §5: "May be represented as
// part of engineering philosophy or core values").
//
// The expanded learning philosophy paragraph is MISSING INFORMATION and
// must not be added (CONTENT_SPEC.md §5 Learning Philosophy).

// Source-backed learning philosophy statements extracted from approved content.
const LEARNING_PHILOSOPHY = [
  "Understanding over memorization",
  "Research before implementation",
  "Continuous Learning",
] as const;

export function LearningPhilosophy() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-card-title font-semibold text-text-primary">
        Learning Philosophy
      </h3>
      <ul className="flex flex-col gap-2">
        {LEARNING_PHILOSOPHY.map((statement) => (
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
