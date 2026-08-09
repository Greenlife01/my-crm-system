import type { Metadata } from "next";
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

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Six Projects. One Mission."
        description="Every project line we run is built around measurable, verifiable climate impact."
      />

      <SectionWrapper className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <SectionWrapper key={project.title} delay={i * 0.08}>
                <Card className="h-full">
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-display text-xl font-semibold text-text-dark">
                      {project.title}
                    </p>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-muted">{project.description}</p>
                </Card>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
