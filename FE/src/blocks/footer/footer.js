import style from "./footer.module.css";
import backImg from "../../images/footerImg.png";
import { LandingBlock } from "../landing-block";
import { Element } from "react-scroll";
export const Footer = () => {
  const isMobile = window.innerWidth < 769;

  return (
    <div className={style.container}>
      <img className={style.backImg} src={backImg} alt="" />
      <div className={style.contentContainer}>
        <div className={style.list}>
          <div className={style.containerLogo}>
            <span className={style.logoTime}>TIME</span>
            <span className={style.logoTransit}>transit</span>
          </div>
          {isMobile ? (
            <button className={style.button}>
              <span className={style.buttonText}>Позвонить</span>
            </button>
          ) : (
            <button className={style.button}>
              <span className={style.buttonText}>Узнать цену</span>
            </button>
          )}
        </div>
        <div className={style.list}>
          <div className={style.gapText}>
            <div className={style.text}>
              Адрес: г. Москва, ул. Ленинский пр-т, д.113/1, оф. Е310
              (10:00-19:00)
            </div>
            <div className={style.text}>Показать на карте</div>
            <div className={style.text}>info@timetransit.com</div>
            <div className={style.text}>
              Московское представительство "Time Transit" © 2022г.
            </div>
          </div>
          <Element name="contacts">
            <div className={style.numberText}>
              <div className={style.numberText}>+7 (495) 969-29-90</div>
              <div className={style.numberText}>+7 (495) 969-29-91 </div>
              <div className={style.numberText}>+7 (495) 961-75-61</div>
              <div className={style.numberText}>+7 (964) 562-47-82</div>
              <div className={style.numberText}>+7 (916) 561-56-26</div>
            </div>
          </Element>
        </div>
      </div>
    </div>
  );
};
