"use client";

import { useRef } from "react";
import { Mountain, Tractor, FlaskConical, Leaf } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    icon: Mountain,
    title: "Basalt",
    description: "Volcanic basalt rock from the Deccan Traps",
  },
  {
    icon: Tractor,
    title: "Spread",
    description: "We crush & spread it on your farmland",
  },
  {
    icon: FlaskConical,
    title: "React",
    description: "Reacts with soil water & CO₂",
  },
  {
    icon: Leaf,
    title: "Capture",
    description: "CO₂ locked away permanently",
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
      className="relative bg-white"
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="pointer-events-none absolute top-10 left-0 right-0 z-20 text-center">
          <h2 className="font-display text-3xl font-medium text-soil-black sm:text-4xl">
            Our Solution
          </h2>
          <p className="mt-3 text-muted-forest">From rock to permanent carbon removal.</p>
        </div>

        {steps.map((step, i) => (
          <div
            key={step.title}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="absolute inset-0 flex items-center justify-center border-l-4 border-[#1D9E75] bg-cream px-6"
            style={{ zIndex: i }}
          >
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1D9E75]/10 text-[#1D9E75]">
                <step.icon className="h-10 w-10" />
              </div>
              <p className="mt-6 font-display text-sm font-semibold uppercase tracking-widest text-[#1D9E75]">
                Step {i + 1}
              </p>
              <p className="mt-2 font-display text-4xl font-medium text-soil-black sm:text-5xl">
                {step.title}
              </p>
              <p className="mt-4 text-lg text-muted-forest">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
