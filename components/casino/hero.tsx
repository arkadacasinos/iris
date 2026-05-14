export function Hero() {
  return (
    <section
      aria-label="Приветственный бонус Iris казино"
      className="relative overflow-hidden rounded-2xl border border-border"
      style={{
        background:
          "linear-gradient(120deg, #3b1f6b 0%, #6d28d9 45%, #a855f7 100%)",
      }}
    >
      <div className="relative px-5 sm:px-8 py-8 sm:py-12 max-w-2xl">
        <p className="uppercase tracking-widest text-xs sm:text-sm text-white/80 mb-2">
          Сладкий Welcome Pack
        </p>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-none mb-4">
          до <span className="text-accent">50%</span>
        </h1>
        <p className="text-white/85 text-sm sm:text-base mb-6 max-w-md text-pretty">
          Iris казино дарит приветственный пакет всем новым игрокам. Регистрируйтесь
          на официальном сайте Iris и забирайте бонус на первый депозит.
        </p>
        <button className="px-5 py-3 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90">
          Выбрать бонус
        </button>
      </div>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle at 85% 30%, rgba(250,204,21,0.45), transparent 45%)",
        }}
      />
    </section>
  )
}
