"use client";

import type { ReactNode } from "react";
import { MotionReveal } from "@/components/MotionReveal";

type ProjectDetailRevealProps = {
  children: ReactNode;
  className?: string;
  distance?: "sm" | "md";
  order?: number;
  staggerBy?: "tight" | "base";
};

export function ProjectDetailReveal({
  children,
  className,
  distance = "sm",
  order = 0,
  staggerBy = "tight",
}: ProjectDetailRevealProps) {
  return (
    <MotionReveal
      className={className}
      distance={distance}
      mode="mount"
      order={order}
      staggerBy={staggerBy}
    >
      {children}
    </MotionReveal>
  );
}
