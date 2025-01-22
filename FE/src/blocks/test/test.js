import "./index.css";

export const Test = () => {
  return (
    <section className="advantages">
      <div className="container">
        <h2>Почему выбирают нас?</h2>
        <p>Эффективные перевозки точно в срок</p>
        <div className="advantage-cards">
          <div className="card">
            🕒
            {/*<img src="icon-speed.png" alt="Скорость" />*/}
            <h3>Быстрая доставка</h3>
            <p>Доставка груза в минимальные сроки.</p>
          </div>
          <div className="card">
            💰
            {/*<img src="icon-price.png" alt="Цена" />*/}
            <h3>Лучшая цена</h3>
            <p>Прозрачное ценообразование без скрытых комиссий.</p>
          </div>
          <div className="card">
            🔒
            {/*<img src="icon-tracking.png" alt="Трекинг" />*/}
            <h3>Трекинг в реальном времени</h3>
            <p>Следите за своим грузом на всех этапах.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
