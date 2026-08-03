import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  glass = false,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  light?: boolean;
}) {
  if (light) {
    return (
      <div
        className={cn(
          "card-light rounded-2xl border border-[rgba(29,158,117,0.15)] bg-white p-6 text-muted-forest transition-all duration-300",
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "card-trace rounded-2xl border border-border-subtle p-6 transition-all duration-300 hover:border-carbon-teal/40 hover:shadow-[0_0_40px_rgba(29,158,117,0.15)] hover:-translate-y-1",
        glass ? "glass-card" : "bg-earth-dark",
        className
      )}
    >
      {children}
    </div>
  );
}
