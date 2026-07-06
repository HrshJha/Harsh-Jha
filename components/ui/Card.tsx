import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type CardVariant = "default" | "raised" | "inset";

interface CardProps extends HTMLAttributes<HTMLElement> {
  readonly as?: ElementType;
  readonly variant?: CardVariant;
  readonly interactive?: boolean;
  readonly children: ReactNode;
}

const VARIANT_STYLES: Record<CardVariant, string> = {
  default: "border-border bg-surface",
  raised: "border-border bg-surface shadow-subtle",
  inset: "border-border bg-surface-raised",
};

export function Card({
  as,
  variant = "default",
  interactive = false,
  className,
  children,
  ...props
}: CardProps) {
  const Component = as ?? "div";

  return (
    <Component
      {...props}
      className={cn(
        "rounded-md border p-6",
        VARIANT_STYLES[variant],
        interactive &&
          "transition-[border-color,box-shadow,transform,background-color] duration-(--duration-fast) ease-(--ease-standard) hover:border-border-strong hover:shadow-interactive focus-within:border-border-strong focus-within:shadow-interactive",
        className,
      )}
    >
      {children}
    </Component>
  );
}
