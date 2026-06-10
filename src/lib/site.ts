export const SITE_NAME = "Contos & Crônicas";

export const SITE_TAGLINE = "Histórias para ler com calma";

export const SITE_DESCRIPTION =
  "Um refúgio digital para amantes da palavra escrita. Contos, crônicas, memórias e ensaios em português.";

export const CONTACT_EMAIL = "redacao@dramatica.blog";

export function getSiteUrl(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL as string | undefined;
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  if (typeof window !== "undefined") return window.location.origin;
  return "https://dramatica.blog";
}
