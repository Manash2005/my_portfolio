
import Image from "next/image";

export function LeetCodeIcon() {
  return (
    <Image
      src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg"
      alt="LeetCode Logo"
      width={40}
      height={40}
      className="dark:invert transition-all duration-300"
    />
  );
}
