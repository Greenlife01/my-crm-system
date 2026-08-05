import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import MilestoneTimeline from "@/components/about/MilestoneTimeline";
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
    accent: "#1D9E75",
  },
  {
    title: "Why India?",
    body: "India sits atop the Deccan Traps — one of the world's largest basalt formations — directly beside hundreds of millions of smallholder farmers who stand to benefit from improved soil health and new income.",
    accent: "#EF9F27",
  },
  {
    title: "Why Now?",
    body: "With CCTS rolling out, CBAM reshaping trade, and global buyers seeking verified permanent removal, the market timing for rigorous, India-based ERW has never been better.",
    accent: "#5DCAA5",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Terrasols"
        title="We Started in a Field, Not a Boardroom."
        description="Terrasols Solutions Private Limited was founded to prove that carbon removal and farmer prosperity can be the same mission."
        image="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&q=80"
        overlay="linear-gradient(135deg, rgba(61,43,31,0.75) 0%, rgba(10,26,12,0.9) 100%)"
      />

      <SectionWrapper className="relative overflow-hidden bg-soil-black py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute select-none font-display"
          style={{
            right: "4%",
            top: "-2%",
            fontSize: 220,
            fontWeight: 700,
            color: "rgba(255,255,255,0.03)",
            lineHeight: 1,
          }}
        >
          2024
        </div>
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium text-text-primary">Our Origin Story</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-text-secondary">
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
              rigor.
            </p>
          </div>
          <div
            className="mt-8 rounded-2xl border-l-4 border-harvest-amber py-5 pl-6"
            style={{ background: "rgba(239,159,39,0.06)" }}
          >
            <p className="font-display text-xl font-medium italic text-text-primary">
              &ldquo;For Farmers, By Farmers.&rdquo;
            </p>
            <p className="mt-1 text-sm text-text-muted">
              Every design decision — from field operations to MRV — flows from this one principle.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-earth-dark py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">Milestones</h2>
          <div className="mt-14">
            <MilestoneTimeline items={timeline} />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-soil-black py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">
            Why ERW? Why India? Why Now?
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {whyCards.map((c) => (
              <Card key={c.title} className="h-full" style={{ borderLeft: `4px solid ${c.accent}` }}>
                <p className="font-display text-xl font-semibold" style={{ color: c.accent }}>
                  {c.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{c.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-earth-mid py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-medium text-text-primary">Our Principles</h2>
          <ul className="mx-auto mt-10 max-w-lg space-y-4 text-left">
            {principles.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-growth-green" />
                <span className="text-text-secondary">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
    </>
  );
}
