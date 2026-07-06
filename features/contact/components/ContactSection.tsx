// COMPONENT_SPEC.md §11 ContactSection.
// Composes EmailCard and SocialLinks. No backend form.
// Uses the standard optional-heading pattern.

import { EmailCard } from "@/components/contact/EmailCard";
import { SocialLinks } from "@/components/contact/SocialLinks";

interface ContactSectionProps {
  readonly heading?: string;
  readonly headingId?: string;
}

export function ContactSection({
  heading,
  headingId,
}: ContactSectionProps) {
  return (
    <div className="flex flex-col gap-8">
      {heading ? (
        <h2
          id={headingId}
          className="text-section-heading font-semibold text-foreground "
        >
          {heading}
        </h2>
      ) : null}
      {/* Description: MISSING INFORMATION */}
      <div className="flex flex-col gap-6">
        <EmailCard />
        <SocialLinks />
      </div>
    </div>
  );
}
