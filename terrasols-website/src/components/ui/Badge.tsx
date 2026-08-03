import { cn } from "@/lib/utils";

type BadgeTone = "green" | "amber" | "teal" | "neutral";

const toneStyles: Record<BadgeTone, string> = {
  green: "bg-growth-green/15 text-carbon-teal border-growth-green/30",
  amber: "bg-harvest-amber/15 text-harvest-amber border-harvest-amber/30",
  teal: "bg-carbon-teal/10 text-carbon-teal border-carbon-teal/30",
  neutral: "bg-white/5 text-text-secondary border-border-subtle",
};

const lightToneStyles: Record<BadgeTone, string> = {
  green: "bg-[#1D9E75]/10 text-[#1D9E75] border-[#1D9E75]/30",
  amber: "bg-[#EF9F27]/10 text-[#EF9F27] border-[#EF9F27]/30",
  teal: "bg-[#1D9E75]/10 text-[#1D9E75] border-[#1D9E75]/30",
  neutral: "bg-cream text-muted-forest border-[rgba(29,158,117,0.15)]",
};

export default function Badge({
  children,
  tone = "green",
  light = false,
  className,
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide",
        light ? lightToneStyles[tone] : toneStyles[tone],
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
