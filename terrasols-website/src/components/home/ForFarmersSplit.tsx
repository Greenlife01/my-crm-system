import { CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const benefits = [
  "Zero cost — basalt, spreading, lab testing all free",
  "Improved soil fertility & crop yield",
  "Additional income from carbon credits",
  "No change to your existing farming practices",
];

export default function ForFarmersSplit() {
  return (
    <SectionWrapper className="py-24">
      <div
        style={{
          background: "linear-gradient(135deg, #FDF6E3 0%, #F5ECD7 100%)",
        }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="aspect-video overflow-hidden rounded-2xl border border-[rgba(29,158,117,0.2)] bg-white">
            <div className="flex h-full w-full items-center justify-center text-sm text-muted-forest">
              Farmer testimonial video
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-[#EF9F27]">
              For Farmers
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium text-[#2A1500] sm:text-4xl">
              Your Land, Your Earnings
            </h2>
            <ul className="mt-8 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#EF9F27]" />
                  <span className="text-muted-forest">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/farmers" variant="secondary" className="btn-heartbeat">
                Are you a farmer? Register your land
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
