"use client";

import { useEffect, useRef } from "react";
import { NavItem } from "@/components/navigation/NavItem";
import { navigationLinks } from "@/content/navigation";
import { isNavItemActive } from "@/utils/isNavItemActive";

interface NavigationDrawerProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly pathname: string;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Traps focus while open and closes on Escape. Focus is returned to the
// trigger by the caller's `onClose` (see MobileNavbar), not here, so this
// effect doesn't fire on initial mount.
export function NavigationDrawer({
  isOpen,
  onClose,
  pathname,
}: NavigationDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const drawer = drawerRef.current;
    const focusables = drawer
      ? Array.from(drawer.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
      : [];
    focusables[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || focusables.length === 0) {
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={drawerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-50 flex flex-col bg-background-page px-4 py-5"
    >
      <div className="flex items-center justify-between border-b border-border-subtle pb-4">
        <p className="text-body font-semibold text-text-primary">Navigation</p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation"
          className="inline-flex h-11 items-center rounded-md px-3 text-label font-medium text-text-secondary transition-colors duration-(--duration-fast) ease-(--ease-standard) hover:bg-state-hover hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus"
        >
          Close
        </button>
      </div>
      <nav aria-label="Primary" className="pt-6">
        <ul className="flex flex-col gap-1">
          {navigationLinks.map((item) => (
            <li key={item.href}>
              <NavItem
                label={item.label}
                href={item.href}
                isActive={isNavItemActive(pathname, item.href)}
                onClick={onClose}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
