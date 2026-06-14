import featuredLighthouse from "@/assets/featured-lighthouse.jpg";
import storyTypewriter from "@/assets/story-typewriter.jpg";
import storyRain from "@/assets/story-rain.jpg";
import storyBicycle from "@/assets/story-bicycle.jpg";
import storyClock from "@/assets/story-clock.jpg";
import storyLibrary from "@/assets/story-library.jpg";

export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  cover: string;
  body: string[];
  featured?: boolean;
};

// Cover images live in code, keyed by slug.
// Add an entry here when you publish a new story; falls back to a generic cover otherwise.
export const coversBySlug: Record<string, string> = {
  "onde-o-mar-encontra-o-silencio": featuredLighthouse,
  "a-ultima-carta-de-lisboa": storyTypewriter,
  "a-geometria-do-caos-urbano": storyRain,
  "caminhos-de-lavanda": storyBicycle,
  "o-relojoeiro-do-tempo": storyClock,
  "bibliotecas-de-almas": storyLibrary,
  "o-ultimo-onibus-da-noite": storyRain,
  "heranca-de-papel": storyTypewriter,
  "a-varanda-das-cinco": storyClock,
  "trilha-alem-do-por-do-sol": storyBicycle,
  "o-jardim-das-vozes-antigas": storyLibrary,
  "neblina-no-porto": featuredLighthouse,
  "a-estacao-dos-ecos": storyClock,
  "o-atelier-das-luas": featuredLighthouse,
  "cartografia-do-cheiro": storyLibrary,
  "o-telescopio-de-vidro": featuredLighthouse,
  "correspondencia-de-chuva": storyRain,
};

export function coverFor(slug: string): string {
  return coversBySlug[slug] ?? featuredLighthouse;
}
