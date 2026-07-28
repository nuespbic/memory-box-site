import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { LegalSection } from "@/components/ui/LegalSection";
import { SupportEmailLink } from "@/components/ui/SupportEmailLink";
import { SHIFT_NOTE_PRIVACY_UPDATED_AT } from "@/lib/apps-catalog";
import { OPERATOR } from "@/lib/operator";

/**
 * App Store 提出前: 広告 SDK・StoreKit・保存/同期方式の表現を、
 * 提出ビルドの実装に合わせて更新すること。
 *
 * TODO(submission): 広告 SDK 導入時 — 第5条へサービス名・広告識別子・端末情報等を追記
 * TODO(submission): StoreKit 本番接線時 — 第6条の表現を確定
 * TODO(submission): クラウド保存・端末間同期導入時 — 第7条を更新
 */
export const metadata: Metadata = {
  title: "シフトノート プライバシーポリシー",
  description:
    "シフトノートにおける個人情報およびシフトデータの取り扱いについて説明します。",
};

export default function ShiftNotePrivacyPage() {
  return (
    <LegalPageLayout
      title="シフトノート プライバシーポリシー"
      updatedAt={SHIFT_NOTE_PRIVACY_UPDATED_AT}
    >
      <LegalSection title="1. はじめに">
        <p>
          シフトノート（運営者：{OPERATOR.legalLabel}、以下「本アプリ」）は、
          利用者のプライバシーを尊重し、入力された情報を慎重に取り扱います。
          本ポリシーは、App Store 経由で提供する本アプリにおける情報の取り扱い方針を定めるものです。
        </p>
      </LegalSection>

      <LegalSection title="2. 取り扱う可能性がある情報">
        <p>利用者が入力する以下の情報を、本アプリの提供に必要な範囲で取り扱います。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>従業員名</li>
          <li>表示名</li>
          <li>勤務希望日</li>
          <li>勤務可能時間</li>
          <li>勤務時間</li>
          <li>休み希望</li>
          <li>備考</li>
          <li>時給</li>
          <li>交通費</li>
          <li>人件費予算</li>
          <li>営業時間</li>
          <li>定休日</li>
          <li>作成済みシフト情報</li>
          <li>各種テンプレート</li>
          <li>PDFに含まれる情報</li>
          <li>共有URLに含まれる情報</li>
        </ul>
        <p>
          本アプリは、シフト作成と人件費の単純集計に必要な範囲を超えて、
          利用者や従業員の個人情報を収集することを目的としていません。
          マイナンバー、税務情報、社会保険情報等を収集するものではありません。
        </p>
      </LegalSection>

      <LegalSection title="3. 利用目的">
        <p>取り扱う情報は、以下の目的で利用します。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>勤務希望の登録と確認</li>
          <li>シフト作成</li>
          <li>シフト表示</li>
          <li>勤務時間集計</li>
          <li>時給、交通費、予定人件費、残り予算の計算</li>
          <li>PDF出力</li>
          <li>シフト共有</li>
          <li>設定保持</li>
          <li>不具合調査</li>
          <li>サービス改善</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. データ利用方針">
        <ul className="list-disc space-y-2 pl-5">
          <li>利用者のデータを販売しません。</li>
          <li>必要以上の個人情報を収集しません。</li>
          <li>入力データを、本アプリの提供目的と無関係な目的に利用しません。</li>
          <li>法令上必要な場合を除き、本人の同意なく第三者提供しません。</li>
          <li>
            サービス提供、障害対応、改善、安全管理に必要な範囲でのみ利用します。
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. 広告">
        <p>
          無料版には広告を表示します。Premiumでは広告を表示しません。
          具体的な広告配信サービス名は、実際に導入した段階で本ポリシーに記載します。
        </p>
        <p className="text-sm text-mb-muted md:text-base">
          広告サービス導入後は、実装に合わせて、広告サービス名、広告識別子、端末情報、
          広告表示情報、クリック情報、利用目的、第三者提供先等を追記します。
        </p>
      </LegalSection>

      <LegalSection title="6. Premiumとサブスクリプション">
        <p>Premiumは、現時点では提供開始前です。</p>
        <p>
          Premiumの提供開始後、購入、更新、解約、返金は Apple App Store
          を通じて処理されます。運営者がクレジットカード番号等の決済情報を直接取得または保存することはありません。
        </p>
        <p>
          Premium提供開始後、Apple から提供される購入状態等の情報を、
          Premium 利用資格の確認に使用する場合があります。
        </p>
        <p>
          Premium の有効期限が切れた場合も、登録済みデータは削除されず、
          有料機能のみ利用停止となる設計です。
        </p>
      </LegalSection>

      <LegalSection title="7. 保存と同期">
        <p>
          現時点の実装では、従業員情報、勤務希望、確定シフト、Premium
          設定等は、原則として利用者の端末内に保存されます。
          運営者が管理するサーバーへの同期や、クラウドによる端末間同期は行っていません。
        </p>
        <p>
          勤務希望入力用の共有 URL は、端末上で生成され、
          従業員の識別子、対象年月、アクセス用トークン等を含む場合があります。
        </p>
        <p>
          PDF は端末上で生成されます。印刷、保存、共有には、端末の共有機能等を利用します。
        </p>
        <p>
          勤務希望の提出方式、共有 URL 経由のデータの受け渡し、
          将来のクラウド保存機能等については、正式リリース時の実装に合わせて本ポリシーを更新します。
        </p>
        <p>
          アプリを端末から削除した場合、端末内に保存されたデータは、
          一般的に端末の仕様に従って削除されます。
        </p>
      </LegalSection>

      <LegalSection title="8. PDFと共有">
        <ul className="list-disc space-y-2 pl-5">
          <li>作成したシフトを PDF として出力できます。</li>
          <li>
            端末の共有機能を使って、印刷、保存、メール、メッセージアプリ等へ共有できます。
          </li>
          <li>
            共有先では、利用者が選択した外部サービスの規約およびプライバシーポリシーが適用されます。
          </li>
          <li>運営者は共有先を自動選択しません。</li>
          <li>
            PDF や共有リンクの送信先を確認のうえ、ご利用ください。
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="9. 外部サービス">
        <p>本アプリでは、現時点で確認できる範囲で以下を利用しています。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>端末上での PDF 生成・共有機能</li>
          <li>端末の共有シート</li>
          <li>アプリ内リンクによる勤務希望入力用 URL の生成</li>
        </ul>
        <p>
          Apple App Store / StoreKit、広告配信サービス、クラッシュ解析サービス、
          利用状況分析サービス、データ保存・共有用クラウドサービス等を導入する場合は、
          実際に利用しているサービスのみを本ポリシーに記載します。
        </p>
      </LegalSection>

      <LegalSection title="10. 安全な利用のお願い">
        <ul className="list-disc space-y-2 pl-5">
          <li>従業員情報は、適切な権限と目的のもとで登録してください。</li>
          <li>不要になった情報は削除してください。</li>
          <li>PDF や共有リンクの送信先を確認してください。</li>
          <li>第三者が閲覧できる場所へ不用意に公開しないでください。</li>
        </ul>
      </LegalSection>

      <LegalSection title="11. 子どもの個人情報">
        <p>
          本アプリは、子ども向けアプリとして設計されていません。
          未成年者が勤務者として登録される場合は、
          保護者や事業者の適切な管理下で利用してください。
        </p>
      </LegalSection>

      <LegalSection title="12. 改定">
        <p>
          機能、保存方式、広告サービス、外部サービス等の変更時に、
          本ポリシーを改定する場合があります。
          重要な変更がある場合は、本サイト上での掲示等によりお知らせします。
        </p>
      </LegalSection>

      <LegalSection title="13. お問い合わせ">
        <p>本ポリシーに関するお問い合わせは、以下までご連絡ください。</p>
        <p>
          運営者：{OPERATOR.legalLabel}
          <br />
          メール：<SupportEmailLink />
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
