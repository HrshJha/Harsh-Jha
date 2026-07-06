"use client";

import { usePathname } from "next/navigation";
import { NavItem } from "@/components/navigation/NavItem";
import { navigationLinks } from "@/content/navigation";
import { isNavItemActive } from "@/utils/isNavItemActive";

export function DesktopNavbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="hidden items-center justify-end md:flex"
    >
      <ul className="flex items-center gap-1 lg:gap-1.5">
        {navigationLinks.map((item) => (
          <li key={item.href}>
            <NavItem
              label={item.label}
              href={item.href}
              isActive={isNavItemActive(pathname, item.href)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
