import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPostMeta } from "@/lib/blog-meta";

export type { BlogCategory, BlogPostMeta } from "@/lib/blog-meta";
export { categoryLabels } from "@/lib/blog-meta";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      readTime: data.readTime ?? readingTime(content).text,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      author: data.author,
      content,
    } satisfies BlogPost;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
