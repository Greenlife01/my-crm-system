"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { categoryLabels, type BlogCategory, type BlogPostMeta } from "@/lib/blog-meta";

const filters: Array<{ id: BlogCategory | "all"; label: string }> = [
  { id: "all", label: "All" },
  { id: "science", label: "Science" },
  { id: "policy", label: "Policy" },
  { id: "farmer-stories", label: "Farmer Stories" },
  { id: "founder-updates", label: "Founder Updates" },
];

export default function BlogListClient({ posts }: { posts: BlogPostMeta[] }) {
  const [active, setActive] = useState<BlogCategory | "all">("all");
  const [featured, ...rest] = posts;
  const filtered = active === "all" ? rest : rest.filter((p) => p.category === active);

  return (
    <div>
      {featured && (
        <Link href={`/blog/${featured.slug}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14 overflow-hidden rounded-2xl border border-border-subtle bg-white p-8 transition-colors hover:border-green-bright/40 md:p-12"
          >
            <Badge tone="teal">{categoryLabels[featured.category]}</Badge>
            <p className="mt-4 font-display text-2xl font-medium text-text-dark md:text-3xl">
              {featured.title}
            </p>
            <p className="mt-3 max-w-2xl text-text-muted">{featured.excerpt}</p>
            <p className="mt-4 text-xs text-text-muted">
              {featured.author} &middot; {featured.readTime}
            </p>
          </motion.div>
        </Link>
      )}

      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              active === f.id
                ? "border-green-primary bg-green-primary/15 text-green-mid"
                : "border-border-subtle text-text-muted hover:text-text-dark"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {filtered.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full">
              <Badge tone="teal">{categoryLabels[post.category]}</Badge>
              <p className="mt-4 font-display text-lg font-semibold text-text-dark">{post.title}</p>
              <p className="mt-2 line-clamp-3 text-sm text-text-muted">{post.excerpt}</p>
              <p className="mt-4 text-xs text-text-muted">{post.readTime}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
