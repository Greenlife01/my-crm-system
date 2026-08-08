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
    <SectionWrapper className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-green-mid">
            Farmer Stories
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-text-dark sm:text-4xl">
            Real Voices From the Field
          </h2>
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
              className="grid grid-cols-1 gap-8 rounded-2xl border border-border-subtle bg-sage-light p-8 shadow-[0_16px_40px_rgba(10,46,26,0.06)] sm:grid-cols-2"
            >
              <button
                onClick={() => lightbox.open(story.youtubeId)}
                className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-dark-green"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-bright/90 text-dark-green transition-transform group-hover:scale-110">
                  <Play className="h-6 w-6 fill-current" />
                </div>
              </button>

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-primary/12 text-green-primary">
                    <User className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display font-semibold text-text-dark">{story.name}</p>
                    <p className="text-xs text-text-muted">
                      {story.village}, {story.district} &middot; {story.cropType}
                    </p>
                  </div>
                </div>

                <blockquote className="mt-4 text-text-dark">&ldquo;{story.quoteHindi}&rdquo;</blockquote>
                <p className="mt-1 text-sm italic text-text-mid">&ldquo;{story.quoteEnglish}&rdquo;</p>

                <div className="mt-5 flex gap-4">
                  <div className="rounded-lg border border-border-subtle bg-white px-3 py-2">
                    <p className="font-data text-sm font-semibold text-green-mid">{story.soilPhChange}</p>
                    <p className="text-[10px] uppercase text-text-muted">Soil pH</p>
                  </div>
                  <div className="rounded-lg border border-border-subtle bg-white px-3 py-2">
                    <p className="font-data text-sm font-semibold text-green-mid">{story.yieldChange}</p>
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
                  i === index ? "w-6 bg-green-primary" : "w-2 bg-border-subtle"
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
