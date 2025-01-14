import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./slider.module.css";
import style from "../../blocks/landing-block/index.module.css";
import logo from "../../images/logo.png";
import drawing from "../../images/drawing.png";

const settings = {
  dots: true,
  // fade: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: false,
  // autoplay: true,
};

export const ImageSlider = ({ images }) => {
  return (
    <div className={s.sliderContainer}>
      <Slider {...settings}>
        {images.map((image) => (
          <div className={style.container}>
            <div className={style.block}>
              <div className={style.logoBlock}>
                <img className={style.logo} src={logo} alt="logo" />
                <div className={style.textBlock}>
                  <span className={style.time}>TIME</span>
                  <span className={style.transit}>transit</span>
                </div>
              </div>
              <div className={style.textDownLogo}>
                Доставка грузов из Азии в Россию и страны СНГ с 1997 года.
              </div>
              <img className={style.drawing} src={drawing} alt="drawing" />
              <button className={style.buttonOnline}>
                <span className={style.buttonText}>Запрос он-лайн</span>
              </button>
            </div>
            <img src={image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
