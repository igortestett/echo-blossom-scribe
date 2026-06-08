type AdSlotProps = {
  variant?: "leaderboard" | "vertical" | "large" | "inline";
  label?: string;
  className?: string;
};

const sizes: Record<NonNullable<AdSlotProps["variant"]>, string> = {
  leaderboard: "w-full max-w-[728px] h-24",
  vertical: "w-full aspect-[3/4]",
  large: "w-full max-w-[970px] h-32",
  inline: "w-full max-w-[580px] h-48",
};

const placeholders: Record<NonNullable<AdSlotProps["variant"]>, string> = {
  leaderboard: "Google AdSense Leaderboard",
  vertical: "AdSense Vertical",
  large: "Google AdSense Large Board",
  inline: "Bloco In-Article AdSense",
};

export function AdSlot({ variant = "leaderboard", label = "Publicidade", className = "" }: AdSlotProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className="text-[10px] uppercase tracking-widest text-ink/30 mb-2">{label}</span>
      <div
        className={`${sizes[variant]} bg-ink/5 border border-ink/10 flex items-center justify-center`}
        aria-label="Espaço para anúncio"
      >
        <span className="text-xs text-ink/20">{placeholders[variant]}</span>
      </div>
    </div>
  );
}