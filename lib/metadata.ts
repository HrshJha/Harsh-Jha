import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface BuildMetadataInput {
  readonly title: string;
  readonly description?: string;
  readonly path?: string;
}

export function buildMetadata({
  title,
  description,
  path,
}: BuildMetadataInput): Metadata {
  const metadata: Metadata = { title };

  if (description) {
    metadata.description = description;
  }

  // Canonical URLs are blocked until an approved production domain exists.
  if (siteConfig.siteUrl && path) {
    metadata.alternates = {
      canonical: new URL(path, siteConfig.siteUrl).toString(),
    };
  }

  return metadata;
}
