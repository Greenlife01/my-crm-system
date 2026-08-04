"use client";

import { useEffect, useRef, useState } from "react";

function parseDelta(raw: string) {
  const match = raw.match(/^([+-]?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { sign: "", value: 0, suffix: raw, decimals: 0 };
  const [, sign, num, suffix] = match;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { sign, value: parseFloat(num), suffix, decimals };
}

function StatItem({ raw, label }: { raw: string; label: string }) {
  const { sign, value, suffix, decimals } = parseDelta(raw);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(value * eased);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="rounded-xl border border-border-subtle bg-earth-dark p-4 text-center">
      <p className="font-data text-xl font-bold text-carbon-teal">
        {sign}
        {display.toFixed(decimals)}
        {suffix}
      </p>
      <p className="mt-1 text-xs text-text-muted">{label}</p>
    </div>
  );
}

export default function StoryStatBlock({
  soilPhChange,
  yieldChange,
}: {
  soilPhChange: string;
  yieldChange: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:w-64">
      <StatItem raw={soilPhChange} label="Soil pH" />
      <StatItem raw={yieldChange} label="Yield" />
    </div>
  );
}
