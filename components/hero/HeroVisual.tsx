"use client";

import { identity } from "@/content/identity";
import type { CSSProperties, PointerEvent } from "react";
import { useRef, useState } from "react";

type ConnectionId =
  | "models-training"
  | "data-training"
  | "training-evaluation"
  | "evaluation-deployment"
  | "deployment-users";

interface SystemNode {
  readonly id: string;
  readonly label: string;
  readonly x: number;
  readonly y: number;
  readonly mobileX: number;
  readonly mobileY: number;
  readonly connections: readonly ConnectionId[];
}

interface FlowConnection {
  readonly id: ConnectionId;
  readonly path: string;
  readonly mobilePath: string;
  readonly delay: string;
}

const CENTER_NODE = {
  label: identity.vision.primaryGoal,
} as const;

const SYSTEM_NODES = [
  {
    id: "models",
    label: "Models",
    x: 22,
    y: 24,
    mobileX: 62,
    mobileY: 42,
    connections: ["models-training"],
  },
  {
    id: "data",
    label: "Data",
    x: 31,
    y: 43,
    mobileX: 24,
    mobileY: 54,
    connections: ["data-training"],
  },
  {
    id: "training",
    label: "Training",
    x: 56,
    y: 25,
    mobileX: 62,
    mobileY: 54,
    connections: ["models-training", "data-training", "training-evaluation"],
  },
  {
    id: "evaluation",
    label: "Evaluation",
    x: 74,
    y: 48,
    mobileX: 62,
    mobileY: 66,
    connections: ["training-evaluation", "evaluation-deployment"],
  },
  {
    id: "deployment",
    label: "Deployment",
    x: 64,
    y: 78,
    mobileX: 62,
    mobileY: 78,
    connections: ["evaluation-deployment", "deployment-users"],
  },
  {
    id: "users",
    label: "Users",
    x: 30,
    y: 83,
    mobileX: 62,
    mobileY: 90,
    connections: ["deployment-users"],
  },
] as const satisfies readonly SystemNode[];

const FLOW_CONNECTIONS = [
  {
    id: "models-training",
    path: "M 32 24 L 46 24 Q 51 24 56 25",
    mobilePath: "M 62 47 L 62 49",
    delay: "0s",
  },
  {
    id: "data-training",
    path: "M 41 43 L 47 43 Q 52 43 56 35",
    mobilePath: "M 41 54 L 45 54",
    delay: "-0.6s",
  },
  {
    id: "training-evaluation",
    path: "M 66 25 L 70 25 Q 74 25 74 38",
    mobilePath: "M 62 59 L 62 61",
    delay: "-1.2s",
  },
  {
    id: "evaluation-deployment",
    path: "M 74 58 L 74 64 Q 74 72 64 72",
    mobilePath: "M 62 71 L 62 73",
    delay: "-1.8s",
  },
  {
    id: "deployment-users",
    path: "M 54 78 L 42 78 Q 34 78 30 83",
    mobilePath: "M 62 83 L 62 85",
    delay: "-2.4s",
  },
] as const satisfies readonly FlowConnection[];

function getNodeStyle(node: SystemNode) {
  return {
    "--node-x": `${node.x}%`,
    "--node-y": `${node.y}%`,
    "--node-mobile-x": `${node.mobileX}%`,
    "--node-mobile-y": `${node.mobileY}%`,
  } as CSSProperties;
}

