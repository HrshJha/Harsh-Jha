"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
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
        className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-border bg-surface px-3 text-label font-medium text-foreground transition-colors duration-(--duration-fast) ease-(--ease-standard) hover:border-border-strong hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <span className="hidden min-[22.5rem]:inline">Menu</span>
        <Menu aria-hidden="true" className="size-4" strokeWidth={2} />
      </button>
      <NavigationDrawer
        isOpen={isOpen}
        onClose={handleClose}
        pathname={pathname}
      />
    </div>
  );
}
