import type { Metadata } from "next";
import Link from "next/link";
import { AppPageLayout } from "@/components/layout/AppPageLayout";
import { AppStewardshipInfo } from "@/components/ui/AppStewardshipInfo";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { FAMILY_CALENDAR_APP } from "@/lib/apps-catalog";
import {
  FAMILY_CALENDAR_APP_STORE_URL,
  FAMILY_CALENDAR_BRAND,
  FAMILY_CALENDAR_FREE_FEATURES,
  FAMILY_CALENDAR_INTRO,
  FAMILY_CALENDAR_OVERVIEW,
  FAMILY_CALENDAR_PREMIUM_NOTE,
  FAMILY_CALENDAR_REMOVE_ADS,
  FAMILY_CALENDAR_STORAGE_NOTES,
} from "@/lib/family-calendar-content";

export const metadata: Metadata = {
  title: "Family Calendar | Memory Box",
  description: FAMILY_CALENDAR_INTRO,
};

function FeatureList({
  title,
  items,
  note,
}: {
  title: string;
  items: readonly string[];
  note?: string;
}) {
  return (
    <section>
      <h2 className="text-lg font-medium text-foreground md:text-xl">{title}</h2>
      {note ? (
        <p className="mt-4 text-base leading-relaxed text-mb-soft md:text-lg md:leading-relaxed">
          {note}
        </p>
      ) : null}
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-base text-mb-soft md:text-lg"
          >
            <span
              aria-hidden="true"
              className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-memory-box-blue"
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function FamilyCalendarAppPage() {
  return (
    <AppPageLayout
      title={FAMILY_CALENDAR_BRAND.brandLine}
      subtitle={FAMILY_CALENDAR_BRAND.headline}
    >
      <div className="flex items-center gap-3">
        <StatusBadge status={FAMILY_CALENDAR_APP.status} />
      </div>

      <section className="space-y-4">
        <p className="text-base leading-relaxed text-mb-soft md:text-lg md:leading-relaxed">
          {FAMILY_CALENDAR_INTRO}
        </p>
      </section>

      <FeatureList title="概要" items={FAMILY_CALENDAR_OVERVIEW} />

      <FeatureList title="無料版" items={FAMILY_CALENDAR_FREE_FEATURES} />

      <section>
        <h2 className="text-lg font-medium text-foreground md:text-xl">広告削除</h2>
        <p className="mt-4 text-base leading-relaxed text-mb-soft md:text-lg md:leading-relaxed">
          {FAMILY_CALENDAR_REMOVE_ADS.price}（{FAMILY_CALENDAR_REMOVE_ADS.type}）
        </p>
        <ul className="mt-4 space-y-3">
          {FAMILY_CALENDAR_REMOVE_ADS.notes.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-base text-mb-soft md:text-lg"
            >
              <span
                aria-hidden="true"
                className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-memory-box-blue"
              />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <FeatureList title="保存" items={FAMILY_CALENDAR_STORAGE_NOTES} />

      <section>
        <h2 className="text-lg font-medium text-foreground md:text-xl">
          Memory Box Premium
        </h2>
        <p className="mt-4 text-base leading-relaxed text-mb-soft md:text-lg md:leading-relaxed">
          {FAMILY_CALENDAR_PREMIUM_NOTE}
        </p>
        <p className="mt-4 text-base leading-relaxed text-mb-soft md:text-lg md:leading-relaxed">
          Family Calendarの利用に、Memory Box Premium契約やサブスクリプションは必要ありません。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-medium text-foreground md:text-xl">運営・開発</h2>
        <AppStewardshipInfo className="mt-4" />
      </section>

      <section className="border-t border-mb-border pt-10">
        <h2 className="text-lg font-medium text-foreground md:text-xl">リンク</h2>
        <ul className="mt-4 space-y-3 text-base md:text-lg">
          {FAMILY_CALENDAR_APP_STORE_URL ? (
            <li>
              <a
                href={FAMILY_CALENDAR_APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-memory-box-blue underline-offset-2 hover:underline"
              >
                App Store
              </a>
            </li>
          ) : (
            <li className="text-mb-muted">App Store：公開準備中</li>
          )}
          <li>
            <Link
              href="/terms/family-calendar"
              className="text-memory-box-blue underline-offset-2 hover:underline"
            >
              利用規約
            </Link>
          </li>
          <li>
            <Link
              href="/privacy/family-calendar"
              className="text-memory-box-blue underline-offset-2 hover:underline"
            >
              プライバシーポリシー
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-memory-box-blue underline-offset-2 hover:underline"
            >
              お問い合わせ
            </Link>
          </li>
          <li>
            <Link
              href="/apps"
              className="text-memory-box-blue underline-offset-2 hover:underline"
            >
              アプリ・製品一覧
            </Link>
          </li>
        </ul>
      </section>
    </AppPageLayout>
  );
}
