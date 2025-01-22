import style from "./company-old.module.css";
import exportImg from "../../images/export.png";
import importImg from "../../images/import.png";
import keyImg from "../../images/key.png";
import knrImg from "../../images/knr.png";
import backCompany from "../../images/backCompany.png";
import draw2 from "../../images/draw2.png";
import { Element } from "react-scroll";

export const CompanyOld = () => {
  return (
    <Element name="company">
      <div
        className={style.parentCompany}
        data-section
        data-bgcolor="rgba(166, 34, 38, 0.9)"
      >
        <h1 className={style.titleCompany}>О компании</h1>

        <div className={style.backCompany}></div>
        <div className={style.blockCompany}>
          <div className={style.plate}>
            <img className={style.export} src={exportImg} alt="" />
            <div className={style.plateTitleContainerBlack}>
              <h2 className={style.plateTitle}>Экспорт</h2>
            </div>
          </div>
          <div className={style.plate}>
            <img className={style.import} src={importImg} alt="" />
            <div className={style.plateTitleContainerRed}>
              <h2 className={style.plateTitle}>Импорт</h2>
            </div>
          </div>
          <div className={style.plate}>
            <img className={style.knr} src={knrImg} alt="" />
            <div className={style.plateTitleContainerRed}>
              <h2 className={style.plateTitle}>Платежи в КНР</h2>
            </div>
          </div>
          <div className={style.plate}>
            <img className={style.key} src={keyImg} alt="" />
            <div className={style.plateTitleContainerBlack}>
              <h2 className={style.plateTitle}>ВЭД под ключ</h2>
            </div>
          </div>
        </div>
        <img className={style.draw2} src={draw2} alt="" />
      </div>
    </Element>
  );
};
