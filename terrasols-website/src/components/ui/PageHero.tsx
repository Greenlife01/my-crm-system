import Badge from "@/components/ui/Badge";

export default function PageHero({
  eyebrow,
  title,
  description,
  tone = "green",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "green" | "amber";
}) {
  return (
    <section
      className={`relative overflow-hidden border-b border-border-subtle py-24 ${
        tone === "amber"
          ? "bg-[linear-gradient(135deg,rgba(239,159,39,0.12),var(--cream)_65%)]"
          : "bg-sage-light"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,158,117,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        {eyebrow && (
          <Badge tone={tone === "amber" ? "amber" : "green"} className="mb-5">
            {eyebrow}
          </Badge>
        )}
        <h1 className="font-display text-4xl font-medium leading-tight text-text-dark sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && <p className="mx-auto mt-6 max-w-2xl text-lg text-text-mid">{description}</p>}
      </div>
    </section>
  );
}
