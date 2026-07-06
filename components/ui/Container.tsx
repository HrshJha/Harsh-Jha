import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ContainerProps {
  readonly className?: string;
  readonly children: ReactNode;
}

// `container.content` (72rem) from DESIGN_SYSTEM.md §2 Container Widths,
// wired as the `--container-content` theme token in styles/globals.css.
// Horizontal padding uses Tailwind's default spacing scale, which already
// matches `space.4`/`space.6` (1rem/2rem) — see DECISIONS.md.
export function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-content px-4 md:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
