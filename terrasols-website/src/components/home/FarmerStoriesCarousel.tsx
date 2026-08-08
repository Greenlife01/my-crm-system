"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVideoLightbox, VideoLightbox } from "@/components/ui/VideoLightbox";
import FarmerStoryCard from "@/components/ui/FarmerStoryCard";
import { farmerStories } from "@/lib/farmer-stories";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FarmerStoriesCarousel() {
  const lightbox = useVideoLightbox();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !trackRef.current) return;
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const track = trackRef.current!;
        const scrollAmount = Math.max(track.scrollWidth - window.innerWidth, 0);

        gsap.to(track, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${scrollAmount}`,
            scrub: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative bg-earth-mid md:h-[220vh]">
      <div className="relative top-0 flex h-auto flex-col justify-center overflow-hidden py-24 md:sticky md:h-screen md:py-0">
        <div className="bg-gradient-ambient-a pointer-events-none absolute inset-0" />
        <div className="relative mx-auto mb-10 max-w-2xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-medium text-text-primary sm:text-4xl">
            Farmer Stories
          </h2>
          <p className="mt-4 text-text-muted">Real voices from the field.</p>
        </div>

        <div
          ref={trackRef}
          className="relative flex flex-col gap-6 px-6 md:flex-row md:gap-8 md:px-[8vw]"
        >
          {farmerStories.map((story) => (
            <FarmerStoryCard
              key={story.slug}
              story={story}
              onPlay={() => lightbox.open(story.youtubeId)}
              className="w-full shrink-0 sm:w-[420px]"
            />
          ))}
        </div>
      </div>

      <VideoLightbox id={lightbox.activeId} onClose={lightbox.close} />
    </section>
  );
}
