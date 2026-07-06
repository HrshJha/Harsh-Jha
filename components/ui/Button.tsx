import type { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary";

interface BaseButtonProps {
  readonly variant?: ButtonVariant;
  readonly className?: string;
  readonly children: ReactNode;
}

interface LinkButtonProps extends BaseButtonProps {
  readonly href: string;
  readonly onClick?: undefined;
  readonly disabled?: undefined;
}

interface ActionButtonProps extends BaseButtonProps {
  readonly href?: undefined;
  readonly onClick?: MouseEventHandler<HTMLButtonElement>;
  readonly disabled?: boolean;
}

type ButtonProps = LinkButtonProps | ActionButtonProps;

// DESIGN_SYSTEM.md §7 Button Variants/Sizes. `button.size.lg` (3rem) and
// its padding use Tailwind's default h-12/px-8, which already match the
// documented rem values 1:1 (see DECISIONS.md).
const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-primary text-surface-base hover:bg-secondary",
  secondary:
    "border border-primary bg-transparent text-primary hover:bg-state-hover",
};

const BASE_STYLES = cn(
  "inline-flex h-12 items-center justify-center rounded-md px-8",
  "text-base font-medium",
  "transition-colors duration-(--duration-fast) ease-(--ease-standard)",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus",
  "disabled:pointer-events-none disabled:opacity-50",
);

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(BASE_STYLES, VARIANT_STYLES[variant], className);

  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
