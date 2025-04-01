import style from "./calculation.module.css";
import calculation from "../../images/calculation.png";
import back from "../../images/back.png";
import classNames from "classnames";
import { Element } from "react-scroll";
export const Calculation = () => {
  return (
    <Element name="calculation">
      <div>
        <div className={style.container}>
          <div className={style.title}>
            <span className={style.titleBlack}>Рассчитать</span>
            <span className={style.titleRed}>стоимость</span>
          </div>
          <img className={style.back} src={back} alt="" loading="lazy" />
          <img className={style.img} src={calculation} alt="" loading="lazy" />

          <div className={style.formContainer}>
            <div className={style.typesContainer}>
              <span className={classNames(style.type, style.selected)}>
                Авиа
              </span>
              <span className={style.type}>Ж/Д</span>
              <span className={style.type}>Море</span>
              <span className={style.type}>Авто</span>
            </div>
            <div className={style.containerLine}>
              <div className={style.lineInput}>
                <input
                  className={style.input}
                  type="text"
                  placeholder={"Откуда"}
                />
              </div>
              <div className={style.lineInput}>
                <input
                  className={style.input}
                  type="text"
                  placeholder={"Куда"}
                />
              </div>
              <div className={style.lineInput}>
                <input
                  className={style.input}
                  type="text"
                  placeholder={"Имя"}
                />
              </div>
              <div className={style.lineInput}>
                <input
                  className={style.input}
                  type="number"
                  placeholder={"Номер телефона"}
                />
              </div>
            </div>
            <button className={style.button}>Отправить заявку</button>
          </div>
        </div>
      </div>
    </Element>
  );
};
