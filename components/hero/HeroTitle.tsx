import { identity } from "@/content/identity";

// DESIGN_SYSTEM.md §4 labels `type.hero` as the "Hero headline" scale and
// `type.pageTitle` as the "Page-level title" scale. The approved H1
// ("Harsh Kumar Jha", CONTENT_SPEC.md §4 SEO Notes) is page identity, so it
// takes `type.pageTitle`; the professional headline is the prominent
// visual hero statement, so it takes the larger `type.hero` scale. Visual
// size and heading level are independent — the H1 stays first and correct.
export function HeroTitle() {
  return (
    <div className="flex flex-col gap-5">
      <h1 id="hero-heading" className="text-label font-medium text-muted-foreground">
        {identity.name}
      </h1>
      <p className="max-w-reading text-hero font-semibold text-balance text-foreground">
        {identity.headline}
      </p>
    </div>
  );
}
