import { Button } from "@/components/ui/Button";
import { heroCtas } from "@/content/home";

export function CTAGroup() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button
        href={heroCtas.primary.href}
        variant="primary"
        className="h-14 px-7"
      >
        {heroCtas.primary.label}
      </Button>
      <Button
        href={heroCtas.secondary.href}
        variant="secondary"
        className="h-14 border-border-strong bg-surface-base px-7 hover:border-primary"
      >
        {heroCtas.secondary.label}
      </Button>
    </div>
  );
}
