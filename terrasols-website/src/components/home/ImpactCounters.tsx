import SectionWrapper from "@/components/ui/SectionWrapper";
import Counter from "@/components/ui/Counter";
import { impactStats } from "@/lib/site-data";

export default function ImpactCounters() {
  return (
    <SectionWrapper className="border-y border-border-subtle bg-cream py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
        {impactStats.map((stat) => (
          <div key={stat.label} className="text-center">
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              className="font-data block text-4xl font-bold text-green-mid sm:text-5xl"
            />
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-text-muted sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
