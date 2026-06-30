import { BRAND } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-mb-border bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
        <p className="text-xl font-medium tracking-tight text-foreground md:text-2xl">
          {BRAND.tagline}
        </p>
        <p className="mt-4 text-sm text-mb-muted md:text-base">{BRAND.name}</p>
      </div>
    </footer>
  );
}
