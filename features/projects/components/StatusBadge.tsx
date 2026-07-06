import { Badge } from "@/components/ui/Badge";
import type { ProjectStatus } from "@/types/project";

interface StatusBadgeProps {
  readonly status: ProjectStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return <Badge>{status}</Badge>;
}
