import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CONTACT_EMAIL } from "@/lib/site";
import { useLanguage, translations, getLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/sobre")({
  head: () => {
    const lang = getLanguage();
    const t = translations[lang];
    return {
      meta: [
        { title: `${t.navAbout} — ${t.siteName}` },
        {
          name: "description",
          content: lang === "pt"
            ? "Sobre o Contos & Crônicas: missão editorial, público-alvo e política de conteúdo."
            : lang === "es"
            ? "Sobre Nosotros: misión editorial, público objetivo y política de contenido."
            : "About Us: editorial mission, target audience, and content policy.",
        },
        { property: "og:title", content: `${t.navAbout} — ${t.siteName}` },
        {
          property: "og:description",
          content: t.aboutSubtitle,
        },
        { name: "robots", content: "index, follow" },
      ],
    };
  },
  component: SobrePage,
});

function SobrePage() {
  const lang = useLanguage();
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <SiteHeader />

      <main className="max-w-2xl mx-auto px-6 py-16 md:py-20">
        <span className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block">
          {t.navAbout}
        </span>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-10 text-balance">
          {t.aboutSubtitle}
        </h1>

        {lang === "pt" && (
          <div className="font-serif text-lg leading-[1.85] text-ink/80 space-y-6">
            <p>
              O <strong>{t.siteName}</strong> nasceu de uma vontade simples: dar tempo às palavras num
              mundo que insiste em consumi-las depressa. Somos um espaço editorial independente
              dedicado à ficção curta, crônicas urbanas e memórias literárias.
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
              <li>Conteúdo 100% autoral, revisado antes da publicação;</li>
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
        )}

        {lang === "en" && (
          <div className="font-serif text-lg leading-[1.85] text-ink/80 space-y-6">
            <p>
              <strong>{t.siteName}</strong> was born from a simple desire: to give time to words in a
              world that insists on consuming them quickly. We are an independent editorial space
              dedicated to short fiction, urban chronicles, and literary memories.
            </p>
            <p>
              We publish original, reviewed texts designed for slow reading — on computers,
              tablets, or phones. Each story is accompanied by its own images and organized
              by categories to make discovery easy.
            </p>

            <h2 className="font-serif text-2xl text-ink mt-10 mb-2">Who we write for</h2>
            <p>
              Our audience consists of readers seeking narratives with depth, rhythm, and linguistic
              care. We do not produce daily news or mass-generated content: each page reflects real
              editorial work.
            </p>

            <h2 className="font-serif text-2xl text-ink mt-10 mb-2">Editorial Policy</h2>
            <ul className="list-disc pl-5 space-y-2 font-sans text-base">
              <li>100% original content, reviewed before publication;</li>
              <li>Zero tolerance for plagiarism, hate speech, or explicit adult content;</li>
              <li>Transparency regarding advertising and cookies, in accordance with our privacy policy;</li>
              <li>An open channel for corrections and reader suggestions.</li>
            </ul>

            <h2 className="font-serif text-2xl text-ink mt-10 mb-2">Collaborations</h2>
            <p>
              We accept unpublished texts from independent authors. Send your proposal to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent underline">
                {CONTACT_EMAIL}
              </a>{" "}
              with a synopsis and a sample of 500 to 1,000 words.
            </p>

            <p>
              For legal, privacy, or advertising inquiries, please visit the{" "}
              <Link to="/contato" className="text-accent underline">
                Contact
              </Link>{" "}
              page or read our{" "}
              <Link to="/privacidade" className="text-accent underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        )}

        {lang === "es" && (
          <div className="font-serif text-lg leading-[1.85] text-ink/80 space-y-6">
            <p>
              <strong>{t.siteName}</strong> nació de un deseo sencillo: dar tiempo a las palabras en un
              mundo que insiste en consumirlas rápido. Somos un espacio editorial independiente
              dedicado a la ficción corta, crónicas urbanas y memorias literarias.
            </p>
            <p>
              Publicamos textos originales, revisados y diseñados para una lectura pausada — en computadora,
              tableta o celular. Cada historia se acompaña de sus propias imágenes y se organiza por
              categorías para facilitar el descubrimiento.
            </p>

            <h2 className="font-serif text-2xl text-ink mt-10 mb-2">Para quién escribimos</h2>
            <p>
              Nuestro público son lectores que buscan narrativas con profundidad, ritmo y cuidado
              lingüístico. No producimos noticias del día ni contenido generado en masa: cada página
              refleja un trabajo editorial real.
            </p>

            <h2 className="font-serif text-2xl text-ink mt-10 mb-2">Política editorial</h2>
            <ul className="list-disc pl-5 space-y-2 font-sans text-base">
              <li>Contenido 100% original, revisado antes de la publicación;</li>
              <li>Prohibición de plagio, discurso de odio y contenido para adultos explícito;</li>
              <li>Transparencia sobre publicidad y cookies, de acuerdo con nuestra política de privacidad;</li>
              <li>Canal abierto para correcciones y sugerencias de los lectores.</li>
            </ul>

            <h2 className="font-serif text-2xl text-ink mt-10 mb-2">Colaboraciones</h2>
            <p>
              Aceptamos textos inéditos de autores independientes. Envíe su propuesta a{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent underline">
                {CONTACT_EMAIL}
              </a>{" "}
              con sinopsis y una muestra de 500 a 1.000 palabras.
            </p>

            <p>
              Para cuestiones legales, de privacidad o publicidad, visite la página de{" "}
              <Link to="/contato" className="text-accent underline">
                Contacto
              </Link>{" "}
              o lea nuestra{" "}
              <Link to="/privacidade" className="text-accent underline">
                Política de Privacidad
              </Link>
              .
            </p>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
