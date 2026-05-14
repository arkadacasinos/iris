const rows: Array<[string, string]> = [
  ["Название", "Iris Casino"],
  ["Официальный сайт", "iris casino официальный сайт"],
  ["Зеркало", "Ирис казино зеркало рабочее, обновляется ежедневно"],
  ["Лицензия", "Curacao eGaming"],
  ["Год основания", "2021"],
  ["Количество игр", "Более 7000 слотов и live-игр"],
  ["Провайдеры", "Pragmatic Play, NetEnt, NoLimit City, Hacksaw, Evolution"],
  ["Минимальный депозит", "от 1 EUR / эквивалент в валюте"],
  ["Минимальная выплата", "от 10 EUR"],
  ["Скорость выплат", "от 5 минут до 24 часов"],
  ["Валюты", "EUR, USD, RUB, KZT, USDT, BTC, ETH"],
  ["Способы оплаты", "Карты, СБП, криптовалюты, электронные кошельки"],
  ["Бонусы", "Welcome Pack до 50%, фриспины, кэшбэк, турниры"],
  ["Мобильная версия", "Адаптивный сайт, приложение iOS и Android"],
  ["Поддержка", "Чат 24/7, e-mail, форма обратной связи"],
  ["Языки интерфейса", "Русский, английский, казахский, узбекский"],
]

export function PlatformSpecs() {
  return (
    <section className="mt-12" id="specs" aria-label="Характеристики платформы Iris">
      <h2 className="text-xl sm:text-2xl font-bold mb-2">
        Характеристики платформы Iris казино
      </h2>
      <p className="text-sm text-muted-foreground mb-5 max-w-2xl text-pretty">
        Основные параметры Iris casino: лицензия, провайдеры, способы оплаты и поддержка.
        Таблица помогает быстро оценить ирис казино официальный сайт перед регистрацией.
      </p>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <tbody>
            {rows.map(([k, v], i) => (
              <tr
                key={k}
                className={i % 2 === 0 ? "bg-secondary/40" : "bg-transparent"}
              >
                <th
                  scope="row"
                  className="text-left font-medium text-muted-foreground px-4 py-3 w-1/2 sm:w-1/3 align-top"
                >
                  {k}
                </th>
                <td className="px-4 py-3 align-top">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
