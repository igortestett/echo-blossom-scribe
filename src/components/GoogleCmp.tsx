import { useEffect } from "react";
import { getAdSenseClientId } from "@/lib/adsense";
import { signalGoogleCmpPresent } from "@/lib/google-cmp";

export function GoogleCmp() {
  const clientId = getAdSenseClientId();

  useEffect(() => {
    if (!clientId) return;
    signalGoogleCmpPresent();
  }, [clientId]);

  return null;
}
