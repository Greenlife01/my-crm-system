"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { farmerStories } from "@/lib/farmer-stories";
import FarmerStoryCard from "@/components/ui/FarmerStoryCard";

export default function StoriesGrid() {
  const states = useMemo(() => ["all", ...new Set(farmerStories.map((s) => s.state))], []);
  const crops = useMemo(() => ["all", ...new Set(farmerStories.map((s) => s.cropType))], []);
  const [state, setState] = useState("all");
  const [crop, setCrop] = useState("all");

  const filtered = farmerStories.filter(
    (s) => (state === "all" || s.state === state) && (crop === "all" || s.cropType === crop)
  );

  return (
    <div>
      <div className="flex flex-wrap gap-6">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-muted">State</p>
          <div className="flex flex-wrap gap-2">
            {states.map((s) => (
              <button
                key={s}
                onClick={() => setState(s)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium",
                  state === s ? "border-growth-green bg-growth-green/15 text-carbon-teal" : "border-border-subtle text-text-muted"
                )}
              >
                {s === "all" ? "All States" : s}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-muted">Crop</p>
          <div className="flex flex-wrap gap-2">
            {crops.map((c) => (
              <button
                key={c}
                onClick={() => setCrop(c)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium",
                  crop === c ? "border-growth-green bg-growth-green/15 text-carbon-teal" : "border-border-subtle text-text-muted"
                )}
              >
                {c === "all" ? "All Crops" : c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((story) => (
          <Link key={story.slug} href={`/stories/${story.slug}`} className="group block">
            <FarmerStoryCard
              story={story}
              className="transition-colors group-hover:border-carbon-teal/40"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
