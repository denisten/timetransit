import React, { useState } from "react";
import styles from "./index.module.css";
import truckSVG from "../../icons/truck.svg";
import warehouseSVG from "../../icons/warehouse.svg";
import planeSVG from "../../icons/plane.svg";
import paymentSVG from "../../icons/yuan-currency.svg";
import globalSVG from "../../icons/global-trage.svg";
import { ModalForm } from "../../components/modal-form";
import { Element } from "react-scroll";
import ship from "../../icons/ship.svg";
import threeBoxes from "../../icons/three-boxes.svg";

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
    image: planeSVG,
    title: "Скорость – ключевой фактор",
    description:
      "Скорость доставки – наш приоритет для сохранения качества товаров, таких как медикаменты и пресса.",
  },
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
];

export const DeliveryBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Element
      name="company"
      className={styles.blockContainer}
      data-section
      data-bgcolor="rgba(166, 34, 38, 0.9)"
    >
      <div className={styles.section}>
        <h1 className={styles.title}>Почему выбирают нас</h1>
        <img src={threeBoxes} alt="" className={styles.beautyImgTop} />
        <img src={ship} alt="" className={styles.beautyImgBottom} />
        <div className={styles.container}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <img src={card.image} alt={card.title} className={styles.image} />
              <h2 className={styles.cardTitle}>{card.title}</h2>
              <p className={styles.description}>{card.description}</p>
              <button className={styles.button} onClick={openModal}>
                Подробнее
              </button>
            </div>
          ))}
        </div>

        {isModalOpen && <ModalForm closeModal={closeModal} />}
      </div>
    </Element>
  );
};
