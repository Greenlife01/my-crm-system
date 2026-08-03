import { Award } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Marquee from "@/components/ui/Marquee";
import { scienceAdvisors } from "@/lib/site-data";

export default function ScienceCredibility() {
  return (
    <SectionWrapper className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-[#1D9E75]">
            Science Credibility
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-soil-black sm:text-4xl">
            Backed by India&apos;s Deepest Science Institutions
          </h2>
        </div>

        <div className="mt-14">
          <Marquee
            items={scienceAdvisors.map((name) => (
              <div
                key={name}
                className="flex h-24 w-56 items-center justify-center rounded-xl border border-[rgba(29,158,117,0.15)] bg-cream px-4 text-center text-xs font-medium text-muted-forest transition-colors hover:border-[#1D9E75]/40"
              >
                {name}
              </div>
            ))}
          />
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl bg-soil-black p-6 text-center">
          <p className="text-sm text-white">
            Registered under <strong className="text-carbon-teal">Isometric EW Protocol v1.2</strong> —
            the most rigorous ERW verification standard globally.
          </p>
        </div>

        <div className="mx-auto mt-6 flex max-w-3xl items-center justify-center gap-3 rounded-2xl border-l-4 border-[#EF9F27] bg-cream p-6 text-center">
          <Award className="h-6 w-6 shrink-0 text-[#EF9F27]" />
          <p className="text-sm text-muted-forest">
            Joint Patent in Progress — <strong className="text-[#EF9F27]">ICAR-IARI Pusa</strong> ×
            Terrasols
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
