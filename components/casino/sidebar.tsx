"use client"

import { Gamepad2, Radio, Spade, Dice5, Bomb, Gift, Trophy } from "lucide-react"

const items = [
  { icon: Gamepad2, label: "Слоты" },
  { icon: Radio, label: "Лайв" },
  { icon: Spade, label: "Карты" },
  { icon: Dice5, label: "Рулетка" },
  { icon: Bomb, label: "Crash" },
  { icon: Gift, label: "Бонусы" },
  { icon: Trophy, label: "Турниры" },
]

export function Sidebar() {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-16 lg:w-20 bg-sidebar border-r border-sidebar-border flex-col items-center py-4 gap-2 z-30">
      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center font-bold text-primary-foreground mb-3">
        I
      </div>
      {items.map((item) => (
        <button
          key={item.label}
          className="w-12 lg:w-16 flex flex-col items-center gap-1 py-2 rounded-lg text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
          aria-label={item.label}
        >
          <item.icon className="w-5 h-5" />
          <span className="text-[10px] leading-none">{item.label}</span>
        </button>
      ))}
    </aside>
  )
}
