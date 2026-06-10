import { Link } from "@tanstack/react-router";
import { CONTACT_EMAIL } from "@/lib/site";
import { useLanguage, translations } from "@/lib/i18n";

export function SiteFooter() {
  const lang = useLanguage();
  const t = translations[lang];

  const footerLinks = [
    { to: "/sobre" as const, label: t.navAbout },
    { to: "/contato" as const, label: t.navContact },
    { to: "/privacidade" as const, label: t.privacyPolicy },
    { to: "/termos" as const, label: t.termsOfUse },
  ];

  return (
    <footer className="bg-ink text-paper py-16 md:py-20 px-6 mt-24">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
        <div>
          <h2 className="font-serif text-3xl mb-4 italic">{t.siteName}</h2>
          <p className="text-paper/60 leading-relaxed text-sm">{t.siteTagline}</p>
          <p className="text-paper/60 leading-relaxed text-sm mt-4 max-w-sm">
            {t.siteDescription}
          </p>
        </div>

        <div>
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-paper/40 mb-4">
            {t.footerNav}
          </h3>
          <nav className="flex flex-col gap-2 text-sm text-paper/70" aria-label="Links do rodapé">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-paper transition-colors">
                {link.label}
              </Link>
            ))}
            <Link
              to="/privacidade"
              hash="cookies"
              className="hover:text-paper transition-colors"
            >
              {t.cookiePolicy}
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-paper/40 mb-4">
            {t.footerContact}
          </h3>
          <p className="text-sm text-paper/70 leading-relaxed">
            {t.footerDesc}
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-paper/90 underline mt-2 inline-block hover:text-paper"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-paper/10 flex flex-col gap-2 md:flex-row md:justify-between text-[10px] uppercase tracking-[0.2em] text-paper/30">
        <p>&copy; {new Date().getFullYear()} {t.siteName}</p>
        <p>{t.footerCopyright}</p>
      </div>
    </footer>
  );
}
