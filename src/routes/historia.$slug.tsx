import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdSlot } from "@/components/AdSlot";
import type { Story } from "@/lib/stories";
import { absoluteCoverUrl } from "@/lib/stories";
import { getStory } from "@/lib/stories.loader";
import { useLanguage, translations, getLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/historia/$slug")({
  loader: async ({ params }): Promise<{ story: Story; related: Story[] }> => {
    const lang = getLanguage();
    const { story, related } = getStory(params.slug, lang);
    if (!story) throw notFound();
    return { story, related };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.story;
    const lang = getLanguage();
    const t = translations[lang];
    if (!s) {
      return {
        meta: [
          {
            title: lang === "pt"
              ? "História não encontrada — Contos & Crônicas"
              : lang === "es"
              ? "Historia no encontrada — Cuentos y Crónicas"
              : "Story not found — Tales & Chronicles",
          },
        ],
      };
    }
    return {
      meta: [
        { title: `${s.title} — ${t.siteName}` },
        { name: "description", content: s.excerpt },
        { property: "og:title", content: s.title },
        { property: "og:description", content: s.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: absoluteCoverUrl(s.cover) },
        { name: "twitter:image", content: absoluteCoverUrl(s.cover) },
      ],
    };
  },
  notFoundComponent: NotFoundStory,
  errorComponent: ({ reset }) => {
    const lang = getLanguage();
    const t = translations[lang];
    return (
      <div className="min-h-screen grid place-items-center p-8 text-center bg-paper text-ink">
        <div>
          <h1 className="font-serif text-3xl mb-4">
            {lang === "pt" ? "Algo deu errado" : lang === "es" ? "Algo salió mal" : "Something went wrong"}
          </h1>
          <button onClick={reset} className="text-accent underline">
            {t.tryAgain}
          </button>
        </div>
      </div>
    );
  },
  component: StoryPage,
});

function NotFoundStory() {
  const lang = useLanguage();
  const t = translations[lang];
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <SiteHeader />
      <main className="max-w-2xl mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-5xl mb-6">
          {lang === "pt" ? "História não encontrada" : lang === "es" ? "Historia no encontrada" : "Story not found"}
        </h1>
        <p className="text-ink/60 mb-8">
          {lang === "pt"
            ? "Talvez ela ainda não tenha sido escrita. Que tal voltar ao início?"
            : lang === "es"
            ? "Tal vez aún no haya sido escrita. ¿Qué tal volver al inicio?"
            : "Perhaps it hasn't been written yet. How about returning to the home page?"}
        </p>
        <Link to="/" className="text-accent uppercase text-xs font-bold tracking-widest">
          {t.backToHome}
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function StoryPage() {
  const { story, related } = Route.useLoaderData();
  const lang = useLanguage();
  const t = translations[lang];

  const third = Math.ceil(story.body.length / 3);
  const partOne = story.body.slice(0, third);
  const partTwo = story.body.slice(third, third * 2);
  const partThree = story.body.slice(third * 2);

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-accent/10">
      <SiteHeader />

      <article itemScope itemType="https://schema.org/Article">
        <header className="max-w-3xl mx-auto px-6 pt-12 md:pt-16 pb-12 text-center">
          <Link
            to="/categoria/$slug"
            params={{ slug: story.categorySlug }}
            className="text-xs font-semibold text-accent uppercase tracking-widest hover:underline"
          >
            {story.category}
          </Link>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight mt-6 mb-6 text-balance" itemProp="headline">
            {story.title}
          </h1>
          <p className="font-serif text-lg text-ink/70 leading-relaxed max-w-xl mx-auto" itemProp="description">
            {story.excerpt}
          </p>
        </header>

        <div className="max-w-5xl mx-auto px-6 mb-16">
          <img
            src={story.cover}
            alt={story.title}
            width={1200}
            height={800}
            itemProp="image"
            className="w-full aspect-[3/2] object-cover rounded-sm outline-1 -outline-offset-1 outline-black/5"
          />
        </div>

        <div className="max-w-2xl mx-auto px-6 font-serif text-lg leading-[1.85] text-ink/90 space-y-7" itemProp="articleBody">
          {partOne.map((p: string, i: number) => (
            <p key={`a-${i}`} className={i === 0 ? "first-letter:font-black first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9] first-letter:text-accent" : ""}>
              {p}
            </p>
          ))}

          {partTwo.length > 0 && (
            <>
              <h2 className="font-serif text-2xl md:text-3xl text-ink mt-12 mb-4">{t.storyPartTwo}</h2>
              {partTwo.map((p: string, i: number) => (
                <p key={`b-${i}`}>{p}</p>
              ))}
            </>
          )}

          <div className="my-12 py-8 border-y border-ink/10 flex justify-center">
            <AdSlot variant="inline" />
          </div>

          {partThree.length > 0 && (
            <>
              <h2 className="font-serif text-2xl md:text-3xl text-ink mt-12 mb-4">{t.storyPartThree}</h2>
              {partThree.map((p: string, i: number) => (
                <p key={`c-${i}`}>{p}</p>
              ))}
            </>
          )}
        </div>

      </article>

      {/* Related */}
      <section className="max-w-6xl mx-auto px-6 mt-32">
        <h2 className="font-serif text-3xl mb-12 italic text-center">{t.relatedStories}</h2>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
          {related.map((s: Story) => (
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
