"use client";

import { Play } from "lucide-react";
import { useVideoLightbox, VideoLightbox } from "@/components/ui/VideoLightbox";
import { farmerStories } from "@/lib/farmer-stories";

export default function FarmerVideoGrid() {
  const lightbox = useVideoLightbox();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {farmerStories.map((story) => (
        <button
          key={story.slug}
          onClick={() => lightbox.open(story.youtubeId)}
          className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-border-subtle bg-white"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-primary/90 text-dark-green transition-transform group-hover:scale-110">
            <Play className="h-5 w-5 fill-current" />
          </div>
          <p className="absolute bottom-2 left-2 text-xs font-medium text-text-dark">{story.name}</p>
        </button>
      ))}
      <VideoLightbox id={lightbox.activeId} onClose={lightbox.close} />
    </div>
  );
}
