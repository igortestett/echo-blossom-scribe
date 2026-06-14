import * as orquestra from "./a-orquestra-dos-ventos";
import * as mares from "./o-arquivo-das-mares-baixas";
import * as sala from "./sala-de-espera-do-mundo";
import * as muralhas from "./as-muralhas-de-sal";
import * as cafe from "./o-cafe-da-meia-luz";

type StoryRecordInput = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  category_slug: string;
  body: string[];
  featured: boolean;
  sort_order: number;
};

type StoryContentModule = {
  meta: {
    slug: string;
    sort_order: number;
    category_slug: string;
    featured: boolean;
    titlePt: string;
    titleEn: string;
    titleEs: string;
    excerptPt: string;
    excerptEn: string;
    excerptEs: string;
    categoryPt: string;
    categoryEn: string;
    categoryEs: string;
  };
  bodyPt: string[];
  bodyEn: string[];
  bodyEs: string[];
};

const modules: StoryContentModule[] = [orquestra, mares, sala, muralhas, cafe];

function toPt(m: StoryContentModule): StoryRecordInput {
  const { meta } = m;
  return {
    slug: meta.slug,
    title: meta.titlePt,
    excerpt: meta.excerptPt,
    category: meta.categoryPt,
    category_slug: meta.category_slug,
    body: m.bodyPt,
    featured: meta.featured,
    sort_order: meta.sort_order,
  };
}

function toEn(m: StoryContentModule): StoryRecordInput {
  const { meta } = m;
  return {
    slug: meta.slug,
    title: meta.titleEn,
    excerpt: meta.excerptEn,
    category: meta.categoryEn,
    category_slug: meta.category_slug,
    body: m.bodyEn,
    featured: meta.featured,
    sort_order: meta.sort_order,
  };
}

function toEs(m: StoryContentModule): StoryRecordInput {
  const { meta } = m;
  return {
    slug: meta.slug,
    title: meta.titleEs,
    excerpt: meta.excerptEs,
    category: meta.categoryEs,
    category_slug: meta.category_slug,
    body: m.bodyEs,
    featured: meta.featured,
    sort_order: meta.sort_order,
  };
}

export const NEW_STORIES_PT: StoryRecordInput[] = modules.map(toPt);
export const NEW_STORIES_EN: StoryRecordInput[] = modules.map(toEn);
export const NEW_STORIES_ES: StoryRecordInput[] = modules.map(toEs);
