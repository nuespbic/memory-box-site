import type { AppStatus } from "@/lib/apps-catalog";
import { APP_STATUS_LABELS } from "@/lib/apps-catalog";

type StatusBadgeProps = {
  status: AppStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className="shrink-0 rounded-full border border-mb-border px-3 py-1 text-xs text-mb-muted">
      {APP_STATUS_LABELS[status]}
    </span>
  );
}
