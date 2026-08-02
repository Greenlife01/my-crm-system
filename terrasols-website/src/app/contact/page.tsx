import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { InstagramIcon, LinkedinIcon, YoutubeIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ContactTabs from "@/components/forms/ContactTabs";
import { company, socialLinks } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Terrasols — for farmers, buyers, partners, and investors.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's Talk" description="Tell us who you are, and we'll route you to the right team." />

      <SectionWrapper className="bg-soil-black py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <ContactTabs />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-earth-dark py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-medium text-text-primary">Contact Details</h2>
            <ul className="mt-6 space-y-4 text-text-secondary">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-carbon-teal" />
                <a href={`mailto:${company.emailPrimary}`}>{company.emailPrimary}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-carbon-teal" />
                <a href={`mailto:${company.emailInfo}`}>{company.emailInfo}</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-carbon-teal" />
                {company.location}
              </li>
            </ul>

            <div className="mt-8 flex items-center gap-3">
              {[
                { href: socialLinks.instagram, icon: InstagramIcon },
                { href: socialLinks.linkedin, icon: LinkedinIcon },
                { href: socialLinks.youtube, icon: YoutubeIcon },
                { href: socialLinks.facebook, icon: FacebookIcon },
              ].map(({ href, icon: Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-text-secondary transition-colors hover:border-carbon-teal hover:text-carbon-teal"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border-subtle">
            <iframe
              title="Terrasols location"
              src="https://www.google.com/maps?q=Greater+Noida,+Uttar+Pradesh,+India&output=embed"
              className="h-full min-h-[280px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
