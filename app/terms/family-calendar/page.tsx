import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { LegalSection } from "@/components/ui/LegalSection";
import { SupportEmailLink } from "@/components/ui/SupportEmailLink";
import { FAMILY_CALENDAR_TERMS_UPDATED_AT } from "@/lib/apps-catalog";
import { APP_DEVELOPER, APP_OPERATION } from "@/lib/operator";
import { FAMILY_CALENDAR_BRAND } from "@/lib/family-calendar-content";

export const metadata: Metadata = {
  title: "Family Calendar 利用規約 | Memory Box",
  description:
    "Family Calendar の無料版、広告削除、共有機能、保存方式、利用条件等に関する利用規約です。",
};

export default function FamilyCalendarTermsPage() {
  return (
    <LegalPageLayout
      title="Family Calendar 利用規約"
      updatedAt={FAMILY_CALENDAR_TERMS_UPDATED_AT}
    >
      <LegalSection title="第1条（適用）">
        <p>
          本利用規約（以下「本規約」）は、{FAMILY_CALENDAR_BRAND.name}
          （以下「本アプリ」）の利用条件を定めるものです。
          本アプリは、運営：{APP_OPERATION.label}、開発：{APP_DEVELOPER.legalLabel}
          により提供されます。
        </p>
        <p>
          利用者は、本アプリを利用した時点で、本規約に同意したものとみなされます。
          本アプリ内の案内や注意事項も、本規約の一部を構成する場合があります。
        </p>
      </LegalSection>

      <LegalSection title="第2条（サービス内容）">
        <p>本アプリは、家族の予定管理を支援するカレンダーアプリです。主な機能は以下のとおりです。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>色分けカレンダー</li>
          <li>予定の追加、編集、削除</li>
          <li>テキスト共有</li>
          <li>画像共有</li>
          <li>PDF共有</li>
          <li>広告表示</li>
          <li>広告削除の買い切り購入</li>
          <li>その他関連機能</li>
        </ul>
      </LegalSection>

      <LegalSection title="第3条（無料版）">
        <ul className="list-disc space-y-2 pl-5">
          <li>無料版では、広告を表示します。</li>
          <li>無料版では、基本機能を利用できます。</li>
          <li>広告内容や表示方法が変更される場合があります。</li>
          <li>
            外部広告事業者が提供する広告について、
            運営者がその内容を全面的に保証するものではありません。
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="第4条（広告削除購入）">
        <ul className="list-disc space-y-2 pl-5">
          <li>広告削除は680円の買い切りです。</li>
          <li>サブスクリプションではなく、自動更新はありません。</li>
          <li>Apple の App 内課金を利用します。</li>
          <li>購入、返金、復元等は Apple の規定に従います。</li>
          <li>同一 Apple ID 等、Apple の条件が必要です。</li>
          <li>
            運営者がクレジットカード番号等の決済情報を直接取得または保存することはありません。
          </li>
          <li>購入状態の反映に時間がかかる場合があります。</li>
          <li>購入の復元が利用できます。</li>
          <li>
            Apple 側の障害や仕様変更により、購入または復元に影響を受ける場合があります。
          </li>
          <li>広告削除購入後は、広告を表示しません。</li>
        </ul>
      </LegalSection>

      <LegalSection title="第5条（データ保存）">
        <p>安全な利用のため、以下の点にご留意ください。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>予定データは、基本的に端末内に保存されます。</li>
          <li>クラウド同期、自動バックアップ、アカウント登録は提供していません。</li>
          <li>
            機種変更、アプリ削除、端末故障、端末初期化等により、
            データが失われる可能性があります。
          </li>
          <li>必要な情報は、利用者自身でも控えや共有を行ってください。</li>
          <li>運営者がすべてのデータ復元を保証するものではありません。</li>
        </ul>
      </LegalSection>

      <LegalSection title="第6条（予定内容の確認）">
        <ul className="list-disc space-y-2 pl-5">
          <li>予定は、利用者が入力した情報に基づきます。</li>
          <li>日時、内容、共有範囲は、利用者が確認してください。</li>
          <li>予定の誤入力や確認不足を、本アプリが自動的に保証するものではありません。</li>
          <li>家族間で予定内容が異なる場合、利用者同士で確認してください。</li>
        </ul>
      </LegalSection>

      <LegalSection title="第7条（共有）">
        <ul className="list-disc space-y-2 pl-5">
          <li>テキスト、画像、PDF を共有できます。</li>
          <li>共有先は、利用者が選択します。</li>
          <li>共有前に、内容や送信先を確認してください。</li>
          <li>共有後は、外部サービスの規約等が適用されます。</li>
          <li>誤送信、公開範囲、印刷物の管理等にご注意ください。</li>
          <li>運営者が共有先を自動決定しません。</li>
        </ul>
        <p>
          URL によるリアルタイム共有や、家族アカウント間の同期は、
          現時点では提供していません。
        </p>
      </LegalSection>

      <LegalSection title="第8条（Memory Box Premium）">
        <p>
          Memory Box Premium との連携は、現時点では提供していません。
          将来の機能追加や提供を保証するものではありません。
        </p>
        <p>
          Family Calendar の利用に、Memory Box Premium 契約やサブスクリプションは必要ありません。
        </p>
      </LegalSection>

      <LegalSection title="第9条（広告・外部サービス）">
        <p>本アプリでは、現時点で以下を利用しています。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Google AdMob</li>
          <li>Google UMP</li>
          <li>Apple App Store</li>
          <li>StoreKit</li>
          <li>iOS 共有機能</li>
        </ul>
        <p>
          外部サービスの停止、障害、仕様変更により、
          一部機能へ影響が生じる場合があります。
        </p>
        <p>
          本アプリは、現時点で App Tracking Transparency（ATT）による
          トラッキング許可画面を表示しません。
        </p>
      </LegalSection>

      <LegalSection title="第10条（禁止事項）">
        <p>利用者は、以下の行為を行ってはなりません。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>法令や公序良俗に反する行為</li>
          <li>他人になりすます行為</li>
          <li>第三者の情報を不正に入力、取得、公開する行為</li>
          <li>不正アクセス</li>
          <li>アプリやサーバーへ過度な負荷を与える行為</li>
          <li>脆弱性の悪用</li>
          <li>不正な広告クリック</li>
          <li>購入状態の改ざん</li>
          <li>著作権、商標権、プライバシー権等を侵害する行為</li>
          <li>
            リバースエンジニアリング等（法令で認められる範囲を除く）
          </li>
          <li>犯罪行為または犯罪を助長する行為</li>
          <li>その他、運営者が合理的に不適切と判断する行為</li>
        </ul>
      </LegalSection>

      <LegalSection title="第11条（知的財産権）">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            本アプリ、本サイト、文章、ロゴ、画像、プログラム、デザイン等の権利は、
            運営者または正当な権利者に帰属します。
          </li>
          <li>
            利用者が入力した予定情報の権利を、運営者が取得するものではありません。
          </li>
          <li>利用者データを販売しません。</li>
          <li>権利者の許可なく、複製、転載、販売等を行わないでください。</li>
        </ul>
      </LegalSection>

      <LegalSection title="第12条（サービスの変更、停止および終了）">
        <ul className="list-disc space-y-2 pl-5">
          <li>機能追加、変更、改善を行う場合があります。</li>
          <li>保守、障害、セキュリティ対応、法令対応を行う場合があります。</li>
          <li>OS や App Store の仕様変更により、一時停止する場合があります。</li>
          <li>緊急時は、事前案内できない場合があります。</li>
          <li>やむを得ない場合、サービスを終了する場合があります。</li>
          <li>可能な範囲で、事前に案内します。</li>
          <li>
            サービス終了時のデータ取扱いは、実際の保存方式に合わせて案内します。
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="第13条（免責事項）">
        <p>
          運営者は、以下の事項について、運営者の故意または重大な過失がある場合を除き、
          責任を負いません。
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>本アプリが完全に中断せず動作すること</li>
          <li>端末、OS、通信、Apple、Google、外部サービス等に起因する問題</li>
          <li>データ消失、破損、端末故障、誤操作</li>
          <li>予定の誤入力、確認不足</li>
          <li>共有内容の誤送信や公開範囲</li>
          <li>広告内容や外部サービス</li>
          <li>利用者間、家族間、第三者とのトラブル</li>
        </ul>
        <p>
          前項の定めは、消費者契約法その他の強行法規に反する場合には、
          適用されないものとします。
        </p>
      </LegalSection>

      <LegalSection title="第14条（規約の変更）">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            法令、機能、運営方法等の変更に応じて、本規約を改定する場合があります。
          </li>
          <li>重要な変更は、本サイトまたはアプリ内で案内します。</li>
          <li>
            改定後も本アプリの利用を継続した場合、
            改定後の規約に同意したものとみなします（法令に反しない範囲）。
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="第15条（準拠法および裁判管轄）">
        <p>本規約は、日本法に準拠します。</p>
        <p>
          本アプリに関して紛争が生じた場合、まず誠実に協議して解決を図るものとします。
        </p>
        <p>
          協議によっても解決しない場合、運営者（{APP_OPERATION.legalLabel}
          ）の所在地を管轄する裁判所を、第一審の専属的合意管轄裁判所とします。
        </p>
      </LegalSection>

      <LegalSection title="第16条（お問い合わせ）">
        <p>本規約に関するお問い合わせは、以下のメールアドレスまでご連絡ください。</p>
        <p>
          メール：<SupportEmailLink />
        </p>
        <p>
          または、
          <Link href="/contact" className="text-memory-box-blue underline-offset-2 hover:underline">
            お問い合わせページ
          </Link>
          よりご連絡ください。
        </p>
      </LegalSection>

      <section className="mt-12 border-t border-mb-border pt-10">
        <h2 className="text-lg font-medium text-foreground md:text-xl">関連リンク</h2>
        <ul className="mt-4 space-y-3 text-base text-mb-soft md:text-lg">
          <li>
            <Link
              href="/privacy/family-calendar"
              className="text-memory-box-blue underline-offset-2 hover:underline"
            >
              Family Calendar プライバシーポリシー
            </Link>
          </li>
          <li>
            <Link
              href="/apps/family-calendar"
              className="text-memory-box-blue underline-offset-2 hover:underline"
            >
              Family Calendar 紹介ページ
            </Link>
          </li>
          <li>
            <Link
              href="/apps"
              className="text-memory-box-blue underline-offset-2 hover:underline"
            >
              アプリ・製品一覧
            </Link>
          </li>
        </ul>
        <p className="mt-6 text-sm text-mb-muted md:text-base">
          最終更新日：{FAMILY_CALENDAR_TERMS_UPDATED_AT}
        </p>
      </section>
    </LegalPageLayout>
  );
}
