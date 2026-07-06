import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = buildMetadata({
  title: "Resume",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <Section ariaLabelledBy="resume-heading">
        <h1 id="resume-heading" className="text-2xl font-semibold">
          Resume
        </h1>
      </Section>
    </PageWrapper>
  );
}
