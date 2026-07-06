import { identity } from "@/content/identity";

export function HeroTitle() {
  return (
    <div className="hero-title-group">
      <p className="hero-eyebrow">{identity.name}</p>
      <h1 id="hero-heading" className="hero-headline">
        {identity.headline}
      </h1>
    </div>
  );
}
