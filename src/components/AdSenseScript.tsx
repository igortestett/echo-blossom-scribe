import { useEffect } from "react";
import { useAdConsent } from "@/hooks/use-ad-consent";
import { getAdSenseClientId } from "@/lib/adsense";

const SCRIPT_ID = "adsense-script";

export function AdSenseScript() {
  const consentGranted = useAdConsent();
  const clientId = getAdSenseClientId();

  useEffect(() => {
    if (!consentGranted || !clientId) return;

    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
    gtag?.("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });

    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }, [consentGranted, clientId]);

  return null;
}
