"use client";

import styles from "./business-tour.module.css";
import { scroller } from "react-scroll";
import { scrollOptions } from "../../constants";

export default function BusinessTourBlock() {
  const handleScroll = (e) => {
    scroller.scrollTo("form", scrollOptions);
  };
  return (
    <section className={styles.section} id="business-tours">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Организация бизнес туров в <span className={styles.blue}>КНР</span>
        </h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="/images/shield-check.svg" className={styles.icon} />
            <div className={styles.content}>
              <p className={styles.text}>
                По вашему запросу будут найдены производители и отобраны по
                принципу высокого рейтинга финансовой и юридической
                благонадежности.
              </p>
              <button className={styles.button} onClick={handleScroll}>
                Оставить заявку
              </button>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/images/compass.svg" className={styles.icon} />
            <div className={styles.content}>
              <p className={styles.text}>
                Наша компания предоставляет полный спектр услуг по организации и
                сопровождению клиента в Китае для наилучшего выбора качества
                товара и его поставки в РФ.
              </p>
              <button className={styles.button} onClick={handleScroll}>
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
