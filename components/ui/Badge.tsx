import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface BadgeProps {
  readonly className?: string;
  readonly children: ReactNode;
}

// Compact status/tag primitive (TECH_SPEC.md §5 Primitives; radius.sm from
// DESIGN_SYSTEM.md §2). Content-agnostic — callers supply the label.
export function Badge({ className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-border-subtle px-2 py-0.5 text-label text-text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}
