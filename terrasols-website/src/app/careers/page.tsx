import type { Metadata } from "next";
import { MapPin, Handshake, Users, Sprout as SproutIcon } from "lucide-react";
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
  { icon: SproutIcon, title: "Real Climate Impact", body: "Work on verifiable carbon removal, not marketing claims." },
  { icon: Handshake, title: "Institutional Backing", body: "ICAR-IARI, JNU, IIM Lucknow, and HDFC Parivartan support our programme." },
  { icon: Users, title: "Equity via ESOP", body: "Build alongside us with a meaningful ownership stake." },
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
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-border-subtle bg-earth-dark p-6 sm:flex-row sm:items-center"
              >
                <div>
                  <p className="font-display font-semibold text-text-primary">{role.title}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-text-muted">
                    <MapPin className="h-3.5 w-3.5" /> {role.location}
                  </p>
                </div>
                <Button href="#apply" variant="outline">
                  Apply
                </Button>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-earth-dark py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">
            Why Terrasols?
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {whyUs.map((w) => (
              <Card key={w.title}>
                <w.icon className="h-6 w-6 text-carbon-teal" />
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
