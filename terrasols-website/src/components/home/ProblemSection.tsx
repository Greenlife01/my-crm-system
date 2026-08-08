import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";

const stats = [
  {
    value: "₹1.7–2 lakh crore",
    label: "spent annually by India on fertiliser subsidies",
  },
  {
    value: "100%",
    label: "potash import dependency — zero domestic production",
  },
  {
    value: "86%",
    label: "of Indian farmers are smallholders with no access to soil carbon income",
  },
];

export default function ProblemSection() {
  return (
    <SectionWrapper className="bg-sage-light py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-green-mid">
            The Crisis
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-text-dark sm:text-4xl">
            India&apos;s Soil Is in Crisis
          </h2>
          <p className="mt-4 text-text-mid">
            A dependency on imported fertiliser and a system that leaves smallholders out of the carbon
            economy.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <SectionWrapper key={stat.label} delay={i * 0.1}>
              <Card className="h-full text-center">
                <p className="font-data text-3xl font-bold text-amber sm:text-4xl">{stat.value}</p>
                <p className="mt-3 text-sm text-text-mid">{stat.label}</p>
              </Card>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
