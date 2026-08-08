import Link from "next/link";
import { Sprout, Mail, MapPin } from "lucide-react";
import { InstagramIcon, LinkedinIcon, YoutubeIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { company, footerLinks, legalLinks, socialLinks } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle-dark bg-dark-green">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display text-xl font-semibold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-bright/15 text-green-bright">
                <Sprout className="h-5 w-5" />
              </span>
              Terrasols
            </Link>
            <p className="mt-4 max-w-sm text-sm text-text-on-dark-mid">
              Healing earth, one farm at a time — India&apos;s Enhanced Rock Weathering carbon removal
              company.
            </p>
            <div className="mt-6 flex items-center gap-3">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle-dark text-text-on-dark-mid transition-colors hover:border-green-bright hover:text-green-bright"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-text-on-dark-mid">
              Explore
            </h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-on-dark-mid transition-colors hover:text-green-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-text-on-dark-mid">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-text-on-dark-mid">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-green-bright" />
                <span className="flex flex-col">
                  <a href={`mailto:${company.emailPrimary}`} className="hover:text-green-bright">
                    {company.emailPrimary}
                  </a>
                  <a href={`mailto:${company.emailInfo}`} className="hover:text-green-bright">
                    {company.emailInfo}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green-bright" />
                {company.location}
              </li>
            </ul>
            <ul className="mt-4 space-y-1">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-text-on-dark-mid transition-colors hover:text-green-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border-subtle-dark pt-8 text-xs text-text-on-dark-mid md:flex-row md:items-center md:justify-between">
          <p>
            DPIIT No. {company.dpiit} &nbsp;|&nbsp; CIN: {company.cin}
          </p>
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
