import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdSlot } from "@/components/AdSlot";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Contos & Crônicas" },
      {
        name: "description",
        content:
          "Sobre o Contos & Crônicas: um refúgio digital para amantes da palavra escrita.",
      },
      { property: "og:title", content: "Sobre — Contos & Crônicas" },
      {
        property: "og:description",
        content: "Um refúgio digital para amantes da palavra escrita.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <SiteHeader />
      <main className="max-w-2xl mx-auto px-6 py-20">
        <span className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block">
          Sobre
        </span>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-10 text-balance">
          Histórias que merecem ser lidas com calma.
        </h1>
        <div className="font-serif text-lg leading-[1.85] text-ink/80 space-y-6">
          <p>
            O Contos & Crônicas nasceu de uma vontade simples: dar tempo às palavras
            num mundo que insiste em consumi-las depressa.
          </p>
          <p>
            Aqui você encontra ficção curta, crônicas urbanas, memórias e ensaios —
            todos escritos por autores que acreditam que uma boa história é, antes de
            tudo, um ato de paciência.
          </p>
          <p>
            Se você quiser colaborar, escreva para{" "}
            <a href="mailto:redacao@contoseronicas.com" className="text-accent underline">
              redacao@contoseronicas.com
            </a>
            .
          </p>
        </div>

        <div className="mt-24">
          <AdSlot variant="leaderboard" />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}