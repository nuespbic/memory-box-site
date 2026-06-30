import Image from "next/image";
import { APP_SCREENS } from "@/lib/screenshots";

export function AppScreensGallery() {
  return (
    <div
      aria-label="Memory Box の実際の画面"
      className="mx-auto grid max-w-6xl grid-cols-1 gap-12 sm:max-w-none sm:grid-cols-2 sm:gap-10 lg:grid-cols-5 lg:gap-5 xl:gap-6"
    >
      {APP_SCREENS.map((screen, index) => (
        <figure
          key={screen.id}
          className={`mx-auto flex w-full max-w-[300px] flex-col items-center sm:max-w-none ${
            index === APP_SCREENS.length - 1
              ? "sm:col-span-2 sm:mx-auto sm:max-w-[300px] lg:col-span-1 lg:max-w-none"
              : ""
          }`}
        >
          <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-2xl border border-mb-border bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <Image
              src={screen.src}
              alt={screen.alt}
              fill
              unoptimized
              className="object-contain object-center"
              sizes="(max-width: 640px) 300px, (max-width: 1280px) 260px, 220px"
              priority={index < 2}
            />
          </div>
          <figcaption className="mt-4 max-w-[240px] text-center md:mt-5">
            <p className="text-sm leading-relaxed text-foreground md:text-[15px]">
              {screen.caption}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-mb-muted md:text-[15px]">
              {screen.subcaption}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
