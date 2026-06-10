import { getStaticStoriesForLanguage, type StoryLang, type StoryRecord } from "./stories.data";
import { coverFor, type Story } from "./stories";

function toStory(record: StoryRecord): Story {
  return {
    slug: record.slug,
    title: record.title,
    excerpt: record.excerpt,
    category: record.category,
    categorySlug: record.category_slug,
    body: record.body,
    featured: record.featured,
    cover: coverFor(record.slug),
  };
}

function sortStories(rows: StoryRecord[], lang: StoryLang): StoryRecord[] {
  return [...rows].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    if (a.sort_order !== b.sort_order) return a.sort_order - b.sort_order;
    const locale = lang === "pt" ? "pt-BR" : lang === "es" ? "es" : "en";
    return a.title.localeCompare(b.title, locale);
  });
}

function storiesForLanguage(lang: StoryLang): Story[] {
  return sortStories(getStaticStoriesForLanguage(lang), lang).map(toStory);
}

export function listStories(lang: StoryLang = "pt"): Story[] {
  return storiesForLanguage(lang);
}

export function getStory(
  slug: string,
  lang: StoryLang = "pt",
): { story: Story | null; related: Story[] } {
  const stories = storiesForLanguage(lang);
  const story = stories.find((item) => item.slug === slug) ?? null;
  if (!story) return { story: null, related: [] };
  const related = stories.filter((item) => item.slug !== slug).slice(0, 3);
  return { story, related };
}

export function listByCategory(categorySlug: string, lang: StoryLang = "pt"): Story[] {
  return storiesForLanguage(lang).filter((item) => item.categorySlug === categorySlug);
}

export function listStorySlugs(lang: StoryLang = "pt"): string[] {
  return getStaticStoriesForLanguage(lang).map((story) => story.slug);
}
