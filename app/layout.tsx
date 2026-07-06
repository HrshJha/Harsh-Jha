import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { buildMetadata } from "@/lib/metadata";
import { NavigationLayout } from "@/components/layout/NavigationLayout";
import { MainLayout } from "@/components/layout/MainLayout";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  preload: false,
});

const themeScript = `
(function () {
  try {
    var savedTheme = window.localStorage.getItem("portfolio-theme");
    var theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    document.documentElement.dataset.theme = theme;
  } catch (error) {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

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
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-surface focus:px-4 focus:py-3 focus:text-label focus:font-medium focus:text-foreground focus:shadow-overlay"
        >
          Skip to content
        </a>
        <NavigationLayout />
        <MainLayout>{children}</MainLayout>
        <Footer />
      </body>
    </html>
  );
}
