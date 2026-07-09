"use client";

/**
 * Nav.tsx — Persistent site navigation.
 *
 * Spec (EXECUTION_PARTS.md Part 6, prd.md §5.7):
 *   Nav items: Home, Projects, Experience, About, Resume, Contact
 *   Placement: persistent on every page via root layout.tsx
 *   Landmark: <header> + <nav> — semantic HTML required (rules.md §3, prd.md §5.7)
 *
 * Scroll behavior:
 *   Home + Projects + Experience + About = hash anchors on the home page.
 *   Resume = /resume route (built in Part 6).
 *   Contact = #contact hash anchor on home page.
 *
 * On inner pages (e.g. /resume, /dev/signal-core):
 *   Hash anchors navigate back to / with the fragment — standard behavior,
 *   no extra JavaScript needed.
 *
 * Dark/light:
 *   Nav background uses the `--surface` semantic variable (set by globals.css
 *   to Darkroom or Lightbox depending on data-theme) — automatically correct
 *   in both modes with no conditional logic here.
 *
 * Focus: :focus-visible in globals.css applies gold outline to all <a> and
 *   <button> elements — no per-element focus override needed here.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Home",       href: "/" },
  { label: "Projects",   href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "About",      href: "/#about" },
  { label: "Resume",     href: "/resume" },
  { label: "Contact",    href: "/#contact" },
] as const;

export function Nav() {
  const pathname = usePathname();

  return (
    /*
     * Semantic landmark: <header> wraps the <nav>.
     * rules.md §3: "Semantic HTML with landmark regions (header/nav/main/footer) on every page."
     */
    <header
      aria-label="Site header"
      className="
        sticky top-0 z-50 w-full max-w-[100vw]
        border-b
        overflow-x-clip
      "
      style={{
        background: "var(--nav-surface)",
        borderColor: "var(--line)",
        boxShadow: "var(--nav-shadow)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-14 gap-4 min-w-0">

          {/* Wordmark / home link */}
          <Link
            href="/"
            id="nav-home"
            aria-label="Harsh Kumar Jha — home"
            className="flex shrink-0 items-baseline gap-2 transition-opacity motion-base-drift-transition hover:opacity-80"
          >
            <span
              className="text-base font-bold tracking-tight leading-none"
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                color: "var(--color-ink)",
              }}
            >
              Harsh
            </span>
            <span
              className="hidden sm:inline text-[10px] uppercase tracking-[0.15em] pb-px"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--color-signal-steel)",
                opacity: 0.7,
              }}
            >
              AI/ML
            </span>
          </Link>

          {/* Nav links — hidden on mobile, shown sm+ */}
          <nav
            aria-label="Primary navigation"
            className="hidden sm:flex items-center gap-6"
          >
            {NAV_LINKS.filter((l) => l.label !== "Home").map((link) => {
              const isActive =
                link.href === "/resume" && pathname === "/resume";
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  id={`nav-${link.label.toLowerCase()}`}
                  aria-current={isActive ? "page" : undefined}
                  data-active={isActive ? "true" : undefined}
                  className="
                    nav-trace-link
                    text-xs uppercase tracking-[0.12em]
                    hover:opacity-100
                  "
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    color: isActive
                      ? "var(--color-signal-gold)"
                      : "var(--color-ink)",
                    opacity: isActive ? 1 : 0.45,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Theme toggle — always visible */}
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile nav — full-width row of links below the header bar */}
      <div className="sm:hidden border-t" style={{ borderColor: "var(--line)" }}>
        <nav
          aria-label="Mobile navigation"
          className="
            grid grid-cols-3 gap-x-3 gap-y-2
            px-4 py-2
          "
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/resume" && pathname === "/resume";
            return (
              <Link
                key={link.label}
                href={link.href}
                id={`nav-mobile-${link.label.toLowerCase()}`}
                aria-current={isActive ? "page" : undefined}
                data-active={isActive ? "true" : undefined}
                className="
                  nav-trace-link
                  whitespace-nowrap text-[10px] uppercase tracking-[0.1em]
                  hover:opacity-100 py-1 px-2 text-center
                "
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  color: isActive
                    ? "var(--color-signal-gold)"
                    : "var(--color-ink)",
                  opacity: isActive ? 1 : 0.45,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
