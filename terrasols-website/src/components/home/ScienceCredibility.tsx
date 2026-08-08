import { Award } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { scienceAdvisors } from "@/lib/site-data";

export default function ScienceCredibility() {
  return (
    <SectionWrapper className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-green-mid">
            Science Credibility
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-text-dark sm:text-4xl">
            Backed by India&apos;s Deepest Science Institutions
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {scienceAdvisors.map((name) => (
            <div
              key={name}
              className="flex h-24 items-center justify-center rounded-xl border border-border-subtle bg-white px-4 text-center text-xs font-medium text-text-mid shadow-[0_2px_16px_rgba(10,46,26,0.04)] transition-colors hover:border-green-bright/50"
            >
              {name}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border-subtle bg-white p-6 text-center shadow-[0_2px_16px_rgba(10,46,26,0.04)]">
          <p className="text-sm text-text-mid">
            Registered under <strong className="text-green-mid">Isometric EW Protocol v1.2</strong> —
            the most rigorous ERW verification standard globally.
          </p>
        </div>

        <div className="mx-auto mt-6 flex max-w-3xl items-center justify-center gap-3 rounded-2xl border border-amber/30 bg-amber/5 p-6 text-center">
          <Award className="h-6 w-6 shrink-0 text-amber" />
          <p className="text-sm text-text-mid">
            Joint Patent in Progress — <strong className="text-soil-brown">ICAR-IARI Pusa</strong> ×
            Terrasols
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
