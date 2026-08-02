"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Counter({
  value,
  suffix = "",
  duration = 1.6,
  className,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const state = { val: 0 };
      gsap.to(state, {
        val: value,
        duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          once: true,
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = `${Math.floor(state.val).toLocaleString("en-IN")}${suffix}`;
          }
        },
      });
    },
    { scope: ref, dependencies: [value, suffix, duration] }
  );

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
