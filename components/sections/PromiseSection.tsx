import { PROMISES } from "@/lib/site-config";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function PromiseSection() {
  return (
    <SectionContainer className="border-t border-mb-border bg-white">
      <ScrollReveal>
        <h2 className="text-center text-2xl font-medium tracking-tight text-foreground md:text-3xl">
          Memory Boxは約束します。
        </h2>
      </ScrollReveal>

      <ul className="mx-auto mt-16 max-w-lg space-y-7 md:mt-20 md:space-y-8">
        {PROMISES.map((promise, index) => (
          <ScrollReveal key={promise} delay={index * 40}>
            <li className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-memory-box-blue"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path
                    d="M4 10l4 4 8-8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-base leading-relaxed text-mb-soft md:text-lg md:leading-relaxed">
                {promise}
              </span>
            </li>
          </ScrollReveal>
        ))}
      </ul>
    </SectionContainer>
  );
}
