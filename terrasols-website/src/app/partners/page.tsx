import type { Metadata } from "next";
import { Rocket, Lightbulb, HeartHandshake, FlaskConical } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import CarbonNexSpotlight from "@/components/home/CarbonNexSpotlight";
import { partners } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Partners",
  description: "Terrasols' institutional partners — incubators, accelerators, and CSR programmes backing our science and field programme.",
};

// Display-only metadata per partner (type/icon/accent), indexed to `partners` — content stays in site-data.ts.
const partnerMeta = [
  { type: "Incubator", icon: Rocket, accent: "#1D9E75" },
  { type: "Incubator", icon: Rocket, accent: "#1D9E75" },
  { type: "Advisory", icon: Lightbulb, accent: "#5DCAA5" },
  { type: "Incubator", icon: Rocket, accent: "#1D9E75" },
  { type: "CSR Partner", icon: HeartHandshake, accent: "#EF9F27" },
  { type: "R&D Partner", icon: FlaskConical, accent: "#5DCAA5" },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Institutions That Back Our Work"
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80"
      />

      <SectionWrapper className="bg-soil-black py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {partners.map((partner, i) => {
              const meta = partnerMeta[i];
              return (
                <Card key={partner.name} className="h-full" style={{ borderLeft: `4px solid ${meta.accent}` }}>
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                      style={{ background: `${meta.accent}26`, border: `1px solid ${meta.accent}4D` }}
                    >
                      <meta.icon className="h-5 w-5" style={{ color: meta.accent }} />
                    </span>
                    <div>
                      <span
                        className="text-[10px] font-semibold uppercase tracking-wide"
                        style={{ color: meta.accent }}
                      >
                        {meta.type}
                      </span>
                      <p className="mt-1 font-display text-lg font-semibold text-text-primary">
                        {partner.name}
                      </p>
                      <p className="mt-2 text-sm text-text-muted">{partner.detail}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <CarbonNexSpotlight />
    </>
  );
}
