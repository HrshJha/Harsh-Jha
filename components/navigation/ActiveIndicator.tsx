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

  return <span aria-hidden="true" className="block h-0.5 w-full bg-current" />;
}
