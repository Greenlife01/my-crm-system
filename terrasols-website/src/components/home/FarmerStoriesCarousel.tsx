"use client";

import { useRef } from "react";
import { Play, User } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVideoLightbox, VideoLightbox } from "@/components/ui/VideoLightbox";
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
      <div className="top-0 flex h-auto flex-col justify-center overflow-hidden py-24 md:sticky md:h-screen md:py-0">
        <div className="mx-auto mb-10 max-w-2xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-medium text-text-primary sm:text-4xl">
            Farmer Stories
          </h2>
          <p className="mt-4 text-text-muted">Real voices from the field.</p>
        </div>

        <div
          ref={trackRef}
          className="flex flex-col gap-6 px-6 md:flex-row md:gap-8 md:px-[8vw]"
        >
          {farmerStories.map((story) => (
            <div
              key={story.slug}
              className="w-full shrink-0 rounded-2xl border border-border-subtle bg-earth-dark p-6 sm:w-[420px]"
            >
              <button
                onClick={() => lightbox.open(story.youtubeId)}
                className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-soil-black"
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
          ))}
        </div>
      </div>

      <VideoLightbox id={lightbox.activeId} onClose={lightbox.close} />
    </section>
  );
}
