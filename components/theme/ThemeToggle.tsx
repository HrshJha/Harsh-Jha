"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";
const THEME_CHANGE_EVENT = "portfolio-theme-change";

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

function subscribeToTheme(listener: () => void) {
  const notify = () => listener();

  window.addEventListener("storage", notify);
  window.addEventListener(THEME_CHANGE_EVENT, notify);

  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener(THEME_CHANGE_EVENT, notify);
  };
}

function getServerTheme(): Theme {
  return "light";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getPreferredTheme,
    getServerTheme,
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function handleToggle() {
    const nextTheme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  const isDark = theme === "dark";

  const Icon = isDark ? Sun : Moon;
  const label = isDark ? "Switch to Lightbox mode" : "Switch to Darkroom mode";

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={label}
      suppressHydrationWarning
      className="theme-toggle-button inline-flex items-center justify-center rounded-sm border border-border bg-surface text-muted-foreground transition-colors duration-(--duration-fast) ease-(--ease-standard) hover:border-border-strong hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Icon aria-hidden="true" className="size-4" strokeWidth={2} />
    </button>
  );
}
