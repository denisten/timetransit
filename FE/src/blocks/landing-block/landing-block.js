import style from "./index.module.css";
import logo from "../../images/logo.svg";
import { Element } from "react-scroll";
import bridge from "../../videos/slider-video-cargo-port-with-bridge.mp4";
import ship from "../../videos/slider-video-ship.mp4";
import port from "../../videos/slider-video-cargo-port.mp4";
import { Box } from "@mui/material";

import { CallOrderForm } from "../../components/call-order-form";
import { Slider } from "../../components/slider/slider";
import {useEffect} from "react";
const videos = [

    {
        src: port,
        text: "Более 25 лет осуществляем поиск и доставку товаров из Китая в Россию напрямую от производителя",
    },
  {
    src: bridge,
      text: "Мы обеспечиваем надежную доставку корреспонденции, товаров и грузов с полной прозрачностью и ответственностью.",

  },
  {
    src: ship,
      text: "Наша миссия - создавать удобные и безопасные логистические решения для клиентов, гарантируя индивидуальный подход.",
  },
];

const Content = ({ item }) => {
  const { src, text } = item;
    useEffect(() => {
        setTimeout(() => {
            const video = document.getElementById('hero-video');
            video?.load();
        }, 3000);
    }, []);
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <video
        src={src}
        autoPlay
        loop
        poster="/images/video-poster.png"
        muted
        id="hero-video"
        preload="none"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div className={style.overlay}>
        <div className={style.container}>
          <div className={style.contentContainer}>
            <div className={style.logoBlock}>
              <img className={style.logo} src={logo} alt="logo" />
              <div className={style.textBlock}>
                <h1 className={style.time}>TIME</h1>
                <h2 className={style.transit}>transit</h2>
              </div>
            </div>
            <div className={style.text}>{text}</div>
          </div>
        </div>
      </div>
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
      data-section
      data-bgcolor="transparent"
    >
      <Element name="landing">
        <Slider data={videos} Content={Content} autoplay={false} />
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
      </Element>
    </Box>
  );
};
