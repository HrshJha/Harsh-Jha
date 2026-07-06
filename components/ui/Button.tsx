import type { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "icon";

interface BaseButtonProps {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly className?: string;
  readonly ariaLabel?: string;
  readonly loading?: boolean;
  readonly children: ReactNode;
}

interface LinkButtonProps extends BaseButtonProps {
  readonly href: string;
  readonly download?: string | boolean;
  readonly target?: string;
  readonly rel?: string;
  readonly onClick?: undefined;
  readonly disabled?: boolean;
}

interface ActionButtonProps extends BaseButtonProps {
  readonly href?: undefined;
  readonly download?: undefined;
  readonly target?: undefined;
  readonly rel?: undefined;
  readonly onClick?: MouseEventHandler<HTMLButtonElement>;
  readonly disabled?: boolean;
}

type ButtonProps = LinkButtonProps | ActionButtonProps;

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "border border-accent bg-accent text-accent-foreground hover:border-accent hover:bg-accent active:shadow-none",
  secondary:
    "border border-border-strong bg-surface text-foreground hover:border-accent hover:bg-muted active:bg-surface-inset",
  ghost:
    "border border-transparent bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground active:bg-surface-inset",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-label",
  md: "min-h-11 px-6 text-label",
  lg: "min-h-12 px-8 text-body-small",
  icon: "size-11 px-0 text-label",
};

const BASE_STYLES = cn(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-sm font-medium",
  "transition-[background-color,border-color,color,box-shadow,transform] duration-(--duration-fast) ease-(--ease-standard)",
  "hover:shadow-subtle active:translate-y-px",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  "disabled:pointer-events-none disabled:border-border disabled:bg-muted disabled:text-muted-foreground disabled:shadow-none",
  "aria-disabled:pointer-events-none aria-disabled:border-border aria-disabled:bg-muted aria-disabled:text-muted-foreground aria-disabled:shadow-none",
);

export function Button({
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
  loading = false,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = Boolean(props.disabled || loading);
  const classes = cn(
    BASE_STYLES,
    VARIANT_STYLES[variant],
    SIZE_STYLES[size],
    className,
  );

  if (props.href !== undefined) {
    if (props.download || props.target) {
      return (
        <a
          href={props.href}
          download={props.download}
          target={props.target}
          rel={props.rel}
          aria-label={ariaLabel}
          aria-disabled={isDisabled || undefined}
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={props.href}
        aria-label={ariaLabel}
        aria-disabled={isDisabled || undefined}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={props.onClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-busy={loading || undefined}
      className={classes}
    >
      {children}
    </button>
  );
}
