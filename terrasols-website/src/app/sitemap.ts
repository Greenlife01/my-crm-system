import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { farmerStories } from "@/lib/farmer-stories";

const BASE_URL = "https://www.terrasols.earth";

const staticRoutes = [
  "",
  "/about",
  "/work",
  "/science",
  "/farmers",
  "/buyers",
  "/blog",
  "/team",
  "/careers",
  "/stories",
  "/partners",
  "/investors",
  "/press",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const storyEntries: MetadataRoute.Sitemap = farmerStories.map((story) => ({
    url: `${BASE_URL}/stories/${story.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...blogEntries, ...storyEntries];
}
