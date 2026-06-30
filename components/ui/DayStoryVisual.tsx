import { DAY_STORY } from "@/lib/site-config";

type StoryStep = (typeof DAY_STORY)[number];

function StoryContent({ step }: { step: StoryStep }) {
  switch (step.type) {
    case "notification":
      return (
        <div className="rounded-xl border border-mb-border bg-white px-5 py-4">
          <p className="text-xs text-mb-muted">通知</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground md:text-base">
            「{step.notification}」
          </p>
        </div>
      );
    case "save":
      return (
        <div className="space-y-3">
          <div className="rounded-xl border border-mb-border bg-white px-5 py-4">
            <p className="text-sm text-mb-soft md:text-base">{step.action}</p>
          </div>
          <div className="rounded-xl border border-mb-border bg-mb-surface px-5 py-4">
            <p className="text-sm text-foreground md:text-base">
              「{step.result}」
            </p>
          </div>
        </div>
      );
    case "search":
      return (
        <div className="rounded-xl border border-mb-border bg-white px-5 py-4">
          <p className="text-xs text-mb-muted">検索</p>
          <p className="mt-2 text-sm font-medium text-foreground md:text-base">
            「{step.query}」
          </p>
          <p className="mt-4 border-t border-mb-border pt-4 text-sm text-mb-soft md:text-base">
            {step.result}
          </p>
        </div>
      );
  }
}

export function DayStoryVisual() {
  return (
    <div className="mx-auto max-w-lg">
      {DAY_STORY.map((step, index) => (
        <div key={step.time}>
          <article className="rounded-2xl border border-mb-border bg-white p-6 md:p-8">
            <p className="text-sm font-medium text-memory-box-blue md:text-base">
              {step.time}
            </p>
            <div className="mt-5">
              <StoryContent step={step} />
            </div>
          </article>
          {index < DAY_STORY.length - 1 && (
            <div
              aria-hidden="true"
              className="flex justify-center py-6 text-mb-muted md:py-8"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M12 5v14M7 13l5 5 5-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
