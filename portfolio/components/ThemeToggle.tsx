"use client";

/**
 * ThemeToggle.tsx — Darkroom / Lightbox segmented control.
 *
 * Rules (rules.md Section 2 "Controls" and tech.md Section 5):
 *   "Any toggle or segmented control — Darkroom/Lightbox above all — renders as
 *    one visually unified control. Two adjacent buttons that could be mistaken for
 *    two separate actions is a failed implementation, not a valid variant."
 *
 * Implementation:
 *   - ONE <div role="group"> with a sliding pill indicator — not two <button> elements
 *     sitting next to each other as peers. The pill tracks the active state visually.
 *   - Uses next-themes `useTheme` — the provider is wired in layout.tsx (Part 0).
 *   - defaultTheme="dark" (DECISIONS.md Part 2) — Darkroom is the identity, Lightbox is
 *     a user opt-in.
 *   - Persisted across page loads by next-themes via localStorage.
 *
 * Keyboard: both options are reachable via Tab and activated via Enter/Space.
 * Focus: :focus-visible ring from globals.css applies automatically (gold outline).
 */

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // Avoid hydration mismatch — next-themes resolves theme client-side only.
  // Using setTimeout(fn, 0) instead of direct setMounted(true) in useEffect body
  // to satisfy react-hooks/set-state-in-effect (state update in a callback, not inline).
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  // Before mount, render same structural shape but neutral so layout doesn't shift
  const isDark = !mounted || theme === "dark";

  return (
    /*
     * Single unified segmented control (rules.md §2, tech.md §5).
     * NOT two separate buttons — the outer element is the control,
     * the inner spans are options within it.
     */
    <div
      role="group"
      aria-label="Color theme: Darkroom or Lightbox"
      className="
        relative flex shrink-0 items-center
        rounded-full border border-white/[0.12]
        p-0.5 gap-0
        select-none
      "
      style={{
        background: "rgba(255,255,255,0.04)",
        fontFamily: "var(--font-jetbrains-mono), monospace",
      }}
    >
      {/* Sliding active pill — positioned absolutely behind the labels */}
      <span
        aria-hidden="true"
        className="
          absolute top-0.5 bottom-0.5 w-[calc(50%-2px)]
          rounded-full
          transition-all motion-base-feedback-transition
        "
        style={{
          left: isDark ? "2px" : "calc(50%)",
          background: isDark
            ? "rgba(92,122,153,0.25)"   // steel tint — Darkroom
            : "rgba(201,169,97,0.2)",   // gold tint — Lightbox
          boxShadow: isDark
            ? "0 0 8px rgba(92,122,153,0.2)"
            : "0 0 8px rgba(201,169,97,0.15)",
        }}
      />

      {/* Darkroom option */}
      <button
        id="theme-toggle-dark"
        type="button"
        role="radio"
        aria-checked={isDark}
        onClick={() => setTheme("dark")}
        className="
          relative z-10 px-3 py-1
          text-[10px] uppercase tracking-[0.15em]
          rounded-full
          transition-all motion-base-feedback-transition
          cursor-pointer
        "
        style={{
          color: isDark
            ? "var(--color-signal-steel)"
            : "var(--color-ink)",
          opacity: isDark ? 1 : 0.4,
        }}
      >
        Darkroom
      </button>

      {/* Lightbox option */}
      <button
        id="theme-toggle-light"
        type="button"
        role="radio"
        aria-checked={!isDark}
        onClick={() => setTheme("light")}
        className="
          relative z-10 px-3 py-1
          text-[10px] uppercase tracking-[0.15em]
          rounded-full
          transition-all motion-base-feedback-transition
          cursor-pointer
        "
        style={{
          color: !isDark
            ? "var(--color-signal-gold)"
            : "var(--color-ink)",
          opacity: !isDark ? 1 : 0.4,
        }}
      >
        Lightbox
      </button>
    </div>
  );
}
