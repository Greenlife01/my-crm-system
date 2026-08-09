import { ShieldCheck, LineChart, Database, TrendingUp, FileCheck } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const points = [
  { icon: ShieldCheck, title: "Permanent Removal", description: "Not avoidance — carbon locked away for ~10,000 years." },
  { icon: FileCheck, title: "Isometric-Verified", description: "Registered and verified under EW Protocol v1.2." },
  { icon: Database, title: "Primary Data MRV", description: "dMRV platform (DHARA) in development for full traceability." },
  { icon: TrendingUp, title: "Scalable Supply", description: "500t → 10,000t → 50,000t deployment pathway." },
  { icon: LineChart, title: "Signed LOIs", description: "Multiple signed LOIs with international buyers." },
];

export default function ForBuyersGrid() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-dark-green py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(93,202,165,0.14),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-green-bright">
              For Buyers
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium text-white sm:text-4xl">
              Permanent Carbon Removal. Verified. Scalable.
            </h2>
          </div>
          <Button href="/buyers" variant="dark">
            Request an offtake discussion
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border-subtle-dark bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-green-bright/40 hover:bg-white/[0.07] hover:-translate-y-1"
            >
              <p.icon className="h-6 w-6 text-green-bright" />
              <p className="mt-4 font-display font-semibold text-white">{p.title}</p>
              <p className="mt-2 text-sm text-text-on-dark-mid">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
