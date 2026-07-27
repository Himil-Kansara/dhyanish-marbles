import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://dhyanish-marbles.openai.site", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
