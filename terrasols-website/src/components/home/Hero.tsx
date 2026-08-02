"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

const words = ["Healing", "Earth,", "One", "Farm", "at", "a", "Time."];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-soil-black">
      <div className="absolute inset-0 opacity-70">
        <ParticleField />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-soil-black/40 to-soil-black" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-growth-green/30 bg-growth-green/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-carbon-teal"
        >
          DPIIT Recognised ClimateTech Startup
        </motion.div>

        <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-text-primary sm:text-6xl lg:text-8xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: "easeOut" }}
              className="mr-3 inline-block text-gradient last:mr-0"
            >
              {word}
            </motion.span>
          ))}
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
          <Button href="/science" variant="primary">
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
