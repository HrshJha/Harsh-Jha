import { Button } from "@/components/ui/Button";
import { heroCtas } from "@/content/home";

export function CTAGroup() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button
        href={heroCtas.primary.href}
        variant="primary"
        className="h-14 rounded-lg px-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
      >
        {heroCtas.primary.label}
      </Button>
      <Button
        href={heroCtas.secondary.href}
        variant="secondary"
        className="h-14 rounded-lg border-border-strong bg-surface-base px-7 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
      >
        {heroCtas.secondary.label}
      </Button>
    </div>
  );
}
