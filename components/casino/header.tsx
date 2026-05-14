"use client"

import { Search, Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 bg-background/90 backdrop-blur border-b border-border">
      <div className="flex items-center gap-3 px-3 sm:px-4 py-3">
        <button
          className="md:hidden text-foreground/80"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Меню"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center font-bold text-primary-foreground md:hidden">
            I
          </div>
          <span className="text-lg font-semibold tracking-wide">Iris</span>
        </div>

        <nav className="hidden sm:flex items-center gap-2 ml-3">
          <button className="px-3 py-1.5 rounded-md bg-secondary text-sm">Казино</button>
          <button className="px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground">
            Поиск
          </button>
        </nav>

        <div className="flex-1 hidden md:flex max-w-md mx-auto">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Поиск игр в Iris казино"
              className="w-full bg-secondary/60 border border-border rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button className="px-3 sm:px-4 py-2 rounded-md text-sm font-medium bg-secondary hover:bg-secondary/80">
            Вход
          </button>
          <button className="px-3 sm:px-4 py-2 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90">
            Регистрация
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-sidebar px-3 py-3 flex flex-col gap-2">
          {["Слоты", "Лайв", "Карты", "Рулетка", "Crash", "Бонусы", "Турниры"].map((l) => (
            <button
              key={l}
              className="text-left px-3 py-2 rounded-md hover:bg-sidebar-accent text-sm"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
