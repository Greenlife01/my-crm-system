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
    <SectionWrapper className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-display text-3xl font-medium text-soil-black sm:text-4xl">
            Follow the Field Work
          </h2>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[#1D9E75] hover:text-growth-green"
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
              className="group relative aspect-square overflow-hidden rounded-xl border border-[rgba(29,158,117,0.15)] bg-cream"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1D9E75]/10 to-cream text-muted-green-grey">
                <InstagramIcon className="h-6 w-6 opacity-50" />
              </div>
              <div className="absolute inset-0 flex items-end bg-black/60 p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-xs text-white">{caption}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
