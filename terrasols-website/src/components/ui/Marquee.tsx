"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Marquee({
  items,
  speed = 40,
}: {
  items: React.ReactNode[];
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      if (!trackRef.current) return;
      const width = trackRef.current.scrollWidth / 2;
      tweenRef.current = gsap.to(trackRef.current, {
        x: -width,
        duration: width / speed,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: trackRef, dependencies: [items.length, speed] }
  );

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => tweenRef.current?.pause()}
      onMouseLeave={() => tweenRef.current?.resume()}
    >
      <div ref={trackRef} className="flex w-max gap-4">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
