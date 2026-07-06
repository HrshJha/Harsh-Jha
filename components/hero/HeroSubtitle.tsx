import { identity } from "@/content/identity";

export function HeroSubtitle() {
  return (
    <p className="max-w-2xl text-lg leading-8 text-text-secondary">
      {identity.heroStatement}
    </p>
  );
}
