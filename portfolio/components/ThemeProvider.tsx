"use client";

/**
 * ThemeProvider — wraps next-themes for Darkroom/Lightbox support.
 *
 * Theme values: "dark" = Darkroom, "light" = Lightbox.
 * Mechanism: next-themes writes data-theme on <html>.
 * System preference is the default; persisted to localStorage.
 *
 * The toggle control (a single segmented control, not two buttons — see rules.md Section 2)
 * is built in Part 6 and placed in the persistent nav. This file only wires the provider.
 */

import { MotionConfig } from "motion/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";
import { REDUCED_MOTION_POLICY } from "@/lib/motion";

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <MotionConfig reducedMotion={REDUCED_MOTION_POLICY}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </MotionConfig>
  );
}
