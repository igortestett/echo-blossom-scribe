import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdSlot } from "@/components/AdSlot";
import { getRelatedStories, getStoryBySlug, stories } from "@/lib/stories";

export const Route = createFileRoute("/historia/$slug")({
  loader: ({ params }) => {
    const story = getStoryBySlug(params.slug);
    if (!story) throw notFound();
    return { story, related: getRelatedStories(params.slug) };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.story;
    if (!s) {
      return { meta: [{ title: "História não encontrada — Contos & Crônicas" }] };
    }
    return {
      meta: [
        { title: `${s.title} — Contos & Crônicas` },
        { name: "description", content: s.excerpt },
        { name: "author", content: s.author },
        { property: "og:title", content: s.title },
        { property: "og:description", content: s.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: s.cover },
        { name: "twitter:image", content: s.cover },
      ],
    };
  },
  notFoundComponent: NotFoundStory,
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
  component: StoryPage,
});

function NotFoundStory() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <SiteHeader />
      <main className="max-w-2xl mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-5xl mb-6">História não encontrada</h1>
        <p className="text-ink/60 mb-8">
          Talvez ela ainda não tenha sido escrita. Que tal voltar ao início?
        </p>
        <Link to="/" className="text-accent uppercase text-xs font-bold tracking-widest">
          Voltar ao início
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function StoryPage() {
  const { story, related } = Route.useLoaderData();
  const midpoint = Math.ceil(story.body.length / 2);
  const firstHalf = story.body.slice(0, midpoint);
  const secondHalf = story.body.slice(midpoint);

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-accent/10">
      <SiteHeader />

      <article>
        {/* Hero */}
        <header className="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center">
          <Link
            to="/"
            className="text-xs font-semibold text-accent uppercase tracking-widest"
          >
            {story.category}
          </Link>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight mt-6 mb-8 text-balance">
            {story.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-ink/60">
            <span className="font-semibold text-ink">{story.author}</span>
            <span className="text-ink/30">•</span>
            <span>{story.date}</span>
            <span className="text-ink/30">•</span>
            <span>{story.readingTime}</span>
          </div>
        </header>

        {/* Cover */}
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <img
            src={story.cover}
            alt={story.title}
            width={1200}
            height={800}
            className="w-full aspect-[3/2] object-cover rounded-sm outline-1 -outline-offset-1 outline-black/5"
          />
        </div>

        {/* Body */}
        <div className="max-w-2xl mx-auto px-6 font-serif text-lg leading-[1.85] text-ink/90 space-y-7">
          {firstHalf.map((p, i) => (
            <p key={i} className={i === 0 ? "first-letter:font-black first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9] first-letter:text-accent" : ""}>
              {p}
            </p>
          ))}

          {/* In-Article Ad */}
          <div className="my-12 py-8 border-y border-ink/10 flex justify-center">
            <AdSlot variant="inline" />
          </div>

          {secondHalf.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Author footer */}
        <div className="max-w-2xl mx-auto px-6 mt-20 pt-10 border-t border-ink/10 flex items-center gap-4">
          <div className="size-14 rounded-full bg-stone-200 outline-1 -outline-offset-1 outline-black/5" />
          <div>
            <p className="text-xs uppercase tracking-widest text-ink/40">Escrito por</p>
            <p className="font-serif text-xl">{story.author}</p>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="max-w-6xl mx-auto px-6 mt-32">
        <h2 className="font-serif text-3xl mb-12 italic text-center">Continue lendo</h2>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
          {related.map((s) => (
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
                className="w-full aspect-[4/3] object-cover rounded-sm outline-1 -outline-offset-1 outline-black/5 mb-4"
              />
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                {s.category}
              </span>
              <h3 className="font-serif text-xl mt-2 group-hover:underline decoration-accent/30">
                {s.title}
              </h3>
            </Link>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-ink/5">
          <AdSlot variant="large" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

// Keep import referenced for build (avoid tree-shake surprises in dev)
void stories;