import type { SVGProps } from "react";

export function GitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="16" x2="12" y2="22" />
      <line x1="12" y1="2" x2="12" y2="8" />
      <line x1="15.54" y1="8.46" x2="19.07" y2="4.93" />
      <line x1="4.93" y1="19.07" x2="8.46" y2="15.54" />
    </svg>
  );
}
