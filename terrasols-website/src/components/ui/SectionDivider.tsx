"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionDivider({
  fill,
  flip = false,
  variant = "wave",
  animated = false,
}: {
  fill: string;
  flip?: boolean;
  variant?: "wave" | "diagonal";
  animated?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!animated) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative h-16 w-full overflow-hidden sm:h-24"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      {variant === "wave" ? (
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className={`absolute inset-0 h-full w-full ${
            animated ? `divider-draw ${revealed ? "divider-draw--in" : ""}` : ""
          }`}
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
          className={`absolute inset-0 h-full w-full ${
            animated ? `divider-draw ${revealed ? "divider-draw--in" : ""}` : ""
          }`}
        >
          <path d="M0,120 L1440,0 L1440,120 Z" fill={fill} />
        </svg>
      )}
    </div>
  );
}
