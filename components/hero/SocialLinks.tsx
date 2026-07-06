import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { contact } from "@/content/social";

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-3" aria-label="Social profiles">
      {contact.socialLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-border bg-surface px-4 text-label font-medium text-muted-foreground transition-colors duration-(--duration-fast) ease-(--ease-standard) hover:border-border-strong hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <span>{link.label}</span>
            <ExternalLink aria-hidden="true" className="size-4" strokeWidth={2} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
