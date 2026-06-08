import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSql } from "./db.server";
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

export const listStories = createServerFn({ method: "GET" }).handler(
  async (): Promise<Story[]> => {
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
    const sql = getSql();
    const rows = await sql<{ slug: string }[]>`SELECT slug FROM stories`;
    return rows.map((r) => r.slug);
  },
);