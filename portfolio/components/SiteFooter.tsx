"use client";

import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <footer
      aria-label="Site footer"
      className="relative z-10 w-full border-t py-6"
      style={{ borderColor: "var(--line-muted)" }}
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
  );
}
