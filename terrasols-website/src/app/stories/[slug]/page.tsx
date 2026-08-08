import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import StoryStatBlock from "@/components/stories/StoryStatBlock";
import { farmerStories } from "@/lib/farmer-stories";

const FIELD_IMAGE = "https://images.unsplash.com/photo-1620200423727-8127f75d7f53?w=1600&q=80";

export async function generateStaticParams() {
  return farmerStories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = farmerStories.find((s) => s.slug === slug);
  if (!story) return {};
  return { title: `${story.name} — Farmer Story`, description: story.quoteEnglish };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = farmerStories.find((s) => s.slug === slug);
  if (!story) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${story.village}, ${story.district}`}
        title={story.name}
        description={`${story.state} · ${story.cropType}`}
        tone="amber"
        image={FIELD_IMAGE}
      />

      <SectionWrapper className="relative overflow-hidden bg-soil-black py-20">
        <div className="bg-gradient-ambient-a pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <div className="aspect-video overflow-hidden rounded-2xl border border-border-subtle">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${story.youtubeId}`}
              title={`${story.name} story`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <blockquote className="mt-10 text-xl text-text-primary">&ldquo;{story.quoteHindi}&rdquo;</blockquote>
          <p className="mt-2 italic text-text-muted">&ldquo;{story.quoteEnglish}&rdquo;</p>

          <div className="mt-10">
            <StoryStatBlock soilPhChange={story.soilPhChange} yieldChange={story.yieldChange} />
          </div>

          <div className="mt-10 space-y-4 text-text-secondary">
            <p>
              {story.name} farms {story.cropType.toLowerCase()} in {story.village}, a village in the{" "}
              {story.district} district of {story.state}. Since partnering with Terrasols under Project
              Nirmatva, {story.name.split(" ")[0]} has seen measurable improvements in soil health and
              crop yield — with basalt rock powder delivered, spread, and monitored entirely free of
              cost.
            </p>
            <p>
              Regular soil and crop sampling, carried out by the Terrasols field team in partnership
              with laboratories at IARI-PUSA and JNU, confirms both the agronomic and carbon removal
              benefits of the enhanced weathering process on this land.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
