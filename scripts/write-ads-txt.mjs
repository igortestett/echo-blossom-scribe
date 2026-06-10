import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export function writeAdsTxt(outputDir) {
  mkdirSync(outputDir, { recursive: true });

  const clientId = process.env.VITE_ADSENSE_CLIENT_ID?.trim();
  if (!clientId) {
    console.warn("VITE_ADSENSE_CLIENT_ID não definido — ads.txt não foi gerado.");
    return false;
  }

  const publisherMatch = /^ca-pub-(\d+)$/i.exec(clientId);
  if (!publisherMatch) {
    console.warn("VITE_ADSENSE_CLIENT_ID inválido — ads.txt não foi gerado.");
    return false;
  }

  const filePath = join(outputDir, "ads.txt");
  writeFileSync(
    filePath,
    `google.com, pub-${publisherMatch[1]}, DIRECT, f08c47fec0942fa0\n`,
    "utf8",
  );
  console.log(`ads.txt gerado em ${filePath}`);
  return true;
}

const isMain = process.argv[1]?.endsWith("write-ads-txt.mjs");
if (isMain) {
  const outputDir = process.argv[2] || join(process.cwd(), "dist/client");
  writeAdsTxt(outputDir);
}
