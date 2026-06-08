import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdSlot } from "@/components/AdSlot";
import { stories } from "@/lib/stories";

export const Route = createFileRoute("/")({
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
  const featured = stories.find((s) => s.featured) ?? stories[0];
  const rest = stories.filter((s) => s.slug !== featured.slug);

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-accent/10">
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Top Ad Slot */}
        <AdSlot variant="leaderboard" className="mb-16" />

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
          {rest.slice(0, 2).map((s) => (
            <StoryCard key={s.slug} story={s} />
          ))}

          {/* Ad in grid */}
          <div className="bg-ink/[0.02] border border-ink/5 flex flex-col items-center justify-center p-8">
            <span className="text-[9px] uppercase tracking-widest text-ink/30 mb-4">
              Patrocinado
            </span>
            <div className="w-full aspect-[3/4] bg-ink/5 border border-ink/10 flex items-center justify-center">
              <span className="text-xs text-ink/20">AdSense Vertical</span>
            </div>
          </div>

          {rest.slice(2).map((s) => (
            <StoryCard key={s.slug} story={s} />
          ))}
        </div>

        {/* Bottom Ad */}
        <div className="mt-24 pt-12 border-t border-ink/5">
          <AdSlot variant="large" />
        </div>

        {/* Extra Bottom Ad */}
        <div className="mt-16">
          <AdSlot variant="leaderboard" />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function StoryCard({ story }: { story: (typeof stories)[number] }) {
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
