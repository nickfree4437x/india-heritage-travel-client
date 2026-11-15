
import { MetadataRoute } from "next";

import { festivals } from "@/src/sections/festivals/data/festivalData";
import { blogs } from "@/app/blog/data/blogsData";

const BASE_URL = "https://indiaheritagetravel.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/solo-women-travel`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/customize-your-journey`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/travel-tips-for-india`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/visa-rules-for-india`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/car-rental-india`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const festivalPages: MetadataRoute.Sitemap = festivals.map(
    (festival) => ({
      url: `${BASE_URL}/festivals/${festival.slug}`,
      changeFrequency: "yearly",
      priority: 0.8,
    })
  );

  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const tourPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/tours/ayurveda-journey-tour`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tours/coastal-treasures-mountain-magic-tour`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tours/divine-kashmir-and-exciting-ladakh`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tours/heavenly-kashmir-tour`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tours/heritage-odyssey-tour`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tours/high-passes-road-trip-to-leh-ladakh`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tours/journey-through-heritage-wildlife`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tours/majestic-golden-triangle-tour`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/tours/mystical-north-india-discovery-tour`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tours/rajasthani-heritage-retreat-tour`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/tours/royal-rajasthan-sacred-ganges-tour`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/tours/royal-triangle-odyssey-tour`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/tours/southern-delights-tour`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tours/southern-splendors-tour`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tours/spiti-valley-trek-and-tour`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tours/the-royal-heritage-trail-tour`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/tours/yoga-escapes-tour`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  return [
    ...staticPages,
    ...festivalPages,
    ...blogPages,
    ...tourPages,
  ];
}