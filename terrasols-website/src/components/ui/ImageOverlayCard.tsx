import { cn } from "@/lib/utils";

export default function ImageOverlayCard({
  image,
  overlay,
  watermark,
  watermarkColor = "rgba(255,255,255,0.06)",
  className,
  style,
  children,
}: {
  image: string;
  overlay: string;
  watermark?: string;
  watermarkColor?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("group relative overflow-hidden", className)} style={style}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        className="transition-[filter] duration-[400ms] ease-in-out group-hover:brightness-110"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div className="pointer-events-none absolute inset-0" style={{ background: overlay }} />
      {watermark && (
        <div
          aria-hidden
          className="pointer-events-none absolute select-none font-display"
          style={{
            right: 16,
            bottom: 8,
            fontSize: 120,
            fontWeight: 700,
            color: watermarkColor,
            lineHeight: 1,
          }}
        >
          {watermark}
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
