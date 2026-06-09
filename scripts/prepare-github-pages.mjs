import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const outputDir = join(process.cwd(), "dist/client");
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
