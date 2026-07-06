import Link from "next/link";
import { ActiveIndicator } from "@/components/navigation/ActiveIndicator";
import type { NavLink } from "@/types/navigation";
import { cn } from "@/utils/cn";

interface NavItemProps extends NavLink {
  readonly isActive: boolean;
  readonly onClick?: () => void;
}

export function NavItem({ label, href, isActive, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative inline-flex min-h-10 w-full items-center justify-center rounded-md px-3 text-[0.875rem] font-medium tracking-normal md:w-auto",
        "text-text-secondary",
        "hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus",
        isActive &&
          "border border-border-subtle bg-surface-raised text-text-primary",
      )}
    >
      <span>{label}</span>
      <ActiveIndicator isActive={isActive} />
    </Link>
  );
}
