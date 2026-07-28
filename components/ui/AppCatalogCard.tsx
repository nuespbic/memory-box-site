import Link from "next/link";
import type { AppCatalogEntry } from "@/lib/apps-catalog";
import { StatusBadge } from "@/components/ui/StatusBadge";

type AppCatalogCardProps = {
  app: AppCatalogEntry;
};

export function AppCatalogCard({ app }: AppCatalogCardProps) {
  const detailHref = app.productHref ?? app.homeHref;

  return (
    <article className="rounded-2xl border border-mb-border bg-white p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-lg font-medium text-foreground md:text-xl">{app.name}</h2>
        <StatusBadge status={app.status} />
      </div>
      <p className="mt-4 text-base leading-relaxed text-mb-soft md:text-lg md:leading-relaxed">
        {app.description}
      </p>
      <ul className="mt-6 space-y-2 text-sm md:text-base">
        {detailHref ? (
          <li>
            <Link
              href={detailHref}
              className="text-memory-box-blue underline-offset-2 hover:underline"
            >
              {app.homeHref ? "トップページで見る" : "紹介ページを見る"}
            </Link>
          </li>
        ) : (
          <li className="text-mb-muted">紹介ページ：準備中</li>
        )}
        {app.privacyHref ? (
          <li>
            <Link
              href={app.privacyHref}
              className="text-memory-box-blue underline-offset-2 hover:underline"
            >
              プライバシーポリシー
            </Link>
          </li>
        ) : null}
      </ul>
    </article>
  );
}
