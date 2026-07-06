import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { NavigationLayout } from "@/components/layout/NavigationLayout";
import { MainLayout } from "@/components/layout/MainLayout";
import "@/styles/globals.css";

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
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <NavigationLayout />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
