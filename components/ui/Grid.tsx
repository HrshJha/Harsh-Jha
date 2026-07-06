import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface GridProps {
  readonly className?: string;
  readonly children: ReactNode;
}

// Column/gutter token values are MISSING INFORMATION (DESIGN_SYSTEM.md §2
// Grid Scale). Column counts are left to the consumer via className until
// grid tokens are approved.
export function Grid({ className, children }: GridProps) {
  return <div className={cn("grid", className)}>{children}</div>;
}
