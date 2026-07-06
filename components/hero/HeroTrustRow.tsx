import { Check } from "lucide-react";

const TRUST_SIGNALS = [
  "AI Research",
  "Production ML",
  "Open Source",
  "FastAPI",
  "LLM Engineering",
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
