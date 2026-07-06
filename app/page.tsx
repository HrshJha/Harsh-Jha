import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { HeroSection } from "@/components/hero/HeroSection";

export default function Home() {
  return (
    <PageWrapper>
      <Section ariaLabelledBy="hero-heading" containerSize="wide">
        <HeroSection />
      </Section>
    </PageWrapper>
  );
}
