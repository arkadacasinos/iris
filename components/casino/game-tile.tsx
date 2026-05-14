type Badge = "HOT" | "NEW" | "EXCLUSIVE" | "JACKPOT" | "RTP"

export type Game = {
  title: string
  subtitle?: string
  gradient: string
  badge?: Badge
  rtp?: string
}

const badgeStyles: Record<Badge, string> = {
  HOT: "bg-red-500 text-white",
  NEW: "bg-emerald-500 text-white",
  EXCLUSIVE: "bg-primary text-primary-foreground",
  JACKPOT: "bg-accent text-accent-foreground",
  RTP: "bg-pink-600 text-white",
}

export function GameTile({ game }: { game: Game }) {
  return (
    <div
      className="relative shrink-0 w-[120px] sm:w-[140px] md:w-[150px] aspect-[3/4] rounded-xl overflow-hidden border border-border cursor-pointer group"
      style={{ background: game.gradient }}
    >
      {game.badge && (
        <span
          className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded ${badgeStyles[game.badge]}`}
        >
          {game.badge === "RTP" && game.rtp ? `RTP ${game.rtp}` : game.badge}
        </span>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-2">
        <div className="text-white font-bold text-xs sm:text-sm leading-tight uppercase">
          {game.title}
        </div>
        {game.subtitle && (
          <div className="text-white/70 text-[10px] leading-tight mt-0.5">
            {game.subtitle}
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
    </div>
  )
}
