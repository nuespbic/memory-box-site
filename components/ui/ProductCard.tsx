import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type ProductCardProps = {
  name: string;
  tagline: string;
  description: string;
  image: string;
  comingSoon?: boolean;
  index?: number;
};

export function ProductCard({
  name,
  tagline,
  description,
  image,
  comingSoon = false,
  index = 0,
}: ProductCardProps) {
  return (
    <ScrollReveal delay={index * 80}>
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-mb-border bg-white">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-mb-surface">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-7 md:gap-4 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-medium tracking-tight text-foreground md:text-2xl">
              {name}
            </h3>
            {comingSoon && (
              <span className="shrink-0 rounded-full border border-mb-border px-3 py-1 text-xs text-mb-muted">
                Coming Soon
              </span>
            )}
          </div>
          <p className="text-sm font-medium text-memory-box-blue md:text-base">
            {tagline}
          </p>
          <p className="text-sm leading-relaxed text-mb-muted md:text-base md:leading-relaxed">
            {description}
          </p>
        </div>
      </article>
    </ScrollReveal>
  );
}
