"use client";

import { motion, useTransform } from "motion/react";
import type { ReactNode } from "react";
import { useSceneProgress } from "@/components/ScrollTimelineProvider";

type ScrollLinkedRevealProps = {
  children: ReactNode;
  className?: string;
  distance?: number;
  exitOpacity?: number;
  phase?: number;
  sceneId: string;
  visibleOpacity?: number;
};

export function ScrollLinkedReveal({
  children,
  className,
  distance = 6,
  exitOpacity = 0.98,
  phase = 0,
  sceneId,
  visibleOpacity = 1,
}: ScrollLinkedRevealProps) {
  const { progress, shouldReduceMotion } = useSceneProgress(sceneId, phase);
  const opacity = useTransform(
    progress,
    [0, 0.22, 0.86, 1],
    [0.94, visibleOpacity, visibleOpacity, exitOpacity],
  );
  const y = useTransform(
    progress,
    [0, 0.3, 1],
    [distance, 0, -distance * 0.12],
  );

  return (
    <motion.div
      data-atmosphere-scene={sceneId}
      data-scroll-scene={sceneId}
      className={className}
      style={
        shouldReduceMotion
          ? { opacity: 1, transform: "none" }
          : {
              opacity,
              y,
            }
      }
    >
      {children}
    </motion.div>
  );
}
