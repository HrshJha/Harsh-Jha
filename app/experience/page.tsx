import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = buildMetadata({
  title: "Experience",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <Section ariaLabelledBy="experience-heading">
        <h1 id="experience-heading" className="text-2xl font-semibold">
          Experience
        </h1>
      </Section>
    </PageWrapper>
  );
}
