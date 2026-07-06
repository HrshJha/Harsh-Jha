import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type BadgeVariant = "neutral" | "accent" | "success" | "warning" | "error";

interface BadgeProps {
  readonly variant?: BadgeVariant;
  readonly className?: string;
  readonly children: ReactNode;
}

const VARIANT_STYLES: Record<BadgeVariant, string> = {
  neutral: "border-border bg-surface text-muted-foreground",
  accent: "border-accent/40 bg-muted text-foreground",
  success: "border-success/40 bg-surface text-success",
  warning: "border-warning/40 bg-surface text-warning",
  error: "border-error/40 bg-surface text-error",
};

export function Badge({
  variant = "neutral",
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-sm border px-3 py-1 text-label font-medium",
        VARIANT_STYLES[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
