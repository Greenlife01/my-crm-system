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
      <SectionDivider fill="#F5F2EC" />
      <ImpactCounters />
      <SectionDivider fill="#0A1A0C" flip />
      <ProblemSection />
      <SectionDivider fill="#FFFFFF" />
      <SolutionSteps />
      <SectionDivider fill="#FDF6E3" />
      <ForFarmersSplit />
      <SectionDivider fill="#040D06" flip variant="diagonal" />
      <NirmatvaMap />
      <SectionDivider fill="#F5F2EC" />
      <FarmerStoriesCarousel />
      <SectionDivider fill="#FFFFFF" />
      <ScienceCredibility />
      <SectionDivider fill="#040D06" flip />
      <ForBuyersGrid />
      <SectionDivider fill="#F0F6FF" variant="diagonal" />
      <CarbonNexSpotlight />
      <SectionDivider fill="#FFFFFF" />
      <InstagramGrid />
      <SectionDivider fill="#F5F2EC" />
      <BlogPreview />
      <SectionDivider fill="#020805" flip />
    </>
  );
}
