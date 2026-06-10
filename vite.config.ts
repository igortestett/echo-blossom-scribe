// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const REPO_NAME = "echo-blossom-scribe";
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const defaultGithubUrl = `https://igortestett.github.io/${REPO_NAME}`;
const siteOrigin = (process.env.VITE_SITE_URL || defaultGithubUrl).replace(/\/$/, "");
// Com domínio próprio o site fica na raiz (/). No github.io/repo-name usa subpasta.
const siteBasePath =
  isGitHubPages && siteOrigin.includes("github.io") ? `/${REPO_NAME}` : "";

export default defineConfig({
  vite: {
    base: siteBasePath ? `${siteBasePath}/` : "/",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    router: {
      basepath: siteBasePath || undefined,
    },
    prerender: {
      enabled: isGitHubPages,
    },
    spa: {
      // Domínio próprio: todas as rotas são pré-renderizadas na raiz — shell SPA desnecessário.
      // github.io/repo: shell em / e home em /repo-name/.
      enabled: isGitHubPages && !!siteBasePath,
    },
    sitemap: {
      enabled: isGitHubPages,
      host: siteOrigin,
    },
  },
});
