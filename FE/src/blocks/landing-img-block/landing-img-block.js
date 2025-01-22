import style from "./index.module.css";
import { Element } from "react-scroll";
import { Box } from "@mui/material";
import { Slider } from "../../components/slider/slider";
import sunset from "../../images/landing-img-sunset.jpg";
import port from "../../images/landing-img-port.jpg";
import hamburg from "../../images/landing-img-hamburg.jpg";
import logo from "../../images/logo.png";
const data = [sunset, port, hamburg];

const SlideContent = ({ item }) => {
  return (
    <div className={style.sliderContainer}>
      <img alt="" src={item} className={style.sliderImg} />
      <div className={style.content}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" className={style.logo} />
          <div className={style.title}>
            <h1 className={style.titleL}>TIME</h1>
            <h1 className={style.titleS}>transit</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export const LandingImgBlock = () => {
  const isMobile = window.innerWidth < 600;
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
      className={style.landingContainer}
      data-section
      data-bgcolor="transparent"
    >
      <Element name="landing">
        <Slider data={data} Content={SlideContent} autoplay={true} />
        {/*<div className={style.overlay} />*/}
      </Element>
    </Box>
  );
};
