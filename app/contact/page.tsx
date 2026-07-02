import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { LegalSection } from "@/components/ui/LegalSection";
import { BRAND, SUPPORT } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "お問い合わせ | Memory Box",
  description: "Memory Box へのお問い合わせ方法をご案内します。",
};

export default function ContactPage() {
  return (
    <LegalPageLayout title="お問い合わせ" updatedAt="2026年7月1日">
      <LegalSection title="メールアドレス">
        <p>
          <a
            href={`mailto:${SUPPORT.email}`}
            className="text-memory-box-blue underline-offset-2 hover:underline"
          >
            {SUPPORT.email}
          </a>
        </p>
      </LegalSection>

      <LegalSection title="お問い合わせ方法">
        <p>
          {BRAND.name} に関するご質問、不具合のご報告、機能に関するご要望等は、
          上記メールアドレスよりお問い合わせください。
        </p>
        <p>お問い合わせの際は、以下をお書き添えいただけるとスムーズです。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>お使いの端末（例：iPhone 15）</li>
          <li>iOS のバージョン</li>
          <li>本アプリのバージョン</li>
          <li>お問い合わせ内容の詳細</li>
        </ul>
      </LegalSection>

      <LegalSection title="返信について">
        <p>{SUPPORT.responseNote}</p>
        <p>
          内容によっては、回答にお時間をいただく場合や、
          回答できない場合があります。あらかじめご了承ください。
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
