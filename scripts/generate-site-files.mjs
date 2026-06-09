import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = join(process.cwd(), "dist/client");
const siteUrl = (process.env.VITE_SITE_URL || "https://igortestett.github.io/echo-blossom-scribe").replace(
  /\/$/,
  "",
);

mkdirSync(outputDir, { recursive: true });

writeFileSync(
  join(outputDir, "robots.txt"),
  `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
  "utf8",
);

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
