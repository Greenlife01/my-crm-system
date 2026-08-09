import { Cpu } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export default function CarbonNexSpotlight() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-blue-sky py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(43,108,176,0.14),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-mid/25 bg-blue-mid/8 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-blue-mid">
          <Cpu className="h-3.5 w-3.5" /> Our Technology Platform
        </span>
        <h2 className="mt-5 font-display text-3xl font-medium text-text-dark sm:text-4xl">
          Meet CarbonNex
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-text-mid">
          Carbon accounting, BRSR compliance, CBAM reporting, and GHG Protocol tools — built for Indian
          and global enterprises.
        </p>
        <div className="mt-8">
          <Button
            href="https://carbon-nex.com"
            target="_blank"
            rel="noopener noreferrer"
            className="!bg-blue-mid !text-white hover:!bg-blue-accent"
          >
            Visit CarbonNex
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
