const stats = [
  {
    value: "₹1.7–2 lakh crore",
    label: "spent annually by India on fertiliser subsidies",
    accent: "#EF9F27",
  },
  {
    value: "100%",
    label: "potash import dependency — zero domestic production",
    accent: "#E85555",
  },
  {
    value: "86%",
    label: "of Indian farmers are smallholders with no access to soil carbon income",
    accent: "#EF9F27",
  },
];

export default function ProblemSection() {
  return (
    <section
      className="noise-overlay relative z-[2] pb-24"
      style={{
        background: "#0A1A0C",
        borderRadius: "32px 32px 0 0",
        marginTop: -80,
        paddingTop: 80,
        boxShadow: "0 -24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(180,30,30,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="crisis-alert-dot" aria-hidden="true" />
            <h2 className="font-display text-3xl font-medium text-text-primary sm:text-4xl">
              India&apos;s Soil Is in Crisis
            </h2>
          </div>
          <p className="mt-4 text-text-muted">
            A dependency on imported fertiliser and a system that leaves smallholders out of the carbon
            economy.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="h-full"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderLeft: `4px solid ${stat.accent}`,
                borderRadius: 16,
                padding: 32,
              }}
            >
              <p
                className="font-display text-[40px] font-bold sm:text-[56px]"
                style={{ color: stat.accent }}
              >
                {stat.value}
              </p>
              <p className="mt-3 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
