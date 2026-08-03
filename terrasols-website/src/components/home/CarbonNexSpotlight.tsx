"use client";

import dynamic from "next/dynamic";
import { Cpu } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const ConstellationField = dynamic(() => import("./ConstellationField"), { ssr: false });

export default function CarbonNexSpotlight() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-blue-white py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <ConstellationField color="#185FA5" opacity={0.35} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(24,95,165,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#185FA5]/30 bg-[#185FA5]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-carbonnex-blue-dark">
          <Cpu className="h-3.5 w-3.5" /> Our Technology Platform
        </span>
        <h2 className="mt-5 font-display text-3xl font-medium text-carbonnex-blue-dark sm:text-4xl">
          Meet CarbonNex
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-forest">
          Carbon accounting, BRSR compliance, CBAM reporting, and GHG Protocol tools — built for Indian
          and global enterprises.
        </p>
        <div className="mt-8">
          <Button
            href="https://carbon-nex.com"
            target="_blank"
            rel="noopener noreferrer"
            className="!bg-carbonnex-blue-btn !text-white hover:!brightness-110"
          >
            Visit CarbonNex
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
