"use client";

/**
 * useReducedMotion — single global hook for prefers-reduced-motion.
 *
 * Per tech.md Section 4 and rules.md Section 2:
 * "prefers-reduced-motion is respected globally via useReducedMotion and a
 * single motion-config wrapper — not per-component checks scattered around."
 *
 * Usage: const shouldReduce = useReducedMotion();
 * Pass the result down to any animated component instead of each component
 * calling its own hook.
 */

import { useEffect, useState } from "react";
import { useReducedMotion as useMotionReducedMotion } from "motion/react";

export function useReducedMotion(): boolean {
  // motion/react's useReducedMotion reads the OS prefers-reduced-motion media query.
  // Keep the hydration pass server-equivalent; the OS media query is client-only.
  const shouldReduce = useMotionReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsMounted(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return isMounted ? shouldReduce ?? false : false;
}
