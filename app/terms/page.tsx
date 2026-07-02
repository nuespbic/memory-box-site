import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { LegalSection } from "@/components/ui/LegalSection";
import { BRAND, LEGAL_UPDATED_AT } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "利用規約 | Memory Box",
  description: "Memory Box アプリおよび関連サービスの利用規約です。",
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="利用規約" updatedAt={LEGAL_UPDATED_AT}>
      <LegalSection title="第1条（適用）">
        <p>
          本利用規約（以下「本規約」）は、{BRAND.companyName}（以下「当社」）が提供する
          {BRAND.name} アプリおよび関連サービス（以下「本サービス」）の利用条件を定めるものです。
          ユーザーは、本サービスを利用することにより、本規約に同意したものとみなされます。
        </p>
      </LegalSection>

      <LegalSection title="第2条（サービス内容）">
        <p>
          本サービスは、契約・保証書・レシート等の記録を整理し、期限の通知等を通じてユーザーの記録管理を支援するアプリです。
          当社は、ユーザーに事前の通知なく、本サービスの内容を変更、追加、または停止することがあります。
        </p>
      </LegalSection>

      <LegalSection title="第3条（アカウントおよびデータ）">
        <p>
          ユーザーが本サービスに保存した記録データの所有権は、ユーザーに帰属します。
          当社は、ユーザーのデータを第三者に販売しません。
        </p>
      </LegalSection>

      <LegalSection title="第4条（禁止事項）">
        <p>ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>法令または公序良俗に違反する行為</li>
          <li>当社または第三者の権利を侵害する行為</li>
          <li>本サービスの運営を妨害する行為</li>
          <li>不正アクセス、リバースエンジニアリング等の行為</li>
          <li>その他、当社が不適切と判断する行為</li>
        </ul>
      </LegalSection>

      <LegalSection title="第5条（免責事項）">
        <p>
          当社は、本サービスがユーザーの特定の目的に適合すること、期待する成果を実現すること、
          および不具合が生じないことを保証するものではありません。
          本サービスの利用により生じた損害について、当社に故意または重過失がある場合を除き、
          当社は責任を負いません。
        </p>
      </LegalSection>

      <LegalSection title="第6条（サービスの変更・終了）">
        <p>
          当社は、メンテナンス、障害対応、機能改善その他の理由により、
          本サービスの全部または一部を一時的に中断、変更、または終了することがあります。
        </p>
      </LegalSection>

      <LegalSection title="第7条（規約の変更）">
        <p>
          当社は、必要に応じて本規約を変更することがあります。
          変更後の規約は、本サイト上に掲示した時点から効力を生じます。
          変更後に本サービスを利用した場合、変更後の規約に同意したものとみなします。
        </p>
      </LegalSection>

      <LegalSection title="第8条（準拠法・管轄）">
        <p>
          本規約は日本法に準拠します。
          本サービスに関して紛争が生じた場合、当社所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
        </p>
      </LegalSection>

      <LegalSection title="第9条（お問い合わせ）">
        <p>
          本規約に関するお問い合わせは、
          <a href="/contact" className="text-memory-box-blue underline-offset-2 hover:underline">
            お問い合わせページ
          </a>
          よりご連絡ください。
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
