import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DayStoryVisual } from "@/components/ui/DayStoryVisual";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function DayStorySection() {
  return (
    <SectionContainer className="border-b border-mb-border bg-mb-surface">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-medium leading-snug tracking-tight text-foreground md:text-3xl">
            Memory Boxがある一日
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mb-muted md:mt-6 md:text-lg">
            特別な操作はいりません。いつもの流れの中で、そっと支えます。
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <div className="mt-14 md:mt-20">
          <DayStoryVisual />
        </div>
      </ScrollReveal>
    </SectionContainer>
  );
}
