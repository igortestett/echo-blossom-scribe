import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSql } from "./db.server";
import { STATIC_STORIES, type StoryRecord } from "./stories.data";
import { coverFor, type Story } from "./stories";

type Row = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  category_slug: string;
  body: string[];
  featured: boolean;
};

function toStory(r: Row): Story {
  return {
    slug: r.slug,
    title: r.title,
    excerpt: r.excerpt,
    category: r.category,
    categorySlug: r.category_slug,
    body: r.body,
    featured: r.featured,
    cover: coverFor(r.slug),
  };
}

function useStaticStories(): boolean {
  return !process.env.DATABASE_URL;
}

function sortStories(rows: StoryRecord[]): StoryRecord[] {
  return [...rows].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    if (a.sort_order !== b.sort_order) return a.sort_order - b.sort_order;
    return a.title.localeCompare(b.title, "pt-BR");
  });
}

function staticStories(): Story[] {
  return sortStories(STATIC_STORIES).map(toStory);
}

export const listStories = createServerFn({ method: "GET" }).handler(
  async (): Promise<Story[]> => {
    if (useStaticStories()) return staticStories();

    const sql = getSql();
    const rows = await sql<Row[]>`
      SELECT slug, title, excerpt, category, category_slug, body, featured
      FROM stories
      ORDER BY featured DESC, sort_order ASC, created_at DESC
    `;
    return rows.map(toStory);
  },
);

export const getStory = createServerFn({ method: "GET" })
  .inputValidator((data) => z.object({ slug: z.string().min(1).max(200) }).parse(data))
  .handler(async ({ data }): Promise<{ story: Story | null; related: Story[] }> => {
    if (useStaticStories()) {
      const stories = staticStories();
      const story = stories.find((item) => item.slug === data.slug) ?? null;
      if (!story) return { story: null, related: [] };
      const related = stories.filter((item) => item.slug !== data.slug).slice(0, 3);
      return { story, related };
    }

    const sql = getSql();
    const rows = await sql<Row[]>`
      SELECT slug, title, excerpt, category, category_slug, body, featured
      FROM stories WHERE slug = ${data.slug} LIMIT 1
    `;
    if (rows.length === 0) return { story: null, related: [] };
    const related = await sql<Row[]>`
      SELECT slug, title, excerpt, category, category_slug, body, featured
      FROM stories WHERE slug <> ${data.slug}
      ORDER BY featured DESC, sort_order ASC, created_at DESC LIMIT 3
    `;
    return { story: toStory(rows[0]), related: related.map(toStory) };
  });

export const listByCategory = createServerFn({ method: "GET" })
  .inputValidator((data) => z.object({ slug: z.string().min(1).max(100) }).parse(data))
  .handler(async ({ data }): Promise<Story[]> => {
    if (useStaticStories()) {
      return staticStories().filter((item) => item.categorySlug === data.slug);
    }

    const sql = getSql();
    const rows = await sql<Row[]>`
      SELECT slug, title, excerpt, category, category_slug, body, featured
      FROM stories WHERE category_slug = ${data.slug}
      ORDER BY featured DESC, sort_order ASC, created_at DESC
    `;
    return rows.map(toStory);
  });

export const listStorySlugs = createServerFn({ method: "GET" }).handler(
  async (): Promise<string[]> => {
    if (useStaticStories()) {
      return STATIC_STORIES.map((story) => story.slug);
    }

    const sql = getSql();
    const rows = await sql<{ slug: string }[]>`SELECT slug FROM stories`;
    return rows.map((r) => r.slug);
  },
);
