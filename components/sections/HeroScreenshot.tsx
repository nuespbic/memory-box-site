import Image from "next/image";
import { HERO } from "@/lib/site-config";

export function HeroScreenshot() {
  return (
    <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[275px] overflow-hidden rounded-2xl border border-mb-border bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] sm:max-w-[300px] lg:max-w-[320px] xl:max-w-[345px]">
      <Image
        src={HERO.heroScreenshot}
        alt={HERO.heroScreenshotAlt}
        fill
        unoptimized
        priority
        className="object-contain object-center"
        sizes="(max-width: 1024px) 260px, 300px"
      />
    </div>
  );
}
