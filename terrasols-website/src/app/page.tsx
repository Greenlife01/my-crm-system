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

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactCounters />
      <ProblemSection />
      <SolutionSteps />
      <ForFarmersSplit />
      <NirmatvaMap />
      <FarmerStoriesCarousel />
      <ScienceCredibility />
      <ForBuyersGrid />
      <CarbonNexSpotlight />
      <InstagramGrid />
      <BlogPreview />
    </>
  );
}
