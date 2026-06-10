import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { getStaticStoriesForLanguage } from "../src/lib/stories.data.ts";

const SITEMAP_LANGUAGES = ["pt", "en", "es"];

const STATIC_PAGES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/sobre", changefreq: "monthly", priority: "0.6" },
  { path: "/contato", changefreq: "monthly", priority: "0.5" },
  { path: "/privacidade", changefreq: "yearly", priority: "0.4" },
  { path: "/termos", changefreq: "yearly", priority: "0.4" },
];

function getSiteUrlForLanguage(lang, apexDomain) {
  if (lang === "pt") return `https://${apexDomain}`;
  return `https://${lang}.${apexDomain}`;
}

function getSitemapEntries(lang) {
  const slugs = getStaticStoriesForLanguage(lang).map((story) => story.slug);
  return [
    ...STATIC_PAGES,
    ...slugs.map((slug) => ({
      path: `/historia/${slug}`,
      changefreq: "monthly",
      priority: "0.8",
    })),
  ];
}

function renderSitemapXml(lang, apexDomain) {
  const baseUrl = getSiteUrlForLanguage(lang, apexDomain);
  const urls = getSitemapEntries(lang)
    .map(
      (entry) =>
        `  <url>\n    <loc>${baseUrl}${entry.path}</loc>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

function renderSitemapIndex(apexDomain) {
  const items = SITEMAP_LANGUAGES.map(
    (lang) =>
      `  <sitemap>\n    <loc>${getSiteUrlForLanguage(lang, apexDomain)}/sitemap-${lang}.xml</loc>\n  </sitemap>`,
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>`;
}

const outputDir = process.argv[2];
const apexDomain = process.argv[3];

if (!outputDir || !apexDomain) {
  console.error("Uso: node --experimental-strip-types scripts/write-sitemaps.mjs <outputDir> <apexDomain>");
  process.exit(1);
}

for (const lang of SITEMAP_LANGUAGES) {
  const filename = `sitemap-${lang}.xml`;
  writeFileSync(join(outputDir, filename), renderSitemapXml(lang, apexDomain), "utf8");
  console.log(`Sitemap gerado: ${filename} (${lang})`);
}

writeFileSync(join(outputDir, "sitemap.xml"), renderSitemapIndex(apexDomain), "utf8");
console.log("Sitemap index gerado: sitemap.xml");
