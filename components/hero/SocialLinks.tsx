import Link from "next/link";
import { contact } from "@/content/social";

// DESIGN_SYSTEM.md §6: "Brand/social links may use text labels by default."
// No icons — the visible label is the accessible name.
export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-4">
      {contact.socialLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary underline-offset-4 hover:text-text-primary hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
