import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

type LegalPageLayoutProps = {
  title: string;
  updatedAt: string;
  children: ReactNode;
};

export function LegalPageLayout({
  title,
  updatedAt,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6 md:px-10">
          <Link
            href="/#support"
            className="text-sm text-mb-muted transition-opacity hover:opacity-70"
          >
            ← Support へ戻る
          </Link>
          <h1 className="mt-8 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-mb-muted">最終更新日：{updatedAt}</p>
          <div className="prose-legal mt-12">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
