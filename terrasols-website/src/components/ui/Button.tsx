import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "dark";

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
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-green-primary text-white hover:bg-green-mid hover:shadow-[0_10px_30px_rgba(29,158,117,0.35)]",
  secondary:
    "bg-amber text-dark-green hover:brightness-105 hover:shadow-[0_10px_30px_rgba(239,159,39,0.3)]",
  outline:
    "border border-border-subtle bg-white/60 text-text-dark hover:border-green-primary hover:text-green-mid",
  ghost: "text-text-dark hover:text-green-mid",
  dark: "bg-white text-dark-green hover:bg-green-bright hover:text-dark-green",
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
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none",
    variantStyles[variant],
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
