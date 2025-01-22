import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
const autoplaySettings = {
  delay: 3000,
  disableOnInteraction: false,
};
export const Slider = ({
  data,
  Content,
  activeIndex,
  autoplay = false,
  isFullHeight = true,
}) => {
  const swiperRef = useRef(null); // Ссылка на экземпляр Swiper

  // Обновляем активный слайд при изменении пропса activeIndex
  useEffect(() => {
    if (swiperRef.current && activeIndex !== undefined) {
      swiperRef.current.slideToLoop(activeIndex); // Переключаем на нужный слайд с учётом loop
    }
  }, [activeIndex]);

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={autoplay ? autoplaySettings : undefined}
      onSwiper={(swiper) => (swiperRef.current = swiper)} // Получаем экземпляр Swiper
      style={{ width: "100%", height: isFullHeight ? "100vh" : "auto" }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <Content item={item} isActive={index === activeIndex} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
