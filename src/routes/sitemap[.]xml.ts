import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { listStorySlugs } from "@/lib/stories.functions";

import { getSiteUrl } from "@/lib/site";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "daily";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        let slugs: string[] = [];
        try {
          slugs = await listStorySlugs();
        } catch {
          slugs = [];
        }
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/sobre", changefreq: "monthly", priority: "0.6" },
          { path: "/contato", changefreq: "monthly", priority: "0.5" },
          { path: "/privacidade", changefreq: "yearly", priority: "0.4" },
          { path: "/termos", changefreq: "yearly", priority: "0.4" },
          ...slugs.map((slug) => ({
            path: `/historia/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
        ];

        const baseUrl = getSiteUrl();
        const urls = entries
          .map(
            (e) =>
              `  <url>\n    <loc>${baseUrl}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});