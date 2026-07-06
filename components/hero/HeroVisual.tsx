import { identity } from "@/content/identity";

const LAYERS = [
  { label: "Research", className: "left-12 top-16" },
  { label: "Systems", className: "right-16 top-12" },
  { label: "Products", className: "right-12 bottom-20" },
  { label: "Evaluation", className: "left-16 bottom-16" },
] as const;

export function HeroVisual() {
  return (
    <aside
      aria-label="AI systems focus map"
      className="hidden lg:block"
    >
      <div className="relative min-h-96 rounded-lg border border-border bg-surface p-8 shadow-subtle">
        <div className="absolute inset-8">
          <svg
            viewBox="0 0 480 360"
            className="h-full w-full text-accent"
            role="img"
            aria-labelledby="hero-visual-title"
          >
            <title id="hero-visual-title">AI systems focus map</title>
            <g fill="none" stroke="currentColor" strokeLinecap="round">
              <path d="M112 96 C176 52 304 52 368 116" opacity="0.34" />
              <path d="M372 132 C428 196 376 292 288 300" opacity="0.34" />
              <path d="M270 300 C170 318 74 250 104 116" opacity="0.34" />
              <path d="M138 124 C204 166 272 164 340 132" opacity="0.24" />
              <path d="M138 236 C204 196 272 198 340 240" opacity="0.24" />
            </g>
            <circle
              cx="240"
              cy="180"
              r="52"
              fill="currentColor"
              opacity="0.08"
            />
            <circle
              cx="240"
              cy="180"
              r="28"
              fill="none"
              stroke="currentColor"
              opacity="0.62"
            />
          </svg>
        </div>

        {LAYERS.map((layer) => (
          <div
            key={layer.label}
            className={`absolute rounded-sm border border-border bg-background px-3 py-2 text-label font-medium text-foreground shadow-subtle ${layer.className}`}
          >
            {layer.label}
          </div>
        ))}

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-md border border-border-strong bg-surface px-6 py-5 text-center shadow-subtle">
          <span className="text-label font-medium text-muted-foreground">
            Focus
          </span>
          <span className="max-w-48 text-card-title font-semibold text-foreground">
            {identity.vision.primaryGoal}
          </span>
        </div>
      </div>
    </aside>
  );
}
