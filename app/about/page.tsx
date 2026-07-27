import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { ABOUT } from "@/lib/operator";

export const metadata: Metadata = {
  title: "私たちについて | Memory Box",
  description:
    "Memory Box および関連アプリの運営方針と、運営者情報についてご案内します。",
};

export default function AboutPage() {
  return (
    <LegalPageLayout title={ABOUT.title} updatedAt={ABOUT.updatedAt}>
      <div className="space-y-6 text-base leading-relaxed text-mb-soft md:text-lg md:leading-relaxed">
        {ABOUT.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="text-sm text-mb-muted md:text-base">{ABOUT.futureNote}</p>
      </div>
    </LegalPageLayout>
  );
}
