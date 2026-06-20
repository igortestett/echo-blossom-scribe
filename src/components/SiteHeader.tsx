import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useLanguage, translations } from "@/lib/i18n";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function SiteHeader() {
  const lang = useLanguage();
  const t = translations[lang];
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/categoria/$slug" as const, params: { slug: "ficcao" }, label: t.navFiction },
    { to: "/categoria/$slug" as const, params: { slug: "memorias" }, label: t.navMemories },
    { to: "/sobre" as const, label: t.navAbout },
    { to: "/contato" as const, label: t.navContact },
  ];

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

        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-ink/60">
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

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="md:hidden p-2 text-ink/70 hover:text-accent transition-colors"
              aria-label={t.menuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-paper text-ink border-ink/10 w-72">
            <SheetHeader>
              <SheetTitle className="font-serif text-accent italic text-left">{t.siteName}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-6 mt-10 text-sm font-medium uppercase tracking-widest text-ink/70" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  params={"params" in link ? link.params : undefined}
                  onClick={() => setOpen(false)}
                  className="hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
