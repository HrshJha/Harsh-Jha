"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NavigationDrawer } from "@/components/navigation/NavigationDrawer";

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);

  function handleClose() {
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        Menu
      </button>
      <NavigationDrawer
        isOpen={isOpen}
        onClose={handleClose}
        pathname={pathname}
      />
    </div>
  );
}
