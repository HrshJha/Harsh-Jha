"use client";

/**
 * SignalCore — the six-node AI pipeline diagram.
 *
 * Nodes (pipeline order): Research → Parse → Rank → Repair → Verify → Feedback
 *
 * Stage-to-color mapping (from tech.md Section 2 — the authoritative source):
 *   Research → Parse  = --color-signal-steel  (#5C7A99)  input / gathering
 *   Rank → Repair     = --color-signal-gold   (#C9A961)  active processing
 *   Verify → Feedback = --color-signal-rust   (#BF5B3D)  resolved / output
 *
 * Six nodes, three stages, three colors — not six arbitrary assignments.
 * This mapping comment must stay here so a future reader never mistakes it
 * for an oversight (rules.md Section 4, DECISIONS.md process rule).
 *
 * Implementation: hand-built SVG + Motion (motion/react, not framer-motion).
 * Animation: connector stroke-dashoffset trace loop — visible at rest, not
 * hover-only (known failure mode from the prior build — explicitly fixed here).
 * Motion values are imported from lib/motion.ts, the JS mirror of
 * MOTION_SYSTEM.md Section 2.
 *
 * prefers-reduced-motion: respected via the single global useReducedMotion hook.
 * When reduced, connectors are fully drawn (no animation), nodes are static.
 */

import { useId } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  CONNECTOR_CYCLE,
  DURATION_FEEDBACK,
  DURATION_REVEAL,
  EASE_DEVELOP,
  EASE_FEEDBACK,
  EASE_PULSE,
  EASE_TRACE,
  STAGGER_BASE,
  nodePulseDelay,
  nodePulseDuration,
  stagger,
} from "@/lib/motion";

/* ─── Color constants — trace to @theme tokens in globals.css ─────────────── */
const TOKEN = {
  steel: "var(--color-signal-steel)",   // Research, Parse
  gold:  "var(--color-signal-gold)",    // Rank, Repair
  rust:  "var(--color-signal-rust)",    // Verify, Feedback
  ink:   "var(--color-ink-dark)",
  surface: "var(--color-surface-dark)", // always darkroom for this diagram
} as const;

/* ─── Node definitions ────────────────────────────────────────────────────── */
interface NodeDef {
  id: string;
  label: string;
  marker: string; // 01-06
  color: string;  // CSS variable string — one of the 3 signal tokens
  stage: "steel" | "gold" | "rust";
}

const NODES: NodeDef[] = [
  // Stage: steel — Research → Parse (input / gathering)
  { id: "research", label: "Research", marker: "01", color: TOKEN.steel, stage: "steel" },
  { id: "parse",    label: "Parse",    marker: "02", color: TOKEN.steel, stage: "steel" },
  // Stage: gold — Rank → Repair (active processing)
  { id: "rank",     label: "Rank",     marker: "03", color: TOKEN.gold,  stage: "gold"  },
  { id: "repair",   label: "Repair",   marker: "04", color: TOKEN.gold,  stage: "gold"  },
  // Stage: rust — Verify → Feedback (resolved / output)
  { id: "verify",   label: "Verify",   marker: "05", color: TOKEN.rust,  stage: "rust"  },
  { id: "feedback", label: "Feedback", marker: "06", color: TOKEN.rust,  stage: "rust"  },
];

/* ─── SVG layout constants ────────────────────────────────────────────────── */
// Desktop (≥640px): horizontal row, 6 nodes across
// The viewBox is designed for 6 horizontal nodes; CSS scales it to container width.
const DESKTOP_VIEW_W = 760;
const DESKTOP_VIEW_H = 200;
const NODE_R = 28;           // node circle radius
const NODE_Y = 100;          // vertical center
const NODE_SPACING = 120;    // center-to-center spacing
const FIRST_X = 60;          // x of first node center

// Mobile (< 640px): vertical stack viewBox
const MOBILE_VIEW_W = 200;
const MOBILE_VIEW_H = 640;
const MOB_NODE_X = 100;
const MOB_NODE_SPACING = 100;
const MOB_FIRST_Y = 56;

/* ─── Animation variants (MOTION_SYSTEM.md §4.1) ─────────────────────────── */
// WHY: boot-in is the only explicit "this is an ordered pipeline" moment.
// Nodes resolve Research -> Feedback using the base stagger and develop ease.
const nodeBootVariants = {
  hidden: { opacity: 0 },
  visible: (index: number) => ({
    opacity: 1,
    transition: {
      duration: DURATION_REVEAL,
      delay: stagger(index, STAGGER_BASE),
      ease: EASE_DEVELOP,
    },
  }),
} as const;

// WHY: hover/focus increases read intensity only. No node scale; this should
// feel like getting a clearer instrument reading, not a toy UI bounce.
const nodeReadGlowVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0 },
  active: { opacity: 0.36 },
} as const;

/* ─── Connector animation component ──────────────────────────────────────── */
interface ConnectorProps {
  x1: number; y1: number;
  x2: number; y2: number;
  color: string;
  index: number;
  shouldReduce: boolean;
}

