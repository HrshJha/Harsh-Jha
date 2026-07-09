"use client";

import { motion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { ScrollLinkedReveal } from "@/components/ScrollLinkedReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  DURATION_BASE,
  EASE_FEEDBACK,
  HOVER_LIFT,
} from "@/lib/motion";

type ProjectCaseGridProps = {
  accentColor: string;
  problem: string;
  solution: string;
  architecture: string;
  keyFeatures: string[];
};

type CasePanelProps = {
  accentColor: string;
  children: ReactNode;
  index: number;
  shouldReduce: boolean;
  title: string;
};

function CasePanel({ accentColor, children, index, shouldReduce, title }: CasePanelProps) {
  const panelStyle = {
    "--case-accent": accentColor,
  } as CSSProperties;

  return (
    <motion.section
      whileHover={
        shouldReduce
          ? undefined
          : {
              y: HOVER_LIFT,
              transition: { duration: DURATION_BASE, ease: EASE_FEEDBACK },
            }
      }
      className="
        group/case relative min-h-[300px] overflow-hidden rounded-xl border
        p-6 outline-none sm:p-7
        case-study-panel
      "
      style={panelStyle}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 group-hover/case:scale-x-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
          transition: `transform var(--motion-base) var(--ease-trace)`,
        }}
      />

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-px opacity-60"
        style={{
          background: `linear-gradient(180deg, ${accentColor}, transparent 72%)`,
        }}
      />

      <div
        aria-hidden="true"
        className="absolute right-5 top-5 h-10 w-10 rounded-full"
        style={{
          border: `1px solid ${accentColor}`,
          opacity: 0.12,
        }}
      />

      <div
        aria-hidden="true"
        className="case-study-panel__glow absolute inset-0 opacity-0 group-hover/case:opacity-100"
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-7 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            <p
              className="text-[11px] uppercase tracking-[0.18em]"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--color-signal-gold)",
                opacity: 0.8,
              }}
            >
              {title}
            </p>
          </div>
          <span
            className="text-[10px] uppercase tracking-[0.18em] opacity-30"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "var(--color-ink)",
            }}
          >
            0{index + 1}
          </span>
        </div>

        <div
          className="case-study-panel__body text-sm leading-relaxed sm:text-base"
          style={{
            fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
            color: "var(--color-ink)",
          }}
        >
          {children}
        </div>
      </div>
    </motion.section>
  );
}

export function ProjectCaseGrid({
  accentColor,
  problem,
  solution,
  architecture,
  keyFeatures,
}: ProjectCaseGridProps) {
  const shouldReduce = useReducedMotion();

  const panels = [
    {
      title: "The Problem",
      content: <p>{problem}</p>,
    },
    {
      title: "The Solution",
      content: <p>{solution}</p>,
    },
    {
      title: "Architecture",
      content: <p>{architecture}</p>,
    },
    {
      title: "Key Features",
      content: (
        <ul className="space-y-2.5">
          {keyFeatures.map((feature) => (
            <li
              key={feature}
              className="flex gap-3"
            >
              <span
                aria-hidden="true"
                className="mt-[0.55em] h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ background: accentColor }}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <ScrollLinkedReveal
      sceneId="project-case-grid"
      className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2"
      distance={6}
    >
      {panels.map((panel, index) => (
        <CasePanel
          key={panel.title}
          title={panel.title}
          index={index}
          accentColor={accentColor}
          shouldReduce={shouldReduce}
        >
          {panel.content}
        </CasePanel>
      ))}
    </ScrollLinkedReveal>
  );
}
