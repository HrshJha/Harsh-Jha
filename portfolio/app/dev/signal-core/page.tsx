/**
 * /dev/signal-core — isolated verification route for Signal Core.
 *
 * Per EXECUTION_PARTS.md Part 1 and tech.md Section 6:
 * "Built and visually verified as an isolated component (its own route)
 * across breakpoints before being wired into the Hero."
 *
 * This route is NOT linked from the nav. It exists only for Part 1 verification.
 * It will NOT be deleted (unlike /dev/tokens) — it stays as the canonical isolated
 * route to re-check after any Hero integration changes, per the process rule in
 * tech.md Section 6.
 *
 * Zero dev/framework artifacts on this route.
 */

import { SignalCore } from "@/components/SignalCore";

export const metadata = {
  title: "Signal Core — Isolated Verification | Harsh Kumar Jha",
  description: "Isolated verification route for the Signal Core pipeline diagram. Not linked from nav.",
  robots: { index: false, follow: false }, // don't index this dev route
};

export default function SignalCoreDevPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-16"
      style={{ background: "var(--color-surface-dark)" }}
    >
      {/* Route label — JetBrains Mono, small, as instrumentation UI */}
      <p
        className="text-xs uppercase tracking-widest mb-12 opacity-40"
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          color: "var(--color-ink)",
        }}
      >
        signal-core — isolated verification route
      </p>

      {/* ── The component itself ── */}
      <div className="w-full max-w-4xl">
        <SignalCore />
      </div>

      {/* Stage mapping explanation — must be present per Part 1 verification:
          "Color-to-stage mapping intentional and documented in a code comment"
          (also visible here for visual review) */}
      <div
        className="mt-16 rounded-lg p-6 w-full max-w-2xl"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <h2
          className="text-sm font-semibold mb-4 uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            color: "var(--color-ink)",
            opacity: 0.5,
          }}
        >
          Stage → Color Mapping (tech.md §2)
        </h2>
        <div className="space-y-2 text-sm" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
          {[
            { nodes: "01 Research → 02 Parse",    stage: "Input / gathering",   color: "var(--color-signal-steel)", hex: "#5C7A99" },
            { nodes: "03 Rank → 04 Repair",       stage: "Active processing",   color: "var(--color-signal-gold)",  hex: "#C9A961" },
            { nodes: "05 Verify → 06 Feedback",   stage: "Resolved / output",   color: "var(--color-signal-rust)",  hex: "#BF5B3D" },
          ].map((row) => (
            <div key={row.nodes} className="flex items-center gap-3">
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: row.color }}
              />
              <span style={{ color: row.color }} className="min-w-[220px]">{row.nodes}</span>
              <span style={{ color: "var(--color-ink)", opacity: 0.5 }}>
                {row.stage} · {row.hex}
              </span>
            </div>
          ))}
        </div>
        <p
          className="mt-4 text-xs opacity-30 leading-relaxed"
          style={{ color: "var(--color-ink)" }}
        >
          Six nodes, three stages, three colors — not six arbitrary assignments.
          See SignalCore.tsx comment block for full rationale.
        </p>
      </div>

      {/* Breakpoint indicator — visual aid during verification */}
      <div
        className="mt-8 text-xs opacity-30 flex gap-4 flex-wrap justify-center"
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          color: "var(--color-ink)",
        }}
      >
        <span className="sm:hidden">breakpoint: mobile (&lt;640px) — vertical layout</span>
        <span className="hidden sm:block md:hidden">breakpoint: sm (640px–768px) — horizontal layout</span>
        <span className="hidden md:block lg:hidden">breakpoint: md (768px–1024px) — horizontal layout</span>
        <span className="hidden lg:block xl:hidden">breakpoint: lg (1024px–1280px) — horizontal layout</span>
        <span className="hidden xl:block">breakpoint: xl (≥1280px) — horizontal layout</span>
      </div>
    </main>
  );
}
