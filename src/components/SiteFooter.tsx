export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper py-20 px-6 mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl mb-6 italic">Contos & Crônicas</h2>
        <p className="text-paper/60 leading-relaxed max-w-sm">
          Um refúgio digital para amantes da palavra escrita. Histórias que merecem ser
          lidas com calma.
        </p>
      </div>
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-paper/10 flex justify-between text-[10px] uppercase tracking-[0.2em] text-paper/30">
        <p>&copy; {new Date().getFullYear()} Contos & Crônicas</p>
        <p>Privacidade & Termos</p>
      </div>
    </footer>
  );
}