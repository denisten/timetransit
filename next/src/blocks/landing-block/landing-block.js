import style from "./index.module.css";
import { Element } from "react-scroll";
import { Box } from "@mui/material";
import { Slider } from "@/components";
import dynamic from "next/dynamic";
const CallOrderForm = dynamic(() => import('@/components/call-order-form'), {
    ssr: false,
})
import {useEffect} from "react";
import {heroBlockVideos} from "@/blocks/landing-block/data";

const Content = ({ item }) => {
  const { src, text } = item;
    const isMobile = false
    // const isMobile = window.innerWidth < 600;

    useEffect(() => {
        if (!isMobile) {
            setTimeout(() => {
                const video = document.getElementById("hero-video");
                video?.load();
            }, 3000);
        }
    }, [isMobile]);
  return (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {isMobile ? (
              <img
                  src="/images/hero.webp"
                  srcset="/images/hero-small.webp 600w, /images/hero.webp 1200w"
                  sizes="(max-width: 600px) 600px, 1200px"
                  alt="hero"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="high"
              />
          ) : (
              <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  preload="none"
                  poster="/images/hero.webp"
                  id="hero-video"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
          )}

          <div className={style.overlay}>
              <div className={style.container}>
                  <div className={style.contentContainer}>
                      <div className={style.logoBlock}>
                          <img className={style.logo} src="/images/logo.svg" alt="logo" loading="lazy" />
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
  const isMobile = false;
  // const isMobile = window.innerWidth < 600;
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
        <Slider data={heroBlockVideos} Content={Content} autoplay />
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
