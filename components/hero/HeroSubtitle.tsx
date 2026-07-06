import { identity } from "@/content/identity";

export function HeroSubtitle() {
  return (
    <p className="max-w-text text-body text-text-secondary">
      {identity.heroStatement}
    </p>
  );
}
