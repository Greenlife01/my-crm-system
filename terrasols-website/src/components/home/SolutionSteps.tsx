"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mountain, Tractor, FlaskConical, Leaf } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean);

      gsap.set(cards, { opacity: 0.35, y: 24 });
      if (lineRef.current) gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top+=80",
          end: "+=55%",
          scrub: 0.6,
          pin: true,
          pinSpacing: true,
        },
      });

      if (lineRef.current) tl.to(lineRef.current, { scaleX: 1, ease: "none", duration: 1 }, 0);
      cards.forEach((card, i) => {
        tl.to(card, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, i * 0.22);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper className="bg-white py-24">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-green-mid">
            The Solution
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-text-dark sm:text-4xl">
            From Rock to Removal
          </h2>
          <p className="mt-4 text-text-mid">
            A simple, scientifically rigorous process — from rock to permanent carbon removal.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            ref={lineRef}
            className="absolute top-10 left-0 right-0 hidden h-px bg-gradient-to-r from-green-bright via-green-primary to-amber lg:block"
          />
          {steps.map((step, i) => (
            <div key={step.title} ref={(el) => { cardRefs.current[i] = el; }}>
              <Card className="relative h-full text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-primary/12 text-green-primary">
                  <step.icon className="h-7 w-7" />
                </div>
                <p className="mt-4 font-display text-lg font-semibold text-text-dark">
                  Step {i + 1}: {step.title}
                </p>
                <p className="mt-2 text-sm text-text-mid">{step.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
