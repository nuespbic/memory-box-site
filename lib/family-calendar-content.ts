export const FAMILY_CALENDAR_BRAND = {
  name: "Family Calendar",
  brandLine: "Family Calendar by Memory Box",
  englishName: "Family Calendar",
  headline: "家族の予定を、ひとつのカレンダーに。",
} as const;

export const FAMILY_CALENDAR_INTRO =
  "家族の予定を色分けして管理し、テキスト・画像・PDFで共有できる、シンプルな家族向けカレンダーアプリです。";

export const FAMILY_CALENDAR_OVERVIEW = [
  "家族の予定管理を簡単にする",
  "色分けで予定を見分けやすくする",
  "予定を追加、編集、削除できる",
  "テキスト、画像、PDFで共有できる",
  "スマートフォン中心で使える",
  "iOS対応",
  "Android未対応",
  "子ども向け専用アプリではない",
] as const;

export const FAMILY_CALENDAR_FREE_FEATURES = [
  "広告表示あり",
  "色分けカレンダー",
  "予定の追加、編集、削除",
  "テキスト共有",
  "画像共有",
  "PDF共有",
  "基本機能を利用可能",
] as const;

export const FAMILY_CALENDAR_REMOVE_ADS = {
  price: "600円",
  type: "買い切り",
  notes: [
    "サブスクリプションではない",
    "自動更新なし",
    "AppleのApp内課金を使用",
    "購入の復元あり",
    "広告削除後は広告を表示しない",
  ],
} as const;

export const FAMILY_CALENDAR_STORAGE_NOTES = [
  "予定データは基本的に端末内保存",
  "クラウド同期なし",
  "アカウント登録なし",
  "自動バックアップなし",
] as const;

export const FAMILY_CALENDAR_PREMIUM_NOTE =
  "Memory Box Premiumとの連携は将来の機能として検討しています。現在のFamily Calendarでは、Memory Box Premiumとの連携は提供していません。";

/** App Store 公開後に設定。公開前は null のまま */
export const FAMILY_CALENDAR_APP_STORE_URL: string | null = null;
