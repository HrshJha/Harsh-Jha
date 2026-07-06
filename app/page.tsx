import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { HeroSection } from "@/components/hero/HeroSection";

export default function Home() {
  return (
    <PageWrapper>
      <Section className="py-12 md:py-16">
        <HeroSection />
      </Section>
    </PageWrapper>
  );
}
