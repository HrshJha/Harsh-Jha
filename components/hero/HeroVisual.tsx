import { identity } from "@/content/identity";

const SYSTEM_NODES = [
  { label: "Data", className: "ai-node-data" },
  { label: "Models", className: "ai-node-models" },
  { label: "Agents", className: "ai-node-agents", isFocus: true },
  { label: "Evaluation", className: "ai-node-evaluation" },
  { label: "Deployment", className: "ai-node-deployment" },
] as const;

export function HeroVisual() {
  return (
    <aside aria-label="AI systems focus map" className="w-full">
      <div className="ai-systems-panel">
        <div className="ai-systems-grid" aria-hidden="true" />
        <div className="ai-systems-glow" aria-hidden="true" />

        <svg
          viewBox="0 0 560 420"
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
            <path
              className="ai-systems-edge ai-systems-edge-primary"
              d="M96 224 C138 126 236 96 280 176"
            />
            <path
              className="ai-systems-edge ai-systems-edge-secondary"
              d="M280 176 C344 92 454 118 470 222"
            />
            <path
              className="ai-systems-edge ai-systems-edge-primary ai-systems-edge-delayed"
              d="M470 222 C438 326 330 352 280 244"
            />
            <path
              className="ai-systems-edge ai-systems-edge-secondary ai-systems-edge-offset"
              d="M280 244 C212 338 110 316 96 224"
            />
            <path
              className="ai-systems-edge ai-systems-edge-tertiary"
              d="M150 224 C226 206 336 206 412 224"
            />
          </g>

          <g className="ai-systems-core" aria-hidden="true">
            <circle cx="280" cy="210" r="74" />
            <circle cx="280" cy="210" r="44" />
            <circle cx="280" cy="210" r="8" />
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
              className={`ai-system-node ${node.className} ${
                node.isFocus ? "ai-system-node-active" : ""
              }`}
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
