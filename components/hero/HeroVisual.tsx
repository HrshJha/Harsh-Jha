"use client";

import { identity } from "@/content/identity";
import type { CSSProperties, PointerEvent } from "react";
import { useRef } from "react";

const CANVAS_WIDTH = 760;
const CANVAS_HEIGHT = 475;
const CENTER = { x: 50, y: 50 } as const;
const CENTER_POINT = {
  x: (CANVAS_WIDTH * CENTER.x) / 100,
  y: (CANVAS_HEIGHT * CENTER.y) / 100,
} as const;
const PATH_BEND_RATIO = 0.18;
const RING_RADII = [184, 128, 72] as const;

const SYSTEM_NODES = [
  {
    label: "Models",
    x: 50,
    y: 16,
    isFocus: false,
  },
  {
    label: "Data",
    x: 16,
    y: 50,
    isFocus: false,
  },
  {
    label: "Agents",
    x: 84,
    y: 50,
    isFocus: true,
  },
  {
    label: "Deployment",
    x: 24,
    y: 82,
    isFocus: false,
  },
  {
    label: "Evaluation",
    x: 50,
    y: 88,
    isFocus: false,
  },
] as const;

function toCanvasPoint(node: { x: number; y: number }) {
  return {
    x: (CANVAS_WIDTH * node.x) / 100,
    y: (CANVAS_HEIGHT * node.y) / 100,
  };
}

function formatCoordinate(value: number) {
  return Number.isInteger(value) ? value.toString() : value.toFixed(1);
}

function buildConnectionPath(node: { x: number; y: number }) {
  const start = toCanvasPoint(node);
  const end = CENTER_POINT;
  const deltaX = end.x - start.x;
  const deltaY = end.y - start.y;
  const bendX = -deltaY * PATH_BEND_RATIO;
  const bendY = deltaX * PATH_BEND_RATIO;
  const controlOne = {
    x: start.x + deltaX / 3 + bendX,
    y: start.y + deltaY / 3 + bendY,
  };
  const controlTwo = {
    x: start.x + (deltaX * 2) / 3 + bendX,
    y: start.y + (deltaY * 2) / 3 + bendY,
  };

  return [
    "M",
    formatCoordinate(start.x),
    formatCoordinate(start.y),
    "C",
    formatCoordinate(controlOne.x),
    formatCoordinate(controlOne.y),
    formatCoordinate(controlTwo.x),
    formatCoordinate(controlTwo.y),
    formatCoordinate(end.x),
    formatCoordinate(end.y),
  ].join(" ");
}

function getNodeStyle(node: { x: number; y: number }) {
  return {
    "--graph-node-x": `${node.x}%`,
    "--graph-node-y": `${node.y}%`,
  } as CSSProperties;
}

export function HeroVisual() {
  const panelRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    const bounds = panel.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    const tiltX = ((x - 50) / 50).toFixed(3);
    const tiltY = ((50 - y) / 50).toFixed(3);

    panel.style.setProperty("--hero-pointer-x", `${x.toFixed(2)}%`);
    panel.style.setProperty("--hero-pointer-y", `${y.toFixed(2)}%`);
    panel.style.setProperty("--hero-tilt-x", `calc(${tiltX} * 1deg)`);
    panel.style.setProperty("--hero-tilt-y", `calc(${tiltY} * 1deg)`);
    panel.style.setProperty("--hero-grid-x", `${((x - 50) / 12).toFixed(2)}px`);
    panel.style.setProperty("--hero-grid-y", `${((y - 50) / 12).toFixed(2)}px`);
  }

  function handlePointerLeave() {
    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    panel.style.setProperty("--hero-pointer-x", "50%");
    panel.style.setProperty("--hero-pointer-y", "50%");
    panel.style.setProperty("--hero-tilt-x", "0deg");
    panel.style.setProperty("--hero-tilt-y", "0deg");
    panel.style.setProperty("--hero-grid-x", "0px");
    panel.style.setProperty("--hero-grid-y", "0px");
  }

  return (
    <aside aria-label="AI systems focus map" className="w-full">
      <div
        ref={panelRef}
        className="ai-systems-panel"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className="ai-systems-grid" aria-hidden="true" />
        <div className="ai-systems-glow" aria-hidden="true" />
        <div className="ai-live-status" aria-hidden="true">
          <span className="ai-live-status-dot" />
          <span>Building</span>
          <span>Current Focus</span>
          <strong>Production AI Systems</strong>
        </div>

        <svg
          viewBox="0 0 760 475"
          className="ai-systems-graph"
          role="img"
          aria-labelledby="hero-visual-title hero-visual-description"
        >
          <title id="hero-visual-title">AI systems focus map</title>
          <desc id="hero-visual-description">
            Animated pipeline connecting data, models, agents, evaluation, and
            deployment.
          </desc>
          <g className="ai-systems-edges" fill="none" strokeLinecap="round">
            {SYSTEM_NODES.map((node) => (
              <path
                key={node.label}
                className={[
                  "ai-systems-edge",
                  node.isFocus
                    ? "ai-systems-edge-primary"
                    : "ai-systems-edge-secondary",
                ].join(" ")}
                d={buildConnectionPath(node)}
              />
            ))}
          </g>

          <g className="ai-systems-flow" aria-hidden="true">
            {SYSTEM_NODES.map((node, index) => (
              <circle key={node.label} className="ai-flow-particle" r="4">
                <animateMotion
                  begin={`${index * -2.4}s`}
                  dur="12s"
                  path={buildConnectionPath(node)}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </g>

          <g className="ai-systems-core" aria-hidden="true">
            {RING_RADII.map((radius) => (
              <circle
                key={radius}
                cx={CENTER_POINT.x}
                cy={CENTER_POINT.y}
                r={radius}
              />
            ))}
          </g>
        </svg>

        <div className="ai-systems-focus" aria-hidden="true">
          <span>Current focus</span>
          <strong>{identity.vision.primaryGoal}</strong>
        </div>

        <div className="ai-systems-nodes" aria-hidden="true">
          {SYSTEM_NODES.map((node) => (
            <div
              key={node.label}
              className={[
                "ai-system-node",
                node.isFocus ? "ai-system-node-active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={getNodeStyle(node)}
            >
              <span className="ai-system-node-dot" />
              <span>{node.label}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
