import { useEffect, useState } from "react";
import { setStoredConsent } from "@/lib/cookie-consent";
import { useConsentChoice } from "@/hooks/use-ad-consent";
import { useLanguage, translations } from "@/lib/i18n";

export function CookieConsent() {
  const choice = useConsentChoice();
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const lang = useLanguage();
  const t = translations[lang];

  useEffect(() => setMounted(true), []);

  // Render only after hydration — prerendered shell HTML has no React event handlers.
  if (!mounted || choice !== null || !visible) return null;

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
            {t.cookieTitle}
          </p>
          <p id="cookie-consent-desc">
            {t.cookieDesc}
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
            {t.cookieDecline}
          </button>
          <button
            type="button"
            onClick={() => {
              setStoredConsent("accepted");
              setVisible(false);
            }}
            className="px-4 py-2 text-xs font-medium uppercase tracking-widest bg-ink text-paper rounded-sm hover:bg-ink/90 transition-colors"
          >
            {t.cookieAccept}
          </button>
        </div>
      </div>
    </div>
  );
}
