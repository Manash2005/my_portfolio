import type { SVGProps } from "react";

export function VsCodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 3l10 2.5v13L2 21V3z" />
      <path d="M22 3l-10 2.5v13L22 21V3z" />
      <path d="M12 5.5v13" />
      <path d="M6 8.5l-4 4 4 4" />
      <path d="M18 8.5l4 4-4 4" />
    </svg>
  );
}
