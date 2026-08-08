import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import { timeline } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "How Manish Kumar and Vaibhav Tiwari co-founded Terrasols in July 2024 to bring Enhanced Rock Weathering to Indian smallholder farms.",
};

const principles = [
  "For Farmers, By Farmers",
  "Science-first, verifiable always",
  "Decentralised and locally rooted",
  "Benefit-sharing and CBD-aligned",
  "Zero-cost to the farmer, always",
];

const whyCards = [
  {
    title: "Why ERW?",
    body: "Enhanced Rock Weathering is one of the few carbon removal pathways that is permanent, measurable, and co-beneficial to agriculture — locking away CO₂ for millennia while improving the soil it's applied to.",
  },
  {
    title: "Why India?",
    body: "India sits atop the Deccan Traps — one of the world's largest basalt formations — directly beside hundreds of millions of smallholder farmers who stand to benefit from improved soil health and new income.",
  },
  {
    title: "Why Now?",
    body: "With CCTS rolling out, CBAM reshaping trade, and global buyers seeking verified permanent removal, the market timing for rigorous, India-based ERW has never been better.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Terrasols"
        title="We Started in a Field, Not a Boardroom."
        description="Terrasols Solutions Private Limited was founded to prove that carbon removal and farmer prosperity can be the same mission."
      />

      <SectionWrapper className="bg-cream py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium text-text-dark">Our Origin Story</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-text-mid">
            <p>
              In July 2024, Co-Founders Manish Kumar and Vaibhav Tiwari incorporated Terrasols Solutions
              Private Limited in Uttar Pradesh, India, with a simple but stubborn insight: India spends
              between ₹1.7 and 2 lakh crore every year on fertiliser subsidies, is 100% dependent on
              imported potash, and sits atop one of the largest basalt deposits on Earth — the Deccan
              Traps.
            </p>
            <p>
              That basalt, crushed and spread on farmland, does two things at once. It supplies
              potassium, calcium, and magnesium to depleted soils, and — through Enhanced Rock Weathering
              — it draws down atmospheric CO₂ permanently as the rock reacts with rainwater and carbon
              dioxide.
            </p>
            <p>
              Terrasols was built to deploy this at scale, at zero cost to farmers, recovering costs
              through the verified sale of carbon removal credits to buyers who demand permanence and
              rigor. Every design decision — from field operations to MRV — flows from one principle:
              <strong className="text-text-dark"> &ldquo;For Farmers, By Farmers.&rdquo;</strong>
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-dark">Milestones</h2>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {timeline.map((item, i) => (
              <SectionWrapper key={item.date} delay={i * 0.08}>
                <div className="relative rounded-2xl border border-border-subtle bg-sage-light p-5">
                  <p className="font-data text-xs font-semibold uppercase tracking-wide text-green-mid">
                    {item.date}
                  </p>
                  <p className="mt-2 font-display font-semibold text-text-dark">{item.title}</p>
                  <p className="mt-2 text-sm text-text-muted">{item.detail}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-dark">
            Why ERW? Why India? Why Now?
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {whyCards.map((c) => (
              <Card key={c.title}>
                <p className="font-display text-xl font-semibold text-text-dark">{c.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{c.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-sage-light py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-medium text-text-dark">Our Principles</h2>
          <ul className="mx-auto mt-10 max-w-lg space-y-4 text-left">
            {principles.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-primary" />
                <span className="text-text-mid">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
    </>
  );
}
