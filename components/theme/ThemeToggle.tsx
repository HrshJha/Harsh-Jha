"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function handleToggle() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  }

  const isDark = theme === "dark";

  const Icon = isDark ? Sun : Moon;
  const label = isDark ? "Switch to Lightbox mode" : "Switch to Darkroom mode";
  const visibleLabel = isDark ? "Lightbox" : "Darkroom";

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={label}
      suppressHydrationWarning
      className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-border bg-surface px-3 text-label font-medium text-muted-foreground transition-colors duration-(--duration-fast) ease-(--ease-standard) hover:border-border-strong hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Icon aria-hidden="true" className="size-4" strokeWidth={2} />
      <span className="hidden sm:inline">{visibleLabel}</span>
    </button>
  );
}
