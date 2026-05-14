import { Header } from "@/components/casino/header"
import { Sidebar } from "@/components/casino/sidebar"
import { Hero } from "@/components/casino/hero"
import { GameRow } from "@/components/casino/game-row"
import { Jackpot } from "@/components/casino/jackpot"
import { Providers } from "@/components/casino/providers"
import { Footer } from "@/components/casino/footer"
import { HiddenCategories } from "@/components/casino/hidden-categories"
import { PlatformSpecs } from "@/components/casino/platform-specs"
import { Faq } from "@/components/casino/faq"
import {
  popular,
  trending,
  fresh,
  exclusive,
  hot,
  top24,
  instant,
} from "@/components/casino/games-data"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="md:pl-16 lg:pl-20">
        <Header />
        <main className="px-3 sm:px-5 lg:px-8 py-4 sm:py-6 max-w-[1400px] mx-auto">
          <Hero />

          <section className="mt-6 sr-only">
            <h1>Iris казино - официальный сайт онлайн казино, играть и зеркало</h1>
            <p>
              Iris casino официальный сайт онлайн казино с зеркалом. Ирис казино
              играть онлайн в слоты, лайв и карточные игры. Iris casino играть с
              приветственным бонусом и быстрыми выплатами на iris казино.
            </p>
          </section>

          <GameRow title="Популярные" games={popular} />
          <GameRow title="В тренде" games={trending} />
          <GameRow title="Новые" games={fresh} />
          <GameRow title="Только у нас" games={exclusive} />
          <GameRow title="Горячие игры за 24 часа" games={hot} />

          <Jackpot />

          <GameRow title="Топ за 24 часа" games={top24} />
          <GameRow title="Instant games" games={instant} />

          <Providers />

          <PlatformSpecs />
          <Faq />

          <HiddenCategories />

          <Footer />
        </main>
      </div>
    </div>
  )
}
