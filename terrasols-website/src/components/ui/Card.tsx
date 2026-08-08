import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  glass = false,
}: {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border-subtle p-6 shadow-[0_2px_16px_rgba(10,46,26,0.04)] transition-all duration-300 hover:border-green-primary/40 hover:shadow-[0_16px_40px_rgba(10,46,26,0.1)] hover:-translate-y-1",
        glass ? "glass-card" : "bg-white",
        className
      )}
    >
      {children}
    </div>
  );
}
