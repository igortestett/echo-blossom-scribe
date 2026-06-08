import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <nav className="border-b border-ink/5 py-6 px-6 md:px-12 flex justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-serif font-black tracking-tighter text-accent italic"
      >
        Contos & Crônicas
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-ink/60">
        <Link to="/categoria/$slug" params={{ slug: "ficcao" }} className="hover:text-accent transition-colors">
          Ficção
        </Link>
        <Link to="/categoria/$slug" params={{ slug: "memorias" }} className="hover:text-accent transition-colors">
          Memórias
        </Link>
        <Link to="/sobre" className="hover:text-accent transition-colors">
          Sobre
        </Link>
      </div>
      <button className="p-2 hover:bg-ink/5 rounded-full" aria-label="Menu">
        <span className="sr-only">Menu</span>
        <div className="w-6 h-0.5 bg-ink mb-1.5" />
        <div className="w-6 h-0.5 bg-ink" />
      </button>
    </nav>
  );
}