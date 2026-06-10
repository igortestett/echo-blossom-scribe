import { Link } from "@tanstack/react-router";
import { useLanguage, translations, getLanguageDomain, type Language } from "@/lib/i18n";

export function SiteHeader() {
  const lang = useLanguage();
  const t = translations[lang];

  const navLinks = [
    { to: "/categoria/$slug" as const, params: { slug: "ficcao" }, label: t.navFiction },
    { to: "/categoria/$slug" as const, params: { slug: "memorias" }, label: t.navMemories },
    { to: "/sobre" as const, label: t.navAbout },
    { to: "/contato" as const, label: t.navContact },
  ];

  const handleLanguageChange = (newLang: Language) => {
    const targetUrl = getLanguageDomain(newLang);
    if (typeof window !== "undefined" && targetUrl) {
      window.location.href = targetUrl;
    }
  };

  return (
    <header className="border-b border-ink/5 py-6 px-6 md:px-12 bg-paper/80 backdrop-blur-md sticky top-0 z-40">
      <nav
        className="flex justify-between items-center gap-6 max-w-6xl mx-auto"
        aria-label="Navegação principal"
      >
        <Link
          to="/"
          className="text-2xl font-serif font-black tracking-tighter text-accent italic shrink-0"
        >
          {t.siteName}
        </Link>
        <div className="flex items-center gap-6 md:gap-8 text-sm font-medium uppercase tracking-widest text-ink/60">
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                params={"params" in link ? link.params : undefined}
                className="hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Seletor de Idioma Minimalista */}
          <div className="flex items-center gap-1.5 border border-ink/10 rounded px-2.5 py-1 bg-paper/50">
            <span className="text-[10px] text-ink/40 font-semibold uppercase tracking-wider hidden sm:inline">
              {lang === "pt" ? "Idioma:" : lang === "es" ? "Idioma:" : "Lang:"}
            </span>
            <select
              value={lang}
              onChange={(e) => handleLanguageChange(e.target.value as Language)}
              className="bg-transparent text-xs font-semibold text-ink/75 hover:text-accent cursor-pointer outline-none border-none pr-1 py-0.5 appearance-none"
              aria-label={t.changeLanguage}
            >
              <option value="pt" className="bg-paper text-ink">Português</option>
              <option value="en" className="bg-paper text-ink">English</option>
              <option value="es" className="bg-paper text-ink">Español</option>
            </select>
            {/* Ícone de seta minimalista */}
            <span className="text-[9px] text-ink/40 pointer-events-none -ml-1">▼</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
