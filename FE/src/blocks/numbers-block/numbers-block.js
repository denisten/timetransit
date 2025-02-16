import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { Counter } from "../../components/counter";
import boxes from "../../icons/boxes.svg";
import boat from "../../icons/boat.svg";
const stats = [
  { number: "20", label: "лет работы в логистике" },
  { number: "1000", label: "сотрудников" },
  { number: "10000", label: "успешных доставок в год" },
  { number: "500", label: "довольных клиентов" },
  { number: "50", label: "партнёров по всему миру" },
];

export const NumbersBlock = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  // Intersection Observer для отслеживания видимости секции
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <section
      className={styles.container}
      data-section
      data-bgcolor="rgba(166, 34, 38, 0.9)"
      ref={ref}
    >
      <img src={boxes} alt="" className={styles.beautyImgTop} />
      <img src={boat} alt="" className={styles.beautyImgBottom} />
      <h1 className={styles.title}>Доверие, подтвержденное цифрами</h1>
      <div className={styles.stats}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <span className={styles.number}>
              {index > 0 ? ">" : ""}
              {visible ? <Counter end={stat.number} /> : 0}
            </span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
