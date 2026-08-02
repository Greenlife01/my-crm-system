import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { farmerStories } from "@/lib/farmer-stories";

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
      <SectionWrapper className="border-b border-border-subtle bg-earth-dark py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Badge tone="amber">
            {story.village}, {story.district}
          </Badge>
          <h1 className="mt-5 font-display text-3xl font-medium text-text-primary sm:text-4xl">
            {story.name}
          </h1>
          <p className="mt-3 text-text-muted">{story.state} &middot; {story.cropType}</p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-soil-black py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
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

          <div className="mt-10 grid grid-cols-2 gap-4 sm:w-64">
            <div className="rounded-xl border border-border-subtle bg-earth-dark p-4 text-center">
              <p className="font-data text-xl font-bold text-carbon-teal">{story.soilPhChange}</p>
              <p className="mt-1 text-xs text-text-muted">Soil pH</p>
            </div>
            <div className="rounded-xl border border-border-subtle bg-earth-dark p-4 text-center">
              <p className="font-data text-xl font-bold text-carbon-teal">{story.yieldChange}</p>
              <p className="mt-1 text-xs text-text-muted">Yield</p>
            </div>
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
