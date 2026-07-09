"use client";

/**
 * MotionReveal
 *
 * Shared clarity-reveal primitive for scene and route transitions. Components
 * should use this before hand-rolling opacity/translate/blur reveal blocks.
 */

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { ScrollLinkedReveal } from "@/components/ScrollLinkedReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  DURATION_DEVELOP,
  REVEAL_EDITORIAL,
  REVEAL_LG,
  REVEAL_MD,
  REVEAL_SM,
  STAGGER_BASE,
  STAGGER_LOOSE,
  STAGGER_TIGHT,
  clarityReveal,
  developTransition,
  stagger,
} from "@/lib/motion";

export type MotionRevealDistance = "sm" | "editorial" | "md" | "lg" | number;
export type MotionRevealMode = "mount" | "viewport";
export type MotionRevealStagger = "tight" | "base" | "loose";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  distance?: MotionRevealDistance;
  duration?: number;
  mode?: MotionRevealMode;
  order?: number;
  sceneId?: string;
  staggerBy?: MotionRevealStagger;
};

function resolveDistance(distance: MotionRevealDistance): number {
  if (typeof distance === "number") return distance;
  if (distance === "lg") return REVEAL_LG;
  if (distance === "md") return REVEAL_MD;
  if (distance === "editorial") return REVEAL_EDITORIAL;
  return REVEAL_SM;
}

function resolveStagger(staggerBy: MotionRevealStagger): number {
  if (staggerBy === "loose") return STAGGER_LOOSE;
  if (staggerBy === "base") return STAGGER_BASE;
  return STAGGER_TIGHT;
}

export function MotionReveal({
  children,
  className,
  distance = "editorial",
  duration = DURATION_DEVELOP,
  mode = "viewport",
  order = 0,
  sceneId = "main-content",
  staggerBy = "base",
}: MotionRevealProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  const variants = clarityReveal(resolveDistance(distance));
  const transition = developTransition(
    stagger(order, resolveStagger(staggerBy)),
    duration,
  );

  if (mode === "mount") {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <ScrollLinkedReveal
      sceneId={sceneId}
      className={className}
      distance={resolveDistance(distance)}
      phase={stagger(order, resolveStagger(staggerBy))}
    >
      {children}
    </ScrollLinkedReveal>
  );
}
