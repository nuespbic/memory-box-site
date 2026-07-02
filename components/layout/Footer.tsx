import { BRAND } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-mb-border bg-white py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
        <p className="text-sm text-mb-muted">
          Copyright © {BRAND.name}
        </p>
      </div>
    </footer>
  );
}
