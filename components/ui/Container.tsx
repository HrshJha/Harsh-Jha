import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ContainerProps {
  readonly className?: string;
  readonly children: ReactNode;
}

// Width constraint values are MISSING INFORMATION (DESIGN_SYSTEM.md §2
// Container Widths). This primitive intentionally applies no max-width
// until token values are approved.
export function Container({ className, children }: ContainerProps) {
  return <div className={cn("mx-auto w-full", className)}>{children}</div>;
}
