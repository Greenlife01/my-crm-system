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
          <ul className="mt-8 space-y-3">
            {traction.map((t) => (
              <li key={t} className="benefit-card flex items-center gap-3.5">
                <span
                  className="flex shrink-0 items-center justify-center rounded-full"
                  style={{
                    width: 36,
                    height: 36,
                    background: "rgba(29,158,117,0.15)",
                    border: "1px solid rgba(29,158,117,0.3)",
                  }}
                >
                  <CheckCircle2 className="h-4 w-4 text-growth-green" />
                </span>
                <span className="text-text-secondary">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper className="noise-overlay relative bg-earth-dark py-24">
        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium text-text-primary">Why Now?</h2>
          <p className="mt-5 leading-relaxed text-text-secondary">
            India&apos;s carbon market infrastructure is maturing quickly — the{" "}
            <span
              className="rounded-full px-2 py-0.5 text-sm font-medium"
              style={{ background: "rgba(29,158,117,0.15)", color: "#5DCAA5" }}
            >
              Carbon Credit Trading Scheme (CCTS)
            </span>{" "}
            is rolling out domestically, while the EU&apos;s{" "}
            <span
              className="rounded-full px-2 py-0.5 text-sm font-medium"
              style={{ background: "rgba(239,159,39,0.15)", color: "#EF9F27" }}
            >
              CBAM
            </span>{" "}
            is reshaping export economics for Indian manufacturers. Together, these forces are driving
            unprecedented demand for verified, permanent carbon removal — precisely the category
            Terrasols operates in, with a defensible science and MRV moat.
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
