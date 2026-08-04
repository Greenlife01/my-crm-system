"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedStat from "@/components/ui/AnimatedStat";

const ladder = [
  { volume: 500, label: "Current" },
  { volume: 2500, label: "Near-term" },
  { volume: 10000, label: "Scale-up" },
  { volume: 25000, label: "Expansion" },
  { volume: 50000, label: "Target" },
];

const MAX_HEIGHT = 220;
const MIN_HEIGHT = 50;

function barHeight(volume: number) {
  return MIN_HEIGHT + Math.sqrt(volume / 50000) * (MAX_HEIGHT - MIN_HEIGHT);
}

export default function SupplyPipelineChart() {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-wrap items-end justify-center gap-4 sm:gap-6">
      {ladder.map((step, i) => (
        <div key={step.label} className="flex flex-col items-center gap-2">
          <div
            className="flex w-16 items-end justify-center overflow-hidden rounded-t-lg bg-gradient-to-t from-growth-green to-carbon-teal transition-[height] duration-[900ms] ease-out sm:w-20"
            style={{
              height: revealed ? `${barHeight(step.volume)}px` : "0px",
              transitionDelay: `${i * 100}ms`,
            }}
          />
          <p className="font-data text-sm font-semibold text-text-primary">
            {revealed ? <AnimatedStat value={step.volume} suffix="t" duration={1200} /> : "0t"}
          </p>
          <p className="text-xs text-text-muted">{step.label}</p>
        </div>
      ))}
    </div>
  );
}
