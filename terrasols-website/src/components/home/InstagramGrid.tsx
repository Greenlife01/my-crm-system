import { InstagramIcon } from "@/components/ui/SocialIcons";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { socialLinks } from "@/lib/site-data";

const placeholderPosts = [
  "Basalt delivery day in Khandwa",
  "Field team soil sampling, Nimar belt",
  "Farmer partner spotlight: Punasa village",
  "Before/after: soil pH improvement",
  "Behind the scenes at Project Nirmatva",
  "Meet the lab team at IARI-PUSA",
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
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-carbon-teal hover:text-leaf-light"
          >
            <InstagramIcon className="h-4 w-4" /> @terrasols
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {placeholderPosts.map((caption, i) => (
            <a
              key={i}
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl border border-border-subtle bg-earth-dark"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-growth-green/10 to-earth-mid text-text-muted">
                <InstagramIcon className="h-6 w-6 opacity-40" />
              </div>
              <div className="absolute inset-0 flex items-end bg-black/60 p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-xs text-text-primary">{caption}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
