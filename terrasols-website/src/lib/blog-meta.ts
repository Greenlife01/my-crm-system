export type BlogCategory = "science" | "policy" | "farmer-stories" | "founder-updates";

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  category: BlogCategory;
  readTime: string;
  excerpt: string;
  coverImage: string;
  author: string;
}

export const categoryLabels: Record<BlogCategory, string> = {
  science: "Science",
  policy: "Policy",
  "farmer-stories": "Farmer Stories",
  "founder-updates": "Founder Updates",
};
