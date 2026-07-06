import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { ContactSection } from "@/features/contact/components/ContactSection";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageWrapper>
      <Section ariaLabelledBy="contact-heading" className="py-12 md:py-16">
        <div className="flex flex-col gap-8">
          <h1
            id="contact-heading"
            className="text-page-title font-semibold text-foreground"
          >
            Contact
          </h1>
          <ContactSection />
        </div>
      </Section>
    </PageWrapper>
  );
}

