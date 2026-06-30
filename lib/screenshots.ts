/**
 * アプリ画面（固定順）
 * public/screenshots/screenshot-{id}.png に配置
 */
export const APP_SCREENS = [
  {
    id: 1,
    src: "/screenshots/screenshot-1.png",
    alt: "Memory Box ホーム画面",
    caption: "記録が、ひとつに集まる。",
    subcaption: "保証書も、写真も、契約も。",
  },
  {
    id: 2,
    src: "/screenshots/screenshot-2.png",
    alt: "Memory Box 登録画面",
    caption: "写真を撮るだけで登録。",
    subcaption: "あとから整理はいつでも。",
  },
  {
    id: 3,
    src: "/screenshots/screenshot-3.png",
    alt: "Memory Box 通知設定画面",
    caption: "通知が、そっと教えてくれる。",
    subcaption: "忘れる前に、思い出せる。",
  },
  {
    id: 4,
    src: "/screenshots/screenshot-4.png",
    alt: "Memory Box 検索画面",
    caption: "あとから一瞬で見つかる。",
    subcaption: "探していた情報が、すぐ見える。",
  },
  {
    id: 5,
    src: "/screenshots/screenshot-5.png",
    alt: "Memory Box 詳細・一覧画面",
    caption: "期限も、ひと目でわかる。",
    subcaption: "お金の流れも、整理されたまま。",
  },
] as const;

export type AppScreenConfig = (typeof APP_SCREENS)[number];
