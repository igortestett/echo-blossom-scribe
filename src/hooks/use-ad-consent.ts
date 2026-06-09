import { useEffect, useState } from "react";
import { CONSENT_EVENT, getStoredConsent, hasAdConsent } from "@/lib/cookie-consent";

export function useAdConsent(): boolean {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(hasAdConsent());
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  return allowed;
}

export function useConsentChoice() {
  const [choice, setChoice] = useState(getStoredConsent);

  useEffect(() => {
    const sync = () => setChoice(getStoredConsent());
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  return choice;
}
