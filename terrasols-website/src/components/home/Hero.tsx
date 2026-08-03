"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import HeroFallbackGradient from "@/components/home/HeroFallbackGradient";
import { useIsMobile } from "@/lib/useIsMobile";

const ParticleGlobe = dynamic(() => import("./ParticleGlobe"), { ssr: false });

const words = ["Healing", "Earth,", "One", "Farm", "at", "a", "Time."];

export default function Hero() {
  const isMobile = useIsMobile();
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!headlineRef.current) return;
      const wordEls = headlineRef.current.querySelectorAll(".hero-word");
      gsap.from(wordEls, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.15,
      });
    },
    { scope: headlineRef }
  );

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#040D06]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 120%, rgba(29,158,117,0.15) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 opacity-80">
        {isMobile ? <HeroFallbackGradient /> : <ParticleGlobe />}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#040D06]/30 to-[#040D06]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-growth-green/30 bg-growth-green/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-carbon-teal backdrop-blur-sm"
        >
          DPIIT Recognised ClimateTech Startup
        </motion.div>

        <h1
          ref={headlineRef}
          className="hero-headline font-display text-[56px] font-medium text-white sm:text-7xl lg:text-[104px]"
          style={{ letterSpacing: "-0.04em", lineHeight: 0.95 }}
        >
          {words.map((word, i) => {
            const isLast = i === words.length - 1;
            if (isLast) {
              const base = word.slice(0, -1);
              const punctuation = word.slice(-1);
              return (
                <span key={i} className="hero-word inline-block">
                  {base}
                  <span style={{ color: "#1D9E75" }}>{punctuation}</span>
                </span>
              );
            }
            return (
              <span key={i} className="hero-word mr-3 inline-block">
                {word}
              </span>
            );
          })}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl"
        >
          We spread basalt rock powder on Indian smallholder farms — at zero cost to farmers —
          and capture carbon permanently from the atmosphere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/science" variant="primary" shimmer>
            Learn How It Works
          </Button>
          <Button href="/buyers" variant="outline">
            Partner With Us
          </Button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-growth-green"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
