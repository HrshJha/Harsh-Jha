import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { NavigationLayout } from "@/components/layout/NavigationLayout";
import { MainLayout } from "@/components/layout/MainLayout";
import "@/styles/globals.css";

export const metadata: Metadata = buildMetadata({
  title: "Harsh Kumar Jha",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <NavigationLayout />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
