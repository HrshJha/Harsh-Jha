import type { InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type InputState = "default" | "error" | "success";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly state?: InputState;
}

const STATE_STYLES: Record<InputState, string> = {
  default: "border-border focus-visible:border-ring",
  error: "border-error focus-visible:border-error",
  success: "border-success focus-visible:border-success",
};

export function Input({
  state = "default",
  className,
  disabled,
  ...props
}: InputProps) {
  return (
    <input
      disabled={disabled}
      className={cn(
        "min-h-11 w-full rounded-sm border bg-surface px-4 text-body-small text-foreground",
        "transition-colors duration-(--duration-fast) ease-(--ease-standard)",
        "placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        "disabled:cursor-not-allowed disabled:border-border disabled:bg-muted disabled:text-muted-foreground",
        STATE_STYLES[state],
        className,
      )}
      {...props}
    />
  );
}
