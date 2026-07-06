"use client";

import { usePathname } from "next/navigation";
import { NavItem } from "@/components/navigation/NavItem";
import { navigationLinks } from "@/content/navigation";
import { isNavItemActive } from "@/utils/isNavItemActive";

export function DesktopNavbar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
      {navigationLinks.map((item) => (
        <NavItem
          key={item.href}
          label={item.label}
          href={item.href}
          isActive={isNavItemActive(pathname, item.href)}
        />
      ))}
    </nav>
  );
}
