import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import { founders, advisoryBoard, fieldTeam, socialLinks } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Co-Founders, science advisory board, and field & lab team behind Terrasols and Project Nirmatva.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow="Our Team" title="The People Behind Terrasols" />

      <SectionWrapper className="bg-soil-black py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {founders.map((founder) => (
              <Card key={founder.name} className="text-center">
                <Avatar name={founder.name} size={96} />
                <p className="mt-5 font-display text-xl font-semibold text-text-primary">{founder.name}</p>
                <p className="text-sm font-medium text-carbon-teal">{founder.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">{founder.bio}</p>
                <div className="mt-5 flex items-center justify-center gap-3">
                  {founder.email && (
                    <a
                      href={`mailto:${founder.email}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-text-secondary hover:border-carbon-teal hover:text-carbon-teal"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-text-secondary hover:border-carbon-teal hover:text-carbon-teal"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-earth-dark py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">
            Science Advisory Board
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advisoryBoard.map((advisor) => (
              <Card key={advisor.name} className="text-center">
                <Avatar name={advisor.name} size={56} />
                <p className="mt-4 font-display font-semibold text-text-primary">{advisor.name}</p>
                <p className="mt-1 text-xs text-text-muted">{advisor.org}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-soil-black py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">
            Field &amp; Lab Team
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {fieldTeam.map((member) => (
              <div key={member.name} className="benefit-card flex items-center gap-3.5">
                <Avatar name={member.name} size={40} />
                <div>
                  <p className="text-sm font-medium text-text-primary">{member.name}</p>
                  <p className="mt-0.5 text-xs text-text-muted">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
