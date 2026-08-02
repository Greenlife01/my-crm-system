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
      <PageHero eyebrow="Farmer Stories" title="Real Voices From the Field" tone="amber" />
      <SectionWrapper className="bg-soil-black py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <StoriesGrid />
        </div>
      </SectionWrapper>
    </>
  );
}
