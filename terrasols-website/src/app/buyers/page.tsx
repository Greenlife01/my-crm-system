import type { Metadata } from "next";
import { ShieldCheck, Sprout, FileCheck2, Award } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import BuyerEnquiryForm from "@/components/forms/BuyerEnquiryForm";

export const metadata: Metadata = {
  title: "For Buyers",
  description:
    "Permanent, Isometric-verified Enhanced Rock Weathering carbon removal from Terrasols — scalable from 500 to 50,000 tonnes annually.",
};

const reasons = [
  {
    icon: ShieldCheck,
    title: "Permanent Removal",
    body: "Not avoidance or nature-based impermanence — CO₂ locked in stable minerals for ~10,000 years.",
  },
  {
    icon: Award,
    title: "Additionality Guaranteed",
    body: "Basalt would not weather at this rate naturally — the intervention is the additionality.",
  },
  {
    icon: Sprout,
    title: "Co-Benefits",
    body: "Soil health, farmer income, and rural employment alongside verified carbon removal.",
  },
  {
    icon: FileCheck2,
    title: "Compliance-Ready",
    body: "Suitable for CBAM, CCTS, VCMI, and SBTi-aligned claims.",
  },
];

const ladder = [
  { volume: "500t", label: "Current" },
  { volume: "2,500t", label: "Near-term" },
  { volume: "10,000t", label: "Scale-up" },
  { volume: "25,000t", label: "Expansion" },
  { volume: "50,000t", label: "Target" },
];

export default function BuyersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Buyers"
        title="Permanent Carbon Removal. Verified. Scalable."
        description="India's most rigorously verified Enhanced Rock Weathering supply — built for compliance and voluntary markets alike."
      />

      <SectionWrapper className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-dark">
            Why ERW Credits?
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <Card key={r.title}>
                <r.icon className="h-6 w-6 text-green-mid" />
                <p className="mt-4 font-display font-semibold text-text-dark">{r.title}</p>
                <p className="mt-2 text-sm text-text-muted">{r.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-dark">
            Our Supply Pipeline
          </h2>
          <div className="mt-14 flex flex-wrap items-end justify-center gap-4 sm:gap-6">
            {ladder.map((step, i) => (
              <div key={step.volume} className="flex flex-col items-center gap-2">
                <div
                  className="flex w-16 items-end justify-center rounded-t-lg bg-gradient-to-t from-green-primary to-green-bright sm:w-20"
                  style={{ height: `${60 + i * 30}px` }}
                />
                <p className="font-data text-sm font-semibold text-text-dark">{step.volume}</p>
                <p className="text-xs text-text-muted">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-cream py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Badge tone="green" className="mb-5">
            Verification
          </Badge>
          <h2 className="font-display text-3xl font-medium text-text-dark">Isometric EW v1.2</h2>
          <p className="mt-4 text-text-muted">
            Every tonne is registered and verified under the Isometric Enhanced Weathering Protocol
            v1.2 — requiring primary data collection, conservative uncertainty deductions, and
            third-party laboratory verification. For buyers, this means a claim that stands up to
            scrutiny from auditors, regulators, and the scientific community alike.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-dark">
            Request an Offtake Discussion
          </h2>
          <div className="mt-10">
            <BuyerEnquiryForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
