import style from "./burger.module.css";
import { Header } from "../header";
import telegram from "../../images/telegram.png";
import draw from "../../images/burger-draw.png";
import { Element } from "react-scroll";
import { InfoPageSubtitle } from "../info-page-subtitle/info-page-subtitle";

export const Burger = () => {
  return (
    <Element name="burger">
      <div className={style.container}>
        <div className={style.containerTitle}>
          <div className={style.text}>О компании</div>
          <div className={style.text}>Карта</div>
          <div className={style.text}>Расчет стоимости</div>
          <div className={style.text}>Преимущества</div>
          <div className={style.text}>Контакты</div>
          <div className={style.text}>Услуги</div>
          <div className={style.containerBtn}>
            <button className={style.button}>Позвонить</button>
            <img className={style.telegram} src={telegram} alt="" />
          </div>
        </div>
        <img className={style.draw} src={draw} alt="" />
      </div>
    </Element>
  );
};
