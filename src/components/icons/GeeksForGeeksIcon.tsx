
import Image from "next/image";

export function GeeksForGeeksIcon() {
  return (
    <Image
      src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/geeksforgeeks.svg"
      alt="GeeksForGeeks Logo"
      width={40}
      height={40}
      className="dark:invert transition-all duration-300"
    />
  );
}
