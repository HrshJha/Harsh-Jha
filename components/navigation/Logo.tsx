import Link from "next/link";
import { identity } from "@/content/identity";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex min-h-11 items-center rounded-sm pr-2 text-body-small font-semibold tracking-normal text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {identity.name}
    </Link>
  );
}
