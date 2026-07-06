import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = buildMetadata({
  title: "About",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageWrapper>
      <Section ariaLabelledBy="about-heading">
        <h1 id="about-heading" className="text-2xl font-semibold">
          About
        </h1>
      </Section>
    </PageWrapper>
  );
}
