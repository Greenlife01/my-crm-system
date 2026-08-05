"use client";

import { useEffect, useRef, useState } from "react";
import { impactStats } from "@/lib/site-data";
import AnimatedStat from "@/components/ui/AnimatedStat";

export default function ImpactCounters() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineInView, setLineInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLineInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 z-[1] py-24"
      style={{ background: "#F5F2EC", borderTop: "3px solid #1D9E75" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(29,158,117,0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className={`stats-top-line ${lineInView ? "stats-top-line--draw" : ""}`} />

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
        {impactStats.map((stat) => (
          <div key={stat.label} className="text-center">
            <span
              className="font-data block text-[40px] font-bold sm:text-[56px] lg:text-[72px]"
              style={{ color: "#0A1A0C" }}
            >
              <AnimatedStat value={stat.value} suffix={stat.suffix} />
            </span>
            <p
              className="mt-2 text-xs font-medium uppercase tracking-wide sm:text-sm"
              style={{ color: "#3D5247" }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
