import type { Metadata } from "next";
import { ShieldCheck, Sprout, FileCheck2, Award, BadgeCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import BuyerEnquiryForm from "@/components/forms/BuyerEnquiryForm";
import SupplyPipelineChart from "@/components/buyers/SupplyPipelineChart";

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
    accent: "#1D9E75",
  },
  {
    icon: Award,
    title: "Additionality Guaranteed",
    body: "Basalt would not weather at this rate naturally — the intervention is the additionality.",
    accent: "#5DCAA5",
  },
  {
    icon: Sprout,
    title: "Co-Benefits",
    body: "Soil health, farmer income, and rural employment alongside verified carbon removal.",
    accent: "#EF9F27",
  },
  {
    icon: FileCheck2,
    title: "Compliance-Ready",
    body: "Suitable for CBAM, CCTS, VCMI, and SBTi-aligned claims.",
    accent: "#1D9E75",
  },
];

export default function BuyersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Buyers"
        title="Permanent Carbon Removal. Verified. Scalable."
        description="India's most rigorously verified Enhanced Rock Weathering supply — built for compliance and voluntary markets alike."
        image="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1600&q=80"
      />

      <SectionWrapper className="relative overflow-hidden bg-soil-black py-24">
        <div className="bg-gradient-ambient-a pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">
            Why ERW Credits?
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <Card key={r.title} glass className="h-full" style={{ borderLeft: `4px solid ${r.accent}` }}>
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ background: `${r.accent}26`, border: `1px solid ${r.accent}4D` }}
                >
                  <r.icon className="h-5 w-5" style={{ color: r.accent }} />
                </span>
                <p className="mt-4 font-display font-semibold text-text-primary">{r.title}</p>
                <p className="mt-2 text-sm text-text-muted">{r.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="relative overflow-hidden bg-earth-dark py-24">
        <div className="bg-gradient-ambient-b pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">
            Our Supply Pipeline
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-text-muted">
            Scaling from our first commercial deployment to 50,000 tonnes of annual removal capacity.
          </p>
          <div className="mt-14">
            <SupplyPipelineChart />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="noise-overlay relative bg-soil-black py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(93,202,165,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <div
            className="rounded-2xl border px-6 py-10 text-center sm:px-10"
            style={{ borderColor: "rgba(93,202,165,0.3)", background: "rgba(255,255,255,0.03)" }}
          >
            <BadgeCheck className="mx-auto h-8 w-8 text-carbon-teal" />
            <Badge tone="green" className="mx-auto mt-5 mb-5">
              Verification
            </Badge>
            <h2 className="font-display text-3xl font-medium text-text-primary">Isometric EW v1.2</h2>
            <p className="mt-4 text-text-secondary">
              Every tonne is registered and verified under the Isometric Enhanced Weathering Protocol
              v1.2 — requiring primary data collection, conservative uncertainty deductions, and
              third-party laboratory verification. For buyers, this means a claim that stands up to
              scrutiny from auditors, regulators, and the scientific community alike.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="relative overflow-hidden bg-earth-dark py-24">
        <div className="bg-gradient-ambient-a pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-2xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">
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
