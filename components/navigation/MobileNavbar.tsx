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
        aria-label="Open navigation"
        className="inline-flex h-10 items-center gap-2 rounded-md border border-border-subtle px-3 text-[0.875rem] font-medium text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus"
      >
        <span>Menu</span>
        <span className="flex flex-col gap-1" aria-hidden="true">
          <span className="block h-px w-4 bg-current" />
          <span className="block h-px w-4 bg-current" />
          <span className="block h-px w-4 bg-current" />
        </span>
      </button>
      <NavigationDrawer
        isOpen={isOpen}
        onClose={handleClose}
        pathname={pathname}
      />
    </div>
  );
}
