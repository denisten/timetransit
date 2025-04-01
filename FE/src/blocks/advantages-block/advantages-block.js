import React, { useState } from "react";
import styles from "./index.module.css";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import truckSVG from "../../icons/truck.svg";
import warehouseSVG from "../../icons/warehouse.svg";
import ownWarehouseSVG from "../../icons/warehouse-1.svg";
import planeSVG from "../../icons/plane.svg";
import paymentSVG from "../../icons/yuan-currency.svg";
import globalSVG from "../../icons/global-trage.svg";
import warehouseClockSVG from "../../icons/warehouse-clock.svg";
import { ModalForm } from "../../components/modal-form";
import threeBoxesSVG from "../../icons/three-boxes.svg";
import shipSVG from "../../icons/ship.svg";
import ScrollAnimation from "react-animate-on-scroll";

const cards = [
  {
    image: truckSVG,
    title: "Оперативная доставка",
    description:
      "Мы обеспечиваем быструю и безопасную доставку товаров, включая корреспонденцию, подарки и медицинские грузы.",
  },
  {
    image: warehouseSVG,
    title: "Полный цикл услуг",
    description:
      "От отправки до таможенной очистки – мы берём на себя все этапы доставки.",
  },
  {
    image: warehouseClockSVG,
    title: "Склад временного хранения",
    description:
      "Обеспечиваем безопасное хранение грузов до прохождения таможенной очистки.",
  },
  // {
  //   image: planeSVG,
  //   title: "Скорость – ключевой фактор",
  //   description:
  //     "Скорость доставки – наш приоритет для сохранения качества товаров, таких как медикаменты и пресса.",
  // },
  {
    image: paymentSVG,
    title: "Платежи в КНР",
    description:
      "Организуем безопасные и прозрачные финансовые операции для расчётов с китайскими поставщиками.",
  },
  {
    image: globalSVG,
    title: "ВЭД под ключ",
    description:
      "Предоставляем услуги внешнеэкономической деятельности: от поиска поставщика до доставки товаров на ваш склад.",
  },
  {
    image: ownWarehouseSVG,
    title: "Собственный склад",
    description:
      "Надежные складские помещения для хранения ваших товаров с контролем температуры и безопасности.",
  },
];

export const AdvantagesBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Карточки, которые хотим выделить
  const highlightedTitles = [
    "Полный цикл услуг",
    "Платежи в КНР",
    "ВЭД под ключ",
  ];

  // Перестановка: выделяемые карточки выводим первыми
  const reorderedCards = [
    ...cards.filter((card) => highlightedTitles.includes(card.title)),
    ...cards.filter((card) => !highlightedTitles.includes(card.title)),
  ];

  return (
    <Element
      name="advantages"
      className={styles.blockContainer}
      data-section
      data-bgcolor="rgba(166, 34, 38, 0.9)"
    >
      <div className={styles.section}>
        <img loading="lazy" src={threeBoxesSVG} alt="" className={styles.beautyImgTop} />
        <img loading="lazy" src={shipSVG} alt="" className={styles.beautyImgBottom} />
        <h1 className={styles.title}>Почему выбирают нас</h1>

        {/* Десктоп — журналоподобное расположение карточек */}
        <div className={styles.desktopContainer}>
          {reorderedCards.map((card, index) => {
            let cardClass = styles.card;
            if (card.title === "ВЭД под ключ") {
              cardClass = `${styles.card} ${styles.highlightSmall}`;
            } else if (highlightedTitles.includes(card.title)) {
              cardClass = `${styles.card} ${styles.highlight}`;
            }
            return (
                <ScrollAnimation key={card.title} animateIn={`animate__fadeIn${index % 2 ? "Right" : "Left"}Big`}
                                 animateOnce={true} className={cardClass}>
              <div>
                <img
                    loading="lazy"
                  src={card.image}
                  alt={card.title}
                  className={styles.image}
                />
                <h2 className={styles.cardTitle}>{card.title}</h2>
                <p className={styles.description}>{card.description}</p>
                <button
                  className={styles.button}
                  onClick={() => setIsModalOpen(true)}
                >
                  Подробнее
                </button>
              </div>
                 </ScrollAnimation>
            );
          })}
        </div>

        {/* Мобильный слайдер */}
        <div className={styles.mobileContainer}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            className={styles.swiper}
          >
            {reorderedCards.map((card, index) => {
              let cardClass = styles.card;
              if (card.title === "ВЭД под ключ") {
                cardClass = `${styles.card} ${styles.highlightSmall}`;
              } else if (highlightedTitles.includes(card.title)) {
                cardClass = `${styles.card} ${styles.highlight}`;
              }
              return (
                <SwiperSlide key={index}>
                  <div className={cardClass}>
                    <img
                        loading="lazy"
                      src={card.image}
                      alt={card.title}
                      className={styles.image}
                    />
                    <h2 className={styles.cardTitle}>{card.title}</h2>
                    <p className={styles.description}>{card.description}</p>
                    <button
                      className={styles.button}
                      onClick={() => setIsModalOpen(true)}
                    >
                      Подробнее
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {isModalOpen && <ModalForm closeModal={() => setIsModalOpen(false)} />}
      </div>
    </Element>
  );
};
