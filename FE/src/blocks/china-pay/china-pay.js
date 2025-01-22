import "./china-pay.css";

export const ChinaPay = () => {
  return (
    <section className="payments-section">
      <div className="overlay">
        <div className="container">
          <h2>Платежи в КНР — надёжные и безопасные решения</h2>
          <div className="cards">
            <div className="card">
              <h3>Валюта платежей</h3>
              <p>Оплата в юанях (CNY) и других валютах по вашему запросу.</p>
            </div>
            <div className="card">
              <h3>Сроки переводов</h3>
              <p>Средний срок перевода — 1-2 рабочих дня.</p>
            </div>
            <div className="card">
              <h3>Надёжность</h3>
              <p>
                Работаем только с проверенными банками и платёжными системами.
              </p>
            </div>
            <div className="card">
              <h3>Прозрачность</h3>
              <p>
                Отсутствие скрытых комиссий и полная финансовая прозрачность.
              </p>
            </div>
          </div>
          <div className="cta">
            <a href="#contact" className="button">
              Узнать больше
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
