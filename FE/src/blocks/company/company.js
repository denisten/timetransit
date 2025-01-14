import style from "./company.module.css";
import exportImg from "../../images/export.png";
import importImg from "../../images/import.png";
import keyImg from "../../images/key.png";
import knrImg from "../../images/knr.png";
import backCompany from "../../images/backCompany.png";
import draw2 from "../../images/draw2.png";
import { Element } from "react-scroll";

export const Company = () => {
  return (
    <Element name="company">
      <div className={style.parentCompany}>
        <span className={style.titleCompany}>О компании</span>

        <div className={style.backCompany}></div>
        <div>
          <div className={style.blockCompany}>
            <div className={style.plate}>
              <img className={style.export} src={exportImg} alt="" />
              <div className={style.plateTitleContainerBlack}>
                <span className={style.plateTitle}>Экспорт</span>
              </div>
            </div>
            <div className={style.plate}>
              <img className={style.import} src={importImg} alt="" />
              <div className={style.plateTitleContainerRed}>
                <span className={style.plateTitle}>Импорт</span>
              </div>
            </div>
            <div className={style.plate}>
              <img className={style.knr} src={knrImg} alt="" />
              <div className={style.plateTitleContainerRed}>
                <span className={style.plateTitle}>Платежи в КНР</span>
              </div>
            </div>
            <div className={style.plate}>
              <img className={style.key} src={keyImg} alt="" />
              <div className={style.plateTitleContainerBlack}>
                <span className={style.plateTitle}>ВЭД под ключ</span>
              </div>
            </div>
          </div>
        </div>
        <img className={style.draw2} src={draw2} alt="" />
      </div>
    </Element>
  );
};
