export function Footer() {
  return (
    <footer className="mt-12 border-t border-border pt-8 pb-10 text-sm text-muted-foreground">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div>
          <h3 className="text-foreground font-semibold mb-3">О нас</h3>
          <ul className="space-y-2">
            <li>О компании</li>
            <li>Контакты</li>
            <li>FAQ</li>
            <li>Бонусы Iris</li>
          </ul>
        </div>
        <div>
          <h3 className="text-foreground font-semibold mb-3">Правила</h3>
          <ul className="space-y-2">
            <li>Политика ответственной игры</li>
            <li>Требования к аккаунту</li>
            <li>Антиотмывание</li>
            <li>Конфиденциальность</li>
          </ul>
        </div>
        <div>
          <h3 className="text-foreground font-semibold mb-3">Платежи</h3>
          <ul className="space-y-2">
            <li>Депозиты и выплаты</li>
            <li>Методы пополнения</li>
            <li>Лимиты и тарифы</li>
            <li>Партнёрам</li>
          </ul>
        </div>
        <div>
          <h3 className="text-foreground font-semibold mb-3">Iris казино</h3>
          <p>
            Iris казино работает на официальном сайте и через рабочее зеркало.
            Все игры лицензированы, выплаты проходят без задержек.
          </p>
        </div>
      </div>

      <div className="text-xs leading-relaxed">
        Информация на сайте носит справочный характер. Iris N.V. ведёт деятельность
        на основании лицензии. Зеркало Iris казино обеспечивает стабильный доступ
        к официальному сайту. Играйте ответственно: 18+.
      </div>

      <div className="mt-6 text-xs">© 2026 Iris Casino. Все права защищены.</div>
    </footer>
  )
}
