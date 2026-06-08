export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper py-20 px-6 mt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-3xl mb-6 italic">Contos & Crônicas</h2>
          <p className="text-paper/60 leading-relaxed max-w-sm">
            Um refúgio digital para amantes da palavra escrita. Histórias que merecem ser
            lidas com calma.
          </p>
        </div>
        <div className="flex flex-col md:items-end">
          <p className="text-xs tracking-widest uppercase text-paper/40 mb-6">Newsletter</p>
          <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Seu e-mail"
              className="bg-transparent border-b border-paper/20 py-2 w-full outline-none focus:border-accent transition-colors text-paper placeholder:text-paper/30"
            />
            <button
              type="submit"
              className="ml-4 text-accent uppercase text-xs font-bold tracking-widest"
            >
              Assinar
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-paper/10 flex justify-between text-[10px] uppercase tracking-[0.2em] text-paper/30">
        <p>&copy; {new Date().getFullYear()} Contos & Crônicas</p>
        <p>Privacidade & Termos</p>
      </div>
    </footer>
  );
}