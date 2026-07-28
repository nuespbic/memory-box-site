import type { Metadata } from "next";
import Link from "next/link";
import { AppPageLayout } from "@/components/layout/AppPageLayout";
import { AppCatalogCard } from "@/components/ui/AppCatalogCard";
import { APPS_CATALOG } from "@/lib/apps-catalog";

export const metadata: Metadata = {
  title: "アプリ・製品一覧 | Memory Box",
  description:
    "Memory Box および関連アプリ・ソフトウェアの一覧です。",
};

export default function AppsPage() {
  return (
    <AppPageLayout
      title="アプリ・製品一覧"
      subtitle="Memory Box および関連アプリのご紹介です。"
      backHref="/"
      backLabel="← Memory Box トップへ戻る"
    >
      <p className="text-base leading-relaxed text-mb-soft md:text-lg md:leading-relaxed">
        公開中のアプリから順に掲載しています。準備中の製品は、順次ページを追加していきます。
      </p>
      <div className="space-y-6">
        {APPS_CATALOG.map((app) => (
          <AppCatalogCard key={app.slug} app={app} />
        ))}
      </div>
      <p className="text-sm text-mb-muted md:text-base">
        Memory Box（ロスゼロ）のサポート情報は、
        <Link href="/#support" className="text-memory-box-blue underline-offset-2 hover:underline">
          トップページの Support
        </Link>
        からもご確認いただけます。
      </p>
    </AppPageLayout>
  );
}
