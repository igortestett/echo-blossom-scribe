const REPO_NAME = "echo-blossom-scribe";
const DEFAULT_GITHUB_PAGES_URL = `https://igortestett.github.io/${REPO_NAME}`;

export function getSiteConfig() {
  const isGitHubPages = process.env.GITHUB_PAGES === "true";
  const siteUrl = (process.env.VITE_SITE_URL || DEFAULT_GITHUB_PAGES_URL).replace(/\/$/, "");
  const isCustomDomain = isGitHubPages && !siteUrl.includes("github.io");
  const basePath = isGitHubPages && !isCustomDomain ? `/${REPO_NAME}` : "";
  const customDomain =
    process.env.CUSTOM_DOMAIN?.trim() ||
    (isCustomDomain ? new URL(siteUrl).hostname : "");

  return {
    repoName: REPO_NAME,
    siteUrl,
    basePath,
    isCustomDomain,
    customDomain,
    isGitHubPages,
    defaultGithubPagesUrl: DEFAULT_GITHUB_PAGES_URL,
  };
}