function Connector({ x1, y1, x2, y2, color, index, shouldReduce }: ConnectorProps) {
  const len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const strokeDash = `${len * 0.55} ${len}`;

  return (
    <g>
      {/* Static base line — always visible, gives the "track" */}
      <line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={color}
        strokeWidth={2}
        strokeOpacity={0.25}
      />
      {/* Animated travelling dot/trace — the signal pulse */}
      {shouldReduce ? (
        // Reduced motion: show fully drawn connector, no animation
        <line
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={color}
          strokeWidth={2.5}
          strokeOpacity={0.8}
        />
      ) : (
        <motion.line
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeDasharray={strokeDash}
          // WHY: constant-rate dashoffset reads as signal travel along the wire,
          // not a decorative eased underline. It runs at rest, never on hover.
          initial={{ strokeDashoffset: len }}
          animate={{ strokeDashoffset: -len }}
          transition={{
            duration: CONNECTOR_CYCLE,
            delay: stagger(index, STAGGER_BASE),
            ease: EASE_TRACE,
            repeat: Infinity,
          }}
        />
      )}
    </g>
  );
}

/* ─── Node animation component ───────────────────────────────────────────── */
interface NodeCircleProps {
  cx: number; cy: number;
  r: number;
  color: string;
  label: string;
  marker: string;
  index: number;
  shouldReduce: boolean;
  isVertical?: boolean;
}

function NodeCircle({ cx, cy, r, color, label, marker, index, shouldReduce, isVertical }: NodeCircleProps) {
  const labelX = cx;
  const markerY = isVertical ? cy - r - 18 : cy - r - 14;
  const labelY   = isVertical ? cy + r + 20 : cy + r + 16;

  return (
    <motion.g
      tabIndex={0}
      role="img"
      aria-label={`${marker} ${label} Signal Core node`}
      initial={shouldReduce ? false : "hidden"}
      animate="visible"
      whileHover={shouldReduce ? undefined : "active"}
      whileFocus={shouldReduce ? undefined : "active"}
      custom={index}
      variants={shouldReduce ? undefined : nodeBootVariants}
    >
      <motion.circle
        cx={cx} cy={cy} r={r + 12}
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        variants={nodeReadGlowVariants}
        transition={{ duration: DURATION_FEEDBACK, ease: EASE_FEEDBACK }}
      />
      {/* Outer glow ring — pulse animation */}
      {!shouldReduce && (
        <motion.circle
          cx={cx} cy={cy} r={r + 8}
          fill="none"
          stroke={color}
          strokeWidth={1}
          // WHY: ambient glow breathing marks each node as live telemetry.
          // Jittered duration/delay prevents the six nodes from syncing up.
          initial={{ opacity: 0.06 }}
          animate={{ opacity: [0.06, 0.22, 0.06], strokeWidth: [1, 1.8, 1] }}
          transition={{
            duration: nodePulseDuration(index),
            delay: stagger(index, STAGGER_BASE) + nodePulseDelay(index),
            ease: EASE_PULSE,
            repeat: Infinity,
          }}
        />
      )}
      {/* Inner filled node */}
      <circle
        cx={cx} cy={cy} r={r}
        fill="var(--color-surface-dark)"
        stroke={color}
        strokeWidth={2}
      />
      {/* Inner accent dot */}
      <circle
        cx={cx} cy={cy} r={r * 0.3}
        fill={color}
        fillOpacity={0.7}
      />
      {/* Numbered marker — justified because this IS genuinely sequential content
          (rules.md Section 2: "numbered markers only for genuinely sequential content") */}
      <text
        x={labelX} y={markerY}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={color}
        fontSize={10}
        fontFamily="var(--font-jetbrains-mono), monospace"
        opacity={0.65}
      >
        {marker}
      </text>
      {/* Node label */}
      <text
        x={labelX} y={labelY}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={color}
        fontSize={11}
        fontFamily="var(--font-jetbrains-mono), monospace"
        letterSpacing={0.5}
      >
        {label}
      </text>
    </motion.g>
  );
}

