import type { SVGProps } from "react";

// lucide-react 1.x dropped brand/logo glyphs (trademark policy) — this is a
// minimal outline Instagram mark drawn to match lucide's stroke conventions
// (24x24 viewBox, round joins, currentColor) so it sits visually consistent
// with the rest of the icon set.
export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
