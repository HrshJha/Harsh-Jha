// COMPONENT_SPEC.md §11 SocialLinks.
// External links to GitHub, LinkedIn, and X.
// Accessible names match labels. Wraps/stack.

import { contact } from "@/content/contact";
import { Button } from "@/components/ui/Button";

interface SocialLinkProps {
  readonly href: string;
  readonly label: string;
}

function SocialLink({ href, label }: SocialLinkProps) {
  return (
    <Button
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ariaLabel={label}
      variant="secondary"
      size="md"
    >
      {label}
    </Button>
  );
}

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      <SocialLink href={contact.socials.linkedIn} label="LinkedIn" />
      <SocialLink href={contact.socials.gitHub} label="GitHub" />
      <SocialLink href={contact.socials.x} label="X" />
    </div>
  );
}
