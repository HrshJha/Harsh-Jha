import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { identity } from "@/content/identity";

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
  const metadata: Metadata = {
    title:
      title === siteConfig.name ? title : `${title} - ${siteConfig.name}`,
    description: description ?? identity.coreMessage,
    openGraph: {
      title,
      description: description ?? identity.coreMessage,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description: description ?? identity.coreMessage,
    },
  };

  // Canonical URLs are blocked until an approved production domain exists.
  if (siteConfig.siteUrl && path) {
    metadata.alternates = {
      canonical: new URL(path, siteConfig.siteUrl).toString(),
    };
  }

  return metadata;
}
