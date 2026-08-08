import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  glass = false,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  glass?: boolean | "light";
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn(
        "card-trace rounded-2xl border border-border-subtle p-6 transition-all duration-300 [transition-timing-function:var(--ease-premium)] hover:border-carbon-teal/40 hover:shadow-[0_0_40px_rgba(29,158,117,0.15)] hover:-translate-y-1",
        glass === "light" ? "glass-card--light" : glass ? "glass-card" : "bg-earth-dark",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
