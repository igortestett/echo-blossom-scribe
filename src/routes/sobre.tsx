import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: `Sobre — ${SITE_NAME}` },
      {
        name: "description",
        content:
          "Sobre o Contos & Crônicas: missão editorial, público-alvo e política de conteúdo.",
      },
      { property: "og:title", content: `Sobre — ${SITE_NAME}` },
      {
        property: "og:description",
        content: "Um refúgio digital para amantes da palavra escrita.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <SiteHeader />

      <main className="max-w-2xl mx-auto px-6 py-16 md:py-20">
        <span className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block">
          Sobre
        </span>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-10 text-balance">
          Histórias que merecem ser lidas com calma.
        </h1>
        <div className="font-serif text-lg leading-[1.85] text-ink/80 space-y-6">
          <p>
            O <strong>{SITE_NAME}</strong> nasceu de uma vontade simples: dar tempo às palavras num
            mundo que insiste em consumi-las depressa. Somos um espaço editorial independente
            dedicado à ficção curta, crônicas urbanas, memórias e ensaios em português.
          </p>
          <p>
            Publicamos textos originais, revisados e pensados para leitura pausada — no computador,
            no tablet ou no celular. Cada história é acompanhada de imagens próprias e organizada
            por categorias para facilitar a descoberta.
          </p>

          <h2 className="font-serif text-2xl text-ink mt-10 mb-2">Para quem escrevemos</h2>
          <p>
            Nosso público são leitores que buscam narrativas com profundidade, ritmo e cuidado
            linguístico. Não produzimos notícias do dia nem conteúdo gerado em massa: cada página
            reflete trabalho editorial real.
          </p>

          <h2 className="font-serif text-2xl text-ink mt-10 mb-2">Política editorial</h2>
          <ul className="list-disc pl-5 space-y-2 font-sans text-base">
            <li>Conteúdo 100% em português, com revisão antes da publicação;</li>
            <li>Proibição de plágio, discurso de ódio e conteúdo adulto explícito;</li>
            <li>Transparência sobre publicidade e cookies, conforme nossa política de privacidade;</li>
            <li>Canal aberto para correções e sugestões de leitores.</li>
          </ul>

          <h2 className="font-serif text-2xl text-ink mt-10 mb-2">Colaborações</h2>
          <p>
            Aceitamos textos inéditos de autores independentes. Envie sua proposta para{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent underline">
              {CONTACT_EMAIL}
            </a>{" "}
            com sinopse e amostra de 500 a 1.000 palavras.
          </p>

          <p>
            Para questões legais, privacidade ou publicidade, visite a página de{" "}
            <Link to="/contato" className="text-accent underline">
              Contato
            </Link>{" "}
            ou leia nossa{" "}
            <Link to="/privacidade" className="text-accent underline">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
