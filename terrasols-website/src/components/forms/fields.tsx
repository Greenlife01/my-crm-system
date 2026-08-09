import { cn } from "@/lib/utils";

const baseInputStyles =
  "w-full rounded-lg border border-border-subtle bg-sage-light px-4 py-3 text-sm text-text-dark placeholder:text-text-muted focus:border-green-bright focus:outline-none focus:ring-1 focus:ring-green-bright transition-colors";

export function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-text-mid">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean }) {
  const { hasError, className, ...rest } = props;
  return (
    <input className={cn(baseInputStyles, hasError && "border-red-400/60", className)} {...rest} />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { hasError?: boolean }) {
  const { hasError, className, ...rest } = props;
  return (
    <textarea
      className={cn(baseInputStyles, "min-h-[120px] resize-y", hasError && "border-red-400/60", className)}
      {...rest}
    />
  );
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement> & { hasError?: boolean }) {
  const { hasError, className, children, ...rest } = props;
  return (
    <select className={cn(baseInputStyles, hasError && "border-red-400/60", className)} {...rest}>
      {children}
    </select>
  );
}

export function FormStatus({ status }: { status: "idle" | "success" | "error" }) {
  if (status === "success") {
    return (
      <p className="rounded-lg border border-green-primary/30 bg-green-primary/10 px-4 py-3 text-sm text-green-mid">
        Thank you — we&apos;ve received your submission and will be in touch soon.
      </p>
    );
  }
  if (status === "error") {
    return (
      <p className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
        Something went wrong. Please try again or email us directly.
      </p>
    );
  }
  return null;
}
