import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdSlot } from "@/components/AdSlot";
import type { Story } from "@/lib/stories";
import { listByCategory } from "@/lib/stories.functions";

export const Route = createFileRoute("/categoria/$slug")({
  loader: async ({ params }): Promise<{ slug: string; items: Story[]; label: string }> => {
    const items = await listByCategory({ data: { slug: params.slug } });
    if (items.length === 0) throw notFound();
    return { slug: params.slug, items, label: items[0].category };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.label ?? "Categoria"} — Contos & Crônicas` },
      {
        name: "description",
        content: `Histórias da categoria ${loaderData?.label ?? ""} no Contos & Crônicas.`,
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <SiteHeader />
      <main className="max-w-2xl mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-5xl mb-6">Categoria vazia</h1>
        <p className="text-ink/60 mb-8">Ainda não há histórias nesta categoria.</p>
        <Link to="/" className="text-accent uppercase text-xs font-bold tracking-widest">
          Voltar ao início
        </Link>
      </main>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen grid place-items-center p-8 text-center">
      <div>
        <h1 className="font-serif text-3xl mb-4">Algo deu errado</h1>
        <button onClick={reset} className="text-accent underline">
          Tentar novamente
        </button>
      </div>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { items, label } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <SiteHeader />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-16 text-center">
          <span className="text-accent font-medium text-sm tracking-widest uppercase mb-3 block">
            Categoria
          </span>
          <h1 className="font-serif text-5xl md:text-6xl">{label}</h1>
        </header>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
          {items.map((s: Story) => (
            <Link
              key={s.slug}
              to="/historia/$slug"
              params={{ slug: s.slug }}
              className="group"
            >
              <img
                src={s.cover}
                alt={s.title}
                width={800}
                height={600}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover rounded-sm outline-1 -outline-offset-1 outline-black/5 mb-6"
              />
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                {s.category}
              </span>
              <h3 className="font-serif text-2xl mt-3 mb-4 group-hover:underline decoration-accent/30">
                {s.title}
              </h3>
              <p className="text-sm text-ink/60 leading-relaxed line-clamp-3">
                {s.excerpt}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-ink/5">
          <AdSlot variant="leaderboard" />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}