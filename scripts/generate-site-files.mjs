import { spawnSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { getSiteConfig } from "./site-config.mjs";

const SITEMAP_LANGUAGES = ["pt", "en", "es"];

function getApexDomain(siteUrl, customDomain) {
  if (customDomain) return customDomain;
  return new URL(siteUrl).hostname;
}

function getSiteUrlForLanguage(lang, apexDomain) {
  if (lang === "pt") return `https://${apexDomain}`;
  return `https://${lang}.${apexDomain}`;
}

const { siteUrl, customDomain } = getSiteConfig();
const outputDir = join(process.cwd(), "dist/client");
const apexDomain = getApexDomain(siteUrl, customDomain);

mkdirSync(outputDir, { recursive: true });

const sitemapLines = SITEMAP_LANGUAGES.map(
  (lang) => `Sitemap: ${getSiteUrlForLanguage(lang, apexDomain)}/sitemap.xml`,
).join("\n");

writeFileSync(
  join(outputDir, "robots.txt"),
  `User-agent: *
Allow: /

${sitemapLines}
`,
  "utf8",
);

if (customDomain) {
  writeFileSync(join(outputDir, "CNAME"), `${customDomain}\n`, "utf8");
  console.log(`CNAME gerado para ${customDomain}`);
}

const clientId = process.env.VITE_ADSENSE_CLIENT_ID?.trim();
if (clientId) {
  const publisherMatch = /^ca-pub-(\d+)$/i.exec(clientId);
  if (publisherMatch) {
    writeFileSync(
      join(outputDir, "ads.txt"),
      `google.com, pub-${publisherMatch[1]}, DIRECT, f08c47fec0942fa0\n`,
      "utf8",
    );
    console.log("ads.txt gerado com sucesso.");
  } else {
    console.warn("VITE_ADSENSE_CLIENT_ID inválido — ads.txt não foi gerado.");
  }
} else {
  console.warn("VITE_ADSENSE_CLIENT_ID não definido — ads.txt não foi gerado.");
}

const sitemapResult = spawnSync(
  "node",
  ["--experimental-strip-types", join(process.cwd(), "scripts/write-sitemaps.mjs"), outputDir, apexDomain],
  { stdio: "inherit" },
);

if (sitemapResult.status !== 0) {
  console.error("Falha ao gerar sitemaps multilíngues.");
  process.exit(sitemapResult.status ?? 1);
}

const indexPath = join(outputDir, "index.html");
const shellPath = join(outputDir, "_shell.html");
const notFoundPath = join(outputDir, "404.html");
const source = existsSync(indexPath) ? indexPath : shellPath;

if (!existsSync(source)) {
  console.error("Nenhum HTML de entrada encontrado em dist/client.");
  process.exit(1);
}

copyFileSync(source, notFoundPath);
console.log(`404.html gerado a partir de ${source}`);
