"use client";

import { identity } from "@/content/identity";
import type { CSSProperties, PointerEvent } from "react";
import { useRef } from "react";

interface SignalNode {
  readonly id: string;
  readonly label: string;
  readonly x: number;
  readonly y: number;
  readonly mobileX: number;
  readonly mobileY: number;
  readonly side: "left" | "right";
  readonly startX: number;
  readonly startY: number;
  readonly controlX: number;
  readonly controlY: number;
  readonly mobileStartX: number;
  readonly mobileStartY: number;
  readonly delay: number;
}

const SIGNAL_NODES = [
  {
    id: "data",
    label: "Data",
    x: 49,
    y: 19,
    mobileX: 50,
    mobileY: 24,
    side: "right",
    startX: 50,
    startY: 44,
    controlX: 50,
    controlY: 34,
    mobileStartX: 50,
    mobileStartY: 44,
    delay: 0,
  },
  {
    id: "training",
    label: "Training",
    x: 76,
    y: 31,
    mobileX: 68,
    mobileY: 36,
    side: "right",
    startX: 56,
    startY: 47,
    controlX: 64,
    controlY: 39,
    mobileStartX: 55,
    mobileStartY: 47,
    delay: 600,
  },
  {
    id: "evaluation",
    label: "Evaluation",
    x: 70,
    y: 70,
    mobileX: 65,
    mobileY: 62,
    side: "right",
    startX: 55,
    startY: 54,
    controlX: 63,
    controlY: 61,
    mobileStartX: 54,
    mobileStartY: 54,
    delay: 1200,
  },
  {
    id: "deployment",
    label: "Deployment",
    x: 34,
    y: 74,
    mobileX: 36,
    mobileY: 64,
    side: "left",
    startX: 46,
    startY: 55,
    controlX: 40,
    controlY: 65,
    mobileStartX: 46,
    mobileStartY: 55,
    delay: 1800,
  },
  {
    id: "users",
    label: "Users",
    x: 24,
    y: 36,
    mobileX: 30,
    mobileY: 39,
    side: "left",
    startX: 44,
    startY: 47,
    controlX: 35,
    controlY: 43,
    mobileStartX: 45,
    mobileStartY: 48,
    delay: 2400,
  },
] as const satisfies readonly SignalNode[];

const SIGNAL_LOOP_MS = 3000;
const SIGNAL_START_MS = 1400;

function getNodeStyle(node: SignalNode, index: number) {
  return {
    "--signal-x": `${node.x}%`,
    "--signal-y": `${node.y}%`,
    "--signal-mobile-x": `${node.mobileX}%`,
    "--signal-mobile-y": `${node.mobileY}%`,
    "--signal-node-delay": `${700 + index * 100}ms`,
    "--signal-idle-delay": `${index * 420}ms`,
    "--signal-flash-delay": `${SIGNAL_START_MS + node.delay}ms`,
  } as CSSProperties;
}

function getLineStyle(index: number) {
  return {
    "--signal-line-delay": `${500 + index * 80}ms`,
  } as CSSProperties;
}

function getSignalPath(node: SignalNode) {
  return `M ${node.startX} ${node.startY} Q ${node.controlX} ${node.controlY} ${node.x} ${node.y}`;
}

function getMobileSignalPath(node: SignalNode) {
  return `M ${node.mobileStartX} ${node.mobileStartY} L ${node.mobileX} ${node.mobileY}`;
}

