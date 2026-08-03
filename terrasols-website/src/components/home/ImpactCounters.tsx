import SectionWrapper from "@/components/ui/SectionWrapper";
import Counter from "@/components/ui/Counter";
import { impactStats } from "@/lib/site-data";

export default function ImpactCounters() {
  return (
    <SectionWrapper className="border-t-[3px] border-[#1D9E75] bg-cream py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
        {impactStats.map((stat) => (
          <div key={stat.label} className="text-center">
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              className="font-data block text-4xl font-bold text-soil-black sm:text-5xl"
            />
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-green-grey sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
