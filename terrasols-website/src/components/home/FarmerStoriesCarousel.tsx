"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, User } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useVideoLightbox, VideoLightbox } from "@/components/ui/VideoLightbox";
import { farmerStories } from "@/lib/farmer-stories";

export default function FarmerStoriesCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const lightbox = useVideoLightbox();

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % farmerStories.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [paused]);

  const story = farmerStories[index];

  return (
    <SectionWrapper className="bg-earth-mid py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium text-text-primary sm:text-4xl">
            Farmer Stories
          </h2>
          <p className="mt-4 text-text-muted">Real voices from the field.</p>
        </div>

        <div
          className="mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={story.slug}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-8 rounded-2xl border border-border-subtle bg-earth-dark p-8 sm:grid-cols-2"
            >
              <button
                onClick={() => lightbox.open(story.youtubeId)}
                className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-soil-black"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-growth-green/90 text-soil-black transition-transform group-hover:scale-110">
                  <Play className="h-6 w-6 fill-current" />
                </div>
              </button>

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3">
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
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {farmerStories.map((s, i) => (
              <button
                key={s.slug}
                onClick={() => setIndex(i)}
                aria-label={`Show story ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-growth-green" : "w-2 bg-border-subtle"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <VideoLightbox id={lightbox.activeId} onClose={lightbox.close} />
    </SectionWrapper>
  );
}
