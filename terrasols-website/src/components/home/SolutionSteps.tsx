import { Mountain, Tractor, FlaskConical, Leaf } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";

const steps = [
  {
    icon: Mountain,
    title: "Basalt",
    description: "Volcanic basalt rock from the Deccan Traps",
  },
  {
    icon: Tractor,
    title: "Spread",
    description: "We crush & spread it on your farmland",
  },
  {
    icon: FlaskConical,
    title: "React",
    description: "Reacts with soil water & CO₂",
  },
  {
    icon: Leaf,
    title: "Capture",
    description: "CO₂ locked away permanently",
  },
];

export default function SolutionSteps() {
  return (
    <SectionWrapper className="bg-earth-mid py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium text-text-primary sm:text-4xl">Our Solution</h2>
          <p className="mt-4 text-text-muted">
            A simple, scientifically rigorous process — from rock to permanent carbon removal.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-10 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-growth-green/50 to-transparent lg:block" />
          {steps.map((step, i) => (
            <SectionWrapper key={step.title} delay={i * 0.12}>
              <Card glass className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-growth-green/15 text-growth-green">
                  <step.icon className="h-7 w-7" />
                </div>
                <p className="mt-4 font-display text-lg font-semibold text-text-primary">
                  Step {i + 1}: {step.title}
                </p>
                <p className="mt-2 text-sm text-text-muted">{step.description}</p>
              </Card>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
