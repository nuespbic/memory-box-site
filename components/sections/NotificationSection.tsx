import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function NotificationSection() {
  return (
    <SectionContainer className="border-b border-mb-border bg-mb-surface">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-medium leading-snug tracking-tight text-foreground md:text-3xl">
            必要な時だけ、届く。
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mb-muted md:mt-6 md:text-lg">
            うるさくない通知。期限が近づいたら、そっと知らせます。
          </p>
        </div>
      </ScrollReveal>
    </SectionContainer>
  );
}
