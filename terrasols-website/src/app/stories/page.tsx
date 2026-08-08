import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import StoriesGrid from "@/components/stories/StoriesGrid";

export const metadata: Metadata = {
  title: "Farmer Stories",
  description: "Video stories from the farmers partnering with Terrasols across Madhya Pradesh.",
};

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Farmer Stories"
        title="Real Voices From the Field"
        tone="amber"
        image="https://images.unsplash.com/photo-1620200423727-8127f75d7f53?w=1600&q=80"
      />
      <SectionWrapper className="relative overflow-hidden bg-soil-black py-24">
        <div className="bg-gradient-ambient-a pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <StoriesGrid />
        </div>
      </SectionWrapper>
    </>
  );
}
