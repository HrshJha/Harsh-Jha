import Link from "next/link";
import { identity } from "@/content/identity";

export function Logo() {
  return (
    <Link href="/" className="font-semibold">
      {identity.name}
    </Link>
  );
}
