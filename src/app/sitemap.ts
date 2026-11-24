import type { MetadataRoute } from "next";
import { absoluteSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteSiteUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteSiteUrl("/aboutnexora"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
