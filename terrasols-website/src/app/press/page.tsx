import type { Metadata } from "next";
import { Download, CalendarDays } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { pressEvents, company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Media & Press",
  description: "News mentions, event appearances, and press resources for Terrasols Solutions Private Limited.",
};

const newsMentions = [
  { source: "ClimateTech India", headline: "Terrasols registers Project Nirmatva under Isometric EW v1.2", date: "2025-06" },
  { source: "AgriBusiness Weekly", headline: "How basalt rock is reshaping farmer income in Madhya Pradesh", date: "2025-08" },
  { source: "Carbon Markets Daily", headline: "India's ERW sector gains momentum with Terrasols' first commercial revenue", date: "2025-05" },
];

export default function PressPage() {
  return (
    <>
      <PageHero eyebrow="Media & Press" title="News, Events, and Press Resources" />

      <SectionWrapper className="bg-cream py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium text-text-dark">News Mentions</h2>
          <div className="mt-8 space-y-4">
            {newsMentions.map((n) => (
              <div key={n.headline} className="rounded-2xl border border-border-subtle bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-green-mid">{n.source}</p>
                <p className="mt-2 font-display font-semibold text-text-dark">{n.headline}</p>
                <p className="mt-2 text-xs text-text-muted">{n.date}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium text-text-dark">Event Appearances</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pressEvents.map((e) => (
              <Card key={e.name}>
                <CalendarDays className="h-5 w-5 text-green-mid" />
                <p className="mt-3 font-display font-semibold text-text-dark">{e.name}</p>
                <p className="mt-1 text-sm text-text-muted">{e.location}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-cream py-24">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-medium text-text-dark">Press Kit</h2>
          <p className="mt-4 text-text-muted">Logos, founder bios, and key facts — in one download.</p>
          <div className="mt-8 flex justify-center">
            <Button href="/press-kit.pdf" variant="outline">
              <span className="flex items-center gap-2">
                <Download className="h-4 w-4" /> Download Press Kit
              </span>
            </Button>
          </div>
          <p className="mt-6 text-sm text-text-muted">
            Press contact:{" "}
            <a href={`mailto:${company.emailPrimary}`} className="text-green-mid">
              {company.emailPrimary}
            </a>
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
