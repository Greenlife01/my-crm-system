import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import InvestorDeckForm from "@/components/forms/InvestorDeckForm";

export const metadata: Metadata = {
  title: "For Investors",
  description: "Traction and market timing for Terrasols' pre-seed SAFE round — currently open.",
};

const traction = [
  "First commercial revenue: May 2025",
  "DPIIT Recognised startup",
  "Isometric EW v1.2 registered",
  "Multiple signed LOIs with international buyers",
  "AIC/IIM/HDFC Parivartan backed",
  "Joint patent in progress with ICAR-IARI Pusa",
  "Pre-seed SAFE round currently open",
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Investors"
        title="Backing India&apos;s Enhanced Rock Weathering Infrastructure"
      />

      <SectionWrapper className="bg-soil-black py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium text-text-primary">Traction</h2>
          <ul className="mt-8 space-y-4">
            {traction.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-growth-green" />
                <span className="text-text-secondary">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-earth-dark py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium text-text-primary">Why Now?</h2>
          <p className="mt-5 text-text-secondary leading-relaxed">
            India&apos;s carbon market infrastructure is maturing quickly — the Carbon Credit Trading
            Scheme (CCTS) is rolling out domestically, while the EU&apos;s CBAM is reshaping export
            economics for
            Indian manufacturers. Together, these forces are driving unprecedented demand for verified,
            permanent carbon removal — precisely the category Terrasols operates in, with a defensible
            science and MRV moat.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-soil-black py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">
            Request Investor Deck
          </h2>
          <div className="mt-10">
            <InvestorDeckForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
