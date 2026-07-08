/**
 * Root layout — Cinematic Signal portfolio
 *
 * Fonts (next/font, self-hosted — no runtime Google Fonts fetch):
 *   Display:   Fraunces (variable)      → --font-fraunces  → headlines
 *   Monospace: JetBrains Mono           → --font-jetbrains-mono → technical/data accents
 *   Sans:      Geist Sans (geist pkg)   → --font-geist-sans → body copy
 *
 * Fraunces is loaded with preload: true — the last build's biggest failure was a
 * visible system-sans fallback on the headline. This is the fix (tech.md Section 3).
 *
 * Theme: next-themes writes data-theme="dark"|"light" on <html>.
 *   "dark"  = Darkroom  (warm near-black #100D0B)
 *   "light" = Lightbox  (warm paper white #FAF6EF)
 * Default: "dark" — Darkroom is the Cinematic Signal identity (FOUNDATION.md Part 5).
 * Lightbox is a user-opt-in toggle (built in Part 6). enableSystem=false by design:
 * the Signal Core diagram and atmospheric glows are designed for dark surfaces.
 *
 * Semantic landmarks (rules.md §3, prd.md §5.7):
 *   <header> + <nav>  = Nav component (sticky, every page)
 *   <main>            = wraps page content
 *   <footer>          = minimal site footer with anchor back to home
 *
 * Part 6 changes:
 *   - Nav component added (persistent across all pages)
 *   - <main> and <footer> semantic wrappers added
 */

import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import "./globals.css";

/* ─── Display: Fraunces ───────────────────────────────────────────────────────
   Variable font — preload: true so no headline ever renders in a fallback.
   axes: "SOFT" (softness), "WONK" (axis), "opsz" (optical size), "wght"
   ───────────────────────────────────────────────────────────────────────────── */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  preload: true,
  axes: ["SOFT", "WONK", "opsz"],
  weight: "variable",
});

/* ─── Monospace: JetBrains Mono ──────────────────────────────────────────────
   Used for Signal Core node labels, technical/data accents.
   ───────────────────────────────────────────────────────────────────────────── */
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false, // body font; Fraunces gets the preload slot
  weight: ["400", "500", "700"],
});

/* ─── Sans: Geist Sans ────────────────────────────────────────────────────────
   From the `geist` package — pairs naturally with a Vercel deployment.
   CSS variable injected as --font-geist-sans (referenced in globals.css @theme).
   ───────────────────────────────────────────────────────────────────────────── */
// GeistSans from the geist package exposes the variable directly
const geistSansVariable = GeistSans.variable; // "--font-geist-sans"

export const metadata: Metadata = {
  title: "Harsh Kumar Jha — AI/ML Engineer & Product Builder",
  description:
    "Building autonomous AI systems through research, engineering, and product thinking. B.Tech ECE, MSIT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      /*
       * suppressHydrationWarning: next-themes writes data-theme server-side
       * to match system preference, which causes a known hydration mismatch
       * warning without this flag — the mismatch is intentional and safe.
       */
      suppressHydrationWarning
      className={[
        fraunces.variable,
        jetbrainsMono.variable,
        geistSansVariable,
        "h-full",
        "antialiased",
      ].join(" ")}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {/*
           * Persistent nav — <header> + <nav> landmarks live inside Nav.tsx.
           * Sticky top-0, present on every page via the root layout.
           */}
          <Nav />

          {/*
           * <main> landmark — wraps all page content.
           * rules.md §3: "Semantic HTML with landmark regions on every page."
           */}
          <main id="main-content" className="flex-1 flex flex-col">
            {children}
          </main>

          {/*
           * <footer> landmark — minimal, non-intrusive.
           * Contains a back-to-top anchor and the copyright line.
           */}
          <footer
            aria-label="Site footer"
            className="w-full border-t border-white/[0.05] py-6"
          >
            <div
              className="
                max-w-5xl mx-auto px-6 sm:px-10 lg:px-16
                flex flex-col sm:flex-row items-center justify-between gap-3
              "
            >
              <span
                className="text-[11px] opacity-30"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                © {new Date().getFullYear()} Harsh Kumar Jha
              </span>
              <a
                href="#"
                id="footer-back-to-top"
                aria-label="Back to top"
                className="
                  text-[11px] uppercase tracking-[0.12em]
                  transition-opacity motion-base-drift-transition
                  hover:opacity-80 opacity-30
                "
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                ↑ Top
              </a>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
