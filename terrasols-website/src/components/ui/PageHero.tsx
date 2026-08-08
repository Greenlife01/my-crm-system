import Badge from "@/components/ui/Badge";

export default function PageHero({
  eyebrow,
  title,
  description,
  tone = "green",
  image,
  overlay,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "green" | "amber";
  image?: string;
  overlay?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden border-b border-border-subtle py-24 ${
        tone === "amber" ? "bg-earth-dark bg-gradient-mesh-warm" : "bg-earth-dark bg-gradient-mesh-deep"
      }`}
    >
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                overlay ??
                (tone === "amber"
                  ? "linear-gradient(135deg, rgba(61,43,31,0.85) 0%, rgba(10,10,10,0.9) 100%)"
                  : "linear-gradient(135deg, rgba(10,26,12,0.85) 0%, rgba(10,10,10,0.9) 100%)"),
            }}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,158,117,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        {eyebrow && (
          <Badge tone={tone === "amber" ? "amber" : "green"} className="mb-5">
            {eyebrow}
          </Badge>
        )}
        <h1 className="font-display text-4xl font-medium leading-tight text-text-primary sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">{description}</p>}
      </div>
    </section>
  );
}
