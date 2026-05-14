import type { Game } from "./game-tile"

const g = (
  title: string,
  c1: string,
  c2: string,
  extra: Partial<Game> = {},
): Game => ({
  title,
  gradient: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`,
  ...extra,
})

export const popular: Game[] = [
  g("Le Bandit", "#0f766e", "#84cc16", { subtitle: "Битва бандитов 1000" }),
  g("Book of Dead", "#b45309", "#f59e0b", { badge: "HOT" }),
  g("Mummyland", "#92400e", "#facc15", { subtitle: "Treasures" }),
  g("Gates of Olympus", "#1e40af", "#a855f7", { subtitle: "Super Scatter", badge: "HOT" }),
  g("Rush 1000", "#7c2d12", "#facc15", { subtitle: "Sugar Rush" }),
  g("Chilli X", "#7f1d1d", "#ef4444", { badge: "EXCLUSIVE" }),
  g("Aztec", "#365314", "#facc15"),
  g("Bonanza 1000", "#831843", "#f472b6", { badge: "HOT" }),
  g("Gods of War", "#7c2d12", "#fbbf24"),
  g("Big Bandito", "#7c2d12", "#a16207"),
  g("Coin Up Hot Fire", "#854d0e", "#fbbf24", { badge: "HOT" }),
  g("Le King", "#581c87", "#a855f7"),
  g("Tome of Madness", "#1e1b4b", "#7c3aed"),
  g("Sun of Egypt 3", "#92400e", "#facc15", { badge: "JACKPOT" }),
]

export const trending: Game[] = [
  g("High-Roller Games", "#1e3a8a", "#6d28d9"),
  g("Cascading Reels", "#7e22ce", "#f472b6"),
  g("Prime Multiplier", "#b91c1c", "#f59e0b"),
  g("Bonus Buy", "#15803d", "#84cc16"),
  g("Megaways", "#0e7490", "#22d3ee"),
  g("Drops & Wins", "#6d28d9", "#ec4899"),
]

export const fresh: Game[] = [
  g("Limbo+", "#16a34a", "#84cc16", { badge: "NEW" }),
  g("Sweet Palace 1000", "#be185d", "#f9a8d4", { badge: "JACKPOT" }),
  g("Legion Gold", "#374151", "#f59e0b", { badge: "NEW" }),
  g("Wild Universe", "#1e1b4b", "#7c3aed", { badge: "EXCLUSIVE" }),
  g("Wild Trail", "#365314", "#facc15"),
  g("Iris Gold Mech", "#7c2d12", "#fbbf24", { badge: "EXCLUSIVE" }),
  g("Space Meow", "#1e3a8a", "#a855f7", { badge: "NEW" }),
]

export const exclusive: Game[] = [
  g("Perfect Strike", "#0f172a", "#22d3ee", { badge: "EXCLUSIVE" }),
  g("Marlin Masters", "#0c4a6e", "#38bdf8", { subtitle: "Atlantis" }),
  g("Cops vs Robs", "#1e3a8a", "#3b82f6", { badge: "EXCLUSIVE" }),
  g("Burning Hell", "#7f1d1d", "#f97316"),
  g("Iris Aggregator", "#581c87", "#a855f7", { badge: "EXCLUSIVE" }),
  g("Sacred Treasures", "#365314", "#facc15"),
  g("Toad", "#166534", "#84cc16"),
]

export const hot: Game[] = [
  g("Oxygen 2", "#0c4a6e", "#22d3ee", { badge: "RTP", rtp: "377.40%" }),
  g("Sweet Bonanza", "#be185d", "#f9a8d4", { badge: "RTP", rtp: "264.59%" }),
  g("Unleashed", "#7c2d12", "#f59e0b", { badge: "RTP", rtp: "247.18%" }),
  g("Chicken Road 2", "#854d0e", "#facc15", { badge: "RTP", rtp: "166.79%" }),
  g("Rise of Olympus", "#1e40af", "#a855f7", { badge: "RTP", rtp: "157.40%" }),
  g("House of Madness", "#1e1b4b", "#7c3aed", { badge: "RTP", rtp: "212.50%" }),
  g("Zeus vs Helios", "#0c4a6e", "#fbbf24", { badge: "RTP", rtp: "295.30%" }),
  g("Donuts", "#be185d", "#f472b6", { badge: "RTP", rtp: "181.10%" }),
]

export const top24: Game[] = [
  g("Roulette", "#7c2d12", "#fbbf24"),
  g("Big Bass", "#0e7490", "#22d3ee"),
  g("Sweet Mania", "#be185d", "#f9a8d4"),
  g("Super Pot", "#15803d", "#facc15"),
  g("Iris Pearl", "#0c4a6e", "#22d3ee", { badge: "EXCLUSIVE" }),
  g("Lucky Drop", "#581c87", "#a855f7"),
]

export const instant: Game[] = [
  g("Mines", "#374151", "#84cc16"),
  g("Crash Club 2", "#7c2d12", "#f59e0b"),
  g("Chicken Road 2", "#854d0e", "#facc15"),
  g("Jetx", "#0c4a6e", "#3b82f6"),
  g("Aviator", "#1e3a8a", "#ef4444"),
  g("Spacexy", "#1e1b4b", "#7c3aed"),
  g("Plinko 2", "#15803d", "#22d3ee"),
  g("Munchies", "#be185d", "#f97316"),
]
