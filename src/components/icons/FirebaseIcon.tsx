import type { SVGProps } from "react";

export function FirebaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 2.6l7.8 1.9 2.2 7.5L4 2.6z" />
      <path d="M4.5 10.9L12 21.4l7.5-10.5-5.3-2.2L4.5 10.9z" />
      <path d="M12 21.4l-7.5-10.5L4 2.6" />
    </svg>
  );
}
