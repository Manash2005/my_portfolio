
import Image from "next/image";

export function GitHubIcon() {
  return (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      alt="GitHub Logo"
      width={40}
      height={40}
      className="dark:invert"
    />
  );
}
