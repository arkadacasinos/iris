"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import { GameTile, type Game } from "./game-tile"

export function GameRow({
  title,
  games,
}: {
  title: string
  games: Game[]
}) {
  const ref = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * 320, behavior: "smooth" })
  }

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider">
          {title}
        </h2>
        <div className="flex gap-1">
          <button
            onClick={() => scroll(-1)}
            className="w-8 h-8 rounded-md bg-secondary hover:bg-secondary/70 flex items-center justify-center"
            aria-label="Назад"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-8 h-8 rounded-md bg-secondary hover:bg-secondary/70 flex items-center justify-center"
            aria-label="Вперёд"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div
        ref={ref}
        className="no-scrollbar flex gap-3 overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0"
      >
        {games.map((g, i) => (
          <GameTile key={`${g.title}-${i}`} game={g} />
        ))}
      </div>
    </section>
  )
}