/* ─── Desktop SVG (horizontal) ────────────────────────────────────────────── */
function DesktopSVG({
  gradientIdPrefix,
  shouldReduce,
}: {
  gradientIdPrefix: string;
  shouldReduce: boolean;
}) {
  const nodePositions = NODES.map((_, i) => ({
    cx: FIRST_X + i * NODE_SPACING,
    cy: NODE_Y,
  }));
  const stageFields = [
    {
      id: `${gradientIdPrefix}-input-field`,
      cx: FIRST_X + NODE_SPACING * 0.5,
      rx: NODE_SPACING * 1.45,
      color: TOKEN.steel,
    },
    {
      id: `${gradientIdPrefix}-process-field`,
      cx: FIRST_X + NODE_SPACING * 2.55,
      rx: NODE_SPACING * 1.55,
      color: TOKEN.gold,
    },
    {
      id: `${gradientIdPrefix}-output-field`,
      cx: FIRST_X + NODE_SPACING * 4.62,
      rx: NODE_SPACING * 1.62,
      color: TOKEN.rust,
    },
  ];

  return (
    <svg
      viewBox={`0 0 ${DESKTOP_VIEW_W} ${DESKTOP_VIEW_H}`}
      width="100%"
      aria-label="Signal Core pipeline: Research, Parse, Rank, Repair, Verify, Feedback"
      role="img"
    >
      <defs>
        {stageFields.map((field) => (
          <radialGradient
            key={field.id}
            id={field.id}
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor={field.color} stopOpacity="0.12" />
            <stop offset="46%" stopColor={field.color} stopOpacity="0.045" />
            <stop offset="100%" stopColor={field.color} stopOpacity="0" />
          </radialGradient>
        ))}
      </defs>

      {/* Stage illumination — feathered fields, not rectangular panels. */}
      {stageFields.map((field) => (
        <ellipse
          key={field.id}
          cx={field.cx}
          cy={NODE_Y}
          rx={field.rx}
          ry={78}
          fill={`url(#${field.id})`}
        />
      ))}

      {/* Connectors (render before nodes so nodes sit on top) */}
      {NODES.slice(0, -1).map((_, i) => {
        const from = nodePositions[i];
        const to   = nodePositions[i + 1];
        // Connector uses the color of the SOURCE node
        const color = NODES[i].color;
        return (
          <Connector
            key={i}
            x1={from.cx + NODE_R} y1={from.cy}
            x2={to.cx - NODE_R}   y2={to.cy}
            color={color}
            index={i}
            shouldReduce={shouldReduce}
          />
        );
      })}

      {/* Nodes */}
      {NODES.map((node, i) => (
        <NodeCircle
          key={node.id}
          cx={nodePositions[i].cx}
          cy={nodePositions[i].cy}
          r={NODE_R}
          color={node.color}
          label={node.label}
          marker={node.marker}
          index={i}
          shouldReduce={shouldReduce}
        />
      ))}
    </svg>
  );
}

/* ─── Mobile SVG (vertical stack) ────────────────────────────────────────── */
function MobileSVG({ shouldReduce }: { shouldReduce: boolean }) {
  const nodePositions = NODES.map((_, i) => ({
    cx: MOB_NODE_X,
    cy: MOB_FIRST_Y + i * MOB_NODE_SPACING,
  }));

  const mobR = 22;

  return (
    <svg
      viewBox={`0 0 ${MOBILE_VIEW_W} ${MOBILE_VIEW_H}`}
      width="100%"
      aria-label="Signal Core pipeline: Research, Parse, Rank, Repair, Verify, Feedback"
      role="img"
    >
      {/* Connectors */}
      {NODES.slice(0, -1).map((_, i) => {
        const from = nodePositions[i];
        const to   = nodePositions[i + 1];
        const color = NODES[i].color;
        return (
          <Connector
            key={i}
            x1={from.cx} y1={from.cy + mobR}
            x2={to.cx}   y2={to.cy - mobR}
            color={color}
            index={i}
            shouldReduce={shouldReduce}
          />
        );
      })}

      {/* Nodes */}
      {NODES.map((node, i) => (
        <NodeCircle
          key={node.id}
          cx={nodePositions[i].cx}
          cy={nodePositions[i].cy}
          r={mobR}
          color={node.color}
          label={node.label}
          marker={node.marker}
          index={i}
          shouldReduce={shouldReduce}
          isVertical
        />
      ))}
    </svg>
  );
}

/* ─── Stage legend ────────────────────────────────────────────────────────── */
const STAGE_LEGEND = [
  { label: "Input / Gathering",   color: TOKEN.steel, nodes: "01 – 02" },
  { label: "Active Processing",   color: TOKEN.gold,  nodes: "03 – 04" },
  { label: "Resolved / Output",   color: TOKEN.rust,  nodes: "05 – 06" },
] as const;

/* ─── Main export ─────────────────────────────────────────────────────────── */
export function SignalCore() {
  const shouldReduce = useReducedMotion();
  const gradientIdPrefix = useId().replace(/:/g, "");

  return (
    <div className="w-full select-none">
      {/* Desktop layout (hidden on small screens) */}
      <div className="hidden sm:block w-full px-4">
        <DesktopSVG
          gradientIdPrefix={gradientIdPrefix}
          shouldReduce={shouldReduce}
        />
      </div>

      {/* Mobile layout (shown only on small screens) */}
      <div className="block sm:hidden w-full max-w-[200px] mx-auto">
        <MobileSVG shouldReduce={shouldReduce} />
      </div>

      {/* Stage legend — color meaning is always visible, never guessed */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-2 sm:gap-8 mt-4 sm:mt-2 px-4 max-w-full overflow-hidden">
        {STAGE_LEGEND.map((stage) => (
          <div key={stage.label} className="flex min-w-0 items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: stage.color }}
              aria-hidden="true"
            />
            <span
              className="text-[9px] sm:text-[10px] tracking-wider uppercase opacity-60 whitespace-nowrap"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: stage.color,
              }}
            >
              {stage.nodes} — {stage.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
