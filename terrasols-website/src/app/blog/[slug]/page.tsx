import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { UserRound } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import ShareButtons from "@/components/blog/ShareButtons";
import { mdxComponents } from "@/components/blog/mdx-components";
import { getAllPosts, getPostBySlug, categoryLabels } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  const relatedFallback = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 3);
  const relatedPosts = related.length > 0 ? related : relatedFallback;

  return (
    <>
      <SectionWrapper className="border-b border-border-subtle bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Badge tone="teal">{categoryLabels[post.category]}</Badge>
          <h1 className="mt-5 font-display text-3xl font-medium text-text-dark sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-text-muted">
            {post.author} &middot; {post.readTime} &middot;{" "}
            {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-cream py-20">
        <article className="mx-auto max-w-3xl px-6 lg:px-8">
          <MDXRemote source={post.content} components={mdxComponents} />

          <Card className="mt-16 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-primary/15 text-green-primary">
              <UserRound className="h-6 w-6" />
            </div>
            <div>
              <p className="font-display font-semibold text-text-dark">{post.author}</p>
              <p className="text-sm text-text-muted">Terrasols Solutions Private Limited</p>
            </div>
          </Card>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm font-medium text-text-mid">Share this post</p>
            <ShareButtons title={post.title} />
          </div>
        </article>
      </SectionWrapper>

      {relatedPosts.length > 0 && (
        <SectionWrapper className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="font-display text-2xl font-medium text-text-dark">Related Posts</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}>
                  <Card className="h-full">
                    <Badge tone="teal">{categoryLabels[p.category]}</Badge>
                    <p className="mt-4 font-display font-semibold text-text-dark">{p.title}</p>
                    <p className="mt-2 line-clamp-2 text-sm text-text-muted">{p.excerpt}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}
    </>
  );
}
