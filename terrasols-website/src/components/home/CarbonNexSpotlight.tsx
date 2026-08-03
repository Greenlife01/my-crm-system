"use client";

import dynamic from "next/dynamic";
import { Cpu } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const ConstellationField = dynamic(() => import("./ConstellationField"), { ssr: false });

export default function CarbonNexSpotlight() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-[#020814] py-24">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <ConstellationField />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-blue-300">
          <Cpu className="h-3.5 w-3.5" /> Our Technology Platform
        </span>
        <h2 className="mt-5 font-display text-3xl font-medium text-text-primary sm:text-4xl">
          Meet CarbonNex
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-text-muted">
          Carbon accounting, BRSR compliance, CBAM reporting, and GHG Protocol tools — built for Indian
          and global enterprises.
        </p>
        <div className="mt-8">
          <Button
            href="https://carbon-nex.com"
            target="_blank"
            rel="noopener noreferrer"
            className="!bg-blue-500 !text-white hover:!bg-blue-400"
          >
            Visit CarbonNex
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
