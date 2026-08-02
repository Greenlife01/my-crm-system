"use client";

import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { farmSites } from "@/lib/farms-data";

const NirmatvaMapClient = dynamic(() => import("./NirmatvaMapClient"), {
  ssr: false,
});

const hasMapboxToken = Boolean(process.env.NEXT_PUBLIC_MAPBOX_TOKEN);

function StaticFallback() {
  return (
    <div className="relative grid h-full w-full grid-cols-2 gap-2 overflow-y-auto p-4 sm:grid-cols-3">
      {farmSites.map((farm) => (
        <div
          key={farm.id}
          className="rounded-xl border border-border-subtle bg-earth-mid/60 p-3 text-xs"
        >
          <p className="flex items-center gap-1 font-medium text-carbon-teal">
            <MapPin className="h-3 w-3" /> {farm.village}
          </p>
          <p className="mt-1 text-text-muted">{farm.district}</p>
          <p className="mt-2 font-data text-text-secondary">{farm.tonnesCO2}t CO₂</p>
        </div>
      ))}
    </div>
  );
}

export default function NirmatvaMap() {
  const totalHa = farmSites.reduce((sum, f) => sum + f.hectares, 0);
  const totalT = farmSites.reduce((sum, f) => sum + f.tonnesCO2, 0);

  return (
    <SectionWrapper className="bg-soil-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-harvest-amber">
            Project Nirmatva
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-text-primary sm:text-4xl">
            Where We Work
          </h2>
          <p className="mt-4 text-text-muted">
            Basalt deployment sites across the Khandwa / Nimar belt, Madhya Pradesh — atop the Deccan
            Traps basalt formation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="order-2 h-[420px] overflow-hidden rounded-2xl border border-border-subtle bg-earth-dark lg:order-1 lg:col-span-3">
            {hasMapboxToken ? <NirmatvaMapClient /> : <StaticFallback />}
          </div>

          <div className="order-1 flex flex-col gap-4 lg:order-2">
            <div className="rounded-2xl border border-border-subtle bg-earth-dark p-5">
              <p className="font-data text-3xl font-bold text-carbon-teal">{totalT}t</p>
              <p className="text-xs text-text-muted">CO₂ removed to date</p>
            </div>
            <div className="rounded-2xl border border-border-subtle bg-earth-dark p-5">
              <p className="font-data text-3xl font-bold text-carbon-teal">{totalHa}</p>
              <p className="text-xs text-text-muted">Hectares covered</p>
            </div>
            <div className="rounded-2xl border border-border-subtle bg-earth-dark p-5">
              <Badge tone="green">Isometric EW v1.2</Badge>
              <p className="mt-2 text-xs text-text-muted">Verification status: registered &amp; active</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
