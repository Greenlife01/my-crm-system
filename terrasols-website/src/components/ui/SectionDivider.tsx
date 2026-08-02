export default function SectionDivider({
  fill,
  flip = false,
  variant = "wave",
}: {
  fill: string;
  flip?: boolean;
  variant?: "wave" | "diagonal";
}) {
  return (
    <div
      aria-hidden="true"
      className="relative h-16 w-full overflow-hidden sm:h-24"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      {variant === "wave" ? (
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <path
            d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,64 L1440,120 L0,120 Z"
            fill={fill}
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <path d="M0,120 L1440,0 L1440,120 Z" fill={fill} />
        </svg>
      )}
    </div>
  );
}
