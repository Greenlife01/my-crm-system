import Link from "next/link";
import { getAllPosts, categoryLabels } from "@/lib/blog";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <SectionWrapper className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-green-mid">
              From the Blog
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium text-text-dark sm:text-4xl">
              Latest Posts
            </h2>
          </div>
          <Button href="/blog" variant="outline">
            Read all posts
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full">
                <Badge tone="teal">{categoryLabels[post.category]}</Badge>
                <p className="mt-4 font-display text-lg font-semibold text-text-dark">{post.title}</p>
                <p className="mt-2 line-clamp-3 text-sm text-text-mid">{post.excerpt}</p>
                <p className="mt-4 text-xs text-text-muted">{post.readTime}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
