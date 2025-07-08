import type { SVGProps } from "react";

export function CIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.28 4.68c-1.85-1.07-4.1-1.18-6.05-.33-1.95.85-3.4 2.6-3.88 4.65-.48 2.05.01 4.2.98 5.97.97 1.77 2.68 3.03 4.68 3.51 2 .48 4.14-.02 5.86-.99l-1.55-1.42c-1.15.63-2.61.85-3.95.48-1.34-.37-2.43-1.28-2.92-2.5-1.1-2.73.08-5.91 2.81-7.01 2.73-1.1 5.91.08 7.01 2.81l1.55-1.42c-.52-1.29-1.38-2.39-2.54-3.23z"/>
    </svg>
  );
}
