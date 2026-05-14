export function Jackpot() {
  return (
    <section
      aria-label="Джекпот Iris казино"
      className="mt-8 relative rounded-2xl overflow-hidden border border-border"
      style={{
        background:
          "linear-gradient(120deg, #1e3a8a 0%, #6d28d9 50%, #db2777 100%)",
      }}
    >
      <div className="px-5 sm:px-8 py-8 sm:py-10 text-center">
        <div className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/80 mb-2">
          Jackpot
        </div>
        <div className="text-4xl sm:text-6xl font-extrabold text-white tabular-nums">
          8 766 381 <span className="text-accent">€</span>
        </div>
        <p className="text-white/80 text-sm mt-3 max-w-xl mx-auto text-pretty">
          Общий призовой фонд джекпотов в Iris казино обновляется в реальном времени.
          Играйте на официальном сайте Iris и претендуйте на главный приз.
        </p>
      </div>
    </section>
  )
}
