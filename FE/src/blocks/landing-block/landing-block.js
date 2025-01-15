import style from "./index.module.css";
import logo from "../../images/logo.png";
// import ship from "../../images/ship.png";
// import truck from "../../images/slider-truck.png";
// import airplane from "../../images/slider-airplane.png";
import train from "../../images/slider-train.png";
import { Element } from "react-scroll";
import bridge from "../../videos/slider-video-cargo-port-with-bridge.mp4";
import ship from "../../videos/slider-video-ship.mp4";
import port from "../../videos/slider-video-cargo-port.mp4";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { ImageSlider } from "../../components/slider/slider";
import { SwiperSlide, Swiper } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { TextField, Button, MenuItem, Box, Typography } from "@mui/material";

import { CallOrderForm } from "../../components/call-order-form";
const videos = [
  {
    src: bridge,
    text: "Доставка грузов из Азии в Россию и страны СНГ с 1997 года",
  },
  { src: ship, text: "Международная логистика на новом уровне" },
  { src: port, text: "Мультимодальные перевозки — гибко и выгодно" },
];

const Content = ({ text }) => {
  return (
    <div className={style.contentContainer}>
      <div className={style.logoBlock}>
        <img className={style.logo} src={logo} alt="logo" />
        <div className={style.textBlock}>
          <span className={style.time}>TIME</span>
          <span className={style.transit}>transit</span>
        </div>
      </div>
      <div className={style.textDownLogo}>{text}</div>
    </div>
  );
};

export const LandingBlock = () => {
  const isMobile = window.innerWidth < 600;
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{ width: "100%", height: "100vh" }}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <video
                src={video.src}
                autoPlay
                loop
                muted
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className={style.overlay}>
                <div className={style.container}>
                  <Content text={video.text} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {!isMobile ? (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "5%",
            transform: "translateY(-50%)",
            width: { sm: "20%", xl: "30%", md: "30%" }, // Адаптивная ширина: 90% для моб., 50% для десктопа
            padding: 4,
            zIndex: 100,
            borderRadius: 2,
          }}
        >
          <CallOrderForm />
        </Box>
      ) : null}
    </Box>
  );
};
