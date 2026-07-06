import { HeroTitle } from "@/components/hero/HeroTitle";
import { HeroSubtitle } from "@/components/hero/HeroSubtitle";
import { CTAGroup } from "@/components/hero/CTAGroup";
import { SocialLinks } from "@/components/hero/SocialLinks";

function HeroVisual() {
  return (
    <div
      className="relative hidden min-h-[30rem] items-center justify-center lg:flex"
      aria-hidden="true"
    >
      <div className="absolute inset-6 rounded-lg border border-border-subtle bg-surface-raised/50" />
      <div className="absolute inset-12 rounded-lg border border-border-subtle bg-surface-base" />
      <svg
        viewBox="0 0 520 520"
        className="relative h-full max-h-[32rem] w-full text-primary"
        role="img"
      >
        <defs>
          <linearGradient id="hero-line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.16" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.46" />
          </linearGradient>
          <radialGradient id="hero-node">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.16" />
          </radialGradient>
        </defs>

        <g opacity="0.42">
          {Array.from({ length: 9 }).map((_, index) => (
            <line
              key={`v-${index}`}
              x1={80 + index * 45}
              x2={80 + index * 45}
              y1="72"
              y2="448"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.18"
            />
          ))}
          {Array.from({ length: 9 }).map((_, index) => (
            <line
              key={`h-${index}`}
              x1="72"
              x2="448"
              y1={80 + index * 45}
              y2={80 + index * 45}
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.18"
            />
          ))}
        </g>

        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M116 332 C170 232 220 208 304 242 C354 262 382 226 420 150"
            stroke="url(#hero-line)"
            strokeWidth="2"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0 560;220 340;0 560"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M118 184 C180 142 244 148 292 196 C340 244 388 272 430 250"
            stroke="currentColor"
            strokeOpacity="0.24"
            strokeWidth="2"
          />
          <path
            d="M160 390 C214 344 254 330 306 350 C354 368 386 346 426 310"
            stroke="currentColor"
            strokeOpacity="0.2"
            strokeWidth="2"
          />
        </g>

        <g>
          {[
            [116, 332, 7],
            [154, 184, 5],
            [214, 146, 6],
            [260, 260, 10],
            [304, 242, 7],
            [348, 352, 5],
            [420, 150, 8],
            [430, 250, 6],
            [426, 310, 5],
          ].map(([cx, cy, r], index) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r={r}
              fill="url(#hero-node)"
              opacity={index === 3 ? "0.95" : "0.72"}
            >
              <animate
                attributeName="opacity"
                values="0.5;0.95;0.5"
                dur={`${5 + index}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>

        <g transform="translate(210 210)">
          <rect
            width="104"
            height="104"
            rx="16"
            fill="currentColor"
            opacity="0.06"
          />
          <rect
            x="16"
            y="16"
            width="72"
            height="72"
            rx="12"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.34"
          />
          <path
            d="M34 55h36M52 37v36"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />
        </g>
      </svg>
      <div className="absolute bottom-10 left-10 rounded-md border border-border-subtle bg-surface-base px-4 py-3 shadow-sm">
        <p className="text-label font-medium text-text-primary">AI Systems</p>
        <p className="text-label text-text-muted">Research to Engineering</p>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <div className="grid min-h-[calc(100vh-8rem)] items-center gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(22rem,0.88fr)] lg:gap-16">
      <div className="flex max-w-3xl flex-col gap-9">
        <div className="flex flex-col gap-7">
          <HeroTitle />
          <HeroSubtitle />
        </div>
        <div className="flex flex-col gap-7">
          <CTAGroup />
          <SocialLinks />
        </div>
      </div>
      <HeroVisual />
    </div>
  );
}
