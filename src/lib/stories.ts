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
};

export function coverFor(slug: string): string {
  return coversBySlug[slug] ?? featuredLighthouse;
}
