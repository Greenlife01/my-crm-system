import type { Metadata } from "next";
import { Mountain, Droplets, Flame, Zap, Briefcase, Cpu } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/Badge";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "From Project Nirmatva's ERW deployment to AWD rice methane avoidance, biochar, I-REC issuance, sustainability consulting, and the CarbonNex platform.",
};

// Display-only metadata per project (icon/accent/metric), indexed to `projects` — content itself stays in site-data.ts.
const projectMeta = [
  { icon: Mountain, accent: "#1D9E75", metric: null },
  { icon: Droplets, accent: "#5DCAA5", metric: null },
  { icon: Flame, accent: "#EF9F27", metric: "~5,000 tCO₂e" },
  { icon: Zap, accent: "#EF9F27", metric: "500 MW+" },
  { icon: Briefcase, accent: "#5DCAA5", metric: null },
  { icon: Cpu, accent: "#1D9E75", metric: null },
];

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Six Projects. One Mission."
        description="Every project line we run is built around measurable, verifiable climate impact."
      />

      <SectionWrapper className="bg-soil-black py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, i) => {
              const meta = projectMeta[i];
              return (
                <SectionWrapper key={project.title} delay={i * 0.08}>
                  <Card
                    className="h-full"
                    style={{ borderLeft: `4px solid ${meta.accent}` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                        style={{ background: `${meta.accent}26`, border: `1px solid ${meta.accent}4D` }}
                      >
                        <meta.icon className="h-5 w-5" style={{ color: meta.accent }} />
                      </span>
                      <StatusBadge status={project.status} />
                    </div>
                    <p className="mt-4 font-display text-xl font-semibold text-text-primary">
                      {project.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.description}</p>
                    {meta.metric && (
                      <span
                        className="mt-4 inline-block font-data text-sm font-semibold"
                        style={{ color: meta.accent }}
                      >
                        {meta.metric}
                      </span>
                    )}
                  </Card>
                </SectionWrapper>
              );
            })}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
