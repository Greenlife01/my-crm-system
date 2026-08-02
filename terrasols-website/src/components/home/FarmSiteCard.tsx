"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import type { FarmSite } from "@/lib/farms-data";

export default function FarmSiteCard({ farm }: { farm: FarmSite }) {
  const [hovered, setHovered] = useState(false);
  const bumpedTonnes = Math.round(farm.tonnesCO2 * 1.08);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-xl border border-border-subtle bg-earth-mid/60 p-3 text-xs transition-transform duration-300 ease-out hover:scale-105"
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(160deg, rgba(29,158,117,0.35), rgba(61,43,31,0.55) 70%)",
        }}
      />
      <div className="relative z-10">
        <p className="flex items-center gap-1 font-medium text-carbon-teal">
          <MapPin className="h-3 w-3" /> {farm.village}
        </p>
        <p className="mt-1 text-text-muted">{farm.district}</p>
        <p className="mt-2 font-data text-text-secondary transition-colors group-hover:text-white">
          {hovered ? bumpedTonnes : farm.tonnesCO2}t CO₂
        </p>
      </div>
    </div>
  );
}
