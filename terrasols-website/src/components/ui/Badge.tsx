import { cn } from "@/lib/utils";

type BadgeTone = "green" | "amber" | "teal" | "neutral" | "blue";

const toneStyles: Record<BadgeTone, string> = {
  green: "bg-green-primary/10 text-green-mid border-green-primary/25",
  amber: "bg-amber/10 text-soil-brown border-amber/30",
  teal: "bg-green-bright/15 text-green-mid border-green-bright/30",
  blue: "bg-blue-mid/10 text-blue-mid border-blue-mid/25",
  neutral: "bg-black/[0.03] text-text-mid border-border-subtle",
};

export default function Badge({
  children,
  tone = "green",
  className,
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide",
        toneStyles[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const tone: BadgeTone = status === "Active" ? "green" : status === "Beta" ? "teal" : "amber";
  return <Badge tone={tone}>{status}</Badge>;
}
