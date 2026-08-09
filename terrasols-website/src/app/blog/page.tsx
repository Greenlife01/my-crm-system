import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import BlogListClient from "@/components/blog/BlogListClient";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Science, policy, farmer stories, and founder updates from the Terrasols team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero eyebrow="Blog" title="Notes From the Field and the Lab" />
      <SectionWrapper className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <BlogListClient posts={posts} />
        </div>
      </SectionWrapper>
    </>
  );
}
