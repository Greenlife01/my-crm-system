"use client";

import { CheckCircle2, Play, Wheat } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { useVideoLightbox, VideoLightbox } from "@/components/ui/VideoLightbox";

const FARMER_STORY_YOUTUBE_ID = "zSPKvhu4lBc";

const benefits = [
  "Zero cost — basalt, spreading, lab testing all free",
  "Improved soil fertility & crop yield",
  "Additional income from carbon credits",
  "No change to your existing farming practices",
];

export default function ForFarmersSplit() {
  const lightbox = useVideoLightbox();

  return (
    <SectionWrapper className="py-24">
      <div className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1600&q=80"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(42,21,0,0.88) 0%, rgba(20,35,10,0.82) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute select-none font-display"
          style={{
            right: -20,
            bottom: 20,
            fontSize: 180,
            fontWeight: 700,
            color: "rgba(255,255,255,0.03)",
            lineHeight: 1,
          }}
        >
          किसान
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <button
            type="button"
            onClick={() => lightbox.open(FARMER_STORY_YOUTUBE_ID)}
            className="relative aspect-video overflow-hidden text-left"
            style={{
              border: "1px solid rgba(239,159,39,0.4)",
              borderRadius: 16,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.youtube.com/vi/${FARMER_STORY_YOUTUBE_ID}/maxresdefault.jpg`}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-black/30" />

            <span
              className="absolute right-3 top-3"
              style={{
                background: "rgba(0,0,0,0.6)",
                color: "white",
                borderRadius: 4,
                padding: "2px 6px",
                fontSize: 11,
              }}
            >
              1:24
            </span>

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 80,
                  height: 80,
                  background: "rgba(239,159,39,0.9)",
                  boxShadow:
                    "0 0 0 12px rgba(239,159,39,0.2), 0 0 0 24px rgba(239,159,39,0.1)",
                }}
              >
                <Play className="text-white" style={{ width: 28, height: 28 }} fill="white" />
              </div>
              <span
                className="uppercase text-white"
                style={{ fontSize: 13, letterSpacing: "0.08em" }}
              >
                ▶ Watch Farmer Story
              </span>
            </div>
          </button>

          <div>
            <span
              className="inline-block"
              style={{
                background: "rgba(239,159,39,0.15)",
                border: "1px solid rgba(239,159,39,0.4)",
                color: "#EF9F27",
                borderRadius: 20,
                padding: "4px 14px",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              For Farmers
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium text-white sm:text-4xl">
              Your Land, Your Earnings
            </h2>
            <p
              style={{
                marginTop: 6,
                color: "rgba(239,159,39,0.7)",
                fontSize: 18,
                fontStyle: "italic",
              }}
            >
              आपकी ज़मीन, आपकी कमाई
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="benefit-card flex items-center gap-3.5">
                  <span
                    className="flex shrink-0 items-center justify-center rounded-full"
                    style={{
                      width: 36,
                      height: 36,
                      background: "rgba(239,159,39,0.15)",
                      border: "1px solid rgba(239,159,39,0.3)",
                    }}
                  >
                    <CheckCircle2 className="h-4 w-4" style={{ color: "#EF9F27" }} />
                  </span>
                  <span className="text-white" style={{ fontSize: 15 }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                href="/farmers"
                variant="secondary"
                shimmer
                className="btn-heartbeat !px-8 !py-4"
              >
                <Wheat className="h-4 w-4" />
                Are you a farmer? Register your land
              </Button>
            </div>

            <p
              className="mt-4 flex items-center gap-2"
              style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}
            >
              <span
                className="inline-block rounded-full"
                style={{ width: 6, height: 6, background: "#1D9E75" }}
              />
              340+ farmers already enrolled across Khandwa district
            </p>
          </div>
        </div>
      </div>
      <VideoLightbox id={lightbox.activeId} onClose={lightbox.close} />
    </SectionWrapper>
  );
}
