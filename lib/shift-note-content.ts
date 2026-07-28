export const SHIFT_NOTE_BRAND = {
  name: "シフトノート",
  brandLine: "シフトノート by Memory Box",
  englishName: "Shift Note",
  concept: "誰でも10分でシフトが作れる",
} as const;

export const SHIFT_NOTE_INTRO =
  "勤務希望の回収からシフト作成、PDF出力・共有まで。誰でも10分で使い始められる、シンプルなシフト管理アプリです。無料版では基本機能を利用でき、Premiumでは広告非表示や人件費管理などの便利な機能が追加されます。";

export const SHIFT_NOTE_AUDIENCE = [
  "店舗や事業所の管理者",
  "シフト作成担当者",
  "勤務希望を提出する従業員",
  "小規模店舗や事業所",
] as const;

export type ShiftNoteFeature = {
  label: string;
  note?: string;
};

export const SHIFT_NOTE_PREMIUM_PRICE = "月額680円";

export const SHIFT_NOTE_FREE_FEATURES = [
  "広告あり",
  "従業員登録",
  "勤務希望入力・提出",
  "シフト作成",
  "作成済みシフト保存",
  "シフト編集",
  "週表示",
  "月表示",
  "PDFプレビュー",
  "PDF出力",
  "印刷",
  "共有",
  "スクリーンショット保存",
  "従業員向け入力URLの発行・共有",
] as const;

export const SHIFT_NOTE_PREMIUM_FEATURES: ShiftNoteFeature[] = [
  { label: "自動更新サブスクリプション" },
  { label: SHIFT_NOTE_PREMIUM_PRICE },
  { label: "広告非表示" },
  { label: "時給登録" },
  { label: "交通費登録" },
  { label: "月間人件費予算" },
  { label: "予定人件費表示" },
  { label: "残り予算表示" },
  { label: "営業時間設定" },
  { label: "定休日設定" },
  {
    label: "PDFレイアウトの追加機能",
    note: "縦向き・横向きの選択など",
  },
];

export const SHIFT_NOTE_PREMIUM_DATA_NOTE =
  "Premiumの有効期限が切れた場合も、登録済みデータは削除されず、有料機能のみ利用停止となります。";

export const SHIFT_NOTE_LEGAL_NOTE =
  "シフトノートは、税金、扶養、社会保険、労働法その他の法的判定や助言を行うアプリではありません。時給、交通費、勤務時間、予算など、利用者が入力した情報に基づく単純集計を行います。";
