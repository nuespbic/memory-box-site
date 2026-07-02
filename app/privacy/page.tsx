import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { LegalSection } from "@/components/ui/LegalSection";
import { BRAND, LEGAL_UPDATED_AT, SUPPORT } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Memory Box",
  description:
    "Memory Box における個人情報およびデータの取り扱いについて説明します。",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="プライバシーポリシー" updatedAt={LEGAL_UPDATED_AT}>
      <LegalSection title="1. はじめに">
        <p>
          {BRAND.companyName}（以下「当社」）は、{BRAND.name}
          （以下「本アプリ」）におけるユーザーのプライバシーを尊重し、
          個人情報およびデータを慎重に取り扱います。
          本ポリシーは、App Store 経由で提供する本アプリにおける情報の取り扱い方針を定めるものです。
        </p>
      </LegalSection>

      <LegalSection title="2. 基本方針">
        <ul className="list-disc space-y-2 pl-5">
          <li>本アプリに広告は表示しません。</li>
          <li>ユーザーのデータを第三者に販売しません。</li>
          <li>サービス提供に必要な範囲を超えて個人情報を収集しません。</li>
          <li>ユーザーが保存した記録は、ユーザーのものです。</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. 収集する情報">
        <p>当社は、本アプリの提供に必要な最小限の情報のみを取り扱います。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            ユーザーが本アプリ上で登録・保存する情報（契約情報、保証書、写真、メモ等）
          </li>
          <li>お問い合わせ時にユーザーが任意で提供する情報（メールアドレス、問い合わせ内容等）</li>
          <li>
            サービス改善のために必要な、匿名化された利用状況情報（クラッシュログ等）
          </li>
        </ul>
        <p>
          当社は、本アプリの基本機能のために、ユーザーの位置情報、連絡先、
          広告識別子等を取得することはありません。
        </p>
      </LegalSection>

      <LegalSection title="4. 利用目的">
        <p>収集した情報は、以下の目的で利用します。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>本アプリの機能提供（記録の保存、検索、期限通知等）</li>
          <li>不具合対応、セキュリティ確保、品質改善</li>
          <li>お問い合わせへの対応</li>
          <li>法令に基づく対応</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. 第三者提供">
        <p>
          当社は、ユーザーの個人情報および記録データを、ユーザーの同意なく
          第三者に販売または提供することはありません。
          ただし、法令に基づく開示請求等、正当な理由がある場合はこの限りではありません。
        </p>
      </LegalSection>

      <LegalSection title="6. 外部サービスの利用">
        <p>
          本アプリは、データ保存や通知配信等のために、Apple が提供する iCloud、
          Apple Push Notification service（APNs）等のプラットフォーム機能を利用する場合があります。
          これらのサービスにおけるデータの取り扱いは、各サービス提供者のポリシーに従います。
        </p>
      </LegalSection>

      <LegalSection title="7. データの保存・削除">
        <p>
          ユーザーが本アプリに保存した記録は、原則としてユーザーのデバイスおよび
          ユーザーが利用する Apple ID に紐づく iCloud 等の環境に保存されます。
          ユーザーは、本アプリ内の機能または端末の設定により、記録を削除できます。
          アプリを削除した場合のデータの扱いは、利用環境および Apple の仕様に従います。
        </p>
      </LegalSection>

      <LegalSection title="8. 安全管理">
        <p>
          当社は、個人情報および記録データの漏えい、滅失、改ざん等を防止するため、
          合理的な安全管理措置を講じます。
        </p>
      </LegalSection>

      <LegalSection title="9. 未成年者の利用">
        <p>
          本アプリを未成年者が利用する場合は、保護者の同意のもとでご利用ください。
        </p>
      </LegalSection>

      <LegalSection title="10. ポリシーの変更">
        <p>
          当社は、必要に応じて本ポリシーを変更することがあります。
          重要な変更がある場合は、本サイト上での掲示等によりお知らせします。
        </p>
      </LegalSection>

      <LegalSection title="11. お問い合わせ">
        <p>
          本ポリシーに関するお問い合わせは、以下までご連絡ください。
        </p>
        <p>
          メール：
          <a
            href={`mailto:${SUPPORT.email}`}
            className="text-memory-box-blue underline-offset-2 hover:underline"
          >
            {SUPPORT.email}
          </a>
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
