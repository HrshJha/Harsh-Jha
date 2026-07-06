import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { HeroSection } from "@/components/hero/HeroSection";

export default function Home() {
  return (
    <PageWrapper className="min-h-screen flex-1 justify-center py-12 md:py-16">
      <Section ariaLabelledBy="hero-heading">
        <HeroSection />
      </Section>
    </PageWrapper>
  );
}
