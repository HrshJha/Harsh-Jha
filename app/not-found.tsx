import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";

// 404 message copy is MISSING INFORMATION (CONTENT_SPEC.md §15,
// TECH_SPEC.md §12). This renders only the status code and a link back to
// Home (an already-approved navigation label) — no invented copy.
export const metadata: Metadata = buildMetadata({ title: "404" });

export default function NotFound() {
  return (
    <PageWrapper className="flex-1 items-center justify-center">
      <Section
        ariaLabelledBy="not-found-heading"
        className="flex flex-col items-center gap-4 text-center"
      >
        <h1 id="not-found-heading" className="text-2xl font-semibold">
          404
        </h1>
        <Link href="/">Home</Link>
      </Section>
    </PageWrapper>
  );
}
