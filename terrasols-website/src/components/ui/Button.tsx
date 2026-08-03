import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  target?: string;
  rel?: string;
  disabled?: boolean;
  shimmer?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "btn-liquid bg-growth-green text-soil-black hover:text-soil-black hover:shadow-[0_0_40px_rgba(29,158,117,0.4)]",
  secondary:
    "btn-liquid bg-harvest-amber text-soil-black hover:shadow-[0_0_40px_rgba(239,159,39,0.35)]",
  outline:
    "border border-border-subtle text-text-primary hover:border-carbon-teal hover:text-carbon-teal",
  ghost: "text-text-primary hover:text-carbon-teal",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className,
  showArrow = true,
  type = "button",
  onClick,
  target,
  rel,
  disabled,
  shimmer = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none",
    variantStyles[variant],
    shimmer && "btn-shimmer",
    className
  );

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "group")} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn(classes, "group")} disabled={disabled}>
      {content}
    </button>
  );
}
