import type { ReactNode } from "react";

type LegalSectionProps = {
  title: string;
  children: ReactNode;
};

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="mt-10 first:mt-0 md:mt-12">
      <h2 className="text-lg font-medium text-foreground md:text-xl">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-mb-soft md:text-lg md:leading-relaxed">
        {children}
      </div>
    </section>
  );
}
