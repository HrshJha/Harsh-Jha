// COMPONENT_SPEC.md §11 SocialLinks.
// External links to GitHub, LinkedIn, and X.
// Accessible names match labels. Wraps/stack.

import { contact } from "@/content/contact";

interface SocialLinkProps {
  readonly href: string;
  readonly label: string;
}

function SocialLink({ href, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-12 items-center justify-center rounded-md border border-border-subtle bg-transparent px-8 text-base font-medium text-text-primary transition-colors duration-(--duration-fast) ease-(--ease-standard) hover:border-primary hover:bg-state-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus"
    >
      {label}
    </a>
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
