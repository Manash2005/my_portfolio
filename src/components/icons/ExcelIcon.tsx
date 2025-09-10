
import Image from "next/image";

export function ExcelIcon() {
  return (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg"
      alt="Microsoft Excel Logo"
      width={40}
      height={40}
      className="dark:invert"
    />
  );
}
