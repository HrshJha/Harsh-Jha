import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type ContainerSize = "text" | "reading" | "content" | "wide" | "full";

interface ContainerProps {
  readonly size?: ContainerSize;
  readonly className?: string;
  readonly children: ReactNode;
}

const SIZE_STYLES: Record<ContainerSize, string> = {
  text: "max-w-text",
  reading: "max-w-reading",
  content: "max-w-content",
  wide: "max-w-wide",
  full: "max-w-none",
};

export function Container({
  size = "content",
  className,
  children,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 md:px-6 lg:px-8",
        SIZE_STYLES[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
