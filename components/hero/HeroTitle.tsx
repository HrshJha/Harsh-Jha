import { identity } from "@/content/identity";

const HERO_HEADLINE_LINES = [
  "Building AI Systems",
  "From Research",
  "to Production",
] as const;

export function HeroTitle() {
  return (
    <div className="hero-title-group">
      <p className="hero-eyebrow">{identity.name}</p>
      <h1
        id="hero-heading"
        className="hero-headline"
        aria-label={identity.headline}
      >
        {HERO_HEADLINE_LINES.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h1>
    </div>
  );
}
