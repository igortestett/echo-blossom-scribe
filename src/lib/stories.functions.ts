import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getStaticStoriesForLanguage, type StoryRecord } from "./stories.data";
import { coverFor, type Story } from "./stories";

const langSchema = z.enum(["en", "es", "pt"]);

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

function sortStories(rows: StoryRecord[], lang: z.infer<typeof langSchema>): StoryRecord[] {
  return [...rows].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    if (a.sort_order !== b.sort_order) return a.sort_order - b.sort_order;
    const locale = lang === "pt" ? "pt-BR" : lang === "es" ? "es" : "en";
    return a.title.localeCompare(b.title, locale);
  });
}

function storiesForLanguage(lang: z.infer<typeof langSchema>): Story[] {
  return sortStories(getStaticStoriesForLanguage(lang), lang).map(toStory);
}

export const listStories = createServerFn({ method: "GET" })
  .inputValidator((data) => z.object({ lang: langSchema.optional() }).optional().parse(data))
  .handler(async ({ data }): Promise<Story[]> => {
    const lang = data?.lang ?? "pt";
    return storiesForLanguage(lang);
  });

export const getStory = createServerFn({ method: "GET" })
  .inputValidator((data) =>
    z
      .object({
        slug: z.string().min(1).max(200),
        lang: langSchema.optional(),
      })
      .parse(data),
  )
  .handler(async ({ data }): Promise<{ story: Story | null; related: Story[] }> => {
    const lang = data.lang ?? "pt";
    const stories = storiesForLanguage(lang);
    const story = stories.find((item) => item.slug === data.slug) ?? null;
    if (!story) return { story: null, related: [] };
    const related = stories.filter((item) => item.slug !== data.slug).slice(0, 3);
    return { story, related };
  });

export const listByCategory = createServerFn({ method: "GET" })
  .inputValidator((data) =>
    z
      .object({
        slug: z.string().min(1).max(100),
        lang: langSchema.optional(),
      })
      .parse(data),
  )
  .handler(async ({ data }): Promise<Story[]> => {
    const lang = data.lang ?? "pt";
    return storiesForLanguage(lang).filter((item) => item.categorySlug === data.slug);
  });

export const listStorySlugs = createServerFn({ method: "GET" })
  .inputValidator((data) => z.object({ lang: langSchema.optional() }).optional().parse(data))
  .handler(async ({ data }): Promise<string[]> => {
    const lang = data?.lang ?? "pt";
    return getStaticStoriesForLanguage(lang).map((story) => story.slug);
  });
