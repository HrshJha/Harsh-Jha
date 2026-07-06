interface ActiveIndicatorProps {
  readonly isActive: boolean;
}

// Reinforces the active route visually (a shape, not color alone). The
// authoritative signal for assistive technology is `aria-current="page"`
// on the link itself, so this is purely decorative.
export function ActiveIndicator({ isActive }: ActiveIndicatorProps) {
  if (!isActive) {
    return null;
  }

  return (
    <span
      aria-hidden="true"
      className="absolute inset-x-3 bottom-1 h-px rounded-sm bg-accent"
    />
  );
}
