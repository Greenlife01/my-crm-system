import type { Metadata } from "next";
import { Award, FlaskConical, Database, Mountain } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Science",
  description:
    "The chemistry behind Enhanced Rock Weathering, why the Deccan Traps basalt is uniquely suited to it, and how Terrasols verifies every tonne removed under Isometric EW Protocol v1.2.",
};

const mechanismSteps = [
  {
    formula: "Basalt + H₂O + CO₂",
    result: "Ca²⁺ + Mg²⁺ + HCO₃⁻ (alkalinity)",
    description: "Rainwater and atmospheric CO₂ react with crushed basalt, releasing alkalinity.",
  },
  {
    formula: "Alkalinity",
    result: "Flows to rivers and ocean",
    description: "Dissolved bicarbonate moves through the watershed toward the ocean.",
  },
  {
    formula: "HCO₃⁻ + Ca²⁺/Mg²⁺",
    result: "CaCO₃ / MgCO₃ (carbonate minerals)",
    description: "CO₂ is locked in stable carbonate minerals on a ~10,000 year timescale.",
  },
];

const mrvPoints = [
  {
    icon: FlaskConical,
    title: "Primary Data Collection",
    body: "Soil, water, and crop samples are collected across every deployment site — not modelled estimates.",
  },
  {
    icon: Database,
    title: "DHARA dMRV Platform",
    body: "Our primary-data storage and monitoring platform, currently in beta, digitises every measurement.",
  },
  {
    icon: Award,
    title: "Lab Partners",
    body: "Samples are verified through laboratories at IARI-PUSA and JNU, with third-party protocol audits.",
  },
];

export default function SciencePage() {
  return (
    <>
      <PageHero
        eyebrow="The Science"
        title="The Most Rigorous Carbon Removal on Earth."
        description="Enhanced Rock Weathering, explained — from chemistry to verification."
      />

      <SectionWrapper className="bg-cream py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-dark">
            The ERW Mechanism
          </h2>
          <div className="mt-14 space-y-6">
            {mechanismSteps.map((step, i) => (
              <SectionWrapper key={step.formula} delay={i * 0.12}>
                <div className="flex flex-col items-center gap-4 rounded-2xl border border-border-subtle bg-white p-6 text-center sm:flex-row sm:text-left">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-primary/15 font-data font-bold text-green-primary">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-data text-sm text-green-mid sm:text-base">
                      {step.formula} <span className="text-text-muted">→</span> {step.result}
                    </p>
                    <p className="mt-1 text-sm text-text-muted">{step.description}</p>
                  </div>
                </div>
                {i < mechanismSteps.length - 1 && (
                  <div className="mx-auto h-8 w-px bg-gradient-to-b from-green-primary/50 to-transparent" />
                )}
              </SectionWrapper>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-amber">
                <Mountain className="h-4 w-4" /> Geology
              </span>
              <h2 className="mt-3 font-display text-3xl font-medium text-text-dark">
                Why Deccan Traps Basalt?
              </h2>
              <p className="mt-4 text-text-mid">
                The Deccan Traps is one of the largest volcanic provinces on Earth, spanning much of
                central and western India. Its basalt is rich in calcium and magnesium silicates, with
                high weathering reactivity — and it sits directly beside vast tracts of agricultural
                land, minimising transport emissions and cost.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-text-muted">
                <li>• Ca/Mg silicate-rich mineralogy</li>
                <li>• High weathering reactivity vs. granite alternatives</li>
                <li>• Abundant, geologically stable reserves</li>
                <li>• Proximity to smallholder farmland in Madhya Pradesh</li>
              </ul>
            </div>
            <div className="flex aspect-square items-center justify-center rounded-2xl border border-border-subtle bg-sage-light text-sm text-text-muted">
              Map: Deccan Traps geological formation
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-dark">
            MRV Methodology
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-text-muted">
            Registered under the Isometric EW Protocol v1.2 — the most stringent enhanced weathering
            standard globally.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {mrvPoints.map((p) => (
              <Card key={p.title}>
                <p.icon className="h-6 w-6 text-green-mid" />
                <p className="mt-4 font-display font-semibold text-text-dark">{p.title}</p>
                <p className="mt-2 text-sm text-text-muted">{p.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-amber/5 py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-amber/30 bg-white px-6 py-10 text-center lg:px-8">
          <Award className="mx-auto h-8 w-8 text-amber" />
          <p className="mt-4 font-display text-xl font-semibold text-text-dark">
            Joint Patent in Progress
          </p>
          <p className="mt-3 text-text-mid">
            With <strong className="text-amber">ICAR-IARI Pusa</strong> on basalt rock fines
            valorisation for agricultural carbon removal.
          </p>
          <p className="mt-4 text-sm text-text-muted">
            Inventors: Dr. Bhupinder Singh, Dr. Chandan Kumar Gupta, Manish Kumar, Vaibhav Tiwari
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
