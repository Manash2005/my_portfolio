import type { SVGProps } from "react";

export function TailwindIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 12c-3.5 0-7 1.5-7 5s3.5 5 7 5 7-1.5 7-5-3.5-5-7-5z" />
      <path d="M12 2C8.5 2 5 3.5 5 7s3.5 5 7 5 7-1.5 7-5S15.5 2 12 2z" />
    </svg>
  );
}
