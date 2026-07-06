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

// Traps focus while open, closes on Escape. Focus is returned to the
// trigger by the caller's `onClose` (see MobileNavbar), not here, so this
// effect doesn't fire on initial mount. Open/close motion is deliberately
// absent — that's Milestone 12 (task MOT-03), which depends on this one.
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
      className="fixed inset-0 z-50 flex flex-col"
    >
      <button type="button" onClick={onClose} aria-label="Close menu">
        Close
      </button>
      <nav aria-label="Primary" className="flex flex-col">
        {navigationLinks.map((item) => (
          <NavItem
            key={item.href}
            label={item.label}
            href={item.href}
            isActive={isNavItemActive(pathname, item.href)}
            onClick={onClose}
          />
        ))}
      </nav>
    </div>
  );
}
