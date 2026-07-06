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
      className="absolute bottom-1.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-text-muted"
    />
  );
}
