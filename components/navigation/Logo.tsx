import Link from "next/link";
import { identity } from "@/content/identity";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex min-h-10 items-center gap-3 rounded-sm pr-2 text-body-small font-semibold tracking-normal text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <span
        aria-hidden="true"
        className="inline-flex size-8 items-center justify-center rounded-sm border border-border bg-surface text-label font-semibold text-foreground"
      >
        HJ
      </span>
      <span className="hidden whitespace-nowrap min-[22.5rem]:inline">
        {identity.name}
      </span>
    </Link>
  );
}
