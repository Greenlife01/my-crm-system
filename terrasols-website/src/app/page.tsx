import Hero from "@/components/home/Hero";
import ImpactCounters from "@/components/home/ImpactCounters";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSteps from "@/components/home/SolutionSteps";
import ForFarmersSplit from "@/components/home/ForFarmersSplit";
import NirmatvaMap from "@/components/home/NirmatvaMap";
import FarmerStoriesCarousel from "@/components/home/FarmerStoriesCarousel";
import ScienceCredibility from "@/components/home/ScienceCredibility";
import ForBuyersGrid from "@/components/home/ForBuyersGrid";
import CarbonNexSpotlight from "@/components/home/CarbonNexSpotlight";
import InstagramGrid from "@/components/home/InstagramGrid";
import BlogPreview from "@/components/home/BlogPreview";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider fill="#0f1f10" />
      <ImpactCounters />
      <ProblemSection />
      <SectionDivider fill="#1a2e1c" />
      <SolutionSteps />
      <ForFarmersSplit />
      <SectionDivider fill="#0a1a0c" flip />
      <NirmatvaMap />
      <FarmerStoriesCarousel />
      <SectionDivider fill="#0a1a0c" />
      <ScienceCredibility />
      <ForBuyersGrid />
      <SectionDivider fill="#020814" variant="diagonal" />
      <CarbonNexSpotlight />
      <InstagramGrid />
      <SectionDivider fill="#1a2e1c" />
      <BlogPreview />
    </>
  );
}
