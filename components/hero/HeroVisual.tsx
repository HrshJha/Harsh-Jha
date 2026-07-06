"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";

const nodes = [
  { cx: 116, cy: 332, r: 7, activeDx: -10, activeDy: 8 },
  { cx: 154, cy: 184, r: 5, activeDx: -8, activeDy: -8 },
  { cx: 214, cy: 146, r: 6, activeDx: 0, activeDy: -14 },
  { cx: 260, cy: 260, r: 10, activeDx: 0, activeDy: 0 },
  { cx: 304, cy: 242, r: 7, activeDx: 14, activeDy: -2 },
  { cx: 348, cy: 352, r: 5, activeDx: 8, activeDy: 12 },
  { cx: 420, cy: 150, r: 8, activeDx: 12, activeDy: -12 },
  { cx: 430, cy: 250, r: 6, activeDx: 16, activeDy: 2 },
  { cx: 426, cy: 310, r: 5, activeDx: 12, activeDy: 10 },
];

const routes = [
  {
    d: "M116 332 C170 232 220 208 304 242 C354 262 382 226 420 150",
    opacity: 0.48,
    delay: "-0.8s",
    duration: "4.8s",
  },
  {
    d: "M118 184 C180 142 244 148 292 196 C340 244 388 272 430 250",
    opacity: 0.34,
    delay: "-2.1s",
    duration: "5.4s",
  },
  {
    d: "M160 390 C214 344 254 330 306 350 C354 368 386 346 426 310",
    opacity: 0.28,
    delay: "-3.2s",
    duration: "6s",
  },
];

const centerPositions = [
  "translate(210 210)",
  "translate(224 198)",
  "translate(196 222)",
];

export function HeroVisual() {
  const [mode, setMode] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const isActive = mode > 0;
  const isEngaged = isActive || isHovering;

  return (
    <div className="relative hidden min-h-[28rem] items-center justify-center lg:flex">
      <div
        className={cn(
          "absolute inset-6 rounded-lg border border-border-subtle bg-surface-raised/50",
          "transition-all duration-(--duration-slow) ease-(--ease-standard)",
          isEngaged && "border-border-strong bg-surface-raised",
        )}
      />
      <div
        className={cn(
          "absolute inset-12 rounded-lg border border-border-subtle bg-surface-base",
          "transition-all duration-(--duration-slow) ease-(--ease-standard)",
          isEngaged && "border-border-strong",
        )}
      />
      <svg
        viewBox="0 0 520 520"
        className="relative h-full max-h-[32rem] w-full text-primary"
        role="img"
        aria-label="Interactive machine learning graph"
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
          <linearGradient id="hero-scan" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="46%" stopColor="currentColor" stopOpacity="0.2" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g opacity={isEngaged ? "0.58" : "0.42"}>
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
          {routes.map((route, index) => (
            <path
              key={route.d}
              className={cn(
                "transition-all duration-(--duration-slow) ease-(--ease-standard)",
                "hero-route-flow",
              )}
              d={route.d}
              stroke={index === 0 ? "url(#hero-line)" : "currentColor"}
              strokeOpacity={isEngaged ? route.opacity + 0.18 : route.opacity}
              strokeWidth={isEngaged ? "3" : "2"}
              style={{ animationDelay: route.delay }}
            />
          ))}
        </g>

        <g aria-hidden="true">
          {routes.map((route, index) => (
            <circle
              key={`${route.d}-signal`}
              className="hero-signal"
              r={index === 0 ? "4.5" : "3.5"}
              fill="currentColor"
              opacity={isEngaged ? "0.88" : "0.56"}
            >
              <animateMotion
                begin={route.delay}
                dur={route.duration}
                path={route.d}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>

        <g>
          {nodes.map(({ cx, cy, r, activeDx, activeDy }, index) => (
            <circle
              key={`${cx}-${cy}`}
              className={cn(
                "transition-all duration-(--duration-slow) ease-(--ease-standard)",
                isActive && "hero-node-active",
              )}
              cx={
                cx +
                (mode === 1
                  ? activeDx
                  : mode === 2
                    ? -activeDy
                    : isHovering
                      ? activeDx / 2
                      : 0)
              }
              cy={
                cy +
                (mode === 1
                  ? activeDy
                  : mode === 2
                    ? activeDx
                    : isHovering
                      ? activeDy / 2
                      : 0)
              }
              r={isEngaged ? r + 2 : r}
              fill="url(#hero-node)"
              opacity={index === 3 ? "0.95" : isEngaged ? "0.9" : "0.72"}
              style={{ animationDelay: `${index * 90}ms` }}
            />
          ))}
        </g>

        <g
          className="transition-transform duration-(--duration-slow) ease-(--ease-standard)"
          transform={centerPositions[mode]}
        >
          <rect
            className="hero-core-halo"
            x="-12"
            y="-12"
            width="128"
            height="128"
            rx="22"
            fill="currentColor"
            opacity={isEngaged ? "0.09" : "0.045"}
          />
          <rect
            width="104"
            height="104"
            rx="16"
            fill="currentColor"
            opacity={isEngaged ? "0.11" : "0.06"}
          />
          <rect
            className={cn(isActive && "hero-core-active")}
            x="16"
            y="16"
            width="72"
            height="72"
            rx="12"
            fill="none"
            stroke="currentColor"
            strokeOpacity={isEngaged ? "0.62" : "0.34"}
            strokeWidth={isEngaged ? "2" : "1"}
          />
          <rect
            className="hero-core-scan"
            x="18"
            y="18"
            width="68"
            height="68"
            rx="11"
            fill="url(#hero-scan)"
            opacity={isEngaged ? "0.9" : "0.62"}
          />
          <g opacity={isEngaged ? "0.72" : "0.42"}>
            {Array.from({ length: 9 }).map((_, index) => (
              <rect
                key={index}
                className="hero-model-cell"
                x={34 + (index % 3) * 12}
                y={40 + Math.floor(index / 3) * 12}
                width="5"
                height="5"
                rx="1"
                fill="currentColor"
                style={{ animationDelay: `${index * 140}ms` }}
              />
            ))}
          </g>
          <path
            d="M34 55h36M52 37v36"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity={isEngaged ? "0.82" : "0.5"}
          />
        </g>
      </svg>

      <button
        type="button"
        aria-label="Activate hero graph"
        aria-pressed={isActive}
        className={cn(
          "absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-lg",
          "cursor-pointer",
          "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-state-focus",
        )}
        onClick={() => setMode((currentMode) => (currentMode + 1) % 3)}
        onPointerEnter={() => setIsHovering(true)}
        onPointerLeave={() => setIsHovering(false)}
      />

      <div
        className="absolute bottom-16 right-20 flex gap-2"
        aria-hidden="true"
      >
        {[0, 1, 2].map((indicator) => (
          <span
            key={indicator}
            className={cn(
              "size-1.5 rounded-full border border-border-strong transition-colors duration-(--duration-fast)",
              indicator === mode ? "bg-primary" : "bg-transparent",
            )}
          />
        ))}
      </div>
    </div>
  );
}
