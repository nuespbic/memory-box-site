import type { Metadata } from "next";
import Link from "next/link";
import { AppPageLayout } from "@/components/layout/AppPageLayout";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { SHIFT_NOTE_APP } from "@/lib/apps-catalog";
import {
  SHIFT_NOTE_AUDIENCE,
  SHIFT_NOTE_BRAND,
  SHIFT_NOTE_FREE_FEATURES,
  SHIFT_NOTE_INTRO,
  SHIFT_NOTE_LEGAL_NOTE,
  SHIFT_NOTE_PREMIUM_DATA_NOTE,
  SHIFT_NOTE_PREMIUM_FEATURES,
  SHIFT_NOTE_PREMIUM_PRICE,
  SHIFT_NOTE_TERMS_NOTE,
  type ShiftNoteFeature,
} from "@/lib/shift-note-content";

export const metadata: Metadata = {
  title: "シフトノート by Memory Box",
  description: SHIFT_NOTE_INTRO,
};

function FeatureSection({
  title,
  items,
  note,
}: {
  title: string;
  items: readonly string[] | readonly ShiftNoteFeature[];
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
        {items.map((item) => {
          const label = typeof item === "string" ? item : item.label;
          const itemNote = typeof item === "string" ? undefined : item.note;

          return (
            <li
              key={label}
              className="flex items-start gap-3 text-base text-mb-soft md:text-lg"
            >
              <span
                aria-hidden="true"
                className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-memory-box-blue"
              />
              <span>
                {label}
                {itemNote ? (
                  <span className="mt-1 block text-sm text-mb-muted md:text-base">
                    {itemNote}
                  </span>
                ) : null}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default function ShiftNoteAppPage() {
  return (
    <AppPageLayout
      title={SHIFT_NOTE_BRAND.brandLine}
      subtitle={`${SHIFT_NOTE_BRAND.englishName}｜${SHIFT_NOTE_BRAND.concept}`}
    >
      <div className="flex items-center gap-3">
        <StatusBadge status={SHIFT_NOTE_APP.status} />
      </div>

      <section className="space-y-4">
        <p className="text-base leading-relaxed text-mb-soft md:text-lg md:leading-relaxed">
          {SHIFT_NOTE_INTRO}
        </p>
      </section>

      <section>
        <h2 className="text-lg font-medium text-foreground md:text-xl">対象</h2>
        <ul className="mt-4 space-y-3">
          {SHIFT_NOTE_AUDIENCE.map((item) => (
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

      <FeatureSection
        title="無料版"
        items={SHIFT_NOTE_FREE_FEATURES}
        note="基本的なシフト作成と PDF 出力・共有は、無料版でもご利用いただけます。"
      />

      <FeatureSection title="Premium" items={SHIFT_NOTE_PREMIUM_FEATURES} />

      <section className="rounded-2xl border border-mb-border bg-mb-surface p-6 md:p-8">
        <h2 className="text-lg font-medium text-foreground md:text-xl">料金</h2>
        <p className="mt-4 text-base leading-relaxed text-mb-soft md:text-lg md:leading-relaxed">
          Premiumは自動更新サブスクリプションです（{SHIFT_NOTE_PREMIUM_PRICE}）。
        </p>
        <p className="mt-4 text-base leading-relaxed text-mb-soft md:text-lg md:leading-relaxed">
          {SHIFT_NOTE_PREMIUM_DATA_NOTE}
        </p>
      </section>

      <section>
        <h2 className="text-lg font-medium text-foreground md:text-xl">FAQ</h2>
        <div className="mt-4 space-y-6">
          <div>
            <h3 className="text-base font-medium text-foreground md:text-lg">
              Premiumを解約したら、データは消えますか？
            </h3>
            <p className="mt-2 text-base leading-relaxed text-mb-soft md:text-lg md:leading-relaxed">
              {SHIFT_NOTE_PREMIUM_DATA_NOTE}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-medium text-foreground md:text-xl">
          法的判定について
        </h2>
        <p className="mt-4 text-base leading-relaxed text-mb-soft md:text-lg md:leading-relaxed">
          {SHIFT_NOTE_LEGAL_NOTE}
        </p>
      </section>

      <section className="border-t border-mb-border pt-10">
        <h2 className="text-lg font-medium text-foreground md:text-xl">リンク</h2>
        <ul className="mt-4 space-y-3 text-base md:text-lg">
          <li className="text-mb-muted">App Store：公開準備中</li>
          <li>
            <Link
              href="/privacy/shift-note"
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
              サポート（お問い合わせ）
            </Link>
          </li>
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-mb-muted md:text-base">
          {SHIFT_NOTE_TERMS_NOTE}
        </p>
      </section>
    </AppPageLayout>
  );
}
