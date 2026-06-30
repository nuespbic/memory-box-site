import type { ReactNode } from "react";

type SectionContainerProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function SectionContainer({
  id,
  children,
  className = "",
  innerClassName = "",
}: SectionContainerProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div
        className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
