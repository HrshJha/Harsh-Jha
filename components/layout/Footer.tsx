import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navigationLinks } from "@/content/navigation";
import { contact } from "@/content/contact";

const SOCIAL_LINKS = [
  { label: "Email", href: `mailto:${contact.email}` },
  { label: "GitHub", href: contact.socials.gitHub },
  { label: "LinkedIn", href: contact.socials.linkedIn },
  { label: "X", href: contact.socials.x },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-6 py-8 md:flex-row md:items-start md:justify-between">
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-2">
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-10 items-center rounded-sm px-3 text-label font-medium text-muted-foreground transition-colors duration-(--duration-fast) ease-(--ease-standard) hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Footer contact">
          <ul className="flex flex-wrap gap-2 md:justify-end">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex min-h-10 items-center rounded-sm px-3 text-label font-medium text-muted-foreground transition-colors duration-(--duration-fast) ease-(--ease-standard) hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
