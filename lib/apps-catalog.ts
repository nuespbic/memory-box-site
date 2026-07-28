import { APP_DEVELOPER, APP_OPERATION, MEMORY_BOX_PRODUCT_NAME } from "@/lib/operator";
import { SUPPORT } from "@/lib/site-config";

export type AppStatus =
  | "published"
  | "release-preparing"
  | "app-store-review-preparing"
  | "developing-trial"
  | "developing";

export const APP_STATUS_LABELS: Record<AppStatus, string> = {
  published: "公開中",
  "release-preparing": "リリース準備中",
  "app-store-review-preparing": "App Store審査提出準備中",
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
  operation: typeof APP_OPERATION.label;
  developer: typeof APP_DEVELOPER.legalLabel;
  updatedAt?: string;
};

export const APPS_CATALOG: AppCatalogEntry[] = [
  {
    slug: "memory-box",
    name: MEMORY_BOX_PRODUCT_NAME,
    status: "published",
    description:
      "保証期限、契約、保険、車、家、持ち物など、忘れると困る情報を記録し、必要なときに取り出すための個人向けアプリ。",
    homeHref: "/",
    privacyHref: "/privacy",
    operation: APP_OPERATION.label,
    developer: APP_DEVELOPER.legalLabel,
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
    operation: APP_OPERATION.label,
    developer: APP_DEVELOPER.legalLabel,
    updatedAt: "2026年7月29日",
  },
  {
    slug: "memory-box-business",
    name: "Memory Box Business",
    status: "developing-trial",
    description:
      "会社の対応履歴や判断の経緯を残し、担当者が変わっても過去の流れを確認できる業務ソフト。",
    operation: APP_OPERATION.label,
    developer: APP_DEVELOPER.legalLabel,
  },
  {
    slug: "family-calendar",
    name: "Family Calendar",
    status: "app-store-review-preparing",
    description:
      "家族の予定を色分けして管理し、テキスト・画像・PDFで共有できる家族向けカレンダーアプリ。",
    productHref: "/apps/family-calendar",
    privacyHref: "/privacy/family-calendar",
    termsHref: "/terms/family-calendar",
    pricingModel: "free-with-remove-ads-iap",
    operation: APP_OPERATION.label,
    developer: APP_DEVELOPER.legalLabel,
    updatedAt: "2026年7月29日",
  },
];

export const SHIFT_NOTE_PRIVACY_UPDATED_AT = "2026年7月29日";

export const SHIFT_NOTE_TERMS_UPDATED_AT = "2026年7月29日";

export const FAMILY_CALENDAR_PRIVACY_UPDATED_AT = "2026年7月29日";

export const FAMILY_CALENDAR_TERMS_UPDATED_AT = "2026年7月29日";

export const SHIFT_NOTE_APP = APPS_CATALOG.find(
  (app) => app.slug === "shift-note",
)!;

export const FAMILY_CALENDAR_APP = APPS_CATALOG.find(
  (app) => app.slug === "family-calendar",
)!;

export const SUPPORT_EMAIL = SUPPORT.email;

export function getAppBySlug(slug: string): AppCatalogEntry | undefined {
  return APPS_CATALOG.find((app) => app.slug === slug);
}
