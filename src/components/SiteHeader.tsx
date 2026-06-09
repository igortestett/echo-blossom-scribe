import { Link } from "@tanstack/react-router";
import { SITE_NAME } from "@/lib/site";

const navLinks = [
  { to: "/categoria/$slug" as const, params: { slug: "ficcao" }, label: "Ficção" },
  { to: "/categoria/$slug" as const, params: { slug: "memorias" }, label: "Memórias" },
  { to: "/sobre" as const, label: "Sobre" },
  { to: "/contato" as const, label: "Contato" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-ink/5 py-6 px-6 md:px-12">
      <nav
        className="flex justify-between items-center gap-6"
        aria-label="Navegação principal"
      >
        <Link
          to="/"
          className="text-2xl font-serif font-black tracking-tighter text-accent italic shrink-0"
        >
          {SITE_NAME}
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-ink/60">
          {navLinks.map((link) =>
            "params" in link ? (
              <Link
                key={link.label}
                to={link.to}
                params={link.params}
                className="hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </nav>
    </header>
  );
}
