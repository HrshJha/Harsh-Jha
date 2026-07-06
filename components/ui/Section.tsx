import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface SectionProps {
  readonly id?: string;
  readonly ariaLabelledBy?: string;
  readonly className?: string;
  readonly children: ReactNode;
}

export function Section({
  id,
  ariaLabelledBy,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} aria-labelledby={ariaLabelledBy} className={className}>
      <Container>{children}</Container>
    </section>
  );
}
