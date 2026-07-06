import type { SVGProps } from "react";
import { Mail } from "lucide-react";
import { contact } from "@/content/social";

function GitHubMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.38 6.84 9.74.5.1.68-.22.68-.5v-1.75c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92v2.85c0 .28.18.6.69.5A10.22 10.22 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.9H3.56v10.77h3.38V8.9ZM5.25 4a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92Zm14.42 9.68c0-3.26-1.74-4.78-4.06-4.78a3.5 3.5 0 0 0-3.16 1.74h-.05V8.9H9.16v10.77h3.37v-5.33c0-1.4.27-2.77 2.01-2.77 1.72 0 1.74 1.6 1.74 2.86v5.24h3.39v-5.99Z" />
    </svg>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return <Mail {...props} strokeWidth={2} />;
}

const SOCIAL_ACTIONS = [
  {
    label: "GitHub",
    href: "https://github.com/HrshJha",
    Icon: GitHubMark,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hrshjha/",
    Icon: LinkedInMark,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${contact.email}`,
    Icon: MailIcon,
    external: false,
  },
] as const;

export function SocialLinks() {
  return (
    <ul className="hero-social-links" aria-label="Social profiles">
      {SOCIAL_ACTIONS.map(({ label, href, Icon, external }) => (
        <li key={href}>
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="hero-social-link"
          >
            <Icon aria-hidden="true" />
            <span aria-hidden="true">{label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
