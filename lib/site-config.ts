export const BRAND = {
  name: "Memory Box",
  companyName: "株式会社Memory Box",
  blue: "#0071E3",
  tagline: "記憶に、居場所を。",
} as const;

export const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Company", href: "#company" },
  { label: "Support", href: "#support" },
] as const;

export const HERO = {
  tagline: "覚えておくことから自由へ。",
  subtitle: "必要な時だけ、\n必要なことを思い出せる。",
  body: "Memory Boxは、\n記憶を安心して預けられる場所をつくります。",
  heroScreenshot: "/screenshots/screenshot-1.png",
  heroScreenshotAlt: "Memory Box ホーム画面",
  appStoreUrl: "https://apps.apple.com/",
} as const;

export const PRODUCTS = [
  {
    name: "Memory Box",
    tagline: "ロスゼロ｜忘れないための記録",
    description: "大切な記録を、必要な時に思い出せる場所へ。",
    image: "/images/products/memory-box.svg",
    comingSoon: false,
  },
  {
    name: "Memory Box Business",
    tagline: "会社の記憶を残す",
    description: "対応履歴・写真・PDF・OCRをひとつに。",
    image: "/images/products/memory-box-business.svg",
    comingSoon: true,
  },
  {
    name: "Shared Calendar",
    tagline: "予定をもっと自然に共有する",
    description: "家族や身近な人と、予定をやさしく共有。",
    image: "/images/products/shared-calendar.svg",
    comingSoon: true,
  },
  {
    name: "Shift",
    tagline: "シンプルなシフト管理",
    description: "希望の回収から確認まで、迷わず管理。",
    image: "/images/products/shift.svg",
    comingSoon: true,
  },
] as const;

export const PHILOSOPHY = {
  values: ["便利さより安心。", "広告より信頼。", "データ収集よりプライバシー。"],
  closing: "人は忘れる。\n\nだから、\n安心して前へ進める。",
} as const;

export const COMPANY = {
  name: "Memory Box",
  description: "人の毎日を少しだけ軽くするソフトウェアを開発しています。",
  businessItems: [
    "スマートフォンアプリ開発",
    "業務支援システムの企画・開発",
    "Webサイト制作",
    "OCR・記録管理・通知支援システムの企画・開発",
  ],
} as const;

export const SUPPORT_LINKS = [
  { label: "利用規約", href: "/terms" },
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "お問い合わせ", href: "/contact" },
] as const;

export const SUPPORT = {
  email: "memorybox.support@gmail.com",
  responseNote:
    "内容を確認のうえ、通常3営業日以内にメールにて返信いたします。",
} as const;

export const LEGAL_UPDATED_AT = "2026年7月1日";

export const DAY_STORY = [
  {
    time: "朝",
    type: "notification" as const,
    notification: "契約更新まで30日です",
  },
  {
    time: "帰宅",
    type: "save" as const,
    action: "保証書を撮影",
    result: "保存しました",
  },
  {
    time: "半年後",
    type: "search" as const,
    query: "MacBook",
    result: "保証書をすぐ表示",
  },
] as const;

export const PROMISES = [
  "広告で邪魔しません",
  "あなたのデータを売りません",
  "必要以上に個人情報を集めません",
  "記録は、あなたのものです",
] as const;
