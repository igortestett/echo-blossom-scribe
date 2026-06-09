import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { setStoredConsent } from "@/lib/cookie-consent";
import { useConsentChoice } from "@/hooks/use-ad-consent";

export function CookieConsent() {
  const choice = useConsentChoice();
  const [visible, setVisible] = useState(true);

  if (choice !== null || !visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-paper/95 backdrop-blur-sm px-6 py-5 shadow-[0_-8px_30px_rgba(0,0,0,0.06)]"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-ink/75 leading-relaxed">
          <p id="cookie-consent-title" className="font-medium text-ink mb-1">
            Este site utiliza cookies
          </p>
          <p id="cookie-consent-desc">
            Usamos cookies para exibir anúncios relevantes (Google AdSense), medir o desempenho do
            site e melhorar sua experiência. Leia nossa{" "}
            <Link to="/privacidade" className="text-accent underline">
              Política de Privacidade
            </Link>{" "}
            e{" "}
            <Link to="/privacidade" hash="cookies" className="text-accent underline">
              Política de Cookies
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              setStoredConsent("rejected");
              setVisible(false);
            }}
            className="px-4 py-2 text-xs font-medium uppercase tracking-widest border border-ink/15 rounded-sm hover:bg-ink/5 transition-colors"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => {
              setStoredConsent("accepted");
              setVisible(false);
            }}
            className="px-4 py-2 text-xs font-medium uppercase tracking-widest bg-ink text-paper rounded-sm hover:bg-ink/90 transition-colors"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  );
}
