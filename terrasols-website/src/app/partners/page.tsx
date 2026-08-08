import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { partners } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Partners",
  description: "Terrasols' institutional partners — incubators, accelerators, and CSR programmes backing our science and field programme.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero eyebrow="Partners" title="Institutions That Back Our Work" />

      <SectionWrapper className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {partners.map((partner) => (
              <div key={partner.name} className="rounded-2xl border border-border-subtle bg-white p-6">
                <p className="font-display text-lg font-semibold text-text-dark">{partner.name}</p>
                <p className="mt-2 text-sm text-text-muted">{partner.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
