import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { LegalSection } from "@/components/ui/LegalSection";
import { SupportEmailLink } from "@/components/ui/SupportEmailLink";
import { SHIFT_NOTE_TERMS_UPDATED_AT } from "@/lib/apps-catalog";
import { APP_DEVELOPER, APP_OPERATION } from "@/lib/operator";
import { SHIFT_NOTE_BRAND } from "@/lib/shift-note-content";

export const metadata: Metadata = {
  title: "シフトノート 利用規約 | Memory Box",
  description:
    "シフトノートの無料版、Premium、PDF出力、共有機能、利用条件等に関する利用規約です。",
};

export default function ShiftNoteTermsPage() {
  return (
    <LegalPageLayout
      title="シフトノート 利用規約"
      updatedAt={SHIFT_NOTE_TERMS_UPDATED_AT}
    >
      <LegalSection title="第1条（適用）">
        <p>
          本利用規約（以下「本規約」）は、{SHIFT_NOTE_BRAND.brandLine}
          （以下「本アプリ」）の利用条件を定めるものです。
          本アプリは、運営：{APP_OPERATION.label}、開発：{APP_DEVELOPER.legalLabel}
          により提供されます。
        </p>
        <p>
          利用者は、本アプリを利用した時点で、本規約に同意したものとみなされます。
          本アプリ内の個別案内、注意事項、ヘルプ等は、本規約の一部を構成する場合があります。
        </p>
      </LegalSection>

      <LegalSection title="第2条（サービス内容）">
        <p>
          本アプリは、勤務希望の回収、シフト作成、確認、保存、PDF出力、印刷および共有を支援するシフト管理アプリです。
          主な機能は以下のとおりです。
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>従業員登録</li>
          <li>勤務希望の入力および提出</li>
          <li>シフト作成</li>
          <li>シフト保存および編集</li>
          <li>週表示、月表示</li>
          <li>PDFプレビュー</li>
          <li>PDF出力</li>
          <li>印刷</li>
          <li>共有</li>
          <li>スクリーンショット保存</li>
          <li>従業員向け入力URLの発行および共有</li>
          <li>時給、交通費、人件費予算等に基づく参考計算</li>
          <li>その他、アプリ内で提供する関連機能</li>
        </ul>
      </LegalSection>

      <LegalSection title="第3条（無料版）">
        <ul className="list-disc space-y-2 pl-5">
          <li>無料版では、基本的なシフト作成機能を利用できます。</li>
          <li>無料版では、広告を表示します。</li>
          <li>広告の表示方法や内容は、変更される場合があります。</li>
          <li>
            広告事業者が提供する広告について、運営者がその内容や安全性を全面的に保証するものではありません。
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="第4条（Premium）">
        <ul className="list-disc space-y-2 pl-5">
          <li>Premiumは、自動更新サブスクリプションです。</li>
          <li>月額料金は700円です。</li>
          <li>
            購入、更新、解約および返金は、AppleのApp Storeを通じて処理されます。
            返金の可否や条件については、Appleの規約および手続きに従います。
            運営者がAppleの返金条件を独自に保証するものではありません。
          </li>
          <li>
            Apple IDの設定から、自動更新を停止できます。
          </li>
          <li>
            運営者が、クレジットカード番号等の決済情報を直接取得または保存することはありません。
          </li>
          <li>Premiumでは、広告が非表示になります。</li>
          <li>
            Premiumでは、時給、交通費、月間人件費予算、予定人件費、残り予算、営業時間、定休日、
            PDFレイアウトの追加機能等を利用できます。
            PDFレイアウトの追加機能には、縦向き・横向きの選択等を含みます。
          </li>
          <li>
            Premiumの有効期間が終了した場合、有料機能の利用は停止されます。
          </li>
          <li>
            Premium終了後も、登録済みデータは自動的には削除されません。
          </li>
          <li>
            再契約後の利用可否は、保存状態およびアプリの仕様に従います。
          </li>
          <li>
            通信障害、Apple側の処理、購入状態の反映遅延等により、
            Premium機能の利用開始または停止が遅れる場合があります。
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="第5条（利用者による情報管理）">
        <p>安全な利用のため、以下の点にご留意ください。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>入力内容が正確であることを、ご確認ください。</li>
          <li>
            従業員名、勤務希望、勤務時間、時給、交通費、備考等は、
            適切な権限と目的のもとで登録してください。
          </li>
          <li>
            第三者の情報を登録する場合は、必要な同意や権限を確認してください。
          </li>
          <li>不要になった情報は、適宜削除してください。</li>
          <li>
            端末の紛失、共有端末の利用、画面ロックの設定等にご注意ください。
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="第6条（シフト内容の確認）">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            本アプリが表示・出力するシフト内容は、利用者が入力または選択した情報に基づきます。
          </li>
          <li>シフトの最終決定および内容確認は、利用者自身が行ってください。</li>
          <li>
            人員配置、勤務時間、休憩時間、休日、勤務条件等の適法性や妥当性を、
            本アプリが自動的に保証するものではありません。
          </li>
          <li>実際の勤務開始前に、内容をご確認ください。</li>
          <li>
            アプリ上の表示と実際の勤務指示に差異がある場合は、
            管理者が確認および修正を行ってください。
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="第7条（人件費等の参考表示）">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            時給、交通費、勤務時間、人件費予算、予定人件費、残り予算等は、
            利用者が入力した条件に基づく参考情報です。
          </li>
          <li>給与計算を保証するものではありません。</li>
          <li>税金の計算や判定を行いません。</li>
          <li>扶養判定を行いません。</li>
          <li>社会保険加入判定を行いません。</li>
          <li>
            労働保険、割増賃金、最低賃金、休憩、休日、労働時間等の法的判定を行いません。
          </li>
          <li>労務管理、税務、社会保険手続きを代行または保証しません。</li>
          <li>
            必要に応じて、社会保険労務士、税理士、弁護士、行政機関等へご確認ください。
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="第8条（PDF出力、印刷および共有）">
        <ul className="list-disc space-y-2 pl-5">
          <li>利用者は、作成したシフトをPDFとして出力できます。</li>
          <li>
            PDFには、従業員名、勤務日、勤務時間、備考等が含まれる場合があります。
          </li>
          <li>
            端末の共有機能を通じて、印刷、保存、メール、メッセージアプリ、
            クラウドサービス等へ共有できます。
          </li>
          <li>共有先は、利用者自身が選択します。</li>
          <li>
            共有後の情報には、共有先サービスの利用規約およびプライバシーポリシーが適用されます。
          </li>
          <li>
            送信先、公開範囲、印刷物の保管等を、ご確認ください。
          </li>
          <li>運営者が共有先を自動的に決定するものではありません。</li>
          <li>
            PDFや印刷物の内容について、共有前に利用者が最終確認を行ってください。
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="第9条（入力URLおよび共有リンク）">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            管理者は、勤務希望入力用URL等を発行し、対象者へ共有できます。
          </li>
          <li>
            URLを受け取った第三者が、情報へアクセスできる場合があります。
          </li>
          <li>URLを、公開された場所へ不用意に掲載しないでください。</li>
          <li>
            誤送信や不要な共有が判明した場合は、必要に応じて、
            リンクの再発行、利用停止、データ削除等を行ってください。
          </li>
          <li>
            共有リンクは、端末上で生成され、従業員の識別子、対象年月、
            アクセス用トークン等を含む場合があります。
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="第10条（禁止事項）">
        <p>利用者は、本アプリの利用にあたり、以下の行為を行ってはなりません。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>法令または公序良俗に反する行為</li>
          <li>他人になりすます行為</li>
          <li>他人の情報を不正に登録、取得、利用または公開する行為</li>
          <li>不正アクセス</li>
          <li>アプリやサーバーへ過度な負荷を与える行為</li>
          <li>脆弱性の悪用</li>
          <li>
            リバースエンジニアリング、改変、解析等（法令上認められる範囲を除く）
          </li>
          <li>著作権、商標権、プライバシー権等を侵害する行為</li>
          <li>営業妨害</li>
          <li>不正な広告クリック</li>
          <li>サブスクリプション購入状態の改ざん</li>
          <li>犯罪行為または犯罪を助長する行為</li>
          <li>その他、運営者が不適切と合理的に判断する行為</li>
        </ul>
      </LegalSection>

      <LegalSection title="第11条（知的財産権）">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            本アプリ、本サイト、文章、画像、ロゴ、プログラム、デザイン等に関する権利は、
            運営者または正当な権利者に帰属します。
          </li>
          <li>
            利用者が入力した従業員情報やシフト情報の権利を、
            運営者が取得するものではありません。
          </li>
          <li>利用者データを販売しません。</li>
          <li>
            本アプリの利用に必要な範囲を超えて、コンテンツを複製、転載、販売等することはできません。
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="第12条（サービスの変更、停止および終了）">
        <ul className="list-disc space-y-2 pl-5">
          <li>機能追加、変更、改善を行う場合があります。</li>
          <li>
            保守、障害、セキュリティ対応、法令対応、ストアやOSの変更等により、
            一時停止する場合があります。
          </li>
          <li>やむを得ない事情により、サービスを終了する場合があります。</li>
          <li>可能な範囲で、事前に告知します。</li>
          <li>緊急時は、事前告知できない場合があります。</li>
          <li>
            サービス終了時のデータ取扱いは、実際の保存方式に合わせて案内します。
            現時点では、データは原則として利用者の端末内に保存されます。
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="第13条（免責事項）">
        <p>
          運営者は、以下の事項について、運営者の故意または重大な過失がある場合を除き、
          責任を負いません。
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>本アプリが完全に中断せず、エラーなく動作すること</li>
          <li>端末、OS、通信環境、Apple、外部サービス等に起因する問題</li>
          <li>データ消失、破損、端末故障、誤操作</li>
          <li>PDF、印刷物、共有リンクの誤送信や公開範囲</li>
          <li>入力ミスや確認不足によるシフトの誤り</li>
          <li>人件費等の参考情報に基づく判断</li>
          <li>法令、制度、就業規則、労働条件との不一致</li>
          <li>利用者間、管理者と従業員間、第三者とのトラブル</li>
          <li>外部広告、外部サービス、共有先サービスの内容</li>
        </ul>
        <p>
          前項の定めは、消費者契約法その他の強行法規に反する場合には、
          適用されないものとします。
        </p>
      </LegalSection>

      <LegalSection title="第14条（利用制限）">
        <p>
          重大な規約違反、不正利用、サービス妨害等がある場合、
          利用制限や利用停止を行う場合があります。
        </p>
        <p>
          本アプリの一部機能は端末内で動作するため、
          運営者が端末上の利用そのものを直接停止できない場合があります。
        </p>
      </LegalSection>

      <LegalSection title="第15条（プライバシー）">
        <p>
          個人情報および入力データの取扱いについては、
          <Link
            href="/privacy/shift-note"
            className="text-memory-box-blue underline-offset-2 hover:underline"
          >
            シフトノート プライバシーポリシー
          </Link>
          に従います。
        </p>
      </LegalSection>

      <LegalSection title="第16条（規約の変更）">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            法令、機能、運営方法等の変更に応じて、本規約を改定する場合があります。
          </li>
          <li>重要な変更は、本サイトまたはアプリ内で案内します。</li>
          <li>
            改定後の規約は、掲載時点または別途定めた日から適用します。
          </li>
          <li>
            改定後も本アプリの利用を継続した場合、
            改定後の規約に同意したものとみなします（法令に反しない範囲）。
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="第17条（準拠法および裁判管轄）">
        <p>本規約は、日本法に準拠します。</p>
        <p>
          本アプリに関して紛争が生じた場合、まず誠実に協議して解決を図るものとします。
        </p>
        <p>
          協議によっても解決しない場合、運営者（{APP_OPERATION.legalLabel}
          ）の所在地を管轄する裁判所を、第一審の専属的合意管轄裁判所とします。
        </p>
      </LegalSection>

      <LegalSection title="第18条（お問い合わせ）">
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
              href="/privacy/shift-note"
              className="text-memory-box-blue underline-offset-2 hover:underline"
            >
              シフトノート プライバシーポリシー
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-memory-box-blue underline-offset-2 hover:underline"
            >
              お問い合わせ
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
          最終更新日：{SHIFT_NOTE_TERMS_UPDATED_AT}
        </p>
      </section>
    </LegalPageLayout>
  );
}
