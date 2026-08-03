import { cn } from "@/lib/utils";

const PALETTE = ["#1D9E75", "#EF9F27", "#5DCAA5", "#9FE1CB", "#3D2B1F"];

function hashName(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

export default function Avatar({
  name,
  size = 96,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const accent = PALETTE[hashName(name) % PALETTE.length];

  return (
    <div
      aria-hidden="true"
      className={cn("mx-auto flex shrink-0 items-center justify-center rounded-full font-display font-semibold", className)}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        color: accent,
        background: `${accent}26`,
        border: `1px solid ${accent}4D`,
      }}
    >
      {initials}
    </div>
  );
}
