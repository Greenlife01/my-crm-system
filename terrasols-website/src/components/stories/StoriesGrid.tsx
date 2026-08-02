"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { farmerStories } from "@/lib/farmer-stories";

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
          <Link
            key={story.slug}
            href={`/stories/${story.slug}`}
            className="group overflow-hidden rounded-2xl border border-border-subtle bg-earth-dark transition-colors hover:border-carbon-teal/40"
          >
            <div className="relative flex aspect-video items-center justify-center bg-earth-mid">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-growth-green/90 text-soil-black transition-transform group-hover:scale-110">
                <Play className="h-5 w-5 fill-current" />
              </div>
            </div>
            <div className="p-5">
              <p className="font-display font-semibold text-text-primary">{story.name}</p>
              <p className="mt-1 text-xs text-text-muted">
                {story.village}, {story.district} &middot; {story.cropType}
              </p>
              <p className="mt-3 font-data text-sm text-carbon-teal">{story.yieldChange}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
