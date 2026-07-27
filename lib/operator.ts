/**
 * 運営者・販売主体の設定
 *
 * Memory Box Business 等の販売開始時は、該当アプリの operator を
 * 実際の販売主体（個人 / 株式会社興亜ノンマリンサービス 等）に更新してください。
 */
export const OPERATOR = {
  individualName: "若杉燎",
  legalLabel: "若杉燎（個人）",
  role: "企画・開発・運営",
} as const;

export const ABOUT = {
  title: "私たちについて",
  updatedAt: "2026年7月28日",
  paragraphs: [
    "Memory Boxおよび関連アプリは、現在、若杉燎が個人で企画・開発・運営しています。",
    "まずは一つひとつのアプリを丁寧に育て、利用実績や継続的な運営体制を整えることを大切にしています。",
    "将来的には、株式会社興亜ノンマリンサービスによる管理・運営への移行と、アプリ事業ブランド『KOA WORKS』としての展開を検討しています。",
  ],
  futureNote:
    "上記の移行時期や事業体制は、現時点では未定です。確定した段階で、本サイトおよび各アプリの表記を更新します。",
} as const;

export type OperatorInfo = {
  type: "individual" | "corporation";
  name: string;
  label: string;
};

/** アプリごとの運営・販売主体（販売開始時に更新） */
export const APP_OPERATORS: Record<string, OperatorInfo> = {
  "Memory Box": {
    type: "individual",
    name: OPERATOR.individualName,
    label: OPERATOR.legalLabel,
  },
  "Memory Box Business": {
    type: "individual",
    name: OPERATOR.individualName,
    label: OPERATOR.legalLabel,
  },
  "Shared Calendar": {
    type: "individual",
    name: OPERATOR.individualName,
    label: OPERATOR.legalLabel,
  },
  Shift: {
    type: "individual",
    name: OPERATOR.individualName,
    label: OPERATOR.legalLabel,
  },
};

export function getAppOperator(appName: string): OperatorInfo {
  return (
    APP_OPERATORS[appName] ?? {
      type: "individual",
      name: OPERATOR.individualName,
      label: OPERATOR.legalLabel,
    }
  );
}
