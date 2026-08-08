import type { Metadata } from "next";
import { Download, CalendarDays, Newspaper } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
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
      <PageHero
        eyebrow="Media & Press"
        title="News, Events, and Press Resources"
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80"
      />

      <SectionWrapper className="relative overflow-hidden bg-soil-black py-24">
        <div className="bg-gradient-ambient-a pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-carbon-teal">
              As Featured In
            </span>
          </div>
          <div className="mt-8">
            <Marquee
              items={newsMentions.map((n) => (
                <div
                  key={n.source}
                  className="flex h-16 w-52 items-center justify-center rounded-xl border border-border-subtle bg-earth-dark px-4 text-center text-sm font-semibold text-text-secondary transition-colors hover:border-carbon-teal/40"
                >
                  {n.source}
                </div>
              ))}
            />
          </div>

          <h2 className="mt-16 font-display text-3xl font-medium text-text-primary">News Mentions</h2>
          <div className="mt-8 space-y-4">
            {newsMentions.map((n) => (
              <div
                key={n.headline}
                className="flex items-start gap-4 rounded-2xl border-l-4 border-carbon-teal bg-earth-dark p-6"
                style={{ borderTopRightRadius: 16, borderBottomRightRadius: 16 }}
              >
                <Newspaper className="mt-1 h-5 w-5 shrink-0 text-carbon-teal" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-carbon-teal">
                    {n.source}
                  </p>
                  <p className="mt-2 font-display font-semibold text-text-primary">{n.headline}</p>
                  <p className="mt-2 text-xs text-text-muted">{n.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="relative overflow-hidden bg-earth-dark py-24">
        <div className="bg-gradient-ambient-b pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium text-text-primary">Event Appearances</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pressEvents.map((e) => (
              <Card key={e.name} glass style={{ borderLeft: "4px solid #EF9F27" }}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-harvest-amber/15 border border-harvest-amber/30">
                  <CalendarDays className="h-5 w-5 text-harvest-amber" />
                </span>
                <p className="mt-3 font-display font-semibold text-text-primary">{e.name}</p>
                <p className="mt-1 text-sm text-text-muted">{e.location}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="relative overflow-hidden bg-soil-black py-24">
        <div className="bg-gradient-ambient-a pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-medium text-text-primary">Press Kit</h2>
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
            <a href={`tel:${company.phone}`} className="text-carbon-teal">
              {company.phone}
            </a>
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
