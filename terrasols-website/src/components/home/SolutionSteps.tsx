"use client";

import { useRef } from "react";
import { Mountain, Tractor, FlaskConical, Leaf } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Step = {
  icon: typeof Mountain;
  title: string;
  description: string;
  image: string;
  overlay: string;
  watermark: string;
  watermarkColor: string;
  tag?: { text: string; color: string };
  pill?: { text: string; background: string; border: string; color: string; mono: boolean };
};

const steps: Step[] = [
  {
    icon: Mountain,
    title: "Basalt",
    description: "Volcanic basalt rock from the Deccan Traps",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    overlay: "linear-gradient(135deg, rgba(30,20,10,0.75) 0%, rgba(10,10,10,0.85) 100%)",
    watermark: "01",
    watermarkColor: "rgba(255,255,255,0.06)",
    tag: { text: "Deccan Traps • Madhya Pradesh", color: "#9FE1CB" },
  },
  {
    icon: Tractor,
    title: "Spread",
    description: "We crush & spread it on your farmland",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    overlay: "linear-gradient(135deg, rgba(42,21,0,0.7) 0%, rgba(20,10,0,0.88) 100%)",
    watermark: "02",
    watermarkColor: "rgba(239,159,39,0.08)",
    tag: { text: "Zero cost to farmers • Every season", color: "#EF9F27" },
  },
  {
    icon: FlaskConical,
    title: "React",
    description: "Reacts with soil water & CO₂",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80",
    overlay: "linear-gradient(135deg, rgba(4,40,40,0.72) 0%, rgba(4,20,20,0.88) 100%)",
    watermark: "03",
    watermarkColor: "rgba(93,202,165,0.07)",
    pill: {
      text: "Ca²⁺ + Mg²⁺ + HCO₃⁻",
      background: "rgba(93,202,165,0.12)",
      border: "1px solid rgba(93,202,165,0.3)",
      color: "#5DCAA5",
      mono: true,
    },
  },
  {
    icon: Leaf,
    title: "Capture",
    description: "CO₂ locked away permanently",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80",
    overlay: "linear-gradient(135deg, rgba(4,13,6,0.65) 0%, rgba(2,8,4,0.88) 100%)",
    watermark: "04",
    watermarkColor: "rgba(29,158,117,0.07)",
    pill: {
      text: "~10,000 year permanence",
      background: "rgba(29,158,117,0.15)",
      border: "1px solid rgba(29,158,117,0.4)",
      color: "#1D9E75",
      mono: false,
    },
  },
];

export default function SolutionSteps() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        steps.forEach((_, i) => {
          if (i === 0) return;
          const card = cardRefs.current[i];
          if (!card) return;
          gsap.set(card, { yPercent: 100 });
          gsap.to(card, {
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: () => `top+=${(i - 1) * window.innerHeight} top`,
              end: () => `top+=${i * window.innerHeight} top`,
              scrub: true,
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-earth-mid"
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="pointer-events-none absolute top-10 left-0 right-0 z-20 text-center">
          <h2 className="font-display text-3xl font-medium text-text-primary sm:text-4xl">
            Our Solution
          </h2>
          <p className="mt-3 text-text-muted">From rock to permanent carbon removal.</p>
        </div>

        {steps.map((step, i) => (
          <div
            key={step.title}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="group absolute inset-0 flex items-center justify-center overflow-hidden px-6"
            style={{
              zIndex: i,
              backgroundColor: "#0a0a0a",
              borderTop: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.4)",
              borderRadius: 20,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={step.image}
              alt=""
              className="transition-[filter] duration-[400ms] ease-in-out group-hover:brightness-110"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0,
              }}
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: step.overlay, zIndex: 1 }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute select-none font-display"
              style={{
                bottom: 20,
                right: 24,
                fontSize: 120,
                fontWeight: 700,
                color: step.watermarkColor,
                zIndex: 2,
                lineHeight: 1,
              }}
            >
              {step.watermark}
            </div>

            <div className="relative mx-auto flex max-w-lg flex-col items-center text-center" style={{ zIndex: 2 }}>
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-carbon-teal backdrop-blur-sm">
                <step.icon className="h-10 w-10" />
              </div>
              <p className="mt-6 font-display text-sm font-semibold uppercase tracking-widest text-carbon-teal">
                Step {i + 1}
              </p>
              {step.tag && (
                <p className="mt-2" style={{ fontSize: 11, color: step.tag.color, letterSpacing: "0.1em" }}>
                  {step.tag.text}
                </p>
              )}
              <p className="mt-2 font-display text-4xl font-medium text-white sm:text-5xl">
                {step.title}
              </p>
              <p className="mt-4 text-lg text-white/70">{step.description}</p>
              {step.pill && (
                <span
                  className="mt-4 inline-block"
                  style={{
                    background: step.pill.background,
                    border: step.pill.border,
                    borderRadius: 20,
                    padding: "4px 12px",
                    fontSize: 12,
                    color: step.pill.color,
                    fontFamily: step.pill.mono ? "monospace" : undefined,
                  }}
                >
                  {step.pill.text}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
