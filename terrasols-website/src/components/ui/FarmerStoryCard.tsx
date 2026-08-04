"use client";

import { Play, User } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FarmerStory } from "@/lib/farmer-stories";

export default function FarmerStoryCard({
  story,
  onPlay,
  className,
}: {
  story: FarmerStory;
  onPlay?: () => void;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl border border-border-subtle bg-earth-dark p-6", className)}>
      <button
        onClick={onPlay}
        disabled={!onPlay}
        className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-soil-black disabled:cursor-default"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-growth-green/90 text-soil-black transition-transform group-hover:scale-110">
          <Play className="h-6 w-6 fill-current" />
        </div>
      </button>

      <div className="mt-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-growth-green/15 text-growth-green">
          <User className="h-5 w-5" />
        </span>
        <div>
          <p className="font-display font-semibold text-text-primary">{story.name}</p>
          <p className="text-xs text-text-muted">
            {story.village}, {story.district} &middot; {story.cropType}
          </p>
        </div>
      </div>

      <blockquote className="mt-4 text-text-secondary">&ldquo;{story.quoteHindi}&rdquo;</blockquote>
      <p className="mt-1 text-sm italic text-text-muted">&ldquo;{story.quoteEnglish}&rdquo;</p>

      <div className="mt-5 flex gap-4">
        <div className="rounded-lg border border-border-subtle px-3 py-2">
          <p className="font-data text-sm font-semibold text-carbon-teal">{story.soilPhChange}</p>
          <p className="text-[10px] uppercase text-text-muted">Soil pH</p>
        </div>
        <div className="rounded-lg border border-border-subtle px-3 py-2">
          <p className="font-data text-sm font-semibold text-carbon-teal">{story.yieldChange}</p>
          <p className="text-[10px] uppercase text-text-muted">Yield</p>
        </div>
      </div>
    </div>
  );
}