export function HeroVisual() {
  const panelRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    const isDesktopPointer = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 80rem)",
    ).matches;

    if (!isDesktopPointer) {
      return;
    }

    const bounds = panel.getBoundingClientRect();
    const localX = event.clientX - bounds.left;
    const localY = event.clientY - bounds.top;
    const x = (localX / bounds.width) * 100;
    const y = (localY / bounds.height) * 100;
    const tiltX = ((50 - y) / 50) * 4;
    const tiltY = ((x - 50) / 50) * 4;

    panel.style.setProperty("--visual-glow-x", `${localX.toFixed(2)}px`);
    panel.style.setProperty("--visual-glow-y", `${localY.toFixed(2)}px`);
    panel.style.setProperty("--visual-tilt-x", `${tiltX.toFixed(2)}deg`);
    panel.style.setProperty("--visual-tilt-y", `${tiltY.toFixed(2)}deg`);
  }

  function handlePointerLeave() {
    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    panel.style.setProperty("--visual-glow-x", "50%");
    panel.style.setProperty("--visual-glow-y", "50%");
    panel.style.setProperty("--visual-tilt-x", "0deg");
    panel.style.setProperty("--visual-tilt-y", "0deg");
  }

  return (
    <aside
      aria-label="AI signal core visualization"
      className="hero-visual-shell"
    >
      <div
        ref={panelRef}
        className="ai-systems-panel signal-core-panel"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className="signal-core-stage">
          <svg
            viewBox="0 0 100 100"
            className="signal-core-graph signal-core-graph-desktop"
            role="img"
            aria-labelledby="signal-core-title signal-core-description"
            preserveAspectRatio="none"
          >
            <title id="signal-core-title">
              AI systems architecture flow: Signal Core
            </title>
            <desc id="signal-core-description">
              A central model core sends signals to data, training, evaluation,
              deployment, and users.
            </desc>
            {SIGNAL_NODES.map((node, index) => (
              <path
                key={node.id}
                className="signal-core-line"
                d={getSignalPath(node)}
                pathLength="1"
                style={getLineStyle(index)}
              />
            ))}
            {SIGNAL_NODES.map((node) => (
              <circle key={node.id} className="signal-core-pulse" r="0.85">
                <animateMotion
                  begin={`${(SIGNAL_START_MS + node.delay) / 1000}s`}
                  calcMode="linear"
                  dur={`${SIGNAL_LOOP_MS / 1000}s`}
                  keyPoints="0;1;1"
                  keyTimes="0;0.3;1"
                  path={getSignalPath(node)}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  begin={`${(SIGNAL_START_MS + node.delay) / 1000}s`}
                  dur={`${SIGNAL_LOOP_MS / 1000}s`}
                  keyTimes="0;0.08;0.24;0.3;1"
                  repeatCount="indefinite"
                  values="0;1;1;0;0"
                />
              </circle>
            ))}
          </svg>

          <svg
            viewBox="0 0 100 100"
            className="signal-core-graph signal-core-graph-mobile"
            role="img"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            {SIGNAL_NODES.map((node, index) => (
              <path
                key={node.id}
                className="signal-core-line"
                d={getMobileSignalPath(node)}
                pathLength="1"
                style={getLineStyle(index)}
              />
            ))}
            {SIGNAL_NODES.slice(0, 3).map((node) => (
              <circle key={node.id} className="signal-core-pulse" r="0.85">
                <animateMotion
                  begin={`${(SIGNAL_START_MS + node.delay) / 1000}s`}
                  calcMode="linear"
                  dur={`${SIGNAL_LOOP_MS / 1000}s`}
                  keyPoints="0;1;1"
                  keyTimes="0;0.3;1"
                  path={getMobileSignalPath(node)}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  begin={`${(SIGNAL_START_MS + node.delay) / 1000}s`}
                  dur={`${SIGNAL_LOOP_MS / 1000}s`}
                  keyTimes="0;0.08;0.24;0.3;1"
                  repeatCount="indefinite"
                  values="0;1;1;0;0"
                />
              </circle>
            ))}
          </svg>

          <div className="signal-core-orb" aria-hidden="true">
            <span>Model Core</span>
          </div>

          <div className="signal-core-nodes" aria-hidden="true">
            {SIGNAL_NODES.map((node, index) => (
              <div
                key={node.id}
                className={[
                  "signal-core-node",
                  `signal-core-node-${node.side}`,
                ].join(" ")}
                style={getNodeStyle(node, index)}
              >
                <span className="signal-core-node-dot" />
                <span className="signal-core-node-label">{node.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="signal-core-readout" aria-hidden="true">
          <p>
            <span className="signal-core-status-dot" />
            Building Production AI Systems
          </p>
          <strong>{identity.vision.primaryGoal}</strong>
          <span>Updated today</span>
        </div>

        <style>{`
          .signal-core-panel.ai-systems-panel {
            --text-primary: var(--hero-text-primary, #f5f1ea);
            --text-secondary: var(--hero-text-secondary, #a8a29a);
            --text-tertiary: var(--hero-text-tertiary, #6b655d);
            --accent: var(--hero-accent, #e8563a);
            --accent-soft: var(--hero-accent-soft, rgb(232 86 58 / 0.12));
            --panel-bg: var(--hero-bg-elevated, #121110);
            --signal-ease: cubic-bezier(0.16, 1, 0.3, 1);
            height: clamp(400px, 34vw, 440px);
            min-height: 0;
            max-width: 560px;
            aspect-ratio: auto;
            overflow: hidden;
            background:
              radial-gradient(
                circle at 65% 35%,
                rgb(232 86 58 / 0.08),
                transparent 60%
              ),
              radial-gradient(
                circle at var(--visual-glow-x, 50%) var(--visual-glow-y, 50%),
                rgb(232 86 58 / 0.06),
                transparent 34%
              ),
              var(--panel-bg);
            animation: signal-panel-enter 600ms var(--signal-ease) both;
          }

          .signal-core-panel.ai-systems-panel::before {
            display: none;
          }

          .signal-core-panel.ai-systems-panel::after {
            background: radial-gradient(
              circle at center,
              transparent 48%,
              rgb(10 9 8 / 0.64)
            );
          }

          .signal-core-stage {
            position: absolute;
            inset: var(--spacing-6) var(--spacing-6)
              calc(var(--spacing-24) + var(--spacing-6)) var(--spacing-6);
            overflow: visible;
          }

          .signal-core-graph {
            position: absolute;
            inset: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            overflow: visible;
          }

          .signal-core-graph-mobile {
            display: none;
          }

          .signal-core-line {
            fill: none;
            stroke: var(--accent);
            stroke-dasharray: 1;
            stroke-dashoffset: 1;
            stroke-linecap: round;
            stroke-width: 1.5px;
            opacity: 0.3;
            vector-effect: non-scaling-stroke;
            animation: signal-line-draw 420ms var(--signal-ease)
              var(--signal-line-delay) both;
          }

          .signal-core-pulse {
            fill: var(--accent);
            filter: drop-shadow(0 0 6px rgb(232 86 58 / 0.7));
            opacity: 0;
          }

          .signal-core-orb {
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: 4;
            display: grid;
            width: 72px;
            height: 72px;
            place-items: center;
            border-radius: 999px;
            background:
              radial-gradient(
                ellipse 64% 36% at 50% 50%,
                rgb(26 16 6 / 0.9),
                transparent 64%
              ),
              radial-gradient(
                circle,
                rgb(232 86 58 / 0.78) 0%,
                rgb(232 86 58 / 0.31) 42%,
                transparent 72%
              ),
              #1a1006;
            color: var(--text-primary);
            font-size: 0.625rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            line-height: 1.1;
            text-align: center;
            text-transform: uppercase;
            transform: translate3d(-50%, -50%, 0) scale(0.7);
            animation:
              signal-core-enter 400ms var(--signal-ease) 300ms both,
              signal-core-breathe 4s ease-in-out 900ms infinite;
          }

          .signal-core-orb::before {
            position: absolute;
            inset: calc(0rem - var(--spacing-6));
            z-index: -1;
            border-radius: inherit;
            background: radial-gradient(
              circle,
              rgb(232 86 58 / 0.25),
              transparent 68%
            );
            content: "";
            filter: blur(var(--spacing-6));
            opacity: 0.3;
            transform: scale(1);
            animation: signal-core-halo 3s ease-in-out 1400ms infinite;
          }

          .signal-core-orb > span {
            max-width: 7ch;
            opacity: 1;
            text-shadow: 0 1px 8px rgb(0 0 0 / 0.62);
          }

          .signal-core-nodes {
            position: absolute;
            inset: 0;
            z-index: 3;
            pointer-events: none;
          }

          .signal-core-node {
            position: absolute;
            left: var(--signal-x);
            top: var(--signal-y);
            display: block;
            color: var(--text-primary);
            font-size: 0.9375rem;
            font-weight: 500;
            line-height: var(--leading-label);
            opacity: 0;
            transform: translate3d(0, -50%, 0) scale(0.86);
            animation: signal-node-enter 300ms var(--signal-ease)
              var(--signal-node-delay) both;
          }

          .signal-core-node-dot {
            position: absolute;
            left: 0;
            top: 50%;
            width: var(--spacing-2);
            height: var(--spacing-2);
            flex: 0 0 var(--spacing-2);
            border-radius: 999px;
            background: var(--accent);
            transform: translate3d(-50%, -50%, 0);
            animation:
              signal-node-idle 2.5s ease-in-out var(--signal-idle-delay)
                infinite,
              signal-node-flash 3s ease-in-out var(--signal-flash-delay)
                infinite;
          }

          .signal-core-node-dot::before {
            position: absolute;
            inset: calc(0rem - var(--spacing-2));
            border-radius: inherit;
            background: radial-gradient(
              circle,
              rgb(232 86 58 / 0.34),
              transparent 70%
            );
            content: "";
            opacity: 0.7;
          }

          .signal-core-node-label {
            display: block;
            margin-left: calc(var(--spacing-2) + var(--spacing-1));
            white-space: nowrap;
          }

          .signal-core-readout {
            position: absolute;
            right: var(--spacing-6);
            bottom: var(--spacing-6);
            left: var(--spacing-6);
            z-index: 5;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            color: var(--text-tertiary);
          }

          .signal-core-readout > p,
          .signal-core-readout > strong,
          .signal-core-readout > span {
            margin: 0;
            opacity: 0;
            transform: translate3d(0, var(--spacing-2), 0);
            animation: signal-readout-enter 320ms var(--signal-ease) both;
          }

          .signal-core-readout > p {
            display: inline-flex;
            align-items: center;
            gap: var(--spacing-2);
            color: var(--text-secondary);
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.06em;
            line-height: var(--leading-label);
            text-transform: uppercase;
            animation-delay: 1000ms;
          }

          .signal-core-readout > strong {
            color: var(--text-primary);
            font-size: 1.125rem;
            font-weight: 600;
            line-height: var(--leading-heading);
            animation-delay: 1080ms;
          }

          .signal-core-readout > span {
            color: var(--text-tertiary);
            font-size: 0.75rem;
            line-height: var(--leading-label);
            animation-delay: 1160ms;
          }

          .signal-core-status-dot {
            position: relative;
            width: var(--spacing-2);
            height: var(--spacing-2);
            flex: 0 0 var(--spacing-2);
            border-radius: 999px;
            background: #4ade80;
          }

          .signal-core-status-dot::before {
            position: absolute;
            inset: calc(0rem - var(--spacing-2));
            border-radius: inherit;
            background: radial-gradient(
              circle,
              rgb(74 222 128 / 0.28),
              transparent 70%
            );
            content: "";
            animation: signal-status-pulse 2s ease-in-out infinite;
          }

          @keyframes signal-panel-enter {
            from {
              opacity: 0;
              transform: perspective(1000px) translate3d(var(--spacing-8), 0, 0)
                rotateX(var(--visual-tilt-x, 0deg))
                rotateY(var(--visual-tilt-y, 0deg));
            }

            to {
              opacity: 1;
              transform: perspective(1000px) translate3d(0, 0, 0)
                rotateX(var(--visual-tilt-x, 0deg))
                rotateY(var(--visual-tilt-y, 0deg));
            }
          }

          @keyframes signal-core-enter {
            from {
              opacity: 0;
              transform: translate3d(-50%, -50%, 0) scale(0.7);
            }

            to {
              opacity: 1;
              transform: translate3d(-50%, -50%, 0) scale(1);
            }
          }

          @keyframes signal-core-breathe {
            0%,
            100% {
              transform: translate3d(-50%, -50%, 0) scale(1);
            }

            50% {
              transform: translate3d(-50%, -50%, 0) scale(1.06);
            }
          }

          @keyframes signal-core-halo {
            0%,
            100% {
              opacity: 0.3;
              transform: scale(1);
            }

            50% {
              opacity: 0.6;
              transform: scale(1.08);
            }
          }

          @keyframes signal-line-draw {
            from {
              stroke-dashoffset: 1;
            }

            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes signal-node-enter {
            from {
              opacity: 0;
              transform: translate3d(0, -50%, 0) scale(0.86);
            }

            to {
              opacity: 1;
              transform: translate3d(0, -50%, 0) scale(1);
            }
          }

          @keyframes signal-node-idle {
            0%,
            100% {
              opacity: 0.6;
            }

            50% {
              opacity: 1;
            }
          }

          @keyframes signal-node-flash {
            0%,
            27%,
            36%,
            100% {
              transform: translate3d(-50%, -50%, 0) scale(1);
            }

            31% {
              transform: translate3d(-50%, -50%, 0) scale(1.4);
            }
          }

          @keyframes signal-readout-enter {
            from {
              opacity: 0;
              transform: translate3d(0, var(--spacing-2), 0);
            }

            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }

          @keyframes signal-status-pulse {
            0%,
            100% {
              opacity: 0.35;
              transform: scale(0.7);
            }

            50% {
              opacity: 0.8;
              transform: scale(1);
            }
          }

          @media (min-width: 48rem) and (max-width: 79.999rem) {
            .signal-core-panel.ai-systems-panel {
              height: clamp(380px, 48vw, 430px);
            }

            .signal-core-stage {
              inset: var(--spacing-6) var(--spacing-6)
                calc(var(--spacing-24) + var(--spacing-6)) var(--spacing-6);
            }

            .signal-core-orb {
              width: 56px;
              height: 56px;
              font-size: 0.5625rem;
            }

            .signal-core-node {
              font-size: 0.8125rem;
            }
          }

          @media (max-width: 47.999rem) {
            .signal-core-panel.ai-systems-panel {
              height: 360px;
              min-height: 0;
              aspect-ratio: auto;
            }

            .signal-core-stage {
              inset: var(--spacing-4) var(--spacing-4)
                calc(var(--spacing-16) + var(--spacing-8)) var(--spacing-4);
            }

            .signal-core-graph-desktop {
              display: none;
            }

            .signal-core-graph-mobile {
              display: block;
            }

            .signal-core-orb {
              width: 44px;
              height: 44px;
              font-size: 0.5rem;
            }

            .signal-core-node {
              left: var(--signal-mobile-x);
              top: var(--signal-mobile-y);
              font-size: 0.8125rem;
            }

            .signal-core-readout {
              right: var(--spacing-4);
              bottom: var(--spacing-4);
              left: var(--spacing-4);
            }

            .signal-core-readout > p {
              font-size: 0.6875rem;
            }

            .signal-core-readout > strong {
              font-size: 1rem;
            }

            .signal-core-readout > span {
              display: none;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .signal-core-panel.ai-systems-panel,
            .signal-core-line,
            .signal-core-orb,
            .signal-core-orb::before,
            .signal-core-node,
            .signal-core-node-dot,
            .signal-core-readout > p,
            .signal-core-readout > strong,
            .signal-core-readout > span,
            .signal-core-status-dot::before {
              animation: none !important;
            }

            .signal-core-pulse {
              display: none;
            }

            .signal-core-line {
              stroke-dashoffset: 0;
            }

            .signal-core-panel.ai-systems-panel {
              opacity: 1;
              transform: none !important;
            }

            .signal-core-orb,
            .signal-core-node,
            .signal-core-readout > p,
            .signal-core-readout > strong,
            .signal-core-readout > span {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </aside>
  );
}
