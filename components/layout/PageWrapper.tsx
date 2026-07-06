import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface PageWrapperProps {
  readonly className?: string;
  readonly children: ReactNode;
}

// Page-level spacing tokens are MISSING INFORMATION (DESIGN_SYSTEM.md §2
// Spacing Scale), so this stays structural only until they're approved.
export function PageWrapper({ className, children }: PageWrapperProps) {
  return <div className={cn("flex flex-col", className)}>{children}</div>;
}
