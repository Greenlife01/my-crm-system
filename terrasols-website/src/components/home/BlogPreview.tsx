import Link from "next/link";
import { getAllPosts, categoryLabels } from "@/lib/blog";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <SectionWrapper className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-carbon-teal">
              From the Blog
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium text-soil-black sm:text-4xl">
              Latest Posts
            </h2>
          </div>
          <Button
            href="/blog"
            variant="outline"
            className="!border-soil-black/20 !text-soil-black hover:!border-growth-green hover:!text-growth-green"
          >
            Read all posts
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full !border-black/10 !bg-white">
                <Badge
                  tone="teal"
                  className="!bg-growth-green/10 !text-growth-green !border-growth-green/30"
                >
                  {categoryLabels[post.category]}
                </Badge>
                <p className="mt-4 font-display text-lg font-semibold text-soil-black">{post.title}</p>
                <p className="mt-2 line-clamp-3 text-sm text-text-muted">{post.excerpt}</p>
                <p className="mt-4 text-xs text-text-muted">{post.readTime}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
