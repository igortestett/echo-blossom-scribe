import * as s01 from "./onde-o-mar-encontra-o-silencio.ts";
import * as s02 from "./a-ultima-carta-de-lisboa.ts";
import * as s03 from "./a-geometria-do-caos-urbano.ts";
import * as s04 from "./caminhos-de-lavanda.ts";
import * as s05 from "./o-relojoeiro-do-tempo.ts";
import * as s06 from "./bibliotecas-de-almas.ts";
import * as s07 from "./o-ultimo-onibus-da-noite.ts";
import * as s08 from "./heranca-de-papel.ts";
import * as s09 from "./a-varanda-das-cinco.ts";
import * as s10 from "./trilha-alem-do-por-do-sol.ts";
import * as s11 from "./o-jardim-das-vozes-antigas.ts";
import * as s12 from "./neblina-no-porto.ts";
import * as s13 from "./a-estacao-dos-ecos.ts";
import * as s14 from "./o-atelier-das-luas.ts";
import * as s15 from "./cartografia-do-cheiro.ts";
import * as s16 from "./o-telescopio-de-vidro.ts";
import * as s17 from "./correspondencia-de-chuva.ts";
import * as s18 from "./a-orquestra-dos-ventos.ts";
import * as s19 from "./o-arquivo-das-mares-baixas.ts";
import * as s20 from "./sala-de-espera-do-mundo.ts";
import * as s21 from "./as-muralhas-de-sal.ts";
import * as s22 from "./o-cafe-da-meia-luz.ts";
import * as s23 from "./o-mapario-das-horas-perdidas.ts";
import * as s24 from "./a-livraria-de-meia-noite.ts";
import * as s25 from "./memorias-de-um-banco-de-praca.ts";
import * as s26 from "./o-fotografo-das-sombras-longas.ts";
import * as s27 from "./cartas-na-gaveta-do-hotel.ts";
import * as s28 from "./a-ponte-dos-passos-contados.ts";
import * as s29 from "./o-jardineiro-de-inverno.ts";
import * as s30 from "./a-estante-infinita.ts";

export type StoryRecordInput = {
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

const modules: StoryContentModule[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
  s07,
  s08,
  s09,
  s10,
  s11,
  s12,
  s13,
  s14,
  s15,
  s16,
  s17,
  s18,
  s19,
  s20,
  s21,
  s22,
  s23,
  s24,
  s25,
  s26,
  s27,
  s28,
  s29,
  s30,
].sort((a, b) => a.meta.sort_order - b.meta.sort_order);

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

export const ALL_STORIES_PT: StoryRecordInput[] = modules.map(toPt);
export const ALL_STORIES_EN: StoryRecordInput[] = modules.map(toEn);
export const ALL_STORIES_ES: StoryRecordInput[] = modules.map(toEs);

/** @deprecated Use ALL_STORIES_PT */
export const NEW_STORIES_PT = ALL_STORIES_PT;
/** @deprecated Use ALL_STORIES_EN */
export const NEW_STORIES_EN = ALL_STORIES_EN;
/** @deprecated Use ALL_STORIES_ES */
export const NEW_STORIES_ES = ALL_STORIES_ES;
