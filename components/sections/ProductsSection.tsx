import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PRODUCTS } from "@/lib/site-config";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function ProductsSection() {
  return (
    <SectionContainer className="border-t border-mb-border bg-mb-surface" innerClassName="max-w-5xl">
      <ScrollReveal>
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-xl font-medium tracking-tight text-mb-soft md:text-2xl">
            サービス一覧
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        {PRODUCTS.map((product, index) => (
          <ProductCard
            key={product.name}
            name={product.name}
            tagline={product.tagline}
            description={product.description}
            image={product.image}
            comingSoon={product.comingSoon}
            index={index}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
