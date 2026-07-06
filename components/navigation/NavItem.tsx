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
        "relative inline-flex min-h-11 w-full items-center justify-center rounded-sm px-3 text-label font-medium tracking-normal md:w-auto",
        "text-muted-foreground",
        "transition-[background-color,color,border-color] duration-(--duration-fast) ease-(--ease-standard) hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        isActive && "bg-surface-raised text-foreground",
      )}
    >
      <span>{label}</span>
      <ActiveIndicator isActive={isActive} />
    </Link>
  );
}
