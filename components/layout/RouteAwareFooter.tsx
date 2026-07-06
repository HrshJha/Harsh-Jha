"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/Footer";

export function RouteAwareFooter() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return <Footer />;
}
