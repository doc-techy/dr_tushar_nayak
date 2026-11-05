import type { MetadataRoute } from "next";
import { blogArticles, servicesOffered } from "@/data/site-content";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/booking"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/booking/nishtha"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/publications"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/educational-videos"), lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];

  const treatmentRoutes: MetadataRoute.Sitemap = servicesOffered.map((service) => ({
    url: absoluteUrl(`/treatments/${service.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: absoluteUrl(`/blogs/${article.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...treatmentRoutes, ...blogRoutes];
}
