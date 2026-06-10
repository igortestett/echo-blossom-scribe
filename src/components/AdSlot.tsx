import { useEffect, useRef } from "react";
import {
  getAdSenseClientId,
  getAdSenseSlot,
  isAdSenseConfigured,
  pushAdSlot,
  type AdVariant,
} from "@/lib/adsense";

type AdSlotProps = {
  variant?: AdVariant;
  label?: string;
  className?: string;
};

const sizes: Record<AdVariant, string> = {
  leaderboard: "w-full max-w-[728px] min-h-[90px]",
  vertical: "w-full max-w-[300px] min-h-[250px]",
  large: "w-full max-w-[970px] min-h-[90px]",
  inline: "w-full max-w-[580px] min-h-[250px]",
};

export function AdSlot({ variant = "leaderboard", label = "Publicidade", className = "" }: AdSlotProps) {
  const adRef = useRef<HTMLElement>(null);
  const pushed = useRef(false);
  const clientId = getAdSenseClientId();
  const slotId = getAdSenseSlot(variant);
  const showLiveAd = isAdSenseConfigured() && !!slotId;

  useEffect(() => {
    if (!showLiveAd || !adRef.current || pushed.current) return;
    pushed.current = true;
    pushAdSlot();
  }, [showLiveAd]);

  return (
    <aside
      className={`flex flex-col items-center ${className}`}
      aria-label={label}
      data-ad-variant={variant}
    >
      <span className="text-[10px] uppercase tracking-widest text-ink/30 mb-2">{label}</span>
      {showLiveAd ? (
        <ins
          ref={adRef}
          className={`adsbygoogle block ${sizes[variant]}`}
          style={{ display: "block" }}
          data-ad-client={clientId!}
          data-ad-slot={slotId!}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <div
          className={`${sizes[variant]} bg-ink/[0.03] border border-dashed border-ink/10 rounded-sm`}
          aria-hidden="true"
        />
      )}
    </aside>
  );
}
