import React, { useState } from "react";
import styles from "./advantages-block.module.css";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ModalForm } from "@/components/modal-form";
// import ScrollAnimation from "react-animate-on-scroll";
import { motion } from "framer-motion";

const cards = [
  {
    image: "/icons/truck.svg",
    title: "Оперативная доставка",
    description:
      "Мы обеспечиваем быструю и безопасную доставку товаров, включая корреспонденцию, подарки и медицинские грузы.",
  },
  {
    image: '/icons/warehouse.svg',
    title: "Полный цикл услуг",
    description:
      "От отправки до таможенной очистки – мы берём на себя все этапы доставки.",
  },
  {
    image: "/icons/warehouse-clock.svg",
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
    image: "/icons/yuan-currency.svg",
    title: "Платежи в КНР",
    description:
      "Организуем безопасные и прозрачные финансовые операции для расчётов с китайскими поставщиками.",
  },
  {
    image: "/icons/global-trage.svg",
    title: "ВЭД под ключ",
    description:
      "Предоставляем услуги внешнеэкономической деятельности: от поиска поставщика до доставки товаров на ваш склад.",
  },
  {
    image: "/icons/warehouse-1.svg",
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
        <img loading="lazy" src="/icons/three-boxes.svg" alt="" className={styles.beautyImgTop} />
        <img loading="lazy" src="/icons/ship.svg" alt="" className={styles.beautyImgBottom} />
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
                  <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className={cardClass}
                      key={card.title}
                  >
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
                  </motion.div>
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
                <SwiperSlide key={card.title}>
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
