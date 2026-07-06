import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navigationLinks } from "@/content/navigation";
import { resume } from "@/content/resume";
import { contact } from "@/content/social";

const LINK_STYLES =
  "rounded-sm text-label font-medium text-text-secondary transition-colors duration-(--duration-fast) ease-(--ease-standard) hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <Container className="flex flex-col gap-6 py-8 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-4 gap-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={LINK_STYLES}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={resume.route} className={LINK_STYLES}>
                  {resume.label}
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Footer contact links">
            <ul className="flex flex-wrap gap-x-4 gap-y-3 md:justify-end">
              <li>
                <a href={`mailto:${contact.email}`} className={LINK_STYLES}>
                  Email
                </a>
              </li>
              {contact.socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={LINK_STYLES}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
