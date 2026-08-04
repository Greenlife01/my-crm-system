import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { InstagramIcon, LinkedinIcon, YoutubeIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { company, footerLinks, legalLinks, socialLinks } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="noise-overlay noise-overlay--green relative border-t border-border-subtle bg-black">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display text-xl font-semibold text-text-primary">
              <Image src="/logo-mark.png" alt="" width={36} height={36} className="h-9 w-9" />
              Terrasols
            </Link>
            <p className="mt-4 max-w-sm text-sm text-text-muted">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-text-secondary transition-colors hover:border-carbon-teal hover:text-carbon-teal"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-text-secondary">
              Explore
            </h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-muted transition-colors hover:text-carbon-teal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-text-secondary">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-carbon-teal" />
                <span className="flex flex-col">
                  <a href={`mailto:${company.emailPrimary}`} className="hover:text-carbon-teal">
                    {company.emailPrimary}
                  </a>
                  <a href={`mailto:${company.emailInfo}`} className="hover:text-carbon-teal">
                    {company.emailInfo}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-carbon-teal" />
                {company.location}
              </li>
            </ul>
            <ul className="mt-4 space-y-1">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-text-muted transition-colors hover:text-carbon-teal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border-subtle pt-8 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
          <p>
            DPIIT No. {company.dpiit} &nbsp;|&nbsp; CIN: {company.cin}
          </p>
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
