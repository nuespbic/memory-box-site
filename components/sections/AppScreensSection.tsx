import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AppScreensGallery } from "@/components/sections/AppScreensGallery";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function AppScreensSection() {
  return (
    <SectionContainer id="services" className="bg-white">
      <ScrollReveal>
        <div className="mb-14 text-center md:mb-20">
          <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            使ってみると、こんな感じ。
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-mb-muted md:mt-5 md:text-lg">
            飾りのない、実際の画面。
            <br className="hidden sm:inline" />
            Memory Boxを触っているイメージのまま。
          </p>
        </div>
      </ScrollReveal>

      <AppScreensGallery />
    </SectionContainer>
  );
}
