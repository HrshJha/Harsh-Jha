import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { AboutSection } from "@/features/about/components/AboutSection";

export const metadata: Metadata = buildMetadata({
  title: "About",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageWrapper>
      <Section ariaLabelledBy="about-heading" className="py-12 md:py-16">
        <AboutSection heading="About" headingId="about-heading" />
      </Section>
    </PageWrapper>
  );
}
