"use client";

import { useVideoLightbox, VideoLightbox } from "@/components/ui/VideoLightbox";
import FarmerStoryCard from "@/components/ui/FarmerStoryCard";
import { farmerStories } from "@/lib/farmer-stories";

export default function FarmerVideoGrid() {
  const lightbox = useVideoLightbox();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {farmerStories.map((story) => (
        <FarmerStoryCard key={story.slug} story={story} onPlay={() => lightbox.open(story.youtubeId)} />
      ))}
      <VideoLightbox id={lightbox.activeId} onClose={lightbox.close} />
    </div>
  );
}
