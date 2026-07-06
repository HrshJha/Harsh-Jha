import { Button } from "@/components/ui/Button";
import { heroCtas } from "@/content/home";

export function CTAGroup() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button
        href={heroCtas.primary.href}
        variant="primary"
        size="lg"
        className="hero-primary-cta"
      >
        {heroCtas.primary.label}
      </Button>
      <Button
        href={heroCtas.secondary.href}
        download={heroCtas.secondary.download}
        variant="secondary"
        size="lg"
        className="hero-secondary-cta"
      >
        {heroCtas.secondary.label}
      </Button>
    </div>
  );
}
