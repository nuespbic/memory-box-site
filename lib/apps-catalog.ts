import { OPERATOR } from "@/lib/operator";
import { SUPPORT } from "@/lib/site-config";

export type AppStatus =
  | "published"
  | "release-preparing"
  | "developing-trial"
  | "developing";

export const APP_STATUS_LABELS: Record<AppStatus, string> = {
  published: "公開中",
  "release-preparing": "リリース準備中",
  "developing-trial": "開発・試験中",
  developing: "開発中",
};

export type AppCatalogEntry = {
  slug: string;
  name: string;
  status: AppStatus;
  description: string;
  /** トップページまたは既存紹介へのリンク */
  homeHref?: string;
  productHref?: string;
  privacyHref?: string;
  termsHref?: string;
  appStoreHref?: string;
  pricingModel?: string;
  operator: typeof OPERATOR.legalLabel;
  updatedAt?: string;
};

export const APPS_CATALOG: AppCatalogEntry[] = [
  {
    slug: "memory-box",
    name: "Memory Box（ロスゼロ）",
    status: "published",
    description:
      "保証期限、契約、保険、車、家、持ち物など、忘れると困る情報を記録し、必要なときに取り出すための個人向けアプリ。",
    homeHref: "/",
    privacyHref: "/privacy",
    operator: OPERATOR.legalLabel,
  },
  {
    slug: "shift-note",
    name: "シフトノート",
    status: "release-preparing",
    description:
      "勤務希望の回収からシフト作成、PDF出力・共有まで。誰でも10分で使い始められるシフト管理アプリ。",
    productHref: "/apps/shift-note",
    privacyHref: "/privacy/shift-note",
    termsHref: "/terms/shift-note",
    pricingModel: "freemium-subscription",
    operator: OPERATOR.legalLabel,
    updatedAt: "2026年7月29日",
  },
  {
    slug: "memory-box-business",
    name: "Memory Box Business",
    status: "developing-trial",
    description:
      "会社の対応履歴や判断の経緯を残し、担当者が変わっても過去の流れを確認できる業務ソフト。",
    operator: OPERATOR.legalLabel,
  },
  {
    slug: "family-calendar",
    name: "家族共有カレンダー",
    status: "developing",
    description:
      "家族の予定を、毎回LINEや口頭で聞き直さなくても確認できる共有カレンダー。",
    operator: OPERATOR.legalLabel,
  },
];

export const SHIFT_NOTE_PRIVACY_UPDATED_AT = "2026年7月29日";

export const SHIFT_NOTE_APP = APPS_CATALOG.find(
  (app) => app.slug === "shift-note",
)!;

export const SUPPORT_EMAIL = SUPPORT.email;

export function getAppBySlug(slug: string): AppCatalogEntry | undefined {
  return APPS_CATALOG.find((app) => app.slug === slug);
}
