import Link from "next/link";
import { identity } from "@/content/identity";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex h-10 items-center rounded-sm pr-2 text-body font-semibold tracking-normal text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus"
    >
      {identity.name}
    </Link>
  );
}
