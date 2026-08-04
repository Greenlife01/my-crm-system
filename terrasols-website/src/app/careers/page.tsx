import type { Metadata } from "next";
import { MapPin, Handshake, Users, Sprout as SproutIcon, FlaskConical, Database, Cpu } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CareerApplicationForm from "@/components/forms/CareerApplicationForm";
import { openRoles, company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Work With Us",
  description: "Open roles at Terrasols — build India's Enhanced Rock Weathering infrastructure with us.",
};

const whyUs = [
  { icon: SproutIcon, title: "Real Climate Impact", body: "Work on verifiable carbon removal, not marketing claims.", accent: "#1D9E75" },
  { icon: Handshake, title: "Institutional Backing", body: "ICAR-IARI, JNU, IIM Lucknow, and HDFC Parivartan support our programme.", accent: "#EF9F27" },
  { icon: Users, title: "Equity via ESOP", body: "Build alongside us with a meaningful ownership stake.", accent: "#5DCAA5" },
];

// Display-only metadata per role (department/icon/accent), indexed to `openRoles` — content stays in site-data.ts.
const roleMeta = [
  { department: "Field Operations", icon: SproutIcon, accent: "#1D9E75" },
  { department: "Science", icon: FlaskConical, accent: "#5DCAA5" },
  { department: "MRV & Data", icon: Database, accent: "#5DCAA5" },
  { department: "Partnerships", icon: Handshake, accent: "#EF9F27" },
  { department: "Engineering", icon: Cpu, accent: "#1D9E75" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Work With Us"
        title="Build the Climate Future of India With Us."
        description="We're hiring across field operations, science, MRV, partnerships, and software."
      />

      <SectionWrapper className="bg-soil-black py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">Open Roles</h2>
          <div className="mt-14 space-y-4">
            {openRoles.map((role, i) => {
              const meta = roleMeta[i];
              return (
                <div
                  key={role.title}
                  className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-earth-dark p-6 sm:flex-row sm:items-center"
                  style={{ borderLeft: `4px solid ${meta.accent}` }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                      style={{ background: `${meta.accent}26`, border: `1px solid ${meta.accent}4D` }}
                    >
                      <meta.icon className="h-5 w-5" style={{ color: meta.accent }} />
                    </span>
                    <div>
                      <span
                        className="text-[10px] font-semibold uppercase tracking-wide"
                        style={{ color: meta.accent }}
                      >
                        {meta.department}
                      </span>
                      <p className="mt-1 font-display font-semibold text-text-primary">{role.title}</p>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-text-muted">
                        <MapPin className="h-3.5 w-3.5" /> {role.location}
                      </p>
                    </div>
                  </div>
                  <Button href="#apply" variant="outline">
                    Apply
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="relative overflow-hidden py-32">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(10,26,12,0.9) 0%, rgba(15,31,16,0.85) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-8">
          <span className="inline-flex items-center rounded-full border border-growth-green/30 bg-growth-green/15 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-carbon-teal">
            Our Culture
          </span>
          <h2 className="mt-5 font-display text-3xl font-medium text-text-primary sm:text-4xl">
            Field-First. Science-Led. Farmer-Obsessed.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            We&apos;re a small, hands-on team split between the field in Khandwa and remote-first science
            and engineering — every hire works close to the soil we&apos;re trying to heal, whether
            that&apos;s in the lab, the codebase, or the village itself.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-earth-dark py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">
            Why Terrasols?
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {whyUs.map((w) => (
              <Card key={w.title} className="h-full" style={{ borderLeft: `4px solid ${w.accent}` }}>
                <w.icon className="h-6 w-6" style={{ color: w.accent }} />
                <p className="mt-4 font-display font-semibold text-text-primary">{w.title}</p>
                <p className="mt-2 text-sm text-text-muted">{w.body}</p>
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-text-muted">
            Remote + field hybrid. For institutional partnership enquiries — incubators, universities,
            research institutions, and government agencies — write to us at{" "}
            <a href={`mailto:${company.emailInfo}`} className="text-carbon-teal">
              {company.emailInfo}
            </a>
            .
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="apply" className="bg-soil-black py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">Apply</h2>
          <div className="mt-10">
            <CareerApplicationForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
