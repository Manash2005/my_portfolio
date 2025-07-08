import type { SVGProps } from "react";

export function HtmlIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 16l-3-1-3 1 3-7 3 7z" />
      <path d="M2 3l1.2 13.5L12 21l8.8-4.5L22 3H2z" />
    </svg>
  );
}
