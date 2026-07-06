import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageWrapper>
      <Section ariaLabelledBy="contact-heading">
        <h1 id="contact-heading" className="text-2xl font-semibold">
          Contact
        </h1>
      </Section>
    </PageWrapper>
  );
}
