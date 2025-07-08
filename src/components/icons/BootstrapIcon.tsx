import type { SVGProps } from "react";

export function BootstrapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM8.5 13.5h-1v2h-2v-7h3c1.654 0 3 1.346 3 3s-1.346 3-3 3zm-1-4h1c.551 0 1-.449 1-1s-.449-1-1-1h-1v2zm7.5 5.5h-2v-1.5h-1.5v1.5h-2v-7h2v3h1.5v-3h2v7z"/>
    </svg>
  );
}
