import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

type AppPageLayoutProps = {
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
  children: ReactNode;
};

export function AppPageLayout({
  title,
  subtitle,
  backHref = "/apps",
  backLabel = "← アプリ・製品一覧へ戻る",
  children,
}: AppPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6 md:px-10">
          <Link
            href={backHref}
            className="text-sm text-mb-muted transition-opacity hover:opacity-70"
          >
            {backLabel}
          </Link>
          <h1 className="mt-8 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 text-base leading-relaxed text-mb-soft md:text-lg md:leading-relaxed">
              {subtitle}
            </p>
          ) : null}
          <div className="mt-12 space-y-10 md:mt-14 md:space-y-12">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
