import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { LegalSection } from "@/components/ui/LegalSection";
import { SupportEmailLink } from "@/components/ui/SupportEmailLink";
import { FAMILY_CALENDAR_PRIVACY_UPDATED_AT } from "@/lib/apps-catalog";
import { APP_DEVELOPER, APP_OPERATION } from "@/lib/operator";
import { FAMILY_CALENDAR_BRAND } from "@/lib/family-calendar-content";

export const metadata: Metadata = {
  title: "Family Calendar プライバシーポリシー | Memory Box",
  description:
    "Family Calendar における個人情報および予定データの取り扱いについて説明します。",
};

export default function FamilyCalendarPrivacyPage() {
  return (
    <LegalPageLayout
      title="Family Calendar プライバシーポリシー"
      updatedAt={FAMILY_CALENDAR_PRIVACY_UPDATED_AT}
    >
      <LegalSection title="1. はじめに">
        <p>
          {FAMILY_CALENDAR_BRAND.name}（運営：{APP_OPERATION.label}、開発：
          {APP_DEVELOPER.legalLabel}、以下「本アプリ」）は、
          利用者のプライバシーを尊重し、入力された情報を慎重に取り扱います。
          本ポリシーは、App Store 経由で提供する本アプリにおける情報の取り扱い方針を定めるものです。
        </p>
      </LegalSection>

      <LegalSection title="2. 取り扱う情報">
        <p>利用者が入力する以下の情報を、本アプリの提供に必要な範囲で取り扱います。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>予定名</li>
          <li>日付</li>
          <li>時刻</li>
          <li>メモ</li>
          <li>色分け設定</li>
          <li>作成した予定</li>
          <li>共有用のテキスト</li>
          <li>共有用の画像</li>
          <li>共有用のPDF</li>
          <li>アプリ設定</li>
          <li>広告削除購入状態</li>
          <li>購入復元に必要な情報</li>
        </ul>
        <p>
          本アプリは、予定管理に必要な範囲を超えて、
          利用者や家族の個人情報を収集することを目的としていません。
        </p>
      </LegalSection>

      <LegalSection title="3. 利用目的">
        <p>取り扱う情報は、以下の目的で利用します。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>予定の登録、表示、編集、削除</li>
          <li>色分けカレンダーの表示</li>
          <li>テキスト、画像、PDFによる共有</li>
          <li>広告削除の購入状態の確認</li>
          <li>購入の復元</li>
          <li>設定の保持</li>
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

      <LegalSection title="5. 保存">
        <p>
          予定データは、原則として利用者の端末内に保存されます。
          運営者が管理するサーバーへの同期、クラウド同期、アカウント登録、
          自動バックアップ機能は提供していません。
        </p>
        <p>
          広告削除の購入状態や、購入復元に必要な情報は、端末内に保存される場合があります。
        </p>
        <p>
          アプリの削除、端末の故障、端末の初期化、機種変更等により、
          端末内のデータが失われる可能性があります。
          iOS 等の OS による端末全体のバックアップが行われる場合がありますが、
          本アプリ独自のクラウド同期機能があるものではありません。
        </p>
      </LegalSection>

      <LegalSection title="6. 広告">
        <p>
          無料版では、Google AdMob による広告を表示します。
          広告削除を購入した場合、広告は表示されません。
        </p>
        <p>
          広告の同意管理には Google UMP（User Messaging Platform）を利用します。
          必要な地域や利用者にのみ、同意画面を表示します。
          非パーソナライズ広告を基本方針とし、同意情報に応じて広告リクエストを行います。
        </p>
        <p>
          本アプリは、現時点で App Tracking Transparency（ATT）による
          トラッキング許可画面を表示しません。
        </p>
        <p>
          広告配信に伴い、端末情報、広告関連情報、利用状況データ、同意状態等が
          Google により処理される場合があります。
          詳細は Google のポリシーをご確認ください。
        </p>
      </LegalSection>

      <LegalSection title="7. App内課金">
        <ul className="list-disc space-y-2 pl-5">
          <li>広告削除は600円の買い切りです。</li>
          <li>サブスクリプションではなく、自動更新はありません。</li>
          <li>Apple の App 内課金（StoreKit）を使用します。</li>
          <li>購入、決済、返金等は Apple が処理します。</li>
          <li>
            運営者がクレジットカード番号等の決済情報を直接取得または保存することはありません。
          </li>
          <li>
            購入状態や復元に必要な情報を、端末内に保存する場合があります。
          </li>
          <li>
            同一 Apple ID 等、Apple の条件を満たす場合に、購入を復元できます。
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="8. 共有">
        <ul className="list-disc space-y-2 pl-5">
          <li>テキスト、画像、PDF を共有できます。</li>
          <li>共有先は、利用者が選択します。</li>
          <li>
            共有先では、利用者が選択した外部サービスの利用規約およびプライバシーポリシーが適用されます。
          </li>
          <li>運営者が共有先を自動選択しません。</li>
          <li>
            共有後の情報管理は、共有先サービスの仕様に依存します。
            共有内容、送信先、公開範囲、PDF や画像に含まれる予定情報を、
            共有前にご確認ください。
          </li>
        </ul>
        <p>
          URL によるリアルタイム共有や、家族アカウント間の同期は、
          現時点では提供していません。
        </p>
      </LegalSection>

      <LegalSection title="9. 第三者サービス">
        <p>本アプリでは、現時点で以下を利用しています。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Google AdMob（広告配信）</li>
          <li>Google UMP（広告同意管理）</li>
          <li>Apple App Store / StoreKit（App 内課金）</li>
          <li>iOS 共有機能</li>
        </ul>
        <p>
          各サービスの提供者、取得・処理される情報、利用目的、外部ポリシーについては、
          各提供者の公開情報をご確認ください。
        </p>
      </LegalSection>

      <LegalSection title="10. 子どもの情報">
        <p>
          本アプリは、子ども向け専用アプリではありません。
          家族の予定に子どもの情報を入力する場合は、
          保護者や管理者が共有範囲を確認してください。
          子どもの個人情報を不用意に公開しないようご注意ください。
        </p>
      </LegalSection>

      <LegalSection title="11. 改定">
        <p>
          広告 SDK、保存方式、共有方式、課金方式等の変更時に、
          本ポリシーを改定する場合があります。
          重要な変更がある場合は、本サイト上での掲示等によりお知らせします。
        </p>
      </LegalSection>

      <LegalSection title="12. お問い合わせ">
        <p>本ポリシーに関するお問い合わせは、以下までご連絡ください。</p>
        <p>
          運営：{APP_OPERATION.label}
          <br />
          開発：{APP_DEVELOPER.legalLabel}
          <br />
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
              href="/terms/family-calendar"
              className="text-memory-box-blue underline-offset-2 hover:underline"
            >
              Family Calendar 利用規約
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
          最終更新日：{FAMILY_CALENDAR_PRIVACY_UPDATED_AT}
        </p>
      </section>
    </LegalPageLayout>
  );
}
