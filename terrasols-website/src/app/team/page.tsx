import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import Marquee from "@/components/ui/Marquee";
import { founders, advisoryBoard, fieldTeam, socialLinks } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Co-Founders, the Terrasols team, and the science advisory board behind Terrasols and Project Nirmatva.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow="Our Team" title="The People Behind Terrasols" />

      <SectionWrapper className="relative overflow-hidden bg-soil-black py-24">
        <div className="bg-gradient-ambient-a pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {founders.map((founder) => (
              <Card key={founder.name} glass className="text-center">
                <Avatar name={founder.name} photo={founder.photo} size={96} />
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
                    href={founder.linkedin ?? socialLinks.linkedin}
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

      <SectionWrapper className="relative overflow-hidden bg-white py-24">
        <div className="bg-gradient-light-vignette pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-medium text-soil-black sm:text-4xl">Terrasols Team</h2>
        </div>

        <div className="relative mt-14">
          <Marquee
            speed={22}
            items={fieldTeam.map((member) => (
              <Card key={member.name} glass="light" className="w-72 text-center sm:w-80">
                <Avatar name={member.name} photo={member.photo} size={112} />
                <p className="mt-5 font-display text-lg font-semibold text-soil-black">{member.name}</p>
                <p className="mt-1 text-sm font-medium text-carbon-teal">{member.role}</p>
                {member.bio && <p className="mt-3 text-sm leading-relaxed text-text-muted">{member.bio}</p>}
              </Card>
            ))}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="relative overflow-hidden bg-earth-dark py-24">
        <div className="bg-gradient-ambient-b pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">
            Science Advisory Board
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advisoryBoard.map((advisor) => (
              <Card key={advisor.name} glass className="text-center">
                <Avatar name={advisor.name} size={56} />
                <p className="mt-4 font-display font-semibold text-text-primary">{advisor.name}</p>
                <p className="mt-1 text-xs text-text-muted">{advisor.org}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
