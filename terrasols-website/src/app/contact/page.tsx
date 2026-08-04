import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
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

      <SectionWrapper className="noise-overlay relative bg-soil-black py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(29,158,117,0.1) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-2xl px-6 lg:px-8">
          <ContactTabs />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-earth-dark py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-medium text-text-primary">Contact Details</h2>
            <ul className="mt-6 space-y-3">
              <li className="benefit-card flex items-center gap-3.5">
                <span
                  className="flex shrink-0 items-center justify-center rounded-full"
                  style={{ width: 36, height: 36, background: "rgba(93,202,165,0.15)", border: "1px solid rgba(93,202,165,0.3)" }}
                >
                  <Phone className="h-4 w-4 text-carbon-teal" />
                </span>
                <a href={`tel:${company.phone}`} className="text-text-secondary">
                  {company.phone}
                </a>
              </li>
              <li className="benefit-card flex items-center gap-3.5">
                <span
                  className="flex shrink-0 items-center justify-center rounded-full"
                  style={{ width: 36, height: 36, background: "rgba(93,202,165,0.15)", border: "1px solid rgba(93,202,165,0.3)" }}
                >
                  <Mail className="h-4 w-4 text-carbon-teal" />
                </span>
                <a href={`mailto:${company.emailInfo}`} className="text-text-secondary">
                  {company.emailInfo}
                </a>
              </li>
              <li className="benefit-card flex items-center gap-3.5">
                <span
                  className="flex shrink-0 items-center justify-center rounded-full"
                  style={{ width: 36, height: 36, background: "rgba(93,202,165,0.15)", border: "1px solid rgba(93,202,165,0.3)" }}
                >
                  <MapPin className="h-4 w-4 text-carbon-teal" />
                </span>
                <span className="text-text-secondary">{company.location}</span>
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

          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ border: "1px solid rgba(93,202,165,0.3)" }}
          >
            <iframe
              title="Terrasols location"
              src="https://www.google.com/maps?q=Greater+Noida,+Uttar+Pradesh,+India&output=embed"
              className="h-full min-h-[320px] w-full"
              style={{ filter: "invert(92%) hue-rotate(180deg) contrast(0.9) brightness(0.95)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <span
              className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
              style={{ background: "rgba(10,26,12,0.85)", color: "#5DCAA5", border: "1px solid rgba(93,202,165,0.3)" }}
            >
              <MapPin className="h-3 w-3" /> Greater Noida, UP
            </span>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