export function HeroVisual() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [activeConnections, setActiveConnections] = useState<
    readonly ConnectionId[]
  >([]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    const bounds = panel.getBoundingClientRect();
    const localX = event.clientX - bounds.left;
    const localY = event.clientY - bounds.top;
    const x = (localX / bounds.width) * 100;
    const y = (localY / bounds.height) * 100;
    const depthX = ((x - 50) / 50) * 10;
    const depthY = ((y - 50) / 50) * 10;

    panel.style.setProperty("--visual-glow-x", `${localX.toFixed(2)}px`);
    panel.style.setProperty("--visual-glow-y", `${localY.toFixed(2)}px`);
    panel.style.setProperty("--visual-depth-x", `${depthX.toFixed(2)}px`);
    panel.style.setProperty("--visual-depth-y", `${depthY.toFixed(2)}px`);
  }

  function handlePointerLeave() {
    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    panel.style.setProperty("--visual-glow-x", "50%");
    panel.style.setProperty("--visual-glow-y", "50%");
    panel.style.setProperty("--visual-depth-x", "0px");
    panel.style.setProperty("--visual-depth-y", "0px");
    setActiveConnections([]);
  }

  return (
    <aside aria-label="AI systems architecture diagram" className="w-full">
      <div
        ref={panelRef}
        className="ai-systems-panel"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className="ai-systems-grid" aria-hidden="true" />
        <div className="ai-systems-glow" aria-hidden="true" />
        <div className="ai-radar-rings" aria-hidden="true">
          <span className="ai-radar-ring ai-radar-ring-outer" />
          <span className="ai-radar-ring ai-radar-ring-middle" />
          <span className="ai-radar-ring ai-radar-ring-inner" />
        </div>
        <div className="ai-live-status" aria-hidden="true">
          <span>Status</span>
          <span>
            <span className="ai-live-status-dot" />
            Building
          </span>
          <strong>Production AI Systems</strong>
          <span>Updated Today</span>
        </div>

        <svg
          viewBox="0 0 100 100"
          className="ai-systems-graph"
          role="img"
          aria-labelledby="hero-visual-title hero-visual-description"
          preserveAspectRatio="none"
        >
          <title id="hero-visual-title">AI systems architecture flow</title>
          <desc id="hero-visual-description">
            Production AI architecture showing models and data flowing into
            training, evaluation, deployment, and users.
          </desc>

          <g
            className="ai-systems-edges ai-systems-edges-desktop"
            fill="none"
            strokeLinecap="round"
          >
            {FLOW_CONNECTIONS.map((connection) => (
              <path
                key={connection.id}
                className={[
                  "ai-systems-edge",
                  activeConnections.includes(connection.id)
                    ? "ai-systems-edge-active"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                d={connection.path}
              />
            ))}
          </g>

          <g
            className="ai-systems-edges ai-systems-edges-mobile"
            fill="none"
            strokeLinecap="round"
          >
            {FLOW_CONNECTIONS.map((connection) => (
              <path
                key={connection.id}
                className={[
                  "ai-systems-edge",
                  activeConnections.includes(connection.id)
                    ? "ai-systems-edge-active"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                d={connection.mobilePath}
              />
            ))}
          </g>

          <g
            className="ai-systems-flow ai-systems-flow-desktop"
            aria-hidden="true"
          >
            {FLOW_CONNECTIONS.map((connection) => (
              <circle
                key={connection.id}
                className="ai-flow-packet"
                r="1"
                style={{ "--packet-delay": connection.delay } as CSSProperties}
              >
                <animateMotion
                  begin={connection.delay}
                  dur="3s"
                  path={connection.path}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </g>

          <g
            className="ai-systems-flow ai-systems-flow-mobile"
            aria-hidden="true"
          >
            {FLOW_CONNECTIONS.map((connection) => (
              <circle
                key={connection.id}
                className="ai-flow-packet"
                r="1"
                style={{ "--packet-delay": connection.delay } as CSSProperties}
              >
                <animateMotion
                  begin={connection.delay}
                  dur="3s"
                  path={connection.mobilePath}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </g>
        </svg>

        <div className="ai-pipeline-center" aria-hidden="true">
          <span>Current Focus</span>
          <strong>{CENTER_NODE.label}</strong>
        </div>

        <div className="ai-systems-nodes" aria-hidden="true">
          {SYSTEM_NODES.map((node) => (
            <div
              key={node.id}
              className="ai-system-node"
              style={getNodeStyle(node)}
              onPointerEnter={() => setActiveConnections(node.connections)}
              onPointerLeave={() => setActiveConnections([])}
            >
              <div className="ai-system-node-card">
                <span className="ai-system-node-dot" />
                <span>{node.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
