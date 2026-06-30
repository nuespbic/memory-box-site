import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { PHILOSOPHY } from "@/lib/site-config";

export function PhilosophySection() {
  return (
    <SectionContainer id="philosophy">
      <div className="mx-auto max-w-2xl text-center">
        <ScrollReveal>
          <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Philosophy
          </h2>
        </ScrollReveal>

        <ul className="mt-12 flex flex-col gap-8 md:mt-14 md:gap-9">
          {PHILOSOPHY.values.map((value, index) => (
            <li key={value}>
              <ScrollReveal delay={index * 80}>
                <p className="text-xl font-medium leading-relaxed tracking-tight text-foreground md:text-2xl md:leading-relaxed">
                  {value}
                </p>
              </ScrollReveal>
            </li>
          ))}
        </ul>

        <ScrollReveal delay={280}>
          <p className="mt-16 whitespace-pre-line text-base leading-[2] text-mb-muted md:mt-20 md:text-lg md:leading-[2.1]">
            {PHILOSOPHY.closing}
          </p>
        </ScrollReveal>
      </div>
    </SectionContainer>
  );
}
