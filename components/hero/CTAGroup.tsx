import { Button } from "@/components/ui/Button";
import { heroCtas } from "@/content/home";

export function CTAGroup() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button
        href={heroCtas.primary.href}
        variant="primary"
        size="lg"
      >
        {heroCtas.primary.label}
      </Button>
      <Button
        href={heroCtas.secondary.href}
        variant="secondary"
        size="lg"
      >
        {heroCtas.secondary.label}
      </Button>
    </div>
  );
}
