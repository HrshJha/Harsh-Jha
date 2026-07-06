import { Button } from "@/components/ui/Button";
import { heroCtas } from "@/content/home";

export function CTAGroup() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button href={heroCtas.primary.href} variant="primary">
        {heroCtas.primary.label}
      </Button>
      <Button href={heroCtas.secondary.href} variant="secondary">
        {heroCtas.secondary.label}
      </Button>
    </div>
  );
}
