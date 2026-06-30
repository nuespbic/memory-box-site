import type { DemoNotification } from "@/lib/notifications-demo";

type DemoNotificationCardProps = {
  notification: DemoNotification;
};

export function DemoNotificationCard({ notification }: DemoNotificationCardProps) {
  return (
    <div className="rounded-2xl border border-black/[0.06] bg-white/92 px-4 py-3.5 shadow-[0_6px_28px_rgba(0,0,0,0.08)] backdrop-blur-md">
      <div className="flex items-start gap-3">
        <div
          aria-hidden="true"
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] ${
            notification.app
              ? "bg-memory-box-blue/10 text-memory-box-blue"
              : "bg-mb-surface text-mb-muted"
          }`}
        >
          {notification.app ? (
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M12 3l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V7l7-4z"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="6" />
              <path d="M16 16l4 4" strokeLinecap="round" />
            </svg>
          )}
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          {notification.app && (
            <p className="text-[11px] font-medium text-mb-muted">
              {notification.app}
            </p>
          )}
          <p className="text-[13px] leading-snug text-foreground md:text-sm">
            {notification.title}
          </p>
          {notification.subtitle && (
            <p className="mt-0.5 text-[11px] text-mb-muted md:text-xs">
              {notification.subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
