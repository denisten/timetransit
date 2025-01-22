import { useEffect } from "react";

const initColor = "transparent";
const colorAttributeName = "data-bgcolor";

export const useObserveScroll = (setBgColor) => {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionColor = entry.target.getAttribute(colorAttributeName);
            setBgColor(sectionColor || initColor); // Меняем фон на указанный цвет
          }
        });
      },
      { threshold: 0.5 }, // Срабатывает, когда половина блока видна
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setBgColor]);
};
