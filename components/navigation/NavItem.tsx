import Link from "next/link";
import { ActiveIndicator } from "@/components/navigation/ActiveIndicator";
import type { NavLink } from "@/types/navigation";

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
      className="inline-flex flex-col"
    >
      <span>{label}</span>
      <ActiveIndicator isActive={isActive} />
    </Link>
  );
}
