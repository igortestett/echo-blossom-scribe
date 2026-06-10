export type AdVariant = "leaderboard" | "vertical" | "large" | "inline";

const SLOT_ENV_KEYS: Record<AdVariant, string> = {
  leaderboard: "VITE_ADSENSE_SLOT_LEADERBOARD",
  vertical: "VITE_ADSENSE_SLOT_VERTICAL",
  large: "VITE_ADSENSE_SLOT_LARGE",
  inline: "VITE_ADSENSE_SLOT_INLINE",
};

function readClientId(value: string | undefined): string | null {
  return value?.trim() || null;
}

export function getAdSenseClientId(): string | null {
  // SSR (Easypanel/Docker): runtime env pode existir sem rebuild.
  if (import.meta.env.SSR && typeof process !== "undefined") {
    const runtime = readClientId(process.env.VITE_ADSENSE_CLIENT_ID);
    if (runtime) return runtime;
  }
  return readClientId(import.meta.env.VITE_ADSENSE_CLIENT_ID as string | undefined);
}

export function getAdSenseSlot(variant: AdVariant): string | null {
  const slot = import.meta.env[SLOT_ENV_KEYS[variant]] as string | undefined;
  return slot?.trim() || null;
}

export function isAdSenseConfigured(): boolean {
  return !!getAdSenseClientId();
}

export function getPublisherIdForAdsTxt(clientId: string): string | null {
  const match = /^ca-pub-(\d+)$/i.exec(clientId.trim());
  return match ? `pub-${match[1]}` : null;
}

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

export function pushAdSlot(): void {
  try {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  } catch {
    // AdSense may not be loaded yet.
  }
}
