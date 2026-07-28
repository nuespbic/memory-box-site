import { SUPPORT } from "@/lib/site-config";

export function SupportEmailLink() {
  return (
    <a
      href={`mailto:${SUPPORT.email}`}
      className="text-memory-box-blue underline-offset-2 hover:underline"
    >
      {SUPPORT.email}
    </a>
  );
}
