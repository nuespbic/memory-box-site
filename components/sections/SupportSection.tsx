import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SUPPORT_LINKS } from "@/lib/site-config";

export function SupportSection() {
  return (
    <SectionContainer id="support" className="border-t border-mb-border">
      <div className="mx-auto max-w-2xl">
        <ScrollReveal>
          <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Support
          </h2>
        </ScrollReveal>

        <ul className="mt-10 divide-y divide-mb-border md:mt-12">
          {SUPPORT_LINKS.map((link, index) => (
            <li key={link.href}>
              <ScrollReveal delay={80 + index * 60}>
                <a
                  href={link.href}
                  className="block py-5 text-base text-mb-soft md:py-6 md:text-lg"
                >
                  {link.label}
                </a>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}
