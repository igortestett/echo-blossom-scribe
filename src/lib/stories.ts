import coverOndeOMar from "@/assets/covers/cover-onde-o-mar-encontra-o-silencio.jpg";
import coverUltimaCarta from "@/assets/covers/cover-a-ultima-carta-de-lisboa.jpg";
import coverGeometria from "@/assets/covers/cover-a-geometria-do-caos-urbano.jpg";
import coverLavanda from "@/assets/covers/cover-caminhos-de-lavanda.jpg";
import coverRelojoeiro from "@/assets/covers/cover-o-relojoeiro-do-tempo.jpg";
import coverBibliotecas from "@/assets/covers/cover-bibliotecas-de-almas.jpg";
import coverOnibus from "@/assets/covers/cover-o-ultimo-onibus-da-noite.jpg";
import coverHeranca from "@/assets/covers/cover-heranca-de-papel.jpg";
import coverVaranda from "@/assets/covers/cover-a-varanda-das-cinco.jpg";
import coverTrilha from "@/assets/covers/cover-trilha-alem-do-por-do-sol.jpg";
import coverJardim from "@/assets/covers/cover-o-jardim-das-vozes-antigas.jpg";
import coverNeblina from "@/assets/covers/cover-neblina-no-porto.jpg";
import coverEstacao from "@/assets/covers/cover-a-estacao-dos-ecos.jpg";
import coverAtelier from "@/assets/covers/cover-o-atelier-das-luas.jpg";
import coverCartografia from "@/assets/covers/cover-cartografia-do-cheiro.jpg";
import coverTelescopio from "@/assets/covers/cover-o-telescopio-de-vidro.jpg";
import coverCorrespondencia from "@/assets/covers/cover-correspondencia-de-chuva.jpg";
import coverOrquestra from "@/assets/covers/cover-a-orquestra-dos-ventos.jpg";
import coverMares from "@/assets/covers/cover-o-arquivo-das-mares-baixas.jpg";
import coverSala from "@/assets/covers/cover-sala-de-espera-do-mundo.jpg";
import coverMuralhas from "@/assets/covers/cover-as-muralhas-de-sal.jpg";
import coverCafe from "@/assets/covers/cover-o-cafe-da-meia-luz.jpg";
import coverMapario from "@/assets/covers/cover-o-mapario-das-horas-perdidas.jpg";
import coverLivraria from "@/assets/covers/cover-a-livraria-de-meia-noite.jpg";
import coverBanco from "@/assets/covers/cover-memorias-de-um-banco-de-praca.jpg";
import coverSombras from "@/assets/covers/cover-o-fotografo-das-sombras-longas.jpg";
import coverHotel from "@/assets/covers/cover-cartas-na-gaveta-do-hotel.jpg";
import coverPonte from "@/assets/covers/cover-a-ponte-dos-passos-contados.jpg";
import coverJardineiro from "@/assets/covers/cover-o-jardineiro-de-inverno.jpg";
import coverEstante from "@/assets/covers/cover-a-estante-infinita.jpg";
import { getSiteUrl } from "@/lib/site";

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

// Cover images live in code, keyed by slug — one unique image per story.
export const coversBySlug: Record<string, string> = {
  "onde-o-mar-encontra-o-silencio": coverOndeOMar,
  "a-ultima-carta-de-lisboa": coverUltimaCarta,
  "a-geometria-do-caos-urbano": coverGeometria,
  "caminhos-de-lavanda": coverLavanda,
  "o-relojoeiro-do-tempo": coverRelojoeiro,
  "bibliotecas-de-almas": coverBibliotecas,
  "o-ultimo-onibus-da-noite": coverOnibus,
  "heranca-de-papel": coverHeranca,
  "a-varanda-das-cinco": coverVaranda,
  "trilha-alem-do-por-do-sol": coverTrilha,
  "o-jardim-das-vozes-antigas": coverJardim,
  "neblina-no-porto": coverNeblina,
  "a-estacao-dos-ecos": coverEstacao,
  "o-atelier-das-luas": coverAtelier,
  "cartografia-do-cheiro": coverCartografia,
  "o-telescopio-de-vidro": coverTelescopio,
  "correspondencia-de-chuva": coverCorrespondencia,
  "a-orquestra-dos-ventos": coverOrquestra,
  "o-arquivo-das-mares-baixas": coverMares,
  "sala-de-espera-do-mundo": coverSala,
  "as-muralhas-de-sal": coverMuralhas,
  "o-cafe-da-meia-luz": coverCafe,
  "o-mapario-das-horas-perdidas": coverMapario,
  "a-livraria-de-meia-noite": coverLivraria,
  "memorias-de-um-banco-de-praca": coverBanco,
  "o-fotografo-das-sombras-longas": coverSombras,
  "cartas-na-gaveta-do-hotel": coverHotel,
  "a-ponte-dos-passos-contados": coverPonte,
  "o-jardineiro-de-inverno": coverJardineiro,
  "a-estante-infinita": coverEstante,
};

export function coverFor(slug: string): string {
  return coversBySlug[slug] ?? coverOndeOMar;
}

/** URL absoluta da capa para Open Graph / Twitter Cards. */
export function absoluteCoverUrl(coverPath: string): string {
  if (coverPath.startsWith("http://") || coverPath.startsWith("https://")) {
    return coverPath;
  }
  const base = getSiteUrl().replace(/\/$/, "");
  const path = coverPath.startsWith("/") ? coverPath : `/${coverPath}`;
  return `${base}${path}`;
}
