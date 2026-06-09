import { Link } from "@tanstack/react-router";
import { CONTACT_EMAIL, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const footerLinks = [
  { to: "/sobre" as const, label: "Sobre" },
  { to: "/contato" as const, label: "Contato" },
  { to: "/privacidade" as const, label: "Privacidade" },
  { to: "/termos" as const, label: "Termos de Uso" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper py-16 md:py-20 px-6 mt-24">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
        <div>
          <h2 className="font-serif text-3xl mb-4 italic">{SITE_NAME}</h2>
          <p className="text-paper/60 leading-relaxed text-sm">{SITE_TAGLINE}</p>
          <p className="text-paper/60 leading-relaxed text-sm mt-4 max-w-sm">
            Um refúgio digital para amantes da palavra escrita. Histórias que merecem ser lidas com
            calma.
          </p>
        </div>

        <div>
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-paper/40 mb-4">Navegação</h3>
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
              Política de Cookies
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-paper/40 mb-4">Contato</h3>
          <p className="text-sm text-paper/70 leading-relaxed">
            Dúvidas, colaborações ou questões sobre privacidade:
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
        <p>&copy; {new Date().getFullYear()} {SITE_NAME}</p>
        <p>Conteúdo editorial original em português</p>
      </div>
    </footer>
  );
}
