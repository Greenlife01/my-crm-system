"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function MilestoneTimeline({
  items,
}: {
  items: { date: string; title: string; detail: string }[];
}) {
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative mx-auto max-w-2xl">
      <div className={cn("timeline-line", revealed && "timeline-line--draw")} aria-hidden />
      <div className="flex flex-col">
        {items.map((item, i) => (
          <div
            key={item.date}
            className={cn("timeline-item relative flex gap-6 pb-10 last:pb-0", revealed && "timeline-item--in")}
            style={{ transitionDelay: `${150 + i * 140}ms` }}
          >
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-growth-green bg-soil-black">
              <span className="h-2.5 w-2.5 rounded-full bg-growth-green" />
            </div>
            <div className="flex-1 rounded-2xl border border-border-subtle bg-earth-mid p-5">
              <p className="font-data text-xs font-semibold uppercase tracking-wide text-carbon-teal">
                {item.date}
              </p>
              <p className="mt-2 font-display font-semibold text-text-primary">{item.title}</p>
              <p className="mt-2 text-sm text-text-muted">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
