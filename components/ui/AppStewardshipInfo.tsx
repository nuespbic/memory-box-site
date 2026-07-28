import { APP_DEVELOPER, APP_OPERATION } from "@/lib/operator";

type AppStewardshipInfoProps = {
  className?: string;
};

export function AppStewardshipInfo({ className = "" }: AppStewardshipInfoProps) {
  return (
    <dl className={`space-y-4 text-base text-mb-soft md:text-lg ${className}`}>
      <div>
        <dt className="font-medium text-foreground">運営</dt>
        <dd className="mt-1">{APP_OPERATION.label}</dd>
      </div>
      <div>
        <dt className="font-medium text-foreground">開発</dt>
        <dd className="mt-1">{APP_DEVELOPER.legalLabel}</dd>
      </div>
    </dl>
  );
}
