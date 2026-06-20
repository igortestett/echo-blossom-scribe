import {
  ALL_STORIES_PT,
  ALL_STORIES_EN,
  ALL_STORIES_ES,
} from "./stories-content/index.ts";

export type StoryLang = "pt" | "en" | "es";

export type StoryRecord = {
  /** Idioma editorial da história (conteúdo independente por idioma). */
  lang: StoryLang;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  category_slug: string;
  body: string[];
  featured: boolean;
  sort_order: number;
};

export const STATIC_STORIES_PT = ALL_STORIES_PT;
export const STATIC_STORIES = STATIC_STORIES_PT;

function withLang(
  stories: Omit<StoryRecord, "lang">[],
  lang: StoryLang,
): StoryRecord[] {
  return stories.map((story) => ({ ...story, lang }));
}

const STATIC_STORIES_PT_WITH_LANG = withLang(STATIC_STORIES_PT, "pt");
const STATIC_STORIES_EN_WITH_LANG = withLang(ALL_STORIES_EN, "en");
const STATIC_STORIES_ES_WITH_LANG = withLang(ALL_STORIES_ES, "es");

export function getStaticStoriesForLanguage(lang: StoryLang): StoryRecord[] {
  if (lang === "en") return STATIC_STORIES_EN_WITH_LANG;
  if (lang === "es") return STATIC_STORIES_ES_WITH_LANG;
  return STATIC_STORIES_PT_WITH_LANG;
}
