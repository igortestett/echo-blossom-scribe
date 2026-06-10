import { useEffect } from "react";
import { useAdConsent } from "@/hooks/use-ad-consent";
import { getAdSenseClientId } from "@/lib/adsense";

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
  }, [consentGranted, clientId]);

  return null;
}
