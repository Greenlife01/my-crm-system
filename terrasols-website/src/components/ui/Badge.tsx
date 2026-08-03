import { cn } from "@/lib/utils";

type BadgeTone = "green" | "amber" | "teal" | "neutral";

const toneStyles: Record<BadgeTone, string> = {
  green: "bg-growth-green/15 text-carbon-teal border-growth-green/30",
  amber: "bg-harvest-amber/15 text-harvest-amber border-harvest-amber/30",
  teal: "bg-carbon-teal/10 text-carbon-teal border-carbon-teal/30",
  neutral: "bg-white/5 text-text-secondary border-border-subtle",
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
