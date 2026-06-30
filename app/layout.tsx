import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Memory Box | 覚えておくことから自由へ",
  description:
    "必要な時だけ、必要なことを思い出せる。Memory Boxは、記憶を安心して預けられる場所をつくります。",
  openGraph: {
    title: "Memory Box | 覚えておくことから自由へ",
    description: "ロスゼロ｜忘れないための記録",
    siteName: "Memory Box",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memory Box | 覚えておくことから自由へ",
    description: "ロスゼロ｜忘れないための記録",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans text-black antialiased">
        {children}
      </body>
    </html>
  );
}
