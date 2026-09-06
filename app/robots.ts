import type { MetadataRoute } from "next";

import { ROBOTS_DISALLOWED_BOTS } from "@/utils/aiCrawlers";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Search engines: index the site, never the resume.
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // AI crawlers: nothing at all.
      {
        userAgent: [...ROBOTS_DISALLOWED_BOTS],
        disallow: "/",
      },
    ],
  };
}
