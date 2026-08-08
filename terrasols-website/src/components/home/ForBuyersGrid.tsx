import { ShieldCheck, LineChart, Database, TrendingUp, FileCheck } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
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
    <SectionWrapper className="relative overflow-hidden bg-earth-dark py-24">
      <div className="bg-gradient-ambient-b pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-carbon-teal">
              For Buyers
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium text-text-primary sm:text-4xl">
              Permanent Carbon Removal. Verified. Scalable.
            </h2>
          </div>
          <Button href="/buyers" variant="outline">
            Request an offtake discussion
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {points.map((p) => (
            <Card key={p.title} glass>
              <p.icon className="h-6 w-6 text-carbon-teal" />
              <p className="mt-4 font-display font-semibold text-text-primary">{p.title}</p>
              <p className="mt-2 text-sm text-text-muted">{p.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
