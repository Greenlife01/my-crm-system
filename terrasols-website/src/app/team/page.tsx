import type { Metadata } from "next";
import { UserRound, Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import { founders, advisoryBoard, fieldTeam } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Co-Founders, science advisory board, and field & lab team behind Terrasols and Project Nirmatva.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow="Our Team" title="The People Behind Terrasols" />

      <SectionWrapper className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {founders.map((founder) => (
              <Card key={founder.name} className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-primary/15 text-green-primary">
                  <UserRound className="h-12 w-12" />
                </div>
                <p className="mt-5 font-display text-xl font-semibold text-text-dark">{founder.name}</p>
                <p className="text-sm font-medium text-green-mid">{founder.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">{founder.bio}</p>
                <div className="mt-5 flex items-center justify-center gap-3">
                  {founder.email && (
                    <a
                      href={`mailto:${founder.email}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-text-mid hover:border-green-bright hover:text-green-mid"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-text-mid hover:border-green-bright hover:text-green-mid">
                    <LinkedinIcon className="h-4 w-4" />
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-dark">
            Science Advisory Board
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advisoryBoard.map((advisor) => (
              <div key={advisor.name} className="rounded-2xl border border-border-subtle bg-sage-light p-5 text-center">
                <p className="font-display font-semibold text-text-dark">{advisor.name}</p>
                <p className="mt-1 text-xs text-text-muted">{advisor.org}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-dark">
            Field &amp; Lab Team
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {fieldTeam.map((member) => (
              <div key={member.name} className="rounded-xl border border-border-subtle bg-white p-4 text-center">
                <p className="text-sm font-medium text-text-dark">{member.name}</p>
                <p className="mt-1 text-xs text-text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
