const providers = [
  "Pragmatic",
  "NoLimit",
  "Hacksaw",
  "NetEnt",
  "Evolution",
  "Push Gaming",
  "Spinomenal",
]

export function Providers() {
  return (
    <section className="mt-10">
      <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider mb-4">
        Провайдеры
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {providers.map((p) => (
          <div
            key={p}
            className="h-14 sm:h-16 rounded-lg bg-secondary/60 border border-border flex items-center justify-center text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            {p}
          </div>
        ))}
      </div>
    </section>
  )
}
