import { LinkedinIcon } from "@/components/ui/SocialIcons";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { socialLinks } from "@/lib/site-data";

const linkedinPostIds = [
  "7358882328712011777",
  "7380946218132271105",
  "7426544362802532352",
];

export default function InstagramGrid() {
  return (
    <SectionWrapper className="bg-soil-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-display text-3xl font-medium text-text-primary sm:text-4xl">
            Follow the Field Work
          </h2>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-carbon-teal hover:text-leaf-light"
          >
            <LinkedinIcon className="h-4 w-4" /> Terrasols
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {linkedinPostIds.map((id) => (
            <div
              key={id}
              className="overflow-hidden rounded-xl border border-border-subtle bg-earth-dark"
            >
              <iframe
                src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${id}`}
                height={560}
                width="100%"
                title={`Terrasols LinkedIn post ${id}`}
                loading="lazy"
                allowFullScreen
                className="block"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
