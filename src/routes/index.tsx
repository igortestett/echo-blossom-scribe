import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdSlot } from "@/components/AdSlot";
import type { Story } from "@/lib/stories";
import { listStories } from "@/lib/stories.functions";

export const Route = createFileRoute("/")({
  loader: () => listStories(),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen grid place-items-center p-8 text-center">
      <div>
        <h1 className="font-serif text-3xl mb-4">Não foi possível carregar as histórias</h1>
        <p className="text-ink/60 mb-6 text-sm">{error.message}</p>
        <button onClick={reset} className="text-accent underline">Tentar novamente</button>
      </div>
    </div>
  ),
  notFoundComponent: () => <div className="p-8 text-center">Nada por aqui ainda.</div>,
  head: () => ({
    meta: [
      { title: "Contos & Crônicas — Histórias para ler com calma" },
      {
        name: "description",
        content:
          "Um refúgio digital para amantes da palavra escrita. Contos, crônicas, memórias e ensaios em português.",
      },
      { property: "og:title", content: "Contos & Crônicas" },
      {
        property: "og:description",
        content: "Histórias que merecem ser lidas com calma.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const stories: Story[] = Route.useLoaderData();
  if (!stories || stories.length === 0) {
    return (
      <div className="min-h-screen bg-paper text-ink font-sans">
        <SiteHeader />
        <main className="max-w-2xl mx-auto px-6 py-32 text-center">
          <h1 className="font-serif text-4xl mb-4">Em breve</h1>
          <p className="text-ink/60">Ainda não há histórias publicadas.</p>
        </main>
        <SiteFooter />
      </div>
    );
  }
  const featured = stories.find((s: Story) => s.featured) ?? stories[0];
  const rest = stories.filter((s: Story) => s.slug !== featured.slug);

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-accent/10">
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Featured */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <span className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block">
              Destaque da Semana
            </span>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6 text-balance">
              <Link to="/historia/$slug" params={{ slug: featured.slug }} className="hover:text-accent transition-colors">
                {featured.title}
              </Link>
            </h1>
            <p className="text-lg text-ink/70 leading-relaxed mb-8 text-pretty">
              {featured.excerpt}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Link to="/historia/$slug" params={{ slug: featured.slug }}>
              <img
                src={featured.cover}
                alt={featured.title}
                width={1200}
                height={1200}
                className="w-full aspect-square object-cover rounded-sm outline-1 -outline-offset-1 outline-black/5"
              />
            </Link>
          </div>
        </section>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
          {rest.map((s: Story) => (
            <StoryCard key={s.slug} story={s} />
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

function StoryCard({ story }: { story: Story }) {
  return (
    <article className="group">
      <Link to="/historia/$slug" params={{ slug: story.slug }} className="block">
        <img
          src={story.cover}
          alt={story.title}
          width={800}
          height={600}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover rounded-sm outline-1 -outline-offset-1 outline-black/5 mb-6"
        />
        <span className="text-xs font-semibold text-accent uppercase tracking-widest">
          {story.category}
        </span>
        <h3 className="font-serif text-2xl mt-3 mb-4 group-hover:underline decoration-accent/30 text-balance">
          {story.title}
        </h3>
        <p className="text-sm text-ink/60 leading-relaxed line-clamp-3">{story.excerpt}</p>
      </Link>
    </article>
  );
}
