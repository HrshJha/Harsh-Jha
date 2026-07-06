import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import type { ComponentProps } from "react";

interface SectionProps {
  readonly id?: string;
  readonly ariaLabelledBy?: string;
  readonly containerSize?: ComponentProps<typeof Container>["size"];
  readonly className?: string;
  readonly containerClassName?: string;
  readonly children: ReactNode;
}

export function Section({
  id,
  ariaLabelledBy,
  containerSize,
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section id={id} aria-labelledby={ariaLabelledBy} className={className}>
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
