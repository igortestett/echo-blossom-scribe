import type { Language } from "./i18n";
import { getLanguageFromHost } from "./i18n";
import { getStaticStoriesForLanguage } from "./stories.data";

export interface SitemapEntry {
  path: string;
  changefreq: "weekly" | "monthly" | "daily" | "yearly";
  priority: string;
}

const STATIC_PAGES: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/sobre", changefreq: "monthly", priority: "0.6" },
  { path: "/contato", changefreq: "monthly", priority: "0.5" },
  { path: "/privacidade", changefreq: "yearly", priority: "0.4" },
  { path: "/termos", changefreq: "yearly", priority: "0.4" },
];

export const SITEMAP_LANGUAGES: Language[] = ["pt", "en", "es"];

export function getApexDomainFromUrl(siteUrl: string): string {
  return new URL(siteUrl).hostname;
}

export function getSiteUrlForLanguage(lang: Language, apexDomain: string): string {
  if (lang === "pt") return `https://${apexDomain}`;
  return `https://${lang}.${apexDomain}`;
}

export function getSitemapEntries(lang: Language): SitemapEntry[] {
  const slugs = getStaticStoriesForLanguage(lang).map((story) => story.slug);
  return [
    ...STATIC_PAGES,
    ...slugs.map((slug) => ({
      path: `/historia/${slug}`,
      changefreq: "monthly" as const,
      priority: "0.8",
    })),
  ];
}

export function renderSitemapXml(lang: Language, apexDomain: string): string {
  const baseUrl = getSiteUrlForLanguage(lang, apexDomain).replace(/\/$/, "");
  const entries = getSitemapEntries(lang);
  const urls = entries
    .map(
      (entry) =>
        `  <url>\n    <loc>${baseUrl}${entry.path}</loc>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

export function renderSitemapIndex(apexDomain: string): string {
  const items = SITEMAP_LANGUAGES.map(
    (lang) =>
      `  <sitemap>\n    <loc>${getSiteUrlForLanguage(lang, apexDomain)}/sitemap-${lang}.xml</loc>\n  </sitemap>`,
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>`;
}

export function resolveSitemapLanguage(request: Request, apexDomain: string): Language {
  const host = request.headers.get("host") ?? request.headers.get("x-forwarded-host") ?? apexDomain;
  return getLanguageFromHost(host);
}
