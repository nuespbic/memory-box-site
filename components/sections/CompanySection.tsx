import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { COMPANY } from "@/lib/site-config";

export function CompanySection() {
  return (
    <SectionContainer id="company" className="bg-mb-surface">
      <div className="mx-auto max-w-2xl">
        <ScrollReveal>
          <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Company
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <p className="mt-10 text-lg font-medium text-foreground md:mt-12 md:text-xl">
            {COMPANY.name}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <p className="mt-6 text-base leading-relaxed text-mb-soft md:mt-8 md:text-lg md:leading-relaxed">
            {COMPANY.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <div className="mt-12 md:mt-14">
            <h3 className="text-sm text-mb-muted">事業内容</h3>
            <ul className="mt-5 space-y-4 md:space-y-5">
              {COMPANY.businessItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-mb-soft md:text-lg"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-memory-box-blue"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </SectionContainer>
  );
}
