import style from "./index.module.css";
import logo from "../../images/logo.png";
import drawing from "../../images/drawing.png";
import ship from "../../images/ship.png";
import truck from "../../images/slider-truck.png";
import airplane from "../../images/slider-airplane.png";
import train from "../../images/slider-train.png";
import { Element } from "react-scroll";
import { ImageSlider } from "../../components/slider/slider";

export const LandingBlock = () => {
  return (
    <Element name="landing">
      <div className={style.container}>
        {/*<img className={style.ship} src={ship} alt="ship" />*/}

        {/*<div className={style.block}>*/}
        {/*  <div className={style.logoBlock}>*/}
        {/*    <img className={style.logo} src={logo} alt="logo" />*/}
        {/*    <div className={style.textBlock}>*/}
        {/*      <span className={style.time}>TIME</span>*/}
        {/*      <span className={style.transit}>transit</span>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className={style.textDownLogo}>*/}
        {/*    Доставка грузов из Азии в Россию и страны СНГ с 1997 года.*/}
        {/*  </div>*/}
        {/*  <img className={style.drawing} src={drawing} alt="drawing" />*/}
        {/*  <button className={style.buttonOnline}>*/}
        {/*    <span className={style.buttonText}>Запрос он-лайн</span>*/}
        {/*  </button>*/}
        {/*</div>*/}

        <ImageSlider images={[ship, truck, airplane, train]} />
      </div>
    </Element>
  );
};
