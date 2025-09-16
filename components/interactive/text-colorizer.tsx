"use client";

import { usePathname } from "next/navigation";

type Props = {
  text?: string;
  color?: string; // still allowed but with fallback
  className?: string;
};

export default function TextColorizer({
  text = "",
  color,
  className = "",
}: Props) {
  const pathname = usePathname();

  const words = text.trim().length > 0 ? text.split(" ") : [];

  // ✅ fallback: if no color or invalid color, force white
  const safeColor = color && color.startsWith("text-") ? color : "text-white";

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${pathname}-${i}`}
          className={`${safeColor} font-medium`}
          style={{
            textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            fontWeight: 500,
          }}
        >
          {word}{" "}
        </span>
      ))}
    </span>
  );
}
