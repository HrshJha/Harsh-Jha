import Link from "next/link";
import { contact } from "@/content/social";

function SocialIcon({ label }: { readonly label: string }) {
  if (label === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.48.09.66-.2.66-.46v-1.72c-2.67.58-3.23-1.14-3.23-1.14-.44-1.1-1.07-1.4-1.07-1.4-.87-.6.07-.58.07-.58.96.07 1.47 1 1.47 1 .86 1.46 2.25 1.04 2.8.8.08-.63.34-1.05.61-1.3-2.13-.24-4.37-1.06-4.37-4.73 0-1.05.38-1.9 1-2.57-.1-.24-.43-1.22.1-2.54 0 0 .8-.26 2.64.98a9.1 9.1 0 0 1 4.8 0c1.82-1.24 2.63-.98 2.63-.98.54 1.32.2 2.3.1 2.54.63.67 1 1.52 1 2.57 0 3.68-2.24 4.49-4.38 4.73.35.3.66.88.66 1.78v2.56c0 .26.18.55.67.46A9.5 9.5 0 0 0 12 2.5Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.7 8.9H3.8v10h2.9v-10ZM5.25 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4Zm13.95 9.2c0-3-1.6-4.5-3.75-4.5-1.72 0-2.49.95-2.92 1.62V8.9h-2.78v10h2.9v-4.95c0-1.3.25-2.56 1.86-2.56 1.58 0 1.6 1.48 1.6 2.64v4.87h2.9l.19-5.7Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="m4.4 4 6.25 8.35L4 20h2.1l5.48-6.3L16.3 20H20l-6.62-8.86L19.57 4h-2.1l-5.02 5.77L8.13 4H4.4Zm3.1 1.55 9.4 12.9h-1.47L6.03 5.55H7.5Z"
      />
    </svg>
  );
}

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-3">
      {contact.socialLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-border-subtle bg-surface-base px-4 text-label font-medium text-text-secondary transition-colors duration-(--duration-fast) ease-(--ease-standard) hover:border-border-strong hover:bg-state-hover hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus"
          >
            <SocialIcon label={link.label} />
            <span>{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
