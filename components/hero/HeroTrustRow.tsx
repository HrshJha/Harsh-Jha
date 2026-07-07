import { Check } from "lucide-react";

const TRUST_SIGNALS = [
  "Machine Learning",
  "LLMs",
  "AI Agents",
  "Evaluation",
  "Open Source",
] as const;

export function HeroTrustRow() {
  return (
    <ul className="hero-trust-row" aria-label="Engineering focus areas">
      {TRUST_SIGNALS.map((signal) => (
        <li key={signal}>
          <Check aria-hidden="true" className="size-3.5" strokeWidth={2} />
          <span>{signal}</span>
        </li>
      ))}
    </ul>
  );
}
