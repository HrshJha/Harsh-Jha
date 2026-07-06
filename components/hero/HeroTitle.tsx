import { identity } from "@/content/identity";

export function HeroTitle() {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-label font-medium text-muted-foreground">
        {identity.name}
      </p>
      <h1
        id="hero-heading"
        className="max-w-reading text-hero font-semibold text-balance text-foreground"
      >
        {identity.headline}
      </h1>
    </div>
  );
}
