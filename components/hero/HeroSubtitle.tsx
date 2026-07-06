import { identity } from "@/content/identity";

export function HeroSubtitle() {
  return (
    <p className="max-w-text text-body leading-(--leading-body) text-muted-foreground">
      {identity.heroStatement}
    </p>
  );
}
